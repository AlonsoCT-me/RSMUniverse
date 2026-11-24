import { useId, useRef } from "react";
import { SectionContainer } from "../layout/SectionContainer";
import { Icon } from "../ui/Icon";
import { HeroPicture, HeroVideo } from "./MediaHeroMedia";
import { mediaHeroStyles } from "./media-hero-styles";
import type { MediaHeroProps } from "./MediaHero.types";
export type * from "./MediaHero.types";

export function MediaHero(props: MediaHeroProps) {
  const headingId = useId();
  const heroRef = useRef<HTMLElement>(null);
  const Heading = props.headingLevel === 2 ? "h2" : props.headingLevel === 3 ? "h3" : "h1";
  const cta = props.cta?.label.trim() ? props.cta : undefined;
  const buttonClass = `button${cta?.style && cta.style !== "primary" ? ` button--${cta.style}` : ""}`;
  const ctaContent = cta ? (
    <>
      {cta.label}
      {cta.showIcon !== false ? (
        <>
          {" "}
          <Icon name="arrow" size={18} />
        </>
      ) : null}
    </>
  ) : null;
  return (
    <section
      ref={heroRef}
      id={props.id}
      className={`media-hero media-hero--${props.variant ?? "image"}`}
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabel ? undefined : headingId}
      style={mediaHeroStyles(props)}
    >
      {props.variant === "video" ? (
        <HeroVideo props={props} heroRef={heroRef} />
      ) : (
        <div className="media-hero__media">
          <HeroPicture
            media={props.media}
            alt={props.imageAlt}
            decorative={props.decorative !== false}
            priority
          />
        </div>
      )}
      <div className="media-hero__overlay" aria-hidden="true" />
      <SectionContainer container={props.container ?? "contained"} className="media-hero__layout">
        <div className="media-hero__positioner">
          <div className="media-hero__content">
            {props.eyebrow ? (
              <span className="media-hero__eyebrow eyebrow">{props.eyebrow}</span>
            ) : null}
            <Heading id={headingId} className="media-hero__title">
              {props.title}
              {props.subtitle ? <em className="media-hero__subtitle">{props.subtitle}</em> : null}
            </Heading>
            {props.description ? (
              <p className="media-hero__description">{props.description}</p>
            ) : null}
            {cta && cta.visible !== false ? (
              "href" in cta && cta.href !== undefined ? (
                <a
                  className={buttonClass}
                  href={cta.href}
                  target={cta.newTab ? "_blank" : undefined}
                  rel={cta.newTab ? "noopener noreferrer" : undefined}
                >
                  {ctaContent}
                </a>
              ) : (
                <button type="button" className={buttonClass} onClick={cta.onClick}>
                  {ctaContent}
                </button>
              )
            ) : null}
          </div>
        </div>
      </SectionContainer>
      {props.index && props.index.visible !== false ? (
        <span
          className="media-hero__index"
          aria-label={`Índice editorial: ${props.index.current} de ${props.index.total}`}
        >
          {props.index.current} / {props.index.total}
        </span>
      ) : null}
    </section>
  );
}
