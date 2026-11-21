import type { Page } from "../types/navigation";
import {
  DEFAULT_CORE_PRODUCT_ID,
  DEFAULT_SPECIAL_PRODUCT_ID,
  productsById,
} from "../data/products";

export function resolveRouteState(rawPath: string): { page: Page; productId: string } {
  if (rawPath.startsWith("producto/")) {
    const slug = rawPath.slice("producto/".length);
    if (slug === "caliza") {
      return { page: "caliza", productId: DEFAULT_CORE_PRODUCT_ID };
    }
    if (slug === "nocturna") {
      return { page: "nocturna", productId: DEFAULT_SPECIAL_PRODUCT_ID };
    }
    const matched = productsById[slug];
    if (matched) {
      return {
        page:
          matched.collectionId === "special-edition" ? "nocturna" : "caliza",
        productId: matched.id,
      };
    }
  }
  return {
    page: routeMap[rawPath] || "home",
    productId: DEFAULT_CORE_PRODUCT_ID,
  };
}

export const routes: Record<Page, string> = {
  home: "",
  collection: "coleccion",
  caliza: "producto/caliza",
  special: "special-edition",
  nocturna: "producto/nocturna",
  story: "nuestra-historia",
  care: "pages/cuidado-de-gorras",
  system: "design-system",
  compare: "comparativa",
};

const routeMap = Object.fromEntries(
  Object.entries(routes).map(([page, path]) => [path, page]),
) as Record<string, Page>;
