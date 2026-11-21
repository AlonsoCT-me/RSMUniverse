import type { Product } from "../../types/product";
import { Icon } from "../ui/Icon";
import { useState, useEffect } from "react";

export function ProductGallery({
  product,
  dark = false,
}: {
  product: Product;
  dark?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [product.id]);

  const images = product.images;
  const current = images[activeIndex] || images[0];
  const hasMultiple = images.length > 1;

  const goPrev = () => {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goNext = () => {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <div
      className={`product-gallery product-gallery--interactive ${dark ? "product-gallery--dark" : ""}`}
    >
      <div
        className={`product-gallery__stage product-gallery__stage--${product.backdropTone}`}
      >
        <img
          key={current.src}
          className="product-gallery__stage-img"
          src={current.src}
          alt={current.alt}
        />
        {hasMultiple && (
          <div
            className="product-gallery__controls"
            aria-label="Controles de galería"
          >
            <button
              type="button"
              className="product-gallery__arrow product-gallery__arrow--prev"
              onClick={goPrev}
              aria-label="Vista anterior"
            >
              <Icon name="arrow" size={18} />
            </button>
            <span className="product-gallery__counter" aria-live="polite">
              {activeIndex + 1} / {images.length} · {current.view}
            </span>
            <button
              type="button"
              className="product-gallery__arrow"
              onClick={goNext}
              aria-label="Vista siguiente"
            >
              <Icon name="arrow" size={18} />
            </button>
          </div>
        )}
      </div>
      {hasMultiple && (
        <div
          className="product-gallery__thumbs"
          role="list"
          aria-label="Vistas del producto"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`product-gallery__thumb product-gallery__thumb--${product.backdropTone} ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`${image.view} (${index + 1} de ${images.length})`}
              aria-pressed={index === activeIndex}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
