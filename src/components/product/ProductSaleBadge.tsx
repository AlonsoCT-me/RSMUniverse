import { getPriceState } from "../../utils/pricing";

export type ProductSaleBadgeMode = "hidden" | "sale" | "offer" | "percentage";
const labels = { sale: "SALE", offer: "OFERTA" } as const;

export function ProductSaleBadge({
  price,
  compareAtPrice,
  mode = "hidden",
}: {
  price: number;
  compareAtPrice?: number;
  mode?: ProductSaleBadgeMode;
}) {
  const state = getPriceState(price, compareAtPrice);
  if (!state?.onSale || mode === "hidden") return null;
  return (
    <span className="product-price__discount">
      {mode === "percentage" ? `${state.discountPercentage}%` : labels[mode]}
      <span className="sr-only">
        {mode === "percentage" ? " de descuento" : ": producto en oferta"}
      </span>
    </span>
  );
}
