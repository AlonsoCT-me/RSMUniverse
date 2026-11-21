import { EditorialSplitSection } from "../../components/editorial/EditorialSplitSection";
import { TerritoryGrid } from "../../components/editorial/TerritoryGrid";
import { TerritoryEditorialBanner } from "../../components/editorial/TerritoryEditorialBanner";
import { assetUrl } from "../../asset-url";

export function Story() {
  return (
    <main className="page-light">
      <section className="story-hero">
        <div className="story-hero__shade" />
        <div className="story-hero__content shell">
          <span className="sr-only eyebrow eyebrow--light">
            NUESTRA HISTORIA
          </span>
          <h1>
            Antes que <br></br>una marca, <br></br> una historia.
          </h1>
        </div>
      </section>
      <EditorialSplitSection
        id="story-origin"
        eyebrow=""
        title="EL ORIGEN"
        copy="Nuestra historia hunde sus raíces en la tierra de México, donde el amor por los caballos, las tradiciones y la vida de campo forman la base de la identidad."
        imageSrc={assetUrl("/assets/story-origin.webp")}
        imageAlt="Rancho RSM enmarcado por montañas"
        variant="origin"
      />
      <TerritoryGrid />
      <TerritoryEditorialBanner />
      <EditorialSplitSection
        id="story-ranch-to-city"
        eyebrow=""
        reverse={false}
        title="DEL RANCHO A LA CIUDAD"
        copy="Una identidad que trasciende fronteras. Llevamos la esencia de nuestro origen —su fuerza y carácter— a un entorno contemporáneo sin perder lo que nos define."
        imageSrc={assetUrl("/assets/story-city.webp")}
        imageAlt="Hombre con sombrero frente a la ciudad y las montañas"
        variant="city"
      />
    </main>
  );
}
