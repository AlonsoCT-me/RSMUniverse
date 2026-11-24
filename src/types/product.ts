export type CollectionId = "core" | "special-edition";

type ProductImage = {
  src: string;
  alt: string;
  view: string;
};

type ProductAttributes = {
  model: string;
  colorPattern: string;
  size: string;
  material: string;
  closure: string;
};

type ProductValidation = {
  status: "provisional-partial" | "confirmed";
  mockData: {
    price: boolean;
  };
  pendingConfirmation: ("price" | "size" | "material" | "closure")[];
};

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  /** Effective price in pesos (major units), used by display and cart. */
  priceAmount: number;
  compareAtPrice?: number;
  currency?: string;
  mockData: boolean;
  collectionId: CollectionId;
  collectionLabel: string;
  backdropTone: "light" | "dark";
  swatch: string;
  variants?: { id: string; label: string; swatch: string }[];
  images: ProductImage[];
  attributes: ProductAttributes;
  validation: ProductValidation;
};
