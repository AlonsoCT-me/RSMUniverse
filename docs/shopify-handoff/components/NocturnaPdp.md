# NocturnaPdp

**Categoría:** Página. **Fuente:** [src/App.tsx:1646–1685](../../../src/App.tsx#L1646). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  product,
  navigate,
  onAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  onAdd: (quantity: number) => void;
}
```

**Consumidores directos:** App. **Alcance:** nocturna y handles Special.

**Dependencias hijas:** [ProductGallery](ProductGallery.md), [ProductInfo](ProductInfo.md), [TextLink](TextLink.md), [ImagePlaceholder](ImagePlaceholder.md)

**Estados, variantes e interacciones:** Galería/info dark + nocturna-story placeholder y enlace a landing. No tiene relacionados. Nocturna es nombre histórico de componente/alias.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`](../CSS_REFERENCE.md#r067) | Base sin capa | [CSS:426](../../../src/index.css#L426) |
| [`.borderless p, .special-split p, .pdp-story p, .nocturna-story p`](../CSS_REFERENCE.md#r068) | Base sin capa | [CSS:439](../../../src/index.css#L439) |
| [`.dark-page`](../CSS_REFERENCE.md#r194) | Base sin capa | [CSS:1200](../../../src/index.css#L1200) |
| [`.pdp--dark`](../CSS_REFERENCE.md#r269) | Base sin capa | [CSS:1634](../../../src/index.css#L1634) |
| [`.nocturna-story`](../CSS_REFERENCE.md#r279) | Base sin capa | [CSS:1675](../../../src/index.css#L1675) |
| [`.nocturna-story > div`](../CSS_REFERENCE.md#r280) | Base sin capa | [CSS:1681](../../../src/index.css#L1681) |
| [`.nocturna-story > .image-placeholder`](../CSS_REFERENCE.md#r281) | Base sin capa | [CSS:1688](../../../src/index.css#L1688) |
| [`.nocturna-story p`](../CSS_REFERENCE.md#r282) | Base sin capa | [CSS:1692](../../../src/index.css#L1692) |
| [`.borderless, .special-split, .pdp-story, .special-cta, .nocturna-story`](../CSS_REFERENCE.md#r478) | @media (max-width: 900px) | [CSS:2815](../../../src/index.css#L2815) |
| [`.borderless__copy, .special-split__copy, .pdp-story div, .special-cta > div, .nocturna-story > div`](../CSS_REFERENCE.md#r480) | @media (max-width: 900px) | [CSS:2826](../../../src/index.css#L2826) |
| [`.special-cta img, .nocturna-story > .image-placeholder`](../CSS_REFERENCE.md#r517) | @media (max-width: 900px) | [CSS:2967](../../../src/index.css#L2967) |
| [`.pdp--dark`](../CSS_REFERENCE.md#r518) | @media (max-width: 900px) | [CSS:2971](../../../src/index.css#L2971) |
| [`.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`](../CSS_REFERENCE.md#r539) | @media (max-width: 540px) | [CSS:3046](../../../src/index.css#L3046) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** product.special-edition.json propuesta reutilizando main-product.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
