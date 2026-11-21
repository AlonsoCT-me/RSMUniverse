import type { NavigateFn } from "../../types/navigation";
import {
  SpecialEditionHero,
  EditorialIntro,
  SpecialEditionDetails,
  EditorialImageText,
  SpecialEditionProductCTA,
} from "./SpecialEditionSections";
import { Reveal } from "../../components/editorial/Reveal";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";

export function SpecialLanding({ navigate }: { navigate: NavigateFn }) {
  return (
    <main className="se-page">
      <SpecialEditionHero />
      <EditorialIntro />
      <SpecialEditionDetails navigate={navigate} />
      <section className="se-story shell">
        <Reveal className="se-story__heading">
          <span className="sr-only eyebrow eyebrow--light">
            Relieve de lujo
          </span>
          <h2>
            Cada detalle <br />
            cuenta una historia.
          </h2>
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
      <section className="se-lifestyle hidden">
        <ImagePlaceholder
          label="LIFESTYLE — RANCHO"
          backgroundColor="#191716"
          variant="dark"
        />
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
