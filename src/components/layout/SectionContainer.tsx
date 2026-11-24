import type * as React from "react";
import type { SectionContainer as ContainerMode } from "../../types/section";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: ContainerMode;
}

export function SectionContainer({
  container = "contained",
  className = "",
  ...props
}: SectionContainerProps) {
  return (
    <div
      {...props}
      className={`section-container section-container--${container} ${className}`.trim()}
    />
  );
}

export interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  container?: ContainerMode;
  contentClassName?: string;
}

/** The outer section owns the background; only its inner content is bounded. */
export function Section({
  container = "contained",
  contentClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <SectionContainer container={container} className={contentClassName}>
        {children}
      </SectionContainer>
    </section>
  );
}
