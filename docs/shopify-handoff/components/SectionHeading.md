# SectionHeading

**Categoría:** Editorial. **Fuente:** [src/App.tsx:669–687](../../../src/App.tsx#L669). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  light?: boolean;
}
```

**Consumidores directos:** Home, CorePdp, DesignSystem. **Alcance:** Home, CorePdp, DesignSystem.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** Eyebrow/copy opcionales, título ReactNode, variante light; sin estado.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.section-heading`](../CSS_REFERENCE.md#r081) | Base sin capa | [CSS:536](../../../src/index.css#L536) |
| [`.section-heading h2`](../CSS_REFERENCE.md#r082) | Base sin capa | [CSS:539](../../../src/index.css#L539) |
| [`.section-heading p`](../CSS_REFERENCE.md#r083) | Base sin capa | [CSS:548](../../../src/index.css#L548) |
| [`.section-heading--light h2, .section-heading--light p`](../CSS_REFERENCE.md#r084) | Base sin capa | [CSS:554](../../../src/index.css#L554) |
| [`.section-heading--light p`](../CSS_REFERENCE.md#r085) | Base sin capa | [CSS:558](../../../src/index.css#L558) |
| [`.section-heading h2`](../CSS_REFERENCE.md#r543) | @media (max-width: 540px) | [CSS:3064](../../../src/index.css#L3064) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Bloques heading/subheading/richtext y section-header nativos.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
