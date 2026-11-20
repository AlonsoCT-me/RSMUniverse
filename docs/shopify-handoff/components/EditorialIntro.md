# EditorialIntro

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1479–1494](../../../src/App.tsx#L1479). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** SpecialLanding. **Alcance:** SpecialLanding.

**Dependencias hijas:** [Reveal](Reveal.md)

**Estados, variantes e interacciones:** Título Inspiración en la penumbra; eyebrow y párrafo existen sr-only. Reveal único.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.sr-only`](../CSS_REFERENCE.md#r010) | Base sin capa | [CSS:58](../../../src/index.css#L58) |
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.se-intro`](../CSS_REFERENCE.md#r231) | Base sin capa | [CSS:1418](../../../src/index.css#L1418) |
| [`.se-intro__inner`](../CSS_REFERENCE.md#r232) | Base sin capa | [CSS:1423](../../../src/index.css#L1423) |
| [`.se-intro h2, .se-story__heading h2, .se-lifestyle h2, .se-product-cta h2`](../CSS_REFERENCE.md#r233) | Base sin capa | [CSS:1427](../../../src/index.css#L1427) |
| [`.se-intro h2`](../CSS_REFERENCE.md#r234) | Base sin capa | [CSS:1436](../../../src/index.css#L1436) |
| [`.se-intro p`](../CSS_REFERENCE.md#r235) | Base sin capa | [CSS:1441](../../../src/index.css#L1441) |
| [`.se-intro`](../CSS_REFERENCE.md#r619) | @media (max-width: 540px) | [CSS:3347](../../../src/index.css#L3347) |
| [`.se-intro h2, .se-story__heading h2, .se-lifestyle h2`](../CSS_REFERENCE.md#r620) | @media (max-width: 540px) | [CSS:3350](../../../src/index.css#L3350) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** rich-text; contenido visible no debe incluir automáticamente textos sr-only.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
