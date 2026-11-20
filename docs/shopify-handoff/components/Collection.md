# Collection

**Categoría:** Catálogo. **Fuente:** [src/App.tsx:966–1078](../../../src/App.tsx#L966). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  navigate,
  onAdd,
}: {
  navigate: NavigateFn;
  onAdd: AddToCartFn;
}
```

**Consumidores directos:** App. **Alcance:** collection.

**Dependencias hijas:** [ProductCard](ProductCard.md), [Icon](Icon.md)

**Estados, variantes e interacciones:** sort y collectionFilter locales; Línea ciclo all/core/special; Disponibilidad/paginación sin handler; todos los precios iguales; ver PLP.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.sr-only`](../CSS_REFERENCE.md#r010) | Base sin capa | [CSS:58](../../../src/index.css#L58) |
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.home-hero h1, .special-hero h1, .story-hero h1, .collection-hero h1`](../CSS_REFERENCE.md#r059) | Base sin capa | [CSS:372](../../../src/index.css#L372) |
| [`.home-hero h1 em, .special-hero h1 em, .collection-hero h1 em`](../CSS_REFERENCE.md#r060) | Base sin capa | [CSS:384](../../../src/index.css#L384) |
| [`.product-grid`](../CSS_REFERENCE.md#r086) | Base sin capa | [CSS:561](../../../src/index.css#L561) |
| [`.page-light`](../CSS_REFERENCE.md#r123) | Base sin capa | [CSS:787](../../../src/index.css#L787) |
| [`.collection-hero`](../CSS_REFERENCE.md#r124) | Base sin capa | [CSS:791](../../../src/index.css#L791) |
| [`.collection-hero > .image-placeholder`](../CSS_REFERENCE.md#r125) | Base sin capa | [CSS:802](../../../src/index.css#L802) |
| [`.collection-hero__shade`](../CSS_REFERENCE.md#r126) | Base sin capa | [CSS:806](../../../src/index.css#L806) |
| [`.collection-hero__copy`](../CSS_REFERENCE.md#r127) | Base sin capa | [CSS:816](../../../src/index.css#L816) |
| [`.collection-hero h1`](../CSS_REFERENCE.md#r128) | Base sin capa | [CSS:822](../../../src/index.css#L822) |
| [`.collection-hero p`](../CSS_REFERENCE.md#r129) | Base sin capa | [CSS:826](../../../src/index.css#L826) |
| [`.pagination button.is-current`](../CSS_REFERENCE.md#r143) | Base sin capa | [CSS:900](../../../src/index.css#L900) |
| [`.product-grid, .product-grid--featured`](../CSS_REFERENCE.md#r487) | @media (max-width: 900px) | [CSS:2860](../../../src/index.css#L2860) |
| [`.collection-hero`](../CSS_REFERENCE.md#r492) | @media (max-width: 900px) | [CSS:2878](../../../src/index.css#L2878) |
| [`.collection-hero__copy`](../CSS_REFERENCE.md#r493) | @media (max-width: 900px) | [CSS:2881](../../../src/index.css#L2881) |
| [`.collection-hero`](../CSS_REFERENCE.md#r551) | @media (max-width: 540px) | [CSS:3092](../../../src/index.css#L3092) |
| [`.collection-hero h1`](../CSS_REFERENCE.md#r552) | @media (max-width: 540px) | [CSS:3096](../../../src/index.css#L3096) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** collection-banner + main-collection; filtros, sort y paginación nativos.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
