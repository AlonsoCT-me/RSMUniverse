# CorePdp

**Categoría:** Página. **Fuente:** [src/App.tsx:1347–1407](../../../src/App.tsx#L1347). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  product,
  navigate,
  onAdd,
  onQuickAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  onAdd: (quantity: number) => void;
  onQuickAdd: AddToCartFn;
}
```

**Consumidores directos:** App. **Alcance:** caliza y handles Core.

**Dependencias hijas:** [ProductGallery](ProductGallery.md), [ProductInfo](ProductInfo.md), [ImagePlaceholder](ImagePlaceholder.md), [SectionHeading](SectionHeading.md), [TextLink](TextLink.md), [ProductCard](ProductCard.md)

**Estados, variantes e interacciones:** Galería/info, lifestyle placeholder, relacionados Core excluyendo actual, máximo 3; onQuickAdd compartido.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`](../CSS_REFERENCE.md#r067) | Base sin capa | [CSS:426](../../../src/index.css#L426) |
| [`.borderless p, .special-split p, .pdp-story p, .nocturna-story p`](../CSS_REFERENCE.md#r068) | Base sin capa | [CSS:439](../../../src/index.css#L439) |
| [`.product-grid`](../CSS_REFERENCE.md#r086) | Base sin capa | [CSS:561](../../../src/index.css#L561) |
| [`.page-light`](../CSS_REFERENCE.md#r123) | Base sin capa | [CSS:787](../../../src/index.css#L787) |
| [`.pdp-story`](../CSS_REFERENCE.md#r187) | Base sin capa | [CSS:1170](../../../src/index.css#L1170) |
| [`.pdp-story > .image-placeholder`](../CSS_REFERENCE.md#r188) | Base sin capa | [CSS:1177](../../../src/index.css#L1177) |
| [`.pdp-story div`](../CSS_REFERENCE.md#r189) | Base sin capa | [CSS:1181](../../../src/index.css#L1181) |
| [`.pdp-story h2`](../CSS_REFERENCE.md#r190) | Base sin capa | [CSS:1187](../../../src/index.css#L1187) |
| [`.product-grid--featured`](../CSS_REFERENCE.md#r192) | Base sin capa | [CSS:1193](../../../src/index.css#L1193) |
| [`.related .product-grid--featured`](../CSS_REFERENCE.md#r193) | Base sin capa | [CSS:1196](../../../src/index.css#L1196) |
| [`.borderless, .special-split, .pdp-story, .special-cta, .nocturna-story`](../CSS_REFERENCE.md#r478) | @media (max-width: 900px) | [CSS:2815](../../../src/index.css#L2815) |
| [`.borderless__copy, .special-split__copy, .pdp-story div, .special-cta > div, .nocturna-story > div`](../CSS_REFERENCE.md#r480) | @media (max-width: 900px) | [CSS:2826](../../../src/index.css#L2826) |
| [`.product-grid, .product-grid--featured`](../CSS_REFERENCE.md#r487) | @media (max-width: 900px) | [CSS:2860](../../../src/index.css#L2860) |
| [`.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`](../CSS_REFERENCE.md#r539) | @media (max-width: 540px) | [CSS:3046](../../../src/index.css#L3046) |
| [`.related .product-grid--featured`](../CSS_REFERENCE.md#r567) | @media (max-width: 540px) | [CSS:3148](../../../src/index.css#L3148) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** product.json + main-product + editorial + related-products.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
