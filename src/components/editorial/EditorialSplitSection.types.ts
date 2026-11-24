import type * as React from "react";

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
  animation?: "slide" | "fade";
  /** Milliseconds. */
  duration?: number;
  loop?: boolean;
  autoplay?: boolean;
  /** Milliseconds; must be greater than zero. */
  autoplayInterval?: number;
}

export interface EditorialSplitBaseProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
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
