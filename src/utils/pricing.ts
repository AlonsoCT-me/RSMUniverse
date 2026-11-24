/** Prototype amounts are expressed in major currency units (pesos), never cents. */
export function isValidPrice(value: number): boolean {
  return Number.isFinite(value) && value >= 0;
}

export function getPriceState(price: number, compareAtPrice?: number) {
  if (!isValidPrice(price)) return null;
  const onSale =
    compareAtPrice !== undefined && isValidPrice(compareAtPrice) && compareAtPrice > price;
  return {
    price,
    compareAtPrice: onSale ? compareAtPrice : undefined,
    onSale,
    discountPercentage: onSale ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0,
    savings: onSale ? Math.round((compareAtPrice - price) * 100) / 100 : 0,
  };
}

export function formatMoney(amount: number, currency = "MXN"): string {
  if (!isValidPrice(amount)) return "Precio no disponible";
  const code = /^[A-Za-z]{3}$/.test(currency) ? currency.toUpperCase() : "MXN";
  return (
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: code,
      currencyDisplay: "narrowSymbol",
      minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(amount) + ` ${code}`
  );
}
