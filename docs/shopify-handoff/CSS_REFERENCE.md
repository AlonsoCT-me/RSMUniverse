# Referencia completa de reglas CSS

Extracción estática de `src/index.css`, en orden de aparición. Este es el único inventario íntegro de declaraciones; las fichas enlazan aquí sin duplicarlas. No equivale a estilos computados: aplicar contexto, especificidad, herencia, orden e inline styles de la ficha. Las reglas históricas permanecen aunque no haya DOM que las use. Los keyframes aparecen con su contexto. Tailwind Preflight proviene del import, no se vuelca como CSS propio.

<a id="r001"></a>

**r001 · `:root`** — Base sin capa. [Fuente:4](../../src/index.css#L4)

```css
--estirpe: #64242e; --sierra: #574d35; --caliza: #f2e8da; --arcilla: #944a20; --horizonte: #4b5b6e; --dark: #191716; --paper: #f7f2eb; --white: #fff; --line: rgba(25, 23, 22, 0.16); --serif: "Cormorant Garamond", Georgia, serif; --sans: "Figtree", Arial, sans-serif;
```

<a id="r002"></a>

**r002 · `html`** — @layer base. [Fuente:19](../../src/index.css#L19)

```css
scroll-behavior: smooth;
```

<a id="r003"></a>

**r003 · `body`** — @layer base. [Fuente:22](../../src/index.css#L22)

```css
background: var(--paper); color: var(--dark); font-family: var(--sans); font-size: 16px; -webkit-font-smoothing: antialiased;
```

<a id="r004"></a>

**r004 · `button, a, input, select`** — @layer base. [Fuente:29](../../src/index.css#L29)

```css
outline-offset: 4px;
```

<a id="r005"></a>

**r005 · `button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible`** — @layer base. [Fuente:35](../../src/index.css#L35)

```css
outline: 2px solid var(--arcilla);
```

<a id="r006"></a>

**r006 · `button`** — @layer base. [Fuente:41](../../src/index.css#L41)

```css
cursor: pointer;
```

<a id="r007"></a>

**r007 · `button:disabled`** — @layer base. [Fuente:44](../../src/index.css#L44)

```css
cursor: not-allowed; opacity: 0.45;
```

<a id="r008"></a>

**r008 · `img`** — @layer base. [Fuente:48](../../src/index.css#L48)

```css
display: block; max-width: 100%;
```

<a id="r009"></a>

**r009 · `.hidden`** — Base sin capa. [Fuente:54](../../src/index.css#L54)

```css
display: none !important;
```

<a id="r010"></a>

**r010 · `.sr-only`** — Base sin capa. [Fuente:58](../../src/index.css#L58)

```css
position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
```

<a id="r011"></a>

**r011 · `.shell`** — Base sin capa. [Fuente:69](../../src/index.css#L69)

```css
width: min(100% - 64px, 1360px); margin-inline: auto;
```

<a id="r012"></a>

**r012 · `.eyebrow`** — Base sin capa. [Fuente:73](../../src/index.css#L73)

```css
display: inline-block; color: var(--arcilla); font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
```

<a id="r013"></a>

**r013 · `.eyebrow--light`** — Base sin capa. [Fuente:81](../../src/index.css#L81)

```css
color: #e9d3bd;
```

<a id="r014"></a>

**r014 · `.image-placeholder`** — Base sin capa. [Fuente:84](../../src/index.css#L84)

```css
position: relative; display: grid; place-items: center; width: 100%; height: 100%; min-width: 0; overflow: hidden; isolation: isolate;
```

<a id="r015"></a>

**r015 · `.image-placeholder::before, .image-placeholder::after`** — Base sin capa. [Fuente:94](../../src/index.css#L94)

```css
content: ""; position: absolute; pointer-events: none;
```

<a id="r016"></a>

**r016 · `.image-placeholder::before`** — Base sin capa. [Fuente:100](../../src/index.css#L100)

```css
inset: 16px; border: 1px solid currentColor; opacity: 0.14;
```

<a id="r017"></a>

**r017 · `.image-placeholder::after`** — Base sin capa. [Fuente:105](../../src/index.css#L105)

```css
width: 72%; height: 1px; background: currentColor; opacity: 0.09; transform: rotate(-28deg);
```

<a id="r018"></a>

**r018 · `.image-placeholder--light`** — Base sin capa. [Fuente:112](../../src/index.css#L112)

```css
color: var(--dark);
```

<a id="r019"></a>

**r019 · `.image-placeholder--dark`** — Base sin capa. [Fuente:115](../../src/index.css#L115)

```css
color: white;
```

<a id="r020"></a>

**r020 · `.image-placeholder__mark`** — Base sin capa. [Fuente:118](../../src/index.css#L118)

```css
position: relative; z-index: 2; display: flex; align-items: center; gap: 10px; padding: 9px 12px; border: 1px solid currentColor; color: inherit; background: color-mix(in srgb, currentColor 5%, transparent); opacity: 0.68;
```

<a id="r021"></a>

**r021 · `.image-placeholder__mark svg`** — Base sin capa. [Fuente:130](../../src/index.css#L130)

```css
width: 16px; height: 16px; stroke: currentColor; stroke-width: 1.2;
```

<a id="r022"></a>

**r022 · `.image-placeholder__mark b`** — Base sin capa. [Fuente:136](../../src/index.css#L136)

```css
font-size: 9px; font-weight: 500; letter-spacing: 0.16em; line-height: 1; text-transform: uppercase;
```

<a id="r023"></a>

**r023 · `.image-placeholder--corner .image-placeholder__mark`** — Base sin capa. [Fuente:143](../../src/index.css#L143)

```css
position: absolute; top: 96px; right: 24px;
```

<a id="r024"></a>

**r024 · `.site-header`** — Base sin capa. [Fuente:149](../../src/index.css#L149)

```css
position: relative; z-index: 30; display: grid; grid-template-columns: 160px 1fr 160px; align-items: center; height: 76px; padding: 0 32px; color: var(--dark); background: rgba(247, 242, 235, 0.94); border-bottom: 1px solid var(--line);
```

<a id="r025"></a>

**r025 · `.site-header--overlay`** — Base sin capa. [Fuente:161](../../src/index.css#L161)

```css
position: absolute; inset: 0 0 auto; color: white; background: linear-gradient(to bottom, rgba(8, 7, 6, 0.64), transparent); border: 0;
```

<a id="r026"></a>

**r026 · `.site-header--dark`** — Base sin capa. [Fuente:168](../../src/index.css#L168)

```css
color: white; background: rgba(16, 15, 14, 0.92); border-color: rgba(255, 255, 255, 0.12);
```

<a id="r027"></a>

**r027 · `.site-header--overlay.site-header--dark`** — Base sin capa. [Fuente:173](../../src/index.css#L173)

```css
background: linear-gradient(to bottom, rgba(8, 7, 6, 0.78), transparent);
```

<a id="r028"></a>

**r028 · `.logo-button`** — Base sin capa. [Fuente:176](../../src/index.css#L176)

```css
justify-self: start;
```

<a id="r029"></a>

**r029 · `.brand-logo`** — Base sin capa. [Fuente:179](../../src/index.css#L179)

```css
width: 80px; height: auto;
```

<a id="r030"></a>

**r030 · `.desktop-nav`** — Base sin capa. [Fuente:183](../../src/index.css#L183)

```css
display: flex; justify-content: center; gap: 38px;
```

<a id="r031"></a>

**r031 · `.desktop-nav button`** — Base sin capa. [Fuente:188](../../src/index.css#L188)

```css
position: relative; font-size: 11px; font-weight: 500; letter-spacing: 0.11em; text-transform: uppercase;
```

<a id="r032"></a>

**r032 · `.desktop-nav button::after`** — Base sin capa. [Fuente:195](../../src/index.css#L195)

```css
content: ""; position: absolute; left: 0; right: 100%; bottom: -7px; height: 1px; background: currentColor; transition: right 0.25s;
```

<a id="r033"></a>

**r033 · `.desktop-nav button:hover::after, .desktop-nav button.is-active::after`** — Base sin capa. [Fuente:205](../../src/index.css#L205)

```css
right: 0;
```

<a id="r034"></a>

**r034 · `.header-actions`** — Base sin capa. [Fuente:209](../../src/index.css#L209)

```css
justify-self: end; display: flex; align-items: center; gap: 17px;
```

<a id="r035"></a>

**r035 · `.header-actions button`** — Base sin capa. [Fuente:215](../../src/index.css#L215)

```css
position: relative;
```

<a id="r036"></a>

**r036 · `.bag-button span`** — Base sin capa. [Fuente:218](../../src/index.css#L218)

```css
position: absolute; right: -8px; top: -8px; display: grid; place-items: center; width: 16px; height: 16px; border-radius: 50%; background: var(--estirpe); color: white; font-size: 9px;
```

<a id="r037"></a>

**r037 · `.mobile-menu-button`** — Base sin capa. [Fuente:231](../../src/index.css#L231)

```css
display: none;
```

<a id="r038"></a>

**r038 · `.mobile-nav`** — Base sin capa. [Fuente:234](../../src/index.css#L234)

```css
visibility: hidden; position: fixed; z-index: 60; inset: 0; display: flex; flex-direction: column; padding: 25px; color: white; background: var(--dark); opacity: 0; transform: translateY(-12px); transition: 0.3s ease;
```

<a id="r039"></a>

**r039 · `.mobile-nav.is-open`** — Base sin capa. [Fuente:248](../../src/index.css#L248)

```css
visibility: visible; opacity: 1; transform: translateY(0);
```

<a id="r040"></a>

**r040 · `.mobile-nav__top`** — Base sin capa. [Fuente:253](../../src/index.css#L253)

```css
display: flex; justify-content: space-between; align-items: center;
```

<a id="r041"></a>

**r041 · `.mobile-nav__top img`** — Base sin capa. [Fuente:258](../../src/index.css#L258)

```css
width: 70px;
```

<a id="r042"></a>

**r042 · `.mobile-nav nav`** — Base sin capa. [Fuente:261](../../src/index.css#L261)

```css
display: grid; gap: 22px; margin: auto 0;
```

<a id="r043"></a>

**r043 · `.mobile-nav nav button`** — Base sin capa. [Fuente:266](../../src/index.css#L266)

```css
font-family: var(--serif); font-size: clamp(36px, 11vw, 54px); text-align: left; text-transform: uppercase;
```

<a id="r044"></a>

**r044 · `.mobile-nav > p`** — Base sin capa. [Fuente:272](../../src/index.css#L272)

```css
color: rgba(255, 255, 255, 0.56); font-size: 13px; line-height: 1.6; text-transform: uppercase; letter-spacing: 0.08em;
```

<a id="r045"></a>

**r045 · `.button`** — Base sin capa. [Fuente:280](../../src/index.css#L280)

```css
display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 24px; border: 1px solid var(--dark); background: var(--dark); color: white; font-size: 11px; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; transition: 0.25s ease;
```

<a id="r046"></a>

**r046 · `.button:hover`** — Base sin capa. [Fuente:295](../../src/index.css#L295)

```css
background: var(--estirpe); border-color: var(--estirpe);
```

<a id="r047"></a>

**r047 · `.button--light`** — Base sin capa. [Fuente:299](../../src/index.css#L299)

```css
background: var(--caliza); border-color: var(--caliza); color: var(--dark);
```

<a id="r048"></a>

**r048 · `.button--light:hover`** — Base sin capa. [Fuente:304](../../src/index.css#L304)

```css
background: white; border-color: white;
```

<a id="r049"></a>

**r049 · `.button--outline-light`** — Base sin capa. [Fuente:308](../../src/index.css#L308)

```css
background: transparent; border-color: rgba(255, 255, 255, 0.64); color: white;
```

<a id="r050"></a>

**r050 · `.button--outline-light:hover`** — Base sin capa. [Fuente:313](../../src/index.css#L313)

```css
background: white; border-color: white; color: var(--dark);
```

<a id="r051"></a>

**r051 · `.text-link`** — Base sin capa. [Fuente:318](../../src/index.css#L318)

```css
display: inline-flex; align-items: center; gap: 24px; padding-bottom: 7px; border-bottom: 1px solid currentColor; color: var(--dark); font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
```

<a id="r052"></a>

**r052 · `.text-link svg`** — Base sin capa. [Fuente:330](../../src/index.css#L330)

```css
transition: transform 0.25s;
```

<a id="r053"></a>

**r053 · `.text-link:hover svg`** — Base sin capa. [Fuente:333](../../src/index.css#L333)

```css
transform: translateX(4px);
```

<a id="r054"></a>

**r054 · `.text-link--light`** — Base sin capa. [Fuente:336](../../src/index.css#L336)

```css
color: white;
```

<a id="r055"></a>

**r055 · `.home-hero`** — Base sin capa. [Fuente:340](../../src/index.css#L340)

```css
position: relative; height: min(860px, 100svh); min-height: 660px; overflow: hidden; color: white; background: #271d18; background-image: url("/assets/home-hero.webp"); background-position: center center; background-repeat: no-repeat; background-size: cover;
```

<a id="r056"></a>

**r056 · `.home-hero > .image-placeholder`** — Base sin capa. [Fuente:352](../../src/index.css#L352)

```css
width: 100%; height: 100%;
```

<a id="r057"></a>

**r057 · `.home-hero__shade`** — Base sin capa. [Fuente:356](../../src/index.css#L356)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(14, 10, 8, 0.82) 0%, rgba(14, 10, 8, 0.35) 48%, rgba(14, 10, 8, 0.06) 75% );
```

<a id="r058"></a>

**r058 · `.home-hero__content`** — Base sin capa. [Fuente:366](../../src/index.css#L366)

```css
position: absolute; left: clamp(32px, 8vw, 120px); bottom: 30%; width: auto;
```

<a id="r059"></a>

**r059 · `.home-hero h1, .special-hero h1, .story-hero h1, .collection-hero h1`** — Base sin capa. [Fuente:372](../../src/index.css#L372)

```css
margin: 22px 0 36px; font-family: var(--serif); font-size: clamp(62px, 7.5vw, 112px); font-weight: 600; line-height: 0.78; letter-spacing: -0.045em; text-transform: uppercase;
```

<a id="r060"></a>

**r060 · `.home-hero h1 em, .special-hero h1 em, .collection-hero h1 em`** — Base sin capa. [Fuente:384](../../src/index.css#L384)

```css
color: #e1c6aa; font-weight: 600;
```

<a id="r061"></a>

**r061 · `.hero-index`** — Base sin capa. [Fuente:390](../../src/index.css#L390)

```css
position: absolute; right: 38px; bottom: 32px; font-size: 10px; letter-spacing: 0.18em;
```

<a id="r062"></a>

**r062 · `.borderless`** — Base sin capa. [Fuente:398](../../src/index.css#L398)

```css
display: grid; grid-template-columns: 1.55fr 0.8fr; min-height: 650px; background: var(--caliza);
```

<a id="r063"></a>

**r063 · `.borderless__image`** — Base sin capa. [Fuente:404](../../src/index.css#L404)

```css
overflow: hidden;
```

<a id="r064"></a>

**r064 · `.borderless__image .image-placeholder, .borderless__image .home-lifestyle-image`** — Base sin capa. [Fuente:407](../../src/index.css#L407)

```css
width: 100%; height: 100%; object-fit: cover; object-position: 42% center; transition: transform 0.7s ease;
```

<a id="r065"></a>

**r065 · `.borderless:hover .image-placeholder, .borderless:hover .home-lifestyle-image`** — Base sin capa. [Fuente:415](../../src/index.css#L415)

```css
transform: scale(1.02);
```

<a id="r066"></a>

**r066 · `.borderless__copy`** — Base sin capa. [Fuente:419](../../src/index.css#L419)

```css
display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 8vw;
```

<a id="r067"></a>

**r067 · `.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`** — Base sin capa. [Fuente:426](../../src/index.css#L426)

```css
margin: 20px 0; font-family: var(--serif); font-size: clamp(48px, 5.2vw, 82px); line-height: 0.9; letter-spacing: -0.035em; text-transform: uppercase;
```

<a id="r068"></a>

**r068 · `.borderless p, .special-split p, .pdp-story p, .nocturna-story p`** — Base sin capa. [Fuente:439](../../src/index.css#L439)

```css
max-width: 430px; margin-bottom: 32px; color: #534c46; line-height: 1.7;
```

<a id="r069"></a>

**r069 · `.borderless-fullwidth`** — Base sin capa. [Fuente:449](../../src/index.css#L449)

```css
position: relative; display: grid; min-height: min(780px, 82vw); overflow: hidden; color: white; background-color: var(--dark); background-image: url("/assets/home-sin-fronteras.webp"); background-position: center center; background-repeat: no-repeat; background-size: cover;
```

<a id="r070"></a>

**r070 · `.borderless-fullwidth__shade`** — Base sin capa. [Fuente:461](../../src/index.css#L461)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(15, 12, 9, 0.04) 34%, rgba(15, 12, 9, 0.82) 100% );
```

<a id="r071"></a>

**r071 · `.borderless-fullwidth__content`** — Base sin capa. [Fuente:470](../../src/index.css#L470)

```css
position: relative; z-index: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding-left: min(58%, 790px);
```

<a id="r072"></a>

**r072 · `.borderless-fullwidth h2`** — Base sin capa. [Fuente:479](../../src/index.css#L479)

```css
margin: 20px 0; font-family: var(--serif); font-size: clamp(58px, 6vw, 92px); font-weight: 600; line-height: 0.86; letter-spacing: -0.04em; text-transform: uppercase;
```

<a id="r073"></a>

**r073 · `.borderless-fullwidth p`** — Base sin capa. [Fuente:488](../../src/index.css#L488)

```css
max-width: 440px; margin-bottom: 32px; color: rgba(255, 255, 255, 0.72); line-height: 1.7;
```

<a id="r074"></a>

**r074 · `.featured-collection`** — Base sin capa. [Fuente:495](../../src/index.css#L495)

```css
background-color: var(--caliza);
```

<a id="r075"></a>

**r075 · `.featured-collection__banner`** — Base sin capa. [Fuente:498](../../src/index.css#L498)

```css
padding-block: 96px 76px; background-color: var(--caliza); background-image: linear-gradient( 90deg, rgba(242, 232, 218, 0.92) 0%, rgba(242, 232, 218, 0.78) 46%, rgba(242, 232, 218, 0.22) 100% ), url("/assets/home-collection-bg.webp"); background-position: center center; background-repeat: no-repeat; background-size: cover;
```

<a id="r076"></a>

**r076 · `.featured-collection__body`** — Base sin capa. [Fuente:513](../../src/index.css#L513)

```css
padding-block: 64px 124px; background-color: var(--caliza);
```

<a id="r077"></a>

**r077 · `.featured-collection__accent`** — Base sin capa. [Fuente:517](../../src/index.css#L517)

```css
color: #944a20;
```

<a id="r078"></a>

**r078 · `.featured-collection__head, .related__head`** — Base sin capa. [Fuente:520](../../src/index.css#L520)

```css
display: flex; justify-content: space-between; align-items: end; margin-bottom: 56px;
```

<a id="r079"></a>

**r079 · `.featured-collection__banner .featured-collection__head`** — Base sin capa. [Fuente:527](../../src/index.css#L527)

```css
margin-bottom: 0; padding: 28px; background: rgba(242, 232, 218, 0.88);
```

<a id="r080"></a>

**r080 · `.featured-collection .product-card`** — Base sin capa. [Fuente:532](../../src/index.css#L532)

```css
padding: 10px 10px 16px; background: rgba(247, 242, 235, 0.92);
```

<a id="r081"></a>

**r081 · `.section-heading`** — Base sin capa. [Fuente:536](../../src/index.css#L536)

```css
max-width: 680px;
```

<a id="r082"></a>

**r082 · `.section-heading h2`** — Base sin capa. [Fuente:539](../../src/index.css#L539)

```css
margin-top: 14px; white-space: pre-line; font-family: var(--serif); font-size: clamp(44px, 5vw, 76px); line-height: 0.88; letter-spacing: -0.035em; text-transform: uppercase;
```

<a id="r083"></a>

**r083 · `.section-heading p`** — Base sin capa. [Fuente:548](../../src/index.css#L548)

```css
max-width: 520px; margin-top: 20px; color: #665f58; line-height: 1.65;
```

<a id="r084"></a>

**r084 · `.section-heading--light h2, .section-heading--light p`** — Base sin capa. [Fuente:554](../../src/index.css#L554)

```css
color: white;
```

<a id="r085"></a>

**r085 · `.section-heading--light p`** — Base sin capa. [Fuente:558](../../src/index.css#L558)

```css
color: rgba(255, 255, 255, 0.62);
```

<a id="r086"></a>

**r086 · `.product-grid`** — Base sin capa. [Fuente:561](../../src/index.css#L561)

```css
display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 46px 18px;
```

<a id="r087"></a>

**r087 · `.product-card`** — Base sin capa. [Fuente:566](../../src/index.css#L566)

```css
display: flex; flex-direction: column; min-width: 0;
```

<a id="r088"></a>

**r088 · `.product-card__media`** — Base sin capa. [Fuente:571](../../src/index.css#L571)

```css
position: relative; display: grid; place-items: center; aspect-ratio: 4 / 3; flex-shrink: 0; width: 100%; overflow: hidden; background: #ddd0c3;
```

<a id="r089"></a>

**r089 · `.product-card__media--light`** — Base sin capa. [Fuente:581](../../src/index.css#L581)

```css
background: linear-gradient(180deg, #9d8c7c 0%, #ac9886 100%);
```

<a id="r090"></a>

**r090 · `.product-card__media--dark`** — Base sin capa. [Fuente:584](../../src/index.css#L584)

```css
background: linear-gradient(180deg, #10110e 0%, #1d1916 100%);
```

<a id="r091"></a>

**r091 · `.product-card__media .image-placeholder, .product-card__img`** — Base sin capa. [Fuente:587](../../src/index.css#L587)

```css
width: 100%; height: 100%; object-fit: contain; object-position: center; transition: opacity 0.35s, transform 0.5s;
```

<a id="r092"></a>

**r092 · `.product-card__secondary`** — Base sin capa. [Fuente:597](../../src/index.css#L597)

```css
position: absolute; inset: 0; opacity: 0;
```

<a id="r093"></a>

**r093 · `.product-card__media:hover .product-card__primary`** — Base sin capa. [Fuente:602](../../src/index.css#L602)

```css
transform: scale(1.02);
```

<a id="r094"></a>

**r094 · `.product-card__media--has-secondary:hover .product-card__primary`** — Base sin capa. [Fuente:605](../../src/index.css#L605)

```css
opacity: 0; transform: scale(1.02);
```

<a id="r095"></a>

**r095 · `.product-card__media--has-secondary:hover .product-card__secondary`** — Base sin capa. [Fuente:609](../../src/index.css#L609)

```css
opacity: 1;
```

<a id="r096"></a>

**r096 · `.product-card__label`** — Base sin capa. [Fuente:612](../../src/index.css#L612)

```css
position: absolute; top: 12px; left: 12px; padding: 7px 9px; color: white; background: var(--dark); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase;
```

<a id="r097"></a>

**r097 · `.product-card__title`** — Base sin capa. [Fuente:623](../../src/index.css#L623)

```css
display: flex; flex: 1; flex-direction: column; align-items: flex-start; gap: 5px; width: 100%; margin-top: 16px; text-align: left;
```

<a id="r098"></a>

**r098 · `.product-card__title > span`** — Base sin capa. [Fuente:633](../../src/index.css#L633)

```css
overflow-wrap: anywhere; font-family: var(--serif); font-size: clamp(21px, 1.65vw, 26px); line-height: 1.06; text-transform: uppercase;
```

<a id="r099"></a>

**r099 · `.product-card__title small`** — Base sin capa. [Fuente:640](../../src/index.css#L640)

```css
margin-top: auto; color: #756d65; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
```

<a id="r100"></a>

**r100 · `.product-card__price`** — Base sin capa. [Fuente:647](../../src/index.css#L647)

```css
margin: 10px 0 12px; font-size: 13px;
```

<a id="r101"></a>

**r101 · `.product-card__actions`** — Base sin capa. [Fuente:651](../../src/index.css#L651)

```css
display: flex; align-items: center; justify-content: space-between; gap: 12px;
```

<a id="r102"></a>

**r102 · `.product-card__actions .swatches`** — Base sin capa. [Fuente:657](../../src/index.css#L657)

```css
flex-wrap: wrap; min-width: 0;
```

<a id="r103"></a>

**r103 · `.product-card__quick-add`** — Base sin capa. [Fuente:661](../../src/index.css#L661)

```css
display: grid; place-items: center; flex: 0 0 44px; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 50%; color: var(--dark); background: transparent; transition: background-color 0.2s, border-color 0.2s;
```

<a id="r104"></a>

**r104 · `.product-card__quick-add:hover:not(:disabled)`** — @media (hover: hover). [Fuente:676](../../src/index.css#L676)

```css
border-color: var(--dark); background: var(--caliza);
```

<a id="r105"></a>

**r105 · `.product-card__quick-add:focus-visible`** — Base sin capa. [Fuente:681](../../src/index.css#L681)

```css
outline: 2px solid var(--arcilla); outline-offset: 3px;
```

<a id="r106"></a>

**r106 · `.product-card__quick-add:active:not(:disabled)`** — Base sin capa. [Fuente:685](../../src/index.css#L685)

```css
background: var(--line);
```

<a id="r107"></a>

**r107 · `.product-card__quick-add:disabled`** — Base sin capa. [Fuente:688](../../src/index.css#L688)

```css
cursor: not-allowed; opacity: 0.45;
```

<a id="r108"></a>

**r108 · `.product-card__quick-add`** — @media (prefers-reduced-motion: reduce). [Fuente:693](../../src/index.css#L693)

```css
transition: none;
```

<a id="r109"></a>

**r109 · `.swatches`** — Base sin capa. [Fuente:697](../../src/index.css#L697)

```css
display: flex; gap: 8px;
```

<a id="r110"></a>

**r110 · `.swatches button, .swatch-dot`** — Base sin capa. [Fuente:701](../../src/index.css#L701)

```css
display: inline-block; width: 14px; height: 14px; border-radius: 50%; background: var(--swatch); box-shadow: 0 0 0 1px rgba(25, 23, 22, 0.24);
```

<a id="r111"></a>

**r111 · `.swatches button.is-selected, .swatch-dot.is-selected`** — Base sin capa. [Fuente:710](../../src/index.css#L710)

```css
box-shadow: 0 0 0 2px var(--paper), 0 0 0 3px var(--dark);
```

<a id="r112"></a>

**r112 · `.swatches--large button, .swatch-dot--large`** — Base sin capa. [Fuente:716](../../src/index.css#L716)

```css
width: 28px; height: 28px;
```

<a id="r113"></a>

**r113 · `.special-split`** — Base sin capa. [Fuente:722](../../src/index.css#L722)

```css
display: grid; grid-template-columns: 1.15fr 1fr; min-height: 700px; color: white; background: var(--dark);
```

<a id="r114"></a>

**r114 · `.special-split__image`** — Base sin capa. [Fuente:729](../../src/index.css#L729)

```css
overflow: hidden;
```

<a id="r115"></a>

**r115 · `.special-split__image .image-placeholder`** — Base sin capa. [Fuente:732](../../src/index.css#L732)

```css
width: 100%; height: 100%;
```

<a id="r116"></a>

**r116 · `.special-split__image .home-special-image`** — Base sin capa. [Fuente:736](../../src/index.css#L736)

```css
width: 100%; height: 100%; object-fit: cover; object-position: 58% center;
```

<a id="r117"></a>

**r117 · `.special-split__copy`** — Base sin capa. [Fuente:742](../../src/index.css#L742)

```css
display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 8vw;
```

<a id="r118"></a>

**r118 · `.special-split p`** — Base sin capa. [Fuente:749](../../src/index.css#L749)

```css
color: rgba(255, 255, 255, 0.6);
```

<a id="r119"></a>

**r119 · `.history-banner`** — Base sin capa. [Fuente:752](../../src/index.css#L752)

```css
position: relative; min-height: 700px; overflow: hidden; color: white; background-color: var(--sierra); background-image: url("/assets/home-history-banner.webp"); background-position: 52% center; background-repeat: no-repeat; background-size: cover;
```

<a id="r120"></a>

**r120 · `.history-banner > .image-placeholder`** — Base sin capa. [Fuente:763](../../src/index.css#L763)

```css
position: absolute; inset: 0; width: 100%; height: 100%;
```

<a id="r121"></a>

**r121 · `.history-banner__shade`** — Base sin capa. [Fuente:769](../../src/index.css#L769)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(15, 12, 9, 0.7), rgba(15, 12, 9, 0.04) 62% );
```

<a id="r122"></a>

**r122 · `.history-banner__content`** — Base sin capa. [Fuente:778](../../src/index.css#L778)

```css
position: relative; z-index: 1; padding-top: 400px; padding-right: 99px; padding-bottom: 100px; padding-left: 99px;
```

<a id="r123"></a>

**r123 · `.page-light`** — Base sin capa. [Fuente:787](../../src/index.css#L787)

```css
background: var(--paper); gap: 4px;
```

<a id="r124"></a>

**r124 · `.collection-hero`** — Base sin capa. [Fuente:791](../../src/index.css#L791)

```css
position: relative; height: 570px; overflow: hidden; color: white; background-color: var(--dark); background-image: url("/assets/rsm-special-edition-leather-brown.webp"); background-position: 62% center; background-repeat: no-repeat; background-size: cover;
```

<a id="r125"></a>

**r125 · `.collection-hero > .image-placeholder`** — Base sin capa. [Fuente:802](../../src/index.css#L802)

```css
width: 100%; height: 100%;
```

<a id="r126"></a>

**r126 · `.collection-hero__shade`** — Base sin capa. [Fuente:806](../../src/index.css#L806)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(16, 12, 9, 0.86) 0%, rgba(16, 12, 9, 0.48) 54%, rgba(16, 12, 9, 0.16) 100% );
```

<a id="r127"></a>

**r127 · `.collection-hero__copy`** — Base sin capa. [Fuente:816](../../src/index.css#L816)

```css
position: absolute; left: max(32px, calc((100vw - 1360px) / 2)); bottom: 145px; max-width: 810px;
```

<a id="r128"></a>

**r128 · `.collection-hero h1`** — Base sin capa. [Fuente:822](../../src/index.css#L822)

```css
margin: 15px 0 24px; font-size: clamp(58px, 6.5vw, 94px);
```

<a id="r129"></a>

**r129 · `.collection-hero p`** — Base sin capa. [Fuente:826](../../src/index.css#L826)

```css
max-width: 480px; color: rgba(255, 255, 255, 0.78); line-height: 1.6;
```

<a id="r130"></a>

**r130 · `.collection`** — Base sin capa. [Fuente:831](../../src/index.css#L831)

```css
padding-block: 48px 120px;
```

<a id="r131"></a>

**r131 · `.collection__intro`** — Base sin capa. [Fuente:834](../../src/index.css#L834)

```css
display: flex; justify-content: space-between; gap: 30px; padding-bottom: 40px;
```

<a id="r132"></a>

**r132 · `.collection__intro p`** — Base sin capa. [Fuente:840](../../src/index.css#L840)

```css
max-width: 650px; font-family: var(--serif); font-size: 25px; line-height: 1.25;
```

<a id="r133"></a>

**r133 · `.collection__intro span`** — Base sin capa. [Fuente:846](../../src/index.css#L846)

```css
color: #756d65; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
```

<a id="r134"></a>

**r134 · `.toolbar`** — Base sin capa. [Fuente:852](../../src/index.css#L852)

```css
display: flex; justify-content: space-between; padding: 18px 0; margin-bottom: 36px; border-block: 1px solid var(--line);
```

<a id="r135"></a>

**r135 · `.toolbar__filters`** — Base sin capa. [Fuente:859](../../src/index.css#L859)

```css
display: flex; gap: 28px;
```

<a id="r136"></a>

**r136 · `.toolbar button, .toolbar label`** — Base sin capa. [Fuente:863](../../src/index.css#L863)

```css
font-size: 11px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
```

<a id="r137"></a>

**r137 · `.toolbar button span`** — Base sin capa. [Fuente:870](../../src/index.css#L870)

```css
padding-left: 10px;
```

<a id="r138"></a>

**r138 · `.toolbar label`** — Base sin capa. [Fuente:873](../../src/index.css#L873)

```css
display: flex; gap: 14px; align-items: center;
```

<a id="r139"></a>

**r139 · `.toolbar label > span`** — Base sin capa. [Fuente:878](../../src/index.css#L878)

```css
color: #817970;
```

<a id="r140"></a>

**r140 · `.toolbar select`** — Base sin capa. [Fuente:881](../../src/index.css#L881)

```css
min-width: 120px; background: transparent;
```

<a id="r141"></a>

**r141 · `.pagination`** — Base sin capa. [Fuente:885](../../src/index.css#L885)

```css
display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 80px;
```

<a id="r142"></a>

**r142 · `.pagination button`** — Base sin capa. [Fuente:892](../../src/index.css#L892)

```css
display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid var(--line); font-size: 12px;
```

<a id="r143"></a>

**r143 · `.pagination button.is-current`** — Base sin capa. [Fuente:900](../../src/index.css#L900)

```css
color: white; background: var(--dark);
```

<a id="r144"></a>

**r144 · `.pdp`** — Base sin capa. [Fuente:905](../../src/index.css#L905)

```css
display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(340px, 0.72fr); gap: 48px; padding-block: 48px 120px;
```

<a id="r145"></a>

**r145 · `.product-gallery`** — Base sin capa. [Fuente:911](../../src/index.css#L911)

```css
display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-content: start;
```

<a id="r146"></a>

**r146 · `.product-gallery .image-placeholder`** — Base sin capa. [Fuente:917](../../src/index.css#L917)

```css
width: 100%; height: 100%; min-height: 430px; background: #d9cbbb;
```

<a id="r147"></a>

**r147 · `.product-gallery__main, .product-gallery__wide`** — Base sin capa. [Fuente:923](../../src/index.css#L923)

```css
grid-column: 1 / -1; min-height: 680px !important;
```

<a id="r148"></a>

**r148 · `.product-gallery--interactive`** — Base sin capa. [Fuente:928](../../src/index.css#L928)

```css
display: flex; flex-direction: column; gap: 14px;
```

<a id="r149"></a>

**r149 · `.product-gallery__stage`** — Base sin capa. [Fuente:933](../../src/index.css#L933)

```css
position: relative; display: grid; place-items: center; width: 100%; aspect-ratio: 4 / 3; overflow: hidden;
```

<a id="r150"></a>

**r150 · `.product-gallery__stage--light, .product-gallery__thumb--light`** — Base sin capa. [Fuente:941](../../src/index.css#L941)

```css
background: linear-gradient(180deg, #9d8c7c 0%, #ac9886 100%);
```

<a id="r151"></a>

**r151 · `.product-gallery__stage--dark, .product-gallery__thumb--dark`** — Base sin capa. [Fuente:945](../../src/index.css#L945)

```css
background: linear-gradient(180deg, #10110e 0%, #1d1916 100%);
```

<a id="r152"></a>

**r152 · `.product-gallery__stage-img`** — Base sin capa. [Fuente:949](../../src/index.css#L949)

```css
width: 100%; height: 100%; object-fit: contain; object-position: center;
```

<a id="r153"></a>

**r153 · `.product-gallery__controls`** — Base sin capa. [Fuente:955](../../src/index.css#L955)

```css
position: absolute; right: 16px; bottom: 16px; left: 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px; pointer-events: none;
```

<a id="r154"></a>

**r154 · `.product-gallery__arrow`** — Base sin capa. [Fuente:966](../../src/index.css#L966)

```css
pointer-events: auto; display: grid; place-items: center; width: 40px; height: 40px; color: var(--caliza); background: rgba(25, 23, 22, 0.72); border: 1px solid rgba(242, 232, 218, 0.22);
```

<a id="r155"></a>

**r155 · `.product-gallery__arrow--prev svg`** — Base sin capa. [Fuente:976](../../src/index.css#L976)

```css
transform: rotate(180deg);
```

<a id="r156"></a>

**r156 · `.product-gallery__counter`** — Base sin capa. [Fuente:979](../../src/index.css#L979)

```css
padding: 6px 12px; color: var(--caliza); background: rgba(25, 23, 22, 0.72); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
```

<a id="r157"></a>

**r157 · `.product-gallery__thumbs`** — Base sin capa. [Fuente:987](../../src/index.css#L987)

```css
display: grid; grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 10px;
```

<a id="r158"></a>

**r158 · `.product-gallery__thumb`** — Base sin capa. [Fuente:992](../../src/index.css#L992)

```css
display: grid; place-items: center; aspect-ratio: 4 / 3; overflow: hidden; border: 1px solid transparent; opacity: 0.66; transition: opacity 0.2s ease, border-color 0.2s ease;
```

<a id="r159"></a>

**r159 · `.product-gallery__thumb:hover`** — Base sin capa. [Fuente:1003](../../src/index.css#L1003)

```css
opacity: 0.9;
```

<a id="r160"></a>

**r160 · `.product-gallery__thumb.is-active`** — Base sin capa. [Fuente:1006](../../src/index.css#L1006)

```css
opacity: 1; border-color: var(--arcilla);
```

<a id="r161"></a>

**r161 · `.product-gallery--dark .product-gallery__thumb.is-active`** — Base sin capa. [Fuente:1010](../../src/index.css#L1010)

```css
border-color: var(--caliza);
```

<a id="r162"></a>

**r162 · `.product-gallery__thumb img`** — Base sin capa. [Fuente:1013](../../src/index.css#L1013)

```css
width: 100%; height: 100%; object-fit: contain; object-position: center;
```

<a id="r163"></a>

**r163 · `.product-info`** — Base sin capa. [Fuente:1019](../../src/index.css#L1019)

```css
position: sticky; top: 24px; align-self: start; padding: 18px 18px 40px;
```

<a id="r164"></a>

**r164 · `.breadcrumbs`** — Base sin capa. [Fuente:1025](../../src/index.css#L1025)

```css
display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-bottom: 45px; color: #756d65; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
```

<a id="r165"></a>

**r165 · `.breadcrumbs button`** — Base sin capa. [Fuente:1036](../../src/index.css#L1036)

```css
color: inherit; font-size: inherit; letter-spacing: inherit; text-transform: inherit;
```

<a id="r166"></a>

**r166 · `.breadcrumbs button:hover`** — Base sin capa. [Fuente:1042](../../src/index.css#L1042)

```css
color: var(--arcilla);
```

<a id="r167"></a>

**r167 · `.breadcrumbs b`** — Base sin capa. [Fuente:1045](../../src/index.css#L1045)

```css
font-weight: 400; opacity: 0.5;
```

<a id="r168"></a>

**r168 · `.product-info h1`** — Base sin capa. [Fuente:1049](../../src/index.css#L1049)

```css
margin-top: 12px; font-family: var(--serif); font-size: clamp(34px, 3.2vw, 50px); line-height: 0.96; letter-spacing: -0.03em; text-transform: uppercase; overflow-wrap: break-word;
```

<a id="r169"></a>

**r169 · `.product-info__price`** — Base sin capa. [Fuente:1058](../../src/index.css#L1058)

```css
display: flex; justify-content: space-between; align-items: end; margin: 32px 0; padding-bottom: 25px; border-bottom: 1px solid var(--line); font-size: 20px;
```

<a id="r170"></a>

**r170 · `.product-info__price small`** — Base sin capa. [Fuente:1067](../../src/index.css#L1067)

```css
color: #7d746c; font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase;
```

<a id="r171"></a>

**r171 · `.variant > div:first-child`** — Base sin capa. [Fuente:1073](../../src/index.css#L1073)

```css
display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
```

<a id="r172"></a>

**r172 · `.variant b`** — Base sin capa. [Fuente:1081](../../src/index.css#L1081)

```css
font-weight: 500; text-align: right;
```

<a id="r173"></a>

**r173 · `.product-specs`** — Base sin capa. [Fuente:1085](../../src/index.css#L1085)

```css
display: grid; gap: 10px; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--line);
```

<a id="r174"></a>

**r174 · `.product-specs > div`** — Base sin capa. [Fuente:1092](../../src/index.css#L1092)

```css
display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 12px; font-size: 12px; line-height: 1.5;
```

<a id="r175"></a>

**r175 · `.product-specs dt`** — Base sin capa. [Fuente:1099](../../src/index.css#L1099)

```css
padding-top: 2px; color: #756d65; font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
```

<a id="r176"></a>

**r176 · `.product-specs dd`** — Base sin capa. [Fuente:1107](../../src/index.css#L1107)

```css
min-width: 0;
```

<a id="r177"></a>

**r177 · `.buy-row`** — Base sin capa. [Fuente:1110](../../src/index.css#L1110)

```css
display: grid; grid-template-columns: 110px 1fr; gap: 10px; margin: 32px 0 18px;
```

<a id="r178"></a>

**r178 · `.quantity`** — Base sin capa. [Fuente:1116](../../src/index.css#L1116)

```css
display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; min-height: 52px; border: 1px solid var(--line); text-align: center;
```

<a id="r179"></a>

**r179 · `.quantity button`** — Base sin capa. [Fuente:1124](../../src/index.css#L1124)

```css
display: grid; place-items: center;
```

<a id="r180"></a>

**r180 · `.button--add`** — Base sin capa. [Fuente:1128](../../src/index.css#L1128)

```css
min-height: 52px; width: 100%;
```

<a id="r181"></a>

**r181 · `.availability`** — Base sin capa. [Fuente:1132](../../src/index.css#L1132)

```css
display: flex; align-items: center; gap: 8px; margin-bottom: 35px; color: #6a625b; font-size: 11px;
```

<a id="r182"></a>

**r182 · `.availability span`** — Base sin capa. [Fuente:1140](../../src/index.css#L1140)

```css
width: 7px; height: 7px; border-radius: 50%; background: #687653;
```

<a id="r183"></a>

**r183 · `.accordion`** — Base sin capa. [Fuente:1146](../../src/index.css#L1146)

```css
border-top: 1px solid var(--line);
```

<a id="r184"></a>

**r184 · `.accordion:last-child`** — Base sin capa. [Fuente:1149](../../src/index.css#L1149)

```css
border-bottom: 1px solid var(--line);
```

<a id="r185"></a>

**r185 · `.accordion > button`** — Base sin capa. [Fuente:1152](../../src/index.css#L1152)

```css
display: flex; justify-content: space-between; align-items: center; width: 100%; min-height: 58px; font-size: 12px; font-weight: 600; letter-spacing: 0.09em; text-align: left; text-transform: uppercase;
```

<a id="r186"></a>

**r186 · `.accordion__content`** — Base sin capa. [Fuente:1164](../../src/index.css#L1164)

```css
padding: 0 30px 22px 0; color: #625b54; font-size: 13px; line-height: 1.6;
```

<a id="r187"></a>

**r187 · `.pdp-story`** — Base sin capa. [Fuente:1170](../../src/index.css#L1170)

```css
display: grid; grid-template-columns: 1.3fr 1fr; align-items: stretch; min-height: 640px; background: var(--caliza);
```

<a id="r188"></a>

**r188 · `.pdp-story > .image-placeholder`** — Base sin capa. [Fuente:1177](../../src/index.css#L1177)

```css
width: 100%; height: 100%;
```

<a id="r189"></a>

**r189 · `.pdp-story div`** — Base sin capa. [Fuente:1181](../../src/index.css#L1181)

```css
display: flex; flex-direction: column; justify-content: center; padding: 8vw;
```

<a id="r190"></a>

**r190 · `.pdp-story h2`** — Base sin capa. [Fuente:1187](../../src/index.css#L1187)

```css
font-size: clamp(44px, 4.5vw, 70px);
```

<a id="r191"></a>

**r191 · `.related`** — Base sin capa. [Fuente:1190](../../src/index.css#L1190)

```css
padding-block: 120px;
```

<a id="r192"></a>

**r192 · `.product-grid--featured`** — Base sin capa. [Fuente:1193](../../src/index.css#L1193)

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
```

<a id="r193"></a>

**r193 · `.related .product-grid--featured`** — Base sin capa. [Fuente:1196](../../src/index.css#L1196)

```css
grid-template-columns: repeat(3, minmax(0, 1fr));
```

<a id="r194"></a>

**r194 · `.dark-page`** — Base sin capa. [Fuente:1200](../../src/index.css#L1200)

```css
color: white; background: var(--dark);
```

<a id="r195"></a>

**r195 · `.special-hero`** — Base sin capa. [Fuente:1204](../../src/index.css#L1204)

```css
display: grid; grid-template-columns: 1.08fr 0.92fr; min-height: 850px; background: #12110f;
```

<a id="r196"></a>

**r196 · `.special-hero__visual`** — Base sin capa. [Fuente:1210](../../src/index.css#L1210)

```css
order: 2; overflow: hidden;
```

<a id="r197"></a>

**r197 · `.special-hero__visual .image-placeholder`** — Base sin capa. [Fuente:1214](../../src/index.css#L1214)

```css
width: 100%; height: 100%;
```

<a id="r198"></a>

**r198 · `.special-hero__content`** — Base sin capa. [Fuente:1218](../../src/index.css#L1218)

```css
display: flex; flex-direction: column; justify-content: end; align-items: flex-start; padding: 150px 6vw 100px;
```

<a id="r199"></a>

**r199 · `.special-hero h1`** — Base sin capa. [Fuente:1225](../../src/index.css#L1225)

```css
margin-bottom: 40px; font-size: clamp(62px, 7vw, 106px);
```

<a id="r200"></a>

**r200 · `.special-hero p`** — Base sin capa. [Fuente:1229](../../src/index.css#L1229)

```css
max-width: 470px; margin-bottom: 35px; color: rgba(255, 255, 255, 0.62); line-height: 1.65;
```

<a id="r201"></a>

**r201 · `.special-intro`** — Base sin capa. [Fuente:1235](../../src/index.css#L1235)

```css
position: relative; padding-block: 145px 100px; border-bottom: 1px solid rgba(255, 255, 255, 0.14);
```

<a id="r202"></a>

**r202 · `.special-intro__number`** — Base sin capa. [Fuente:1240](../../src/index.css#L1240)

```css
position: absolute; right: 0; bottom: 70px; color: rgba(255, 255, 255, 0.08); font-family: var(--serif); font-size: 220px; line-height: 0.7;
```

<a id="r203"></a>

**r203 · `.detail-triptych`** — Base sin capa. [Fuente:1249](../../src/index.css#L1249)

```css
display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding-block: 80px 140px;
```

<a id="r204"></a>

**r204 · `.detail-triptych .image-placeholder`** — Base sin capa. [Fuente:1255](../../src/index.css#L1255)

```css
width: 100%; aspect-ratio: 0.9;
```

<a id="r205"></a>

**r205 · `.detail-triptych span`** — Base sin capa. [Fuente:1259](../../src/index.css#L1259)

```css
display: block; margin-top: 20px; font-family: var(--serif); font-size: 28px; text-transform: uppercase;
```

<a id="r206"></a>

**r206 · `.detail-triptych p`** — Base sin capa. [Fuente:1266](../../src/index.css#L1266)

```css
margin-top: 5px; color: rgba(255, 255, 255, 0.5); font-size: 12px;
```

<a id="r207"></a>

**r207 · `.bento`** — Base sin capa. [Fuente:1271](../../src/index.css#L1271)

```css
display: grid; grid-template-columns: 1.15fr 0.8fr 1fr; grid-template-rows: auto 360px 330px; gap: 12px; padding-bottom: 140px;
```

<a id="r208"></a>

**r208 · `.bento .image-placeholder`** — Base sin capa. [Fuente:1278](../../src/index.css#L1278)

```css
width: 100%; height: 100%;
```

<a id="r209"></a>

**r209 · `.bento__heading`** — Base sin capa. [Fuente:1282](../../src/index.css#L1282)

```css
grid-column: 1 / -1; display: flex; justify-content: space-between; align-items: end; padding-bottom: 35px;
```

<a id="r210"></a>

**r210 · `.bento__heading h2`** — Base sin capa. [Fuente:1289](../../src/index.css#L1289)

```css
max-width: 670px; font-family: var(--serif); font-size: clamp(48px, 5.5vw, 80px); line-height: 0.86; text-align: right; text-transform: uppercase;
```

<a id="r211"></a>

**r211 · `.bento__emblem`** — Base sin capa. [Fuente:1297](../../src/index.css#L1297)

```css
grid-row: 2 / 4;
```

<a id="r212"></a>

**r212 · `.bento__text`** — Base sin capa. [Fuente:1300](../../src/index.css#L1300)

```css
display: flex; flex-direction: column; justify-content: end; padding: 35px; background: #282522;
```

<a id="r213"></a>

**r213 · `.bento__text > span`** — Base sin capa. [Fuente:1307](../../src/index.css#L1307)

```css
color: #c49270; font-family: var(--serif); font-size: 46px;
```

<a id="r214"></a>

**r214 · `.bento__text h3`** — Base sin capa. [Fuente:1312](../../src/index.css#L1312)

```css
margin: 20px 0; font-family: var(--serif); font-size: 34px; line-height: 1; text-transform: uppercase;
```

<a id="r215"></a>

**r215 · `.bento__text p`** — Base sin capa. [Fuente:1319](../../src/index.css#L1319)

```css
color: rgba(255, 255, 255, 0.54); font-size: 13px; line-height: 1.6;
```

<a id="r216"></a>

**r216 · `.bento__material`** — Base sin capa. [Fuente:1324](../../src/index.css#L1324)

```css
grid-column: 2 / 4;
```

<a id="r217"></a>

**r217 · `.special-cta`** — Base sin capa. [Fuente:1327](../../src/index.css#L1327)

```css
display: grid; grid-template-columns: 1fr 1fr; align-items: center; background: #24211e;
```

<a id="r218"></a>

**r218 · `.special-cta > div`** — Base sin capa. [Fuente:1333](../../src/index.css#L1333)

```css
padding: 8vw;
```

<a id="r219"></a>

**r219 · `.special-cta p`** — Base sin capa. [Fuente:1336](../../src/index.css#L1336)

```css
margin-bottom: 28px; color: rgba(255, 255, 255, 0.55);
```

<a id="r220"></a>

**r220 · `.special-cta > .image-placeholder`** — Base sin capa. [Fuente:1340](../../src/index.css#L1340)

```css
width: 100%; height: 650px;
```

<a id="r221"></a>

**r221 · `.se-page`** — Base sin capa. [Fuente:1345](../../src/index.css#L1345)

```css
overflow: clip; color: var(--caliza); background: var(--dark);
```

<a id="r222"></a>

**r222 · `.se-reveal`** — Base sin capa. [Fuente:1350](../../src/index.css#L1350)

```css
opacity: 0; transform: translateY(22px); transition: opacity 520ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
```

<a id="r223"></a>

**r223 · `.se-reveal.is-visible`** — Base sin capa. [Fuente:1357](../../src/index.css#L1357)

```css
opacity: 1; transform: translateY(0);
```

<a id="r224"></a>

**r224 · `.se-hero`** — Base sin capa. [Fuente:1361](../../src/index.css#L1361)

```css
position: relative; height: min(920px, 100svh); min-height: 720px; overflow: hidden; background-color: var(--dark); background-image: url("/assets/rsm-special-edition-cap.jpeg"); background-position: 60% center; background-repeat: no-repeat; background-size: cover;
```

<a id="r225"></a>

**r225 · `.se-hero > .image-placeholder`** — Base sin capa. [Fuente:1372](../../src/index.css#L1372)

```css
position: absolute; inset: 0;
```

<a id="r226"></a>

**r226 · `.se-hero__overlay`** — Base sin capa. [Fuente:1376](../../src/index.css#L1376)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(8, 7, 6, 0.86), rgba(8, 7, 6, 0.16) 72% );
```

<a id="r227"></a>

**r227 · `.se-hero__content`** — Base sin capa. [Fuente:1385](../../src/index.css#L1385)

```css
position: absolute; left: max(32px, calc((100vw - 1360px) / 2)); bottom: 25%; top: auto; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; max-width: 900px;
```

<a id="r228"></a>

**r228 · `.se-hero__content > p`** — Base sin capa. [Fuente:1396](../../src/index.css#L1396)

```css
margin-top: 26px; font-family: var(--serif); font-size: clamp(38px, 4.2vw, 64px); line-height: 1; text-transform: uppercase;
```

<a id="r229"></a>

**r229 · `.se-hero h1`** — Base sin capa. [Fuente:1403](../../src/index.css#L1403)

```css
margin: 0 0 30px; font-family: var(--serif); font-size: clamp(92px, 12vw, 120px); font-weight: 600; line-height: 0.72; letter-spacing: -0.055em; text-transform: uppercase;
```

<a id="r230"></a>

**r230 · `.se-hero__content > small`** — Base sin capa. [Fuente:1412](../../src/index.css#L1412)

```css
margin-bottom: 34px; color: rgba(255, 255, 255, 0.68); font-size: 15px; line-height: 1.6;
```

<a id="r231"></a>

**r231 · `.se-intro`** — Base sin capa. [Fuente:1418](../../src/index.css#L1418)

```css
padding-block: clamp(120px, 13vw, 190px); text-align: center; background: #141311;
```

<a id="r232"></a>

**r232 · `.se-intro__inner`** — Base sin capa. [Fuente:1423](../../src/index.css#L1423)

```css
display: grid; justify-items: center;
```

<a id="r233"></a>

**r233 · `.se-intro h2, .se-story__heading h2, .se-lifestyle h2, .se-product-cta h2`** — Base sin capa. [Fuente:1427](../../src/index.css#L1427)

```css
font-family: var(--serif); font-weight: 600; letter-spacing: -0.04em; text-transform: uppercase;
```

<a id="r234"></a>

**r234 · `.se-intro h2`** — Base sin capa. [Fuente:1436](../../src/index.css#L1436)

```css
margin: 20px 0 30px; font-size: clamp(58px, 7vw, 104px); line-height: 0.84;
```

<a id="r235"></a>

**r235 · `.se-intro p`** — Base sin capa. [Fuente:1441](../../src/index.css#L1441)

```css
max-width: 660px; color: rgba(255, 255, 255, 0.56); line-height: 1.75;
```

<a id="r236"></a>

**r236 · `.se-presentation`** — Base sin capa. [Fuente:1446](../../src/index.css#L1446)

```css
padding-block: clamp(100px, 11vw, 150px); background: var(--dark);
```

<a id="r237"></a>

**r237 · `.se-presentation__grid`** — Base sin capa. [Fuente:1450](../../src/index.css#L1450)

```css
display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px;
```

<a id="r238"></a>

**r238 · `.se-product-card`** — Base sin capa. [Fuente:1455](../../src/index.css#L1455)

```css
display: flex; flex-direction: column; align-items: flex-start;
```

<a id="r239"></a>

**r239 · `.se-product-card__media`** — Base sin capa. [Fuente:1460](../../src/index.css#L1460)

```css
display: grid; place-items: center; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; background: linear-gradient(180deg, #10110e 0%, #1d1916 100%);
```

<a id="r240"></a>

**r240 · `.se-product-card__media img`** — Base sin capa. [Fuente:1468](../../src/index.css#L1468)

```css
width: 100%; height: 100%; object-fit: contain; object-position: center; transition: transform 500ms ease;
```

<a id="r241"></a>

**r241 · `.se-product-card .image-placeholder, .se-detail .image-placeholder`** — Base sin capa. [Fuente:1475](../../src/index.css#L1475)

```css
transition: transform 500ms ease;
```

<a id="r242"></a>

**r242 · `.se-product-card:hover .se-product-card__media img, .se-product-card:hover .image-placeholder, .se-detail:hover .image-placeholder`** — Base sin capa. [Fuente:1479](../../src/index.css#L1479)

```css
transform: scale(1.02);
```

<a id="r243"></a>

**r243 · `.se-product-card h3`** — Base sin capa. [Fuente:1484](../../src/index.css#L1484)

```css
margin-top: 22px; font-family: var(--serif); font-size: clamp(22px, 1.85vw, 28px); line-height: 1.05; text-transform: uppercase;
```

<a id="r244"></a>

**r244 · `.se-product-card h3 button`** — Base sin capa. [Fuente:1491](../../src/index.css#L1491)

```css
color: inherit; font: inherit; text-align: left; text-transform: inherit;
```

<a id="r245"></a>

**r245 · `.se-product-card p`** — Base sin capa. [Fuente:1497](../../src/index.css#L1497)

```css
max-width: 380px; margin-top: 10px; color: rgba(255, 255, 255, 0.5); font-size: 13px; line-height: 1.65;
```

<a id="r246"></a>

**r246 · `.se-product-card .text-link`** — Base sin capa. [Fuente:1504](../../src/index.css#L1504)

```css
margin-top: 16px;
```

<a id="r247"></a>

**r247 · `.se-story`** — Base sin capa. [Fuente:1507](../../src/index.css#L1507)

```css
padding-bottom: clamp(120px, 13vw, 190px);
```

<a id="r248"></a>

**r248 · `.se-story__heading`** — Base sin capa. [Fuente:1510](../../src/index.css#L1510)

```css
display: grid; justify-items: center; padding-block: clamp(90px, 10vw, 140px); text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.13);
```

<a id="r249"></a>

**r249 · `.se-story__heading h2`** — Base sin capa. [Fuente:1517](../../src/index.css#L1517)

```css
margin-top: 20px; font-size: clamp(58px, 7vw, 100px); line-height: 0.84;
```

<a id="r250"></a>

**r250 · `.se-detail`** — Base sin capa. [Fuente:1522](../../src/index.css#L1522)

```css
display: grid; grid-template-columns: minmax(0, 1.22fr) minmax(0, 1fr); grid-template-areas: "media copy"; align-items: center; gap: clamp(50px, 8vw, 120px); padding-block: clamp(55px, 6vw, 85px); border-top: 1px solid rgba(255, 255, 255, 0.1);
```

<a id="r251"></a>

**r251 · `.se-detail--reverse`** — Base sin capa. [Fuente:1531](../../src/index.css#L1531)

```css
grid-template-columns: minmax(0, 1fr) minmax(0, 1.22fr); grid-template-areas: "copy media";
```

<a id="r252"></a>

**r252 · `.se-detail__media`** — Base sin capa. [Fuente:1535](../../src/index.css#L1535)

```css
grid-area: media; aspect-ratio: 4 / 5; overflow: hidden;
```

<a id="r253"></a>

**r253 · `.se-detail__copy`** — Base sin capa. [Fuente:1540](../../src/index.css#L1540)

```css
grid-area: copy; max-width: 510px;
```

<a id="r254"></a>

**r254 · `.se-detail__copy h3`** — Base sin capa. [Fuente:1544](../../src/index.css#L1544)

```css
margin: 18px 0 24px; font-family: var(--serif); font-size: clamp(45px, 5vw, 74px); line-height: 0.87; text-transform: uppercase;
```

<a id="r255"></a>

**r255 · `.se-detail__copy p`** — Base sin capa. [Fuente:1551](../../src/index.css#L1551)

```css
color: rgba(255, 255, 255, 0.56); line-height: 1.75;
```

<a id="r256"></a>

**r256 · `.se-lifestyle`** — Base sin capa. [Fuente:1555](../../src/index.css#L1555)

```css
position: relative; min-height: min(760px, 75vw); overflow: hidden; background: #11100f;
```

<a id="r257"></a>

**r257 · `.se-lifestyle > .image-placeholder`** — Base sin capa. [Fuente:1561](../../src/index.css#L1561)

```css
position: absolute; inset: 0;
```

<a id="r258"></a>

**r258 · `.se-lifestyle__overlay`** — Base sin capa. [Fuente:1565](../../src/index.css#L1565)

```css
position: absolute; inset: 0; background: linear-gradient( 0deg, rgba(8, 7, 6, 0.86), rgba(8, 7, 6, 0.14) 72% );
```

<a id="r259"></a>

**r259 · `.se-lifestyle__copy`** — Base sin capa. [Fuente:1574](../../src/index.css#L1574)

```css
position: relative; z-index: 2; display: flex; flex-direction: column; justify-content: end; min-height: min(760px, 75vw); padding-bottom: clamp(70px, 8vw, 110px);
```

<a id="r260"></a>

**r260 · `.se-lifestyle h2`** — Base sin capa. [Fuente:1583](../../src/index.css#L1583)

```css
max-width: 900px; font-size: clamp(58px, 7vw, 102px); line-height: 0.84;
```

<a id="r261"></a>

**r261 · `.se-lifestyle p`** — Base sin capa. [Fuente:1588](../../src/index.css#L1588)

```css
margin-top: 22px; color: rgba(255, 255, 255, 0.66); font-size: 17px;
```

<a id="r262"></a>

**r262 · `.se-product-cta`** — Base sin capa. [Fuente:1593](../../src/index.css#L1593)

```css
padding-block: clamp(110px, 12vw, 170px); background: #24211e;
```

<a id="r263"></a>

**r263 · `.se-product-cta__inner`** — Base sin capa. [Fuente:1597](../../src/index.css#L1597)

```css
display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); align-items: stretch; gap: 0; background: #181715;
```

<a id="r264"></a>

**r264 · `.se-product-cta__media`** — Base sin capa. [Fuente:1604](../../src/index.css#L1604)

```css
min-height: 680px;
```

<a id="r265"></a>

**r265 · `.se-product-cta__copy`** — Base sin capa. [Fuente:1607](../../src/index.css#L1607)

```css
display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: clamp(48px, 7vw, 100px);
```

<a id="r266"></a>

**r266 · `.se-product-cta h2`** — Base sin capa. [Fuente:1614](../../src/index.css#L1614)

```css
margin-top: 18px; font-size: clamp(68px, 8vw, 112px); line-height: 0.76;
```

<a id="r267"></a>

**r267 · `.se-product-cta__copy > small`** — Base sin capa. [Fuente:1619](../../src/index.css#L1619)

```css
margin-top: 17px; color: #c49270; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
```

<a id="r268"></a>

**r268 · `.se-product-cta__copy > p`** — Base sin capa. [Fuente:1627](../../src/index.css#L1627)

```css
max-width: 420px; margin: 30px 0 34px; color: rgba(255, 255, 255, 0.56); line-height: 1.7;
```

<a id="r269"></a>

**r269 · `.pdp--dark`** — Base sin capa. [Fuente:1634](../../src/index.css#L1634)

```css
padding-top: 120px;
```

<a id="r270"></a>

**r270 · `.product-gallery--dark .image-placeholder`** — Base sin capa. [Fuente:1637](../../src/index.css#L1637)

```css
background: #252321;
```

<a id="r271"></a>

**r271 · `.product-info--dark`** — Base sin capa. [Fuente:1640](../../src/index.css#L1640)

```css
color: white;
```

<a id="r272"></a>

**r272 · `.product-info--dark .breadcrumbs, .product-info--dark .product-info__price small, .product-info--dark .availability, .product-info--dark .product-specs dt`** — Base sin capa. [Fuente:1643](../../src/index.css#L1643)

```css
color: rgba(255, 255, 255, 0.5);
```

<a id="r273"></a>

**r273 · `.product-info--dark .breadcrumbs button:hover`** — Base sin capa. [Fuente:1649](../../src/index.css#L1649)

```css
color: var(--caliza);
```

<a id="r274"></a>

**r274 · `.product-info--dark .product-info__price, .product-info--dark .product-specs, .product-info--dark .accordion, .quantity--dark`** — Base sin capa. [Fuente:1652](../../src/index.css#L1652)

```css
border-color: rgba(255, 255, 255, 0.18);
```

<a id="r275"></a>

**r275 · `.product-info--dark .swatches button.is-selected, .product-info--dark .swatch-dot.is-selected`** — Base sin capa. [Fuente:1658](../../src/index.css#L1658)

```css
box-shadow: 0 0 0 2px var(--dark), 0 0 0 3px white;
```

<a id="r276"></a>

**r276 · `.button--caliza`** — Base sin capa. [Fuente:1664](../../src/index.css#L1664)

```css
background: var(--caliza); border-color: var(--caliza); color: var(--dark);
```

<a id="r277"></a>

**r277 · `.accordion--dark`** — Base sin capa. [Fuente:1669](../../src/index.css#L1669)

```css
border-color: rgba(255, 255, 255, 0.18);
```

<a id="r278"></a>

**r278 · `.accordion--dark .accordion__content`** — Base sin capa. [Fuente:1672](../../src/index.css#L1672)

```css
color: rgba(255, 255, 255, 0.54);
```

<a id="r279"></a>

**r279 · `.nocturna-story`** — Base sin capa. [Fuente:1675](../../src/index.css#L1675)

```css
display: grid; grid-template-columns: 0.8fr 1.2fr; align-items: stretch; background: #24211e;
```

<a id="r280"></a>

**r280 · `.nocturna-story > div`** — Base sin capa. [Fuente:1681](../../src/index.css#L1681)

```css
display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 8vw;
```

<a id="r281"></a>

**r281 · `.nocturna-story > .image-placeholder`** — Base sin capa. [Fuente:1688](../../src/index.css#L1688)

```css
width: 100%; height: 700px;
```

<a id="r282"></a>

**r282 · `.nocturna-story p`** — Base sin capa. [Fuente:1692](../../src/index.css#L1692)

```css
color: rgba(255, 255, 255, 0.58);
```

<a id="r283"></a>

**r283 · `.story-hero`** — Base sin capa. [Fuente:1696](../../src/index.css#L1696)

```css
position: relative; height: min(860px, 100svh); min-height: 720px; color: var(--caliza); background-image: url("/assets/story-hero.webp"); background-position: 52% center; background-size: cover;
```

<a id="r284"></a>

**r284 · `.story-hero__shade`** — Base sin capa. [Fuente:1705](../../src/index.css#L1705)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(15, 11, 8, 0.72) 0%, rgba(15, 11, 8, 0.42) 27%, transparent 61% );
```

<a id="r285"></a>

**r285 · `.story-hero__content`** — Base sin capa. [Fuente:1715](../../src/index.css#L1715)

```css
position: absolute; right: 0; bottom: 12%; left: 0;
```

<a id="r286"></a>

**r286 · `.story-hero h1`** — Base sin capa. [Fuente:1721](../../src/index.css#L1721)

```css
max-width: 460px; margin: 18px 0 30px; font-size: clamp(48px, 4vw, 60px); font-weight: 600; line-height: 0.9; letter-spacing: -0.035em;
```

<a id="r287"></a>

**r287 · `.story-hero__rule, .story-split__rule, .territory-editorial__rule`** — Base sin capa. [Fuente:1729](../../src/index.css#L1729)

```css
display: block; width: 58px; height: 1px; margin-bottom: 20px; background: currentColor; opacity: 0.72;
```

<a id="r288"></a>

**r288 · `.story-hero__cta`** — Base sin capa. [Fuente:1739](../../src/index.css#L1739)

```css
padding-block: 8px; color: var(--caliza); font-size: 11px; font-weight: 600; letter-spacing: 0.15em; border-bottom: 1px solid rgba(242, 232, 218, 0.7);
```

<a id="r289"></a>

**r289 · `.story-hero__cta:focus-visible`** — Base sin capa. [Fuente:1747](../../src/index.css#L1747)

```css
outline: 2px solid var(--caliza); outline-offset: 5px;
```

<a id="r290"></a>

**r290 · `.story-split`** — Base sin capa. [Fuente:1751](../../src/index.css#L1751)

```css
display: grid; grid-template-columns: minmax(480px, 52fr) minmax(0, 48fr); grid-template-areas: "copy media"; min-height: 620px; background: var(--caliza);
```

<a id="r291"></a>

**r291 · `.story-split--reverse`** — Base sin capa. [Fuente:1758](../../src/index.css#L1758)

```css
grid-template-columns: minmax(0, 48fr) minmax(480px, 52fr); grid-template-areas: "media copy"; background: var(--paper);
```

<a id="r292"></a>

**r292 · `.story-split__copy`** — Base sin capa. [Fuente:1763](../../src/index.css#L1763)

```css
grid-area: copy; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; min-width: 0; padding: clamp(44px, 4.4vw, 72px);
```

<a id="r293"></a>

**r293 · `.story-split__copy h2`** — Base sin capa. [Fuente:1772](../../src/index.css#L1772)

```css
font-family: var(--serif); font-size: clamp(40px, 3.35vw, 54px); font-weight: 600; line-height: 0.92; letter-spacing: -0.035em; text-transform: uppercase;
```

<a id="r294"></a>

**r294 · `.story-split__copy h2`** — @media (min-width: 1120px). [Fuente:1781](../../src/index.css#L1781)

```css
white-space: nowrap;
```

<a id="r295"></a>

**r295 · `.territory-gallery__heading h2`** — Base sin capa. [Fuente:1785](../../src/index.css#L1785)

```css
font-family: var(--serif); font-size: clamp(48px, 4.8vw, 72px); font-weight: 600; line-height: 0.9; letter-spacing: -0.035em; text-transform: uppercase;
```

<a id="r296"></a>

**r296 · `.story-split__copy .eyebrow`** — Base sin capa. [Fuente:1793](../../src/index.css#L1793)

```css
margin-bottom: 18px; color: var(--arcilla);
```

<a id="r297"></a>

**r297 · `.story-split__rule`** — Base sin capa. [Fuente:1797](../../src/index.css#L1797)

```css
margin-bottom: 24px; color: var(--arcilla);
```

<a id="r298"></a>

**r298 · `.story-split__copy p`** — Base sin capa. [Fuente:1801](../../src/index.css#L1801)

```css
max-width: 480px; margin-top: 30px; color: #5f5750; line-height: 1.75;
```

<a id="r299"></a>

**r299 · `.story-split__media`** — Base sin capa. [Fuente:1807](../../src/index.css#L1807)

```css
grid-area: media; min-width: 0; overflow: hidden;
```

<a id="r300"></a>

**r300 · `.story-split__media img`** — Base sin capa. [Fuente:1812](../../src/index.css#L1812)

```css
width: 100%; height: 100%; object-fit: cover;
```

<a id="r301"></a>

**r301 · `.story-split--origin .story-split__media img`** — Base sin capa. [Fuente:1817](../../src/index.css#L1817)

```css
object-position: 54% center;
```

<a id="r302"></a>

**r302 · `.story-split--city .story-split__media img`** — Base sin capa. [Fuente:1820](../../src/index.css#L1820)

```css
object-position: 50% center;
```

<a id="r303"></a>

**r303 · `.territory-editorial`** — Base sin capa. [Fuente:1823](../../src/index.css#L1823)

```css
display: grid; grid-template-columns: 40fr 30fr 30fr; gap: 0; min-height: clamp(380px, 29.5vw, 470px); background: var(--paper);
```

<a id="r304"></a>

**r304 · `.territory-editorial > *`** — Base sin capa. [Fuente:1830](../../src/index.css#L1830)

```css
min-width: 0; min-height: 0;
```

<a id="r305"></a>

**r305 · `.territory-editorial__visual`** — Base sin capa. [Fuente:1834](../../src/index.css#L1834)

```css
overflow: hidden; background: #24211e;
```

<a id="r306"></a>

**r306 · `.territory-editorial__visual img`** — Base sin capa. [Fuente:1838](../../src/index.css#L1838)

```css
width: 100%; height: 100%; object-fit: cover;
```

<a id="r307"></a>

**r307 · `.territory-editorial__visual--landscape img`** — Base sin capa. [Fuente:1843](../../src/index.css#L1843)

```css
object-position: 52% center;
```

<a id="r308"></a>

**r308 · `.territory-editorial__visual--architecture img`** — Base sin capa. [Fuente:1846](../../src/index.css#L1846)

```css
object-position: 50% center;
```

<a id="r309"></a>

**r309 · `.territory-editorial__visual--door img`** — Base sin capa. [Fuente:1849](../../src/index.css#L1849)

```css
object-position: center;
```

<a id="r310"></a>

**r310 · `.territory-editorial__copy`** — Base sin capa. [Fuente:1852](../../src/index.css#L1852)

```css
display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: clamp(32px, 3.4vw, 52px); color: var(--caliza); background: var(--dark);
```

<a id="r311"></a>

**r311 · `.territory-editorial__rule`** — Base sin capa. [Fuente:1861](../../src/index.css#L1861)

```css
margin-bottom: 26px;
```

<a id="r312"></a>

**r312 · `.territory-editorial__copy h2`** — Base sin capa. [Fuente:1864](../../src/index.css#L1864)

```css
font-family: var(--serif); font-size: clamp(38px, 3.1vw, 50px); font-weight: 600; line-height: 0.88; letter-spacing: -0.035em;
```

<a id="r313"></a>

**r313 · `.territory-editorial__copy p`** — Base sin capa. [Fuente:1871](../../src/index.css#L1871)

```css
max-width: 360px; margin-top: 30px; color: rgba(242, 232, 218, 0.76); line-height: 1.7;
```

<a id="r314"></a>

**r314 · `.territory-editorial`** — @media (max-width: 1100px). [Fuente:1879](../../src/index.css#L1879)

```css
grid-template-columns: 40fr 30fr 30fr;
```

<a id="r315"></a>

**r315 · `.territory-editorial > *`** — @media (max-width: 1100px). [Fuente:1882](../../src/index.css#L1882)

```css
min-height: 380px;
```

<a id="r316"></a>

**r316 · `.territory-gallery`** — Base sin capa. [Fuente:1887](../../src/index.css#L1887)

```css
padding-block: clamp(100px, 10vw, 150px); background: var(--paper);
```

<a id="r317"></a>

**r317 · `.territory-gallery__heading`** — Base sin capa. [Fuente:1891](../../src/index.css#L1891)

```css
display: grid; grid-template-columns: 1fr 1fr; align-items: end; gap: 60px; margin-bottom: 60px;
```

<a id="r318"></a>

**r318 · `.territory-gallery__heading p`** — Base sin capa. [Fuente:1898](../../src/index.css#L1898)

```css
max-width: 560px; justify-self: end; color: #5f5750; line-height: 1.7;
```

<a id="r319"></a>

**r319 · `.territory-grid`** — Base sin capa. [Fuente:1904](../../src/index.css#L1904)

```css
display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px;
```

<a id="r320"></a>

**r320 · `.territory-card`** — Base sin capa. [Fuente:1909](../../src/index.css#L1909)

```css
position: relative; display: block; width: 100%; aspect-ratio: 3 / 4; overflow: hidden; color: white; text-align: left; background: var(--sierra);
```

<a id="r321"></a>

**r321 · `.territory-card:focus-visible`** — Base sin capa. [Fuente:1919](../../src/index.css#L1919)

```css
outline: 2px solid var(--arcilla); outline-offset: 5px;
```

<a id="r322"></a>

**r322 · `.territory-card .image-placeholder`** — Base sin capa. [Fuente:1923](../../src/index.css#L1923)

```css
position: absolute; inset: 0; width: 100%; height: 100%;
```

<a id="r323"></a>

**r323 · `.territory-card__overlay`** — Base sin capa. [Fuente:1929](../../src/index.css#L1929)

```css
position: absolute; z-index: 2; inset: 0; background: linear-gradient( to top, rgba(15, 13, 12, 0.94), rgba(15, 13, 12, 0.2) 70% ); opacity: 0; transition: opacity 360ms ease;
```

<a id="r324"></a>

**r324 · `.territory-card__panel`** — Base sin capa. [Fuente:1941](../../src/index.css#L1941)

```css
position: absolute; z-index: 3; right: 0; bottom: 0; left: 0; display: flex; flex-direction: column; gap: 10px; padding: 28px 72px 28px 28px; opacity: 0; transform: translateY(100%); transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 280ms ease;
```

<a id="r325"></a>

**r325 · `.territory-card__panel b`** — Base sin capa. [Fuente:1957](../../src/index.css#L1957)

```css
font-family: var(--serif); font-size: clamp(28px, 2.4vw, 38px); font-weight: 600; line-height: 0.95; text-transform: uppercase;
```

<a id="r326"></a>

**r326 · `.territory-card__panel > span`** — Base sin capa. [Fuente:1964](../../src/index.css#L1964)

```css
max-width: 280px; color: rgba(255, 255, 255, 0.76); font-size: 12px; line-height: 1.55;
```

<a id="r327"></a>

**r327 · `.territory-card__toggle`** — Base sin capa. [Fuente:1970](../../src/index.css#L1970)

```css
position: absolute; z-index: 4; right: 18px; bottom: 18px; display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid rgba(255, 255, 255, 0.58); border-radius: 50%; color: white; background: rgba(25, 23, 22, 0.35); backdrop-filter: blur(8px);
```

<a id="r328"></a>

**r328 · `.territory-card:hover .territory-card__overlay, .territory-card:focus-visible .territory-card__overlay, .territory-card.is-expanded .territory-card__overlay`** — Base sin capa. [Fuente:1985](../../src/index.css#L1985)

```css
opacity: 1;
```

<a id="r329"></a>

**r329 · `.territory-card:hover .territory-card__panel, .territory-card:focus-visible .territory-card__panel, .territory-card.is-expanded .territory-card__panel`** — Base sin capa. [Fuente:1990](../../src/index.css#L1990)

```css
opacity: 1; transform: translateY(0);
```

<a id="r330"></a>

**r330 · `.territory-card__toggle`** — @media (hover: hover) and (pointer: fine). [Fuente:1997](../../src/index.css#L1997)

```css
opacity: 0; transition: opacity 240ms ease;
```

<a id="r331"></a>

**r331 · `.territory-card:hover .territory-card__toggle, .territory-card:focus-visible .territory-card__toggle, .territory-card.is-expanded .territory-card__toggle`** — @media (hover: hover) and (pointer: fine). [Fuente:2001](../../src/index.css#L2001)

```css
opacity: 1;
```

<a id="r332"></a>

**r332 · `.system-page`** — Base sin capa. [Fuente:2008](../../src/index.css#L2008)

```css
padding-top: 60px;
```

<a id="r333"></a>

**r333 · `.system-hero`** — Base sin capa. [Fuente:2011](../../src/index.css#L2011)

```css
padding-block: 100px 130px;
```

<a id="r334"></a>

**r334 · `.system-hero h1, .comparison__hero h1`** — Base sin capa. [Fuente:2014](../../src/index.css#L2014)

```css
margin: 24px 0; font-family: var(--serif); font-size: clamp(64px, 8vw, 118px); line-height: 0.8; letter-spacing: -0.045em; text-transform: uppercase;
```

<a id="r335"></a>

**r335 · `.system-hero p, .comparison__hero p`** — Base sin capa. [Fuente:2023](../../src/index.css#L2023)

```css
max-width: 650px; color: #645c55; font-size: 18px; line-height: 1.65;
```

<a id="r336"></a>

**r336 · `.system-section`** — Base sin capa. [Fuente:2030](../../src/index.css#L2030)

```css
padding-block: 90px; border-top: 1px solid var(--line);
```

<a id="r337"></a>

**r337 · `.token-grid`** — Base sin capa. [Fuente:2034](../../src/index.css#L2034)

```css
display: grid; grid-template-columns: repeat(6, 1fr); margin-top: 50px;
```

<a id="r338"></a>

**r338 · `.token-grid article`** — Base sin capa. [Fuente:2039](../../src/index.css#L2039)

```css
display: flex; flex-direction: column; justify-content: space-between; aspect-ratio: 0.72; padding: 18px;
```

<a id="r339"></a>

**r339 · `.token-grid span`** — Base sin capa. [Fuente:2046](../../src/index.css#L2046)

```css
font-family: var(--serif); font-size: 24px; text-transform: uppercase;
```

<a id="r340"></a>

**r340 · `.token-grid small`** — Base sin capa. [Fuente:2051](../../src/index.css#L2051)

```css
font-size: 10px; letter-spacing: 0.12em;
```

<a id="r341"></a>

**r341 · `.type-specimen__display, .type-specimen__body`** — Base sin capa. [Fuente:2055](../../src/index.css#L2055)

```css
margin-top: 65px;
```

<a id="r342"></a>

**r342 · `.type-specimen__display span, .type-specimen__body span`** — Base sin capa. [Fuente:2059](../../src/index.css#L2059)

```css
color: #817970; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
```

<a id="r343"></a>

**r343 · `.type-specimen__display p`** — Base sin capa. [Fuente:2066](../../src/index.css#L2066)

```css
font-family: var(--serif); font-size: clamp(60px, 9vw, 140px); line-height: 0.85;
```

<a id="r344"></a>

**r344 · `.type-specimen__body p`** — Base sin capa. [Fuente:2071](../../src/index.css#L2071)

```css
max-width: 760px; font-size: 26px; line-height: 1.5;
```

<a id="r345"></a>

**r345 · `.component-board`** — Base sin capa. [Fuente:2076](../../src/index.css#L2076)

```css
display: grid; grid-template-columns: 1fr 1fr; margin-top: 55px;
```

<a id="r346"></a>

**r346 · `.component-board > div`** — Base sin capa. [Fuente:2081](../../src/index.css#L2081)

```css
display: flex; flex-direction: column; align-items: flex-start; gap: 28px; min-height: 520px; padding: 55px;
```

<a id="r347"></a>

**r347 · `.component-board__light`** — Base sin capa. [Fuente:2089](../../src/index.css#L2089)

```css
background: var(--caliza);
```

<a id="r348"></a>

**r348 · `.component-board__dark`** — Base sin capa. [Fuente:2092](../../src/index.css#L2092)

```css
color: white; background: var(--dark);
```

<a id="r349"></a>

**r349 · `.component-board__dark .accordion`** — Base sin capa. [Fuente:2096](../../src/index.css#L2096)

```css
width: 100%;
```

<a id="r350"></a>

**r350 · `.component-board__light .accordion`** — Base sin capa. [Fuente:2099](../../src/index.css#L2099)

```css
width: 100%;
```

<a id="r351"></a>

**r351 · `.component-label`** — Base sin capa. [Fuente:2102](../../src/index.css#L2102)

```css
font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
```

<a id="r352"></a>

**r352 · `.feasibility`** — Base sin capa. [Fuente:2107](../../src/index.css#L2107)

```css
display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin: 55px 0 45px; background: var(--line);
```

<a id="r353"></a>

**r353 · `.feasibility article`** — Base sin capa. [Fuente:2114](../../src/index.css#L2114)

```css
min-height: 220px; padding: 28px; background: var(--paper);
```

<a id="r354"></a>

**r354 · `.feasibility b`** — Base sin capa. [Fuente:2119](../../src/index.css#L2119)

```css
font-family: var(--serif); font-size: 27px; text-transform: uppercase;
```

<a id="r355"></a>

**r355 · `.feasibility p`** — Base sin capa. [Fuente:2124](../../src/index.css#L2124)

```css
margin-top: 24px; color: #625a53; font-size: 13px; line-height: 1.6;
```

<a id="r356"></a>

**r356 · `.care-page`** — Base sin capa. [Fuente:2131](../../src/index.css#L2131)

```css
overflow: clip; background: var(--paper);
```

<a id="r357"></a>

**r357 · `.care-hero`** — Base sin capa. [Fuente:2135](../../src/index.css#L2135)

```css
position: relative; height: min(860px, 100svh); min-height: 690px; overflow: hidden; color: white; background: var(--sierra);
```

<a id="r358"></a>

**r358 · `.care-hero > .image-placeholder`** — Base sin capa. [Fuente:2143](../../src/index.css#L2143)

```css
position: absolute; inset: 0;
```

<a id="r359"></a>

**r359 · `.care-hero__overlay`** — Base sin capa. [Fuente:2147](../../src/index.css#L2147)

```css
position: absolute; inset: 0; background: linear-gradient( 90deg, rgba(16, 14, 12, 0.76), rgba(16, 14, 12, 0.08) 72% );
```

<a id="r360"></a>

**r360 · `.care-hero__content`** — Base sin capa. [Fuente:2156](../../src/index.css#L2156)

```css
position: absolute; left: max(32px, calc((100vw - 1360px) / 2)); bottom: 13%; max-width: 940px;
```

<a id="r361"></a>

**r361 · `.care-hero__content > span`** — Base sin capa. [Fuente:2162](../../src/index.css#L2162)

```css
display: block; margin-bottom: 22px; color: #e9d3bd; font-size: 11px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
```

<a id="r362"></a>

**r362 · `.care-hero h1`** — Base sin capa. [Fuente:2171](../../src/index.css#L2171)

```css
font-family: var(--serif); font-size: clamp(64px, 8vw, 120px); font-weight: 600; line-height: 0.78; letter-spacing: -0.045em; text-transform: uppercase;
```

<a id="r363"></a>

**r363 · `.care-hero__continue`** — Base sin capa. [Fuente:2179](../../src/index.css#L2179)

```css
position: absolute; right: 36px; bottom: 34px; display: flex; align-items: center; gap: 16px; color: rgba(255, 255, 255, 0.82); font-size: 9px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
```

<a id="r364"></a>

**r364 · `.care-hero__continue svg`** — Base sin capa. [Fuente:2192](../../src/index.css#L2192)

```css
transform: rotate(90deg);
```

<a id="r365"></a>

**r365 · `.care-intro`** — Base sin capa. [Fuente:2195](../../src/index.css#L2195)

```css
padding-top: clamp(100px, 11vw, 160px); text-align: center; background: var(--caliza);
```

<a id="r366"></a>

**r366 · `.care-intro .shell`** — Base sin capa. [Fuente:2200](../../src/index.css#L2200)

```css
display: grid; justify-items: center;
```

<a id="r367"></a>

**r367 · `.care-intro h2, .care-everyday h2, .care-storage h2, .care-information h2, .care-faq h2, .care-cta h2, .care-story__heading h2`** — Base sin capa. [Fuente:2204](../../src/index.css#L2204)

```css
font-family: var(--serif); font-size: clamp(50px, 6.3vw, 94px); font-weight: 600; line-height: 0.86; letter-spacing: -0.04em; text-transform: uppercase;
```

<a id="r368"></a>

**r368 · `.care-intro h2`** — Base sin capa. [Fuente:2218](../../src/index.css#L2218)

```css
max-width: 1050px; margin: 20px auto 30px;
```

<a id="r369"></a>

**r369 · `.care-intro .shell > p`** — Base sin capa. [Fuente:2222](../../src/index.css#L2222)

```css
max-width: 680px; color: #5d554e; line-height: 1.75;
```

<a id="r370"></a>

**r370 · `.care-intro__marquee`** — Base sin capa. [Fuente:2227](../../src/index.css#L2227)

```css
overflow: hidden; margin-top: clamp(80px, 9vw, 130px); padding-block: 26px; border-block: 1px solid rgba(25, 23, 22, 0.2);
```

<a id="r371"></a>

**r371 · `.care-intro__marquee > div`** — Base sin capa. [Fuente:2233](../../src/index.css#L2233)

```css
display: flex; width: max-content; animation: care-marquee 24s linear infinite;
```

<a id="r372"></a>

**r372 · `.care-intro__marquee span`** — Base sin capa. [Fuente:2238](../../src/index.css#L2238)

```css
padding-right: 8vw; font-family: var(--serif); font-size: clamp(28px, 3vw, 46px); line-height: 1; letter-spacing: 0.02em; white-space: nowrap; text-transform: uppercase;
```

<a id="r373"></a>

**r373 · `to`** — @keyframes care-marquee. [Fuente:2248](../../src/index.css#L2248)

```css
transform: translateX(-50%);
```

<a id="r374"></a>

**r374 · `.care-everyday`** — Base sin capa. [Fuente:2252](../../src/index.css#L2252)

```css
background: var(--paper);
```

<a id="r375"></a>

**r375 · `.care-everyday__inner, .care-storage__inner`** — Base sin capa. [Fuente:2255](../../src/index.css#L2255)

```css
display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 3fr); align-items: center; gap: clamp(48px, 7vw, 110px); padding-block: clamp(100px, 11vw, 160px);
```

<a id="r376"></a>

**r376 · `.care-everyday__copy, .care-storage__copy`** — Base sin capa. [Fuente:2263](../../src/index.css#L2263)

```css
max-width: 520px;
```

<a id="r377"></a>

**r377 · `.care-everyday h2, .care-storage h2`** — Base sin capa. [Fuente:2267](../../src/index.css#L2267)

```css
margin: 18px 0 28px; font-size: clamp(48px, 5.2vw, 78px);
```

<a id="r378"></a>

**r378 · `.care-everyday__copy > p, .care-storage__copy > p`** — Base sin capa. [Fuente:2272](../../src/index.css#L2272)

```css
color: #5d554e; line-height: 1.75;
```

<a id="r379"></a>

**r379 · `.care-everyday ul`** — Base sin capa. [Fuente:2277](../../src/index.css#L2277)

```css
display: grid; gap: 0; margin-top: 36px; border-top: 1px solid var(--line);
```

<a id="r380"></a>

**r380 · `.care-everyday li`** — Base sin capa. [Fuente:2283](../../src/index.css#L2283)

```css
position: relative; padding: 18px 0 18px 28px; border-bottom: 1px solid var(--line); font-size: 13px; line-height: 1.5;
```

<a id="r381"></a>

**r381 · `.care-everyday li::before`** — Base sin capa. [Fuente:2290](../../src/index.css#L2290)

```css
content: ""; position: absolute; top: 24px; left: 2px; width: 7px; height: 7px; border-radius: 50%; background: var(--arcilla);
```

<a id="r382"></a>

**r382 · `.care-everyday__media, .care-storage__media`** — Base sin capa. [Fuente:2300](../../src/index.css#L2300)

```css
aspect-ratio: 6 / 5; overflow: hidden;
```

<a id="r383"></a>

**r383 · `.care-story`** — Base sin capa. [Fuente:2305](../../src/index.css#L2305)

```css
padding-block: clamp(110px, 11vw, 170px); color: white; background: var(--dark);
```

<a id="r384"></a>

**r384 · `.care-story__heading`** — Base sin capa. [Fuente:2310](../../src/index.css#L2310)

```css
margin-bottom: 80px;
```

<a id="r385"></a>

**r385 · `.care-story__heading h2`** — Base sin capa. [Fuente:2313](../../src/index.css#L2313)

```css
max-width: 900px; margin: 18px 0 24px;
```

<a id="r386"></a>

**r386 · `.care-story__heading > p`** — Base sin capa. [Fuente:2317](../../src/index.css#L2317)

```css
color: rgba(255, 255, 255, 0.58);
```

<a id="r387"></a>

**r387 · `.care-story__layout`** — Base sin capa. [Fuente:2320](../../src/index.css#L2320)

```css
display: grid; grid-template-columns: minmax(0, 0.82fr) minmax(0, 1fr); gap: clamp(60px, 8vw, 130px); align-items: start;
```

<a id="r388"></a>

**r388 · `.care-story__visual`** — Base sin capa. [Fuente:2326](../../src/index.css#L2326)

```css
position: sticky; top: 94px; display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 24px;
```

<a id="r389"></a>

**r389 · `.care-story__illustration`** — Base sin capa. [Fuente:2334](../../src/index.css#L2334)

```css
display: grid; place-items: center; aspect-ratio: 1; color: var(--dark); background: var(--caliza);
```

<a id="r390"></a>

**r390 · `.care-illustration`** — Base sin capa. [Fuente:2341](../../src/index.css#L2341)

```css
width: 92%; height: auto; overflow: visible;
```

<a id="r391"></a>

**r391 · `.care-illustration__base, .care-illustration__action`** — Base sin capa. [Fuente:2346](../../src/index.css#L2346)

```css
stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; vector-effect: non-scaling-stroke;
```

<a id="r392"></a>

**r392 · `.care-illustration__base`** — Base sin capa. [Fuente:2354](../../src/index.css#L2354)

```css
opacity: 0.94;
```

<a id="r393"></a>

**r393 · `.care-illustration__action`** — Base sin capa. [Fuente:2357](../../src/index.css#L2357)

```css
color: var(--estirpe); animation: care-illustration-in 420ms cubic-bezier(0.22, 1, 0.36, 1);
```

<a id="r394"></a>

**r394 · `from`** — @keyframes care-illustration-in. [Fuente:2362](../../src/index.css#L2362)

```css
opacity: 0; transform: translateY(8px);
```

<a id="r395"></a>

**r395 · `to`** — @keyframes care-illustration-in. [Fuente:2366](../../src/index.css#L2366)

```css
opacity: 1; transform: translateY(0);
```

<a id="r396"></a>

**r396 · `.care-story__nav`** — Base sin capa. [Fuente:2371](../../src/index.css#L2371)

```css
display: flex; flex-direction: column; align-items: center; gap: 22px; padding-bottom: 6px;
```

<a id="r397"></a>

**r397 · `.care-story__nav > span`** — Base sin capa. [Fuente:2378](../../src/index.css#L2378)

```css
color: rgba(255, 255, 255, 0.56); font-size: 9px; letter-spacing: 0.16em; writing-mode: vertical-rl;
```

<a id="r398"></a>

**r398 · `.care-story__nav > div`** — Base sin capa. [Fuente:2384](../../src/index.css#L2384)

```css
display: grid; gap: 7px;
```

<a id="r399"></a>

**r399 · `.care-story__nav button`** — Base sin capa. [Fuente:2388](../../src/index.css#L2388)

```css
display: grid; place-items: center; width: 34px; height: 34px; border: 1px solid rgba(255, 255, 255, 0.17); color: rgba(255, 255, 255, 0.45); font-size: 9px; transition: 300ms ease;
```

<a id="r400"></a>

**r400 · `.care-story__nav button:hover, .care-story__nav button.is-active`** — Base sin capa. [Fuente:2398](../../src/index.css#L2398)

```css
color: var(--dark); background: var(--caliza); border-color: var(--caliza);
```

<a id="r401"></a>

**r401 · `.care-step`** — Base sin capa. [Fuente:2404](../../src/index.css#L2404)

```css
display: grid; align-items: center; min-height: 70vh; border-top: 1px solid rgba(255, 255, 255, 0.14); opacity: 0.3; transform: translateY(20px); transition: opacity 400ms ease, transform 400ms ease;
```

<a id="r402"></a>

**r402 · `.care-step.is-active`** — Base sin capa. [Fuente:2415](../../src/index.css#L2415)

```css
opacity: 1; transform: translateY(0);
```

<a id="r403"></a>

**r403 · `.care-step > button`** — Base sin capa. [Fuente:2419](../../src/index.css#L2419)

```css
display: grid; grid-template-columns: 70px 1fr; gap: 24px; width: 100%; padding-block: 58px; color: inherit; text-align: left;
```

<a id="r404"></a>

**r404 · `.care-step > button > span`** — Base sin capa. [Fuente:2428](../../src/index.css#L2428)

```css
color: #c49270; font-family: var(--serif); font-size: 38px;
```

<a id="r405"></a>

**r405 · `.care-step h3`** — Base sin capa. [Fuente:2433](../../src/index.css#L2433)

```css
font-family: var(--serif); font-size: clamp(38px, 4vw, 60px); line-height: 0.92; text-transform: uppercase;
```

<a id="r406"></a>

**r406 · `.care-step p`** — Base sin capa. [Fuente:2439](../../src/index.css#L2439)

```css
max-width: 600px; margin-top: 22px; color: rgba(255, 255, 255, 0.62); line-height: 1.75;
```

<a id="r407"></a>

**r407 · `.care-story__note`** — Base sin capa. [Fuente:2445](../../src/index.css#L2445)

```css
padding: 34px 0; border-top: 1px solid rgba(255, 255, 255, 0.14); color: rgba(255, 255, 255, 0.42); font-size: 11px; line-height: 1.65;
```

<a id="r408"></a>

**r408 · `.care-storage`** — Base sin capa. [Fuente:2452](../../src/index.css#L2452)

```css
background: var(--caliza);
```

<a id="r409"></a>

**r409 · `.care-storage__inner`** — Base sin capa. [Fuente:2455](../../src/index.css#L2455)

```css
grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
```

<a id="r410"></a>

**r410 · `.care-storage__copy`** — Base sin capa. [Fuente:2458](../../src/index.css#L2458)

```css
justify-self: end;
```

<a id="r411"></a>

**r411 · `.care-storage__copy .text-link`** — Base sin capa. [Fuente:2461](../../src/index.css#L2461)

```css
margin-top: 34px;
```

<a id="r412"></a>

**r412 · `.care-information`** — Base sin capa. [Fuente:2464](../../src/index.css#L2464)

```css
padding-block: clamp(110px, 11vw, 160px); background: var(--paper);
```

<a id="r413"></a>

**r413 · `.care-information__grid`** — Base sin capa. [Fuente:2468](../../src/index.css#L2468)

```css
display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(60px, 9vw, 140px);
```

<a id="r414"></a>

**r414 · `.care-information__heading`** — Base sin capa. [Fuente:2473](../../src/index.css#L2473)

```css
align-self: start; position: sticky; top: 100px;
```

<a id="r415"></a>

**r415 · `.care-information h2`** — Base sin capa. [Fuente:2478](../../src/index.css#L2478)

```css
margin: 18px 0 28px; font-size: clamp(48px, 5vw, 76px);
```

<a id="r416"></a>

**r416 · `.care-information__heading p`** — Base sin capa. [Fuente:2482](../../src/index.css#L2482)

```css
max-width: 440px; color: #5d554e; line-height: 1.7;
```

<a id="r417"></a>

**r417 · `.care-material-accordion .accordion`** — Base sin capa. [Fuente:2487](../../src/index.css#L2487)

```css
border-color: var(--line);
```

<a id="r418"></a>

**r418 · `.care-material-accordion .accordion > button`** — Base sin capa. [Fuente:2490](../../src/index.css#L2490)

```css
min-height: 74px; font-family: var(--serif); font-size: 22px; letter-spacing: 0; text-transform: none;
```

<a id="r419"></a>

**r419 · `.care-faq`** — Base sin capa. [Fuente:2497](../../src/index.css#L2497)

```css
padding-block: clamp(100px, 10vw, 150px); color: white; background: var(--dark);
```

<a id="r420"></a>

**r420 · `.care-faq__inner`** — Base sin capa. [Fuente:2502](../../src/index.css#L2502)

```css
display: grid; grid-template-columns: 0.75fr 1.25fr; gap: clamp(60px, 9vw, 140px);
```

<a id="r421"></a>

**r421 · `.care-faq h2`** — Base sin capa. [Fuente:2507](../../src/index.css#L2507)

```css
margin-top: 18px; font-size: clamp(50px, 5.2vw, 78px);
```

<a id="r422"></a>

**r422 · `.care-faq .accordion > button`** — Base sin capa. [Fuente:2511](../../src/index.css#L2511)

```css
min-height: 74px; font-family: var(--serif); font-size: 21px; letter-spacing: 0; text-transform: none;
```

<a id="r423"></a>

**r423 · `.care-cta`** — Base sin capa. [Fuente:2518](../../src/index.css#L2518)

```css
display: grid; justify-items: center; padding: clamp(100px, 11vw, 160px) 24px; text-align: center; background: var(--caliza);
```

<a id="r424"></a>

**r424 · `.care-cta h2`** — Base sin capa. [Fuente:2525](../../src/index.css#L2525)

```css
max-width: 900px; margin: 18px 0 22px;
```

<a id="r425"></a>

**r425 · `.care-cta p`** — Base sin capa. [Fuente:2529](../../src/index.css#L2529)

```css
margin-bottom: 32px; color: #5d554e;
```

<a id="r426"></a>

**r426 · `.comparison__hero`** — Base sin capa. [Fuente:2534](../../src/index.css#L2534)

```css
padding-block: 160px 110px;
```

<a id="r427"></a>

**r427 · `.comparison__table`** — Base sin capa. [Fuente:2537](../../src/index.css#L2537)

```css
padding-bottom: 140px;
```

<a id="r428"></a>

**r428 · `.comparison__header, .comparison__table article`** — Base sin capa. [Fuente:2540](../../src/index.css#L2540)

```css
display: grid; grid-template-columns: 0.7fr repeat(3, 1fr); gap: 40px; padding: 25px; border-top: 1px solid var(--line);
```

<a id="r429"></a>

**r429 · `.comparison__header`** — Base sin capa. [Fuente:2548](../../src/index.css#L2548)

```css
color: #7d746d; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
```

<a id="r430"></a>

**r430 · `.comparison__table article h2`** — Base sin capa. [Fuente:2554](../../src/index.css#L2554)

```css
font-family: var(--serif); font-size: 32px; text-transform: uppercase;
```

<a id="r431"></a>

**r431 · `.comparison__table article p`** — Base sin capa. [Fuente:2559](../../src/index.css#L2559)

```css
color: #5f5750; font-size: 13px; line-height: 1.65;
```

<a id="r432"></a>

**r432 · `.newsletter`** — Base sin capa. [Fuente:2565](../../src/index.css#L2565)

```css
display: grid; justify-items: center; padding: 100px 30px; color: white; text-align: center; background: var(--estirpe);
```

<a id="r433"></a>

**r433 · `.newsletter h2`** — Base sin capa. [Fuente:2573](../../src/index.css#L2573)

```css
margin: 18px 0 35px; font-family: var(--serif); font-size: clamp(43px, 5.2vw, 72px); line-height: 0.9; text-transform: uppercase;
```

<a id="r434"></a>

**r434 · `.newsletter > p`** — Base sin capa. [Fuente:2580](../../src/index.css#L2580)

```css
color: rgba(255, 255, 255, 0.7);
```

<a id="r435"></a>

**r435 · `.newsletter form`** — Base sin capa. [Fuente:2583](../../src/index.css#L2583)

```css
display: flex; width: min(100%, 630px); border-bottom: 1px solid rgba(255, 255, 255, 0.55);
```

<a id="r436"></a>

**r436 · `.newsletter input`** — Base sin capa. [Fuente:2588](../../src/index.css#L2588)

```css
flex: 1; padding: 16px 0; color: white; background: transparent;
```

<a id="r437"></a>

**r437 · `.newsletter input::placeholder`** — Base sin capa. [Fuente:2594](../../src/index.css#L2594)

```css
color: rgba(255, 255, 255, 0.62);
```

<a id="r438"></a>

**r438 · `.newsletter form button`** — Base sin capa. [Fuente:2597](../../src/index.css#L2597)

```css
display: flex; align-items: center; gap: 20px; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
```

<a id="r439"></a>

**r439 · `footer`** — Base sin capa. [Fuente:2606](../../src/index.css#L2606)

```css
display: grid; grid-template-columns: 1.5fr 0.8fr 0.8fr 1.2fr; gap: 50px; padding: 80px max(32px, 5vw) 30px; color: white; background: #11100f;
```

<a id="r440"></a>

**r440 · `.footer__brand img`** — Base sin capa. [Fuente:2614](../../src/index.css#L2614)

```css
width: 85px;
```

<a id="r441"></a>

**r441 · `.footer__brand p`** — Base sin capa. [Fuente:2617](../../src/index.css#L2617)

```css
margin-top: 25px; color: rgba(255, 255, 255, 0.5); font-family: var(--serif); font-size: 20px; line-height: 1.3; text-transform: uppercase;
```

<a id="r442"></a>

**r442 · `.footer__nav`** — Base sin capa. [Fuente:2625](../../src/index.css#L2625)

```css
display: flex; flex-direction: column; align-items: flex-start; gap: 11px;
```

<a id="r443"></a>

**r443 · `.footer__nav span, .footer__meta span`** — Base sin capa. [Fuente:2631](../../src/index.css#L2631)

```css
margin-bottom: 10px; color: #c49c80; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
```

<a id="r444"></a>

**r444 · `.footer__nav button`** — Base sin capa. [Fuente:2639](../../src/index.css#L2639)

```css
color: rgba(255, 255, 255, 0.62); font-size: 12px;
```

<a id="r445"></a>

**r445 · `.footer__nav button:hover`** — Base sin capa. [Fuente:2643](../../src/index.css#L2643)

```css
color: white;
```

<a id="r446"></a>

**r446 · `.footer__meta p`** — Base sin capa. [Fuente:2646](../../src/index.css#L2646)

```css
max-width: 280px; color: rgba(255, 255, 255, 0.44); font-size: 11px; line-height: 1.6;
```

<a id="r447"></a>

**r447 · `.footer__bottom`** — Base sin capa. [Fuente:2652](../../src/index.css#L2652)

```css
grid-column: 1 / -1; display: flex; justify-content: space-between; margin-top: 50px; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.12); color: rgba(255, 255, 255, 0.4); font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase;
```

<a id="r448"></a>

**r448 · `.cart-layer`** — Base sin capa. [Fuente:2665](../../src/index.css#L2665)

```css
visibility: hidden; position: fixed; z-index: 80; inset: 0;
```

<a id="r449"></a>

**r449 · `.cart-layer.is-open`** — Base sin capa. [Fuente:2671](../../src/index.css#L2671)

```css
visibility: visible;
```

<a id="r450"></a>

**r450 · `.cart-layer__backdrop`** — Base sin capa. [Fuente:2674](../../src/index.css#L2674)

```css
position: absolute; inset: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.48); opacity: 0; transition: opacity 0.3s;
```

<a id="r451"></a>

**r451 · `.cart-layer.is-open .cart-layer__backdrop`** — Base sin capa. [Fuente:2683](../../src/index.css#L2683)

```css
opacity: 1;
```

<a id="r452"></a>

**r452 · `.cart-drawer`** — Base sin capa. [Fuente:2686](../../src/index.css#L2686)

```css
position: absolute; top: 0; right: 0; width: min(100%, 460px); height: 100%; overflow-y: auto; padding: 30px; background: var(--paper); transform: translateX(100%); transition: transform 0.35s ease;
```

<a id="r453"></a>

**r453 · `.cart-layer.is-open .cart-drawer`** — Base sin capa. [Fuente:2698](../../src/index.css#L2698)

```css
transform: translateX(0);
```

<a id="r454"></a>

**r454 · `.cart-drawer__head`** — Base sin capa. [Fuente:2701](../../src/index.css#L2701)

```css
display: flex; justify-content: space-between; align-items: center; padding-bottom: 25px; border-bottom: 1px solid var(--line);
```

<a id="r455"></a>

**r455 · `.cart-drawer__head h2`** — Base sin capa. [Fuente:2708](../../src/index.css#L2708)

```css
font-family: var(--serif); font-size: 34px; text-transform: uppercase;
```

<a id="r456"></a>

**r456 · `.cart-item`** — Base sin capa. [Fuente:2713](../../src/index.css#L2713)

```css
display: grid; grid-template-columns: 105px 1fr; gap: 20px; padding-block: 28px; border-bottom: 1px solid var(--line);
```

<a id="r457"></a>

**r457 · `.cart-item > img`** — Base sin capa. [Fuente:2720](../../src/index.css#L2720)

```css
width: 105px; aspect-ratio: 1; object-fit: contain;
```

<a id="r458"></a>

**r458 · `.cart-item div`** — Base sin capa. [Fuente:2725](../../src/index.css#L2725)

```css
min-width: 0; overflow-wrap: anywhere; display: flex; flex-direction: column; align-items: flex-start;
```

<a id="r459"></a>

**r459 · `.cart-item b`** — Base sin capa. [Fuente:2732](../../src/index.css#L2732)

```css
font-family: var(--serif); font-size: 23px; text-transform: uppercase;
```

<a id="r460"></a>

**r460 · `.cart-item span`** — Base sin capa. [Fuente:2737](../../src/index.css#L2737)

```css
margin: 5px 0 auto; color: #756c64; font-size: 11px;
```

<a id="r461"></a>

**r461 · `.cart-drawer__total`** — Base sin capa. [Fuente:2742](../../src/index.css#L2742)

```css
display: flex; justify-content: space-between; margin: 30px 0;
```

<a id="r462"></a>

**r462 · `.cart-drawer > .button`** — Base sin capa. [Fuente:2747](../../src/index.css#L2747)

```css
width: 100%;
```

<a id="r463"></a>

**r463 · `.cart-drawer > small`** — Base sin capa. [Fuente:2750](../../src/index.css#L2750)

```css
display: block; margin-top: 15px; color: #756c64; text-align: center;
```

<a id="r464"></a>

**r464 · `.cart-empty`** — Base sin capa. [Fuente:2756](../../src/index.css#L2756)

```css
padding: 80px 0; text-align: center;
```

<a id="r465"></a>

**r465 · `.cart-empty p`** — Base sin capa. [Fuente:2760](../../src/index.css#L2760)

```css
font-family: var(--serif); font-size: 30px; text-transform: uppercase;
```

<a id="r466"></a>

**r466 · `.cart-empty small`** — Base sin capa. [Fuente:2765](../../src/index.css#L2765)

```css
color: #756c64;
```

<a id="r467"></a>

**r467 · `.shell`** — @media (max-width: 900px). [Fuente:2770](../../src/index.css#L2770)

```css
width: min(100% - 40px, 1360px);
```

<a id="r468"></a>

**r468 · `.site-header`** — @media (max-width: 900px). [Fuente:2773](../../src/index.css#L2773)

```css
height: 68px; padding: 0 20px; grid-template-columns: 1fr auto;
```

<a id="r469"></a>

**r469 · `.desktop-nav, .desktop-only`** — @media (max-width: 900px). [Fuente:2778](../../src/index.css#L2778)

```css
display: none;
```

<a id="r470"></a>

**r470 · `.header-actions`** — @media (max-width: 900px). [Fuente:2782](../../src/index.css#L2782)

```css
gap: 15px;
```

<a id="r471"></a>

**r471 · `.mobile-menu-button`** — @media (max-width: 900px). [Fuente:2785](../../src/index.css#L2785)

```css
display: block;
```

<a id="r472"></a>

**r472 · `.brand-logo`** — @media (max-width: 900px). [Fuente:2788](../../src/index.css#L2788)

```css
width: 68px;
```

<a id="r473"></a>

**r473 · `.home-hero`** — @media (max-width: 900px). [Fuente:2791](../../src/index.css#L2791)

```css
height: 800px; min-height: 720px; background-position: 68% center;
```

<a id="r474"></a>

**r474 · `.home-hero__shade`** — @media (max-width: 900px). [Fuente:2796](../../src/index.css#L2796)

```css
background: linear-gradient( 0deg, rgba(14, 10, 8, 0.87), rgba(14, 10, 8, 0.03) 68% );
```

<a id="r475"></a>

**r475 · `.home-hero__content`** — @media (max-width: 900px). [Fuente:2803](../../src/index.css#L2803)

```css
left: 22px; right: 22px; bottom: 55px;
```

<a id="r476"></a>

**r476 · `.home-hero h1`** — @media (max-width: 900px). [Fuente:2808](../../src/index.css#L2808)

```css
font-size: clamp(53px, 15vw, 72px); line-height: 0.82;
```

<a id="r477"></a>

**r477 · `.hero-index`** — @media (max-width: 900px). [Fuente:2812](../../src/index.css#L2812)

```css
display: none;
```

<a id="r478"></a>

**r478 · `.borderless, .special-split, .pdp-story, .special-cta, .nocturna-story`** — @media (max-width: 900px). [Fuente:2815](../../src/index.css#L2815)

```css
grid-template-columns: 1fr;
```

<a id="r479"></a>

**r479 · `.borderless__image, .special-split__image`** — @media (max-width: 900px). [Fuente:2822](../../src/index.css#L2822)

```css
min-height: 480px;
```

<a id="r480"></a>

**r480 · `.borderless__copy, .special-split__copy, .pdp-story div, .special-cta > div, .nocturna-story > div`** — @media (max-width: 900px). [Fuente:2826](../../src/index.css#L2826)

```css
padding: 70px 22px;
```

<a id="r481"></a>

**r481 · `.borderless-fullwidth`** — @media (max-width: 900px). [Fuente:2833](../../src/index.css#L2833)

```css
min-height: 720px; background-position: 43% center;
```

<a id="r482"></a>

**r482 · `.borderless-fullwidth__shade`** — @media (max-width: 900px). [Fuente:2837](../../src/index.css#L2837)

```css
background: linear-gradient( 0deg, rgba(15, 12, 9, 0.86), rgba(15, 12, 9, 0.02) 72% );
```

<a id="r483"></a>

**r483 · `.borderless-fullwidth__content`** — @media (max-width: 900px). [Fuente:2844](../../src/index.css#L2844)

```css
justify-content: end; padding: 70px 0;
```

<a id="r484"></a>

**r484 · `.featured-collection__banner`** — @media (max-width: 900px). [Fuente:2848](../../src/index.css#L2848)

```css
padding-block: 72px 56px; background-position: 62% center;
```

<a id="r485"></a>

**r485 · `.featured-collection__body`** — @media (max-width: 900px). [Fuente:2852](../../src/index.css#L2852)

```css
padding-block: 52px 84px;
```

<a id="r486"></a>

**r486 · `.featured-collection__head, .related__head`** — @media (max-width: 900px). [Fuente:2855](../../src/index.css#L2855)

```css
align-items: flex-start; gap: 30px;
```

<a id="r487"></a>

**r487 · `.product-grid, .product-grid--featured`** — @media (max-width: 900px). [Fuente:2860](../../src/index.css#L2860)

```css
grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 42px 10px;
```

<a id="r488"></a>

**r488 · `.special-split__image`** — @media (max-width: 900px). [Fuente:2865](../../src/index.css#L2865)

```css
order: 2;
```

<a id="r489"></a>

**r489 · `.special-split__image .home-special-image`** — @media (max-width: 900px). [Fuente:2868](../../src/index.css#L2868)

```css
object-position: 58% center;
```

<a id="r490"></a>

**r490 · `.history-banner`** — @media (max-width: 900px). [Fuente:2871](../../src/index.css#L2871)

```css
min-height: 650px; background-position: 54% center;
```

<a id="r491"></a>

**r491 · `.history-banner__content`** — @media (max-width: 900px). [Fuente:2875](../../src/index.css#L2875)

```css
padding: 220px 22px 70px;
```

<a id="r492"></a>

**r492 · `.collection-hero`** — @media (max-width: 900px). [Fuente:2878](../../src/index.css#L2878)

```css
height: 620px;
```

<a id="r493"></a>

**r493 · `.collection-hero__copy`** — @media (max-width: 900px). [Fuente:2881](../../src/index.css#L2881)

```css
left: 22px; right: 22px; bottom: 100px;
```

<a id="r494"></a>

**r494 · `.collection__intro`** — @media (max-width: 900px). [Fuente:2886](../../src/index.css#L2886)

```css
flex-direction: column;
```

<a id="r495"></a>

**r495 · `.toolbar__filters button:nth-child(2)`** — @media (max-width: 900px). [Fuente:2889](../../src/index.css#L2889)

```css
display: none;
```

<a id="r496"></a>

**r496 · `.pdp`** — @media (max-width: 900px). [Fuente:2892](../../src/index.css#L2892)

```css
grid-template-columns: 1fr; width: 100%; padding-top: 0; gap: 0;
```

<a id="r497"></a>

**r497 · `.product-gallery`** — @media (max-width: 900px). [Fuente:2898](../../src/index.css#L2898)

```css
gap: 5px;
```

<a id="r498"></a>

**r498 · `.product-gallery .image-placeholder`** — @media (max-width: 900px). [Fuente:2901](../../src/index.css#L2901)

```css
min-height: 300px;
```

<a id="r499"></a>

**r499 · `.product-gallery__main, .product-gallery__wide`** — @media (max-width: 900px). [Fuente:2904](../../src/index.css#L2904)

```css
min-height: 520px !important;
```

<a id="r500"></a>

**r500 · `.product-info`** — @media (max-width: 900px). [Fuente:2908](../../src/index.css#L2908)

```css
position: static; padding: 45px 22px 80px;
```

<a id="r501"></a>

**r501 · `.breadcrumbs`** — @media (max-width: 900px). [Fuente:2912](../../src/index.css#L2912)

```css
margin-bottom: 34px;
```

<a id="r502"></a>

**r502 · `.related`** — @media (max-width: 900px). [Fuente:2915](../../src/index.css#L2915)

```css
padding-block: 80px;
```

<a id="r503"></a>

**r503 · `.special-hero`** — @media (max-width: 900px). [Fuente:2918](../../src/index.css#L2918)

```css
grid-template-columns: 1fr; min-height: auto;
```

<a id="r504"></a>

**r504 · `.special-hero__visual`** — @media (max-width: 900px). [Fuente:2922](../../src/index.css#L2922)

```css
order: 0; height: 630px;
```

<a id="r505"></a>

**r505 · `.special-hero__content`** — @media (max-width: 900px). [Fuente:2926](../../src/index.css#L2926)

```css
padding: 65px 22px 90px;
```

<a id="r506"></a>

**r506 · `.special-hero h1`** — @media (max-width: 900px). [Fuente:2929](../../src/index.css#L2929)

```css
font-size: clamp(58px, 15vw, 80px);
```

<a id="r507"></a>

**r507 · `.special-intro`** — @media (max-width: 900px). [Fuente:2932](../../src/index.css#L2932)

```css
padding-block: 100px;
```

<a id="r508"></a>

**r508 · `.special-intro__number`** — @media (max-width: 900px). [Fuente:2935](../../src/index.css#L2935)

```css
font-size: 140px;
```

<a id="r509"></a>

**r509 · `.detail-triptych`** — @media (max-width: 900px). [Fuente:2938](../../src/index.css#L2938)

```css
grid-template-columns: 1fr;
```

<a id="r510"></a>

**r510 · `.detail-triptych article`** — @media (max-width: 900px). [Fuente:2941](../../src/index.css#L2941)

```css
display: grid; grid-template-columns: 1fr 1fr; align-items: end; gap: 0 20px;
```

<a id="r511"></a>

**r511 · `.detail-triptych .image-placeholder`** — @media (max-width: 900px). [Fuente:2947](../../src/index.css#L2947)

```css
grid-row: 1 / 3;
```

<a id="r512"></a>

**r512 · `.bento`** — @media (max-width: 900px). [Fuente:2950](../../src/index.css#L2950)

```css
grid-template-columns: 1fr 1fr; grid-template-rows: auto 400px 290px 290px;
```

<a id="r513"></a>

**r513 · `.bento__heading`** — @media (max-width: 900px). [Fuente:2954](../../src/index.css#L2954)

```css
display: block;
```

<a id="r514"></a>

**r514 · `.bento__heading h2`** — @media (max-width: 900px). [Fuente:2957](../../src/index.css#L2957)

```css
margin-top: 20px; text-align: left;
```

<a id="r515"></a>

**r515 · `.bento__emblem`** — @media (max-width: 900px). [Fuente:2961](../../src/index.css#L2961)

```css
grid-row: 2 / 4;
```

<a id="r516"></a>

**r516 · `.bento__material`** — @media (max-width: 900px). [Fuente:2964](../../src/index.css#L2964)

```css
grid-column: 1 / 3;
```

<a id="r517"></a>

**r517 · `.special-cta img, .nocturna-story > .image-placeholder`** — @media (max-width: 900px). [Fuente:2967](../../src/index.css#L2967)

```css
height: 500px;
```

<a id="r518"></a>

**r518 · `.pdp--dark`** — @media (max-width: 900px). [Fuente:2971](../../src/index.css#L2971)

```css
padding-top: 68px;
```

<a id="r519"></a>

**r519 · `.story-split__inner`** — @media (max-width: 900px). [Fuente:2974](../../src/index.css#L2974)

```css
gap: 36px; padding-block: 90px;
```

<a id="r520"></a>

**r520 · `.territory-gallery__heading`** — @media (max-width: 900px). [Fuente:2978](../../src/index.css#L2978)

```css
grid-template-columns: 1fr; gap: 24px;
```

<a id="r521"></a>

**r521 · `.territory-gallery__heading p`** — @media (max-width: 900px). [Fuente:2982](../../src/index.css#L2982)

```css
justify-self: start;
```

<a id="r522"></a>

**r522 · `.territory-grid`** — @media (max-width: 900px). [Fuente:2985](../../src/index.css#L2985)

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

<a id="r523"></a>

**r523 · `.token-grid`** — @media (max-width: 900px). [Fuente:2988](../../src/index.css#L2988)

```css
grid-template-columns: repeat(3, 1fr);
```

<a id="r524"></a>

**r524 · `.component-board`** — @media (max-width: 900px). [Fuente:2991](../../src/index.css#L2991)

```css
grid-template-columns: 1fr;
```

<a id="r525"></a>

**r525 · `.feasibility`** — @media (max-width: 900px). [Fuente:2994](../../src/index.css#L2994)

```css
grid-template-columns: 1fr 1fr;
```

<a id="r526"></a>

**r526 · `.comparison__header`** — @media (max-width: 900px). [Fuente:2997](../../src/index.css#L2997)

```css
display: none;
```

<a id="r527"></a>

**r527 · `.comparison__table article`** — @media (max-width: 900px). [Fuente:3000](../../src/index.css#L3000)

```css
grid-template-columns: 1fr 1fr; gap: 20px;
```

<a id="r528"></a>

**r528 · `.comparison__table article h2`** — @media (max-width: 900px). [Fuente:3004](../../src/index.css#L3004)

```css
grid-column: 1 / 3;
```

<a id="r529"></a>

**r529 · `footer`** — @media (max-width: 900px). [Fuente:3007](../../src/index.css#L3007)

```css
grid-template-columns: 1fr 1fr;
```

<a id="r530"></a>

**r530 · `.footer__brand, .footer__meta`** — @media (max-width: 900px). [Fuente:3010](../../src/index.css#L3010)

```css
grid-column: 1 / 3;
```

<a id="r531"></a>

**r531 · `.shell`** — @media (max-width: 540px). [Fuente:3017](../../src/index.css#L3017)

```css
width: min(100% - 32px, 1360px);
```

<a id="r532"></a>

**r532 · `.home-hero`** — @media (max-width: 540px). [Fuente:3020](../../src/index.css#L3020)

```css
height: 760px; background-position: 72% center;
```

<a id="r533"></a>

**r533 · `.home-hero h1`** — @media (max-width: 540px). [Fuente:3024](../../src/index.css#L3024)

```css
margin-bottom: 28px; font-size: 52px;
```

<a id="r534"></a>

**r534 · `.button`** — @media (max-width: 540px). [Fuente:3028](../../src/index.css#L3028)

```css
min-height: 46px; padding-inline: 18px;
```

<a id="r535"></a>

**r535 · `.borderless__image, .special-split__image`** — @media (max-width: 540px). [Fuente:3032](../../src/index.css#L3032)

```css
min-height: 360px;
```

<a id="r536"></a>

**r536 · `.borderless-fullwidth`** — @media (max-width: 540px). [Fuente:3036](../../src/index.css#L3036)

```css
min-height: 620px; background-position: 42% center;
```

<a id="r537"></a>

**r537 · `.borderless-fullwidth h2`** — @media (max-width: 540px). [Fuente:3040](../../src/index.css#L3040)

```css
font-size: 52px;
```

<a id="r538"></a>

**r538 · `.borderless-fullwidth__content`** — @media (max-width: 540px). [Fuente:3043](../../src/index.css#L3043)

```css
padding-block: 62px;
```

<a id="r539"></a>

**r539 · `.borderless h2, .special-split h2, .history-banner h2, .pdp-story h2, .special-cta h2, .nocturna-story h2`** — @media (max-width: 540px). [Fuente:3046](../../src/index.css#L3046)

```css
font-size: 47px;
```

<a id="r540"></a>

**r540 · `.featured-collection__head, .related__head`** — @media (max-width: 540px). [Fuente:3054](../../src/index.css#L3054)

```css
display: grid;
```

<a id="r541"></a>

**r541 · `.featured-collection__banner .featured-collection__head`** — @media (max-width: 540px). [Fuente:3058](../../src/index.css#L3058)

```css
padding: 20px;
```

<a id="r542"></a>

**r542 · `.featured-collection .product-card`** — @media (max-width: 540px). [Fuente:3061](../../src/index.css#L3061)

```css
padding: 6px 6px 12px;
```

<a id="r543"></a>

**r543 · `.section-heading h2`** — @media (max-width: 540px). [Fuente:3064](../../src/index.css#L3064)

```css
font-size: 45px;
```

<a id="r544"></a>

**r544 · `.product-card__title > span`** — @media (max-width: 540px). [Fuente:3067](../../src/index.css#L3067)

```css
display: block; font-size: 23px;
```

<a id="r545"></a>

**r545 · `.product-card__title small`** — @media (max-width: 540px). [Fuente:3071](../../src/index.css#L3071)

```css
display: block; font-size: 8px;
```

<a id="r546"></a>

**r546 · `.product-card__price`** — @media (max-width: 540px). [Fuente:3075](../../src/index.css#L3075)

```css
font-size: 11px;
```

<a id="r547"></a>

**r547 · `.swatches`** — @media (max-width: 540px). [Fuente:3078](../../src/index.css#L3078)

```css
gap: 7px;
```

<a id="r548"></a>

**r548 · `.swatches button`** — @media (max-width: 540px). [Fuente:3081](../../src/index.css#L3081)

```css
width: 12px; height: 12px;
```

<a id="r549"></a>

**r549 · `.history-banner`** — @media (max-width: 540px). [Fuente:3085](../../src/index.css#L3085)

```css
min-height: 620px; background-position: 55% center;
```

<a id="r550"></a>

**r550 · `.history-banner__content`** — @media (max-width: 540px). [Fuente:3089](../../src/index.css#L3089)

```css
padding-top: 250px;
```

<a id="r551"></a>

**r551 · `.collection-hero`** — @media (max-width: 540px). [Fuente:3092](../../src/index.css#L3092)

```css
height: 570px; background-position: 56% center;
```

<a id="r552"></a>

**r552 · `.collection-hero h1`** — @media (max-width: 540px). [Fuente:3096](../../src/index.css#L3096)

```css
font-size: 52px;
```

<a id="r553"></a>

**r553 · `.collection__intro p`** — @media (max-width: 540px). [Fuente:3099](../../src/index.css#L3099)

```css
font-size: 21px;
```

<a id="r554"></a>

**r554 · `.toolbar`** — @media (max-width: 540px). [Fuente:3102](../../src/index.css#L3102)

```css
align-items: center;
```

<a id="r555"></a>

**r555 · `.toolbar label > span`** — @media (max-width: 540px). [Fuente:3105](../../src/index.css#L3105)

```css
display: none;
```

<a id="r556"></a>

**r556 · `.toolbar select`** — @media (max-width: 540px). [Fuente:3108](../../src/index.css#L3108)

```css
min-width: 100px; max-width: 130px; font-size: 10px;
```

<a id="r557"></a>

**r557 · `.product-gallery__main, .product-gallery__wide`** — @media (max-width: 540px). [Fuente:3113](../../src/index.css#L3113)

```css
min-height: 430px !important;
```

<a id="r558"></a>

**r558 · `.product-gallery .image-placeholder`** — @media (max-width: 540px). [Fuente:3117](../../src/index.css#L3117)

```css
min-height: 230px;
```

<a id="r559"></a>

**r559 · `.product-info h1`** — @media (max-width: 540px). [Fuente:3120](../../src/index.css#L3120)

```css
font-size: clamp(32px, 8.8vw, 42px);
```

<a id="r560"></a>

**r560 · `.product-gallery__thumbs`** — @media (max-width: 540px). [Fuente:3123](../../src/index.css#L3123)

```css
display: flex; overflow-x: auto; padding-bottom: 4px;
```

<a id="r561"></a>

**r561 · `.product-gallery__thumb`** — @media (max-width: 540px). [Fuente:3128](../../src/index.css#L3128)

```css
flex: 0 0 80px;
```

<a id="r562"></a>

**r562 · `.product-gallery__counter`** — @media (max-width: 540px). [Fuente:3131](../../src/index.css#L3131)

```css
font-size: 9px; padding: 5px 8px;
```

<a id="r563"></a>

**r563 · `.product-specs > div`** — @media (max-width: 540px). [Fuente:3135](../../src/index.css#L3135)

```css
grid-template-columns: 102px minmax(0, 1fr);
```

<a id="r564"></a>

**r564 · `.product-info__price`** — @media (max-width: 540px). [Fuente:3138](../../src/index.css#L3138)

```css
display: block;
```

<a id="r565"></a>

**r565 · `.product-info__price small`** — @media (max-width: 540px). [Fuente:3141](../../src/index.css#L3141)

```css
display: block; margin-top: 8px;
```

<a id="r566"></a>

**r566 · `.buy-row`** — @media (max-width: 540px). [Fuente:3145](../../src/index.css#L3145)

```css
grid-template-columns: 94px 1fr;
```

<a id="r567"></a>

**r567 · `.related .product-grid--featured`** — @media (max-width: 540px). [Fuente:3148](../../src/index.css#L3148)

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

<a id="r568"></a>

**r568 · `.special-hero__visual`** — @media (max-width: 540px). [Fuente:3151](../../src/index.css#L3151)

```css
height: 520px;
```

<a id="r569"></a>

**r569 · `.special-intro__number`** — @media (max-width: 540px). [Fuente:3154](../../src/index.css#L3154)

```css
display: none;
```

<a id="r570"></a>

**r570 · `.detail-triptych article`** — @media (max-width: 540px). [Fuente:3157](../../src/index.css#L3157)

```css
grid-template-columns: 1fr;
```

<a id="r571"></a>

**r571 · `.detail-triptych .image-placeholder`** — @media (max-width: 540px). [Fuente:3160](../../src/index.css#L3160)

```css
grid-row: auto; aspect-ratio: 1;
```

<a id="r572"></a>

**r572 · `.bento`** — @media (max-width: 540px). [Fuente:3164](../../src/index.css#L3164)

```css
grid-template-columns: 1fr; grid-template-rows: auto;
```

<a id="r573"></a>

**r573 · `.bento > *`** — @media (max-width: 540px). [Fuente:3168](../../src/index.css#L3168)

```css
grid-column: 1 !important; grid-row: auto !important; min-height: 290px;
```

<a id="r574"></a>

**r574 · `.bento__heading`** — @media (max-width: 540px). [Fuente:3173](../../src/index.css#L3173)

```css
min-height: 0;
```

<a id="r575"></a>

**r575 · `.bento__back`** — @media (max-width: 540px). [Fuente:3176](../../src/index.css#L3176)

```css
display: none;
```

<a id="r576"></a>

**r576 · `.story-hero`** — @media (max-width: 540px). [Fuente:3179](../../src/index.css#L3179)

```css
min-height: 680px;
```

<a id="r577"></a>

**r577 · `.story-hero > div:last-child`** — @media (max-width: 540px). [Fuente:3182](../../src/index.css#L3182)

```css
right: 24px; bottom: 70px; left: 24px;
```

<a id="r578"></a>

**r578 · `.story-hero h1`** — @media (max-width: 540px). [Fuente:3187](../../src/index.css#L3187)

```css
font-size: clamp(38px, 11vw, 46px); line-height: 0.86;
```

<a id="r579"></a>

**r579 · `.story-split__inner, .story-split--reverse .story-split__inner`** — @media (max-width: 540px). [Fuente:3191](../../src/index.css#L3191)

```css
grid-template-columns: 1fr; gap: 38px;
```

<a id="r580"></a>

**r580 · `.story-split__inner`** — @media (max-width: 540px). [Fuente:3196](../../src/index.css#L3196)

```css
grid-template-areas: "copy" "media";
```

<a id="r581"></a>

**r581 · `.story-split--reverse .story-split__inner`** — @media (max-width: 540px). [Fuente:3199](../../src/index.css#L3199)

```css
grid-template-areas: "media" "copy";
```

<a id="r582"></a>

**r582 · `.story-split__media`** — @media (max-width: 540px). [Fuente:3202](../../src/index.css#L3202)

```css
aspect-ratio: 4 / 3;
```

<a id="r583"></a>

**r583 · `.story-split__copy h2, .territory-gallery__heading h2`** — @media (max-width: 540px). [Fuente:3205](../../src/index.css#L3205)

```css
font-size: 48px;
```

<a id="r584"></a>

**r584 · `.territory-grid`** — @media (max-width: 540px). [Fuente:3209](../../src/index.css#L3209)

```css
grid-template-columns: 1fr; gap: 12px;
```

<a id="r585"></a>

**r585 · `.territory-card__panel`** — @media (max-width: 540px). [Fuente:3213](../../src/index.css#L3213)

```css
padding: 24px 72px 24px 24px;
```

<a id="r586"></a>

**r586 · `.system-hero h1, .comparison__hero h1`** — @media (max-width: 540px). [Fuente:3216](../../src/index.css#L3216)

```css
font-size: 56px;
```

<a id="r587"></a>

**r587 · `.token-grid`** — @media (max-width: 540px). [Fuente:3220](../../src/index.css#L3220)

```css
grid-template-columns: repeat(2, 1fr);
```

<a id="r588"></a>

**r588 · `.component-board > div`** — @media (max-width: 540px). [Fuente:3223](../../src/index.css#L3223)

```css
padding: 35px 24px;
```

<a id="r589"></a>

**r589 · `.feasibility`** — @media (max-width: 540px). [Fuente:3226](../../src/index.css#L3226)

```css
grid-template-columns: 1fr;
```

<a id="r590"></a>

**r590 · `.comparison__table article`** — @media (max-width: 540px). [Fuente:3229](../../src/index.css#L3229)

```css
grid-template-columns: 1fr; padding-inline: 0;
```

<a id="r591"></a>

**r591 · `.comparison__table article h2`** — @media (max-width: 540px). [Fuente:3233](../../src/index.css#L3233)

```css
grid-column: 1;
```

<a id="r592"></a>

**r592 · `.newsletter form`** — @media (max-width: 540px). [Fuente:3236](../../src/index.css#L3236)

```css
display: grid; border: 0;
```

<a id="r593"></a>

**r593 · `.newsletter input`** — @media (max-width: 540px). [Fuente:3240](../../src/index.css#L3240)

```css
border-bottom: 1px solid rgba(255, 255, 255, 0.5); text-align: center;
```

<a id="r594"></a>

**r594 · `.newsletter form button`** — @media (max-width: 540px). [Fuente:3244](../../src/index.css#L3244)

```css
justify-content: center; padding-top: 20px;
```

<a id="r595"></a>

**r595 · `footer`** — @media (max-width: 540px). [Fuente:3248](../../src/index.css#L3248)

```css
grid-template-columns: 1fr; gap: 38px;
```

<a id="r596"></a>

**r596 · `.footer__brand, .footer__meta, .footer__bottom`** — @media (max-width: 540px). [Fuente:3252](../../src/index.css#L3252)

```css
grid-column: 1;
```

<a id="r597"></a>

**r597 · `.footer__bottom`** — @media (max-width: 540px). [Fuente:3257](../../src/index.css#L3257)

```css
display: grid; gap: 8px;
```

<a id="r598"></a>

**r598 · `.se-hero__content`** — @media (max-width: 900px). [Fuente:3264](../../src/index.css#L3264)

```css
right: 24px; left: 24px;
```

<a id="r599"></a>

**r599 · `.se-presentation__grid`** — @media (max-width: 900px). [Fuente:3268](../../src/index.css#L3268)

```css
grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 16px;
```

<a id="r600"></a>

**r600 · `.se-detail`** — @media (max-width: 900px). [Fuente:3272](../../src/index.css#L3272)

```css
gap: 42px;
```

<a id="r601"></a>

**r601 · `.se-product-cta__inner`** — @media (max-width: 900px). [Fuente:3275](../../src/index.css#L3275)

```css
grid-template-columns: 1fr 1fr;
```

<a id="r602"></a>

**r602 · `.se-product-cta__media`** — @media (max-width: 900px). [Fuente:3278](../../src/index.css#L3278)

```css
min-height: 560px;
```

<a id="r603"></a>

**r603 · `.se-product-cta__copy`** — @media (max-width: 900px). [Fuente:3281](../../src/index.css#L3281)

```css
padding: 48px;
```

<a id="r604"></a>

**r604 · `.care-hero__content`** — @media (max-width: 900px). [Fuente:3284](../../src/index.css#L3284)

```css
right: 24px; left: 24px;
```

<a id="r605"></a>

**r605 · `.care-everyday__inner, .care-storage__inner`** — @media (max-width: 900px). [Fuente:3288](../../src/index.css#L3288)

```css
grid-template-columns: 1fr; gap: 52px;
```

<a id="r606"></a>

**r606 · `.care-everyday__media, .care-storage__media`** — @media (max-width: 900px). [Fuente:3293](../../src/index.css#L3293)

```css
aspect-ratio: 4 / 3;
```

<a id="r607"></a>

**r607 · `.care-story__layout`** — @media (max-width: 900px). [Fuente:3297](../../src/index.css#L3297)

```css
grid-template-columns: 1fr; gap: 0;
```

<a id="r608"></a>

**r608 · `.care-story__visual`** — @media (max-width: 900px). [Fuente:3301](../../src/index.css#L3301)

```css
z-index: 5; top: 68px; padding-block: 16px; background: var(--dark);
```

<a id="r609"></a>

**r609 · `.care-story__illustration`** — @media (max-width: 900px). [Fuente:3307](../../src/index.css#L3307)

```css
aspect-ratio: 16 / 10;
```

<a id="r610"></a>

**r610 · `.care-illustration`** — @media (max-width: 900px). [Fuente:3310](../../src/index.css#L3310)

```css
width: min(76%, 520px); max-height: 300px;
```

<a id="r611"></a>

**r611 · `.care-step`** — @media (max-width: 900px). [Fuente:3314](../../src/index.css#L3314)

```css
min-height: 60vh;
```

<a id="r612"></a>

**r612 · `.care-information__grid, .care-faq__inner`** — @media (max-width: 900px). [Fuente:3317](../../src/index.css#L3317)

```css
grid-template-columns: 1fr; gap: 56px;
```

<a id="r613"></a>

**r613 · `.care-information__heading`** — @media (max-width: 900px). [Fuente:3322](../../src/index.css#L3322)

```css
position: static;
```

<a id="r614"></a>

**r614 · `.se-hero`** — @media (max-width: 540px). [Fuente:3328](../../src/index.css#L3328)

```css
min-height: 720px; background-position: 58% center;
```

<a id="r615"></a>

**r615 · `.se-hero__content`** — @media (max-width: 540px). [Fuente:3332](../../src/index.css#L3332)

```css
bottom: 9%;
```

<a id="r616"></a>

**r616 · `.se-hero__content > p`** — @media (max-width: 540px). [Fuente:3335](../../src/index.css#L3335)

```css
margin-top: 20px; font-size: 33px;
```

<a id="r617"></a>

**r617 · `.se-hero h1`** — @media (max-width: 540px). [Fuente:3339](../../src/index.css#L3339)

```css
margin-bottom: 25px; font-size: clamp(70px, 24vw, 94px);
```

<a id="r618"></a>

**r618 · `.se-hero__content > small`** — @media (max-width: 540px). [Fuente:3343](../../src/index.css#L3343)

```css
max-width: 300px; font-size: 13px;
```

<a id="r619"></a>

**r619 · `.se-intro`** — @media (max-width: 540px). [Fuente:3347](../../src/index.css#L3347)

```css
padding-block: 100px;
```

<a id="r620"></a>

**r620 · `.se-intro h2, .se-story__heading h2, .se-lifestyle h2`** — @media (max-width: 540px). [Fuente:3350](../../src/index.css#L3350)

```css
font-size: 49px;
```

<a id="r621"></a>

**r621 · `.se-presentation`** — @media (max-width: 540px). [Fuente:3355](../../src/index.css#L3355)

```css
padding-block: 80px 100px;
```

<a id="r622"></a>

**r622 · `.se-presentation__grid`** — @media (max-width: 540px). [Fuente:3358](../../src/index.css#L3358)

```css
grid-template-columns: 1fr; gap: 48px;
```

<a id="r623"></a>

**r623 · `.se-product-card__media`** — @media (max-width: 540px). [Fuente:3362](../../src/index.css#L3362)

```css
aspect-ratio: 4 / 3;
```

<a id="r624"></a>

**r624 · `.se-story__heading`** — @media (max-width: 540px). [Fuente:3365](../../src/index.css#L3365)

```css
justify-items: start; padding-block: 85px; text-align: left;
```

<a id="r625"></a>

**r625 · `.se-detail, .se-detail--reverse`** — @media (max-width: 540px). [Fuente:3370](../../src/index.css#L3370)

```css
grid-template-columns: 1fr; grid-template-areas: "media" "copy"; gap: 34px; padding-block: 55px 80px;
```

<a id="r626"></a>

**r626 · `.se-detail__media`** — @media (max-width: 540px). [Fuente:3377](../../src/index.css#L3377)

```css
aspect-ratio: 4 / 5;
```

<a id="r627"></a>

**r627 · `.se-detail__copy h3`** — @media (max-width: 540px). [Fuente:3380](../../src/index.css#L3380)

```css
font-size: 45px;
```

<a id="r628"></a>

**r628 · `.se-lifestyle, .se-lifestyle__copy`** — @media (max-width: 540px). [Fuente:3383](../../src/index.css#L3383)

```css
min-height: 620px;
```

<a id="r629"></a>

**r629 · `.se-lifestyle__copy`** — @media (max-width: 540px). [Fuente:3387](../../src/index.css#L3387)

```css
padding-bottom: 64px;
```

<a id="r630"></a>

**r630 · `.se-lifestyle p`** — @media (max-width: 540px). [Fuente:3390](../../src/index.css#L3390)

```css
max-width: 310px; font-size: 14px;
```

<a id="r631"></a>

**r631 · `.se-product-cta`** — @media (max-width: 540px). [Fuente:3394](../../src/index.css#L3394)

```css
padding-block: 80px;
```

<a id="r632"></a>

**r632 · `.se-product-cta__inner`** — @media (max-width: 540px). [Fuente:3397](../../src/index.css#L3397)

```css
grid-template-columns: 1fr;
```

<a id="r633"></a>

**r633 · `.se-product-cta__media`** — @media (max-width: 540px). [Fuente:3400](../../src/index.css#L3400)

```css
min-height: 460px;
```

<a id="r634"></a>

**r634 · `.se-product-cta__copy`** — @media (max-width: 540px). [Fuente:3403](../../src/index.css#L3403)

```css
padding: 62px 24px;
```

<a id="r635"></a>

**r635 · `.se-product-cta h2`** — @media (max-width: 540px). [Fuente:3406](../../src/index.css#L3406)

```css
font-size: 76px;
```

<a id="r636"></a>

**r636 · `.care-hero`** — @media (max-width: 540px). [Fuente:3409](../../src/index.css#L3409)

```css
min-height: 700px;
```

<a id="r637"></a>

**r637 · `.care-hero__content`** — @media (max-width: 540px). [Fuente:3412](../../src/index.css#L3412)

```css
bottom: 19%;
```

<a id="r638"></a>

**r638 · `.care-hero h1`** — @media (max-width: 540px). [Fuente:3415](../../src/index.css#L3415)

```css
font-size: clamp(48px, 15vw, 62px);
```

<a id="r639"></a>

**r639 · `.care-hero__continue`** — @media (max-width: 540px). [Fuente:3418](../../src/index.css#L3418)

```css
right: 22px; bottom: 25px;
```

<a id="r640"></a>

**r640 · `.care-intro h2, .care-everyday h2, .care-storage h2, .care-information h2, .care-faq h2, .care-cta h2, .care-story__heading h2`** — @media (max-width: 540px). [Fuente:3422](../../src/index.css#L3422)

```css
font-size: 45px;
```

<a id="r641"></a>

**r641 · `.care-intro__marquee`** — @media (max-width: 540px). [Fuente:3431](../../src/index.css#L3431)

```css
padding-block: 20px;
```

<a id="r642"></a>

**r642 · `.care-everyday__inner, .care-storage__inner`** — @media (max-width: 540px). [Fuente:3434](../../src/index.css#L3434)

```css
padding-block: 88px;
```

<a id="r643"></a>

**r643 · `.care-everyday__media, .care-storage__media`** — @media (max-width: 540px). [Fuente:3438](../../src/index.css#L3438)

```css
aspect-ratio: 1;
```

<a id="r644"></a>

**r644 · `.care-story`** — @media (max-width: 540px). [Fuente:3442](../../src/index.css#L3442)

```css
padding-block: 90px;
```

<a id="r645"></a>

**r645 · `.care-story__heading`** — @media (max-width: 540px). [Fuente:3445](../../src/index.css#L3445)

```css
margin-bottom: 50px;
```

<a id="r646"></a>

**r646 · `.care-story__visual`** — @media (max-width: 540px). [Fuente:3448](../../src/index.css#L3448)

```css
grid-template-columns: 1fr; gap: 12px;
```

<a id="r647"></a>

**r647 · `.care-story__illustration`** — @media (max-width: 540px). [Fuente:3452](../../src/index.css#L3452)

```css
aspect-ratio: 16 / 9;
```

<a id="r648"></a>

**r648 · `.care-illustration`** — @media (max-width: 540px). [Fuente:3455](../../src/index.css#L3455)

```css
width: 74%; max-height: 230px;
```

<a id="r649"></a>

**r649 · `.care-story__nav`** — @media (max-width: 540px). [Fuente:3459](../../src/index.css#L3459)

```css
flex-direction: row; justify-content: space-between; padding-inline: 2px;
```

<a id="r650"></a>

**r650 · `.care-story__nav > span`** — @media (max-width: 540px). [Fuente:3464](../../src/index.css#L3464)

```css
writing-mode: initial;
```

<a id="r651"></a>

**r651 · `.care-story__nav > div`** — @media (max-width: 540px). [Fuente:3467](../../src/index.css#L3467)

```css
display: flex;
```

<a id="r652"></a>

**r652 · `.care-story__nav button`** — @media (max-width: 540px). [Fuente:3470](../../src/index.css#L3470)

```css
width: 32px; height: 32px;
```

<a id="r653"></a>

**r653 · `.care-step`** — @media (max-width: 540px). [Fuente:3474](../../src/index.css#L3474)

```css
min-height: 62svh;
```

<a id="r654"></a>

**r654 · `.care-step > button`** — @media (max-width: 540px). [Fuente:3477](../../src/index.css#L3477)

```css
grid-template-columns: 45px 1fr; gap: 12px; padding-block: 70px;
```

<a id="r655"></a>

**r655 · `.care-step > button > span`** — @media (max-width: 540px). [Fuente:3482](../../src/index.css#L3482)

```css
font-size: 30px;
```

<a id="r656"></a>

**r656 · `.care-step h3`** — @media (max-width: 540px). [Fuente:3485](../../src/index.css#L3485)

```css
font-size: 36px;
```

<a id="r657"></a>

**r657 · `.care-step p`** — @media (max-width: 540px). [Fuente:3488](../../src/index.css#L3488)

```css
font-size: 13px;
```

<a id="r658"></a>

**r658 · `.care-information, .care-faq`** — @media (max-width: 540px). [Fuente:3491](../../src/index.css#L3491)

```css
padding-block: 90px;
```

<a id="r659"></a>

**r659 · `.care-material-accordion .accordion > button, .care-faq .accordion > button`** — @media (max-width: 540px). [Fuente:3495](../../src/index.css#L3495)

```css
min-height: 68px; padding-right: 8px; font-size: 19px;
```

<a id="r660"></a>

**r660 · `.story-split, .story-split--reverse`** — @media (max-width: 900px). [Fuente:3504](../../src/index.css#L3504)

```css
grid-template-columns: 1fr; min-height: 0;
```

<a id="r661"></a>

**r661 · `.story-split`** — @media (max-width: 900px). [Fuente:3509](../../src/index.css#L3509)

```css
grid-template-areas: "copy" "media";
```

<a id="r662"></a>

**r662 · `.story-split--reverse`** — @media (max-width: 900px). [Fuente:3512](../../src/index.css#L3512)

```css
grid-template-areas: "media" "copy";
```

<a id="r663"></a>

**r663 · `.story-split__copy`** — @media (max-width: 900px). [Fuente:3515](../../src/index.css#L3515)

```css
min-height: 390px; padding: 64px 48px;
```

<a id="r664"></a>

**r664 · `.story-split__media`** — @media (max-width: 900px). [Fuente:3519](../../src/index.css#L3519)

```css
aspect-ratio: 16 / 9;
```

<a id="r665"></a>

**r665 · `.territory-editorial`** — @media (max-width: 900px). [Fuente:3522](../../src/index.css#L3522)

```css
grid-template-columns: 40fr 30fr 30fr;
```

<a id="r666"></a>

**r666 · `.territory-editorial > *`** — @media (max-width: 900px). [Fuente:3525](../../src/index.css#L3525)

```css
min-height: 380px;
```

<a id="r667"></a>

**r667 · `.story-hero`** — @media (max-width: 540px). [Fuente:3531](../../src/index.css#L3531)

```css
height: 760px; min-height: 680px; background-position: 61% center;
```

<a id="r668"></a>

**r668 · `.story-hero__shade`** — @media (max-width: 540px). [Fuente:3536](../../src/index.css#L3536)

```css
background: linear-gradient( 90deg, rgba(15, 11, 8, 0.76) 0%, rgba(15, 11, 8, 0.36) 55%, transparent 100% );
```

<a id="r669"></a>

**r669 · `.story-hero__content`** — @media (max-width: 540px). [Fuente:3544](../../src/index.css#L3544)

```css
right: 24px; bottom: 64px; left: 24px; width: auto;
```

<a id="r670"></a>

**r670 · `.story-hero h1`** — @media (max-width: 540px). [Fuente:3550](../../src/index.css#L3550)

```css
max-width: 330px; margin-block: 16px 28px; font-size: clamp(39px, 11vw, 47px); line-height: 0.9;
```

<a id="r671"></a>

**r671 · `.story-hero__rule`** — @media (max-width: 540px). [Fuente:3556](../../src/index.css#L3556)

```css
width: 46px; margin-bottom: 16px;
```

<a id="r672"></a>

**r672 · `.story-split__copy`** — @media (max-width: 540px). [Fuente:3560](../../src/index.css#L3560)

```css
min-height: 360px; padding: 68px 24px;
```

<a id="r673"></a>

**r673 · `.story-split__media`** — @media (max-width: 540px). [Fuente:3564](../../src/index.css#L3564)

```css
aspect-ratio: 4 / 3;
```

<a id="r674"></a>

**r674 · `.story-split__copy h2`** — @media (max-width: 540px). [Fuente:3567](../../src/index.css#L3567)

```css
font-size: 47px;
```

<a id="r675"></a>

**r675 · `.territory-editorial`** — @media (max-width: 540px). [Fuente:3570](../../src/index.css#L3570)

```css
grid-template-columns: 1fr;
```

<a id="r676"></a>

**r676 · `.territory-editorial > *`** — @media (max-width: 540px). [Fuente:3573](../../src/index.css#L3573)

```css
min-height: 440px;
```

<a id="r677"></a>

**r677 · `.territory-editorial__copy`** — @media (max-width: 540px). [Fuente:3576](../../src/index.css#L3576)

```css
min-height: 390px; padding: 58px 24px;
```

<a id="r678"></a>

**r678 · `.territory-editorial__copy h2`** — @media (max-width: 540px). [Fuente:3580](../../src/index.css#L3580)

```css
font-size: 50px;
```

<a id="r679"></a>

**r679 · `.territory-editorial__visual--door`** — @media (max-width: 540px). [Fuente:3583](../../src/index.css#L3583)

```css
min-height: 390px;
```

<a id="r680"></a>

**r680 · `.care-intro__marquee > div`** — @media (prefers-reduced-motion: reduce). [Fuente:3589](../../src/index.css#L3589)

```css
animation: none;
```

<a id="r681"></a>

**r681 · `*, *::before, *::after`** — @media (prefers-reduced-motion: reduce). [Fuente:3592](../../src/index.css#L3592)

```css
scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important;
```
