import type * as React from "react";

export function EditorialSplitSection({
  id,
  eyebrow,
  title,
  copy,
  imageSrc,
  imageAlt,
  variant,
  reverse = false,
  sectionStyle,
  copyStyle,
  titleStyle,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  imageSrc: string;
  imageAlt: string;
  variant: "origin" | "city";
  reverse?: boolean;
  sectionStyle?: React.CSSProperties;
  copyStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      className={`story-split story-split--${variant} ${reverse ? "story-split--reverse" : ""}`}
      style={sectionStyle}
    >
      <div className="story-split__copy" style={copyStyle}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 style={titleStyle}>{title}</h2>
        <p>{copy}</p>
      </div>
      <div className="story-split__media">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}
