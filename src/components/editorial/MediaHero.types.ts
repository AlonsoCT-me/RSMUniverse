import type * as React from "react";
import type { SectionContainer } from "../../types/section";

export type MediaHeroVariant = "image" | "video";
export type MediaHeroContainer = SectionContainer;
export type HorizontalAlignment = "left" | "center" | "right";
export type VerticalAlignment = "top" | "center" | "bottom";
export type TextAlignment = "left" | "center" | "right";
export type MediaHeroColor =
  | "dark"
  | "white"
  | "caliza"
  | "paper"
  | "sierra"
  | "estirpe"
  | "arcilla"
  | "horizonte";
export interface HeroResponsive<T> {
  desktop?: T;
  tablet?: T;
  mobile?: T;
}
export interface HeroImageSource {
  src: string;
  objectPosition?: string;
}
export interface HeroImageOverride {
  src?: string;
  objectPosition?: string;
}
export interface HeroImageMedia {
  desktop: HeroImageSource;
  tablet?: HeroImageOverride;
  mobile?: HeroImageOverride;
}
export interface HeroVideoSource {
  src: string;
  poster?: string;
  objectPosition?: string;
}
export interface HeroVideoOverride {
  src?: string;
  poster?: string;
  objectPosition?: string;
}
export interface HeroVideoMedia {
  desktop: HeroVideoSource;
  tablet?: HeroVideoOverride;
  mobile?: HeroVideoOverride;
}
export interface HeroVideoOptions {
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}
export type HeroHeight =
  | "small"
  | "medium"
  | "large"
  | "fullscreen"
  | {
      height: string;
      minHeight?: string;
    };
export interface HeroContentPosition {
  horizontal?: HorizontalAlignment;
  vertical?: VerticalAlignment;
  textAlign?: TextAlignment;
}
export interface HeroContentInsets {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
export type MediaHeroOverlay = "none" | "solid" | "gradient";
export interface HeroGradientStop {
  opacity: number;
  position: number;
}
export interface HeroOverlayOptions {
  type: MediaHeroOverlay;
  color?: MediaHeroColor;
  opacity?: number;
  direction?: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
  /** Percentage of the hero; clamped to 0–100. */
  coverage?: number;
  /** Optional cap; coverage remains responsive below this width. */
  maxWidth?: string;
  stops?: readonly HeroGradientStop[];
}
interface HeroCtaBase {
  visible?: boolean;
  label: string;
  style?: "primary" | "light" | "outline-light";
  showIcon?: boolean;
}
export type HeroCta = HeroCtaBase &
  (
    | { onClick: () => void; href?: never; newTab?: never }
    | { href: string; newTab?: boolean; onClick?: never }
  );
export interface HeroEditorialIndex {
  current: string;
  total: string;
  visible?: boolean;
  tabletVisible?: boolean;
  mobileVisible?: boolean;
}
export type MediaHeroStyle = React.CSSProperties & { "--media-hero-overlay-color"?: string };
export interface MediaHeroBaseProps {
  id?: string;
  ariaLabel?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  description?: string;
  headingLevel?: 1 | 2 | 3;
  container?: MediaHeroContainer;
  textColor?: MediaHeroColor;
  contentMaxWidth?: React.CSSProperties["maxWidth"];
  height?: HeroResponsive<HeroHeight>;
  contentPosition?: HeroResponsive<HeroContentPosition>;
  contentInsets?: HeroResponsive<HeroContentInsets>;
  contentVisibility?: HeroResponsive<boolean>;
  overlay?: HeroOverlayOptions | HeroResponsive<HeroOverlayOptions>;
  cta?: HeroCta;
  index?: HeroEditorialIndex;
  /** Compatibility escape for local styles; not a proposed Theme Editor setting. */
  style?: MediaHeroStyle;
}
export type MediaHeroImageProps = MediaHeroBaseProps & {
  variant?: "image";
  media: HeroImageMedia;
  videoOptions?: never;
  fallbackImage?: never;
  mobileFallback?: never;
} & ({ decorative?: true; imageAlt?: never } | { decorative: false; imageAlt: string });
export interface MediaHeroVideoProps extends MediaHeroBaseProps {
  variant: "video";
  media: HeroVideoMedia;
  fallbackImage: HeroImageMedia;
  /** Used on mobile when no mobile video is supplied. */
  mobileFallback?: HeroImageSource;
  videoOptions?: HeroVideoOptions;
  decorative?: never;
  imageAlt?: never;
}
export type MediaHeroProps = MediaHeroImageProps | MediaHeroVideoProps;
