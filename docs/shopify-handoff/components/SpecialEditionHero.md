# SpecialEditionHero

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1445–1477](../../../src/App.tsx#L1445). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** SpecialLanding. **Alcance:** SpecialLanding.

**Dependencias hijas:** [Reveal](Reveal.md)

**Estados, variantes e interacciones:** CTA scroll #special-editorial; respeta matchMedia reduced motion; fotografía de fondo real; small sr-only.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.sr-only`](../CSS_REFERENCE.md#r010) | Base sin capa | [CSS:58](../../../src/index.css#L58) |
| [`.button--outline-light`](../CSS_REFERENCE.md#r049) | Base sin capa | [CSS:308](../../../src/index.css#L308) |
| [`.button--outline-light:hover`](../CSS_REFERENCE.md#r050) | Base sin capa | [CSS:313](../../../src/index.css#L313) |
| [`.se-hero`](../CSS_REFERENCE.md#r224) | Base sin capa | [CSS:1361](../../../src/index.css#L1361) |
| [`.se-hero > .image-placeholder`](../CSS_REFERENCE.md#r225) | Base sin capa | [CSS:1372](../../../src/index.css#L1372) |
| [`.se-hero__overlay`](../CSS_REFERENCE.md#r226) | Base sin capa | [CSS:1376](../../../src/index.css#L1376) |
| [`.se-hero__content`](../CSS_REFERENCE.md#r227) | Base sin capa | [CSS:1385](../../../src/index.css#L1385) |
| [`.se-hero__content > p`](../CSS_REFERENCE.md#r228) | Base sin capa | [CSS:1396](../../../src/index.css#L1396) |
| [`.se-hero h1`](../CSS_REFERENCE.md#r229) | Base sin capa | [CSS:1403](../../../src/index.css#L1403) |
| [`.se-hero__content > small`](../CSS_REFERENCE.md#r230) | Base sin capa | [CSS:1412](../../../src/index.css#L1412) |
| [`.se-hero__content`](../CSS_REFERENCE.md#r598) | @media (max-width: 900px) | [CSS:3264](../../../src/index.css#L3264) |
| [`.se-hero`](../CSS_REFERENCE.md#r614) | @media (max-width: 540px) | [CSS:3328](../../../src/index.css#L3328) |
| [`.se-hero__content`](../CSS_REFERENCE.md#r615) | @media (max-width: 540px) | [CSS:3332](../../../src/index.css#L3332) |
| [`.se-hero__content > p`](../CSS_REFERENCE.md#r616) | @media (max-width: 540px) | [CSS:3335](../../../src/index.css#L3335) |
| [`.se-hero h1`](../CSS_REFERENCE.md#r617) | @media (max-width: 540px) | [CSS:3339](../../../src/index.css#L3339) |
| [`.se-hero__content > small`](../CSS_REFERENCE.md#r618) | @media (max-width: 540px) | [CSS:3343](../../../src/index.css#L3343) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** image-with-text-overlay; ancla requiere verificar acción de botón nativa.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
