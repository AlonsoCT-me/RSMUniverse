# CareMaterialAccordion

**Categoría:** Producto/editorial. **Fuente:** [src/App.tsx:2244–2256](../../../src/App.tsx#L2244). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}
```

**Consumidores directos:** CarePage. **Alcance:** CarePage ×5.

**Dependencias hijas:** [Accordion](Accordion.md)

**Estados, variantes e interacciones:** Wrapper visual de Accordion; hijos informativos, sin lógica extra.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.care-material-accordion .accordion`](../CSS_REFERENCE.md#r417) | Base sin capa | [CSS:2487](../../../src/index.css#L2487) |
| [`.care-material-accordion .accordion > button`](../CSS_REFERENCE.md#r418) | Base sin capa | [CSS:2490](../../../src/index.css#L2490) |
| [`.care-material-accordion .accordion > button, .care-faq .accordion > button`](../CSS_REFERENCE.md#r659) | @media (max-width: 540px) | [CSS:3495](../../../src/index.css#L3495) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** FAQ/accordion nativo con fuente editorial; no componente nuevo.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
