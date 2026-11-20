# ImagePlaceholder

**Categoría:** Global. **Fuente:** [src/App.tsx:518–553](../../../src/App.tsx#L518). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  label,
  backgroundColor,
  aspectRatio,
  variant,
  className = "",
  corner = false,
}: {
  label: string;
  backgroundColor: string;
  aspectRatio?: string;
  variant: "light" | "dark";
  className?: string;
  corner?: boolean;
}
```

**Consumidores directos:** CorePdp, EditorialImageText, SpecialEditionProductCTA, SpecialLanding, NocturnaPdp, TerritoryCard, CarePage. **Alcance:** PDP, Special, Care, TerritoryGrid oculto.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** role=img y label; color, proporción, light/dark, corner. Es una maqueta, no una foto ni un archivo de imagen.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.image-placeholder`](../CSS_REFERENCE.md#r014) | Base sin capa | [CSS:84](../../../src/index.css#L84) |
| [`.image-placeholder::before, .image-placeholder::after`](../CSS_REFERENCE.md#r015) | Base sin capa | [CSS:94](../../../src/index.css#L94) |
| [`.image-placeholder::before`](../CSS_REFERENCE.md#r016) | Base sin capa | [CSS:100](../../../src/index.css#L100) |
| [`.image-placeholder::after`](../CSS_REFERENCE.md#r017) | Base sin capa | [CSS:105](../../../src/index.css#L105) |
| [`.image-placeholder__mark`](../CSS_REFERENCE.md#r020) | Base sin capa | [CSS:118](../../../src/index.css#L118) |
| [`.image-placeholder__mark svg`](../CSS_REFERENCE.md#r021) | Base sin capa | [CSS:130](../../../src/index.css#L130) |
| [`.image-placeholder__mark b`](../CSS_REFERENCE.md#r022) | Base sin capa | [CSS:136](../../../src/index.css#L136) |
| [`.image-placeholder--corner .image-placeholder__mark`](../CSS_REFERENCE.md#r023) | Base sin capa | [CSS:143](../../../src/index.css#L143) |
| [`.home-hero > .image-placeholder`](../CSS_REFERENCE.md#r056) | Base sin capa | [CSS:352](../../../src/index.css#L352) |
| [`.borderless__image .image-placeholder, .borderless__image .home-lifestyle-image`](../CSS_REFERENCE.md#r064) | Base sin capa | [CSS:407](../../../src/index.css#L407) |
| [`.borderless:hover .image-placeholder, .borderless:hover .home-lifestyle-image`](../CSS_REFERENCE.md#r065) | Base sin capa | [CSS:415](../../../src/index.css#L415) |
| [`.product-card__media .image-placeholder, .product-card__img`](../CSS_REFERENCE.md#r091) | Base sin capa | [CSS:587](../../../src/index.css#L587) |
| [`.special-split__image .image-placeholder`](../CSS_REFERENCE.md#r115) | Base sin capa | [CSS:732](../../../src/index.css#L732) |
| [`.history-banner > .image-placeholder`](../CSS_REFERENCE.md#r120) | Base sin capa | [CSS:763](../../../src/index.css#L763) |
| [`.collection-hero > .image-placeholder`](../CSS_REFERENCE.md#r125) | Base sin capa | [CSS:802](../../../src/index.css#L802) |
| [`.product-gallery .image-placeholder`](../CSS_REFERENCE.md#r146) | Base sin capa | [CSS:917](../../../src/index.css#L917) |
| [`.pdp-story > .image-placeholder`](../CSS_REFERENCE.md#r188) | Base sin capa | [CSS:1177](../../../src/index.css#L1177) |
| [`.special-hero__visual .image-placeholder`](../CSS_REFERENCE.md#r197) | Base sin capa | [CSS:1214](../../../src/index.css#L1214) |
| [`.detail-triptych .image-placeholder`](../CSS_REFERENCE.md#r204) | Base sin capa | [CSS:1255](../../../src/index.css#L1255) |
| [`.bento .image-placeholder`](../CSS_REFERENCE.md#r208) | Base sin capa | [CSS:1278](../../../src/index.css#L1278) |
| [`.special-cta > .image-placeholder`](../CSS_REFERENCE.md#r220) | Base sin capa | [CSS:1340](../../../src/index.css#L1340) |
| [`.se-hero > .image-placeholder`](../CSS_REFERENCE.md#r225) | Base sin capa | [CSS:1372](../../../src/index.css#L1372) |
| [`.se-product-card .image-placeholder, .se-detail .image-placeholder`](../CSS_REFERENCE.md#r241) | Base sin capa | [CSS:1475](../../../src/index.css#L1475) |
| [`.se-product-card:hover .se-product-card__media img, .se-product-card:hover .image-placeholder, .se-detail:hover .image-placeholder`](../CSS_REFERENCE.md#r242) | Base sin capa | [CSS:1479](../../../src/index.css#L1479) |
| [`.se-lifestyle > .image-placeholder`](../CSS_REFERENCE.md#r257) | Base sin capa | [CSS:1561](../../../src/index.css#L1561) |
| [`.product-gallery--dark .image-placeholder`](../CSS_REFERENCE.md#r270) | Base sin capa | [CSS:1637](../../../src/index.css#L1637) |
| [`.nocturna-story > .image-placeholder`](../CSS_REFERENCE.md#r281) | Base sin capa | [CSS:1688](../../../src/index.css#L1688) |
| [`.territory-card .image-placeholder`](../CSS_REFERENCE.md#r322) | Base sin capa | [CSS:1923](../../../src/index.css#L1923) |
| [`.care-hero > .image-placeholder`](../CSS_REFERENCE.md#r358) | Base sin capa | [CSS:2143](../../../src/index.css#L2143) |
| [`.product-gallery .image-placeholder`](../CSS_REFERENCE.md#r498) | @media (max-width: 900px) | [CSS:2901](../../../src/index.css#L2901) |
| [`.detail-triptych .image-placeholder`](../CSS_REFERENCE.md#r511) | @media (max-width: 900px) | [CSS:2947](../../../src/index.css#L2947) |
| [`.special-cta img, .nocturna-story > .image-placeholder`](../CSS_REFERENCE.md#r517) | @media (max-width: 900px) | [CSS:2967](../../../src/index.css#L2967) |
| [`.product-gallery .image-placeholder`](../CSS_REFERENCE.md#r558) | @media (max-width: 540px) | [CSS:3117](../../../src/index.css#L3117) |
| [`.detail-triptych .image-placeholder`](../CSS_REFERENCE.md#r571) | @media (max-width: 540px) | [CSS:3160](../../../src/index.css#L3160) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:536](../../../src/App.tsx#L536) | `{{         backgroundColor,         ...(aspectRatio ? { aspectRatio } : {}),       }}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Sustituir por imagen autorizada; placeholder solo en editor sin contenido.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
