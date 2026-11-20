# EditorialImageText

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1533–1563](../../../src/App.tsx#L1533). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  title,
  copy,
  label,
  color,
  reverse = false,
}: {
  title: string;
  copy: string;
  label: string;
  color: string;
  reverse?: boolean;
}
```

**Consumidores directos:** SpecialLanding. **Alcance:** SpecialLanding ×3.

**Dependencias hijas:** [Reveal](Reveal.md), [ImagePlaceholder](ImagePlaceholder.md)

**Estados, variantes e interacciones:** reverse invierte áreas; media placeholder 4/5; color/label por instancia; hover escala 1.02.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.se-product-card .image-placeholder, .se-detail .image-placeholder`](../CSS_REFERENCE.md#r241) | Base sin capa | [CSS:1475](../../../src/index.css#L1475) |
| [`.se-product-card:hover .se-product-card__media img, .se-product-card:hover .image-placeholder, .se-detail:hover .image-placeholder`](../CSS_REFERENCE.md#r242) | Base sin capa | [CSS:1479](../../../src/index.css#L1479) |
| [`.se-detail`](../CSS_REFERENCE.md#r250) | Base sin capa | [CSS:1522](../../../src/index.css#L1522) |
| [`.se-detail--reverse`](../CSS_REFERENCE.md#r251) | Base sin capa | [CSS:1531](../../../src/index.css#L1531) |
| [`.se-detail__media`](../CSS_REFERENCE.md#r252) | Base sin capa | [CSS:1535](../../../src/index.css#L1535) |
| [`.se-detail__copy`](../CSS_REFERENCE.md#r253) | Base sin capa | [CSS:1540](../../../src/index.css#L1540) |
| [`.se-detail__copy h3`](../CSS_REFERENCE.md#r254) | Base sin capa | [CSS:1544](../../../src/index.css#L1544) |
| [`.se-detail__copy p`](../CSS_REFERENCE.md#r255) | Base sin capa | [CSS:1551](../../../src/index.css#L1551) |
| [`.se-detail`](../CSS_REFERENCE.md#r600) | @media (max-width: 900px) | [CSS:3272](../../../src/index.css#L3272) |
| [`.se-detail, .se-detail--reverse`](../CSS_REFERENCE.md#r625) | @media (max-width: 540px) | [CSS:3370](../../../src/index.css#L3370) |
| [`.se-detail__media`](../CSS_REFERENCE.md#r626) | @media (max-width: 540px) | [CSS:3377](../../../src/index.css#L3377) |
| [`.se-detail__copy h3`](../CSS_REFERENCE.md#r627) | @media (max-width: 540px) | [CSS:3380](../../../src/index.css#L3380) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** image-with-text; alternar image_position y configurar color_scheme.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
