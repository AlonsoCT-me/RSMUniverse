# Quantity

**Categoría:** Producto. **Fuente:** [src/App.tsx:1080–1107](../../../src/App.tsx#L1080). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  value,
  setValue,
  dark = false,
}: {
  value: number;
  setValue: (value: number) => void;
  dark?: boolean;
}
```

**Consumidores directos:** ProductInfo. **Alcance:** ProductInfo (ambas PDP).

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** value controlado externamente; mínimo 1; reducir disabled en 1; sin límite de inventario ni input editable.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.product-info--dark .product-info__price, .product-info--dark .product-specs, .product-info--dark .accordion, .quantity--dark`](../CSS_REFERENCE.md#r274) | Base sin capa | [CSS:1652](../../../src/index.css#L1652) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** quantity-selector + formulario nativo; validar reglas reales de variante.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
