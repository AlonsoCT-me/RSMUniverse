# CarePage

**Categoría:** Página. **Fuente:** [src/App.tsx:2258–2467](../../../src/App.tsx#L2258). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
{ navigate }: { navigate: (page: Page) => void }
```

**Consumidores directos:** App. **Alcance:** care.

**Dependencias hijas:** [ImagePlaceholder](ImagePlaceholder.md), [Icon](Icon.md), [CareScrollStory](CareScrollStory.md), [TextLink](TextLink.md), [CareMaterialAccordion](CareMaterialAccordion.md), [Accordion](Accordion.md)

**Estados, variantes e interacciones:** Hero/intro/marquee/everyday/steps/storage/materiales/FAQ/CTA en orden; consejos genéricos condicionados a indicaciones del fabricante.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |
| [`.care-page`](../CSS_REFERENCE.md#r356) | Base sin capa | [CSS:2131](../../../src/index.css#L2131) |
| [`.care-hero`](../CSS_REFERENCE.md#r357) | Base sin capa | [CSS:2135](../../../src/index.css#L2135) |
| [`.care-hero > .image-placeholder`](../CSS_REFERENCE.md#r358) | Base sin capa | [CSS:2143](../../../src/index.css#L2143) |
| [`.care-hero__overlay`](../CSS_REFERENCE.md#r359) | Base sin capa | [CSS:2147](../../../src/index.css#L2147) |
| [`.care-hero__content`](../CSS_REFERENCE.md#r360) | Base sin capa | [CSS:2156](../../../src/index.css#L2156) |
| [`.care-hero__content > span`](../CSS_REFERENCE.md#r361) | Base sin capa | [CSS:2162](../../../src/index.css#L2162) |
| [`.care-hero h1`](../CSS_REFERENCE.md#r362) | Base sin capa | [CSS:2171](../../../src/index.css#L2171) |
| [`.care-hero__continue`](../CSS_REFERENCE.md#r363) | Base sin capa | [CSS:2179](../../../src/index.css#L2179) |
| [`.care-hero__continue svg`](../CSS_REFERENCE.md#r364) | Base sin capa | [CSS:2192](../../../src/index.css#L2192) |
| [`.care-intro`](../CSS_REFERENCE.md#r365) | Base sin capa | [CSS:2195](../../../src/index.css#L2195) |
| [`.care-intro .shell`](../CSS_REFERENCE.md#r366) | Base sin capa | [CSS:2200](../../../src/index.css#L2200) |
| [`.care-intro h2, .care-everyday h2, .care-storage h2, .care-information h2, .care-faq h2, .care-cta h2, .care-story__heading h2`](../CSS_REFERENCE.md#r367) | Base sin capa | [CSS:2204](../../../src/index.css#L2204) |
| [`.care-intro h2`](../CSS_REFERENCE.md#r368) | Base sin capa | [CSS:2218](../../../src/index.css#L2218) |
| [`.care-intro .shell > p`](../CSS_REFERENCE.md#r369) | Base sin capa | [CSS:2222](../../../src/index.css#L2222) |
| [`.care-intro__marquee`](../CSS_REFERENCE.md#r370) | Base sin capa | [CSS:2227](../../../src/index.css#L2227) |
| [`.care-intro__marquee > div`](../CSS_REFERENCE.md#r371) | Base sin capa | [CSS:2233](../../../src/index.css#L2233) |
| [`.care-intro__marquee span`](../CSS_REFERENCE.md#r372) | Base sin capa | [CSS:2238](../../../src/index.css#L2238) |
| [`.care-everyday`](../CSS_REFERENCE.md#r374) | Base sin capa | [CSS:2252](../../../src/index.css#L2252) |
| [`.care-everyday__inner, .care-storage__inner`](../CSS_REFERENCE.md#r375) | Base sin capa | [CSS:2255](../../../src/index.css#L2255) |
| [`.care-everyday__copy, .care-storage__copy`](../CSS_REFERENCE.md#r376) | Base sin capa | [CSS:2263](../../../src/index.css#L2263) |
| [`.care-everyday h2, .care-storage h2`](../CSS_REFERENCE.md#r377) | Base sin capa | [CSS:2267](../../../src/index.css#L2267) |
| [`.care-everyday__copy > p, .care-storage__copy > p`](../CSS_REFERENCE.md#r378) | Base sin capa | [CSS:2272](../../../src/index.css#L2272) |
| [`.care-everyday ul`](../CSS_REFERENCE.md#r379) | Base sin capa | [CSS:2277](../../../src/index.css#L2277) |
| [`.care-everyday li`](../CSS_REFERENCE.md#r380) | Base sin capa | [CSS:2283](../../../src/index.css#L2283) |
| [`.care-everyday li::before`](../CSS_REFERENCE.md#r381) | Base sin capa | [CSS:2290](../../../src/index.css#L2290) |
| [`.care-everyday__media, .care-storage__media`](../CSS_REFERENCE.md#r382) | Base sin capa | [CSS:2300](../../../src/index.css#L2300) |
| [`.care-storage`](../CSS_REFERENCE.md#r408) | Base sin capa | [CSS:2452](../../../src/index.css#L2452) |
| [`.care-storage__inner`](../CSS_REFERENCE.md#r409) | Base sin capa | [CSS:2455](../../../src/index.css#L2455) |
| [`.care-storage__copy`](../CSS_REFERENCE.md#r410) | Base sin capa | [CSS:2458](../../../src/index.css#L2458) |
| [`.care-storage__copy .text-link`](../CSS_REFERENCE.md#r411) | Base sin capa | [CSS:2461](../../../src/index.css#L2461) |
| [`.care-information`](../CSS_REFERENCE.md#r412) | Base sin capa | [CSS:2464](../../../src/index.css#L2464) |
| [`.care-information__grid`](../CSS_REFERENCE.md#r413) | Base sin capa | [CSS:2468](../../../src/index.css#L2468) |
| [`.care-information__heading`](../CSS_REFERENCE.md#r414) | Base sin capa | [CSS:2473](../../../src/index.css#L2473) |
| [`.care-information h2`](../CSS_REFERENCE.md#r415) | Base sin capa | [CSS:2478](../../../src/index.css#L2478) |
| [`.care-information__heading p`](../CSS_REFERENCE.md#r416) | Base sin capa | [CSS:2482](../../../src/index.css#L2482) |
| [`.care-faq`](../CSS_REFERENCE.md#r419) | Base sin capa | [CSS:2497](../../../src/index.css#L2497) |
| [`.care-faq__inner`](../CSS_REFERENCE.md#r420) | Base sin capa | [CSS:2502](../../../src/index.css#L2502) |
| [`.care-faq h2`](../CSS_REFERENCE.md#r421) | Base sin capa | [CSS:2507](../../../src/index.css#L2507) |
| [`.care-faq .accordion > button`](../CSS_REFERENCE.md#r422) | Base sin capa | [CSS:2511](../../../src/index.css#L2511) |
| [`.care-cta`](../CSS_REFERENCE.md#r423) | Base sin capa | [CSS:2518](../../../src/index.css#L2518) |
| [`.care-cta h2`](../CSS_REFERENCE.md#r424) | Base sin capa | [CSS:2525](../../../src/index.css#L2525) |
| [`.care-cta p`](../CSS_REFERENCE.md#r425) | Base sin capa | [CSS:2529](../../../src/index.css#L2529) |
| [`.care-hero__content`](../CSS_REFERENCE.md#r604) | @media (max-width: 900px) | [CSS:3284](../../../src/index.css#L3284) |
| [`.care-everyday__inner, .care-storage__inner`](../CSS_REFERENCE.md#r605) | @media (max-width: 900px) | [CSS:3288](../../../src/index.css#L3288) |
| [`.care-everyday__media, .care-storage__media`](../CSS_REFERENCE.md#r606) | @media (max-width: 900px) | [CSS:3293](../../../src/index.css#L3293) |
| [`.care-information__grid, .care-faq__inner`](../CSS_REFERENCE.md#r612) | @media (max-width: 900px) | [CSS:3317](../../../src/index.css#L3317) |
| [`.care-information__heading`](../CSS_REFERENCE.md#r613) | @media (max-width: 900px) | [CSS:3322](../../../src/index.css#L3322) |
| [`.care-hero`](../CSS_REFERENCE.md#r636) | @media (max-width: 540px) | [CSS:3409](../../../src/index.css#L3409) |
| [`.care-hero__content`](../CSS_REFERENCE.md#r637) | @media (max-width: 540px) | [CSS:3412](../../../src/index.css#L3412) |
| [`.care-hero h1`](../CSS_REFERENCE.md#r638) | @media (max-width: 540px) | [CSS:3415](../../../src/index.css#L3415) |
| [`.care-hero__continue`](../CSS_REFERENCE.md#r639) | @media (max-width: 540px) | [CSS:3418](../../../src/index.css#L3418) |
| [`.care-intro h2, .care-everyday h2, .care-storage h2, .care-information h2, .care-faq h2, .care-cta h2, .care-story__heading h2`](../CSS_REFERENCE.md#r640) | @media (max-width: 540px) | [CSS:3422](../../../src/index.css#L3422) |
| [`.care-intro__marquee`](../CSS_REFERENCE.md#r641) | @media (max-width: 540px) | [CSS:3431](../../../src/index.css#L3431) |
| [`.care-everyday__inner, .care-storage__inner`](../CSS_REFERENCE.md#r642) | @media (max-width: 540px) | [CSS:3434](../../../src/index.css#L3434) |
| [`.care-everyday__media, .care-storage__media`](../CSS_REFERENCE.md#r643) | @media (max-width: 540px) | [CSS:3438](../../../src/index.css#L3438) |
| [`.care-information, .care-faq`](../CSS_REFERENCE.md#r658) | @media (max-width: 540px) | [CSS:3491](../../../src/index.css#L3491) |
| [`.care-material-accordion .accordion > button, .care-faq .accordion > button`](../CSS_REFERENCE.md#r659) | @media (max-width: 540px) | [CSS:3495](../../../src/index.css#L3495) |
| [`.care-intro__marquee > div`](../CSS_REFERENCE.md#r680) | @media (prefers-reduced-motion: reduce) | [CSS:3589](../../../src/index.css#L3589) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** page.cuidado-de-gorras.json propuesta con nativos y única sección narrativa custom.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
