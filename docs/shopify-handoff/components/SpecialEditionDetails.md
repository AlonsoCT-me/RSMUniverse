# SpecialEditionDetails

**Categoría:** Catálogo. **Fuente:** [src/App.tsx:1496–1531](../../../src/App.tsx#L1496). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ navigate }: { navigate: NavigateFn }
```

**Consumidores directos:** SpecialLanding. **Alcance:** SpecialLanding.

**Dependencias hijas:** [Reveal](Reveal.md), [TextLink](TextLink.md)

**Estados, variantes e interacciones:** Itera 4 specialEditionProducts en orden; cards se-product-card diferentes de ProductCard, sin precio/swatches/Quick Add; foto, nombre, descripción corta y enlace PDP por ID.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.se-presentation`](../CSS_REFERENCE.md#r236) | Base sin capa | [CSS:1446](../../../src/index.css#L1446) |
| [`.se-presentation__grid`](../CSS_REFERENCE.md#r237) | Base sin capa | [CSS:1450](../../../src/index.css#L1450) |
| [`.se-product-card`](../CSS_REFERENCE.md#r238) | Base sin capa | [CSS:1455](../../../src/index.css#L1455) |
| [`.se-product-card__media`](../CSS_REFERENCE.md#r239) | Base sin capa | [CSS:1460](../../../src/index.css#L1460) |
| [`.se-product-card__media img`](../CSS_REFERENCE.md#r240) | Base sin capa | [CSS:1468](../../../src/index.css#L1468) |
| [`.se-product-card .image-placeholder, .se-detail .image-placeholder`](../CSS_REFERENCE.md#r241) | Base sin capa | [CSS:1475](../../../src/index.css#L1475) |
| [`.se-product-card:hover .se-product-card__media img, .se-product-card:hover .image-placeholder, .se-detail:hover .image-placeholder`](../CSS_REFERENCE.md#r242) | Base sin capa | [CSS:1479](../../../src/index.css#L1479) |
| [`.se-product-card h3`](../CSS_REFERENCE.md#r243) | Base sin capa | [CSS:1484](../../../src/index.css#L1484) |
| [`.se-product-card h3 button`](../CSS_REFERENCE.md#r244) | Base sin capa | [CSS:1491](../../../src/index.css#L1491) |
| [`.se-product-card p`](../CSS_REFERENCE.md#r245) | Base sin capa | [CSS:1497](../../../src/index.css#L1497) |
| [`.se-product-card .text-link`](../CSS_REFERENCE.md#r246) | Base sin capa | [CSS:1504](../../../src/index.css#L1504) |
| [`.se-presentation__grid`](../CSS_REFERENCE.md#r599) | @media (max-width: 900px) | [CSS:3268](../../../src/index.css#L3268) |
| [`.se-presentation`](../CSS_REFERENCE.md#r621) | @media (max-width: 540px) | [CSS:3355](../../../src/index.css#L3355) |
| [`.se-presentation__grid`](../CSS_REFERENCE.md#r622) | @media (max-width: 540px) | [CSS:3358](../../../src/index.css#L3358) |
| [`.se-product-card__media`](../CSS_REFERENCE.md#r623) | @media (max-width: 540px) | [CSS:3362](../../../src/index.css#L3362) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:1509](../../../src/App.tsx#L1509) | `src={product.images[0].src}` |
| [App:1510](../../../src/App.tsx#L1510) | `alt={product.images[0].alt}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** featured-collections con hide_product_information no basta para copy específico; evaluar multi-column con producto dinámico antes de rsm-special-product-grid.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
