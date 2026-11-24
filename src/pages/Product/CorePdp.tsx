import { Section } from "../../components/layout/SectionContainer";
import type { Product } from "../../types/product";
import type { NavigateFn } from "../../types/navigation";
import type { AddToCartFn } from "../../types/cart";
import { ProductGallery } from "../../components/product/ProductGallery";
import { ProductInfo } from "../../components/product/ProductInfo";
import { ImagePlaceholder } from "../../components/ui/ImagePlaceholder";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { TextLink } from "../../components/ui/TextLink";
import { coreProducts } from "../../data/products";
import { ProductCard } from "../../components/product/ProductCard";

export function CorePdp({
  product,
  navigate,
  onAdd,
  onQuickAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  onAdd: (quantity: number) => void;
  onQuickAdd: AddToCartFn;
}) {
  return (
    <main className="page-light">
      <Section className="pdp" contentClassName="pdp__container">
        <ProductGallery product={product} />
        <ProductInfo product={product} navigate={navigate} onAdd={onAdd} />
      </Section>
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
      <Section className="related" contentClassName="related__container">
        <div className="related__head">
          <SectionHeading
            eyebrow="También puede interesarte"
            title={
              <>
                Más de Tierra <span style={{ color: "var(--arcilla)" }}>RSM</span>
              </>
            }
          />
          <TextLink onClick={() => navigate("collection")}>Ver todo</TextLink>
        </div>
        <div className="product-grid product-grid--featured">
          {coreProducts
            .filter((p) => p.id !== product.id)
            .slice(0, 3)
            .map((p) => (
              <ProductCard key={p.id} product={p} navigate={navigate} onAdd={onQuickAdd} />
            ))}
        </div>
      </Section>
    </main>
  );
}
