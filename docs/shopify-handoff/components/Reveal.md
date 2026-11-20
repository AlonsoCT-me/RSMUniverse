# Reveal

**Categoría:** Editorial. **Fuente:** [src/App.tsx:1409–1443](../../../src/App.tsx#L1409). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}
```

**Consumidores directos:** SpecialEditionHero, EditorialIntro, SpecialEditionDetails, EditorialImageText, SpecialEditionProductCTA, SpecialLanding. **Alcance:** Special Landing (incluidos módulos ocultos).

**Dependencias hijas:** Ningún componente React propio.

**Estados, variantes e interacciones:** IntersectionObserver threshold .18; revela una sola vez, disconnect al revelar y unmount. Sin fallback si API falta; reduced-motion CSS acorta transiciones pero no elimina dependencia de observer.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.se-reveal`](../CSS_REFERENCE.md#r222) | Base sin capa | [CSS:1350](../../../src/index.css#L1350) |
| [`.se-reveal.is-visible`](../CSS_REFERENCE.md#r223) | Base sin capa | [CSS:1357](../../../src/index.css#L1357) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** reveal_on_scroll nativo donde exista; no duplicar observer comercial.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
