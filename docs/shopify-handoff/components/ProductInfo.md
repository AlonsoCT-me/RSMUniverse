# ProductInfo

**Categoría:** Producto. **Fuente:** [src/App.tsx:1221–1345](../../../src/App.tsx#L1221). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  product,
  navigate,
  dark = false,
  onAdd,
}: {
  product: Product;
  navigate: NavigateFn;
  dark?: boolean;
  onAdd: (quantity: number) => void;
}
```

**Consumidores directos:** CorePdp, NocturnaPdp. **Alcance:** CorePdp, NocturnaPdp.

**Dependencias hijas:** [Quantity](Quantity.md), [Accordion](Accordion.md)

**Estados, variantes e interacciones:** quantity resetea al cambiar producto; variants opcional pinta primero seleccionado pero sin handler; descripción abierta; 4 acordeones; compra simulada.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.swatches button, .swatch-dot`](../CSS_REFERENCE.md#r110) | Base sin capa | [CSS:701](../../../src/index.css#L701) |
| [`.swatches button.is-selected, .swatch-dot.is-selected`](../CSS_REFERENCE.md#r111) | Base sin capa | [CSS:710](../../../src/index.css#L710) |
| [`.swatches--large button, .swatch-dot--large`](../CSS_REFERENCE.md#r112) | Base sin capa | [CSS:716](../../../src/index.css#L716) |
| [`.product-info`](../CSS_REFERENCE.md#r163) | Base sin capa | [CSS:1019](../../../src/index.css#L1019) |
| [`.product-info h1`](../CSS_REFERENCE.md#r168) | Base sin capa | [CSS:1049](../../../src/index.css#L1049) |
| [`.product-info__price`](../CSS_REFERENCE.md#r169) | Base sin capa | [CSS:1058](../../../src/index.css#L1058) |
| [`.product-info__price small`](../CSS_REFERENCE.md#r170) | Base sin capa | [CSS:1067](../../../src/index.css#L1067) |
| [`.product-specs`](../CSS_REFERENCE.md#r173) | Base sin capa | [CSS:1085](../../../src/index.css#L1085) |
| [`.product-specs > div`](../CSS_REFERENCE.md#r174) | Base sin capa | [CSS:1092](../../../src/index.css#L1092) |
| [`.product-specs dt`](../CSS_REFERENCE.md#r175) | Base sin capa | [CSS:1099](../../../src/index.css#L1099) |
| [`.product-specs dd`](../CSS_REFERENCE.md#r176) | Base sin capa | [CSS:1107](../../../src/index.css#L1107) |
| [`.buy-row`](../CSS_REFERENCE.md#r177) | Base sin capa | [CSS:1110](../../../src/index.css#L1110) |
| [`.button--add`](../CSS_REFERENCE.md#r180) | Base sin capa | [CSS:1128](../../../src/index.css#L1128) |
| [`.product-info--dark`](../CSS_REFERENCE.md#r271) | Base sin capa | [CSS:1640](../../../src/index.css#L1640) |
| [`.product-info--dark .breadcrumbs, .product-info--dark .product-info__price small, .product-info--dark .availability, .product-info--dark .product-specs dt`](../CSS_REFERENCE.md#r272) | Base sin capa | [CSS:1643](../../../src/index.css#L1643) |
| [`.product-info--dark .breadcrumbs button:hover`](../CSS_REFERENCE.md#r273) | Base sin capa | [CSS:1649](../../../src/index.css#L1649) |
| [`.product-info--dark .product-info__price, .product-info--dark .product-specs, .product-info--dark .accordion, .quantity--dark`](../CSS_REFERENCE.md#r274) | Base sin capa | [CSS:1652](../../../src/index.css#L1652) |
| [`.product-info--dark .swatches button.is-selected, .product-info--dark .swatch-dot.is-selected`](../CSS_REFERENCE.md#r275) | Base sin capa | [CSS:1658](../../../src/index.css#L1658) |
| [`.button--caliza`](../CSS_REFERENCE.md#r276) | Base sin capa | [CSS:1664](../../../src/index.css#L1664) |
| [`.product-info`](../CSS_REFERENCE.md#r500) | @media (max-width: 900px) | [CSS:2908](../../../src/index.css#L2908) |
| [`.product-info h1`](../CSS_REFERENCE.md#r559) | @media (max-width: 540px) | [CSS:3120](../../../src/index.css#L3120) |
| [`.product-specs > div`](../CSS_REFERENCE.md#r563) | @media (max-width: 540px) | [CSS:3135](../../../src/index.css#L3135) |
| [`.product-info__price`](../CSS_REFERENCE.md#r564) | @media (max-width: 540px) | [CSS:3138](../../../src/index.css#L3138) |
| [`.product-info__price small`](../CSS_REFERENCE.md#r565) | @media (max-width: 540px) | [CSS:3141](../../../src/index.css#L3141) |
| [`.buy-row`](../CSS_REFERENCE.md#r566) | @media (max-width: 540px) | [CSS:3145](../../../src/index.css#L3145) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:1283](../../../src/App.tsx#L1283) | `{{ "--swatch": variant.swatch } as React.CSSProperties}` |
| [App:1290](../../../src/App.tsx#L1290) | `{{ "--swatch": product.swatch } as React.CSSProperties}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** product-info + variant-picker + quantity-selector + buy-buttons; fuentes dinámicas para atributos.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
