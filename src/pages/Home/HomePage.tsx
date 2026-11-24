import { SectionContainer } from "../../components/layout/SectionContainer";
import type { NavigateFn } from "../../types/navigation";
import type { AddToCartFn } from "../../types/cart";
import { MediaHero } from "../../components/editorial/MediaHero";
import { TextLink } from "../../components/ui/TextLink";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { coreProducts } from "../../data/products";
import { ProductCard } from "../../components/product/ProductCard";
import { assetUrl } from "../../asset-url";

export function Home({
  navigate,
  onAdd,
}: {
  navigate: NavigateFn;
  onAdd: AddToCartFn;
}) {
  return (
    <main>
      <MediaHero
        variant="image"
        ariaLabel="Gorra RSM sobre piedra en un espacio arquitectónico"
        container="full-width"
        media={{
          desktop: { src: assetUrl("/assets/home-hero.webp"), objectPosition: "center center" },
          tablet: { objectPosition: "68% center" },
          mobile: { objectPosition: "72% center" },
        }}
        title={<>Nuestro origen <br />nos define</>}
        subtitle="No nos limita"
        height={{
          desktop: "large",
          tablet: { height: "800px", minHeight: "720px" },
          mobile: { height: "760px", minHeight: "720px" },
        }}
        contentPosition={{ desktop: { horizontal: "left", vertical: "bottom", textAlign: "left" } }}
        contentInsets={{
          desktop: { left: "clamp(32px, 8vw, 120px)", bottom: "30%" },
          tablet: { left: "22px", right: "22px", bottom: "55px" },
        }}
        overlay={{
          desktop: {
            type: "gradient", color: "dark", opacity: 0.82, direction: "left-to-right", coverage: 100, maxWidth: "800px",
            stops: [{ opacity: 0.82, position: 0 }, { opacity: 0.35, position: 48 }, { opacity: 0.06, position: 75 }],
          },
          tablet: {
            type: "gradient", color: "dark", opacity: 0.87, direction: "bottom-to-top", coverage: 100, maxWidth: "800px",
            stops: [{ opacity: 0.87, position: 0 }, { opacity: 0.03, position: 68 }],
          },
        }}
        style={{ "--media-hero-overlay-color": "#0e0a08", backgroundColor: "#271d18" }}
        cta={{ label: "Explorar la colección", style: "outline-light", onClick: () => navigate("collection") }}
        index={{ visible: true, current: "01", total: "05", tabletVisible: false, mobileVisible: false }}
      />

      <section className="hidden borderless">
        <div className="borderless__image" style={{ width: "780px" }}>
          <img
            className="home-lifestyle-image"
            src={assetUrl("/assets/home-sin-fronteras-2.jpeg")}
            alt="Hombre con gorra RSM contemplando Monterrey desde la montaña"
            style={{ width: "800px" }}
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
        style={{
          backgroundImage: `url("${assetUrl("/assets/home-sin-fronteras-2.jpeg")}")`,
        }}
      >
        <div className="borderless-fullwidth__shade hidden" />
        <SectionContainer container="contained" className="borderless-fullwidth__content">
          <div className="borderless-fullwidth__text">
            <h2 className="borderless-fullwidth__title">Sin fronteras.</h2>
            <p className="sr-only">
              Una identidad que se mueve con naturalidad entre el origen y una forma contemporánea
              de vivirlo.
            </p>
            <TextLink light onClick={() => navigate("story")}>
              Conocer el universo RSM
            </TextLink>
            {/*<button
            className="button button--outline-light"
            onClick={() => navigate("collection")}
          >
            Conoce el universo RSM
          </button>*/}
          </div>
        </SectionContainer>
      </section>

      <section className="featured-collection">
        <div className="featured-collection__banner">
          <SectionContainer container="contained">
            <div className="featured-collection__head" style={{ backgroundColor: "" }}>
              <SectionHeading
                eyebrow=""
                title={
                  <>
                    La colección <br />
                    <span className="featured-collection__accent">Tierra RSM</span>
                  </>
                }
                copy=""
              />
              <TextLink onClick={() => navigate("collection")}>Ver colección completa</TextLink>
            </div>
          </SectionContainer>
        </div>
        <div className="featured-collection__body">
          <SectionContainer container="contained">
            <div className="product-grid product-grid--featured">
              {coreProducts.map((product) => (
                <ProductCard key={product.id} product={product} navigate={navigate} onAdd={onAdd} />
              ))}
            </div>
          </SectionContainer>
        </div>
      </section>

      <section className="special-split">
        <div className="special-split__image">
          <img
            className="home-special-image"
            src={assetUrl("/assets/rsm-special-edition-cap.jpeg")}
            alt="Detalle del emblema metálico de la edición especial RSM"
          />
        </div>
        <div className="special-split__copy">
          <span className="eyebrow eyebrow--light">Special Edition</span>
          <h2 style={{ width: "100%" }}>Estirpe de lujo.</h2>
          <p className="sr-only">
            Una expresión nocturna donde el detalle, la textura y la presencia ocupan el centro.
          </p>
          <button
            className="button button--outline-light"
            style={{ width: "123px", minWidth: "240px" }}
            onClick={() => navigate("special")}
          >
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
          <h2
            style={{
              maxWidth: 460,
              margin: "18px 0 30px",
              letterSpacing: "-0.035em",
            }}
          >
            Antes que <br></br>una marca, <br></br> una historia.
          </h2>
          <TextLink onClick={() => navigate("story")}>Conoce nuestra historia</TextLink>
        </div>
      </section>
    </main>
  );
}
