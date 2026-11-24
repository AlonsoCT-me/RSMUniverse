import type * as React from "react";
import type { Page } from "../../types/navigation";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { TextLink } from "../../components/ui/TextLink";
import { Accordion } from "../../components/ui/Accordion";

export function DesignSystem({ navigate }: { navigate: (page: Page) => void }) {
  const tokens = [
    ["Estirpe", "#64242E"],
    ["Sierra", "#574D35"],
    ["Caliza", "#F2E8DA"],
    ["Arcilla", "#944A20"],
    ["Horizonte", "#4B5B6E"],
    ["Dark", "#191716"],
  ];
  return (
    <main className="system-page page-light">
      <section className="system-hero shell">
        <span className="eyebrow">RSM Universe · 2026</span>
        <h1>
          Design system
          <br />& components.
        </h1>
        <p>
          Un sistema para expresar el mismo origen en dos atmósferas: Core /
          Light y Special Edition / Dark.
        </p>
      </section>
      <section className="system-section shell">
        <SectionHeading eyebrow="01 — Fundamentos" title="Color" />
        <div className="token-grid">
          {tokens.map(([name, color]) => (
            <article
              key={name}
              style={{
                background: color,
                color: name === "Caliza" ? "#191716" : "#fff",
              }}
            >
              <span>{name}</span>
              <small>{color}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="system-section type-specimen shell">
        <SectionHeading eyebrow="02 — Tipografía" title="Una voz precisa." />
        <div className="type-specimen__display">
          <span>Cormorant Garamond · 600</span>
          <p>Nuestro origen nos define</p>
        </div>
        <div className="type-specimen__body">
          <span>Figtree · 400 / 500 / 600</span>
          <p>
            Menos palabras. Más carácter. Una jerarquía clara para navegar,
            descubrir y comprar.
          </p>
        </div>
      </section>
      <section className="system-section shell">
        <SectionHeading
          eyebrow="03 — Componentes"
          title="Comercio con carácter."
        />
        <div className="component-board">
          <div className="component-board__light">
            <span className="component-label">Core / Light</span>
            <button className="button">Acción primaria</button>
            <TextLink>Acción editorial</TextLink>
            <div className="swatches swatches--large">
              {["#594438", "#944A20", "#F2E8DA"].map((c, i) => (
                <button
                  key={c}
                  className={i === 0 ? "is-selected" : ""}
                  style={{ "--swatch": c } as React.CSSProperties}
                />
              ))}
            </div>
            <Accordion title="Acordeón de producto" open>
              <p>Información clara y progresiva.</p>
            </Accordion>
          </div>
          <div className="component-board__dark">
            <span className="component-label">Special Edition / Dark</span>
            <button className="button button--light">Acción primaria</button>
            <button className="button button--outline-light">
              Acción primaria estilo outline
            </button>
            <TextLink light>Acción editorial</TextLink>
            <div className="swatches swatches--large">
              {["#171716", "#4B5B6E", "#64242E"].map((c, i) => (
                <button
                  key={c}
                  className={i === 0 ? "is-selected" : ""}
                  style={{ "--swatch": c } as React.CSSProperties}
                />
              ))}
            </div>
            <Accordion dark title="Acordeón de producto" open>
              <p>La misma estructura, otra atmósfera.</p>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="system-section shell">
        <SectionHeading
          eyebrow="04 — Viabilidad Prestige"
          title="Native first + RSM custom layer"
        />
        <div className="feasibility">
          {[
            ["Native", "Grids, PDP, acordeones, filtros, newsletter y footer."],
            [
              "Native + CSS",
              "Tipografía, espaciado, swatches, tarjetas y atmósfera Dark.",
            ],
            ["RSM Custom", "Bento Nocturna y módulos narrativos asimétricos."],
            [
              "Por validar",
              "Header liquid glass existente y comportamiento sticky final.",
            ],
          ].map(([title, copy]) => (
            <article key={title}>
              <b>{title}</b>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <button className="button" onClick={() => navigate("compare")}>
          Ver comparativa UX/UI
        </button>
      </section>
    </main>
  );
}
