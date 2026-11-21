import type { Product } from "./product";

export type CartItem = { product: Product; quantity: number };

export type AddToCartFn = (product: Product, quantity: number) => void;
