# DesignSystem

**Categoría:** Página interna. **Fuente:** [src/App.tsx:1893–2021](../../../src/App.tsx#L1893). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ navigate }: { navigate: (page: Page) => void }
```

**Consumidores directos:** App. **Alcance:** system.

**Dependencias hijas:** [SectionHeading](SectionHeading.md), [TextLink](TextLink.md), [Accordion](Accordion.md)

**Estados, variantes e interacciones:** Muestra tokens, tipos, board botones/acordeones/swatches y factibilidad; contenido descriptivo no certifica implementación Shopify.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.button--light`](../CSS_REFERENCE.md#r047) | Base sin capa | [CSS:299](../../../src/index.css#L299) |
| [`.button--light:hover`](../CSS_REFERENCE.md#r048) | Base sin capa | [CSS:304](../../../src/index.css#L304) |
| [`.button--outline-light`](../CSS_REFERENCE.md#r049) | Base sin capa | [CSS:308](../../../src/index.css#L308) |
| [`.button--outline-light:hover`](../CSS_REFERENCE.md#r050) | Base sin capa | [CSS:313](../../../src/index.css#L313) |
| [`.swatches button.is-selected, .swatch-dot.is-selected`](../CSS_REFERENCE.md#r111) | Base sin capa | [CSS:710](../../../src/index.css#L710) |
| [`.swatches--large button, .swatch-dot--large`](../CSS_REFERENCE.md#r112) | Base sin capa | [CSS:716](../../../src/index.css#L716) |
| [`.page-light`](../CSS_REFERENCE.md#r123) | Base sin capa | [CSS:787](../../../src/index.css#L787) |
| [`.product-info--dark .swatches button.is-selected, .product-info--dark .swatch-dot.is-selected`](../CSS_REFERENCE.md#r275) | Base sin capa | [CSS:1658](../../../src/index.css#L1658) |
| [`.system-page`](../CSS_REFERENCE.md#r332) | Base sin capa | [CSS:2008](../../../src/index.css#L2008) |
| [`.system-hero`](../CSS_REFERENCE.md#r333) | Base sin capa | [CSS:2011](../../../src/index.css#L2011) |
| [`.system-hero h1, .comparison__hero h1`](../CSS_REFERENCE.md#r334) | Base sin capa | [CSS:2014](../../../src/index.css#L2014) |
| [`.system-hero p, .comparison__hero p`](../CSS_REFERENCE.md#r335) | Base sin capa | [CSS:2023](../../../src/index.css#L2023) |
| [`.system-section`](../CSS_REFERENCE.md#r336) | Base sin capa | [CSS:2030](../../../src/index.css#L2030) |
| [`.token-grid`](../CSS_REFERENCE.md#r337) | Base sin capa | [CSS:2034](../../../src/index.css#L2034) |
| [`.token-grid article`](../CSS_REFERENCE.md#r338) | Base sin capa | [CSS:2039](../../../src/index.css#L2039) |
| [`.token-grid span`](../CSS_REFERENCE.md#r339) | Base sin capa | [CSS:2046](../../../src/index.css#L2046) |
| [`.token-grid small`](../CSS_REFERENCE.md#r340) | Base sin capa | [CSS:2051](../../../src/index.css#L2051) |
| [`.type-specimen__display, .type-specimen__body`](../CSS_REFERENCE.md#r341) | Base sin capa | [CSS:2055](../../../src/index.css#L2055) |
| [`.type-specimen__display span, .type-specimen__body span`](../CSS_REFERENCE.md#r342) | Base sin capa | [CSS:2059](../../../src/index.css#L2059) |
| [`.type-specimen__display p`](../CSS_REFERENCE.md#r343) | Base sin capa | [CSS:2066](../../../src/index.css#L2066) |
| [`.type-specimen__body p`](../CSS_REFERENCE.md#r344) | Base sin capa | [CSS:2071](../../../src/index.css#L2071) |
| [`.component-board`](../CSS_REFERENCE.md#r345) | Base sin capa | [CSS:2076](../../../src/index.css#L2076) |
| [`.component-board > div`](../CSS_REFERENCE.md#r346) | Base sin capa | [CSS:2081](../../../src/index.css#L2081) |
| [`.component-board__light`](../CSS_REFERENCE.md#r347) | Base sin capa | [CSS:2089](../../../src/index.css#L2089) |
| [`.component-board__dark`](../CSS_REFERENCE.md#r348) | Base sin capa | [CSS:2092](../../../src/index.css#L2092) |
| [`.component-board__dark .accordion`](../CSS_REFERENCE.md#r349) | Base sin capa | [CSS:2096](../../../src/index.css#L2096) |
| [`.component-board__light .accordion`](../CSS_REFERENCE.md#r350) | Base sin capa | [CSS:2099](../../../src/index.css#L2099) |
| [`.component-label`](../CSS_REFERENCE.md#r351) | Base sin capa | [CSS:2102](../../../src/index.css#L2102) |
| [`.token-grid`](../CSS_REFERENCE.md#r523) | @media (max-width: 900px) | [CSS:2988](../../../src/index.css#L2988) |
| [`.component-board`](../CSS_REFERENCE.md#r524) | @media (max-width: 900px) | [CSS:2991](../../../src/index.css#L2991) |
| [`.system-hero h1, .comparison__hero h1`](../CSS_REFERENCE.md#r586) | @media (max-width: 540px) | [CSS:3216](../../../src/index.css#L3216) |
| [`.token-grid`](../CSS_REFERENCE.md#r587) | @media (max-width: 540px) | [CSS:3220](../../../src/index.css#L3220) |
| [`.component-board > div`](../CSS_REFERENCE.md#r588) | @media (max-width: 540px) | [CSS:3223](../../../src/index.css#L3223) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:1921](../../../src/App.tsx#L1921) | `{{                 background: color,                 color: name === "Caliza" ? "#191716" : "#fff",               }}` |
| [App:1961](../../../src/App.tsx#L1961) | `{{ "--swatch": c } as React.CSSProperties}` |
| [App:1981](../../../src/App.tsx#L1981) | `{{ "--swatch": c } as React.CSSProperties}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Mantener como documentación interna; no página de storefront salvo decisión.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
