import { Section } from "../../components/layout/SectionContainer";
import type { NavigateFn } from "../../types/navigation";
import type { AddToCartFn } from "../../types/cart";
import type { CollectionId } from "../../types/product";
import { products } from "../../data/products";
import { ProductCard } from "../../components/product/ProductCard";
import { Icon } from "../../components/ui/Icon";
import { useState, useMemo } from "react";

export function Collection({ navigate, onAdd }: { navigate: NavigateFn; onAdd: AddToCartFn }) {
  const [sort, setSort] = useState("Destacados");
  const [collectionFilter, setCollectionFilter] = useState<"all" | CollectionId>("all");

  const visibleProducts = useMemo(() => {
    const filtered =
      collectionFilter === "all"
        ? products
        : products.filter((product) => product.collectionId === collectionFilter);
    if (sort === "Precio: menor a mayor") {
      return [...filtered].sort((a, b) => a.priceAmount - b.priceAmount);
    }
    if (sort === "Precio: mayor a menor") {
      return [...filtered].sort((a, b) => b.priceAmount - a.priceAmount);
    }
    return filtered;
  }, [collectionFilter, sort]);

  const cycleCollectionFilter = () => {
    setCollectionFilter((current) =>
      current === "all" ? "core" : current === "core" ? "special-edition" : "all",
    );
  };

  const filterLabel =
    collectionFilter === "all"
      ? "Línea"
      : collectionFilter === "core"
        ? "Línea: Core"
        : "Línea: Special Edition";

  return (
    <main className="page-light" id="collection">
      <section
        className="collection-hero"
        aria-label="Gorra RSM Special Edition Leather Brown como portada de colección"
      >
        <div className="collection-hero__shade hidden" />
        <div className="collection-hero__copy">
          <span className="sr-only eyebrow eyebrow--light">Colección Core</span>
          <h1 className="collection-hero__title sr-only">
            La colección <em>Tierra RSM</em>
          </h1>
          <p className="collection-hero__description sr-only">
            Una expresión contemporánea de un origen real. Diseñada para moverse del rancho a la
            ciudad.
          </p>
        </div>
      </section>
      <Section className="collection" contentClassName="collection__container">
        <div className="collection__intro">
          <p className="sr-only">
            Gorras de carácter sobrio, tonos naturales y detalles que hablan del oficio sin
            exageración.
          </p>
          <span>{visibleProducts.length} productos</span>
        </div>
        <div className="toolbar">
          <div className="toolbar__filters">
            <button type="button">
              Disponibilidad <span>⌄</span>
            </button>
            <button type="button" onClick={cycleCollectionFilter}>
              {filterLabel} <span>⌄</span>
            </button>
          </div>
          <label>
            <span>Ordenar por</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Destacados</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
            </select>
          </label>
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} navigate={navigate} onAdd={onAdd} />
          ))}
        </div>
        <div className="pagination" aria-label="Paginación">
          <button className="is-current">1</button>
          <button>2</button>
          <button aria-label="Página siguiente">
            <Icon name="arrow" />
          </button>
        </div>
      </Section>
    </main>
  );
}
