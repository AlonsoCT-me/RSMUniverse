import territoryLandscapeImg from "@/imports/home-SIN_FRONTERAS-2.jpg";
import { assetUrl } from "../../asset-url";

export function TerritoryEditorialBanner() {
  return (
    <section
      className="territory-editorial"
      aria-labelledby="territory-editorial-title"
    >
      <figure className="territory-editorial__visual territory-editorial__visual--landscape">
        <img
          src={territoryLandscapeImg}
          alt="Hombre contemplando Monterrey desde la montaña"
        />
      </figure>
      <div className="territory-editorial__copy">
        <h2 id="territory-editorial-title">EL TERRITORIO</h2>
        <p>
          La arquitectura, los paisajes y la cultura ecuestre del norte de
          México forman parte del lenguaje visual de RSM.
        </p>
      </div>
      <figure className="territory-editorial__visual territory-editorial__visual--architecture">
        <img
          src={assetUrl("/assets/story-territory-architecture.webp")}
          alt="Arquitectura de rancho con cúpula y farol"
        />
      </figure>
    </section>
  );
}
