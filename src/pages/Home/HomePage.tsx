import type { NavigateFn } from "../../types/navigation";
import type { AddToCartFn } from "../../types/cart";
import { Icon } from "../../components/ui/Icon";
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
      <section
        className="home-hero"
        aria-label="Gorra RSM sobre piedra en un espacio arquitectónico"
      >
        <div className="home-hero__shade" style={{ width: "800px" }} />
        <div className="home-hero__content">
          <h1>
            Nuestro origen <br></br>nos define
            <em>No nos limita</em>
          </h1>
          <button
            className="button button--outline-light"
            onClick={() => navigate("collection")}
          >
            Explorar la colección <Icon name="arrow" size={18} />
          </button>
        </div>
        <span className="hero-index">01 / 05</span>
      </section>

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
            Una identidad que se mueve con naturalidad entre el origen y una
            forma contemporánea de vivirlo.
          </p>
          <TextLink onClick={() => navigate("story")}>
            Conocer el universo RSM
          </TextLink>
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
        <div className="borderless-fullwidth__shade" />
        <div className="borderless-fullwidth__content shell">
          <div className="borderless-fullwidth__text">
            <h2 className="borderless-fullwidth__title">Sin fronteras.</h2>
            <p className="sr-only">
              Una identidad que se mueve con naturalidad entre el origen y una
              forma contemporánea de vivirlo.
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
        </div>
      </section>

      <section className="featured-collection">
        <div className="featured-collection__banner">
          <div className="shell">
            <div
              className="featured-collection__head"
              style={{ backgroundColor: "" }}
            >
              <SectionHeading
                eyebrow=""
                title={
                  <>
                    La colección <br />
                    <span className="featured-collection__accent">
                      Tierra RSM
                    </span>
                  </>
                }
                copy=""
              />
              <TextLink onClick={() => navigate("collection")}>
                Ver colección completa
              </TextLink>
            </div>
          </div>
        </div>
        <div className="featured-collection__body">
          <div className="shell">
            <div className="product-grid product-grid--featured">
              {coreProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  navigate={navigate}
                  onAdd={onAdd}
                />
              ))}
            </div>
          </div>
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
            Una expresión nocturna donde el detalle, la textura y la presencia
            ocupan el centro.
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
          <TextLink onClick={() => navigate("story")}>
            Conoce nuestra historia
          </TextLink>
        </div>
      </section>
    </main>
  );
}
