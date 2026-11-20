# Header

**Categoría:** Navegación. **Fuente:** [src/App.tsx:555–667](../../../src/App.tsx#L555). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  page,
  navigate,
  cartCount,
  openCart,
}: {
  page: Page;
  navigate: (page: Page) => void;
  cartCount: number;
  openCart: () => void;
}
```

**Consumidores directos:** App. **Alcance:** Todas.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** menuOpen; overlay en Home/Story/Special/Care, dark en Special/Nocturna; go cierra menú. Buscar/cuenta sin handler; Inicio duplicado en menú móvil. Logo inline 120 px prevalece sobre CSS 80/68.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.site-header`](../CSS_REFERENCE.md#r024) | Base sin capa | [CSS:149](../../../src/index.css#L149) |
| [`.site-header--overlay`](../CSS_REFERENCE.md#r025) | Base sin capa | [CSS:161](../../../src/index.css#L161) |
| [`.site-header--dark`](../CSS_REFERENCE.md#r026) | Base sin capa | [CSS:168](../../../src/index.css#L168) |
| [`.site-header--overlay.site-header--dark`](../CSS_REFERENCE.md#r027) | Base sin capa | [CSS:173](../../../src/index.css#L173) |
| [`.logo-button`](../CSS_REFERENCE.md#r028) | Base sin capa | [CSS:176](../../../src/index.css#L176) |
| [`.brand-logo`](../CSS_REFERENCE.md#r029) | Base sin capa | [CSS:179](../../../src/index.css#L179) |
| [`.desktop-nav`](../CSS_REFERENCE.md#r030) | Base sin capa | [CSS:183](../../../src/index.css#L183) |
| [`.desktop-nav button`](../CSS_REFERENCE.md#r031) | Base sin capa | [CSS:188](../../../src/index.css#L188) |
| [`.desktop-nav button::after`](../CSS_REFERENCE.md#r032) | Base sin capa | [CSS:195](../../../src/index.css#L195) |
| [`.desktop-nav button:hover::after, .desktop-nav button.is-active::after`](../CSS_REFERENCE.md#r033) | Base sin capa | [CSS:205](../../../src/index.css#L205) |
| [`.header-actions`](../CSS_REFERENCE.md#r034) | Base sin capa | [CSS:209](../../../src/index.css#L209) |
| [`.header-actions button`](../CSS_REFERENCE.md#r035) | Base sin capa | [CSS:215](../../../src/index.css#L215) |
| [`.bag-button span`](../CSS_REFERENCE.md#r036) | Base sin capa | [CSS:218](../../../src/index.css#L218) |
| [`.mobile-menu-button`](../CSS_REFERENCE.md#r037) | Base sin capa | [CSS:231](../../../src/index.css#L231) |
| [`.mobile-nav`](../CSS_REFERENCE.md#r038) | Base sin capa | [CSS:234](../../../src/index.css#L234) |
| [`.mobile-nav.is-open`](../CSS_REFERENCE.md#r039) | Base sin capa | [CSS:248](../../../src/index.css#L248) |
| [`.mobile-nav__top`](../CSS_REFERENCE.md#r040) | Base sin capa | [CSS:253](../../../src/index.css#L253) |
| [`.mobile-nav__top img`](../CSS_REFERENCE.md#r041) | Base sin capa | [CSS:258](../../../src/index.css#L258) |
| [`.mobile-nav nav`](../CSS_REFERENCE.md#r042) | Base sin capa | [CSS:261](../../../src/index.css#L261) |
| [`.mobile-nav nav button`](../CSS_REFERENCE.md#r043) | Base sin capa | [CSS:266](../../../src/index.css#L266) |
| [`.mobile-nav > p`](../CSS_REFERENCE.md#r044) | Base sin capa | [CSS:272](../../../src/index.css#L272) |
| [`.product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r160) | Base sin capa | [CSS:1006](../../../src/index.css#L1006) |
| [`.product-gallery--dark .product-gallery__thumb.is-active`](../CSS_REFERENCE.md#r161) | Base sin capa | [CSS:1010](../../../src/index.css#L1010) |
| [`.care-story__nav button:hover, .care-story__nav button.is-active`](../CSS_REFERENCE.md#r400) | Base sin capa | [CSS:2398](../../../src/index.css#L2398) |
| [`.care-step.is-active`](../CSS_REFERENCE.md#r402) | Base sin capa | [CSS:2415](../../../src/index.css#L2415) |
| [`.cart-layer.is-open`](../CSS_REFERENCE.md#r449) | Base sin capa | [CSS:2671](../../../src/index.css#L2671) |
| [`.cart-layer.is-open .cart-layer__backdrop`](../CSS_REFERENCE.md#r451) | Base sin capa | [CSS:2683](../../../src/index.css#L2683) |
| [`.cart-layer.is-open .cart-drawer`](../CSS_REFERENCE.md#r453) | Base sin capa | [CSS:2698](../../../src/index.css#L2698) |
| [`.site-header`](../CSS_REFERENCE.md#r468) | @media (max-width: 900px) | [CSS:2773](../../../src/index.css#L2773) |
| [`.desktop-nav, .desktop-only`](../CSS_REFERENCE.md#r469) | @media (max-width: 900px) | [CSS:2778](../../../src/index.css#L2778) |
| [`.header-actions`](../CSS_REFERENCE.md#r470) | @media (max-width: 900px) | [CSS:2782](../../../src/index.css#L2782) |
| [`.mobile-menu-button`](../CSS_REFERENCE.md#r471) | @media (max-width: 900px) | [CSS:2785](../../../src/index.css#L2785) |
| [`.brand-logo`](../CSS_REFERENCE.md#r472) | @media (max-width: 900px) | [CSS:2788](../../../src/index.css#L2788) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:603](../../../src/App.tsx#L603) | `{{ width: 120, height: "fit-content" }}` |
| [App:597](../../../src/App.tsx#L597) | `src={               overlay \|\| dark                 ? assetUrl("/assets/rsm-logo-white.png")                 : assetUrl("/assets/rsm-logo-dark.png")             }` |
| [App:602](../../../src/App.tsx#L602) | `alt="RSM"` |
| [App:646](../../../src/App.tsx#L646) | `src={assetUrl("/assets/rsm-logo-white.png")}` |
| [App:646](../../../src/App.tsx#L646) | `alt="RSM"` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** sections/header.liquid existente; conservar capa rsm-header local y conciliar diseño; no reconstruir header.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
