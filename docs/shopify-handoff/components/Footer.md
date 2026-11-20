# Footer

**Categoría:** Global. **Fuente:** [src/App.tsx:2574–2619](../../../src/App.tsx#L2574). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ navigate }: { navigate: (page: Page) => void }
```

**Consumidores directos:** App. **Alcance:** Todas.

**Dependencias hijas:** [Newsletter](Newsletter.md)

**Estados, variantes e interacciones:** Incluye Newsletter ANTES de footer; enlaces reales a cuatro páginas y dos internas; legales/contacto sin handler.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`footer`](../CSS_REFERENCE.md#r439) | Base sin capa | [CSS:2606](../../../src/index.css#L2606) |
| [`footer`](../CSS_REFERENCE.md#r529) | @media (max-width: 900px) | [CSS:3007](../../../src/index.css#L3007) |
| [`footer`](../CSS_REFERENCE.md#r595) | @media (max-width: 540px) | [CSS:3248](../../../src/index.css#L3248) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:2580](../../../src/App.tsx#L2580) | `src={assetUrl("/assets/rsm-logo-white.png")}` |
| [App:2580](../../../src/App.tsx#L2580) | `alt="RSM"` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** footer-group + newsletter/footer; menús/policies reales, omitir herramientas internas del storefront.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
