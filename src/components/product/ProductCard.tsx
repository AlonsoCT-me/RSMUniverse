import type * as React from "react";
import type { Product } from "../../types/product";
import type { NavigateFn, Page } from "../../types/navigation";
import type { AddToCartFn } from "../../types/cart";
import { Icon } from "../ui/Icon";

export function ProductCard({
  product,
  navigate,
  onAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  onAdd: AddToCartFn;
}) {
  const target: Page =
    product.collectionId === "special-edition" ? "nocturna" : "caliza";
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1];
  return (
    <article className="product-card">
      <button
        className={`product-card__media product-card__media--${product.backdropTone} ${secondaryImage ? "product-card__media--has-secondary" : ""}`}
        onClick={() => navigate(target, product.id)}
        aria-label={`Ver ${product.name}`}
      >
        <img
          className="product-card__img product-card__primary"
          src={primaryImage.src}
          alt={primaryImage.alt}
          loading="lazy"
        />
        {secondaryImage && (
          <img
            className="product-card__img product-card__secondary"
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            loading="lazy"
          />
        )}
        {product.collectionId === "special-edition" && (
          <span className="product-card__label">Edición especial</span>
        )}
      </button>
      <button
        className="product-card__title"
        onClick={() => navigate(target, product.id)}
      >
        <span>{product.name}</span>
        <small>{product.collectionLabel}</small>
      </button>
      <p className="product-card__price">{product.price}</p>
      <div className="product-card__actions">
        <div
          className="swatches"
          aria-label={`Color: ${product.attributes.colorPattern}`}
        >
          <span
            className="swatch-dot is-selected"
            style={{ "--swatch": product.swatch } as React.CSSProperties}
            title={product.attributes.colorPattern}
          />
        </div>
        <button
          type="button"
          className="product-card__quick-add"
          aria-label={`Agregar ${product.name} al carrito`}
          onClick={() => {
            if (product.variants?.length) {
              navigate(target, product.id);
              return;
            }
            onAdd(product, 1);
          }}
        >
          <Icon name="bag-plus" size={22} />
        </button>
      </div>
    </article>
  );
}
