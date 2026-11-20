# CareIllustration

**Categoría:** Producto/editorial. **Fuente:** [src/App.tsx:2051–2114](../../../src/App.tsx#L2051). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ step }: { step: number }
```

**Consumidores directos:** CareScrollStory. **Alcance:** CareScrollStory.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** SVG inline viewBox 0 0 640 520, base y cinco acciones por step; role=img y label del paso.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.care-illustration`](../CSS_REFERENCE.md#r390) | Base sin capa | [CSS:2341](../../../src/index.css#L2341) |
| [`.care-illustration__base, .care-illustration__action`](../CSS_REFERENCE.md#r391) | Base sin capa | [CSS:2346](../../../src/index.css#L2346) |
| [`.care-illustration__base`](../CSS_REFERENCE.md#r392) | Base sin capa | [CSS:2354](../../../src/index.css#L2354) |
| [`.care-illustration__action`](../CSS_REFERENCE.md#r393) | Base sin capa | [CSS:2357](../../../src/index.css#L2357) |
| [`.care-illustration`](../CSS_REFERENCE.md#r610) | @media (max-width: 900px) | [CSS:3310](../../../src/index.css#L3310) |
| [`.care-illustration`](../CSS_REFERENCE.md#r648) | @media (max-width: 540px) | [CSS:3455](../../../src/index.css#L3455) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Recurso vectorial propio dentro de sección rsm-cap-care-steps, sin nueva dependencia.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
