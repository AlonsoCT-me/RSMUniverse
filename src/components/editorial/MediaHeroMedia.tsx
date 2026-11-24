import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type * as React from "react";
import { Icon } from "../ui/Icon";
import type { HeroImageMedia, MediaHeroVideoProps } from "./MediaHero.types";

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (listener: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export function HeroPicture({
  media,
  alt = "",
  decorative = true,
  priority = false,
  fallbackSrc,
}: {
  media: HeroImageMedia;
  alt?: string;
  decorative?: boolean;
  priority?: boolean;
  fallbackSrc?: string;
}) {
  const [failed, setFailed] = useState<ReadonlySet<string>>(() => new Set());
  const normalize = (src: string) =>
    typeof window === "undefined" ? src : new URL(src, window.location.href).href;
  const usable = (src: string | undefined): src is string =>
    Boolean(src?.trim()) && !failed.has(normalize(src!));
  const desktop = [media.desktop.src, fallbackSrc, media.tablet?.src, media.mobile?.src].find(
    usable,
  );
  if (!desktop) return null;
  return (
    <picture className="media-hero__picture" aria-hidden={decorative || undefined}>
      {usable(media.mobile?.src) ? (
        <source media="(max-width: 540px)" srcSet={media.mobile.src} />
      ) : null}
      {usable(media.tablet?.src) ? (
        <source media="(max-width: 900px)" srcSet={media.tablet.src} />
      ) : null}
      <img
        src={desktop}
        alt={decorative ? "" : alt}
        loading="eager"
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onError={(event) => {
          const src = event.currentTarget.currentSrc || event.currentTarget.src;
          setFailed((previous) => new Set([...previous, src]));
        }}
      />
    </picture>
  );
}

export function HeroVideo({
  props,
  heroRef,
}: {
  props: MediaHeroVideoProps;
  heroRef: React.RefObject<HTMLElement | null>;
}) {
  const mobile = useMediaQuery("(max-width: 540px)");
  const tablet = useMediaQuery("(max-width: 900px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [visible, setVisible] = useState(false);
  const [tabHidden, setTabHidden] = useState(
    () => typeof document !== "undefined" && document.hidden,
  );
  const [intent, setIntent] = useState<"auto" | "play" | "pause">("auto");
  const [playing, setPlaying] = useState(false);
  const [reducedMotionConsent, setReducedMotionConsent] = useState(false);
  const [frameSource, setFrameSource] = useState<string | null>(null);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const [blocked, setBlocked] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const options = props.videoOptions;
  const autoplay = options?.autoplay ?? true;
  const desktop = props.media.desktop;
  const tabletSource = {
    ...desktop,
    ...props.media.tablet,
    src: props.media.tablet?.src || desktop.src,
  };
  const selected = mobile
    ? { ...tabletSource, ...props.media.mobile, src: props.media.mobile?.src || tabletSource.src }
    : tablet
      ? tabletSource
      : desktop;
  const staticMobile = mobile && !props.media.mobile?.src && Boolean(props.mobileFallback);
  const fallback = mobile
    ? (props.mobileFallback ??
      props.fallbackImage.mobile ??
      props.fallbackImage.tablet ??
      props.fallbackImage.desktop)
    : tablet
      ? (props.fallbackImage.tablet ?? props.fallbackImage.desktop)
      : props.fallbackImage.desktop;
  const fallbackSrc = fallback.src ?? props.fallbackImage.desktop.src;
  const poster = staticMobile ? fallbackSrc : selected.poster || fallbackSrc;
  const failed = failedSource === selected.src;
  const loadVideo =
    !staticMobile &&
    !failed &&
    Boolean(selected.src.trim()) &&
    (!reducedMotion || (intent === "play" && reducedMotionConsent));
  const shouldPlay =
    loadVideo &&
    visible &&
    !tabHidden &&
    !blocked &&
    intent !== "pause" &&
    (intent === "play" || (autoplay && !reducedMotion));

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.01,
    });
    observer.observe(node);
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [heroRef]);

  useEffect(() => {
    setReducedMotionConsent(false);
    if (reducedMotion) setIntent((previous) => (previous === "pause" ? "pause" : "auto"));
  }, [reducedMotion]);

  // Stop and detach the old resource when the device selects another source.
  useEffect(() => {
    const node = videoRef.current;
    if (!node || !loadVideo) return;
    if (node.getAttribute("src") !== selected.src) node.setAttribute("src", selected.src);
    return () => {
      node.pause();
      node.removeAttribute("src");
      node.load();
    };
  }, [selected.src, loadVideo]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    let active = true;
    if (shouldPlay) {
      if (autoplay) node.muted = true;
      if (node.paused || node.ended)
        node.play().catch(() => {
          if (active) {
            setPlaying(false);
            setBlocked(true);
          }
        });
    } else node.pause();
    return () => {
      active = false;
      node.pause();
    };
  }, [shouldPlay, selected.src, loadVideo, attempt, autoplay]);

  const posterMedia: HeroImageMedia = {
    desktop: { src: poster, objectPosition: fallback.objectPosition },
  };
  const showControl = !staticMobile && !failed && Boolean(selected.src.trim());
  return (
    <>
      <div
        className="media-hero__media"
        style={
          {
            "--media-hero-image-position":
              (staticMobile
                ? fallback.objectPosition
                : (selected.objectPosition ?? fallback.objectPosition)) ?? "center",
          } as React.CSSProperties
        }
      >
        <HeroPicture media={posterMedia} fallbackSrc={fallbackSrc} priority />
        {loadVideo ? (
          <video
            key={selected.src}
            ref={videoRef}
            className={`media-hero__video${frameSource === selected.src ? " has-frame" : ""}`}
            src={selected.src}
            poster={poster}
            preload="none"
            muted={autoplay || (options?.muted ?? true)}
            loop={options?.loop ?? true}
            playsInline={options?.playsInline ?? true}
            aria-hidden="true"
            tabIndex={-1}
            style={{ objectPosition: selected.objectPosition ?? "center" }}
            onPlaying={() => {
              setFrameSource(selected.src);
              setPlaying(true);
              setBlocked(false);
            }}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              setPlaying(false);
              setIntent("pause");
            }}
            onError={() => {
              setFailedSource(selected.src);
              setPlaying(false);
            }}
          />
        ) : null}
      </div>
      {showControl ? (
        <button
          type="button"
          className="media-hero__video-control"
          aria-label={playing ? "Pausar video de fondo" : "Reproducir video de fondo"}
          aria-pressed={playing}
          onClick={() => {
            if (playing) {
              setIntent("pause");
              videoRef.current?.pause();
            } else {
              setBlocked(false);
              setReducedMotionConsent(reducedMotion);
              setIntent("play");
              setAttempt((n) => n + 1);
              const node = videoRef.current;
              if (node) {
                if (node.ended) node.currentTime = 0;
                node.play().catch(() => {
                  if (videoRef.current === node) {
                    setPlaying(false);
                    setBlocked(true);
                  }
                });
              }
            }
          }}
        >
          <Icon name={playing ? "minus" : "arrow"} size={18} />
          <span>{playing ? "Pausar" : "Reproducir"}</span>
        </button>
      ) : null}
    </>
  );
}
