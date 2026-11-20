# ProductGallery

**Categoría:** Producto. **Fuente:** [src/App.tsx:1132–1219](../../../src/App.tsx#L1132). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  product,
  dark = false,
}: {
  product: Product;
  dark?: boolean;
}
```

**Consumidores directos:** CorePdp, NocturnaPdp. **Alcance:** CorePdp, NocturnaPdp.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** activeIndex reseteado al cambiar product.id; loop prev/next; thumbnails solo si >1 imagen; aria-pressed y contador aria-live. Sin zoom/video.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.desktop-nav button:hover::after, .desktop-nav button.is-active::after`](../CSS_REFERENCE.md#r033) | Base sin capa | [CSS:205](../../../src/index.css#L205) |
| [`.product-gallery`](../CSS_REFERENCE.md#r145) | Base sin capa | [CSS:911](../../../src/index.css#L911) |
| [`.product-gallery .image-placeholder`](../CSS_REFERENCE.md#r146) | Base sin capa | [CSS:917](../../../src/index.css#L917) |
| [`.product-gallery--interactive`](../CSS_REFERENCE.md#r148) | Base sin capa | [CSS:928](../../../src/index.css#L928) |
| [`.product-gallery__stage`](../CSS_REFERENCE.md#r149) | Base sin capa | [CSS:933](../../../src/index.css#L933) |
| [`.product-gallery__stage-img`](../CSS_REFERENCE.md#r152) | Base sin capa | [CSS:949](../../../src/index.css#L949) |
| [`.product-gallery__controls`](../CSS_REFERENCE.md#r153) | Base sin capa | [CSS:955](../../../src/index.css#L955) |
| [`.product-gallery__arrow`](../CSS_REFERENCE.md#r154) | Base sin capa | [CSS:966](../../../src/index.css#L966) |
| [`.product-gallery__arrow--prev svg`](../CSS_REFERENCE.md#r155) | Base sin capa | [CSS:976](../../../src/index.css#L976) |
| [`.product-gallery__counter`](../CSS_REFERENCE.md#r156) | Base sin capa | [CSS:979](../../../src/index.css#L979) |
| [`.product-gallery__thumbs`](../CSS_REFERENCE.md#r157) | Base sin capa | [CSS:987](../../../src/index.css#L987) |
| [`.product-gallery__thumb`](../CSS_REFERENCE.md#r158) | Base sin capa | [CSS:992](../../../src/index.css#L992) |
| [`.product-gallery__thumb:hover`](../CSS_REFERENCE.md#r159) | Base sin capa | [CSS:1003](../../../src/index.css#L1003) |
| [`.product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r160) | Base sin capa | [CSS:1006](../../../src/index.css#L1006) |
| [`.product-gallery--dark .product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r161) | Base sin capa | [CSS:1010](../../../src/index.css#L1010) |
| [`.product-gallery__thumb img`](../CSS_REFERENCE.md#r162) | Base sin capa | [CSS:1013](../../../src/index.css#L1013) |
| [`.product-gallery--dark .image-placeholder`](../CSS_REFERENCE.md#r270) | Base sin capa | [CSS:1637](../../../src/index.css#L1637) |
| [`.care-story__nav button:hover, .care-story__nav button.is-active`](../CSS_REFERENCE.md#r400) | Base sin capa | [CSS:2398](../../../src/index.css#L2398) |
| [`.care-step.is-active`](../CSS_REFERENCE.md#r402) | Base sin capa | [CSS:2415](../../../src/index.css#L2415) |
| [`.product-gallery`](../CSS_REFERENCE.md#r497) | @media (max-width: 900px) | [CSS:2898](../../../src/index.css#L2898) |
| [`.product-gallery .image-placeholder`](../CSS_REFERENCE.md#r498) | @media (max-width: 900px) | [CSS:2901](../../../src/index.css#L2901) |
| [`.product-gallery .image-placeholder`](../CSS_REFERENCE.md#r558) | @media (max-width: 540px) | [CSS:3117](../../../src/index.css#L3117) |
| [`.product-gallery__thumbs`](../CSS_REFERENCE.md#r560) | @media (max-width: 540px) | [CSS:3123](../../../src/index.css#L3123) |
| [`.product-gallery__thumb`](../CSS_REFERENCE.md#r561) | @media (max-width: 540px) | [CSS:3128](../../../src/index.css#L3128) |
| [`.product-gallery__counter`](../CSS_REFERENCE.md#r562) | @media (max-width: 540px) | [CSS:3131](../../../src/index.css#L3131) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:1167](../../../src/App.tsx#L1167) | `src={current.src}` |
| [App:1168](../../../src/App.tsx#L1168) | `alt={current.alt}` |
| [App:1212](../../../src/App.tsx#L1212) | `src={image.src}` |
| [App:1212](../../../src/App.tsx#L1212) | `alt={image.alt}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** product-gallery nativo; no clonar galería ni limitar capacidades nativas.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
