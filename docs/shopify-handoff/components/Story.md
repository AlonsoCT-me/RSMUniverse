# Story

**Categoría:** Página. **Fuente:** [src/App.tsx:1845–1891](../../../src/App.tsx#L1845). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** App. **Alcance:** story.

**Dependencias hijas:** [EditorialSplitSection](EditorialSplitSection.md), [TerritoryGrid](TerritoryGrid.md), [TerritoryEditorialBanner](TerritoryEditorialBanner.md)

**Estados, variantes e interacciones:** Hero scroll story-origin; dos splits sin reverse; TerritoryGrid oculto entre Origen y banner; sin grid/flex en main: gap 4px no efectivo.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.sr-only`](../CSS_REFERENCE.md#r010) | Base sin capa | [CSS:58](../../../src/index.css#L58) |
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.button--outline-light`](../CSS_REFERENCE.md#r049) | Base sin capa | [CSS:308](../../../src/index.css#L308) |
| [`.button--outline-light:hover`](../CSS_REFERENCE.md#r050) | Base sin capa | [CSS:313](../../../src/index.css#L313) |
| [`.home-hero h1, .special-hero h1, .story-hero h1, .collection-hero h1`](../CSS_REFERENCE.md#r059) | Base sin capa | [CSS:372](../../../src/index.css#L372) |
| [`.page-light`](../CSS_REFERENCE.md#r123) | Base sin capa | [CSS:787](../../../src/index.css#L787) |
| [`.story-hero`](../CSS_REFERENCE.md#r283) | Base sin capa | [CSS:1696](../../../src/index.css#L1696) |
| [`.story-hero__shade`](../CSS_REFERENCE.md#r284) | Base sin capa | [CSS:1705](../../../src/index.css#L1705) |
| [`.story-hero__content`](../CSS_REFERENCE.md#r285) | Base sin capa | [CSS:1715](../../../src/index.css#L1715) |
| [`.story-hero h1`](../CSS_REFERENCE.md#r286) | Base sin capa | [CSS:1721](../../../src/index.css#L1721) |
| [`.story-hero`](../CSS_REFERENCE.md#r576) | @media (max-width: 540px) | [CSS:3179](../../../src/index.css#L3179) |
| [`.story-hero > div:last-child`](../CSS_REFERENCE.md#r577) | @media (max-width: 540px) | [CSS:3182](../../../src/index.css#L3182) |
| [`.story-hero h1`](../CSS_REFERENCE.md#r578) | @media (max-width: 540px) | [CSS:3187](../../../src/index.css#L3187) |
| [`.story-hero`](../CSS_REFERENCE.md#r667) | @media (max-width: 540px) | [CSS:3531](../../../src/index.css#L3531) |
| [`.story-hero__shade`](../CSS_REFERENCE.md#r668) | @media (max-width: 540px) | [CSS:3536](../../../src/index.css#L3536) |
| [`.story-hero__content`](../CSS_REFERENCE.md#r669) | @media (max-width: 540px) | [CSS:3544](../../../src/index.css#L3544) |
| [`.story-hero h1`](../CSS_REFERENCE.md#r670) | @media (max-width: 540px) | [CSS:3550](../../../src/index.css#L3550) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** page.nuestra-historia.json propuesta; no trasladar documentación antigua 30/70.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
