# CareStep

**Categoría:** Editorial. **Fuente:** [src/App.tsx:2116–2149](../../../src/App.tsx#L2116). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  step,
  index,
  active,
  register,
  select,
}: {
  step: (typeof careSteps)[number];
  index: number;
  active: boolean;
  register: (node: HTMLElement | null) => void;
  select: () => void;
}
```

**Consumidores directos:** CareScrollStory. **Alcance:** CareScrollStory ×5.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** article ref/register, data-care-step; active CSS y aria-current step; botón select activa paso y scroll.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.desktop-nav button:hover::after, .desktop-nav button.is-active::after`](../CSS_REFERENCE.md#r033) | Base sin capa | [CSS:205](../../../src/index.css#L205) |
| [`.product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r160) | Base sin capa | [CSS:1006](../../../src/index.css#L1006) |
| [`.product-gallery--dark .product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r161) | Base sin capa | [CSS:1010](../../../src/index.css#L1010) |
| [`.care-story__nav button:hover, .care-story__nav button.is-active`](../CSS_REFERENCE.md#r400) | Base sin capa | [CSS:2398](../../../src/index.css#L2398) |
| [`.care-step`](../CSS_REFERENCE.md#r401) | Base sin capa | [CSS:2404](../../../src/index.css#L2404) |
| [`.care-step.is-active`](../CSS_REFERENCE.md#r402) | Base sin capa | [CSS:2415](../../../src/index.css#L2415) |
| [`.care-step > button`](../CSS_REFERENCE.md#r403) | Base sin capa | [CSS:2419](../../../src/index.css#L2419) |
| [`.care-step > button > span`](../CSS_REFERENCE.md#r404) | Base sin capa | [CSS:2428](../../../src/index.css#L2428) |
| [`.care-step h3`](../CSS_REFERENCE.md#r405) | Base sin capa | [CSS:2433](../../../src/index.css#L2433) |
| [`.care-step p`](../CSS_REFERENCE.md#r406) | Base sin capa | [CSS:2439](../../../src/index.css#L2439) |
| [`.care-step`](../CSS_REFERENCE.md#r611) | @media (max-width: 900px) | [CSS:3314](../../../src/index.css#L3314) |
| [`.care-step`](../CSS_REFERENCE.md#r653) | @media (max-width: 540px) | [CSS:3474](../../../src/index.css#L3474) |
| [`.care-step > button`](../CSS_REFERENCE.md#r654) | @media (max-width: 540px) | [CSS:3477](../../../src/index.css#L3477) |
| [`.care-step > button > span`](../CSS_REFERENCE.md#r655) | @media (max-width: 540px) | [CSS:3482](../../../src/index.css#L3482) |
| [`.care-step h3`](../CSS_REFERENCE.md#r656) | @media (max-width: 540px) | [CSS:3485](../../../src/index.css#L3485) |
| [`.care-step p`](../CSS_REFERENCE.md#r657) | @media (max-width: 540px) | [CSS:3488](../../../src/index.css#L3488) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Bloque step en sección propia; etiqueta accesible traducida.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
