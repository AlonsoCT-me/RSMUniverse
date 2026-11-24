import { Reveal } from "../../components/editorial/Reveal";
import type { NavigateFn } from "../../types/navigation";
import { specialEditionProducts } from "../../data/products";
import { TextLink } from "../../components/ui/TextLink";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";

export function SpecialEditionHero() {
  const scrollToEditorial = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document
      .getElementById("special-editorial")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section
      className="se-hero"
      aria-label="Detalle del emblema metálico de la edición especial RSM"
    >
      <div className="se-hero__overlay" />
      <Reveal className="se-hero__content">
        <p>SPECIAL EDITION</p>
        <h1>
          Estirpe <br></br>de lujo
        </h1>
        <small className="sr-only">
          Una expresión de carácter, tradición y exclusividad.
        </small>
        <button
          className="button button--outline-light"
          type="button"
          onClick={scrollToEditorial}
        >
          Descubrir la edición
        </button>
      </Reveal>
    </section>
  );
}

export function EditorialIntro() {
  return (
    <section className="se-intro" id="special-editorial">
      <Reveal className="se-intro__inner shell">
        <span className="sr-only eyebrow eyebrow--light">
          Una edición extraordinaria
        </span>
        <h2>Inspiración en la penumbra</h2>
        <p className="sr-only">
          Nacida del contraste entre la oscuridad y la luz, NOCTURNA representa
          una interpretación contemporánea de la identidad ecuestre de RSM.
        </p>
      </Reveal>
    </section>
  );
}

export function SpecialEditionDetails({ navigate }: { navigate: NavigateFn }) {
  return (
    <section className="se-presentation">
      <div className="se-presentation__grid shell">
        {specialEditionProducts.map((product) => (
          <Reveal className="se-product-card" key={product.id}>
            <button
              type="button"
              className="se-product-card__media"
              onClick={() => navigate("nocturna", product.id)}
              aria-label={`Ver ${product.name}`}
            >
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                loading="lazy"
              />
            </button>
            <h3>
              <button
                type="button"
                onClick={() => navigate("nocturna", product.id)}
              >
                {product.name}
              </button>
            </h3>
            <p>{product.shortDescription}</p>
            <TextLink light onClick={() => navigate("nocturna", product.id)}>
              Ver producto
            </TextLink>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function EditorialImageText({
  title,
  copy,
  label,
  color,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  copy: string;
  label: string;
  color: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}) {
  return (
    <Reveal className={`se-detail ${reverse ? "se-detail--reverse" : ""}`}>
      <div className="se-detail__media">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder
            label={label}
            backgroundColor={color}
            aspectRatio="4 / 5"
            variant="dark"
          />
        )}
      </div>
      <div className="se-detail__copy">
        <span className="eyebrow eyebrow--light">El detalle</span>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </Reveal>
  );
}

export function SpecialEditionProductCTA({ navigate }: { navigate: NavigateFn }) {
  return (
    <section className="se-product-cta hidden">
      <Reveal className="se-product-cta__inner shell">
        <div className="se-product-cta__media">
          <ImagePlaceholder
            label="PRODUCTO — CTA"
            backgroundColor="#64242E"
            variant="dark"
          />
        </div>
        <div className="se-product-cta__copy">
          <span className="eyebrow eyebrow--light">Special Edition</span>
          <h2>Nocturna</h2>
          <small>Signature Cap</small>
          <p>Una edición que reúne tradición, diseño y carácter.</p>
          <button
            className="button button--outline-light"
            onClick={() => navigate("nocturna")}
          >
            Descubrir Nocturna
          </button>
        </div>
      </Reveal>
    </section>
  );
}
