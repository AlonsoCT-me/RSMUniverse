import { formatMoney, getPriceState } from "../../utils/pricing";

export interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  currency?: string;
  variant?: "card" | "detail";
  showDiscountBadge?: boolean;
  showSavings?: boolean;
}

export function ProductPrice({
  price,
  compareAtPrice,
  currency = "MXN",
  variant = "card",
  showDiscountBadge = false,
  showSavings = false,
}: ProductPriceProps) {
  const state = getPriceState(price, compareAtPrice);
  return (
    <div
      className={`product-price product-price--${variant}${state?.onSale ? " product-price--on-sale" : ""}`}
    >
      <div className="product-price__amounts">
        {state?.onSale ? (
          <del className="product-price__compare">
            <span className="sr-only">Precio anterior: </span>
            {formatMoney(state.compareAtPrice!, currency)}
          </del>
        ) : null}
        <span className="product-price__current">
          <span className="sr-only">Precio actual: </span>
          {formatMoney(price, currency)}
        </span>
        {state?.onSale && showDiscountBadge ? (
          <span className="product-price__discount">
            <span className="sr-only">Descuento: </span>
            {state.discountPercentage}%<span className="sr-only"> de descuento</span>
          </span>
        ) : null}
      </div>
      {state?.onSale && showSavings ? (
        <span className="product-price__savings">
          Ahorras {formatMoney(state.savings, currency)}
        </span>
      ) : null}
    </div>
  );
}
