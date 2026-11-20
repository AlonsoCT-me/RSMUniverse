# CareScrollStory

**Categoría:** Editorial. **Fuente:** [src/App.tsx:2151–2242](../../../src/App.tsx#L2151). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** CarePage. **Alcance:** CarePage.

**Dependencias hijas:** [CareIllustration](CareIllustration.md), [CareStep](CareStep.md)

**Estados, variantes e interacciones:** activeStep; observer rootMargin -35% 0px -35% 0px y thresholds .05/.2/.4; mayor ratio de entradas recibidas; selección directa scroll center; cleanup.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.desktop-nav button:hover::after, .desktop-nav button.is-active::after`](../CSS_REFERENCE.md#r033) | Base sin capa | [CSS:205](../../../src/index.css#L205) |
| [`.product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r160) | Base sin capa | [CSS:1006](../../../src/index.css#L1006) |
| [`.product-gallery--dark .product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r161) | Base sin capa | [CSS:1010](../../../src/index.css#L1010) |
| [`.care-intro h2, .care-everyday h2, .care-storage h2, .care-information h2, .care-faq h2, .care-cta h2, .care-story__heading h2`](../CSS_REFERENCE.md#r367) | Base sin capa | [CSS:2204](../../../src/index.css#L2204) |
| [`.care-story`](../CSS_REFERENCE.md#r383) | Base sin capa | [CSS:2305](../../../src/index.css#L2305) |
| [`.care-story__heading`](../CSS_REFERENCE.md#r384) | Base sin capa | [CSS:2310](../../../src/index.css#L2310) |
| [`.care-story__heading h2`](../CSS_REFERENCE.md#r385) | Base sin capa | [CSS:2313](../../../src/index.css#L2313) |
| [`.care-story__heading > p`](../CSS_REFERENCE.md#r386) | Base sin capa | [CSS:2317](../../../src/index.css#L2317) |
| [`.care-story__layout`](../CSS_REFERENCE.md#r387) | Base sin capa | [CSS:2320](../../../src/index.css#L2320) |
| [`.care-story__visual`](../CSS_REFERENCE.md#r388) | Base sin capa | [CSS:2326](../../../src/index.css#L2326) |
| [`.care-story__illustration`](../CSS_REFERENCE.md#r389) | Base sin capa | [CSS:2334](../../../src/index.css#L2334) |
| [`.care-story__nav`](../CSS_REFERENCE.md#r396) | Base sin capa | [CSS:2371](../../../src/index.css#L2371) |
| [`.care-story__nav > span`](../CSS_REFERENCE.md#r397) | Base sin capa | [CSS:2378](../../../src/index.css#L2378) |
| [`.care-story__nav > div`](../CSS_REFERENCE.md#r398) | Base sin capa | [CSS:2384](../../../src/index.css#L2384) |
| [`.care-story__nav button`](../CSS_REFERENCE.md#r399) | Base sin capa | [CSS:2388](../../../src/index.css#L2388) |
| [`.care-story__nav button:hover, .care-story__nav button.is-active`](../CSS_REFERENCE.md#r400) | Base sin capa | [CSS:2398](../../../src/index.css#L2398) |
| [`.care-step.is-active`](../CSS_REFERENCE.md#r402) | Base sin capa | [CSS:2415](../../../src/index.css#L2415) |
| [`.care-story__note`](../CSS_REFERENCE.md#r407) | Base sin capa | [CSS:2445](../../../src/index.css#L2445) |
| [`.care-story__layout`](../CSS_REFERENCE.md#r607) | @media (max-width: 900px) | [CSS:3297](../../../src/index.css#L3297) |
| [`.care-story__visual`](../CSS_REFERENCE.md#r608) | @media (max-width: 900px) | [CSS:3301](../../../src/index.css#L3301) |
| [`.care-story__illustration`](../CSS_REFERENCE.md#r609) | @media (max-width: 900px) | [CSS:3307](../../../src/index.css#L3307) |
| [`.care-intro h2, .care-everyday h2, .care-storage h2, .care-information h2, .care-faq h2, .care-cta h2, .care-story__heading h2`](../CSS_REFERENCE.md#r640) | @media (max-width: 540px) | [CSS:3422](../../../src/index.css#L3422) |
| [`.care-story`](../CSS_REFERENCE.md#r644) | @media (max-width: 540px) | [CSS:3442](../../../src/index.css#L3442) |
| [`.care-story__heading`](../CSS_REFERENCE.md#r645) | @media (max-width: 540px) | [CSS:3445](../../../src/index.css#L3445) |
| [`.care-story__visual`](../CSS_REFERENCE.md#r646) | @media (max-width: 540px) | [CSS:3448](../../../src/index.css#L3448) |
| [`.care-story__illustration`](../CSS_REFERENCE.md#r647) | @media (max-width: 540px) | [CSS:3452](../../../src/index.css#L3452) |
| [`.care-story__nav`](../CSS_REFERENCE.md#r649) | @media (max-width: 540px) | [CSS:3459](../../../src/index.css#L3459) |
| [`.care-story__nav > span`](../CSS_REFERENCE.md#r650) | @media (max-width: 540px) | [CSS:3464](../../../src/index.css#L3464) |
| [`.care-story__nav > div`](../CSS_REFERENCE.md#r651) | @media (max-width: 540px) | [CSS:3467](../../../src/index.css#L3467) |
| [`.care-story__nav button`](../CSS_REFERENCE.md#r652) | @media (max-width: 540px) | [CSS:3470](../../../src/index.css#L3470) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** rsm-cap-care-steps: interacción original no cubierta por acordeón/scrolling-content.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
