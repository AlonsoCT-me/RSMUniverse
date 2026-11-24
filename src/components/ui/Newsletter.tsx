import { Section } from "../layout/SectionContainer";
import type { SectionContainer } from "../../types/section";
import { Icon } from "./Icon";
import { useState } from "react";

export function Newsletter({ container = "contained" }: { container?: SectionContainer } = {}) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <Section className="newsletter" container={container} contentClassName="newsletter__inner">
      <span className="eyebrow eyebrow--light">Desde el origen</span>
      <h2>
        Historias, producto
        <br />y nuevas expresiones.
      </h2>
      {sent ? (
        <p>Gracias. Te avisaremos cuando haya algo que contar.</p>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (email) setSent(true);
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">
            Suscribirme <Icon name="arrow" size={18} />
          </button>
        </form>
      )}
    </Section>
  );
}
