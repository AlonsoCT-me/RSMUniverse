import type * as React from "react";
import type { SectionContainer } from "../../types/section";

export type EditorialSplitVariant = "static" | "slider";
export type EditorialSplitLayout = "text-left" | "text-right";
export type EditorialSplitRatio = "25-75" | "30-70" | "50-50" | "70-30" | "75-25";
export type EditorialSplitMobileLayout = "image-first" | "text-first";

export interface EditorialSlide {
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface EditorialSliderOptions {
  arrows?: boolean;
  dots?: boolean;
  /** Show the pause/resume control when autoplay is enabled. Defaults to true. */
  pauseButton?: boolean;
  animation?: "slide" | "fade";
  /** Transition duration in milliseconds (fade or slide). Defaults to 600. */
  duration?: number;
  loop?: boolean;
  autoplay?: boolean;
  /** Time between automatic slide changes in milliseconds; greater than zero. Defaults to 5000. */
  autoplayInterval?: number;
}

export interface EditorialSplitBaseProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  container?: SectionContainer;
  layout?: EditorialSplitLayout;
  ratio?: EditorialSplitRatio;
  mobileLayout?: EditorialSplitMobileLayout;
  surface?: "caliza" | "paper";
  sectionStyle?: React.CSSProperties & {
    "--story-split-columns"?: string;
    "--story-split-tablet-columns"?: string;
  };
  copyStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}

export interface EditorialSplitStaticProps extends EditorialSplitBaseProps, EditorialSlide {
  variant?: "static";
  slides?: never;
  sliderOptions?: never;
}

export interface EditorialSplitSliderProps extends EditorialSplitBaseProps {
  variant: "slider";
  slides: readonly EditorialSlide[];
  sliderOptions?: EditorialSliderOptions;
  imageSrc?: never;
  imageAlt?: never;
  objectPosition?: never;
}

export type EditorialSplitSectionProps = EditorialSplitStaticProps | EditorialSplitSliderProps;
