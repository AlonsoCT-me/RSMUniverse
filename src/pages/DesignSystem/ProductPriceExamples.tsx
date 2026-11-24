import { Section } from "../../components/layout/SectionContainer";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ProductPrice } from "../../components/product/ProductPrice";
import { ProductCard } from "../../components/product/ProductCard";
import type { ProductSaleBadgeMode } from "../../components/product/ProductSaleBadge";
import { coreProducts, specialEditionProducts } from "../../data/products";
import type { Product } from "../../types/product";

// Isolated examples: never mutate the catalog or submit illustrative prices to cart.
const examples: { product: Product; badge: ProductSaleBadgeMode }[] = [
  { product: { ...coreProducts[0], id: "price-demo-regular" }, badge: "hidden" },
  {
    product: {
      ...coreProducts[0],
      id: "price-demo-sale",
      priceAmount: 1279,
      compareAtPrice: 1599,
      name: "Modelo ilustrativo de nombre largo",
    },
    badge: "sale",
  },
  {
    product: {
      ...specialEditionProducts[0],
      id: "price-demo-special",
      priceAmount: 1279,
      compareAtPrice: 1599,
    },
    badge: "percentage",
  },
  {
    product: {
      ...coreProducts[1],
      id: "price-demo-offer",
      priceAmount: 1279,
      compareAtPrice: 1599,
    },
    badge: "offer",
  },
];
const noAction = () => {};

export function ProductPriceExamples() {
  return (
    <Section className="system-section price-examples" contentClassName="system-section__container">
      <SectionHeading eyebrow="05 — Precios" title="Jerarquía comercial." />
      <p className="price-examples__notice">
        Datos ilustrativos para validar diseño. No representan promociones aprobadas. La navegación
        y Quick Add de estas muestras están desactivados.
      </p>
      <div className="component-board price-examples__details">
        <div className="component-board__light">
          <span className="component-label">PDP · Regular</span>
          <ProductPrice price={1599} variant="detail" />
          <span className="component-label">PDP · Promoción, porcentaje y ahorro</span>
          <ProductPrice
            price={1279}
            compareAtPrice={1599}
            variant="detail"
            showDiscountBadge
            showSavings
          />
        </div>
        <div className="component-board__dark">
          <span className="component-label">Special Edition · Regular</span>
          <ProductPrice price={1599} variant="detail" />
          <span className="component-label">Special Edition · Promoción</span>
          <ProductPrice
            price={1279}
            compareAtPrice={1599}
            variant="detail"
            showDiscountBadge
            showSavings
          />
        </div>
      </div>
      <div className="product-grid price-examples__cards" inert>
        {examples.map(({ product, badge }) => (
          <ProductCard
            key={product.id}
            product={product}
            saleBadge={badge}
            navigate={noAction}
            onAdd={noAction}
          />
        ))}
      </div>
    </Section>
  );
}
