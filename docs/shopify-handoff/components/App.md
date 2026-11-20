# App

**Categoría:** Global. **Fuente:** [src/App.tsx:2691–2831](../../../src/App.tsx#L2691). **Exportación:** default.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** src/main.tsx. **Alcance:** Todas.

**Dependencias hijas:** [Collection](Collection.md), [CorePdp](CorePdp.md), [SpecialLanding](SpecialLanding.md), [NocturnaPdp](NocturnaPdp.md), [Story](Story.md), [CarePage](CarePage.md), [DesignSystem](DesignSystem.md), [Comparison](Comparison.md), [Home](Home.md), [Header](Header.md), [Footer](Footer.md), [CartDrawer](CartDrawer.md)

**Estados, variantes e interacciones:** Único export default. Router hash + estado seleccionado, useMemo contenido; cartItems en memoria, addToCart useCallback; Header/content/Footer/CartDrawer.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`:root`](../CSS_REFERENCE.md#r001) | Base sin capa | [CSS:4](../../../src/index.css#L4) |
| [`html`](../CSS_REFERENCE.md#r002) | @layer base | [CSS:19](../../../src/index.css#L19) |
| [`body`](../CSS_REFERENCE.md#r003) | @layer base | [CSS:22](../../../src/index.css#L22) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** layout + templates + rutas localizadas Shopify; no portar React/router/memoria comercial.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
