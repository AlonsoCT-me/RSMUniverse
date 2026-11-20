# TerritoryEditorialBanner

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1816–1843](../../../src/App.tsx#L1816). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** Story. **Alcance:** Story.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** Tres hijos: fotografía paisaje importada, copy dark, fotografía arquitectura; no puerta ni cuarta columna; sin interacción.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.territory-editorial`](../CSS_REFERENCE.md#r303) | Base sin capa | [CSS:1823](../../../src/index.css#L1823) |
| [`.territory-editorial > *`](../CSS_REFERENCE.md#r304) | Base sin capa | [CSS:1830](../../../src/index.css#L1830) |
| [`.territory-editorial__visual`](../CSS_REFERENCE.md#r305) | Base sin capa | [CSS:1834](../../../src/index.css#L1834) |
| [`.territory-editorial__visual img`](../CSS_REFERENCE.md#r306) | Base sin capa | [CSS:1838](../../../src/index.css#L1838) |
| [`.territory-editorial__visual--landscape img`](../CSS_REFERENCE.md#r307) | Base sin capa | [CSS:1843](../../../src/index.css#L1843) |
| [`.territory-editorial__visual--architecture img`](../CSS_REFERENCE.md#r308) | Base sin capa | [CSS:1846](../../../src/index.css#L1846) |
| [`.territory-editorial__copy`](../CSS_REFERENCE.md#r310) | Base sin capa | [CSS:1852](../../../src/index.css#L1852) |
| [`.territory-editorial__copy h2`](../CSS_REFERENCE.md#r312) | Base sin capa | [CSS:1864](../../../src/index.css#L1864) |
| [`.territory-editorial__copy p`](../CSS_REFERENCE.md#r313) | Base sin capa | [CSS:1871](../../../src/index.css#L1871) |
| [`.territory-editorial`](../CSS_REFERENCE.md#r314) | @media (max-width: 1100px) | [CSS:1879](../../../src/index.css#L1879) |
| [`.territory-editorial > *`](../CSS_REFERENCE.md#r315) | @media (max-width: 1100px) | [CSS:1882](../../../src/index.css#L1882) |
| [`.territory-editorial`](../CSS_REFERENCE.md#r665) | @media (max-width: 900px) | [CSS:3522](../../../src/index.css#L3522) |
| [`.territory-editorial > *`](../CSS_REFERENCE.md#r666) | @media (max-width: 900px) | [CSS:3525](../../../src/index.css#L3525) |
| [`.territory-editorial`](../CSS_REFERENCE.md#r675) | @media (max-width: 540px) | [CSS:3570](../../../src/index.css#L3570) |
| [`.territory-editorial > *`](../CSS_REFERENCE.md#r676) | @media (max-width: 540px) | [CSS:3573](../../../src/index.css#L3573) |
| [`.territory-editorial__copy`](../CSS_REFERENCE.md#r677) | @media (max-width: 540px) | [CSS:3576](../../../src/index.css#L3576) |
| [`.territory-editorial__copy h2`](../CSS_REFERENCE.md#r678) | @media (max-width: 540px) | [CSS:3580](../../../src/index.css#L3580) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:1824](../../../src/App.tsx#L1824) | `src={territoryLandscapeImg}` |
| [App:1825](../../../src/App.tsx#L1825) | `alt="Hombre contemplando Monterrey desde la montaña"` |
| [App:1837](../../../src/App.tsx#L1837) | `src={assetUrl("/assets/story-territory-architecture.webp")}` |
| [App:1838](../../../src/App.tsx#L1838) | `alt="Arquitectura de rancho con cúpula y farol"` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** media-grid/multiple-media-with-text a probar; brecha probable tres columnas 40/30/30 con texto central.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
