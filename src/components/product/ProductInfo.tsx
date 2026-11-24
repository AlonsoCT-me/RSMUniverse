import type * as React from "react";
import type { Product } from "../../types/product";
import type { NavigateFn } from "../../types/navigation";
import { ProductPrice } from "./ProductPrice";
import { Quantity } from "./Quantity";
import { Accordion } from "../ui/Accordion";
import { useState, useEffect } from "react";

export function ProductInfo({
  product,
  navigate,
  dark = false,
  onAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  dark?: boolean;
  onAdd: (quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product.id]);

  return (
    <aside className={`product-info ${dark ? "product-info--dark" : ""}`}>
      <nav className="breadcrumbs" aria-label="Breadcrumbs">
        <button type="button" onClick={() => navigate("home")}>
          Inicio
        </button>
        <b>/</b>
        <button
          type="button"
          onClick={() =>
            navigate(product.collectionId === "special-edition" ? "special" : "collection")
          }
        >
          {product.collectionId === "special-edition" ? "Special Edition" : "Colección Core"}
        </button>
        <b>/</b>
        <span>{product.name}</span>
      </nav>
      <span className="eyebrow">{product.collectionLabel}</span>
      <h1>{product.name}</h1>
      <div className="product-info__price">
        <ProductPrice
          price={product.priceAmount}
          compareAtPrice={product.compareAtPrice}
          currency={product.currency}
          variant="detail"
          showDiscountBadge
          showSavings
        />
        {product.mockData && <small>Precio demostrativo</small>}
      </div>
      <div className="variant">
        <div>
          <span>Color / patrón</span>
          <b>{product.attributes.colorPattern}</b>
        </div>
        <div className="swatches swatches--large" aria-label="Tono principal del modelo">
          {product.variants && product.variants.length > 0 ? (
            product.variants.map((variant, index) => (
              <button
                key={variant.id}
                type="button"
                className={index === 0 ? "is-selected" : ""}
                style={{ "--swatch": variant.swatch } as React.CSSProperties}
                aria-label={variant.label}
              />
            ))
          ) : (
            <span
              className="swatch-dot swatch-dot--large is-selected"
              style={{ "--swatch": product.swatch } as React.CSSProperties}
              title={product.attributes.colorPattern}
            />
          )}
        </div>
      </div>
      <dl className="product-specs" aria-label="Atributos del producto">
        <div>
          <dt>Modelo</dt>
          <dd>{product.attributes.model}</dd>
        </div>
        <div>
          <dt>Talla</dt>
          <dd>{product.attributes.size}</dd>
        </div>
        <div>
          <dt>Material / tejido</dt>
          <dd>{product.attributes.material}</dd>
        </div>
        <div>
          <dt>Ajuste / cierre</dt>
          <dd>{product.attributes.closure}</dd>
        </div>
      </dl>
      <div className="buy-row">
        <Quantity value={quantity} setValue={setQuantity} dark={dark} />
        <button
          className={`button button--add ${dark ? "button--caliza" : ""}`}
          onClick={() => onAdd(quantity)}
        >
          Agregar al carrito
        </button>
      </div>
      <p className="availability">
        <span /> Envío e impuestos calculados en checkout
      </p>
      <div className="product-accordions">
        <Accordion title="Descripción" dark={dark} open>
          <p>{product.description}</p>
        </Accordion>
        <Accordion title="Materiales" dark={dark}>
          <p>{product.attributes.material}.</p>
        </Accordion>
        <Accordion title="Ajuste y dimensiones" dark={dark}>
          <p>
            Talla: {product.attributes.size}. Cierre: {product.attributes.closure}.
          </p>
        </Accordion>
        <Accordion title="Envíos y devoluciones" dark={dark}>
          <p>Políticas sujetas a la configuración final de la tienda.</p>
        </Accordion>
      </div>
    </aside>
  );
}
