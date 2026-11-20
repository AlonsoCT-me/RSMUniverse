# SpecialEditionProductCTA

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1565–1591](../../../src/App.tsx#L1565). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ navigate }: { navigate: NavigateFn }
```

**Consumidores directos:** SpecialLanding. **Alcance:** SpecialLanding oculto.

**Dependencias hijas:** [Reveal](Reveal.md), [ImagePlaceholder](ImagePlaceholder.md)

**Estados, variantes e interacciones:** Raíz .hidden; Nocturna/default Special como CTA; placeholder; no forma parte del diseño visible.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.button--outline-light`](../CSS_REFERENCE.md#r049) | Base sin capa | [CSS:308](../../../src/index.css#L308) |
| [`.button--outline-light:hover`](../CSS_REFERENCE.md#r050) | Base sin capa | [CSS:313](../../../src/index.css#L313) |
| [`.se-intro h2, .se-story__heading h2, .se-lifestyle h2, .se-product-cta h2`](../CSS_REFERENCE.md#r233) | Base sin capa | [CSS:1427](../../../src/index.css#L1427) |
| [`.se-product-cta`](../CSS_REFERENCE.md#r262) | Base sin capa | [CSS:1593](../../../src/index.css#L1593) |
| [`.se-product-cta__inner`](../CSS_REFERENCE.md#r263) | Base sin capa | [CSS:1597](../../../src/index.css#L1597) |
| [`.se-product-cta__media`](../CSS_REFERENCE.md#r264) | Base sin capa | [CSS:1604](../../../src/index.css#L1604) |
| [`.se-product-cta__copy`](../CSS_REFERENCE.md#r265) | Base sin capa | [CSS:1607](../../../src/index.css#L1607) |
| [`.se-product-cta h2`](../CSS_REFERENCE.md#r266) | Base sin capa | [CSS:1614](../../../src/index.css#L1614) |
| [`.se-product-cta__copy > small`](../CSS_REFERENCE.md#r267) | Base sin capa | [CSS:1619](../../../src/index.css#L1619) |
| [`.se-product-cta__copy > p`](../CSS_REFERENCE.md#r268) | Base sin capa | [CSS:1627](../../../src/index.css#L1627) |
| [`.se-product-cta__inner`](../CSS_REFERENCE.md#r601) | @media (max-width: 900px) | [CSS:3275](../../../src/index.css#L3275) |
| [`.se-product-cta__media`](../CSS_REFERENCE.md#r602) | @media (max-width: 900px) | [CSS:3278](../../../src/index.css#L3278) |
| [`.se-product-cta__copy`](../CSS_REFERENCE.md#r603) | @media (max-width: 900px) | [CSS:3281](../../../src/index.css#L3281) |
| [`.se-product-cta`](../CSS_REFERENCE.md#r631) | @media (max-width: 540px) | [CSS:3394](../../../src/index.css#L3394) |
| [`.se-product-cta__inner`](../CSS_REFERENCE.md#r632) | @media (max-width: 540px) | [CSS:3397](../../../src/index.css#L3397) |
| [`.se-product-cta__media`](../CSS_REFERENCE.md#r633) | @media (max-width: 540px) | [CSS:3400](../../../src/index.css#L3400) |
| [`.se-product-cta__copy`](../CSS_REFERENCE.md#r634) | @media (max-width: 540px) | [CSS:3403](../../../src/index.css#L3403) |
| [`.se-product-cta h2`](../CSS_REFERENCE.md#r635) | @media (max-width: 540px) | [CSS:3406](../../../src/index.css#L3406) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** No implementar en primera composición; reactivar solo con decisión y product picker.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
