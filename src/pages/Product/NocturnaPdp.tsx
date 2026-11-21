import type { Product } from "../../types/product";
import type { NavigateFn } from "../../types/navigation";
import { ProductGallery } from "../../components/product/ProductGallery";
import { ProductInfo } from "../../components/product/ProductInfo";
import { TextLink } from "../../components/ui/TextLink";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";

export function NocturnaPdp({
  product,
  navigate,
  onAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  onAdd: (quantity: number) => void;
}) {
  return (
    <main className="dark-page">
      <section className="pdp pdp--dark shell">
        <ProductGallery product={product} dark />
        <ProductInfo product={product} navigate={navigate} dark onAdd={onAdd} />
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
            Core y Special Edition comparten estructura, claridad comercial y
            una misma voz. La diferencia vive en la atmósfera.
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
