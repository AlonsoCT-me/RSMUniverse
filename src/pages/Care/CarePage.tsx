import type * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Accordion } from "../../components/ui/Accordion";
import type { Page } from "../../types/navigation";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";
import { Icon } from "../../components/ui/Icon";
import { TextLink } from "../../components/ui/TextLink";

const careSteps = [
  {
    number: "01",
    title: "Identifica los materiales",
    copy: "Antes de comenzar, identifica el tejido, los acabados y las indicaciones de cuidado de tu gorra.",
  },
  {
    number: "02",
    title: "Retira el polvo",
    copy: "Utiliza un cepillo de cerdas suaves o un paño limpio y seco para retirar el polvo superficial, sin frotar con fuerza.",
  },
  {
    number: "03",
    title: "Atiende las manchas",
    copy: "Si el material lo permite, trata las manchas de manera localizada con un paño ligeramente humedecido. Prueba primero en una zona discreta y evita saturar el tejido.",
  },
  {
    number: "04",
    title: "Seca naturalmente",
    copy: "Después de una limpieza permitida por el fabricante, deja secar la gorra de forma natural, lejos de secadoras, radiadores y luz solar directa.",
  },
  {
    number: "05",
    title: "Conserva su forma",
    copy: "Guarda tu gorra en un lugar limpio y seco, evitando colocar objetos pesados encima o deformar su visera.",
  },
];

function CareIllustration({ step }: { step: number }) {
  return (
    <svg
      className="care-illustration"
      viewBox="0 0 640 520"
      fill="none"
      role="img"
      aria-label={`Ilustración del paso ${step + 1}: ${careSteps[step].title}`}
    >
      <g className="care-illustration__base">
        <path d="M157 303c5-108 65-184 171-184 105 0 157 70 164 184" />
        <path d="M158 303c69 29 230 32 334 0" />
        <path d="M324 120c-19 42-23 111-18 193" />
        <path d="M211 167c39 19 68 59 95 146M434 167c-42 20-73 61-128 146" />
        <path d="M491 303c49 8 90 28 107 57-100 29-205 20-292-47" />
        <path d="M157 303c-30 13-53 35-62 60 74 14 145-1 211-50" />
        <path d="M164 302c-5 20-3 37 5 51 83 30 243 29 319-2 7-14 8-30 3-48" />
        <circle cx="324" cy="120" r="7" />
      </g>

      {step === 0 && (
        <g className="care-illustration__action care-illustration__materials">
          <circle cx="215" cy="214" r="26" />
          <circle cx="405" cy="213" r="26" />
          <circle cx="464" cy="338" r="24" />
          <path d="M215 188v-34M405 187v-34M464 362v37" />
        </g>
      )}
      {step === 1 && (
        <g className="care-illustration__action care-illustration__dust">
          <g transform="rotate(-18 470 165)">
            <rect x="418" y="136" width="108" height="42" rx="8" />
            <path d="M432 178v30M447 178v34M462 178v30M477 178v34M492 178v30M507 178v34" />
          </g>
          <circle cx="397" cy="249" r="4" />
          <circle cx="425" cy="267" r="3" />
          <circle cx="455" cy="247" r="5" />
          <circle cx="481" cy="275" r="3" />
        </g>
      )}
      {step === 2 && (
        <g className="care-illustration__action care-illustration__stain">
          <circle cx="407" cy="250" r="15" />
          <path d="m430 235 92-65 37 49-101 74-42-20 14-38Z" />
          <path d="m443 228 48 57M461 215l49 56" />
        </g>
      )}
      {step === 3 && (
        <g className="care-illustration__action care-illustration__air">
          <path d="M105 410h430" />
          <path d="M190 83c-28-22-27-45 1-69M286 75c-25-20-24-41 1-62M391 83c-28-22-27-45 1-69" />
          <path d="M506 109c42 5 64-7 67-36M92 142c-38 10-56 1-62-26" />
        </g>
      )}
      {step === 4 && (
        <g className="care-illustration__action care-illustration__support">
          <path d="M249 359c2 50-5 83-28 103h207c-23-20-31-53-28-103" />
          <path d="M324 359v103M197 462h254" />
          <path d="M230 381c58 15 130 15 188 0" />
        </g>
      )}
    </svg>
  );
}

function CareStep({
  step,
  index,
  active,
  register,
  select,
}: {
  step: (typeof careSteps)[number];
  index: number;
  active: boolean;
  register: (node: HTMLElement | null) => void;
  select: () => void;
}) {
  return (
    <article
      ref={register}
      className={`care-step ${active ? "is-active" : ""}`}
      data-care-step={index}
      aria-current={active ? "step" : undefined}
    >
      <button
        type="button"
        onClick={select}
        aria-label={`Activar paso ${index + 1}`}
      >
        <span>{step.number}</span>
        <div>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </div>
      </button>
    </article>
  );
}

function CareScrollStory() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveStep(
            Number((visible.target as HTMLElement).dataset.careStep),
          );
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0.05, 0.2, 0.4] },
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const selectStep = (index: number) => {
    setActiveStep(index);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    stepRefs.current[index]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section className="care-story" data-shopify-candidate="rsm-cap-care-steps">
      <div className="care-story__heading shell">
        <span className="eyebrow">Guía paso a paso</span>
        <h2>El arte de cuidar tu gorra.</h2>
        <p>Una guía sencilla para conservarla en las mejores condiciones.</p>
      </div>
      <div className="care-story__layout shell">
        <div className="care-story__visual">
          <div className="care-story__illustration">
            <CareIllustration step={activeStep} />
          </div>
          <nav
            className="care-story__nav"
            aria-label="Seleccionar paso de cuidado"
          >
            <span>
              {String(activeStep + 1).padStart(2, "0")} /{" "}
              {String(careSteps.length).padStart(2, "0")}
            </span>
            <div>
              {careSteps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  className={activeStep === index ? "is-active" : ""}
                  aria-label={`Ir al paso ${index + 1}: ${step.title}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  onClick={() => selectStep(index)}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="care-story__steps">
          {careSteps.map((step, index) => (
            <CareStep
              key={step.number}
              step={step}
              index={index}
              active={activeStep === index}
              register={(node) => {
                stepRefs.current[index] = node;
              }}
              select={() => selectStep(index)}
            />
          ))}
          <p className="care-story__note">
            Estos consejos son orientativos. Siempre deben prevalecer las
            instrucciones específicas indicadas para cada producto.
          </p>
        </div>
      </div>
    </section>
  );
}

function CareMaterialAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="care-material-accordion">
      <Accordion title={title}>{children}</Accordion>
    </div>
  );
}

export function CarePage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="care-page">
      <section className="care-hero">
        <ImagePlaceholder
          label="CARE GUIDE — HERO"
          backgroundColor="#574D35"
          variant="dark"
          corner
        />
        <div className="care-hero__overlay" />
        <div className="care-hero__content">
          <span>Guía de cuidado RSM</span>
          <h1>Cuida lo que te acompaña.</h1>
        </div>
        <button
          className="care-hero__continue"
          type="button"
          aria-label="Continuar a la introducción"
          onClick={() => {
            const reduceMotion = window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            ).matches;
            document
              .getElementById("care-intro")
              ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
          }}
        >
          <span>Continuar</span>
          <Icon name="arrow" size={17} />
        </button>
      </section>

      <section className="care-intro" id="care-intro">
        <div className="shell">
          <span className="eyebrow">Cuidado RSM</span>
          <h2>Hechas para acompañarte. Cuidadas para durar.</h2>
          <p>
            Cada gorra acompaña historias, caminos y momentos. Un cuidado
            adecuado ayuda a conservar su forma, apariencia y materiales con el
            paso del tiempo.
          </p>
        </div>
        <div className="care-intro__marquee" aria-hidden="true">
          <div>
            <span>Cuida mejor. Conserva por más tiempo.</span>
            <span>Cuida mejor. Conserva por más tiempo.</span>
          </div>
        </div>
      </section>

      <section className="care-everyday">
        <div className="care-everyday__inner shell">
          <div className="care-everyday__copy">
            <span className="eyebrow">Cuidado cotidiano</span>
            <h2>El cuidado comienza en los detalles.</h2>
            <p>
              Antes de limpiar tu gorra, identifica sus materiales y revisa las
              indicaciones específicas del producto. No todos los tejidos,
              parches y acabados requieren el mismo tratamiento.
            </p>
            <ul>
              <li>Evita la exposición prolongada al calor y al sol directo.</li>
              <li>Retira el polvo con suavidad.</li>
              <li>Conserva su forma al guardarla.</li>
            </ul>
          </div>
          <div className="care-everyday__media">
            <ImagePlaceholder
              label="EVERYDAY CARE — EDITORIAL IMAGE"
              backgroundColor="#4B5B6E"
              variant="dark"
            />
          </div>
        </div>
      </section>

      <CareScrollStory />

      <section className="care-storage">
        <div className="care-storage__inner shell">
          <div className="care-storage__media">
            <ImagePlaceholder
              label="STORAGE — EDITORIAL IMAGE"
              backgroundColor="#64242E"
              variant="dark"
            />
          </div>
          <div className="care-storage__copy">
            <span className="eyebrow">Conservación</span>
            <h2>El tiempo también deja huella.</h2>
            <p>
              La forma en que guardas y utilizas tu gorra influye en su
              conservación. Evita aplastarla, exponerla a humedad prolongada o
              almacenarla sin ventilación.
            </p>
            <TextLink onClick={() => navigate("collection")}>
              Explorar la colección
            </TextLink>
          </div>
        </div>
      </section>

      <section className="care-information">
        <div className="care-information__grid shell">
          <div className="care-information__heading">
            <span className="eyebrow">Según su composición</span>
            <h2>Cada material merece su propio cuidado.</h2>
            <p>
              Las indicaciones oficiales de cada producto tienen prioridad sobre
              estas recomendaciones generales.
            </p>
          </div>
          <div className="care-information__accordions">
            <CareMaterialAccordion title="Algodón y tejidos textiles">
              <p>
                Retira el polvo en seco y trata únicamente zonas puntuales
                cuando las indicaciones del producto lo permitan. Evita empapar
                el tejido.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Poliéster y materiales sintéticos">
              <p>
                Usa un paño suave y evita calor intenso, fricción fuerte o
                productos químicos no especificados para el material.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Malla tipo trucker">
              <p>
                Manipula la malla con suavidad para evitar deformaciones. Retira
                polvo sin presionar ni doblar los paneles.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Parches, bordados y aplicaciones">
              <p>
                Limpia alrededor de las aplicaciones con movimientos suaves y
                evita enganchar, raspar o saturar sus bordes.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Ante, gamuza o cuero, cuando aplique">
              <p>
                Sigue únicamente las instrucciones específicas del producto. No
                apliques limpiadores, impermeabilizantes o solventes sin una
                indicación verificada.
              </p>
            </CareMaterialAccordion>
          </div>
        </div>
      </section>

      <section className="care-faq">
        <div className="care-faq__inner shell">
          <div className="care-faq__heading">
            <span className="eyebrow eyebrow--light">Preguntas frecuentes</span>
            <h2>Antes de comenzar.</h2>
          </div>
          <div className="care-faq__accordions">
            <Accordion dark title="¿Puedo lavar mi gorra en lavadora?">
              <p>
                No lo recomendamos como regla general. Revisa siempre las
                instrucciones específicas de tu producto antes de cualquier
                lavado.
              </p>
            </Accordion>
            <Accordion dark title="¿Cómo evito que pierda su forma?">
              <p>
                Manipúlala por sus zonas firmes, evita colocar peso encima y
                guárdala con espacio suficiente.
              </p>
            </Accordion>
            <Accordion dark title="¿Qué hago si se moja?">
              <p>
                Retira el exceso de humedad sin retorcerla y deja que seque
                naturalmente en un lugar ventilado, si el material lo permite.
              </p>
            </Accordion>
            <Accordion
              dark
              title="¿Cómo limpio una gorra con bordados o parches?"
            >
              <p>
                Trabaja de forma localizada y suave, evitando fricción intensa
                sobre hilos, bordes y aplicaciones.
              </p>
            </Accordion>
            <Accordion dark title="¿Cómo debo guardarla?">
              <p>
                En un espacio limpio, seco y ventilado, sin presión sobre la
                corona o la visera.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="care-cta">
        <span className="eyebrow">Colecciones RSM</span>
        <h2>Listas para acompañarte.</h2>
        <p>Descubre las colecciones de RSM Universe.</p>
        <button
          className="button"
          type="button"
          onClick={() => navigate("collection")}
        >
          Explorar la colección
        </button>
      </section>
    </main>
  );
}
