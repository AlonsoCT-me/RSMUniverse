# Design System extraído del prototipo

Los valores siguientes describen el código, no una normalización propuesta. Fuente base [src/index.css](../../src/index.css); reglas exactas, incluidos valores repetidos y sobrescrituras, en [CSS_REFERENCE](CSS_REFERENCE.md). Estilos inline de cada instancia se documentan en su [ficha](COMPONENTS.md) y tienen prioridad sobre declaraciones normales del CSS.

## Identidad visual y herencia

| Token :root | Valor exacto | Alcance/uso |
|---|---|---|
| --estirpe | `#64242e` | Marca; newsletter, hover CTA, indicadores |
| --sierra | `#574d35` | Marca; fallback/editorial |
| --caliza | `#f2e8da` | Marca; superficies claras |
| --arcilla | `#944a20` | Marca; eyebrow/foco/acento |
| --horizonte | `#4b5b6e` | Marca; placeholders/editorial |
| --dark | `#191716` | Neutro de interfaz, texto y superficies oscuras |
| --paper | `#f7f2eb` | Neutro de interfaz, fondo body |
| --white | `#fff` | Blanco |
| --line | `rgba(25, 23, 22, 0.16)` | Borde/superficie clara |
| --serif | `"Cormorant Garamond", Georgia, serif` | Display/editorial |
| --sans | `"Figtree", Arial, sans-serif` | Body/comercial |


Fuente de todos estos tokens: [CSS:4](../../src/index.css#L4), alcance documento. Los cinco tonos de marca coinciden con la referencia local de Shopify; los neutros y sus asignaciones son implementación, no nuevos colores atribuidos al brandbook.

`body`: paper/dark, Figtree, 16px y antialiasing. Dentro de `@layer base`, controles heredan fuente de Tailwind Preflight; títulos h1–h6 heredan tamaño/peso hasta sus selectores particulares. Preflight importado fija html line-height 1.5, box-sizing border-box y elimina márgenes/bordes iniciales. No hay regla global que convierta todos los H1–H6 a Cormorant. En particular, H4–H6 no tienen escala propia declarada en el CSS del prototipo. Varias reglas serif no fijan font-weight y heredan 400; Google Fonts solo carga Cormorant 600, por lo que la fuente disponible puede resolver a ese peso. No declarar 600 como regla explícita donde no exista.

Texto secundario: `.product-card__title small` y breadcrumbs #756d65; `.section-heading p` #665f58; `.story-split__copy p` #5f5750; `.accordion__content` #625b54. Light eyebrow #e9d3bd. Card media light gradient #9d8c7c→#ac9886; dark #10110e→#1d1916. Fondo footer #11100f; intro Special #141311. Son valores funcionales actuales, no reemplazos de paleta.

## Tipografía

Fuentes externas: import Google Fonts en [CSS:1](../../src/index.css#L1), Cormorant Garamond 600 normal/italic, Figtree 400/500/600. Fallbacks Georgia/serif y Arial/sans-serif. No hay @font-face ni archivos locales. El destino debe comprobar font pickers nativos y evitar doble carga.

| Rol / selector | Familia/peso explícito o heredado | Tamaño · line-height · tracking · transform | Fuente canónica |
|---|---|---|---|
| body | sans; 400 heredado | 16px; 1.5 heredado de Preflight; normal | [Base](CSS_REFERENCE.md#r003) |
| .home-hero h1 / .story-hero h1 / .collection-hero h1 (base compartida) | serif / 600 | clamp(62px,7.5vw,112px); .78; -.045em; uppercase | [CSS:372](CSS_REFERENCE.md#r059), [CSS:384](CSS_REFERENCE.md#r060), [CSS:2808](CSS_REFERENCE.md#r476), [CSS:3024](CSS_REFERENCE.md#r533) |
| .collection-hero h1 override | hereda base | clamp(58px,6.5vw,94px); margin 15px 0 24px | [CSS:372](CSS_REFERENCE.md#r059), [CSS:384](CSS_REFERENCE.md#r060), [CSS:822](CSS_REFERENCE.md#r128), [CSS:3096](CSS_REFERENCE.md#r552) |
| .story-hero h1 override | serif / 600 | clamp(48px,4vw,60px); .9; -.035em | [CSS:372](CSS_REFERENCE.md#r059), [CSS:1721](CSS_REFERENCE.md#r286), [CSS:3187](CSS_REFERENCE.md#r578), [CSS:3550](CSS_REFERENCE.md#r670) |
| .section-heading h2 | serif / heredado | clamp(44px,5vw,76px); .88; -.035em; uppercase | [CSS:539](CSS_REFERENCE.md#r082), [CSS:3064](CSS_REFERENCE.md#r543) |
| .product-card__title > span | serif / heredado | clamp(21px,1.65vw,26px); 1.06; uppercase | [CSS:633](CSS_REFERENCE.md#r098), [CSS:3067](CSS_REFERENCE.md#r544) |
| .product-card__title small | sans / heredado | 10px; .08em; uppercase; #756d65 | [CSS:640](CSS_REFERENCE.md#r099), [CSS:3071](CSS_REFERENCE.md#r545) |
| .product-card__price | sans / heredado | 13px; margin 10px 0 12px | [CSS:647](CSS_REFERENCE.md#r100), [CSS:3075](CSS_REFERENCE.md#r546) |
| .product-info h1 | serif / heredado | clamp(34px,3.2vw,50px); .96; -.03em; uppercase | [CSS:1049](CSS_REFERENCE.md#r168), [CSS:3120](CSS_REFERENCE.md#r559) |
| .product-info__price | sans / heredado | 20px; margin 32px 0; bottom padding 25px | [CSS:1058](CSS_REFERENCE.md#r169), [CSS:1067](CSS_REFERENCE.md#r170), [CSS:1643](CSS_REFERENCE.md#r272), [CSS:1652](CSS_REFERENCE.md#r274), [CSS:3138](CSS_REFERENCE.md#r564), [CSS:3141](CSS_REFERENCE.md#r565) |
| .story-split__copy h2 | serif / 600 | clamp(40px,3.35vw,54px); .92; -.035em; uppercase; nowrap >=1120 | [CSS:1772](CSS_REFERENCE.md#r293), [CSS:1781](CSS_REFERENCE.md#r294), [CSS:3205](CSS_REFERENCE.md#r583), [CSS:3567](CSS_REFERENCE.md#r674) |
| .territory-editorial__copy h2 | serif / 600 | clamp(38px,3.1vw,50px); .88; -.035em | [CSS:1864](CSS_REFERENCE.md#r312), [CSS:3580](CSS_REFERENCE.md#r678) |
| .se-hero h1 | serif / 600 | clamp(92px,12vw,120px); .72; -.055em; uppercase | [CSS:1403](CSS_REFERENCE.md#r229), [CSS:3339](CSS_REFERENCE.md#r617) |
| .se-intro h2 | serif / 600 | clamp(58px,7vw,104px); .84; -.04em; uppercase | [CSS:1427](CSS_REFERENCE.md#r233), [CSS:1436](CSS_REFERENCE.md#r234), [CSS:3350](CSS_REFERENCE.md#r620) |
| .se-detail__copy h3 | serif / heredado | clamp(45px,5vw,74px); .87; uppercase | [CSS:1544](CSS_REFERENCE.md#r254), [CSS:3380](CSS_REFERENCE.md#r627) |
| .care-hero h1 | serif / 600 | clamp(64px,8vw,120px); .78; -.045em; uppercase | [CSS:2171](CSS_REFERENCE.md#r362), [CSS:3415](CSS_REFERENCE.md#r638) |
| .care-intro h2 y grupo de H2 Care | serif / 600 | clamp(50px,6.3vw,94px); .86; -.04em; uppercase | [CSS:2204](CSS_REFERENCE.md#r367), [CSS:2218](CSS_REFERENCE.md#r368), [CSS:3422](CSS_REFERENCE.md#r640) |
| .eyebrow | sans / 600 | 11px; .18em; uppercase; Arcilla | [CSS:73](CSS_REFERENCE.md#r012), [CSS:81](CSS_REFERENCE.md#r013), [CSS:1793](CSS_REFERENCE.md#r296) |
| .desktop-nav button | sans / 500 | 11px; .11em; uppercase | [CSS:188](CSS_REFERENCE.md#r031), [CSS:195](CSS_REFERENCE.md#r032), [CSS:205](CSS_REFERENCE.md#r033) |
| .button | sans / 600 | 11px; .13em; uppercase | [CSS:280](CSS_REFERENCE.md#r045), [CSS:295](CSS_REFERENCE.md#r046), [CSS:299](CSS_REFERENCE.md#r047), [CSS:304](CSS_REFERENCE.md#r048), [CSS:308](CSS_REFERENCE.md#r049), [CSS:313](CSS_REFERENCE.md#r050), [CSS:1128](CSS_REFERENCE.md#r180), [CSS:1664](CSS_REFERENCE.md#r276), [CSS:2747](CSS_REFERENCE.md#r462), [CSS:3028](CSS_REFERENCE.md#r534) |
| .text-link | sans / 600 | 11px; .12em; uppercase | [CSS:318](CSS_REFERENCE.md#r051), [CSS:330](CSS_REFERENCE.md#r052), [CSS:333](CSS_REFERENCE.md#r053), [CSS:336](CSS_REFERENCE.md#r054), [CSS:1504](CSS_REFERENCE.md#r246), [CSS:2461](CSS_REFERENCE.md#r411) |


Las fichas de página aportan overrides mobile e inline. Para cualquier selector no resumido, la referencia CSS conserva todas sus propiedades sin inventar una escala uniforme.

## Layout y componentes

| Regla | Valor exacto / alcance | Fuente |
|---|---|---|
| .shell | width min(100% - 64px,1360px); margin-inline auto; <=900 resta40; <=540 resta32 | [CSS:69](CSS_REFERENCE.md#r011), [CSS:2200](CSS_REFERENCE.md#r366), [CSS:2222](CSS_REFERENCE.md#r369), [CSS:2770](CSS_REFERENCE.md#r467), [CSS:3017](CSS_REFERENCE.md#r531) |
| .product-grid | 4×minmax(0,1fr); gap46px 18px; <=900 2 columnas/gap42px 10px | [CSS:561](CSS_REFERENCE.md#r086), [CSS:1193](CSS_REFERENCE.md#r192), [CSS:1196](CSS_REFERENCE.md#r193), [CSS:2860](CSS_REFERENCE.md#r487), [CSS:3148](CSS_REFERENCE.md#r567) |
| .product-card | flex column, min-width0; ancho del grid; sin altura rígida | [CSS:532](CSS_REFERENCE.md#r080), [CSS:566](CSS_REFERENCE.md#r087), [CSS:571](CSS_REFERENCE.md#r088), [CSS:581](CSS_REFERENCE.md#r089), [CSS:584](CSS_REFERENCE.md#r090), [CSS:587](CSS_REFERENCE.md#r091), [CSS:597](CSS_REFERENCE.md#r092), [CSS:602](CSS_REFERENCE.md#r093), [CSS:605](CSS_REFERENCE.md#r094), [CSS:609](CSS_REFERENCE.md#r095), [CSS:612](CSS_REFERENCE.md#r096), [CSS:623](CSS_REFERENCE.md#r097), [CSS:633](CSS_REFERENCE.md#r098), [CSS:640](CSS_REFERENCE.md#r099), [CSS:647](CSS_REFERENCE.md#r100), [CSS:651](CSS_REFERENCE.md#r101), [CSS:657](CSS_REFERENCE.md#r102), [CSS:661](CSS_REFERENCE.md#r103), [CSS:676](CSS_REFERENCE.md#r104), [CSS:681](CSS_REFERENCE.md#r105), [CSS:685](CSS_REFERENCE.md#r106), [CSS:688](CSS_REFERENCE.md#r107), [CSS:693](CSS_REFERENCE.md#r108), [CSS:3061](CSS_REFERENCE.md#r542), [CSS:3067](CSS_REFERENCE.md#r544), [CSS:3071](CSS_REFERENCE.md#r545), [CSS:3075](CSS_REFERENCE.md#r546) |
| .product-card__media | 4/3; width100%; contain/center; overflow hidden | [CSS:571](CSS_REFERENCE.md#r088), [CSS:581](CSS_REFERENCE.md#r089), [CSS:584](CSS_REFERENCE.md#r090), [CSS:587](CSS_REFERENCE.md#r091), [CSS:602](CSS_REFERENCE.md#r093), [CSS:605](CSS_REFERENCE.md#r094), [CSS:609](CSS_REFERENCE.md#r095) |
| .product-card__title | flex1 column; gap5; margin-top16; span overflow-wrap anywhere; small margin-top auto | [CSS:623](CSS_REFERENCE.md#r097), [CSS:633](CSS_REFERENCE.md#r098), [CSS:640](CSS_REFERENCE.md#r099), [CSS:3067](CSS_REFERENCE.md#r544), [CSS:3071](CSS_REFERENCE.md#r545) |
| .product-card__actions | flex align center justify between gap12; swatches wrap; Quick Add 44×44 circular | [CSS:651](CSS_REFERENCE.md#r101), [CSS:657](CSS_REFERENCE.md#r102) |
| .swatches / .swatch-dot | gap8; dot14×14; selected ring 2px paper +3px dark; large28; mobile button12 no cambio del span | [CSS:657](CSS_REFERENCE.md#r102), [CSS:697](CSS_REFERENCE.md#r109), [CSS:701](CSS_REFERENCE.md#r110), [CSS:710](CSS_REFERENCE.md#r111), [CSS:716](CSS_REFERENCE.md#r112), [CSS:1658](CSS_REFERENCE.md#r275), [CSS:3078](CSS_REFERENCE.md#r547), [CSS:3081](CSS_REFERENCE.md#r548) |
| .button | inline-flex; min-height48, padding0 24, border1 dark; mobile46/padding-inline18 | [CSS:280](CSS_REFERENCE.md#r045), [CSS:295](CSS_REFERENCE.md#r046), [CSS:299](CSS_REFERENCE.md#r047), [CSS:304](CSS_REFERENCE.md#r048), [CSS:308](CSS_REFERENCE.md#r049), [CSS:313](CSS_REFERENCE.md#r050), [CSS:1128](CSS_REFERENCE.md#r180), [CSS:1664](CSS_REFERENCE.md#r276), [CSS:2747](CSS_REFERENCE.md#r462), [CSS:3028](CSS_REFERENCE.md#r534) |
| .text-link | gap24, border-bottom1 currentColor, padding-bottom7 | [CSS:318](CSS_REFERENCE.md#r051), [CSS:330](CSS_REFERENCE.md#r052), [CSS:333](CSS_REFERENCE.md#r053), [CSS:336](CSS_REFERENCE.md#r054), [CSS:1504](CSS_REFERENCE.md#r246), [CSS:2461](CSS_REFERENCE.md#r411) |
| .product-card__label | absolute top/left12; padding7px 9px; white/dark; 9px/.1em uppercase | [CSS:612](CSS_REFERENCE.md#r096) |
| .pdp | grid minmax(0,1.5fr) minmax(340px,.72fr); gap48; padding48px 0 120px | [CSS:426](CSS_REFERENCE.md#r067), [CSS:439](CSS_REFERENCE.md#r068), [CSS:905](CSS_REFERENCE.md#r144), [CSS:1170](CSS_REFERENCE.md#r187), [CSS:1177](CSS_REFERENCE.md#r188), [CSS:1181](CSS_REFERENCE.md#r189), [CSS:1187](CSS_REFERENCE.md#r190), [CSS:1634](CSS_REFERENCE.md#r269), [CSS:2815](CSS_REFERENCE.md#r478), [CSS:2826](CSS_REFERENCE.md#r480), [CSS:2892](CSS_REFERENCE.md#r496), [CSS:2971](CSS_REFERENCE.md#r518), [CSS:3046](CSS_REFERENCE.md#r539) |
| .product-info | sticky top24, padding18px 18px 40px; <=900 static 45px 22px 80px | [CSS:1019](CSS_REFERENCE.md#r163), [CSS:1049](CSS_REFERENCE.md#r168), [CSS:1058](CSS_REFERENCE.md#r169), [CSS:1067](CSS_REFERENCE.md#r170), [CSS:1640](CSS_REFERENCE.md#r271), [CSS:1643](CSS_REFERENCE.md#r272), [CSS:1649](CSS_REFERENCE.md#r273), [CSS:1652](CSS_REFERENCE.md#r274), [CSS:1658](CSS_REFERENCE.md#r275), [CSS:2908](CSS_REFERENCE.md#r500), [CSS:3120](CSS_REFERENCE.md#r559), [CSS:3138](CSS_REFERENCE.md#r564), [CSS:3141](CSS_REFERENCE.md#r565) |
| .story-split | minmax(480px,52fr) minmax(0,48fr); min-height620; copy/media | [CSS:1729](CSS_REFERENCE.md#r287), [CSS:1751](CSS_REFERENCE.md#r290), [CSS:1758](CSS_REFERENCE.md#r291), [CSS:1763](CSS_REFERENCE.md#r292), [CSS:1772](CSS_REFERENCE.md#r293), [CSS:1781](CSS_REFERENCE.md#r294), [CSS:1793](CSS_REFERENCE.md#r296), [CSS:1797](CSS_REFERENCE.md#r297), [CSS:1801](CSS_REFERENCE.md#r298), [CSS:1807](CSS_REFERENCE.md#r299), [CSS:1812](CSS_REFERENCE.md#r300), [CSS:1817](CSS_REFERENCE.md#r301), [CSS:1820](CSS_REFERENCE.md#r302), [CSS:2974](CSS_REFERENCE.md#r519), [CSS:3191](CSS_REFERENCE.md#r579), [CSS:3196](CSS_REFERENCE.md#r580), [CSS:3199](CSS_REFERENCE.md#r581), [CSS:3202](CSS_REFERENCE.md#r582), [CSS:3205](CSS_REFERENCE.md#r583), [CSS:3504](CSS_REFERENCE.md#r660), [CSS:3509](CSS_REFERENCE.md#r661), [CSS:3512](CSS_REFERENCE.md#r662), [CSS:3515](CSS_REFERENCE.md#r663), [CSS:3519](CSS_REFERENCE.md#r664), [CSS:3560](CSS_REFERENCE.md#r672), [CSS:3564](CSS_REFERENCE.md#r673), [CSS:3567](CSS_REFERENCE.md#r674) |
| .territory-editorial | 40fr 30fr 30fr; gap0; min-height clamp(380px,29.5vw,470px) | [CSS:1729](CSS_REFERENCE.md#r287), [CSS:1823](CSS_REFERENCE.md#r303), [CSS:1830](CSS_REFERENCE.md#r304), [CSS:1834](CSS_REFERENCE.md#r305), [CSS:1838](CSS_REFERENCE.md#r306), [CSS:1843](CSS_REFERENCE.md#r307), [CSS:1846](CSS_REFERENCE.md#r308), [CSS:1849](CSS_REFERENCE.md#r309), [CSS:1852](CSS_REFERENCE.md#r310), [CSS:1861](CSS_REFERENCE.md#r311), [CSS:1864](CSS_REFERENCE.md#r312), [CSS:1871](CSS_REFERENCE.md#r313), [CSS:1879](CSS_REFERENCE.md#r314), [CSS:1882](CSS_REFERENCE.md#r315), [CSS:3522](CSS_REFERENCE.md#r665), [CSS:3525](CSS_REFERENCE.md#r666), [CSS:3570](CSS_REFERENCE.md#r675), [CSS:3573](CSS_REFERENCE.md#r676), [CSS:3576](CSS_REFERENCE.md#r677), [CSS:3580](CSS_REFERENCE.md#r678), [CSS:3583](CSS_REFERENCE.md#r679) |
| .cart-drawer | fixed layer z80; drawer absolute right; min(100%,460px)×100%; padding30; overflow-y auto | [CSS:2686](CSS_REFERENCE.md#r452), [CSS:2698](CSS_REFERENCE.md#r453), [CSS:2701](CSS_REFERENCE.md#r454), [CSS:2708](CSS_REFERENCE.md#r455), [CSS:2742](CSS_REFERENCE.md#r461), [CSS:2747](CSS_REFERENCE.md#r462), [CSS:2750](CSS_REFERENCE.md#r463) |
| .mobile-nav | fixed inset0 z60; flex column padding25; visible/open CSS | [CSS:234](CSS_REFERENCE.md#r038), [CSS:248](CSS_REFERENCE.md#r039), [CSS:253](CSS_REFERENCE.md#r040), [CSS:258](CSS_REFERENCE.md#r041), [CSS:261](CSS_REFERENCE.md#r042), [CSS:266](CSS_REFERENCE.md#r043), [CSS:272](CSS_REFERENCE.md#r044) |
| .newsletter form | flex width min(100%,630px), bottom border white .55; <=540 grid | [CSS:2583](CSS_REFERENCE.md#r435), [CSS:2597](CSS_REFERENCE.md#r438), [CSS:3236](CSS_REFERENCE.md#r592), [CSS:3244](CSS_REFERENCE.md#r594) |


Fondo card Home rgba(247,242,235,.92), padding10px 10px 16px (mobile6px 6px 12px). PLP sin ese wrapper. Related desktop 3 columnas; a <=900 permanece regla más específica de 3, a <=540 pasa a2. El gap4px de `.page-light` **no genera separación** al no ser grid/flex. No hay un componente modal React adicional al drawer; overlay de menú y cart se describen en sus fichas.

## Estados y overlays

Foco global `2px solid var(--arcilla)` offset4; Quick Add offset3; TerritoryCard offset5. Disabled global opacity.45/cursor not-allowed; Quick Add mismo estado propio. Primario hover Estirpe/borde Estirpe. Light hover white. Outline-light transparente/borde rgba(255,255,255,.64); hover white/dark. Inline background/color, cuando existan, prevalecen sobre hover; revisar cada instancia actual.

Quick Add hover solo @media hover:hover, fondo Caliza/borde Dark; active fondo var(--line). No hay loading real porque el carrito es síncrono. En Shopify conservar aria-busy/loading/error comerciales nativos. Swatches reales del prototipo son spans sin acción.

Overlays exactos: consultar familias home-hero__shade, borderless-fullwidth__shade, history-banner__shade, collection-hero__shade, se-hero__overlay, story-hero__shade, care-hero__overlay y cart-layer__backdrop en la referencia. Son gradientes por sección, no un token único. Cart backdrop rgba(0,0,0,.48); texto claro suele usar opacidades .5–.78. No afirmar contraste WCAG medido.

## Responsive real

| Media query | Alcance |
|---|---|
| (hover: hover)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |
| (prefers-reduced-motion: reduce)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |
| (min-width: 1120px)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |
| (max-width: 1100px)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |
| (hover: hover) and (pointer: fine)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |
| (max-width: 900px)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |
| (max-width: 540px)  | Ver todas las declaraciones y orden en CSS_REFERENCE; resúmenes por página. |


Breakpoints de ancho únicos: max1100, max900, max540 y min1120; condiciones de interacción/movimiento separadas. 1024 y768 son anchos de prueba, no breakpoints declarados. Las media queries max900/max540 aparecen varias veces: gana la última de igual especificidad. Typography inline `Sin fronteras 60px` sobrevive al CSS mobile52; Home Special h2 inline50 sobrevive a47. Logo inline120 sobrevive a mobile68.

## Motion

| Selector / evento | Duración / comportamiento | Origen |
|---|---|---|
| nav underline | right .25s | .desktop-nav button::after |
| button / mobile-nav | .25s ease / .3s ease | .button / .mobile-nav |
| text-link svg | transform .25s; translateX4 | .text-link svg |
| product image | opacity .35s, transform .5s; scale1.02; secondary swap | .product-card__img y media:hover |
| quick add | background/border .2s; reduced-motion none | .product-card__quick-add |
| Special Reveal | opacity520ms ease; translateY22→0 520ms cubic-bezier(.22,1,.36,1) | .se-reveal; observer threshold.18 |
| territory disclosure | overlay360ms ease; panel transform360ms cubic-bezier(.22,1,.36,1), opacity280ms; toggle240ms | .territory-card*; actualmente oculto |
| Care marquee | 24s linear infinite; translateX(-50%) | care-marquee |
| Care illustration | 420ms cubic-bezier(.22,1,.36,1), translateY8→0 | care-illustration-in |
| Care step | opacity/transform400ms ease; initial opacity.3 translateY20 | .care-step |
| Cart | transform .35s ease; backdrop opacity.3s | .cart-drawer / backdrop |

Todas las filas se resuelven a reglas y líneas en [CSS_REFERENCE](CSS_REFERENCE.md); los observers y scroll están referenciados en las fichas Reveal/CareScrollStory/Story/App. Reduced motion final: marquee animation none; * y pseudo elementos scroll-behavior auto !important, transition/animation duration .01ms !important. Care/Special scroll consultan matchMedia; Story/App pasan smooth explícitamente y requieren QA de preferencia reducida. No hay animación global de página ni parallax implementado.
