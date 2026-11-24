import { useId } from "react";
import { SectionContainer } from "../layout/SectionContainer";
import { EditorialSlider } from "./EditorialSlider";
import type { EditorialSplitSectionProps } from "./EditorialSplitSection.types";

export type {
  EditorialSplitSectionProps,
  EditorialSplitBaseProps,
  EditorialSplitStaticProps,
  EditorialSplitSliderProps,
  EditorialSplitVariant,
  EditorialSplitLayout,
  EditorialSplitRatio,
  EditorialSplitMobileLayout,
  EditorialSlide,
  EditorialSliderOptions,
} from "./EditorialSplitSection.types";

export function EditorialSplitSection(props: EditorialSplitSectionProps) {
  const headingId = useId();
  const {
    id,
    eyebrow,
    title,
    copy,
    variant = "static",
    layout = "text-left",
    ratio = "50-50",
    mobileLayout = "text-first",
    surface = "caliza",
    container = "full-width",
    sectionStyle,
    copyStyle,
    titleStyle,
  } = props;

  const content = (
    <div key="copy" className="story-split__copy" style={copyStyle}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={headingId} style={titleStyle}>
        {title}
      </h2>
      <p>{copy}</p>
    </div>
  );
  const media = (
    <div key="media" className="story-split__media">
      {props.variant === "slider" ? (
        <EditorialSlider
          slides={props.slides}
          options={props.sliderOptions}
          labelledBy={headingId}
        />
      ) : props.imageSrc.trim() ? (
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          style={{ objectPosition: props.objectPosition }}
        />
      ) : null}
    </div>
  );

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`story-split story-split--${variant} story-split--${layout} story-split--ratio-${ratio} story-split--${mobileLayout} story-split--${surface} story-split--container-${container}`}
      style={sectionStyle}
    >
      <SectionContainer container={container} className="story-split__inner">
        {mobileLayout === "image-first" ? [media, content] : [content, media]}
      </SectionContainer>
    </section>
  );
}
