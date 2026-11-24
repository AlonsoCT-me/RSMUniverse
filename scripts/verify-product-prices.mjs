import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL("../", import.meta.url));
const cache = new Map();
function load(path) {
  if (cache.has(path)) return cache.get(path);
  const exports = {};
  cache.set(path, exports);
  const compiled = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText;
  runInNewContext(compiled, {
    exports,
    require: (specifier) => {
      if (!specifier.startsWith(".")) return require(specifier);
      const base = resolve(dirname(path), specifier);
      return load([base + ".ts", base + ".tsx"].find(existsSync));
    },
  });
  return exports;
}
const { getPriceState, formatMoney } = load(resolve(root, "src/utils/pricing.ts"));
const { ProductPrice } = load(resolve(root, "src/components/product/ProductPrice.tsx"));
const { ProductSaleBadge } = load(resolve(root, "src/components/product/ProductSaleBadge.tsx"));
const render = (props) => renderToStaticMarkup(createElement(ProductPrice, props));

test("MXN preserves whole pesos and formats fractional amounts", () => {
  assert.equal(formatMoney(1599), "$1,599 MXN");
  assert.equal(formatMoney(1279.5), "$1,279.50 MXN");
  assert.equal(formatMoney(0), "$0 MXN");
  assert.equal(formatMoney(10, "usd"), "$10 USD");
});
test("valid promotion derives savings and rounded percentage once", () => {
  const state = getPriceState(1279, 1599);
  assert.equal(state.onSale, true);
  assert.equal(state.discountPercentage, 20);
  assert.equal(state.savings, 320);
  assert.equal(state.price, 1279);
  assert.equal(getPriceState(0, 100).discountPercentage, 100);
  assert.equal(getPriceState(0.1, 0.3).savings, 0.2);
});
test("missing, equal, lower, non-finite or negative comparison is regular", () => {
  for (const compare of [undefined, 1599, 1000, 0, -1, NaN, Infinity, -Infinity]) {
    const state = getPriceState(1599, compare);
    assert.equal(state.onSale, false);
    assert.equal(state.compareAtPrice, undefined);
    assert.equal(state.savings, 0);
    assert.equal(state.discountPercentage, 0);
    const html = render({
      price: 1599,
      compareAtPrice: compare,
      showSavings: true,
      showDiscountBadge: true,
    });
    assert.doesNotMatch(html, /<del|product-price__discount|Ahorras|--on-sale/);
  }
});
test("invalid effective price never advertises a discount or displays NaN", () => {
  for (const price of [-1, NaN, Infinity, -Infinity]) {
    assert.equal(getPriceState(price, 1599), null);
    assert.equal(formatMoney(price), "Precio no disponible");
    assert.doesNotMatch(
      render({ price, compareAtPrice: 1599, showSavings: true }),
      /<del|Ahorras|NaN/,
    );
  }
});
test("sale markup includes semantic old price and accessible current price", () => {
  const html = render({
    price: 1279,
    compareAtPrice: 1599,
    variant: "detail",
    showSavings: true,
    showDiscountBadge: true,
  });
  assert.match(html, /product-price--detail product-price--on-sale/);
  assert.match(html, /<del[^>]*>.*Precio anterior: .*\$1,599 MXN<\/del>/);
  assert.match(html, /Precio actual: .*\$1,279 MXN/);
  assert.match(html, /20%/);
  assert.match(html, /Ahorras \$320 MXN/);
});
test("optional savings and percentage remain independently configurable", () => {
  const props = { price: 1279, compareAtPrice: 1599 };
  assert.doesNotMatch(render(props), /product-price__discount|Ahorras/);
  assert.match(render({ ...props, showSavings: true }), /Ahorras/);
  assert.doesNotMatch(render({ ...props, showSavings: true }), /product-price__discount/);
  assert.match(render({ ...props, showDiscountBadge: true }), /product-price__discount/);
  assert.doesNotMatch(render({ ...props, showDiscountBadge: true }), /Ahorras/);
});
test("image sale badge is hidden by default and derived for SALE, OFERTA and percentage", () => {
  const renderBadge = (mode, compareAtPrice = 1599) =>
    renderToStaticMarkup(createElement(ProductSaleBadge, { price: 1279, compareAtPrice, mode }));
  assert.equal(renderBadge(), "");
  assert.equal(renderBadge("hidden"), "");
  assert.equal(renderBadge("sale", 1000), "");
  assert.match(renderBadge("sale"), /SALE/);
  assert.match(renderBadge("offer"), /OFERTA/);
  assert.match(renderBadge("percentage"), /20%/);
});
