# Accordion

**Categoría:** Global. **Fuente:** [src/App.tsx:1109–1130](../../../src/App.tsx#L1109). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  title,
  children,
  dark = false,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  open?: boolean;
}
```

**Consumidores directos:** ProductInfo, DesignSystem, CareMaterialAccordion, CarePage. **Alcance:** ProductInfo, CareMaterialAccordion, CarePage, DesignSystem.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** expanded inicial open; monta contenido solo si expandido. aria-expanded sin aria-controls; dark.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.accordion--dark`](../CSS_REFERENCE.md#r277) | Base sin capa | [CSS:1669](../../../src/index.css#L1669) |
| [`.accordion--dark .accordion__content`](../CSS_REFERENCE.md#r278) | Base sin capa | [CSS:1672](../../../src/index.css#L1672) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** snippet accordion y bloques accordion nativos; conservar accesibilidad del tema.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
