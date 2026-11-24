import { Section } from "../../components/layout/SectionContainer";
export function Comparison() {
  const rows = [
    [
      "Home",
      "Composición de cinco bloques y atmósfera cálida.",
      "Jerarquía más clara, CTAs consistentes y tarjetas comerciales completas.",
      "Se conserva la narrativa; se corrige conversión y legibilidad.",
    ],
    [
      "Colección",
      "Grid sólido con producto como protagonista.",
      "Toolbar simplificada, atributos reales y hover de segunda imagen.",
      "Menos filtros especulativos; mejor patrón Prestige.",
    ],
    [
      "PDP",
      "Galería extensa y panel lateral.",
      "Sticky info, datos provisionales identificados y storytelling sin repetir.",
      "La información comercial llega antes que la editorial.",
    ],
    [
      "Special Edition",
      "Lenguaje oscuro y bento de alta densidad.",
      "Más aire, una sola ruta de conversión y módulos adaptables.",
      "El lujo se expresa con control, no con acumulación.",
    ],
    [
      "Historia",
      "Narrativa visual rica y composiciones asimétricas.",
      "Texto alineado al brandbook y secuencia Origen–Territorio–Movimiento.",
      "Se eliminan hechos no confirmados y se fortalece la voz oficial.",
    ],
  ];
  return (
    <main className="comparison page-light">
      <Section className="comparison__hero" contentClassName="comparison__hero__container">
        <span className="eyebrow">Referencia → refinamiento</span>
        <h1>
          Decisiones de diseño,
          <br />
          no decoración.
        </h1>
        <p>
          La propuesta combina la dirección RSM con patrones comerciales de Prestige y reglas
          verificables del brandbook.
        </p>
      </Section>
      <Section className="comparison__table" contentClassName="comparison__table__container">
        <div className="comparison__header">
          <span>Vista</span>
          <span>Referencia conceptual</span>
          <span>Propuesta refinada</span>
          <span>Justificación UX/UI</span>
        </div>
        {rows.map((row) => (
          <article key={row[0]}>
            {row.map((cell, i) =>
              i === 0 ? <h2 key={cell}>{cell}</h2> : <p key={cell}>{cell}</p>,
            )}
          </article>
        ))}
      </Section>
    </main>
  );
}
