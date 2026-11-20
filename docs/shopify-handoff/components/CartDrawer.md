# CartDrawer

**Categoría:** Global. **Fuente:** [src/App.tsx:2621–2689](../../../src/App.tsx#L2621). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  open,
  close,
  items,
}: {
  open: boolean;
  close: () => void;
  items: CartItem[];
}
```

**Consumidores directos:** App. **Alcance:** Todas.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** open controlado por App; items por producto; contador/total calculado; backdrop/cerrar; checkout sin handler; role dialog aria-modal, sin foco atrapado/Escape/retorno.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.mobile-nav.is-open`](../CSS_REFERENCE.md#r039) | Base sin capa | [CSS:248](../../../src/index.css#L248) |
| [`.cart-layer`](../CSS_REFERENCE.md#r448) | Base sin capa | [CSS:2665](../../../src/index.css#L2665) |
| [`.cart-layer.is-open`](../CSS_REFERENCE.md#r449) | Base sin capa | [CSS:2671](../../../src/index.css#L2671) |
| [`.cart-layer__backdrop`](../CSS_REFERENCE.md#r450) | Base sin capa | [CSS:2674](../../../src/index.css#L2674) |
| [`.cart-layer.is-open .cart-layer__backdrop`](../CSS_REFERENCE.md#r451) | Base sin capa | [CSS:2683](../../../src/index.css#L2683) |
| [`.cart-drawer`](../CSS_REFERENCE.md#r452) | Base sin capa | [CSS:2686](../../../src/index.css#L2686) |
| [`.cart-layer.is-open .cart-drawer`](../CSS_REFERENCE.md#r453) | Base sin capa | [CSS:2698](../../../src/index.css#L2698) |
| [`.cart-drawer__head`](../CSS_REFERENCE.md#r454) | Base sin capa | [CSS:2701](../../../src/index.css#L2701) |
| [`.cart-drawer__head h2`](../CSS_REFERENCE.md#r455) | Base sin capa | [CSS:2708](../../../src/index.css#L2708) |
| [`.cart-item`](../CSS_REFERENCE.md#r456) | Base sin capa | [CSS:2713](../../../src/index.css#L2713) |
| [`.cart-item > img`](../CSS_REFERENCE.md#r457) | Base sin capa | [CSS:2720](../../../src/index.css#L2720) |
| [`.cart-item div`](../CSS_REFERENCE.md#r458) | Base sin capa | [CSS:2725](../../../src/index.css#L2725) |
| [`.cart-item b`](../CSS_REFERENCE.md#r459) | Base sin capa | [CSS:2732](../../../src/index.css#L2732) |
| [`.cart-item span`](../CSS_REFERENCE.md#r460) | Base sin capa | [CSS:2737](../../../src/index.css#L2737) |
| [`.cart-drawer__total`](../CSS_REFERENCE.md#r461) | Base sin capa | [CSS:2742](../../../src/index.css#L2742) |
| [`.cart-drawer > .button`](../CSS_REFERENCE.md#r462) | Base sin capa | [CSS:2747](../../../src/index.css#L2747) |
| [`.cart-drawer > small`](../CSS_REFERENCE.md#r463) | Base sin capa | [CSS:2750](../../../src/index.css#L2750) |
| [`.cart-empty`](../CSS_REFERENCE.md#r464) | Base sin capa | [CSS:2756](../../../src/index.css#L2756) |
| [`.cart-empty p`](../CSS_REFERENCE.md#r465) | Base sin capa | [CSS:2760](../../../src/index.css#L2760) |
| [`.cart-empty small`](../CSS_REFERENCE.md#r466) | Base sin capa | [CSS:2765](../../../src/index.css#L2765) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:2653](../../../src/App.tsx#L2653) | `src={product.images[0].src}` |
| [App:2653](../../../src/App.tsx#L2653) | `alt={product.images[0].alt}` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** cart-drawer y line-item nativos; preservar lifecycle y manejo de errores, sin carrito paralelo.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
