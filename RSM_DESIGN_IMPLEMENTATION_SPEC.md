# RSM Universe Ecommerce Experience

## Especificación integral de diseño e implementación

> Referencia funcional y visual del prototipo aprobado para implementación posterior en Shopify Prestige 11.4.1.

| Campo                            | Valor                                                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Proyecto                         | RSM Universe Ecommerce Experience / Rancho San Marco                                                                                 |
| Estado del documento             | Especificación de la implementación vigente                                                                                          |
| Fecha de generación              | 2026-11-15                                                                                                                           |
| Fecha de revisión                | 2026-11-16                                                                                                                           |
| Fuente de verdad                 | Código actual de Figma Make en `src/App.tsx` y `src/index.css`                                                                       |
| Plataforma objetivo              | Shopify Basic                                                                                                                        |
| Tema objetivo                    | Prestige 11.4.1, Maestrooo                                                                                                           |
| Arquitectura prevista            | Native First + RSM Custom Layer                                                                                                      |
| URL de Figma Make                | **NO VERIFICADO:** la URL no está expuesta en el repositorio ni en el entorno de terminal                                            |
| Verificación visual automatizada | **NO VERIFICADO:** el servidor supervisado de preview no fue accesible desde terminal y no existe controlador de navegador instalado |
| Verificación estática            | **IMPLEMENTADO:** código, rutas, componentes, CSS y assets inspeccionados                                                            |
| Verificación de compilación      | La última compilación conocida con `pnpm build` terminó correctamente; este documento no modifica código funcional                   |

### Convenciones de estado

- **IMPLEMENTADO:** existe lógica funcional en el código.
- **VISUAL:** aparece en la interfaz, sin lógica asociada.
- **SIMULADO:** funciona con estado local o datos mock; no persiste ni usa Shopify.
- **PENDIENTE:** requerido para producción, pero no existe.
- **NO VERIFICADO:** no fue posible comprobarlo en ejecución.

---

# 01 — Información general

## 1.1 Objetivo del prototipo

El prototipo define una experiencia eCommerce editorial para RSM Universe con dos expresiones de marca:

- **Core / Light:** superficies Caliza y Paper, producto comercial, narrativa de origen.
- **Special Edition / Dark:** superficies Dark, carbón y Estirpe, narrativa cinematográfica y detalles.

Figma Make es la referencia de diseño, comportamiento y responsive. No representa la futura arquitectura Liquid, el modelo de datos, las secciones de Theme Editor ni el JavaScript final de Shopify.

## 1.2 Tecnologías reales

| Tecnología          | Versión/uso                                                          |
| ------------------- | -------------------------------------------------------------------- |
| React               | `^19.0.0`                                                            |
| React DOM           | `^19.0.0`                                                            |
| TypeScript          | `^5.7.0`                                                             |
| Vite                | `^8.0.5`                                                             |
| Tailwind CSS        | `^4.0.0`; importado, aunque la mayor parte del diseño usa CSS manual |
| `@tailwindcss/vite` | `^4.0.0`                                                             |
| oxfmt               | `^0.76.0`                                                            |
| Animación           | CSS + `IntersectionObserver`; no hay librería de motion              |
| Routing             | Estado local, hash y History API; no hay React Router                |
| Persistencia        | Ninguna                                                              |
| Backend/CMS         | Ninguno                                                              |

Archivos funcionales principales:

- `src/App.tsx`: datos mock, componentes, rutas e interacciones.
- `src/index.css`: tokens, layout, responsive, transiciones y animaciones.
- `src/main.tsx`: montaje de React e import de CSS.
- `public/assets/`: logotipos, favicon y fotografías optimizadas de Home/Nuestra Historia.

## 1.3 Rutas existentes

| Page key     | Ruta declarada            | Forma real de navegación                                  | Estado       |
| ------------ | ------------------------- | --------------------------------------------------------- | ------------ |
| `home`       | `""`                      | `#/` o raíz                                               | IMPLEMENTADO |
| `collection` | `coleccion`               | `#/coleccion`                                             | IMPLEMENTADO |
| `caliza`     | `producto/caliza`         | `#/producto/caliza`                                       | IMPLEMENTADO |
| `special`    | `special-edition`         | `#/special-edition`                                       | IMPLEMENTADO |
| `nocturna`   | `producto/nocturna`       | `#/producto/nocturna`                                     | IMPLEMENTADO |
| `story`      | `nuestra-historia`        | `#/nuestra-historia`                                      | IMPLEMENTADO |
| `care`       | `pages/cuidado-de-gorras` | Ruta real `/pages/cuidado-de-gorras` mediante `pushState` | IMPLEMENTADO |
| `system`     | `design-system`           | `#/design-system`                                         | IMPLEMENTADO |
| `compare`    | `comparativa`             | `#/comparativa`                                           | IMPLEMENTADO |

Implementación: `routes`, `routeMap`, `App.navigate()` y `App.syncRoute()` en `src/App.tsx`.

---

# 02 — Design System

## 2.1 Tokens cromáticos

Definidos en `:root`, `src/index.css`.

| Token         |                    Valor | Uso real                                                                                    |
| ------------- | -----------------------: | ------------------------------------------------------------------------------------------- |
| `--estirpe`   |                `#64242e` | Newsletter, badges, placeholders, acentos, hover de botón                                   |
| `--sierra`    |                `#574d35` | Placeholders editoriales, fondo fallback                                                    |
| `--caliza`    |                `#f2e8da` | Fondo claro, botones light, ilustración de care                                             |
| `--arcilla`   |                `#944a20` | Eyebrows, foco, bullets                                                                     |
| `--horizonte` |                `#4b5b6e` | Placeholders editoriales                                                                    |
| `--dark`      |                `#191716` | Texto principal, fondos dark, botones                                                       |
| `--paper`     |                `#f7f2eb` | Fondo Core general; no pertenece a la tabla principal del brandbook, pero está implementado |
| `--white`     |                   `#fff` | Texto y estados light                                                                       |
| `--line`      | `rgba(25, 23, 22, 0.16)` | Separadores en superficies claras                                                           |

Colores adicionales implementados:

- Texto claro secundario: opacidades blancas entre `0.42` y `0.82`.
- Eyebrow claro: `#e9d3bd`.
- Acento editorial cobrizo: `#c49270`.
- Fondos carbón: `#11100f`, `#12110f`, `#141311`, `#181715`, `#24211e`, `#282522`.
- Disponibilidad: `#687653`.
- Placeholder Core fallback: `#ddd0c3`, `#d9cbbb`.

## 2.2 Overlays reales

| Contexto                      | Valor                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| Header overlay                | `linear-gradient(to bottom, rgba(8,7,6,.64), transparent)`                                        |
| Header overlay dark           | `rgba(8,7,6,.78)` a transparente                                                                  |
| Home hero                     | Gradiente horizontal `rgba(14,10,8,.82)` a `rgba(14,10,8,.06)`; ≤900 cambia a gradiente vertical  |
| Home Sin Fronteras full-width | Gradiente horizontal transparente hasta `rgba(15,12,9,.82)`; ≤900 cambia a vertical               |
| Home Historia                 | Gradiente horizontal `rgba(15,12,9,.7)` a `rgba(15,12,9,.04)`                                     |
| Collection hero               | `rgba(20,14,10,.8)` a `rgba(20,14,10,.1)`                                                         |
| Story hero                    | Gradiente lateral `rgba(15,11,8,.72)` → `.42` → transparente; mobile `.76` → `.36` → transparente |
| Special hero                  | `rgba(8,7,6,.86)` a `rgba(8,7,6,.16)`                                                             |
| Special lifestyle             | Gradiente vertical `rgba(8,7,6,.86)` a `rgba(8,7,6,.14)`                                          |
| Territory cards               | `rgba(15,13,12,.94)` a `rgba(15,13,12,.2)`                                                        |
| Cart backdrop                 | `rgba(0,0,0,.48)`                                                                                 |

## 2.3 Tipografía

Import:

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=Figtree:wght@400;500;600&display=swap");
```

| Rol                  | Familia            | Pesos reales        |
| -------------------- | ------------------ | ------------------- |
| Títulos              | Cormorant Garamond | 600 normal e italic |
| UI, body, navegación | Figtree            | 400, 500, 600       |
| Fallback serif       | Georgia            |
| Fallback sans        | Arial              |

### Jerarquías reales

No existe una escala H1–H6 global. Los tamaños están definidos por contexto. H4–H6 no se usan.

| Contexto           | Tamaño desktop            | Line-height              | Tracking  | Mobile                                 |
| ------------------ | ------------------------- | ------------------------ | --------- | -------------------------------------- |
| Home/Collection H1 | `clamp(62px,7.5vw,112px)` | `.78`                    | `-.045em` | Home/Collection `52px`                 |
| Story hero H1      | `clamp(48px,4vw,60px)`    | `.9`                     | `-.035em` | `clamp(39px,11vw,47px)`                |
| Special hero H1    | `clamp(92px,12vw,176px)`  | `.72`                    | `-.055em` | `clamp(70px,24vw,94px)`                |
| Care hero H1       | `clamp(64px,8vw,120px)`   | `.78`                    | `-.045em` | `clamp(48px,15vw,62px)`                |
| Section heading    | `clamp(44px,5vw,76px)`    | `.88`                    | `-.035em` | `45px`                                 |
| Special section H2 | `clamp(58px,7vw,104px)`   | `.84`                    | `-.04em`  | `49px`                                 |
| Story split H2     | `clamp(48px,4.8vw,72px)`  | `.9`                     | `-.035em` | `47px`                                 |
| Product title      | `clamp(24px,2vw,31px)`    | `1`                      | normal    | `23px`                                 |
| Eyebrow            | `11px`                    | normal                   | `.18em`   | igual                                  |
| Body base          | `16px`                    | por contexto: `1.5–1.75` | normal    | igual o `13–14px` en módulos concretos |

Transformaciones:

- Títulos editoriales: mayoritariamente uppercase.
- Navegación, botones y eyebrows: uppercase.
- Accordions de producto: uppercase.
- Accordions de Care: texto normal, Cormorant Garamond.

## 2.4 Layout global

| Regla                  | Valor                                                               |
| ---------------------- | ------------------------------------------------------------------- |
| Contenedor `.shell`    | `min(100% - 64px, 1360px)`                                          |
| Shell ≤900px           | `min(100% - 40px, 1360px)`                                          |
| Shell ≤540px           | `min(100% - 32px, 1360px)`                                          |
| Breakpoints explícitos | `1100px` para `TerritoryEditorialBanner`; `900px`, `540px` globales |
| Pointer query          | `(hover:hover) and (pointer:fine)` para Territory                   |
| Reduced motion         | `prefers-reduced-motion: reduce`                                    |
| Grid desktop comercial | 4 columnas                                                          |
| Grid comercial ≤900px  | 2 columnas                                                          |
| Hero heights           | entre `min(820–920px,100svh)` según página                          |

No existe una retícula CSS explícita de 12 columnas; la intención de 12 columnas se materializa mediante proporciones de grid y `.shell`.

## 2.5 Componentes base

### Botones

- `.button`: min-height `48px`, padding horizontal `24px`, texto `11px/600`, tracking `.13em`.
- Hover: fondo y borde Estirpe, transición genérica `250ms ease`.
- `.button--light`: Caliza/Dark; hover White.
- `.button--outline-light`: transparente con borde blanco al 64%; hover blanco.
- Mobile ≤540px: min-height `46px`, padding horizontal `18px`.

### Text links

- Borde inferior, icono arrow, gap `24px`.
- Hover: icono `translateX(4px)`, `250ms`.
- Variante `light`.

### Product cards

- Media ratio `.82` (equivale aproximadamente a 82:100).
- Placeholder primario y secundario.
- Hover desktop: primaria opacity `0`; secundaria opacity `1`; primaria escala `1.02`.
- Título, subtítulo, precio y swatches.
- No existe touch fallback explícito para la segunda vista.

### Swatches

- Base: `14×14px`; large `28×28px`; mobile base `12×12px`.
- Selección representada por doble ring.
- **VISUAL:** no cambian selección ni producto.

### Accordions

- Estado local `expanded`.
- Botón con `aria-expanded`.
- Icono plus/minus.
- Contenido se monta/desmonta.
- No hay `aria-controls`, IDs ni animación de altura.

### Header

- Desktop: grid `160px 1fr 160px`, altura `76px`.
- Mobile/tablet ≤900px: altura `68px`, menú desktop oculto.
- Overlay en Home, Story, Special y Care.
- Dark en Special y PDP Nocturna.
- Header no es sticky; overlay usa `position:absolute`.

### Footer/Newsletter

- `Footer` renderiza siempre `Newsletter` antes del elemento `<footer>`.
- Newsletter: estado local de envío; no hay API.
- Footer desktop: `1.5fr .8fr .8fr 1.2fr`; tablet 2 columnas; mobile 1.

---

# 03 — Inventario de páginas

## 3.1 Home — `#/`

**Objetivo:** introducción de marca y acceso a Core, Special Edition e Historia.

**Secciones:**

1. Hero “Nuestro origen…” con CTA a colección.
2. “Sin fronteras” original, split lifestyle/texto.
3. “Sin fronteras” adicional, variante full-width experimental.
4. Featured collection de 4 productos sobre fondo Colección Tierra RSM.
5. Split Special Edition.
6. Banner Nuestra Historia.
7. Newsletter global.
8. Footer global.

**Desktop:** hero `min(860px,100svh)`, mínimo `660px`, imagen `cover` centrada; split original `1.55fr/.8fr`, mínimo `650px`; variante full-width mínimo `min(780px,82vw)`, copy desplazado desde `min(58%,790px)`; grid 4 columnas; Special `1.15fr/1fr`, mínimo `700px`; Historia mínimo `700px`.

**Tablet ≤900:** hero `800px`, mínimo `720px`, foco `68% center`; ambos Sin Fronteras a una columna, variante full-width `720px` con foco `43% center`; product grid 2 columnas; Special image se ordena después del copy; Historia mínimo `650px`.

**Mobile ≤540:** hero `760px`, foco `72% center`; split original y Special con media mínima `360px`; variante full-width `620px`, foco `42% center`; grids 2 columnas; Historia mínimo `620px`, foco `55% center`; tipografía reducida.

**Interacciones:** navegación, hover `scale(1.02)` en la imagen del split original, cards y CTAs. Las dos variantes Sin Fronteras navegan a Story. Hero index `01/05` es **VISUAL**, no slideshow.

**Assets implementados:** `home-hero.webp`, `home-sin-fronteras.webp`, `home-collection-bg.webp`, `home-special-edition.webp` y `home-history-banner.webp`. Las imágenes de producto continúan como placeholders.

**Estado:** estructura y assets editoriales IMPLEMENTADOS; la variante full-width Sin Fronteras está marcada `experimental`; contenido comercial SIMULADO.

## 3.2 Colección Core — `#/coleccion`

**Objetivo:** listado comercial de 8 productos mock.

**Secciones:** hero, intro, toolbar, grid, paginación, Newsletter, Footer.

**Desktop:** hero `570px`; 4 columnas.

**Tablet:** hero `620px`; 2 columnas; filtro Color oculto.

**Mobile:** hero `570px`; 2 columnas; label “Ordenar por” oculto.

**Interacciones:**

- `select` cambia estado `sort`, pero **no reordena** productos: SIMULADO.
- Filtros: VISUAL.
- Pagination: VISUAL.
- Cards: Caliza → PDP Core; Nocturna → PDP Dark; resto vuelve a Collection.
- Swatches: VISUAL.

**Diferencia de código:** el `key` del map usa `product.image`, propiedad eliminada del tipo `Product`; Vite transpila sin typecheck, por lo que no bloquea build, pero requiere corrección en implementación productiva.

## 3.3 PDP Core / Caliza — `#/producto/caliza`

**Objetivo:** compra simulada y storytelling.

**Secciones:**

1. Galería.
2. `ProductInfo`.
3. Storytelling lifestyle.
4. Related products.
5. Newsletter/Footer.

**Desktop:** PDP `1.5fr / minmax(340px,.72fr)`; gap `48px`; panel sticky top `24px`; galería 2 columnas con main/wide a ancho completo.

**≤900:** una columna; panel deja de ser sticky; galería gaps `5px`.

**Mobile:** main/wide min-height `430px`; detalles `230px`; compra sigue visible.

**Interacciones:** cantidad, add-to-cart simulado, accordions, product cards. Swatches estáticos.

**Datos:** precio `$1,599 MXN`, disponibilidad y textos son demostrativos.

## 3.4 Special Edition Landing — `#/special-edition`

**Objetivo:** narrativa editorial de Nocturna, separada de la PDP.

**Estructura definitiva:**

1. `SpecialEditionHero`: hero cinematográfico; CTA hace scroll a intro.
2. `EditorialIntro`: “Inspiración en la penumbra”.
3. `SpecialEditionDetails`: tríptico 4:5.
4. Story heading.
5. Tres `EditorialImageText` alternados.
6. Banner lifestyle.
7. `SpecialEditionProductCTA` hacia PDP.
8. Newsletter/Footer.

**Desktop:**

- Hero `min(920px,100svh)`, mínimo `720px`.
- Tríptico 3 columnas, gap `18px`.
- Detalles `1.22fr/1fr`, reverse `1fr/1.22fr`.
- CTA `1.2fr/1fr`, imagen min-height `680px`.

**Tablet ≤900:**

- Tríptico sigue en 3 columnas con gap `12px`.
- CTA pasa a `1fr/1fr`.
- **Riesgo:** a 768px tres columnas pueden resultar estrechas.

**Mobile ≤540:**

- Tríptico 1 columna.
- Todos los detalles se reordenan media → copy.
- Lifestyle `620px`.
- CTA 1 columna; imagen `460px`.

**Animaciones:** `Reveal` con IntersectionObserver threshold `.18`; opacity/translateY `520ms`; una sola ejecución. Hover de imágenes scale `1.012/500ms`.

**Estado:** IMPLEMENTADO. No contiene ProductInfo, quantity, swatches, cart ni accordions.

## 3.5 PDP Special Edition / Nocturna — `#/producto/nocturna`

**Objetivo:** compra simulada de Nocturna.

**Estructura:** galería Dark, `ProductInfo dark`, storytelling “La misma raíz. Otra luz”, Newsletter/Footer.

**Desktop:** misma estructura sticky que Core; top padding `120px`; galería Dark.

**≤900:** panel no sticky; top padding `68px`; storytelling una columna.

**Interacciones:** cantidad, add-to-cart, accordions, swatches visuales, link de vuelta a Special.

**Estado:** SIMULADO. Precio y producto mock; cart no persiste.

## 3.6 Nuestra Historia — `#/nuestra-historia`

**Estructura definitiva:**

1. Hero full-width con CTA a El Origen.
2. `EditorialSplitSection` El Origen, 30/70.
3. `TerritoryGrid`, 4 cards.
4. `TerritoryEditorialBanner`, 4 bloques editoriales.
5. `EditorialSplitSection reverse`, Del Rancho a la Ciudad, 70/30.
6. Newsletter global.
7. Footer global.

**Hero:** `story-hero.webp` como fondo `cover`; `min(860px,100svh)`, mínimo `720px`; foco `52% center`; copy Caliza de ancho máximo `460px` alineado a la izquierda; degradado lateral; CTA con scroll suave a `#story-origin`.

**Splits desktop:** El Origen usa columnas `30fr/70fr`, mínimo `620px`, copy Caliza a la izquierda e imagen `story-origin.webp` a la derecha con `object-position:54% center`. Del Rancho a la Ciudad usa `70fr/30fr`, imagen `story-city.webp` a la izquierda con `object-position:50% center` y copy Paper a la derecha. Ambos usan `object-fit:cover`, sin gap ni radios.

**TerritoryGrid:** se conserva sin cambios: 4/2/1 cards, ratio `3/4`, hover/focus/click y estado `expanded`. Detalle completo en §07.

**TerritoryEditorialBanner:** desktop en cuatro columnas `26fr/25fr/28fr/21fr`, gap `4px`, altura `clamp(460px,42vw,620px)` y padding vertical `4px`; orden: caballo, bloque editorial Dark, arquitectura, puerta provisional. Todas las imágenes usan `object-fit:cover`; caballo `48% center`, arquitectura `50% center`, puerta centrada. En `max-width:1100px` pasa a 2×2 con bloques de mínimo `460px`; en `max-width:540px` pasa a una columna, bloques visuales de mínimo `440px`, copy `390px` y puerta `390px`.

**Tablet ≤900:** splits apilados; Origin copy→media y Reverse media→copy; media `16/9`; TerritoryGrid 2 columnas; banner editorial ya está en 2×2 desde `1100px`.

**Mobile ≤540:** hero `760px`, mínimo `680px`, foco `61% center`; splits con media `4/3`; TerritoryGrid 1 columna; banner editorial vertical.

**Interacciones:** CTA del hero hace scroll suave; TerritoryGrid conserva hover/focus/click. `TerritoryEditorialBanner` no añade interacción.

**Estado:** IMPLEMENTADO.

## 3.7 Cuidado de Gorras — `/pages/cuidado-de-gorras`

**Objetivo:** guía editorial y scroll storytelling.

**Secciones:**

1. Hero + CTA scroll.
2. Intro + marquee.
3. Cuidado cotidiano.
4. `CareScrollStory`, 5 pasos.
5. Conservación reverse.
6. Accordions por material.
7. FAQ.
8. CTA Collection.
9. Newsletter/Footer.

**Desktop:** story `0.82fr/1fr`; visual sticky top `94px`; pasos `70vh`.

**≤900:** story 1 columna; visual sticky top `68px`; pasos `60vh`; accordions y FAQ 1 columna.

**≤540:** ilustración `16/9`, nav horizontal, pasos `62svh`, títulos `36px`.

**Estado:** scroll story IMPLEMENTADO; consejos y catálogo SIMULADOS.

## 3.8 Design System — `#/design-system`

Página de referencia del prototipo:

- Tokens de color.
- Muestras tipográficas.
- Component board Core/Dark.
- Hipótesis Native/Custom.

**Nota de versión:** menciona “Bento Nocturna” aunque la landing Special definitiva ya no usa bento. Este contenido está desactualizado respecto al código vigente.

## 3.9 Comparativa — `#/comparativa`

Tabla editorial de decisiones para Home, Collection, PDP, Special e Historia.

**VISUAL:** sin interacciones.

**Nota de versión:** la fila Special todavía menciona la transición desde “bento de alta densidad”; sirve como histórico, no como especificación vigente.

---

# 04 — Catálogo de componentes

Todos viven en `src/App.tsx`; estilos en `src/index.css`.

|   # | Componente                 | Uso                           | Props/estado/eventos                                                        | Variantes/responsive               |
| --: | -------------------------- | ----------------------------- | --------------------------------------------------------------------------- | ---------------------------------- |
|   1 | `App`                      | Global                        | `page`, `cartCount`, `cartOpen`; routing                                    | Render condicional por ruta        |
|   2 | `Icon`                     | Global                        | `name`, `size`                                                              | 8 iconos inline SVG                |
|   3 | `ImagePlaceholder`         | Todas las páginas             | `label`, `backgroundColor`, `aspectRatio`, `variant`, `className`, `corner` | light/dark/corner                  |
|   4 | `Header`                   | Global                        | `page`, `navigate`, `cartCount`, `openCart`; `menuOpen`                     | solid/overlay/dark; desktop/mobile |
|   5 | `SectionHeading`           | Home, PDP, DS                 | eyebrow/title/copy/light                                                    | light/dark                         |
|   6 | `TextLink`                 | Home, PDP, Story/Care         | children/onClick/light                                                      | arrow hover                        |
|   7 | `ProductCard`              | Home, Collection, PDP related | product/navigate                                                            | Core/Special badge                 |
|   8 | `Home`                     | Home                          | navigate                                                                    | responsive page                    |
|   9 | `Collection`               | Collection                    | navigate; `sort`                                                            | filtros/paginación visual          |
|  10 | `Quantity`                 | PDPs                          | value/setValue/dark                                                         | light/dark                         |
|  11 | `Accordion`                | PDP, Care, DS                 | title/children/dark/open; `expanded`                                        | light/dark/open                    |
|  12 | `ProductInfo`              | PDPs                          | dark/onAdd; `quantity`                                                      | Caliza/Nocturna                    |
|  13 | `CorePdp`                  | PDP Core                      | navigate/onAdd                                                              | —                                  |
|  14 | `Reveal`                   | Special                       | children/className; `visible`                                               | one-shot viewport reveal           |
|  15 | `SpecialEditionHero`       | Special Landing               | sin props                                                                   | full viewport                      |
|  16 | `EditorialIntro`           | Special Landing               | sin props                                                                   | centered                           |
|  17 | `SpecialEditionDetails`    | Special Landing               | datos locales                                                               | 3→1 columnas                       |
|  18 | `EditorialImageText`       | Special Landing               | title/copy/label/color/reverse                                              | normal/reverse                     |
|  19 | `SpecialEditionProductCTA` | Special Landing               | navigate                                                                    | split→stack                        |
|  20 | `SpecialLanding`           | Special Landing               | navigate                                                                    | ensamblador                        |
|  21 | `NocturnaPdp`              | PDP Dark                      | navigate/onAdd                                                              | —                                  |
|  22 | `EditorialSplitSection`    | Story                         | id/eyebrow/title/copy/imageSrc/imageAlt/variant/reverse                     | origin/city; normal/reverse        |
|  23 | `TerritoryCard`            | Story                         | title/copy/label/backgroundColor; `expanded`                                | hover/focus/expanded               |
|  24 | `TerritoryGrid`            | Story                         | datos locales                                                               | 4/2/1 columnas                     |
|  25 | `TerritoryEditorialBanner` | Story                         | sin props; cuatro bloques estáticos                                         | 4 cols/2×2/1 col                   |
|  26 | `Story`                    | Historia                      | sin props                                                                   | ensamblador                        |
|  27 | `DesignSystem`             | DS                            | navigate                                                                    | —                                  |
|  28 | `CareIllustration`         | Care                          | `step`                                                                      | 5 estados SVG                      |
|  29 | `CareStep`                 | Care                          | step/index/active/register/select                                           | active/inactive                    |
|  30 | `CareScrollStory`          | Care                          | `activeStep`, refs                                                          | sticky + observer                  |
|  31 | `CareMaterialAccordion`    | Care                          | title/children                                                              | wrapper de Accordion               |
|  32 | `CarePage`                 | Care                          | navigate                                                                    | ensamblador                        |
|  33 | `Comparison`               | Comparativa                   | datos locales                                                               | —                                  |
|  34 | `Newsletter`               | Global                        | email/sent                                                                  | form/confirmation                  |
|  35 | `Footer`                   | Global                        | navigate                                                                    | incluye Newsletter                 |
|  36 | `CartDrawer`               | Global                        | open/close/count                                                            | empty/with item                    |

**Conteo identificado:** 36 componentes, incluyendo `App`.

---

# 05 — Inventario de interacciones

| ID      | Página        | Componente         | Trigger             | Estado inicial → acción → final                     | Desktop / Mobile / Keyboard                       | Implementación                    | Estado                   |
| ------- | ------------- | ------------------ | ------------------- | --------------------------------------------------- | ------------------------------------------------- | --------------------------------- | ------------------------ |
| INT-001 | Global        | Header logo        | Click/tap           | Página actual → navigate home                       | Igual; botón keyboard nativo                      | `Header.go`, `App.navigate`       | IMPLEMENTADO             |
| INT-002 | Global        | Desktop nav        | Click               | Página actual → ruta destino; active underline      | Desktop; oculto ≤900; keyboard nativo             | `Header.links`                    | IMPLEMENTADO             |
| INT-003 | Global        | Desktop nav        | Hover/active        | Underline right `100%` → `0`                        | Solo desktop hover; focus no underline específico | CSS `.desktop-nav button::after`  | IMPLEMENTADO             |
| INT-004 | Global        | Mobile menu        | Click/tap           | Cerrado → fullscreen open                           | Solo ≤900; botones keyboard                       | `menuOpen`                        | IMPLEMENTADO             |
| INT-005 | Global        | Mobile menu        | Close/nav click     | Open → closed + navegación                          | Mobile; no Escape/focus trap                      | `Header.go`, `setMenuOpen`        | IMPLEMENTADO con límites |
| INT-006 | Global        | Search             | Click               | Sin cambio                                          | Desktop/mobile; botón accesible                   | Header                            | VISUAL                   |
| INT-007 | Global        | Account            | Click               | Sin cambio                                          | Desktop only                                      | Header                            | VISUAL                   |
| INT-008 | Global        | Cart icon          | Click/tap           | Drawer cerrado → abierto                            | Igual; keyboard button                            | `setCartOpen(true)`               | IMPLEMENTADO             |
| INT-009 | Global        | Cart drawer        | Backdrop/close      | Abierto → cerrado                                   | Igual; no Escape/focus trap                       | `CartDrawer.close`                | IMPLEMENTADO con límites |
| INT-010 | Global        | Routing            | Click/hash/popstate | Page key cambia y scroll top                        | Cuidado usa pathname; demás hash                  | `navigate`, `syncRoute`           | IMPLEMENTADO             |
| INT-011 | Global        | Button             | Hover               | Dark → Estirpe; light → White                       | Hover desktop; focus global                       | CSS `.button`                     | IMPLEMENTADO             |
| INT-012 | Global        | TextLink           | Hover               | Arrow `0` → `translateX(4px)`                       | Hover desktop                                     | CSS `.text-link`                  | IMPLEMENTADO             |
| INT-013 | Home          | Lifestyle          | Hover               | Placeholder escala `1` → `1.02`                     | Desktop hover; no touch equivalent                | `.borderless:hover`               | IMPLEMENTADO             |
| INT-014 | Product grids | ProductCard media  | Hover               | Primary visible → secondary visible                 | Desktop; no touch fallback                        | CSS card hover                    | IMPLEMENTADO             |
| INT-015 | Product grids | ProductCard        | Click               | Según producto → Caliza/Nocturna/Collection         | Igual; keyboard button                            | `ProductCard.target`              | IMPLEMENTADO             |
| INT-016 | Product grids | Swatches           | Click               | Sin cambio; primer swatch permanece selected        | Igual                                             | No handler                        | VISUAL                   |
| INT-017 | Collection    | Sort select        | Change              | Label cambia; orden no cambia                       | Igual; select nativo                              | `setSort`                         | SIMULADO                 |
| INT-018 | Collection    | Filters            | Click               | Sin cambio                                          | Botones nativos                                   | No handler                        | VISUAL                   |
| INT-019 | Collection    | Pagination         | Click               | Sin cambio                                          | Botones nativos                                   | No handler                        | VISUAL                   |
| INT-020 | PDP           | Quantity           | Click               | Valor ±1; mínimo 1                                  | Igual; keyboard button                            | `Quantity`                        | IMPLEMENTADO             |
| INT-021 | PDP           | Add to cart        | Click               | Count global aumenta por quantity y drawer abre     | Igual                                             | `ProductInfo.onAdd`, `App.add`    | SIMULADO                 |
| INT-022 | PDP/Care/DS   | Accordion          | Click               | Collapsed ↔ expanded; contenido mount/unmount       | Igual; Enter/Space nativo                         | `Accordion`                       | IMPLEMENTADO             |
| INT-023 | Special       | Hero CTA           | Click               | Scroll a `#special-editorial`                       | Smooth salvo reduced motion                       | `scrollToEditorial`               | IMPLEMENTADO             |
| INT-024 | Special       | Reveal             | Viewport            | opacity 0/translate 22 → visible                    | Todos; one-shot                                   | `Reveal`, IntersectionObserver    | IMPLEMENTADO             |
| INT-025 | Special       | Editorial media    | Hover               | scale `1` → `1.012`                                 | Desktop hover                                     | CSS `.se-product-card/.se-detail` | IMPLEMENTADO             |
| INT-026 | Story         | TerritoryCard      | Hover/focus         | Overlay/panel oculto → visible                      | Desktop hover/focus                               | CSS territory selectors           | IMPLEMENTADO             |
| INT-027 | Story         | TerritoryCard      | Click/tap           | `expanded=false` ↔ `true`; icon +/−                 | Todos; Enter/Space button                         | `TerritoryCard`                   | IMPLEMENTADO             |
| INT-028 | Care          | Hero continue      | Click               | Scroll a `#care-intro`                              | Smooth salvo reduced motion                       | `CarePage`                        | IMPLEMENTADO             |
| INT-029 | Care          | Scroll steps       | Scroll              | Observer elige mayor ratio visible y actualiza step | Desktop/mobile                                    | `CareScrollStory`                 | IMPLEMENTADO             |
| INT-030 | Care          | Progress nav       | Click/tap           | Step activo cambia y se centra                      | Vertical desktop; horizontal mobile               | `selectStep`                      | IMPLEMENTADO             |
| INT-031 | Care          | CareStep           | Click               | Igual que progress nav                              | Igual; keyboard button                            | `CareStep.select`                 | IMPLEMENTADO             |
| INT-032 | Care          | Illustration state | Active step change  | SVG base estable + action group nuevo               | Igual                                             | `CareIllustration(step)`          | IMPLEMENTADO             |
| INT-033 | Newsletter    | Form submit        | Submit email válido | Form → mensaje de gracias                           | Igual; input required                             | `Newsletter`                      | SIMULADO                 |
| INT-034 | Footer        | Links              | Click               | Navega a rutas internas                             | Igual; Contacto sin acción                        | `Footer.navigate`                 | MIXTO                    |
| INT-035 | Cart          | Checkout           | Click               | Sin cambio                                          | Igual                                             | No handler                        | VISUAL                   |
| INT-036 | Story         | Hero CTA           | Click/tap           | Posición actual → scroll a `#story-origin`          | Igual; botón keyboard nativo                      | `Story`, `scrollIntoView`         | IMPLEMENTADO             |

**Conteo identificado:** 36 interacciones/estados interactivos.

---

# 06 — Inventario de animaciones

| ID       | Componente              | Trigger              |              Propiedades | Duración | Easing                                              | Repite/salida                 | Técnica                    |
| -------- | ----------------------- | -------------------- | -----------------------: | -------- | --------------------------------------------------- | ----------------------------- | -------------------------- |
| ANIM-001 | Desktop nav underline   | hover/active         |                  `right` | 250ms    | default `ease`                                      | reversible                    | CSS                        |
| ANIM-002 | Mobile nav              | menu state           |      opacity, translateY | 300ms    | `ease`                                              | reversible                    | CSS + React state          |
| ANIM-003 | Button                  | hover                |       background, border | 250ms    | `ease`                                              | reversible                    | CSS                        |
| ANIM-004 | TextLink arrow          | hover                |           translateX 4px | 250ms    | default `ease`                                      | reversible                    | CSS                        |
| ANIM-005 | Home lifestyle          | hover                |               scale 1.02 | 700ms    | `ease`                                              | reversible                    | CSS                        |
| ANIM-006 | Product card image      | hover                |                  opacity | 350ms    | default                                             | reversible                    | CSS                        |
| ANIM-007 | Product card image      | hover                |          transform scale | 500ms    | default                                             | reversible                    | CSS                        |
| ANIM-008 | Special Reveal          | viewport             | opacity, translateY 22px | 520ms    | opacity `ease`; transform cubic-bezier(.22,1,.36,1) | one-shot; no salida           | CSS + IntersectionObserver |
| ANIM-009 | Special image hover     | hover                |              scale 1.012 | 500ms    | `ease`                                              | reversible                    | CSS                        |
| ANIM-010 | Territory overlay       | hover/focus/expanded |                  opacity | 360ms    | `ease`                                              | reversible                    | CSS                        |
| ANIM-011 | Territory panel         | hover/focus/expanded |        translateY 100%→0 | 360ms    | cubic-bezier(.22,1,.36,1)                           | reversible                    | CSS                        |
| ANIM-012 | Territory panel opacity | hover/focus/expanded |                  opacity | 280ms    | `ease`                                              | reversible                    | CSS                        |
| ANIM-013 | Territory toggle        | hover/focus/expanded |                  opacity | 240ms    | `ease`                                              | reversible, fine pointer only | CSS                        |
| ANIM-014 | Care marquee            | automático           |        translateX 0→-50% | 24s      | linear                                              | infinite                      | CSS keyframes              |
| ANIM-015 | Care SVG action         | step change/mount    |  opacity, translateY 8px | 420ms    | cubic-bezier(.22,1,.36,1)                           | cada cambio                   | CSS keyframes + React      |
| ANIM-016 | Care nav buttons        | hover/active         |  color/background/border | 300ms    | `ease`                                              | reversible                    | CSS                        |
| ANIM-017 | Care step emphasis      | active step          | opacity, translateY 20px | 400ms    | `ease`                                              | reversible                    | CSS + IntersectionObserver |
| ANIM-018 | Cart backdrop           | open/close           |                  opacity | 300ms    | default                                             | reversible                    | CSS + state                |
| ANIM-019 | Cart drawer             | open/close           |               translateX | 350ms    | `ease`                                              | reversible                    | CSS + state                |

Delays: ninguno definido.

Reduced motion:

- Regla global lleva transiciones y animaciones a `0.01ms`.
- Marquee se desactiva explícitamente.
- Scroll programático consulta `matchMedia` en Special y Care.
- `App.navigate()` siempre usa `behavior:"smooth"` y no consulta reduced motion: riesgo pendiente.

---

# 07 — Scroll interactions

## 7.1 Header

El Header **no es sticky**. Es:

- relativo en páginas normales;
- absoluto y superpuesto en Home, Story, Special y Care.

## 7.2 PDP ProductInfo

- Sticky desktop: `.product-info { position:sticky; top:24px; }`.
- Se libera al terminar el contenedor PDP.
- ≤900px cambia a `position:static`.

## 7.3 Special Edition reveals

- `Reveal` crea un observer por instancia.
- Threshold `.18`.
- Al entrar: `visible=true`, observer se desconecta.
- No revierte al salir.
- Sin fallback si `IntersectionObserver` no existe.

## 7.4 Nuestra Historia — Territory Cards

| Propiedad      | Implementación real                                                     |
| -------------- | ----------------------------------------------------------------------- |
| Cantidad       | 4                                                                       |
| Desktop grid   | 4 columnas                                                              |
| Tablet ≤900    | 2 columnas                                                              |
| Mobile ≤540    | 1 columna                                                               |
| Ratio          | `3/4`                                                                   |
| Estado inicial | Placeholder visible; overlay y panel opacity 0; panel translateY(100%)  |
| Hover          | overlay y panel visibles                                                |
| Focus visible  | mismo resultado que hover                                               |
| Click/tap      | alterna `expanded`; persiste hasta nuevo click                          |
| Indicador      | círculo 42×42, +/−; oculto inicialmente solo en fine pointer            |
| Overlay        | gradiente dark bottom-up                                                |
| Panel          | padding `28px 72px 28px 28px`; mobile `24px 72px 24px 24px`             |
| Duraciones     | overlay 360ms; panel transform 360ms; panel opacity 280ms; toggle 240ms |
| Keyboard       | botón nativo; Enter/Space; `aria-expanded`                              |
| Cierre         | segundo click/tap; hover se cierra al salir salvo que `expanded=true`   |

## 7.5 Cuidado de Gorras — Scroll Storytelling

### Estructura

- 5 pasos.
- Columna visual sticky + columna de pasos.
- La sección tiene `data-shopify-candidate="rsm-cap-care-steps"`.
- Sticky se limita naturalmente por el contenedor `.care-story__layout`.

### Activación

```ts
new IntersectionObserver(callback, {
  rootMargin: "-35% 0px -35% 0px",
  threshold: [0.05, 0.2, 0.4],
});
```

El callback:

1. filtra entries intersecting;
2. ordena por `intersectionRatio` descendente;
3. usa la primera;
4. lee `data-care-step`;
5. actualiza `activeStep`.

### SVG

- ViewBox constante `0 0 640 520`.
- Base de gorra constante.
- Step 01: zonas/paneles resaltados.
- Step 02: cepillo y partículas.
- Step 03: mancha y paño.
- Step 04: superficie y líneas de aire.
- Step 05: soporte.
- La action group se monta/desmonta; animación 420ms.

### Sincronización

- `activeStep` controla SVG, step emphasis, `aria-current` y `01/05`.
- Progress buttons y CareStep llaman `selectStep(index)`.
- `selectStep` actualiza estado y usa `scrollIntoView({block:"center"})`.

### Desktop

- Layout `0.82fr/1fr`.
- Sticky visual `top:94px`.
- Ilustración ratio 1:1.
- Navegación vertical.
- Steps min-height `70vh`.

### Tablet/mobile

- ≤900: una columna; sticky `top:68px`; ilustración `16/10`; steps `60vh`.
- ≤540: ilustración `16/9`; nav horizontal; steps `62svh`.
- No existe fallback accordion: sticky continúa activo.

### Reduced motion

- SVG y step transitions pasan a 0.01ms.
- Step selection usa scroll `auto`.
- Observer y cambio de estado permanecen funcionales.

---

# 08 — Responsive Specification

## 8.1 Breakpoints reales

| Breakpoint         | Uso                            |
| ------------------ | ------------------------------ |
| Base >900px        | Desktop                        |
| `max-width:1100px` | `TerritoryEditorialBanner` 2×2 |
| `max-width:900px`  | Tablet y mobile amplio         |
| `max-width:540px`  | Mobile                         |
| hover fine pointer | Territory indicator behavior   |

No hay breakpoints específicos `768px`, `1024px` o `390px`; el banner editorial entra en su regla `max-width:1100px`, por lo que `1024px` usa 2×2.

## 8.2 Matriz por componente

| Componente          | Desktop              | ≤900px                       | ≤540px                |
| ------------------- | -------------------- | ---------------------------- | --------------------- |
| Header              | 3 columnas, 76px     | nav oculta, menú, 68px       | igual                 |
| Shell               | 64px total gutter    | 40px                         | 32px                  |
| Product grid        | 4 cols               | 2 cols                       | 2 cols                |
| PDP                 | 2 cols + sticky      | 1 col, static                | alturas reducidas     |
| Special triptych    | 3 cols               | 3 cols                       | 1 col                 |
| Special detail      | 55/45 alternado      | mismo, menor gap             | 1 col media→copy      |
| Story split         | 30/70; reverse 70/30 | 1 col con orden por variante | 1 col; media 4/3      |
| TerritoryGrid       | 4 cols               | 2 cols                       | 1 col                 |
| Territory editorial | 4 cols 26/25/28/21   | 2×2 desde ≤1100px            | 1 col                 |
| Care story          | 2 cols/sticky        | 1 col/sticky                 | 1 col/sticky compacto |
| Footer              | 4 cols               | 2 cols                       | 1 col                 |
| Newsletter form     | row                  | row                          | stack                 |

Riesgos observados:

- Special triptych mantiene 3 columnas hasta 540px.
- Swatches/touch controls son menores a 44px.
- Care progress buttons mobile son 32×32px.
- No hay pruebas visuales automatizadas en 375/390/768/1024/1440.

---

# 09 — Navegación y user journeys

## 9.1 Matriz

| Origen          | Elemento           | Acción | Destino                        | Estado                        |
| --------------- | ------------------ | ------ | ------------------------------ | ----------------------------- |
| Header          | Logo               | click  | Home                           | IMPLEMENTADO                  |
| Header          | Colección          | click  | Collection                     | IMPLEMENTADO                  |
| Header          | Special Edition    | click  | Special Landing                | IMPLEMENTADO                  |
| Header          | Nuestra historia   | click  | Story                          | IMPLEMENTADO                  |
| Header          | Search             | click  | ninguno                        | VISUAL                        |
| Header          | Account            | click  | ninguno                        | VISUAL                        |
| Header          | Bag                | click  | Cart drawer                    | IMPLEMENTADO                  |
| Home            | Explorar colección | click  | Collection                     | IMPLEMENTADO                  |
| Home            | Sin fronteras      | click  | Story                          | IMPLEMENTADO                  |
| Home            | Featured Caliza    | click  | PDP Caliza                     | IMPLEMENTADO                  |
| Home            | Special split      | click  | Special Landing                | IMPLEMENTADO                  |
| Home            | Historia banner    | click  | Story                          | IMPLEMENTADO                  |
| Collection      | Caliza card        | click  | PDP Caliza                     | IMPLEMENTADO                  |
| Collection      | Nocturna card      | click  | PDP Nocturna                   | IMPLEMENTADO                  |
| Collection      | Otras cards        | click  | Collection actual              | IMPLEMENTADO pero placeholder |
| PDP Core        | Related            | click  | producto/collection según card | IMPLEMENTADO                  |
| Special Landing | Hero CTA           | scroll | Intro                          | IMPLEMENTADO                  |
| Special Landing | Descubrir Nocturna | click  | PDP Nocturna                   | IMPLEMENTADO                  |
| PDP Nocturna    | Conocer concepto   | click  | Special Landing                | IMPLEMENTADO                  |
| Care            | CTA hero           | scroll | Care intro                     | IMPLEMENTADO                  |
| Care            | Explorar colección | click  | Collection                     | IMPLEMENTADO                  |
| Footer          | Cuidado            | click  | `/pages/cuidado-de-gorras`     | IMPLEMENTADO                  |
| Footer          | Design System      | click  | Design System                  | IMPLEMENTADO                  |
| Footer          | Comparativa        | click  | Comparativa                    | IMPLEMENTADO                  |
| Footer          | Contacto           | click  | ninguno                        | VISUAL                        |
| Cart            | Checkout           | click  | ninguno                        | VISUAL                        |

## 9.2 Flujos requeridos

- Home → Collection: verificado en código.
- Home → Special: verificado.
- Home → Story: verificado.
- Collection → Core PDP: solo Caliza.
- Special Landing → Special PDP: verificado.
- Footer → Care: verificado.
- Header → Care: **PENDIENTE**; no existe link en header.

---

# 10 — Assets e imágenes

## 10.1 Assets reales

| Ruta                                                  | Tipo     | Uso / fuente original                                                                         |
| ----------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `public/assets/rsm-logo-dark.png`                     | Logo PNG | Header claro                                                                                  |
| `public/assets/rsm-logo-white.png`                    | Logo PNG | Header overlay/dark, mobile nav, Footer                                                       |
| `public/favicon.png`                                  | PNG      | favicon                                                                                       |
| `public/assets/home-hero.webp`                        | WebP     | Home Hero; fuente `home-HERO.png`                                                             |
| `public/assets/home-sin-fronteras.webp`               | WebP     | Ambas variantes Sin Fronteras; fuente `home-SIN FRONTERAS-2.jpg`                              |
| `public/assets/home-collection-bg.webp`               | WebP     | Fondo Colección Tierra RSM; fuente `home-bg-la-coleccion-tierra-RSM.png`                      |
| `public/assets/home-special-edition.webp`             | WebP     | Split Special Edition; fuente `home-special-edition-estirpe-de-lujo.png`                      |
| `public/assets/home-history-banner.webp`              | WebP     | Banner Nuestra Historia; fuente `home-banner-ANTES QUE UNA MARCA.png`                         |
| `public/assets/story-hero.webp`                       | WebP     | Story Hero; fuente `nosotros-hero-ANTES QUE UNA MARCA copy.png`                               |
| `public/assets/story-origin.webp`                     | WebP     | El Origen; fuente `nosotros-banner-EL ORIGEN.png`                                             |
| `public/assets/story-territory-horse.webp`            | WebP     | Banner editorial, caballo; fuente `nosotros-EL TERRITORIO HORSE.png`                          |
| `public/assets/story-territory-architecture.webp`     | WebP     | Banner editorial, arquitectura; fuente `nosotros-EL TERRITORIO.png`                           |
| `public/assets/story-city.webp`                       | WebP     | Del Rancho a la Ciudad; fuente `nosotros-banner-del-rancho-a-la-ciudadpng.png`                |
| `public/assets/story-territory-door-provisional.webp` | WebP     | **PROVISIONAL:** puerta recortada de `nosotros-mokcup.png`; sustituir al recibir asset fuente |

## 10.2 Placeholders

`ImagePlaceholder` sigue siendo un `<div role="img">` en módulos sin fotografía final, incluidos productos y `TerritoryGrid`. Home editorial y los nuevos módulos fotográficos de Story ya usan fondos CSS o `<img>` reales. En los placeholders:

- no existe `object-fit`/`object-position` real;
- el ratio se aplica con CSS `aspect-ratio` o por dimensiones del contenedor;
- el label se expone mediante `aria-label`;
- la marca visual interna es `aria-hidden`.

Al sustituir por imágenes reales, implementar `width/height:100%`, `object-fit:cover` y un setting de `object-position`.

## 10.3 Inventario de recursos pendientes

| Página       | Sección          | Asset requerido                                                | Aspect ratio/contenedor             | Desktop/Mobile | Prioridad |
| ------------ | ---------------- | -------------------------------------------------------------- | ----------------------------------- | -------------- | --------- |
| Home         | Featured         | 4 fotos producto + segunda vista                               | `.82`                               | ambos          | Alta      |
| Collection   | Hero             | Paisaje norte                                                  | 570–620px                           | ambos          | Alta      |
| Collection   | Cards            | 8 productos + segunda vista                                    | `.82`                               | ambos          | Alta      |
| PDP Core     | Gallery          | main, side, 2 details                                          | full width + 1:1 aprox              | ambos          | Alta      |
| PDP Core     | Story            | Lifestyle                                                      | split ≥640px                        | ambos          | Media     |
| Special      | Hero             | HERO NOCTURNA                                                  | viewport 720–920px                  | ambos          | Alta      |
| Special      | Presentation     | vista general, emblema, material                               | 4:5                                 | ambos          | Alta      |
| Special      | Story            | emblema/material/ajuste                                        | 4:5                                 | ambos          | Alta      |
| Special      | Lifestyle        | rancho/ciudad                                                  | banner ≥760px desktop               | ambos          | Alta      |
| Special      | CTA              | producto                                                       | min-height 680/460px                | ambos          | Alta      |
| PDP Nocturna | Gallery          | main, macro, material, detail                                  | como PDP Core                       | ambos          | Alta      |
| PDP Nocturna | Story            | lifestyle                                                      | 700/500px                           | ambos          | Media     |
| Story        | TerritoryGrid    | 4 imágenes: caballo, arquitectura, paisaje, tradición          | `3/4`                               | ambos          | Alta      |
| Story        | Banner editorial | Asset fuente definitivo de puerta; hoy usa recorte provisional | 21% desktop; bloque vertical mobile | ambos          | Media     |
| Care         | Hero             | care guide                                                     | viewport 690–860px                  | ambos          | Media     |
| Care         | Everyday         | cuidado cotidiano                                              | 6:5; tablet 4:3; mobile 1:1         | ambos          | Media     |
| Care         | Storage          | almacenamiento                                                 | 6:5; tablet 4:3; mobile 1:1         | ambos          | Media     |

---

# 11 — Accesibilidad

## Implementado

- Focus outline global `2px solid Arcilla`.
- Botones nativos para navegación e interacciones.
- `aria-label` en iconos funcionales y placeholders.
- `aria-expanded` en Accordion y TerritoryCard.
- `aria-current` en Care steps/progress.
- Label oculto para newsletter.
- `required` y `type=email`.
- SVG Care con `role=img` y label dinámico.
- Reduced motion global.

## Problemas/riesgos observados

| Hallazgo                                                                         | Severidad     |
| -------------------------------------------------------------------------------- | ------------- |
| Mobile nav no tiene focus trap, Escape, focus return ni scroll lock              | Alta          |
| Cart dialog no tiene focus trap, Escape ni focus return                          | Alta          |
| Search, Account, Checkout, Contacto aparentan acción pero no funcionan           | Media         |
| Swatches no tienen `aria-pressed` ni estado funcional                            | Media         |
| Accordion no usa `aria-controls`/ID                                              | Media         |
| Product image hover no tiene equivalente touch                                   | Media         |
| Reveal queda invisible si IntersectionObserver no está disponible                | Media         |
| App navigate smooth no respeta reduced motion                                    | Baja/Media    |
| Targets swatch/progress menores a 44px                                           | Media         |
| Contraste no auditado con herramienta; solo inspección de valores                | NO VERIFICADO |
| Jerarquía de headings depende de cada página; no hay auditoría de outline        | NO VERIFICADO |
| Placeholder role img puede generar verbosity si todos se mantienen en producción | Baja          |

---

# 12 — Mapeo a Shopify Prestige

Clasificación de diseño; no es auditoría del tema.

| Página/sección                | Componente Make            | Clasificación  | Equivalente probable               | CSS | JS              | Theme Editor recomendado                                |
| ----------------------------- | -------------------------- | -------------- | ---------------------------------- | --- | --------------- | ------------------------------------------------------- |
| Header                        | Header                     | Por validar    | Header Prestige existente          | Sí  | Por validar     | transparencia, scheme, logo                             |
| Home hero                     | Home hero                  | Native + CSS   | Slideshow/Image banner probable    | Sí  | No              | desktop/mobile image, alignment, overlay, CTA           |
| Home split original           | borderless                 | Native + CSS   | Image with text probable           | Sí  | No              | image, copy, order                                      |
| Home Sin Fronteras full-width | borderless-fullwidth       | Native + CSS   | Image banner                       | Sí  | No              | variante experimental, image, overlay, copy             |
| Product grids                 | ProductCard                | Native + CSS   | Featured collection/product grid   | Sí  | Native          | collection, limit, quick UI                             |
| Home Special split            | special-split              | Native + CSS   | Image with text                    | Sí  | No              | image, colors, CTA                                      |
| Story banner                  | history-banner             | Native + CSS   | Image banner                       | Sí  | No              | image, overlay, alignment                               |
| Collection                    | Collection                 | Native + CSS   | Collection template                | Sí  | Native          | hero, filters, sort                                     |
| PDPs                          | ProductInfo/ProductGallery | Native + CSS   | Product template                   | Sí  | Native          | media, sticky, blocks, accordions                       |
| Special hero                  | SpecialEditionHero         | Native + CSS   | Image banner                       | Sí  | Solo scroll CTA | image, overlay, copy                                    |
| Special intro                 | EditorialIntro             | Native + CSS   | Rich text                          | Sí  | Reveal opcional | copy, spacing                                           |
| Special triptych              | SpecialEditionDetails      | Native + CSS   | Multicolumn probable               | Sí  | Reveal opcional | 3 items                                                 |
| Special details               | EditorialImageText         | Native + CSS   | Image with text, alternado         | Sí  | Reveal opcional | image, reverse, copy                                    |
| Special lifestyle             | se-lifestyle               | Native + CSS   | Image banner                       | Sí  | Reveal opcional | image, alignment                                        |
| Special product CTA           | SpecialEditionProductCTA   | Native + CSS   | Image with text/product CTA        | Sí  | navegación      | product/link                                            |
| Story splits                  | EditorialSplitSection      | Native + CSS   | Image with text                    | Sí  | No              | reverse, image, copy                                    |
| Territory                     | TerritoryGrid/Card         | **RSM Custom** | `rsm-territory-grid`               | Sí  | Sí              | 4 cards, labels, colors, images                         |
| Territory editorial           | TerritoryEditorialBanner   | Native + CSS   | Multicolumn/Image banner compuesto | Sí  | No              | 4 bloques, 2×2 tablet, stack mobile, puerta provisional |
| Care hero/intro/splits        | CarePage                   | Native + CSS   | image banner/rich text/image-text  | Sí  | scroll CTA      | copy/images                                             |
| Care scroll story             | CareScrollStory            | **RSM Custom** | `rsm-cap-care-steps`               | Sí  | Sí              | 5 steps, SVG, copy                                      |
| Care accordions               | Accordion                  | Native + CSS   | Collapsible content probable       | Sí  | Native          | heading/items                                           |
| Newsletter                    | Newsletter                 | Native + CSS   | Newsletter                         | Sí  | Shopify form    | heading/copy                                            |
| Footer                        | Footer                     | Native + CSS   | Footer                             | Sí  | Native links    | menus, legal                                            |
| Design System/Comparativa     | pages prototype            | No storefront  | Documentación interna              | —   | —               | no implementar como storefront salvo solicitud          |

No se recomienda modificar Core de Prestige sin validar antes:

1. capacidades reales de Header overlay;
2. product sticky;
3. filtros;
4. image-with-text ordering;
5. animations disponibles.

---

# 13 — Dependencias y riesgos

## Hechos observados

- Sin librerías de animación.
- Google Fonts es dependencia de red.
- Todo el catálogo es array mock.
- Carrito y newsletter viven solo en memoria.
- No hay autenticación, búsqueda, checkout ni persistencia.
- Home y Story ya incluyen fotografías WebP; producto, otras páginas y `TerritoryGrid` conservan placeholders.
- Routing mezcla hash con pathname para Care.
- Build Vite no ejecuta typecheck.
- CSS antiguo de la primera Special Landing (`.special-hero`, `.bento`, `.detail-triptych`, `.special-cta`) permanece sin uso.

## Riesgos

1. Divergencia entre rutas Shopify y hash routing del prototipo.
2. Datos de producto no confirmados.
3. Interacciones visuales pueden confundirse con funcionales.
4. Sticky/IntersectionObserver requiere QA en Safari iOS.
5. Imágenes oficiales pueden cambiar composición por focal point; la puerta del banner editorial es provisional.
6. Special triptych tablet puede quedar estrecho.
7. DS page contiene referencia obsoleta al bento.
8. Collection usa `product.image` inexistente en key.
9. No hay test automatizado ni captura visual.
10. No se verificó contraste WCAG mediante software.

---

# 14 — Checklist de implementación

## Global

- [ ] Replicar tokens cromáticos.
- [ ] Configurar Cormorant Garamond 600 y Figtree 400/500/600.
- [ ] Implementar shell 1360px y gutters.
- [ ] Validar Header Prestige antes de custom.
- [ ] Implementar focus, Escape, focus trap y scroll lock.
- [ ] Sustituir mocks por Shopify data.
- [ ] Sustituir placeholders por assets oficiales.
- [ ] QA 1440/1024/768/430/390/375.
- [ ] QA reduced motion.
- [ ] QA WCAG AA.

## Home

- [ ] 6 secciones editoriales en orden, más Newsletter/Footer.
- [ ] Hero asset, `cover`, focal point, overlay y CTA.
- [ ] Sin Fronteras split original.
- [ ] Sin Fronteras full-width experimental; decidir si se conserva en Shopify.
- [ ] Grid 4/2 columnas.
- [ ] Fondo Colección Tierra RSM sin alterar cards.
- [ ] Special split con asset full-size.
- [ ] Story banner con asset, overlay y focal point.
- [ ] QA visual.

## Collection

- [ ] Hero.
- [ ] Filtros basados en atributos reales.
- [ ] Sorting real.
- [ ] Pagination real.
- [ ] Product cards/second image.
- [ ] Swatches funcionales o retirados.
- [ ] Responsive.

## PDP Core

- [ ] Product media.
- [ ] Sticky info desktop.
- [ ] Variants/cantidad.
- [ ] Add-to-cart Shopify.
- [ ] Accordions.
- [ ] Story/related.
- [ ] Datos oficiales.

## Special Landing

- [ ] Hero/scroll CTA.
- [ ] Intro.
- [ ] Triptych 4:5.
- [ ] 3 image-text blocks.
- [ ] Lifestyle banner.
- [ ] CTA a PDP.
- [ ] Reveal y reduced motion.
- [ ] No incluir controles PDP.

## PDP Nocturna

- [ ] Galería Dark.
- [ ] ProductInfo.
- [ ] Variants/cantidad/cart.
- [ ] Accordions.
- [ ] Story.
- [ ] Link a landing.

## Nuestra Historia

- [ ] Hero asset/cover/degradado/CTA y focal point responsive.
- [ ] Origin split full-width 30/70.
- [ ] TerritoryGrid 4/2/1.
- [ ] Hover/focus/tap.
- [ ] Expanded state.
- [ ] TerritoryEditorialBanner 4 cols → 2×2 en ≤1100 → 1 col en ≤540.
- [ ] Sustituir puerta provisional por asset fuente definitivo.
- [ ] Reverse split full-width 70/30.
- [ ] Assets editoriales WebP y `object-position`.

## Cuidado de Gorras

- [ ] Hero/intro.
- [ ] Marquee con reduced motion.
- [ ] Everyday/storage.
- [ ] `rsm-cap-care-steps`.
- [ ] 5 SVG states.
- [ ] Sticky containment.
- [ ] Observer/progress.
- [ ] Accordions y FAQ.
- [ ] Copy legal validado.

## Newsletter/Footer

- [ ] Shopify customer/newsletter form.
- [ ] Estados success/error.
- [ ] Menús configurables.
- [ ] Contacto funcional.
- [ ] Legal/mercados.

---

# 15 — Validación de la versión definitiva

## 15.1 Rutas inspeccionadas

Las 9 rutas declaradas fueron trazadas en código. La inspección fue estática; no se pudo recorrer visualmente el preview actual.

## 15.2 Separación Special Landing / PDP

**VERIFICADO EN CÓDIGO:**

- Landing usa componentes `se-*` y CTA a Nocturna.
- PDP usa `ProductGallery`, `ProductInfo`, `Quantity`, swatches y Accordions.
- No comparten controles comerciales.

## 15.3 Nuestra Historia

**VERIFICADO EN CÓDIGO:**

- Hero fotográfico con CTA.
- Split Origin 30/70.
- Territory interactive.
- `TerritoryEditorialBanner` 4/2×2/1.
- Reverse split 70/30.
- Newsletter/Footer global.

## 15.4 Care

**VERIFICADO EN CÓDIGO:**

- Sticky.
- 5 SVG.
- IntersectionObserver.
- Progreso.
- Direct selection.
- Responsive.
- Reduced motion.

## 15.5 Componentes fuente

- `src/App.tsx`: 36 componentes.
- `src/index.css`: estilos globales y por página.
- `public/assets`: logos, favicon, 5 assets Home y 6 assets Story; la puerta Story es provisional.

## 15.6 Pendientes conocidos

- Validación visual automatizada: NO VERIFICADO.
- URL de Figma Make: NO VERIFICADO.
- Contraste WCAG por herramienta: NO VERIFICADO.
- Capacidades exactas Prestige 11.4.1: POR VALIDAR.
- Assets fotográficos de Home y Story: IMPLEMENTADOS, excepto puerta Story **PROVISIONAL**; producto y páginas no actualizadas continúan pendientes.
- Funciones Shopify reales: PENDIENTE.

---

# Apéndice A — Referencias rápidas de implementación

```text
Fuente funcional: src/App.tsx
Fuente visual:    src/index.css
Assets:           public/assets/
Build:            pnpm build
Formato:          pnpm format
```

## Resumen cuantitativo

| Métrica                               |                        Total |
| ------------------------------------- | ---------------------------: |
| Rutas                                 |                            9 |
| Páginas principales                   |                            9 |
| Componentes identificados             |                           36 |
| Interacciones/estados documentados    |                           36 |
| Animaciones/transiciones documentadas |                           19 |
| Assets reales                         | 2 logos + 11 WebP Home/Story |
| SVG originales de Care                |           1 base + 5 estados |
