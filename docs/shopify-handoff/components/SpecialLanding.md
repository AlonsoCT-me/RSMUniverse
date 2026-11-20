# SpecialLanding

**Categoría:** Página. **Fuente:** [src/App.tsx:1593–1644](../../../src/App.tsx#L1593). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ navigate }: { navigate: NavigateFn }
```

**Consumidores directos:** App. **Alcance:** special.

**Dependencias hijas:** [SpecialEditionHero](SpecialEditionHero.md), [EditorialIntro](EditorialIntro.md), [SpecialEditionDetails](SpecialEditionDetails.md), [Reveal](Reveal.md), [EditorialImageText](EditorialImageText.md), [ImagePlaceholder](ImagePlaceholder.md), [SpecialEditionProductCTA](SpecialEditionProductCTA.md)

**Estados, variantes e interacciones:** Hero, intro, grid cuatro productos, story con tres detalles; lifestyle y CTA final ocultos.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.sr-only`](../CSS_REFERENCE.md#r010) | Base sin capa | [CSS:58](../../../src/index.css#L58) |
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.se-page`](../CSS_REFERENCE.md#r221) | Base sin capa | [CSS:1345](../../../src/index.css#L1345) |
| [`.se-intro h2, .se-story__heading h2, .se-lifestyle h2, .se-product-cta h2`](../CSS_REFERENCE.md#r233) | Base sin capa | [CSS:1427](../../../src/index.css#L1427) |
| [`.se-story`](../CSS_REFERENCE.md#r247) | Base sin capa | [CSS:1507](../../../src/index.css#L1507) |
| [`.se-story__heading`](../CSS_REFERENCE.md#r248) | Base sin capa | [CSS:1510](../../../src/index.css#L1510) |
| [`.se-story__heading h2`](../CSS_REFERENCE.md#r249) | Base sin capa | [CSS:1517](../../../src/index.css#L1517) |
| [`.se-lifestyle`](../CSS_REFERENCE.md#r256) | Base sin capa | [CSS:1555](../../../src/index.css#L1555) |
| [`.se-lifestyle > .image-placeholder`](../CSS_REFERENCE.md#r257) | Base sin capa | [CSS:1561](../../../src/index.css#L1561) |
| [`.se-lifestyle__overlay`](../CSS_REFERENCE.md#r258) | Base sin capa | [CSS:1565](../../../src/index.css#L1565) |
| [`.se-lifestyle__copy`](../CSS_REFERENCE.md#r259) | Base sin capa | [CSS:1574](../../../src/index.css#L1574) |
| [`.se-lifestyle h2`](../CSS_REFERENCE.md#r260) | Base sin capa | [CSS:1583](../../../src/index.css#L1583) |
| [`.se-lifestyle p`](../CSS_REFERENCE.md#r261) | Base sin capa | [CSS:1588](../../../src/index.css#L1588) |
| [`.se-intro h2, .se-story__heading h2, .se-lifestyle h2`](../CSS_REFERENCE.md#r620) | @media (max-width: 540px) | [CSS:3350](../../../src/index.css#L3350) |
| [`.se-story__heading`](../CSS_REFERENCE.md#r624) | @media (max-width: 540px) | [CSS:3365](../../../src/index.css#L3365) |
| [`.se-lifestyle, .se-lifestyle__copy`](../CSS_REFERENCE.md#r628) | @media (max-width: 540px) | [CSS:3383](../../../src/index.css#L3383) |
| [`.se-lifestyle__copy`](../CSS_REFERENCE.md#r629) | @media (max-width: 540px) | [CSS:3387](../../../src/index.css#L3387) |
| [`.se-lifestyle p`](../CSS_REFERENCE.md#r630) | @media (max-width: 540px) | [CSS:3390](../../../src/index.css#L3390) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** page.special-edition.json propuesta; colección Special como fuente dinámica, no un SKU fijo.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
