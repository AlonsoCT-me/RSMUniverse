export type Page =
  | "home"
  | "collection"
  | "caliza"
  | "special"
  | "nocturna"
  | "story"
  | "care"
  | "system"
  | "compare";

export type NavigateFn = (page: Page, productId?: string) => void;
