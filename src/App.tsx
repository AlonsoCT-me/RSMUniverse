import { useEffect, useMemo, useRef, useState } from "react";
import territoryLandscapeImg from "@/imports/home-SIN_FRONTERAS-2.jpg";

type Page =
  | "home"
  | "collection"
  | "caliza"
  | "special"
  | "nocturna"
  | "story"
  | "care"
  | "system"
  | "compare";

type Product = {
  name: string;
  subtitle: string;
  price: string;
  colors: string[];
  special?: boolean;
};

const products: Product[] = [
  {
    name: "Senderos",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#594438", "#3D302A", "#8C694C", "#D5C2A8"],
  },
  {
    name: "Caliza",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#6B4D3B", "#463934", "#987C67", "#D9C9B2"],
  },
  {
    name: "Caspiano",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#191716", "#34302D", "#664B3A", "#776D5B"],
  },
  {
    name: "Macho",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#54362C", "#493A32", "#897867", "#D1BDA4"],
  },
  {
    name: "Nocturna",
    subtitle: "Special Edition",
    price: "$1,599 MXN",
    colors: ["#1B1A19", "#2F2D2B", "#5E493C", "#5D5C57"],
    special: true,
  },
  {
    name: "Orígenes",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#806D55", "#5B4435", "#74503A"],
  },
  {
    name: "Territorio",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#3E2D28", "#4A3C34", "#68695A"],
  },
  {
    name: "Sierra",
    subtitle: "Core Cap",
    price: "$1,599 MXN",
    colors: ["#4A3A2E", "#3B3029", "#747064"],
  },
];

const routes: Record<Page, string> = {
  home: "",
  collection: "coleccion",
  caliza: "producto/caliza",
  special: "special-edition",
  nocturna: "producto/nocturna",
  story: "nuestra-historia",
  care: "pages/cuidado-de-gorras",
  system: "design-system",
  compare: "comparativa",
};

const routeMap = Object.fromEntries(
  Object.entries(routes).map(([page, path]) => [path, page]),
) as Record<string, Page>;

function Icon({
  name,
  size = 20,
}: {
  name: "menu" | "close" | "search" | "bag" | "user" | "arrow" | "minus" | "plus";
  size?: number;
}) {
  const paths = {
    menu: (
      <>
        <path d="M3 7h18M3 17h18" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15M14 6l6 6-6 6" />
      </>
    ),
    minus: (
      <>
        <path d="M5 12h14" />
      </>
    ),
    plus: (
      <>
        <path d="M5 12h14M12 5v14" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    >
      {paths[name]}
    </svg>
  );
}

function ImagePlaceholder({
  label,
  backgroundColor,
  aspectRatio,
  variant,
  className = "",
  corner = false,
}: {
  label: string;
  backgroundColor: string;
  aspectRatio?: string;
  variant: "light" | "dark";
  className?: string;
  corner?: boolean;
}) {
  return (
    <div
      className={`image-placeholder image-placeholder--${variant} ${corner ? "image-placeholder--corner" : ""} ${className}`}
      style={{
        backgroundColor,
        ...(aspectRatio ? { aspectRatio } : {}),
      }}
      role="img"
      aria-label={label}
    >
      <span className="image-placeholder__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="4.5" width="17" height="15" rx="0.5" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m5.5 17 4.25-4 3 2.5 2.5-2 3.25 3.5" />
        </svg>
        <b>{label}</b>
      </span>
    </div>
  );
}

function Header({
  page,
  navigate,
  cartCount,
  openCart,
}: {
  page: Page;
  navigate: (page: Page) => void;
  cartCount: number;
  openCart: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlay = page === "home" || page === "story" || page === "special" || page === "care";
  const dark = page === "special" || page === "nocturna";
  const links: [string, Page][] = [
    ["Inicio", "home"],
    ["Colección", "collection"],
    ["Special Edition", "special"],
    ["Nuestra historia", "story"],
  ];

  const go = (target: Page) => {
    setMenuOpen(false);
    navigate(target);
  };

  return (
    <>
      <header
        className={`site-header ${overlay ? "site-header--overlay" : ""} ${dark ? "site-header--dark" : ""}`}
      >
        <button className="logo-button" onClick={() => go("home")} aria-label="Ir al inicio">
          <img
            className="brand-logo"
            src={overlay || dark ? "/assets/rsm-logo-white.png" : "/assets/rsm-logo-dark.png"}
            alt="RSM"
            style={{ width: 120, height: "fit-content" }}
          />
        </button>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, target]) => (
            <button
              key={target}
              className={page === target ? "is-active" : ""}
              onClick={() => go(target)}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button aria-label="Buscar">
            <Icon name="search" />
          </button>
          <button className="desktop-only" aria-label="Mi cuenta">
            <Icon name="user" />
          </button>
          <button
            className="bag-button"
            aria-label={`Bolsa, ${cartCount} artículos`}
            onClick={openCart}
          >
            <Icon name="bag" />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
          <button
            className="mobile-menu-button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav__top">
          <img src="/assets/rsm-logo-white.png" alt="RSM" />
          <button aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>
            <Icon name="close" size={24} />
          </button>
        </div>
        <nav>
          <button onClick={() => go("home")}>Inicio</button>
          {links.map(([label, target]) => (
            <button key={target} onClick={() => go(target)}>
              {label}
            </button>
          ))}
        </nav>
        <p>
          De dónde venimos importa.
          <br />
          Hacia dónde vamos, también.
        </p>
      </div>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function TextLink({
  children,
  onClick,
  light = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <button className={`text-link ${light ? "text-link--light" : ""}`} onClick={onClick}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </button>
  );
}

function ProductCard({ product, navigate }: { product: Product; navigate: (page: Page) => void }) {
  const target: Page =
    product.name === "Caliza" ? "caliza" : product.special ? "nocturna" : "collection";
  return (
    <article className="product-card">
      <button
        className="product-card__media"
        onClick={() => navigate(target)}
        aria-label={`Ver ${product.name}`}
      >
        <ImagePlaceholder
          className="product-card__primary"
          label="PRODUCT IMAGE"
          backgroundColor="#F2E8DA"
          aspectRatio=".82"
          variant="light"
        />
        <ImagePlaceholder
          className="product-card__secondary"
          label="SECONDARY VIEW"
          backgroundColor="#FFFFFF"
          aspectRatio=".82"
          variant="light"
        />
        {product.special && <span className="product-card__label">Edición especial</span>}
      </button>
      <button className="product-card__title" onClick={() => navigate(target)}>
        <span>{product.name}</span>
        <small>{product.subtitle}</small>
      </button>
      <p className="product-card__price">{product.price}</p>
      <div className="swatches" aria-label="Colores disponibles">
        {product.colors.map((color, index) => (
          <button
            key={color}
            className={index === 0 ? "is-selected" : ""}
            style={{ "--swatch": color } as React.CSSProperties}
            aria-label={`Color ${index + 1}`}
          />
        ))}
      </div>
    </article>
  );
}

function Home({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main>
      <section
        className="home-hero"
        aria-label="Gorra RSM sobre piedra en un espacio arquitectónico"
      >
        <div className="home-hero__shade" />
        <div className="home-hero__content">
          <span className="eyebrow eyebrow--light">Rancho San Marco · Norte de México</span>
          <h1>
            Nuestro origen
            <br />
            nos define.
            <br />
            <em>No nos limita.</em>
          </h1>
          <button className="button button--light" onClick={() => navigate("collection")}>
            Explorar la colección
          </button>
        </div>
        <span className="hero-index">01 / 05</span>
      </section>

      <section className="borderless">
        <div className="borderless__image">
          <img
            className="home-lifestyle-image"
            src="/assets/home-sin-fronteras-2.jpeg"
            alt="Hombre con gorra RSM contemplando Monterrey desde la montaña"
          />
        </div>
        <div className="borderless__copy">
          <span className="eyebrow">Rancho × ciudad</span>
          <h2>Sin fronteras.</h2>
          <p>
            Una identidad que se mueve con naturalidad entre el origen y una forma contemporánea de
            vivirlo.
          </p>
          <TextLink onClick={() => navigate("story")}>Conocer el universo RSM</TextLink>
        </div>
      </section>

      <section
        className="borderless-fullwidth borderless-fullwidth--experimental"
        data-variant="experimental"
        aria-label="Sin fronteras, paisaje de Monterrey"
        style={{ backgroundImage: 'url("/assets/home-sin-fronteras-2.jpeg")' }}
      >
        <div className="borderless-fullwidth__shade" />
        <div className="borderless-fullwidth__content shell">
          <span className="eyebrow eyebrow--light">Variante experimental</span>
          <h2>Sin fronteras.</h2>
          <p>
            Una identidad que se mueve con naturalidad entre el origen y una forma contemporánea de
            vivirlo.
          </p>
          <TextLink light onClick={() => navigate("story")}>
            Conocer el universo RSM
          </TextLink>
        </div>
      </section>

      <section className="featured-collection">
        <div className="shell">
          <div className="featured-collection__head">
            <SectionHeading
              eyebrow="03 — Core"
              title={"La colección\nTierra RSM"}
              copy="Materia, presencia y oficio. Una primera expresión del origen."
            />
            <TextLink onClick={() => navigate("collection")}>Ver colección completa</TextLink>
          </div>
          <div className="product-grid product-grid--featured">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.name} product={product} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="special-split">
        <div className="special-split__image">
          <img
            className="home-special-image"
            src="/assets/rsm-special-edition-cap.jpeg"
            alt="Detalle del emblema metálico de la edición especial RSM"
          />
        </div>
        <div className="special-split__copy">
          <span className="eyebrow eyebrow--light">04 — Special Edition</span>
          <h2>
            Estirpe
            <br />
            de lujo.
          </h2>
          <p>
            Una expresión nocturna donde el detalle, la textura y la presencia ocupan el centro.
          </p>
          <button className="button button--outline-light" onClick={() => navigate("special")}>
            Descubrir
          </button>
        </div>
      </section>

      <section
        className="history-banner"
        aria-label="Caballo frente a la arquitectura del rancho al atardecer"
      >
        <div className="history-banner__shade" />
        <div className="history-banner__content" style={{ paddingBottom: 100 }}>
          <span className="story-hero__rule" aria-hidden="true" />
          <span className="eyebrow eyebrow--light">05 — Nuestra historia</span>
          <h2
            style={{
              maxWidth: 460,
              margin: "18px 0 30px",
              fontSize: "clamp(39px, 4vw, 60px)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
            }}
          >
            Antes que una marca, una historia.
          </h2>
          <button className="story-hero__cta" onClick={() => navigate("story")}>
            Conoce nuestra historia
          </button>
        </div>
      </section>
    </main>
  );
}

function Collection({ navigate }: { navigate: (page: Page) => void }) {
  const [sort, setSort] = useState("Destacados");
  return (
    <main className="page-light">
      <section className="collection-hero">
        <ImagePlaceholder label="COLLECTION HERO" backgroundColor="#4B5B6E" variant="dark" corner />
        <div className="collection-hero__shade" />
        <div className="collection-hero__copy">
          <span className="eyebrow eyebrow--light">Colección Core</span>
          <h1>
            La colección
            <br />
            Tierra RSM
          </h1>
          <p>
            Una expresión contemporánea de un origen real. Diseñada para moverse del rancho a la
            ciudad.
          </p>
        </div>
      </section>
      <section className="collection shell">
        <div className="collection__intro">
          <p>
            Gorras de carácter sobrio, tonos naturales y detalles que hablan del oficio sin
            exageración.
          </p>
          <span>8 productos</span>
        </div>
        <div className="toolbar">
          <div className="toolbar__filters">
            <button>
              Disponibilidad <span>⌄</span>
            </button>
            <button>
              Color <span>⌄</span>
            </button>
          </div>
          <label>
            <span>Ordenar por</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Destacados</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
            </select>
          </label>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={`${product.name}-${product.image}`}
              product={product}
              navigate={navigate}
            />
          ))}
        </div>
        <div className="pagination" aria-label="Paginación">
          <button className="is-current">1</button>
          <button>2</button>
          <button aria-label="Página siguiente">
            <Icon name="arrow" />
          </button>
        </div>
      </section>
    </main>
  );
}

function Quantity({
  value,
  setValue,
  dark = false,
}: {
  value: number;
  setValue: (value: number) => void;
  dark?: boolean;
}) {
  return (
    <div className={`quantity ${dark ? "quantity--dark" : ""}`}>
      <button
        aria-label="Reducir cantidad"
        disabled={value === 1}
        onClick={() => setValue(Math.max(1, value - 1))}
      >
        <Icon name="minus" size={16} />
      </button>
      <span>{value}</span>
      <button aria-label="Aumentar cantidad" onClick={() => setValue(value + 1)}>
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
}

function Accordion({
  title,
  children,
  dark = false,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  open?: boolean;
}) {
  const [expanded, setExpanded] = useState(open);
  return (
    <div className={`accordion ${dark ? "accordion--dark" : ""}`}>
      <button onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        <span>{title}</span>
        <Icon name={expanded ? "minus" : "plus"} size={17} />
      </button>
      {expanded && <div className="accordion__content">{children}</div>}
    </div>
  );
}

function ProductInfo({
  dark = false,
  onAdd,
}: {
  dark?: boolean;
  onAdd: (quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const colors = dark
    ? ["#171716", "#2C2927", "#4A4039"]
    : ["#6B4D3B", "#493A33", "#99806C", "#D9C9B2"];
  return (
    <aside className={`product-info ${dark ? "product-info--dark" : ""}`}>
      <nav className="breadcrumbs" aria-label="Breadcrumbs">
        <span>Inicio</span>
        <b>/</b>
        <span>{dark ? "Special Edition" : "Colección Core"}</span>
      </nav>
      <span className="eyebrow">{dark ? "Special Edition · 01" : "Core Cap · 02"}</span>
      <h1>{dark ? "Nocturna" : "Caliza"}</h1>
      <p className="product-info__price">
        $1,599 MXN <small>Precio demostrativo</small>
      </p>
      <div className="variant">
        <div>
          <span>Color</span>
          <b>{dark ? "Negro" : "Tierra"}</b>
        </div>
        <div className="swatches swatches--large">
          {colors.map((color, index) => (
            <button
              key={color}
              className={index === 0 ? "is-selected" : ""}
              style={{ "--swatch": color } as React.CSSProperties}
              aria-label={`Color ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="buy-row">
        <Quantity value={quantity} setValue={setQuantity} dark={dark} />
        <button
          className={`button button--add ${dark ? "button--caliza" : ""}`}
          onClick={() => onAdd(quantity)}
        >
          Agregar al carrito
        </button>
      </div>
      <p className="availability">
        <span /> Disponible · Envío calculado en checkout
      </p>
      <div className="product-accordions">
        <Accordion title="Descripción" dark={dark} open>
          <p>
            {dark
              ? "Una edición de presencia sobria, definida por el contraste de sus materiales y una lectura tonal del emblema RSM."
              : "Una pieza de tonos cálidos y carácter cotidiano, pensada para acompañar el movimiento entre origen y ciudad."}
          </p>
        </Accordion>
        <Accordion title="Materiales" dark={dark}>
          <p>Información de composición pendiente de confirmación con el catálogo oficial.</p>
        </Accordion>
        <Accordion title="Ajuste y dimensiones" dark={dark}>
          <p>Especificaciones de ajuste y talla por confirmar.</p>
        </Accordion>
        <Accordion title="Envíos y devoluciones" dark={dark}>
          <p>Políticas sujetas a la configuración final de la tienda.</p>
        </Accordion>
      </div>
    </aside>
  );
}

function CorePdp({
  navigate,
  onAdd,
}: {
  navigate: (page: Page) => void;
  onAdd: (quantity: number) => void;
}) {
  return (
    <main className="page-light">
      <section className="pdp shell">
        <div className="product-gallery">
          <ImagePlaceholder
            className="product-gallery__main"
            label="PRODUCT GALLERY — MAIN"
            backgroundColor="#F2E8DA"
            variant="light"
          />
          <ImagePlaceholder
            className="product-gallery__wide"
            label="PRODUCT GALLERY — SIDE"
            backgroundColor="#FFFFFF"
            variant="light"
          />
          <ImagePlaceholder label="PRODUCT DETAIL" backgroundColor="#F2E8DA" variant="light" />
          <ImagePlaceholder label="PRODUCT DETAIL" backgroundColor="#FFFFFF" variant="light" />
        </div>
        <ProductInfo onAdd={onAdd} />
      </section>
      <section className="pdp-story">
        <ImagePlaceholder label="LIFESTYLE IMAGE" backgroundColor="#574D35" variant="dark" />
        <div>
          <span className="eyebrow">Del origen al presente</span>
          <h2>
            Materia que se siente.
            <br />
            Carácter que permanece.
          </h2>
          <p>
            Una paleta tomada de la tierra y una construcción visual que prioriza el producto sin
            perder su contexto.
          </p>
        </div>
      </section>
      <section className="related shell">
        <div className="related__head">
          <SectionHeading eyebrow="También puede interesarte" title="Más de Tierra RSM" />
          <TextLink onClick={() => navigate("collection")}>Ver todo</TextLink>
        </div>
        <div className="product-grid product-grid--featured">
          {products
            .slice(0, 4)
            .filter((p) => p.name !== "Caliza")
            .slice(0, 3)
            .map((p) => (
              <ProductCard key={p.name} product={p} navigate={navigate} />
            ))}
        </div>
      </section>
    </main>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`se-reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SpecialEditionHero() {
  const scrollToEditorial = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("special-editorial")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section className="se-hero">
      <ImagePlaceholder label="HERO NOCTURNA" backgroundColor="#191716" variant="dark" corner />
      <div className="se-hero__overlay" />
      <Reveal className="se-hero__content">
        <span className="eyebrow eyebrow--light">Special Edition</span>
        <p>Relieve de lujo</p>
        <h1>Nocturna</h1>
        <small>Una expresión de carácter, tradición y exclusividad.</small>
        <button className="button button--light" type="button" onClick={scrollToEditorial}>
          Descubrir la edición
        </button>
      </Reveal>
    </section>
  );
}

function EditorialIntro() {
  return (
    <section className="se-intro" id="special-editorial">
      <Reveal className="se-intro__inner shell">
        <span className="eyebrow eyebrow--light">Una edición extraordinaria</span>
        <h2>Inspiración en la penumbra</h2>
        <p>
          Nacida del contraste entre la oscuridad y la luz, NOCTURNA representa una interpretación
          contemporánea de la identidad ecuestre de RSM.
        </p>
      </Reveal>
    </section>
  );
}

function SpecialEditionDetails() {
  const items = [
    {
      title: "Nocturna",
      copy: "Una silueta de presencia sobria para la expresión más oscura de RSM.",
      label: "PRODUCTO — VISTA GENERAL",
      color: "#64242E",
    },
    {
      title: "El relieve",
      copy: "Un detalle distintivo que aparece con la luz y refuerza su carácter.",
      label: "DETALLE — EMBLEMA",
      color: "#574D35",
    },
    {
      title: "La textura",
      copy: "Materiales y acabados presentados con equilibrio y profundidad.",
      label: "DETALLE — MATERIAL",
      color: "#4B5B6E",
    },
  ];

  return (
    <section className="se-presentation">
      <div className="se-presentation__grid shell">
        {items.map((item) => (
          <Reveal className="se-product-card" key={item.title}>
            <div className="se-product-card__media">
              <ImagePlaceholder
                label={item.label}
                backgroundColor={item.color}
                aspectRatio="4 / 5"
                variant="dark"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function EditorialImageText({
  title,
  copy,
  label,
  color,
  reverse = false,
}: {
  title: string;
  copy: string;
  label: string;
  color: string;
  reverse?: boolean;
}) {
  return (
    <Reveal className={`se-detail ${reverse ? "se-detail--reverse" : ""}`}>
      <div className="se-detail__media">
        <ImagePlaceholder
          label={label}
          backgroundColor={color}
          aspectRatio="4 / 5"
          variant="dark"
        />
      </div>
      <div className="se-detail__copy">
        <span className="eyebrow eyebrow--light">El detalle</span>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </Reveal>
  );
}

function SpecialEditionProductCTA({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="se-product-cta">
      <Reveal className="se-product-cta__inner shell">
        <div className="se-product-cta__media">
          <ImagePlaceholder label="PRODUCTO — CTA" backgroundColor="#64242E" variant="dark" />
        </div>
        <div className="se-product-cta__copy">
          <span className="eyebrow eyebrow--light">Special Edition</span>
          <h2>Nocturna</h2>
          <small>Signature Cap</small>
          <p>Una edición que reúne tradición, diseño y carácter.</p>
          <button className="button button--light" onClick={() => navigate("nocturna")}>
            Descubrir Nocturna
          </button>
        </div>
      </Reveal>
    </section>
  );
}

function SpecialLanding({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <main className="se-page">
      <SpecialEditionHero />
      <EditorialIntro />
      <SpecialEditionDetails />
      <section className="se-story shell">
        <Reveal className="se-story__heading">
          <span className="eyebrow eyebrow--light">Relieve de lujo</span>
          <h2>Cada detalle cuenta una historia.</h2>
        </Reveal>
        <EditorialImageText
          title="El relieve de lujo"
          copy="Un emblema que expresa la identidad de RSM a través de acabados y detalles distintivos."
          label="DETALLE — EMBLEMA"
          color="#64242E"
        />
        <EditorialImageText
          reverse
          title="Materiales y carácter"
          copy="Una combinación de texturas y materiales seleccionados para dar personalidad a esta edición."
          label="DETALLE — MATERIAL"
          color="#574D35"
        />
        <EditorialImageText
          title="El ajuste y los acabados"
          copy="Cada elemento contribuye a una pieza que equilibra comodidad, diseño y atención al detalle."
          label="DETALLE — AJUSTE"
          color="#4B5B6E"
        />
      </section>
      <section className="se-lifestyle">
        <ImagePlaceholder label="LIFESTYLE — RANCHO" backgroundColor="#191716" variant="dark" />
        <div className="se-lifestyle__overlay" />
        <Reveal className="se-lifestyle__copy shell">
          <h2>Una identidad que trasciende.</h2>
          <p>Del rancho a la ciudad, sin perder nuestra esencia.</p>
        </Reveal>
      </section>
      <SpecialEditionProductCTA navigate={navigate} />
    </main>
  );
}

function NocturnaPdp({
  navigate,
  onAdd,
}: {
  navigate: (page: Page) => void;
  onAdd: (quantity: number) => void;
}) {
  return (
    <main className="dark-page">
      <section className="pdp pdp--dark shell">
        <div className="product-gallery product-gallery--dark">
          <ImagePlaceholder
            className="product-gallery__main"
            label="PRODUCT GALLERY — MAIN"
            backgroundColor="#191716"
            variant="dark"
          />
          <ImagePlaceholder label="MACRO DETAIL" backgroundColor="#64242E" variant="dark" />
          <ImagePlaceholder label="MATERIAL DETAIL" backgroundColor="#574D35" variant="dark" />
          <ImagePlaceholder
            className="product-gallery__wide"
            label="PRODUCT DETAIL"
            backgroundColor="#4B5B6E"
            variant="dark"
          />
        </div>
        <ProductInfo dark onAdd={onAdd} />
      </section>
      <section className="nocturna-story">
        <div>
          <span className="eyebrow eyebrow--light">Una nueva expresión</span>
          <h2>
            La misma raíz.
            <br />
            Otra luz.
          </h2>
          <p>
            Core y Special Edition comparten estructura, claridad comercial y una misma voz. La
            diferencia vive en la atmósfera.
          </p>
          <TextLink light onClick={() => navigate("special")}>
            Conocer el concepto
          </TextLink>
        </div>
        <ImagePlaceholder
          label="SPECIAL EDITION LIFESTYLE"
          backgroundColor="#64242E"
          variant="dark"
        />
      </section>
    </main>
  );
}

function EditorialSplitSection({
  id,
  eyebrow,
  title,
  copy,
  imageSrc,
  imageAlt,
  variant,
  reverse = false,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  imageSrc: string;
  imageAlt: string;
  variant: "origin" | "city";
  reverse?: boolean;
}) {
  return (
    <section
      id={id}
      className={`story-split story-split--${variant} ${reverse ? "story-split--reverse" : ""}`}
    >
      <div className="story-split__copy">
        <span className="story-split__rule" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <div className="story-split__media">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}

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

function TerritoryGrid() {
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
    <section className="territory-gallery">
      <div className="shell">
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
      </div>
    </section>
  );
}

function TerritoryEditorialBanner() {
  return (
    <section className="territory-editorial" aria-labelledby="territory-editorial-title">
      <figure className="territory-editorial__visual territory-editorial__visual--landscape">
        <img src={territoryLandscapeImg} alt="Hombre contemplando Monterrey desde la montaña" />
      </figure>
      <div className="territory-editorial__copy">
        <span className="territory-editorial__rule" aria-hidden="true" />
        <h2 id="territory-editorial-title">EL TERRITORIO</h2>
        <p>
          La arquitectura, los paisajes y la cultura ecuestre del norte de México forman parte del
          lenguaje visual de RSM.
        </p>
      </div>
      <figure className="territory-editorial__visual territory-editorial__visual--architecture">
        <img
          src="/assets/story-territory-architecture.webp"
          alt="Arquitectura de rancho con cúpula y farol"
        />
      </figure>
    </section>
  );
}

function Story() {
  return (
    <main className="page-light">
      <section className="story-hero">
        <div className="story-hero__shade" />
        <div className="story-hero__content shell">
          <span className="story-hero__rule" aria-hidden="true" />
          <span className="eyebrow eyebrow--light">NUESTRA HISTORIA</span>
          <h1>ANTES QUE UNA MARCA, UNA HISTORIA.</h1>
          <button
            className="story-hero__cta"
            type="button"
            onClick={() =>
              document.getElementById("story-origin")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            CONOCE NUESTRO UNIVERSO
          </button>
        </div>
      </section>
      <EditorialSplitSection
        id="story-origin"
        eyebrow="EL ORIGEN"
        title="EL ORIGEN"
        copy="Nuestra historia hunde sus raíces en la tierra de México, donde el amor por los caballos, las tradiciones y la vida de campo forman la base de la identidad."
        imageSrc="/assets/story-origin.webp"
        imageAlt="Rancho RSM enmarcado por montañas"
        variant="origin"
      />
      <TerritoryGrid />
      <TerritoryEditorialBanner />
      <EditorialSplitSection
        id="story-ranch-to-city"
        eyebrow="EVOLUCIÓN"
        reverse={false}
        title="DEL RANCHO A LA CIUDAD"
        copy="Una identidad que trasciende fronteras. Llevamos la esencia de nuestro origen —su fuerza y carácter— a un entorno contemporáneo sin perder lo que nos define."
        imageSrc="/assets/story-city.webp"
        imageAlt="Hombre con sombrero frente a la ciudad y las montañas"
        variant="city"
      />
    </main>
  );
}

function DesignSystem({ navigate }: { navigate: (page: Page) => void }) {
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
          Un sistema para expresar el mismo origen en dos atmósferas: Core / Light y Special Edition
          / Dark.
        </p>
      </section>
      <section className="system-section shell">
        <SectionHeading eyebrow="01 — Fundamentos" title="Color" />
        <div className="token-grid">
          {tokens.map(([name, color]) => (
            <article
              key={name}
              style={{ background: color, color: name === "Caliza" ? "#191716" : "#fff" }}
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
          <p>Nuestro origen nos define.</p>
        </div>
        <div className="type-specimen__body">
          <span>Figtree · 400 / 500 / 600</span>
          <p>
            Menos palabras. Más carácter. Una jerarquía clara para navegar, descubrir y comprar.
          </p>
        </div>
      </section>
      <section className="system-section shell">
        <SectionHeading eyebrow="03 — Componentes" title="Comercio con carácter." />
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
            ["Native + CSS", "Tipografía, espaciado, swatches, tarjetas y atmósfera Dark."],
            ["RSM Custom", "Bento Nocturna y módulos narrativos asimétricos."],
            ["Por validar", "Header liquid glass existente y comportamiento sticky final."],
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
      <button type="button" onClick={select} aria-label={`Activar paso ${index + 1}`}>
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
          setActiveStep(Number((visible.target as HTMLElement).dataset.careStep));
        }
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0.05, 0.2, 0.4] },
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const selectStep = (index: number) => {
    setActiveStep(index);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
          <nav className="care-story__nav" aria-label="Seleccionar paso de cuidado">
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
            Estos consejos son orientativos. Siempre deben prevalecer las instrucciones específicas
            indicadas para cada producto.
          </p>
        </div>
      </div>
    </section>
  );
}

function CareMaterialAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="care-material-accordion">
      <Accordion title={title}>{children}</Accordion>
    </div>
  );
}

function CarePage({ navigate }: { navigate: (page: Page) => void }) {
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
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
            Cada gorra acompaña historias, caminos y momentos. Un cuidado adecuado ayuda a conservar
            su forma, apariencia y materiales con el paso del tiempo.
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
              Antes de limpiar tu gorra, identifica sus materiales y revisa las indicaciones
              específicas del producto. No todos los tejidos, parches y acabados requieren el mismo
              tratamiento.
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
              La forma en que guardas y utilizas tu gorra influye en su conservación. Evita
              aplastarla, exponerla a humedad prolongada o almacenarla sin ventilación.
            </p>
            <TextLink onClick={() => navigate("collection")}>Explorar la colección</TextLink>
          </div>
        </div>
      </section>

      <section className="care-information">
        <div className="care-information__grid shell">
          <div className="care-information__heading">
            <span className="eyebrow">Según su composición</span>
            <h2>Cada material merece su propio cuidado.</h2>
            <p>
              Las indicaciones oficiales de cada producto tienen prioridad sobre estas
              recomendaciones generales.
            </p>
          </div>
          <div className="care-information__accordions">
            <CareMaterialAccordion title="Algodón y tejidos textiles">
              <p>
                Retira el polvo en seco y trata únicamente zonas puntuales cuando las indicaciones
                del producto lo permitan. Evita empapar el tejido.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Poliéster y materiales sintéticos">
              <p>
                Usa un paño suave y evita calor intenso, fricción fuerte o productos químicos no
                especificados para el material.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Malla tipo trucker">
              <p>
                Manipula la malla con suavidad para evitar deformaciones. Retira polvo sin presionar
                ni doblar los paneles.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Parches, bordados y aplicaciones">
              <p>
                Limpia alrededor de las aplicaciones con movimientos suaves y evita enganchar,
                raspar o saturar sus bordes.
              </p>
            </CareMaterialAccordion>
            <CareMaterialAccordion title="Ante, gamuza o cuero, cuando aplique">
              <p>
                Sigue únicamente las instrucciones específicas del producto. No apliques
                limpiadores, impermeabilizantes o solventes sin una indicación verificada.
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
                No lo recomendamos como regla general. Revisa siempre las instrucciones específicas
                de tu producto antes de cualquier lavado.
              </p>
            </Accordion>
            <Accordion dark title="¿Cómo evito que pierda su forma?">
              <p>
                Manipúlala por sus zonas firmes, evita colocar peso encima y guárdala con espacio
                suficiente.
              </p>
            </Accordion>
            <Accordion dark title="¿Qué hago si se moja?">
              <p>
                Retira el exceso de humedad sin retorcerla y deja que seque naturalmente en un lugar
                ventilado, si el material lo permite.
              </p>
            </Accordion>
            <Accordion dark title="¿Cómo limpio una gorra con bordados o parches?">
              <p>
                Trabaja de forma localizada y suave, evitando fricción intensa sobre hilos, bordes y
                aplicaciones.
              </p>
            </Accordion>
            <Accordion dark title="¿Cómo debo guardarla?">
              <p>
                En un espacio limpio, seco y ventilado, sin presión sobre la corona o la visera.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="care-cta">
        <span className="eyebrow">Colecciones RSM</span>
        <h2>Listas para acompañarte.</h2>
        <p>Descubre las colecciones de RSM Universe.</p>
        <button className="button" type="button" onClick={() => navigate("collection")}>
          Explorar la colección
        </button>
      </section>
    </main>
  );
}

function Comparison() {
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
      <section className="comparison__hero shell">
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
      </section>
      <section className="comparison__table shell">
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
      </section>
    </main>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="newsletter">
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
    </section>
  );
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <Newsletter />
      <footer>
        <div className="footer__brand">
          <img src="/assets/rsm-logo-white.png" alt="RSM" />
          <p>
            Nuestro origen nos define.
            <br />
            No nos limita.
          </p>
        </div>
        <div className="footer__nav">
          <span>Explorar</span>
          <button onClick={() => navigate("collection")}>Colección Core</button>
          <button onClick={() => navigate("special")}>Special Edition</button>
          <button onClick={() => navigate("story")}>Nuestra historia</button>
          <button onClick={() => navigate("care")}>Cuidado de tus gorras</button>
        </div>
        <div className="footer__nav">
          <span>Legales</span>
          <button>Aviso de privacidad</button>
          <button>Términos y condiciones</button>
          <button>Política de devolución</button>
          <button>Contacto</button>
        </div>
        <div className="footer__meta footer__nav">
          <span>Propuesta conceptual</span>
          <p>Contenido y precios demostrativos. Sujeto a catálogo y políticas oficiales.</p>
          <button onClick={() => navigate("system")}>Design System</button>
          <button onClick={() => navigate("compare")}>Comparativa UX/UI</button>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Rancho San Marco</span>
          <span>Monterrey · México · El mundo</span>
        </div>
      </footer>
    </>
  );
}

function CartDrawer({ open, close, count }: { open: boolean; close: () => void; count: number }) {
  return (
    <div className={`cart-layer ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button className="cart-layer__backdrop" aria-label="Cerrar carrito" onClick={close} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Bolsa de compra">
        <div className="cart-drawer__head">
          <h2>Tu bolsa</h2>
          <button aria-label="Cerrar" onClick={close}>
            <Icon name="close" />
          </button>
        </div>
        {count ? (
          <>
            <div className="cart-item">
              <ImagePlaceholder
                label="PRODUCT IMAGE"
                backgroundColor="#F2E8DA"
                aspectRatio="1"
                variant="light"
              />
              <div>
                <b>Selección RSM</b>
                <span>Color seleccionado</span>
                <p>{count} × $1,599 MXN</p>
              </div>
            </div>
            <div className="cart-drawer__total">
              <span>Subtotal</span>
              <b>${(1599 * count).toLocaleString("es-MX")} MXN</b>
            </div>
            <button className="button">Ir al checkout</button>
            <small>Impuestos y envío calculados en checkout.</small>
          </>
        ) : (
          <div className="cart-empty">
            <p>Tu bolsa está vacía.</p>
            <small>Explora la colección Tierra RSM.</small>
          </div>
        )}
      </aside>
    </div>
  );
}

export default function App() {
  const hashPath = window.location.hash.replace(/^#\/?/, "");
  const pathname = window.location.pathname.replace(/^\/|\/$/g, "");
  const initial = hashPath || pathname;
  const [page, setPage] = useState<Page>(routeMap[initial] || "home");
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = (next: Page) => {
    setPage(next);
    if (next === "care") {
      window.history.pushState({}, "", "/pages/cuidado-de-gorras");
    } else {
      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
      }
      window.location.hash = routes[next] ? `/${routes[next]}` : "/";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const path = hash || window.location.pathname.replace(/^\/|\/$/g, "");
      setPage(routeMap[path] || "home");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);
    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

  const content = useMemo(() => {
    const add = (quantity: number) => {
      setCartCount((value) => value + quantity);
      setCartOpen(true);
    };
    switch (page) {
      case "collection":
        return <Collection navigate={navigate} />;
      case "caliza":
        return <CorePdp navigate={navigate} onAdd={add} />;
      case "special":
        return <SpecialLanding navigate={navigate} />;
      case "nocturna":
        return <NocturnaPdp navigate={navigate} onAdd={add} />;
      case "story":
        return <Story />;
      case "care":
        return <CarePage navigate={navigate} />;
      case "system":
        return <DesignSystem navigate={navigate} />;
      case "compare":
        return <Comparison />;
      default:
        return <Home navigate={navigate} />;
    }
  }, [page]);

  return (
    <div className={`app app--${page}`}>
      <Header
        page={page}
        navigate={navigate}
        cartCount={cartCount}
        openCart={() => setCartOpen(true)}
      />
      {content}
      <Footer navigate={navigate} />
      <CartDrawer open={cartOpen} close={() => setCartOpen(false)} count={cartCount} />
    </div>
  );
}
