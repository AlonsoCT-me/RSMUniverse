# Icon

**Categoría:** Global. **Fuente:** [src/App.tsx:434–516](../../../src/App.tsx#L434). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  name,
  size = 20,
}: {
  name:
    | "menu"
    | "close"
    | "search"
    | "bag"
    | "bag-plus"
    | "user"
    | "arrow"
    | "minus"
    | "plus";
  size?: number;
}
```

**Consumidores directos:** Header, TextLink, ProductCard, Collection, Quantity, Accordion, ProductGallery, TerritoryCard, CarePage, Newsletter, CartDrawer. **Alcance:** Todas.

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** SVG decorativo aria-hidden; 20 px por defecto; menu/close/search/bag/bag-plus/user/arrow/minus/plus. Sin estado.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

Sin selector propio; tamaño/estilo del consumidor y reglas globales.

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Reutilizar iconos del tema; bolsa + del prototipo requiere comprobar glifo equivalente.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
