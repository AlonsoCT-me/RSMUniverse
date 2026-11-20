# ProductCard

**Categoría:** Catálogo. **Fuente:** [src/App.tsx:709–783](../../../src/App.tsx#L709). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  product,
  navigate,
  onAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  onAdd: AddToCartFn;
}
```

**Consumidores directos:** Home, Collection, CorePdp. **Alcance:** Home, Collection, relacionados CorePdp.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** Media y título navegan por ID. Una swatch-dot estática marcada seleccionada. Segunda imagen opcional en hover. Quick Add agrega 1; si variants.length>0 navega a PDP, sin elegir variante.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.featured-collection .product-card`](../CSS_REFERENCE.md#r080) | Base sin capa | [CSS:532](../../../src/index.css#L532) |
| [`.product-card`](../CSS_REFERENCE.md#r087) | Base sin capa | [CSS:566](../../../src/index.css#L566) |
| [`.product-card__media`](../CSS_REFERENCE.md#r088) | Base sin capa | [CSS:571](../../../src/index.css#L571) |
| [`.product-card__media .image-placeholder, .product-card__img`](../CSS_REFERENCE.md#r091) | Base sin capa | [CSS:587](../../../src/index.css#L587) |
| [`.product-card__secondary`](../CSS_REFERENCE.md#r092) | Base sin capa | [CSS:597](../../../src/index.css#L597) |
| [`.product-card__media:hover .product-card__primary`](../CSS_REFERENCE.md#r093) | Base sin capa | [CSS:602](../../../src/index.css#L602) |
| [`.product-card__media--has-secondary:hover .product-card__primary`](../CSS_REFERENCE.md#r094) | Base sin capa | [CSS:605](../../../src/index.css#L605) |
| [`.product-card__media--has-secondary:hover .product-card__secondary`](../CSS_REFERENCE.md#r095) | Base sin capa | [CSS:609](../../../src/index.css#L609) |
| [`.product-card__label`](../CSS_REFERENCE.md#r096) | Base sin capa | [CSS:612](../../../src/index.css#L612) |
| [`.product-card__title`](../CSS_REFERENCE.md#r097) | Base sin capa | [CSS:623](../../../src/index.css#L623) |
| [`.product-card__title > span`](../CSS_REFERENCE.md#r098) | Base sin capa | [CSS:633](../../../src/index.css#L633) |
| [`.product-card__title small`](../CSS_REFERENCE.md#r099) | Base sin capa | [CSS:640](../../../src/index.css#L640) |
| [`.product-card__price`](../CSS_REFERENCE.md#r100) | Base sin capa | [CSS:647](../../../src/index.css#L647) |
| [`.product-card__actions`](../CSS_REFERENCE.md#r101) | Base sin capa | [CSS:651](../../../src/index.css#L651) |
| [`.product-card__actions .swatches`](../CSS_REFERENCE.md#r102) | Base sin capa | [CSS:657](../../../src/index.css#L657) |
| [`.product-card__quick-add`](../CSS_REFERENCE.md#r103) | Base sin capa | [CSS:661](../../../src/index.css#L661) |
| [`.product-card__quick-add:hover:not(:disabled)`](../CSS_REFERENCE.md#r104) | @media (hover: hover) | [CSS:676](../../../src/index.css#L676) |
| [`.product-card__quick-add:focus-visible`](../CSS_REFERENCE.md#r105) | Base sin capa | [CSS:681](../../../src/index.css#L681) |
| [`.product-card__quick-add:active:not(:disabled)`](../CSS_REFERENCE.md#r106) | Base sin capa | [CSS:685](../../../src/index.css#L685) |
| [`.product-card__quick-add:disabled`](../CSS_REFERENCE.md#r107) | Base sin capa | [CSS:688](../../../src/index.css#L688) |
| [`.product-card__quick-add`](../CSS_REFERENCE.md#r108) | @media (prefers-reduced-motion: reduce) | [CSS:693](../../../src/index.css#L693) |
| [`.swatches button, .swatch-dot`](../CSS_REFERENCE.md#r110) | Base sin capa | [CSS:701](../../../src/index.css#L701) |
| [`.swatches button.is-selected, .swatch-dot.is-selected`](../CSS_REFERENCE.md#r111) | Base sin capa | [CSS:710](../../../src/index.css#L710) |
| [`.product-info--dark .swatches button.is-selected, .product-info--dark .swatch-dot.is-selected`](../CSS_REFERENCE.md#r275) | Base sin capa | [CSS:1658](../../../src/index.css#L1658) |
| [`.featured-collection .product-card`](../CSS_REFERENCE.md#r542) | @media (max-width: 540px) | [CSS:3061](../../../src/index.css#L3061) |
| [`.product-card__title > span`](../CSS_REFERENCE.md#r544) | @media (max-width: 540px) | [CSS:3067](../../../src/index.css#L3067) |
| [`.product-card__title small`](../CSS_REFERENCE.md#r545) | @media (max-width: 540px) | [CSS:3071](../../../src/index.css#L3071) |
| [`.product-card__price`](../CSS_REFERENCE.md#r546) | @media (max-width: 540px) | [CSS:3075](../../../src/index.css#L3075) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:762](../../../src/App.tsx#L762) | `{{ "--swatch": product.swatch } as React.CSSProperties}` |
| [App:731](../../../src/App.tsx#L731) | `src={primaryImage.src}` |
| [App:732](../../../src/App.tsx#L732) | `alt={primaryImage.alt}` |
| [App:738](../../../src/App.tsx#L738) | `src={secondaryImage.src}` |
| [App:739](../../../src/App.tsx#L739) | `alt={secondaryImage.alt}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** snippets/product-card.liquid compartido; motor quick buy nativo confirmado; brecha bolsa+ y acciones inferiores alineadas.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
