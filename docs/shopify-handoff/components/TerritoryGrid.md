# TerritoryGrid

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1768–1814](../../../src/App.tsx#L1768). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** Story. **Alcance:** Story oculto.

**Dependencias hijas:** [TerritoryCard](TerritoryCard.md)

**Estados, variantes e interacciones:** Cuatro tarjetas placeholder: Caballos, Arquitectura, Paisajes, Tradición; raíz hidden; no ocupa espacio.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.territory-gallery__heading h2`](../CSS_REFERENCE.md#r295) | Base sin capa | [CSS:1785](../../../src/index.css#L1785) |
| [`.territory-gallery`](../CSS_REFERENCE.md#r316) | Base sin capa | [CSS:1887](../../../src/index.css#L1887) |
| [`.territory-gallery__heading`](../CSS_REFERENCE.md#r317) | Base sin capa | [CSS:1891](../../../src/index.css#L1891) |
| [`.territory-gallery__heading p`](../CSS_REFERENCE.md#r318) | Base sin capa | [CSS:1898](../../../src/index.css#L1898) |
| [`.territory-grid`](../CSS_REFERENCE.md#r319) | Base sin capa | [CSS:1904](../../../src/index.css#L1904) |
| [`.territory-gallery__heading`](../CSS_REFERENCE.md#r520) | @media (max-width: 900px) | [CSS:2978](../../../src/index.css#L2978) |
| [`.territory-gallery__heading p`](../CSS_REFERENCE.md#r521) | @media (max-width: 900px) | [CSS:2982](../../../src/index.css#L2982) |
| [`.territory-grid`](../CSS_REFERENCE.md#r522) | @media (max-width: 900px) | [CSS:2985](../../../src/index.css#L2985) |
| [`.story-split__copy h2, .territory-gallery__heading h2`](../CSS_REFERENCE.md#r583) | @media (max-width: 540px) | [CSS:3205](../../../src/index.css#L3205) |
| [`.territory-grid`](../CSS_REFERENCE.md#r584) | @media (max-width: 540px) | [CSS:3209](../../../src/index.css#L3209) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** No implementar inicialmente; rsm-territory-grid condicional a reactivación aprobada.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
