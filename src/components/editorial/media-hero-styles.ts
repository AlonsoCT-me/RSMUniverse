import type {
  HeroHeight,
  HeroOverlayOptions,
  HeroResponsive,
  MediaHeroProps,
  MediaHeroStyle,
} from "./MediaHero.types";

const HEIGHTS = {
  small: { height: "480px", minHeight: "360px" },
  medium: { height: "640px", minHeight: "480px" },
  large: { height: "min(860px, 100svh)", minHeight: "660px" },
  fullscreen: { height: "100svh", minHeight: "0px" },
};
const DIRECTIONS = {
  "left-to-right": "90deg",
  "right-to-left": "270deg",
  "top-to-bottom": "180deg",
  "bottom-to-top": "0deg",
};
const ALIGN = { left: "start", center: "center", right: "end", top: "start", bottom: "end" };
const clamp = (n: number, fallback: number, max = 1) =>
  Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : fallback;

function responsive<T>(input: HeroResponsive<T> | undefined, fallback: T): [T, T, T] {
  const desktop = input?.desktop ?? fallback;
  const tablet = input?.tablet ?? desktop;
  return [desktop, tablet, input?.mobile ?? tablet];
}
function mergedResponsive<T extends object>(
  input: HeroResponsive<T> | undefined,
  fallback: T,
): [T, T, T] {
  const desktop = { ...fallback, ...input?.desktop };
  const tablet = { ...desktop, ...input?.tablet };
  return [desktop, tablet, { ...tablet, ...input?.mobile }];
}
function heightValue(value: HeroHeight) {
  return typeof value === "string" ? HEIGHTS[value] : value;
}
function inset(value: string | undefined) {
  if (!value) return "0px";
  return /^\d+(?:\.\d+)?%$/.test(value)
    ? `calc(var(--media-hero-effective-height) * ${parseFloat(value) / 100})`
    : value;
}
function overlayValue(value: HeroOverlayOptions) {
  const opacity = clamp(value.opacity ?? 0.65, 0.65);
  const color = (alpha: number) =>
    `color-mix(in srgb, var(--media-hero-overlay-color, var(--${value.color ?? "dark"})) ${clamp(alpha, opacity) * 100}%, transparent)`;
  if (value.type === "none") return "none";
  if (value.type === "solid") return `linear-gradient(${color(opacity)}, ${color(opacity)})`;
  const stops = value.stops?.length
    ? value.stops
    : [
        { opacity, position: 0 },
        { opacity: 0, position: 100 },
      ];
  return `linear-gradient(${DIRECTIONS[value.direction ?? "left-to-right"]}, ${stops.map((s) => `${color(s.opacity)} ${clamp(s.position, 0, 100)}%`).join(", ")})`;
}

export function mediaHeroStyles(props: MediaHeroProps): MediaHeroStyle {
  const variables: Record<`--media-hero-${string}`, string | number> = {};
  const heights = responsive(props.height, "large" as HeroHeight).map(heightValue);
  const positions = mergedResponsive(props.contentPosition, {
    horizontal: "left",
    vertical: "center",
    textAlign: "left",
  });
  const insets = mergedResponsive(props.contentInsets, {});
  const visibility = responsive(props.contentVisibility, true);
  const flatOverlay = props.overlay && "type" in props.overlay ? props.overlay : undefined;
  const overlays = responsive(
    flatOverlay
      ? { desktop: flatOverlay }
      : (props.overlay as HeroResponsive<HeroOverlayOptions> | undefined),
    { type: "gradient", color: "dark", opacity: 0.65 } as HeroOverlayOptions,
  );
  const imagePositions = props.variant === "video" ? props.fallbackImage : props.media;
  const desktopPosition = imagePositions.desktop.objectPosition ?? "center";
  const tabletPosition = imagePositions.tablet?.objectPosition ?? desktopPosition;
  const sourcePositions = [
    desktopPosition,
    tabletPosition,
    imagePositions.mobile?.objectPosition ?? tabletPosition,
  ];
  for (const [i, device] of ["desktop", "tablet", "mobile"].entries()) {
    const h = heights[i];
    const position = positions[i];
    const pad = insets[i];
    const overlay = overlays[i];
    variables[`--media-hero-height-${device}`] = h.height.replace(/(?:s|d|l)vh/g, "vh");
    variables[`--media-hero-height-modern-${device}`] = h.height;
    variables[`--media-hero-min-height-${device}`] = h.minHeight ?? "0px";
    variables[`--media-hero-horizontal-${device}`] = ALIGN[position.horizontal ?? "left"];
    variables[`--media-hero-vertical-${device}`] = ALIGN[position.vertical ?? "center"];
    variables[`--media-hero-text-align-${device}`] = position.textAlign ?? "left";
    variables[`--media-hero-inset-top-${device}`] = inset(pad.top);
    variables[`--media-hero-inset-bottom-${device}`] = inset(pad.bottom);
    variables[`--media-hero-inset-left-${device}`] = pad.left ?? "0px";
    variables[`--media-hero-inset-right-${device}`] = pad.right ?? "0px";
    variables[`--media-hero-content-display-${device}`] = visibility[i] ? "grid" : "none";
    variables[`--media-hero-overlay-${device}`] = overlayValue(overlay);
    const vertical = overlay.direction === "top-to-bottom" || overlay.direction === "bottom-to-top";
    const coverage = `${clamp(overlay.coverage ?? 100, 100, 100)}%`;
    variables[`--media-hero-overlay-width-${device}`] = vertical ? "100%" : coverage;
    variables[`--media-hero-overlay-height-${device}`] = vertical ? coverage : "100%";
    variables[`--media-hero-overlay-top-${device}`] =
      overlay.direction === "bottom-to-top" ? "auto" : "0px";
    variables[`--media-hero-overlay-bottom-${device}`] =
      overlay.direction === "bottom-to-top" ? "0px" : "auto";
    variables[`--media-hero-overlay-left-${device}`] =
      overlay.direction === "right-to-left" ? "auto" : "0px";
    variables[`--media-hero-overlay-right-${device}`] =
      overlay.direction === "right-to-left" ? "0px" : "auto";
    variables[`--media-hero-overlay-max-width-${device}`] = overlay.maxWidth ?? "none";
    variables[`--media-hero-image-position-${device}`] = sourcePositions[i];
    const shown =
      props.index?.visible !== false &&
      (device === "desktop" ||
        (device === "tablet" ? props.index?.tabletVisible : props.index?.mobileVisible) !== false);
    variables[`--media-hero-index-display-${device}`] = shown ? "block" : "none";
  }
  variables["--media-hero-text-color"] = `var(--${props.textColor ?? "white"})`;
  variables["--media-hero-content-max-width"] =
    typeof props.contentMaxWidth === "number"
      ? `${props.contentMaxWidth}px`
      : (props.contentMaxWidth ?? "720px");
  return { ...variables, ...props.style };
}
