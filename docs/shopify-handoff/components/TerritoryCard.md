# TerritoryCard

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1730–1766](../../../src/App.tsx#L1730). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  title,
  copy,
  label,
  backgroundColor,
}: {
  title: string;
  copy: string;
  label: string;
  backgroundColor: string;
}
```

**Consumidores directos:** TerritoryGrid. **Alcance:** TerritoryGrid oculto.

**Dependencias hijas:** [ImagePlaceholder](ImagePlaceholder.md), [Icon](Icon.md)

**Estados, variantes e interacciones:** expanded independiente; hover/focus y tap muestran panel/overlay; botón único aria-expanded; no navegación.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.territory-card`](../CSS_REFERENCE.md#r320) | Base sin capa | [CSS:1909](../../../src/index.css#L1909) |
| [`.territory-card:focus-visible`](../CSS_REFERENCE.md#r321) | Base sin capa | [CSS:1919](../../../src/index.css#L1919) |
| [`.territory-card .image-placeholder`](../CSS_REFERENCE.md#r322) | Base sin capa | [CSS:1923](../../../src/index.css#L1923) |
| [`.territory-card__overlay`](../CSS_REFERENCE.md#r323) | Base sin capa | [CSS:1929](../../../src/index.css#L1929) |
| [`.territory-card__panel`](../CSS_REFERENCE.md#r324) | Base sin capa | [CSS:1941](../../../src/index.css#L1941) |
| [`.territory-card__panel b`](../CSS_REFERENCE.md#r325) | Base sin capa | [CSS:1957](../../../src/index.css#L1957) |
| [`.territory-card__panel > span`](../CSS_REFERENCE.md#r326) | Base sin capa | [CSS:1964](../../../src/index.css#L1964) |
| [`.territory-card__toggle`](../CSS_REFERENCE.md#r327) | Base sin capa | [CSS:1970](../../../src/index.css#L1970) |
| [`.territory-card:hover .territory-card__overlay, .territory-card:focus-visible .territory-card__overlay, .territory-card.is-expanded .territory-card__overlay`](../CSS_REFERENCE.md#r328) | Base sin capa | [CSS:1985](../../../src/index.css#L1985) |
| [`.territory-card:hover .territory-card__panel, .territory-card:focus-visible .territory-card__panel, .territory-card.is-expanded .territory-card__panel`](../CSS_REFERENCE.md#r329) | Base sin capa | [CSS:1990](../../../src/index.css#L1990) |
| [`.territory-card__toggle`](../CSS_REFERENCE.md#r330) | @media (hover: hover) and (pointer: fine) | [CSS:1997](../../../src/index.css#L1997) |
| [`.territory-card:hover .territory-card__toggle, .territory-card:focus-visible .territory-card__toggle, .territory-card.is-expanded .territory-card__toggle`](../CSS_REFERENCE.md#r331) | @media (hover: hover) and (pointer: fine) | [CSS:2001](../../../src/index.css#L2001) |
| [`.territory-card__panel`](../CSS_REFERENCE.md#r585) | @media (max-width: 540px) | [CSS:3213](../../../src/index.css#L3213) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** No construir mientras oculto; si se aprueba, custom justificado por disclosure visual.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
