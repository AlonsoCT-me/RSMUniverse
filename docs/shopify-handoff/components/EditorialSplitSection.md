# EditorialSplitSection

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1687–1728](../../../src/App.tsx#L1687). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  id,
  eyebrow,
  title,
  copy,
  imageSrc,
  imageAlt,
  variant,
  reverse = false,
  sectionStyle,
  copyStyle,
  titleStyle,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  imageSrc: string;
  imageAlt: string;
  variant: "origin" | "city";
  reverse?: boolean;
  sectionStyle?: React.CSSProperties;
  copyStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}
```

**Consumidores directos:** Story. **Alcance:** Story ×2.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** Props de imagen/alt/copy/variant; reverse false en ambas instancias actuales. sectionStyle/copyStyle/titleStyle opcionales sin valores en Story.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.story-split`](../CSS_REFERENCE.md#r290) | Base sin capa | [CSS:1751](../../../src/index.css#L1751) |
| [`.story-split--reverse`](../CSS_REFERENCE.md#r291) | Base sin capa | [CSS:1758](../../../src/index.css#L1758) |
| [`.story-split__copy`](../CSS_REFERENCE.md#r292) | Base sin capa | [CSS:1763](../../../src/index.css#L1763) |
| [`.story-split__copy h2`](../CSS_REFERENCE.md#r293) | Base sin capa | [CSS:1772](../../../src/index.css#L1772) |
| [`.story-split__copy h2`](../CSS_REFERENCE.md#r294) | @media (min-width: 1120px) | [CSS:1781](../../../src/index.css#L1781) |
| [`.story-split__copy .eyebrow`](../CSS_REFERENCE.md#r296) | Base sin capa | [CSS:1793](../../../src/index.css#L1793) |
| [`.story-split__copy p`](../CSS_REFERENCE.md#r298) | Base sin capa | [CSS:1801](../../../src/index.css#L1801) |
| [`.story-split__media`](../CSS_REFERENCE.md#r299) | Base sin capa | [CSS:1807](../../../src/index.css#L1807) |
| [`.story-split__media img`](../CSS_REFERENCE.md#r300) | Base sin capa | [CSS:1812](../../../src/index.css#L1812) |
| [`.story-split--origin .story-split__media img`](../CSS_REFERENCE.md#r301) | Base sin capa | [CSS:1817](../../../src/index.css#L1817) |
| [`.story-split--city .story-split__media img`](../CSS_REFERENCE.md#r302) | Base sin capa | [CSS:1820](../../../src/index.css#L1820) |
| [`.story-split__inner, .story-split--reverse .story-split__inner`](../CSS_REFERENCE.md#r579) | @media (max-width: 540px) | [CSS:3191](../../../src/index.css#L3191) |
| [`.story-split--reverse .story-split__inner`](../CSS_REFERENCE.md#r581) | @media (max-width: 540px) | [CSS:3199](../../../src/index.css#L3199) |
| [`.story-split__media`](../CSS_REFERENCE.md#r582) | @media (max-width: 540px) | [CSS:3202](../../../src/index.css#L3202) |
| [`.story-split__copy h2, .territory-gallery__heading h2`](../CSS_REFERENCE.md#r583) | @media (max-width: 540px) | [CSS:3205](../../../src/index.css#L3205) |
| [`.story-split, .story-split--reverse`](../CSS_REFERENCE.md#r660) | @media (max-width: 900px) | [CSS:3504](../../../src/index.css#L3504) |
| [`.story-split`](../CSS_REFERENCE.md#r661) | @media (max-width: 900px) | [CSS:3509](../../../src/index.css#L3509) |
| [`.story-split--reverse`](../CSS_REFERENCE.md#r662) | @media (max-width: 900px) | [CSS:3512](../../../src/index.css#L3512) |
| [`.story-split__copy`](../CSS_REFERENCE.md#r663) | @media (max-width: 900px) | [CSS:3515](../../../src/index.css#L3515) |
| [`.story-split__media`](../CSS_REFERENCE.md#r664) | @media (max-width: 900px) | [CSS:3519](../../../src/index.css#L3519) |
| [`.story-split__copy`](../CSS_REFERENCE.md#r672) | @media (max-width: 540px) | [CSS:3560](../../../src/index.css#L3560) |
| [`.story-split__media`](../CSS_REFERENCE.md#r673) | @media (max-width: 540px) | [CSS:3564](../../../src/index.css#L3564) |
| [`.story-split__copy h2`](../CSS_REFERENCE.md#r674) | @media (max-width: 540px) | [CSS:3567](../../../src/index.css#L3567) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:1716](../../../src/App.tsx#L1716) | `{sectionStyle}` |
| [App:1718](../../../src/App.tsx#L1718) | `{copyStyle}` |
| [App:1720](../../../src/App.tsx#L1720) | `{titleStyle}` |
| [App:1724](../../../src/App.tsx#L1724) | `src={imageSrc}` |
| [App:1724](../../../src/App.tsx#L1724) | `alt={imageAlt}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** image-with-text; probar 52/48 y nowrap; rsm-editorial-split solo ante brecha.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
