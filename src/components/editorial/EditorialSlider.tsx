import { useEffect, useRef, useState } from "react";
import type * as React from "react";
import { Icon } from "../ui/Icon";
import type { EditorialSlide, EditorialSliderOptions } from "./EditorialSplitSection.types";

interface EditorialSliderProps {
  slides: readonly EditorialSlide[];
  options?: EditorialSliderOptions;
  labelledBy: string;
}

// A changed image set starts a fresh carousel; option changes preserve selection.
export function EditorialSlider({ slides, ...props }: EditorialSliderProps) {
  const validSlides = slides.filter((slide) => slide.imageSrc.trim());
  return (
    <EditorialSliderContent key={JSON.stringify(validSlides)} {...props} slides={validSlides} />
  );
}

function EditorialSliderContent({ slides, options, labelledBy }: EditorialSliderProps) {
  const {
    arrows = true,
    dots = true,
    pauseButton = true,
    animation = "fade",
    duration = 600,
    loop = true,
    autoplay = false,
    autoplayInterval = 5000,
  } = options ?? {};
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<ReadonlySet<string>>(() => new Set());
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [navigationCycle, setNavigationCycle] = useState(0);
  const [hidden, setHidden] = useState(() => typeof document !== "undefined" && document.hidden);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const sliderRef = useRef<HTMLDivElement>(null);
  const elapsed = useRef(0);
  const gesture = useRef<{ x: number; y: number; pointerId: number } | null>(null);
  const images = slides.filter((slide) => !failedImages.has(slide.imageSrc));
  const count = images.length;
  const activeIndex = Math.min(selectedIndex, Math.max(0, count - 1));
  const multiple = count > 1;
  const atEnd = !loop && activeIndex === count - 1;
  const playing = autoplay && multiple && !paused && !reducedMotion && !atEnd;
  const running = playing && !hovered && !hidden && !keyboardFocused;
  const safeDuration = Number.isFinite(duration) ? Math.max(0, duration) : 600;
  const safeInterval =
    Number.isFinite(autoplayInterval) && autoplayInterval > 0 ? autoplayInterval : 5000;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(media.matches);
    const onVisibility = () => setHidden(document.hidden);
    media.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      media.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    elapsed.current = 0;
    sliderRef.current?.style.setProperty(
      "--story-slider-progress",
      autoplay && multiple && !atEnd && !reducedMotion ? "0" : "1",
    );
  }, [
    activeIndex,
    count,
    safeInterval,
    loop,
    autoplay,
    multiple,
    atEnd,
    reducedMotion,
    navigationCycle,
  ]);

  // One clock drives both the countdown and its fill, without rendering every frame.
  useEffect(() => {
    if (!running) return;
    const startedAt = performance.now() - elapsed.current;
    let frame: number;

    function tick(now: number) {
      elapsed.current = Math.min(now - startedAt, safeInterval);
      sliderRef.current?.style.setProperty(
        "--story-slider-progress",
        String(elapsed.current / safeInterval),
      );
      if (elapsed.current >= safeInterval) {
        setSelectedIndex((index) =>
          loop ? (Math.min(index, count - 1) + 1) % count : Math.min(index + 1, count - 1),
        );
        return;
      }
      frame = window.requestAnimationFrame(tick);
    }

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      elapsed.current = Math.min(performance.now() - startedAt, safeInterval);
      sliderRef.current?.style.setProperty(
        "--story-slider-progress",
        String(elapsed.current / safeInterval),
      );
    };
  }, [running, safeInterval, activeIndex, count, loop, navigationCycle]);

  function navigate(index: number) {
    if (!multiple) return;
    setNavigationCycle((cycle) => cycle + 1);
    setSelectedIndex(loop ? (index + count) % count : Math.max(0, Math.min(index, count - 1)));
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!multiple || event.altKey || event.ctrlKey || event.metaKey) return;
    const destination = {
      ArrowLeft: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      Home: 0,
      End: count - 1,
    }[event.key];
    if (destination === undefined) return;
    event.preventDefault();
    navigate(destination);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (
      !multiple ||
      event.pointerType === "mouse" ||
      !event.isPrimary ||
      (event.target as Element).closest("button")
    )
      return;
    gesture.current = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const start = gesture.current;
    gesture.current = null;
    if (!start || start.pointerId !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.25)
      navigate(activeIndex + (dx < 0 ? 1 : -1));
  }

  return (
    <div
      ref={sliderRef}
      className={`story-split__slider story-split__slider--${animation}`}
      style={{ "--story-slider-duration": `${safeDuration}ms` } as React.CSSProperties}
      role="region"
      aria-roledescription="carrusel"
      aria-labelledby={labelledBy}
      tabIndex={multiple ? 0 : undefined}
      onKeyDown={onKeyDown}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) setKeyboardFocused(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false);
      }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        gesture.current = null;
      }}
    >
      <div className="story-split__slider-track">
        {images.map((slide, index) => (
          <div
            key={`${slide.imageSrc}-${index}`}
            className={`story-split__slide${index === activeIndex ? " is-active" : ""}`}
            style={{
              transform:
                animation === "slide" ? `translateX(${(index - activeIndex) * 100}%)` : undefined,
            }}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${count}`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex}
          >
            <img
              src={slide.imageSrc}
              alt={slide.imageAlt}
              style={{ objectPosition: slide.objectPosition }}
              draggable={false}
              onError={() => setFailedImages((failed) => new Set([...failed, slide.imageSrc]))}
            />
          </div>
        ))}
      </div>
      {multiple && arrows ? (
        <>
          <button
            type="button"
            className="story-split__slider-arrow story-split__slider-arrow--prev"
            aria-label="Imagen anterior"
            disabled={!loop && activeIndex === 0}
            onClick={() => navigate(activeIndex - 1)}
          >
            <Icon name="arrow" size={20} />
          </button>
          <button
            type="button"
            className="story-split__slider-arrow story-split__slider-arrow--next"
            aria-label="Imagen siguiente"
            disabled={atEnd}
            onClick={() => navigate(activeIndex + 1)}
          >
            <Icon name="arrow" size={20} />
          </button>
        </>
      ) : null}
      {multiple && dots ? (
        <div className="story-split__slider-dots" role="group" aria-label="Seleccionar imagen">
          {images.map((slide, index) => (
            <button
              key={`${slide.imageSrc}-${index}`}
              type="button"
              className="story-split__slider-dot"
              aria-label={`Ir a imagen ${index + 1}: ${slide.imageAlt}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => navigate(index)}
            />
          ))}
        </div>
      ) : null}
      {multiple && autoplay && pauseButton ? (
        <button
          type="button"
          className="story-split__slider-play"
          disabled={reducedMotion}
          aria-label={playing ? "Pausar presentación" : "Reanudar presentación"}
          onClick={() => {
            if (atEnd) setSelectedIndex(0);
            setPaused(playing);
          }}
        >
          {reducedMotion ? "Movimiento reducido" : playing ? "Pausar" : "Reanudar"}
        </button>
      ) : null}
      <span
        className="story-split__slider-status"
        aria-live={playing ? "off" : "polite"}
        aria-atomic="true"
      >
        {count ? `Imagen ${activeIndex + 1} de ${count}` : "No hay imágenes disponibles"}
      </span>
    </div>
  );
}
