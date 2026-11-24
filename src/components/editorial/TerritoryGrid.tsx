import { SectionContainer } from "../layout/SectionContainer";
import type { SectionContainer as ContainerMode } from "../../types/section";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { Icon } from "../ui/Icon";
import { useState } from "react";

function TerritoryCard({
  title,
  copy,
  label,
  backgroundColor,
}: {
  title: string;
  copy: string;
  label: string;
  backgroundColor: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      className={`territory-card ${expanded ? "is-expanded" : ""}`}
      type="button"
      aria-expanded={expanded}
      onClick={() => setExpanded((value) => !value)}
    >
      <ImagePlaceholder
        label={label}
        backgroundColor={backgroundColor}
        aspectRatio="3 / 4"
        variant="dark"
      />
      <span className="territory-card__overlay" aria-hidden="true" />
      <span className="territory-card__panel">
        <b>{title}</b>
        <span>{copy}</span>
      </span>
      <span className="territory-card__toggle" aria-hidden="true">
        <Icon name={expanded ? "minus" : "plus"} size={17} />
      </span>
    </button>
  );
}

export function TerritoryGrid({ container = "contained" }: { container?: ContainerMode } = {}) {
  const cards = [
    {
      title: "Caballos",
      copy: "La conexión de RSM con la cultura ecuestre.",
      label: "EQUESTRIAN IMAGE",
      backgroundColor: "#574D35",
    },
    {
      title: "Arquitectura",
      copy: "Construcciones, materiales y espacios que definen nuestro universo visual.",
      label: "ARCHITECTURE IMAGE",
      backgroundColor: "#4B5B6E",
    },
    {
      title: "Paisajes",
      copy: "El territorio y los escenarios naturales del norte de México.",
      label: "LANDSCAPE IMAGE",
      backgroundColor: "#944A20",
    },
    {
      title: "Tradición",
      copy: "Raíces, carácter y continuidad de la identidad RSM.",
      label: "TRADITION IMAGE",
      backgroundColor: "#64242E",
    },
  ];

  return (
    <section className="hidden territory-gallery">
      <SectionContainer container={container}>
        <div className="territory-gallery__heading">
          <h2>El territorio</h2>
          <p>
            La arquitectura, los paisajes y la cultura ecuestre del norte de México forman parte del
            lenguaje visual de RSM.
          </p>
        </div>
        <div className="territory-grid">
          {cards.map((card) => (
            <TerritoryCard key={card.title} {...card} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
