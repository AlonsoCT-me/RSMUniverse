# TextLink

**Categoría:** Global. **Fuente:** [src/App.tsx:689–707](../../../src/App.tsx#L689). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  children,
  onClick,
  light = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  light?: boolean;
}
```

**Consumidores directos:** Home, CorePdp, SpecialEditionDetails, NocturnaPdp, DesignSystem, CarePage. **Alcance:** Home, CorePdp, Special, NocturnaPdp, Care, DesignSystem.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** Button con onClick opcional; light; flecha se desplaza 4 px en hover.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.text-link`](../CSS_REFERENCE.md#r051) | Base sin capa | [CSS:318](../../../src/index.css#L318) |
| [`.text-link svg`](../CSS_REFERENCE.md#r052) | Base sin capa | [CSS:330](../../../src/index.css#L330) |
| [`.text-link:hover svg`](../CSS_REFERENCE.md#r053) | Base sin capa | [CSS:333](../../../src/index.css#L333) |
| [`.text-link--light`](../CSS_REFERENCE.md#r054) | Base sin capa | [CSS:336](../../../src/index.css#L336) |
| [`.se-product-card .text-link`](../CSS_REFERENCE.md#r246) | Base sin capa | [CSS:1504](../../../src/index.css#L1504) |
| [`.care-storage__copy .text-link`](../CSS_REFERENCE.md#r411) | Base sin capa | [CSS:2461](../../../src/index.css#L2461) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Enlace nativo para navegación; botones solo para acciones; snippet button según contexto.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
