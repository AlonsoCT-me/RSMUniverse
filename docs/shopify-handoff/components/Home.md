# Home

**Categoría:** Página. **Fuente:** [src/App.tsx:785–964](../../../src/App.tsx#L785). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{
  navigate,
  onAdd,
}: {
  navigate: NavigateFn;
  onAdd: AddToCartFn;
}
```

**Consumidores directos:** App. **Alcance:** home.

**Dependencias hijas:** [TextLink](TextLink.md), [SectionHeading](SectionHeading.md), [ProductCard](ProductCard.md)

**Estados, variantes e interacciones:** Cinco secciones visibles; split anterior oculto. Hero index decorativo, no carrusel. CTA Historia conduce actualmente a collection.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.button--outline-light`](../CSS_REFERENCE.md#r049) | Base sin capa | [CSS:308](../../../src/index.css#L308) |
| [`.button--outline-light:hover`](../CSS_REFERENCE.md#r050) | Base sin capa | [CSS:313](../../../src/index.css#L313) |
| [`.home-hero`](../CSS_REFERENCE.md#r055) | Base sin capa | [CSS:340](../../../src/index.css#L340) |
| [`.home-hero > .image-placeholder`](../CSS_REFERENCE.md#r056) | Base sin capa | [CSS:352](../../../src/index.css#L352) |
| [`.home-hero__shade`](../CSS_REFERENCE.md#r057) | Base sin capa | [CSS:356](../../../src/index.css#L356) |
| [`.home-hero__content`](../CSS_REFERENCE.md#r058) | Base sin capa | [CSS:366](../../../src/index.css#L366) |
| [`.home-hero h1, .special-hero h1, .story-hero h1, .collection-hero h1`](../CSS_REFERENCE.md#r059) | Base sin capa | [CSS:372](../../../src/index.css#L372) |
| [`.home-hero h1 em, .special-hero h1 em, .collection-hero h1 em`](../CSS_REFERENCE.md#r060) | Base sin capa | [CSS:384](../../../src/index.css#L384) |
| [`.hero-index`](../CSS_REFERENCE.md#r061) | Base sin capa | [CSS:390](../../../src/index.css#L390) |
| [`.borderless__image .image-placeholder, .borderless__image .home-lifestyle-image`](../CSS_REFERENCE.md#r064) | Base sin capa | [CSS:407](../../../src/index.css#L407) |
| [`.borderless:hover .image-placeholder, .borderless:hover .home-lifestyle-image`](../CSS_REFERENCE.md#r065) | Base sin capa | [CSS:415](../../../src/index.css#L415) |
| [`.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`](../CSS_REFERENCE.md#r067) | Base sin capa | [CSS:426](../../../src/index.css#L426) |
| [`.borderless p, .special-split p, .pdp-story p, .nocturna-story p`](../CSS_REFERENCE.md#r068) | Base sin capa | [CSS:439](../../../src/index.css#L439) |
| [`.borderless-fullwidth`](../CSS_REFERENCE.md#r069) | Base sin capa | [CSS:449](../../../src/index.css#L449) |
| [`.borderless-fullwidth__shade`](../CSS_REFERENCE.md#r070) | Base sin capa | [CSS:461](../../../src/index.css#L461) |
| [`.borderless-fullwidth__content`](../CSS_REFERENCE.md#r071) | Base sin capa | [CSS:470](../../../src/index.css#L470) |
| [`.borderless-fullwidth h2`](../CSS_REFERENCE.md#r072) | Base sin capa | [CSS:479](../../../src/index.css#L479) |
| [`.borderless-fullwidth p`](../CSS_REFERENCE.md#r073) | Base sin capa | [CSS:488](../../../src/index.css#L488) |
| [`.featured-collection`](../CSS_REFERENCE.md#r074) | Base sin capa | [CSS:495](../../../src/index.css#L495) |
| [`.featured-collection__banner`](../CSS_REFERENCE.md#r075) | Base sin capa | [CSS:498](../../../src/index.css#L498) |
| [`.featured-collection__body`](../CSS_REFERENCE.md#r076) | Base sin capa | [CSS:513](../../../src/index.css#L513) |
| [`.featured-collection__accent`](../CSS_REFERENCE.md#r077) | Base sin capa | [CSS:517](../../../src/index.css#L517) |
| [`.featured-collection__head, .related__head`](../CSS_REFERENCE.md#r078) | Base sin capa | [CSS:520](../../../src/index.css#L520) |
| [`.featured-collection__banner .featured-collection__head`](../CSS_REFERENCE.md#r079) | Base sin capa | [CSS:527](../../../src/index.css#L527) |
| [`.featured-collection .product-card`](../CSS_REFERENCE.md#r080) | Base sin capa | [CSS:532](../../../src/index.css#L532) |
| [`.product-grid`](../CSS_REFERENCE.md#r086) | Base sin capa | [CSS:561](../../../src/index.css#L561) |
| [`.special-split`](../CSS_REFERENCE.md#r113) | Base sin capa | [CSS:722](../../../src/index.css#L722) |
| [`.special-split__image`](../CSS_REFERENCE.md#r114) | Base sin capa | [CSS:729](../../../src/index.css#L729) |
| [`.special-split__image .image-placeholder`](../CSS_REFERENCE.md#r115) | Base sin capa | [CSS:732](../../../src/index.css#L732) |
| [`.special-split__image .home-special-image`](../CSS_REFERENCE.md#r116) | Base sin capa | [CSS:736](../../../src/index.css#L736) |
| [`.special-split__copy`](../CSS_REFERENCE.md#r117) | Base sin capa | [CSS:742](../../../src/index.css#L742) |
| [`.special-split p`](../CSS_REFERENCE.md#r118) | Base sin capa | [CSS:749](../../../src/index.css#L749) |
| [`.history-banner`](../CSS_REFERENCE.md#r119) | Base sin capa | [CSS:752](../../../src/index.css#L752) |
| [`.history-banner > .image-placeholder`](../CSS_REFERENCE.md#r120) | Base sin capa | [CSS:763](../../../src/index.css#L763) |
| [`.history-banner__shade`](../CSS_REFERENCE.md#r121) | Base sin capa | [CSS:769](../../../src/index.css#L769) |
| [`.history-banner__content`](../CSS_REFERENCE.md#r122) | Base sin capa | [CSS:778](../../../src/index.css#L778) |
| [`.product-grid--featured`](../CSS_REFERENCE.md#r192) | Base sin capa | [CSS:1193](../../../src/index.css#L1193) |
| [`.related .product-grid--featured`](../CSS_REFERENCE.md#r193) | Base sin capa | [CSS:1196](../../../src/index.css#L1196) |
| [`.home-hero`](../CSS_REFERENCE.md#r473) | @media (max-width: 900px) | [CSS:2791](../../../src/index.css#L2791) |
| [`.home-hero__shade`](../CSS_REFERENCE.md#r474) | @media (max-width: 900px) | [CSS:2796](../../../src/index.css#L2796) |
| [`.home-hero__content`](../CSS_REFERENCE.md#r475) | @media (max-width: 900px) | [CSS:2803](../../../src/index.css#L2803) |
| [`.home-hero h1`](../CSS_REFERENCE.md#r476) | @media (max-width: 900px) | [CSS:2808](../../../src/index.css#L2808) |
| [`.hero-index`](../CSS_REFERENCE.md#r477) | @media (max-width: 900px) | [CSS:2812](../../../src/index.css#L2812) |
| [`.borderless, .special-split, .pdp-story, .special-cta, .nocturna-story`](../CSS_REFERENCE.md#r478) | @media (max-width: 900px) | [CSS:2815](../../../src/index.css#L2815) |
| [`.borderless__image, .special-split__image`](../CSS_REFERENCE.md#r479) | @media (max-width: 900px) | [CSS:2822](../../../src/index.css#L2822) |
| [`.borderless__copy, .special-split__copy, .pdp-story div, .special-cta > div, .nocturna-story > div`](../CSS_REFERENCE.md#r480) | @media (max-width: 900px) | [CSS:2826](../../../src/index.css#L2826) |
| [`.borderless-fullwidth`](../CSS_REFERENCE.md#r481) | @media (max-width: 900px) | [CSS:2833](../../../src/index.css#L2833) |
| [`.borderless-fullwidth__shade`](../CSS_REFERENCE.md#r482) | @media (max-width: 900px) | [CSS:2837](../../../src/index.css#L2837) |
| [`.borderless-fullwidth__content`](../CSS_REFERENCE.md#r483) | @media (max-width: 900px) | [CSS:2844](../../../src/index.css#L2844) |
| [`.featured-collection__banner`](../CSS_REFERENCE.md#r484) | @media (max-width: 900px) | [CSS:2848](../../../src/index.css#L2848) |
| [`.featured-collection__body`](../CSS_REFERENCE.md#r485) | @media (max-width: 900px) | [CSS:2852](../../../src/index.css#L2852) |
| [`.featured-collection__head, .related__head`](../CSS_REFERENCE.md#r486) | @media (max-width: 900px) | [CSS:2855](../../../src/index.css#L2855) |
| [`.product-grid, .product-grid--featured`](../CSS_REFERENCE.md#r487) | @media (max-width: 900px) | [CSS:2860](../../../src/index.css#L2860) |
| [`.special-split__image`](../CSS_REFERENCE.md#r488) | @media (max-width: 900px) | [CSS:2865](../../../src/index.css#L2865) |
| [`.special-split__image .home-special-image`](../CSS_REFERENCE.md#r489) | @media (max-width: 900px) | [CSS:2868](../../../src/index.css#L2868) |
| [`.history-banner`](../CSS_REFERENCE.md#r490) | @media (max-width: 900px) | [CSS:2871](../../../src/index.css#L2871) |
| [`.history-banner__content`](../CSS_REFERENCE.md#r491) | @media (max-width: 900px) | [CSS:2875](../../../src/index.css#L2875) |
| [`.home-hero`](../CSS_REFERENCE.md#r532) | @media (max-width: 540px) | [CSS:3020](../../../src/index.css#L3020) |
| [`.home-hero h1`](../CSS_REFERENCE.md#r533) | @media (max-width: 540px) | [CSS:3024](../../../src/index.css#L3024) |
| [`.borderless__image, .special-split__image`](../CSS_REFERENCE.md#r535) | @media (max-width: 540px) | [CSS:3032](../../../src/index.css#L3032) |
| [`.borderless-fullwidth`](../CSS_REFERENCE.md#r536) | @media (max-width: 540px) | [CSS:3036](../../../src/index.css#L3036) |
| [`.borderless-fullwidth h2`](../CSS_REFERENCE.md#r537) | @media (max-width: 540px) | [CSS:3040](../../../src/index.css#L3040) |
| [`.borderless-fullwidth__content`](../CSS_REFERENCE.md#r538) | @media (max-width: 540px) | [CSS:3043](../../../src/index.css#L3043) |
| [`.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`](../CSS_REFERENCE.md#r539) | @media (max-width: 540px) | [CSS:3046](../../../src/index.css#L3046) |
| [`.featured-collection__head, .related__head`](../CSS_REFERENCE.md#r540) | @media (max-width: 540px) | [CSS:3054](../../../src/index.css#L3054) |
| [`.featured-collection__banner .featured-collection__head`](../CSS_REFERENCE.md#r541) | @media (max-width: 540px) | [CSS:3058](../../../src/index.css#L3058) |
| [`.featured-collection .product-card`](../CSS_REFERENCE.md#r542) | @media (max-width: 540px) | [CSS:3061](../../../src/index.css#L3061) |
| [`.history-banner`](../CSS_REFERENCE.md#r549) | @media (max-width: 540px) | [CSS:3085](../../../src/index.css#L3085) |
| [`.history-banner__content`](../CSS_REFERENCE.md#r550) | @media (max-width: 540px) | [CSS:3089](../../../src/index.css#L3089) |
| [`.related .product-grid--featured`](../CSS_REFERENCE.md#r567) | @media (max-width: 540px) | [CSS:3148](../../../src/index.css#L3148) |

## Overrides inline y assets

| Línea | Expresión actual |
|---|---|
| [App:798](../../../src/App.tsx#L798) | `{{ width: "800px" }}` |
| [App:814](../../../src/App.tsx#L814) | `{{ width: "780px" }}` |
| [App:819](../../../src/App.tsx#L819) | `{{ width: "800px" }}` |
| [App:839](../../../src/App.tsx#L839) | `{{           backgroundImage: `url("${assetUrl("/assets/home-sin-fronteras-2.jpeg")}")`,         }}` |
| [App:845](../../../src/App.tsx#L845) | `{{ fontSize: "60px" }}` |
| [App:867](../../../src/App.tsx#L867) | `{{ backgroundColor: "" }}` |
| [App:919](../../../src/App.tsx#L919) | `{{ width: "100%", fontSize: "50px" }}` |
| [App:926](../../../src/App.tsx#L926) | `{{ width: "123px", minWidth: "240px" }}` |
| [App:939](../../../src/App.tsx#L939) | `{{ paddingBottom: 100 }}` |
| [App:941](../../../src/App.tsx#L941) | `{{               maxWidth: 460,               margin: "18px 0 30px",               fontSize: "clamp(39px, 4vw, 60px)",               lineHeight: 0.9,               letterSpacing: "-0.035em",             }}` |
| [App:817](../../../src/App.tsx#L817) | `src={assetUrl("/assets/home-sin-fronteras-2.jpeg")}` |
| [App:818](../../../src/App.tsx#L818) | `alt="Hombre con gorra RSM contemplando Monterrey desde la montaña"` |
| [App:913](../../../src/App.tsx#L913) | `src={assetUrl("/assets/rsm-special-edition-cap.jpeg")}` |
| [App:914](../../../src/App.tsx#L914) | `alt="Detalle del emblema metálico de la edición especial RSM"` |

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** templates/index.json con secciones nativas; ver pages/HOME.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
