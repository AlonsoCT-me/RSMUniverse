import { EditorialSplitSection } from "../../components/editorial/EditorialSplitSection";
import { TerritoryGrid } from "../../components/editorial/TerritoryGrid";
import { TerritoryEditorialBanner } from "../../components/editorial/TerritoryEditorialBanner";
import { assetUrl } from "../../asset-url";

export function Story() {
  return (
    <main className="page-light" id="our-story">
      <section className="story-hero">
        <div className="story-hero__shade" />
        <div className="story-hero__content shell">
          <span className="sr-only eyebrow eyebrow--light">
            NUESTRA HISTORIA
          </span>
          <h1 className="sr-only">
            Antes que <br></br>una marca, <br></br> una historia.
          </h1>
        </div>
      </section>
      <EditorialSplitSection
        id="story-origin"
        eyebrow=""
        title="EL ORIGEN"
        copy="Nuestra historia hunde sus raíces en la tierra de México, donde el amor por los caballos, las tradiciones y la vida de campo forman la base de la identidad."
        variant="slider"
        layout="text-left"
        ratio="30-70"
        mobileLayout="text-first"
        sectionStyle={{
          "--story-split-tablet-columns": "minmax(480px, 52fr) minmax(0, 48fr)",
        }}
        slides={[
          {
            imageSrc: assetUrl("/assets/story-origin.webp"),
            imageAlt: "Rancho RSM enmarcado por montañas",
            objectPosition: "54% center",
          },
          {
            imageSrc: assetUrl(
              "/assets/Appaloosa Rider Across Green Hills.png",
            ),
            imageAlt:
              "Jinete sobre un caballo Appaloosa entre las colinas verdes",
          },
          {
            imageSrc: assetUrl("/assets/Golden-Hour Equestrian Courtyard.png"),
            imageAlt: "Patio ecuestre de piedra con caballos al atardecer",
          },
        ]}
        sliderOptions={{
          arrows: true,
          dots: true,
          animation: "fade",
          duration: 600,
          loop: true,
          autoplay: true,
        }}
      />
      <TerritoryGrid />
      <TerritoryEditorialBanner />
      <EditorialSplitSection
        id="story-ranch-to-city"
        eyebrow=""
        title="DEL RANCHO A LA CIUDAD"
        copy="Una identidad que trasciende fronteras. Llevamos la esencia de  —su fuerza y carácter— a un entorno contemporáneo sin perder lo que nos define."
        imageSrc={assetUrl("/assets/story-city.webp")}
        imageAlt="Hombre con sombrero frente a la ciudad y las montañas"
        variant="static"
        layout="text-left"
        ratio="25-75"
        mobileLayout="text-first"
        objectPosition="50% center"
        sectionStyle={{
          "--story-split-tablet-columns": "minmax(480px, 52fr) minmax(0, 48fr)",
        }}
      />
    </main>
  );
}
