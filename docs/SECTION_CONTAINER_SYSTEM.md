# Sistema global de contenedores de sección

## Arquitectura y alcance

La sección exterior conserva su ID, fondo, imagen, overlays, separación vertical, identidad e interacciones. Su contenido se coloca en un contenedor interior. No se aplica un máximo a todas las etiquetas section ni se utiliza 100vw para dimensionar contenedores.

- Contrato: `src/types/section.ts`.
- Componentes: `src/components/layout/SectionContainer.tsx`.
- Token máximo: `src/styles/abstracts/_tokens.scss`.
- Reglas compartidas: `src/styles/layout/_containers.scss`, emitidas desde main.scss después de shared.segment-03 y antes de los estilos de componentes.
- `.shell` queda como alias de compatibilidad de las mismas reglas; no mantiene una segunda implementación de ancho. Las instancias React del proyecto migran a SectionContainer/Section o a las clases canónicas sobre Reveal.

SectionContainer solo crea el div interior. Section es una conveniencia para crear section exterior + SectionContainer interior. No administra navegación, datos, eventos ni estado de aplicación.

## Auditoría de la referencia

Antes de cambiar código se inspeccionaron las nueve vistas, componentes compartidos, estilos inline, parciales, queries y los documentos de arquitectura React/SCSS, mapa SCSS, auditoría móvil y contrato editorial. La referencia tiene dos niveles diferentes:

| Elemento anterior | Desktop >900px | Tablet 541–900px | Mobile ≤540px |
|---|---|---|---|
| `featured-collection__banner` | Fondo a todo el ancho; padding vertical 96/76px | Fondo completo; overrides verticales existentes | Fondo completo; overrides verticales existentes |
| `.shell` interior | `min(100% - 64px, 1360px)` | `min(100% - 40px, 1360px)` | `min(100% - 32px, 1360px)` |
| `.featured-collection__head` | Padding adicional de 28px | Padding adicional de 28px | Padding adicional de 20px |
| Gutter efectivo de texto, antes del límite máximo | 32 + 28 = 60px | 20 + 28 = 48px | 16 + 20 = 36px |

Se adoptan 60/48/36px, priorizando esa referencia real frente a la sugerencia inicial 32/24/16. El padding horizontal extra de la cabecera se elimina; se conservan sus 28/20px verticales: queda una sola fuente de gutter. El nuevo máximo de 1520px reemplaza el anterior límite de shell de 1360px. El banner exterior sigue completo; su cabecera y el grid de productos comparten ahora exactamente el mismo borde efectivo.

La referencia previa detectó seis casos de overflow: Core y Special PDP a 1024/1280px, y Design System a 541/1024px. Se registran antes de migrar para no atribuirlos a este cambio.

## API

```ts
export type SectionContainer = "contained" | "full-width";
```

```tsx
import { Section, SectionContainer } from "@/components/layout/SectionContainer";

// Section configura el div interior; el fondo siempre pertenece al exterior.
<Section
  id="related-products"
  className="related"
  container="contained"
  contentClassName="related__container"
>
  {/* Encabezado y grid */}
</Section>

// Un contenedor puede utilizarse dentro de una sección con composición propia.
<section className="featured-collection">
  <div className="featured-collection__banner">
    <SectionContainer container="contained">
      {/* Cabecera editorial */}
    </SectionContainer>
  </div>
  <div className="featured-collection__body">
    <SectionContainer container="contained">
      {/* Grid de productos */}
    </SectionContainer>
  </div>
</section>

// Misma API, sin máximo ni gutter impuesto por el sistema.
<Section className="immersive-section" container="full-width">
  {/* Composición de extremo a extremo */}
</Section>
```

Los comentarios de los ejemplos representan el contenido existente; no se renderizan placeholders nuevos en la aplicación. Section acepta los atributos normales de section y `contentClassName`; SectionContainer acepta atributos normales de div. Ambos usan `container="contained"` por defecto. La propiedad container no utiliza ni reemplaza variant, layout, ratio, mobileLayout, animation, background o sliderOptions.

### Componentes con configuración propia

| Componente | Default | Configuración |
|---|---|---|
| Section / SectionContainer | contained | `container` opcional |
| EditorialSplitSection | full-width | Propiedad base compartida por static y slider |
| TerritoryEditorialBanner | full-width | Mantiene la composición 40/30/30 y sus breakpoints |
| TerritoryGrid | contained | Conserva el estado hidden existente |
| Newsletter | contained | El fondo pertenece a la sección exterior |
| EditorialIntro / SpecialEditionDetails / SpecialEditionProductCTA | contained | Configuran sus wrappers existentes, incluido Reveal |

```tsx
<EditorialSplitSection
  id="editorial-contained"
  eyebrow=""
  title="Título editorial"
  copy="Contenido editorial."
  variant="static"
  container="contained"
  layout="text-right"
  ratio="75-25"
  mobileLayout="image-first"
  imageSrc={assetUrl("/assets/story-city.webp")}
  imageAlt="Hombre con sombrero frente a la ciudad y las montañas"
/>
```

En las instancias existentes de Nuestra Historia, container se omite deliberadamente para conservar full-width. No se cambian sus ratios, encuadres, orden móvil, opciones del slider ni separación de 4px. Las reglas de grid pasan a `story-split__inner`; las propiedades y variables siguen en el exterior y se heredan. En contained se elimina únicamente el padding horizontal del extremo exterior del bloque de texto para no duplicar el gutter. El espaciado editorial vertical y entre imagen/texto se conserva.

## Tokens, clases y cálculo de ancho

| Token | Valor |
|---|---|
| `--section-container-max-width` | 1520px |
| `--section-container-gutter` | 60px; 48px hasta 900px; 36px hasta 540px |

Clases: `.section-container`, `.section-container--contained`, `.section-container--full-width`. `.shell` comparte las reglas base como alias de compatibilidad y ya no tiene overrides de width propios en responsive.

Convención única para contained:

```text
C = ancho disponible del bloque padre
W = min(C, 1520px)                // ancho exterior, incluye ambos gutters
X = (C - W) / 2                  // centrado
G = 60px / 48px / 36px
contenido izquierdo = X + G
contenido derecho   = X + W - G
ancho útil          = W - 2G
```

`box-sizing: border-box`, `width: 100%`, `min-width: 0`, máximo compartido y márgenes inline auto. No se suman gutters al máximo: un contenedor nunca mide 1520px más padding. A 1920px con scrollbar clásica de 15px, C=1905, W=1520, X=192.5 y los bordes útiles son 252.5/1652.5px. A 2560px, son 572.5/1972.5px. La barra vertical puede cambiar C; se mide clientWidth, no se asume que sea igual al viewport solicitado.

Full-width: W=C, máximo none, márgenes inline 0 y padding inline 0. Un componente puede conservar su padding interno propio si forma parte de su composición editorial. No se anidan dos contenedores contained para obtener el mismo gutter.

## Matriz de secciones

C = contained interior. F = full-width con composición propia. F+C = exterior full-width con contenido contained. Los fondos de las secciones siempre permanecen completos.

| Página | Sección / componente | Contenedor anterior | Configuración resultante | Justificación e impacto esperado |
|---|---|---|---|---|
| Home | Home hero | Copy absoluto, max 720 y offset propio | F | Mantiene encuadre, copy, overlay, altura y posición editorial propia. |
| Home | Borderless oculto | Grid full-width con anchos inline originales | F, oculto | No se activa ni se altera una composición fuera de pantalla. |
| Home | Sin fronteras experimental | Fondo completo; shell con padding-left editorial propio | F+C, excepción de composición | Máximo compartido en el wrapper; conserva desplazamiento de copy hacia la derecha. No se exige al bloque de texto coincidir con el borde izquierdo normal de la retícula. |
| Home | Featured Collection banner | Fondo completo + shell + padding extra de cabecera | F+C | Elimina gutter horizontal duplicado, conservando padding vertical y establece referencia de alineación. |
| Home | Featured Collection products | Shell, max 1360 | F+C | Se alinea con la cabecera y admite máximo exterior 1520. |
| Home | Special split | Grid completo; copy con padding propio | F | Mantiene distribución, foto, texto en una línea y color aprobado. |
| Home | History banner | Fondo completo y padding editorial propio | F | Mantiene composición fotográfica inmersiva y ancho de lectura del copy. |
| Collection | Hero | Fondo completo y copy oculto | F | Sin cambios visuales. |
| Collection | Productos, toolbar y paginación | section.collection.shell limitada | F+C | Nueva sección exterior completa, retícula en collection__container. |
| PDP Core | Galería e información | section.pdp.shell | F+C | PDP exterior conserva espacio vertical; pdp__container administra el grid. |
| PDP Core | PDP story | Grid/fondo completo | F | Conserva composición imagen/texto de extremo a extremo. |
| PDP Core | Relacionados | section.related.shell | F+C | Cabecera y tarjetas dentro de related__container. |
| PDP Special | Galería e información | section.pdp.pdp--dark.shell | F+C | Mantiene tema oscuro y padding vertical; grid interior común. |
| PDP Special | Nocturna story | Grid/fondo completo | F | Conserva atmósfera y proporciones. |
| Special landing | Hero | Fondo, overlay y copy absoluto | F | Mantiene posición editorial, foto y CTA de scroll. |
| Special landing | Intro | Reveal + shell | F+C | Clases canónicas sobre el mismo nodo animado; sin wrapper adicional de animación. |
| Special landing | Presentation products | Grid + shell | F+C | Ancho y gutter compartidos; se conserva el número de columnas responsive. |
| Special landing | Story / tres detalles | section.se-story.shell | F+C | Exterior completo y se-story__container interior; mantiene contenido y alternancia. |
| Special landing | Lifestyle oculto | Fondo completo + Reveal/shell | F+C, oculto | Clases canónicas; continúa oculto. |
| Special landing | Product CTA oculto | Fondo + Reveal/shell | F+C, oculto | Opciones de container disponibles; continúa oculto. |
| Historia | Hero | Fondo completo y copy oculto con shell | F+C, copy oculto | Se conserva el fondo y el estado accesible del título. |
| Historia | Origen | EditorialSplitSection full-width | F por defecto | Nuevo container opcional; default conserva su composición. |
| Historia | TerritoryGrid oculto | Exterior oculto + shell | C interior por defecto | Nuevo container opcional; no se activa. |
| Historia | TerritoryEditorialBanner | Grid full-width | F por defecto | Nuevo inner configurable; mantiene composición y fondo con default full-width. |
| Historia | Ciudad | EditorialSplitSection static full-width | F por defecto | Conserva ratio, encuadre y orden móvil. |
| Care | Hero | Full-width, copy absoluto | F | Mantiene copy, ilustración y CTA de scroll con espaciados propios. |
| Care | Intro | Fondo + shell; marquee independiente | F+C y marquee F | Texto dentro de la retícula; marquee mantiene su extensión/animación completa. |
| Care | Everyday / Storage | Grids interiores shell | F+C | Mismos grids y breakpoints dentro del nuevo máximo. |
| Care | Scroll story | Heading/layout en dos shells | F+C | Ambos wrappers comparten bordes útiles; se conservan sticky, refs, navegación y observer. |
| Care | Information / FAQ | Grids interiores shell | F+C | Alineación consistente sin tocar acordeones. |
| Care | CTA | Grid con padding horizontal 24px | F+C | Gutter único en care-cta__inner; se conserva padding vertical y centrado. |
| Design System | Hero | section.system-hero.shell | F+C | Fondo exterior completo; mismo contenido. |
| Design System | Color | section.system-section.shell | F+C | Tokens en tracks flexibles para que el gutter no fuerce overflow. |
| Design System | Typography | section.system-section.type-specimen.shell | F+C | Misma tipografía y clases de espécimen. |
| Design System | Component board | section.system-section.shell | F+C | Conserva demos y temas claro/oscuro. |
| Design System | Viabilidad | section.system-section.shell | F+C | Mantiene botón y contenido; se actualiza el selector de su wrapper interior. |
| Comparison | Hero | section.comparison__hero.shell | F+C | Máximo y gutters compartidos. |
| Comparison | Table | section.comparison__table.shell | F+C | Misma tabla y distribución responsive. |
| Compartido | Newsletter | Sección grid con padding 30px | F+C por defecto | Fondo completo, un solo gutter en newsletter__inner y mismo formulario. |
| Compartido | Header / Footer | Full-width con paddings y grids propios | F, excepción | Se audita su alineación y se conserva su comportamiento/DOM para evitar alterar navegación y composición. No se impone máximo 1520 a estos componentes. |
| Compartido | Product cards / ProductInfo | Dentro del grid de producto | Sin contenedor adicional | Evita gutters anidados; solo heredan el ancho de su celda. |
| Flotantes | CartDrawer / Userback / modales | Fuera de secciones editoriales | Excluidos | No reciben clases ni restricciones del sistema. |

## Ajustes necesarios de encogimiento

Al aumentar el gutter del grid de productos para alinearlo con el banner, no es seguro conservar mínimos intrínsecos que ya desbordaban antes de la migración. El botón de compra dentro de PDP admite min-width 0 en su track existente; no se modifica su evento, texto, estado o acción. Los tokens de Design System utilizan minmax(0,1fr), hijos con min-width 0 y envoltura de etiquetas. El selector responsive del botón de viabilidad sigue el nuevo wrapper. No se oculta overflow globalmente ni se añaden dependencias.

## Futura equivalencia con Shopify

Container corresponde a un select independiente con opciones contained («Contenido centrado») y full-width («Ancho completo»). Default contained para contenido comercial; full-width para las composiciones editoriales que lo necesitan. Debe comprobarse la versión instalada de Prestige y sus controles nativos antes de decidir si necesita una sección personalizada. No se implementa Liquid, un tema, publicación o handoff definitivo.

## Validación y evidencia

Se registran medidas DOM y capturas antes/después en `/private/tmp/rsm-containers/`. La validación cubre 320, 375, 390, 430, 540, 541, 768, 900, 1024, 1280, 1440, 1520, 1920 y 2560px. Se comparan bordes exteriores, padding y límites útiles: comparar únicamente el x del div con el x de un texto ignoraría el gutter y daría una conclusión equivocada.

Resultados finales de geometría y comportamiento:

- Nueve vistas × catorce anchos = 126 casos de página, sin overflow horizontal de documento ni excepciones JavaScript.
- 504 contenedores visibles medidos: centrado, máximo exterior, padding y bordes útiles coinciden con la fórmula y con el banner de referencia. Se excluyen del criterio de alineación izquierda normal las composiciones expresamente desplazadas y el copy oculto del hero de Historia.
- 28 combinaciones modo/viewport del componente base, verificando tanto Section como SectionContainer (56 cajas interiores). El exterior siempre conserva el ancho completo; full-width no impone máximo, margen o gutter.
- 1680 configuraciones editoriales: catorce anchos × dos contenedores × dos layouts × cinco ratios × dos órdenes móviles × static/fade/slide. Proporciones, orden y ausencia de overflow correctos.
- Controles del slider, swipe nativo emulado y scroll vertical, teclado/foco, loop, autoplay con pausa/reanudación, hover y visibilidad, duración, movimiento reducido y estados de cero/una imagen/error de carga pasan. El bloque SCSS de controles es idéntico al anterior.
- TypeScript correcto, incluyendo rechazo de tres contratos inválidos y compatibilidad de la unión static/slider con el nuevo container.
- Build normal y build GitHub Pages correctos. Los recorridos funcionales locales del build normal y Pages verifican navegación hash, atrás/adelante/recarga, Quick Add, cantidades/subtotal/drawer, galería, acordeones, ordenación, Care, menú móvil y Newsletter; sin excepciones ni 404 en la comprobación final. Se cargan y verifican explícitamente las tres fotos del slider y las tres de detalles en ambos builds. Userback 12/12. Verificación de assets: 64 imágenes reales, sin punteros LFS.
- App, entrypoint, catálogo, navegación, CartDrawer, Header, Footer, Userback y tipografía global conservan sus archivos byte por byte. No se añade Tailwind ni una dependencia.

Los fixtures de navegador son temporales y se retiran de src antes de los builds.


### Mediciones representativas

Anchos en px, con scrollbar clásica de 15px en estas capturas. Los límites se calculan con clientWidth.

| Viewport | Área disponible | Exterior contained | Borde útil izquierdo | Borde útil derecho |
|---|---:|---:|---:|---:|
| 320 | 305 | 305 | 36 | 269 |
| 768 | 753 | 753 | 48 | 705 |
| 1440 | 1425 | 1425 | 60 | 1365 |
| 1520 | 1505 | 1505 | 60 | 1445 |
| 1920 | 1905 | 1520 | 252.5 | 1652.5 |
| 2560 | 2545 | 1520 | 572.5 | 1972.5 |

El borde efectivo de la cabecera del banner coincide exactamente con el borde útil izquierdo en todos los anchos. Grids comerciales, contenedores de texto y el wrapper de Newsletter usan el mismo modelo; los centrados internos de títulos/formularios y el padding propio de celdas no crean otro contenedor global.

### Comparación visual y excepciones

Se guardan 39 parejas before/after: primeras vistas de las nueve páginas a 390/1440/1920px, más banner Featured Collection, Special split, Origen y Ciudad en esos tres anchos. Hay 14 parejas idénticas píxel por píxel, incluidas las seis capturas de Origen/Ciudad. Las diferencias previstas son desplazamiento/expansión horizontal de contained, alineación entre cabecera y productos, y adaptación de grids al ancho disponible. Los tamaños de todos los h1/h2 y los backgrounds de sección coinciden en las 126 mediciones antes/después.

El banner conserva sus alturas de referencia en los tres anchos capturados: 669px a 390, 410px a 1440 y 410px a 1920. Solo se retira el padding horizontal adicional de la cabecera; los 28/20px verticales permanecen. Los paddings verticales y alturas CSS fijas no se cambian; las alturas automáticas de tarjetas/textos pueden seguir el ancho disponible y el wrapping. La comparación de secciones que se desplazan a posiciones Y fraccionarias puede presentar diferencias de rasterizado aunque su CSS local no cambie; por eso se contrastan capturas con medidas y responsabilidades de estilos.

Header/Footer mantienen sus grids, paddings y comportamiento full-width. En particular, el header móvil necesita espacio para el logo de 120px y controles táctiles de 44px; imponerle el gutter editorial de 36px a 320px estrecharía excesivamente ese conjunto. No se altera el menú o su identidad para forzar una alineación artificial. Sin fronteras conserva su desplazamiento editorial hacia la derecha; heroes y banners inmersivos conservan la composición propia.

Los controles de carrito, el servicio remoto de Userback, navegadores físicos y un despliegue remoto no se modifican. Las pruebas de interacción son locales con Chromium y touch emulado. La advertencia preexistente de section::last-child continúa en el build y queda fuera del alcance.

### Compatibilidad de imágenes con la base de Pages

El recorrido de Pages detectó tres rutas relativas al origen en los detalles de Special Edition que no respetaban la base `/RSMUniverse/`. Se resuelven con el helper existente `assetUrl` en SpecialEditionPage. Los archivos, nombres, fotografías y textos alternativos permanecen iguales; en el build normal las URLs resultantes son las mismas. Es una corrección acotada de resolución de rutas necesaria para verificar esa página bajo la base configurada, sin cambiar despliegue o assets.

## Archivos de la intervención

Nuevos:
- `src/types/section.ts`.
- `src/components/layout/SectionContainer.tsx`.
- `src/styles/layout/_containers.scss`.
- `docs/SECTION_CONTAINER_SYSTEM.md`.

Actualizados:
- `src/pages/Comparison/ComparisonPage.tsx`.
- `src/pages/OurStory/OurStoryPage.tsx`.
- `src/pages/Product/CorePdp.tsx`.
- `src/pages/Product/NocturnaPdp.tsx`.
- `src/pages/SpecialEdition/SpecialEditionSections.tsx`.
- `src/pages/SpecialEdition/SpecialEditionPage.tsx`.
- `src/pages/Care/CarePage.tsx`.
- `src/pages/Collection/CollectionPage.tsx`.
- `src/pages/DesignSystem/DesignSystemPage.tsx`.
- `src/pages/Home/HomePage.tsx`.
- `src/components/editorial/TerritoryEditorialBanner.tsx`.
- `src/components/editorial/EditorialSplitSection.tsx`.
- `src/components/editorial/EditorialSplitSection.types.ts`.
- `src/components/editorial/TerritoryGrid.tsx`.
- `src/components/ui/Newsletter.tsx`.
- `src/styles/main.scss`.
- `src/styles/base/_responsive.scss`.
- `src/styles/base/_shared.scss`.
- `src/styles/pages/_design-system.scss`.
- `src/styles/pages/_product.scss`.
- `src/styles/pages/_care.scss`.
- `src/styles/pages/_collection.scss`.
- `src/styles/pages/_our-story.scss`.
- `src/styles/abstracts/_tokens.scss`.
- `src/styles/components/_product-info.scss`.
- `src/styles/components/_editorial-split.scss`.
- `src/styles/components/_newsletter.scss`.
- `docs/EDITORIAL_SPLIT_SECTION.md`.
- `docs/SCSS_ARCHITECTURE.md`.
- `docs/SCSS_STYLE_MAP.md`.
- `docs/REACT_ARCHITECTURE.md`.

## Home — alineación desktop de «Sin fronteras»

El ajuste se limita a `.app--home .borderless-fullwidth--experimental .borderless-fullwidth__text` dentro de `@media (min-width: 901px)`, el tramo desktop posterior al breakpoint de 900px. El contenedor existente es Flexbox en columna: `align-self: flex-end` desplaza únicamente el bloque de texto al extremo derecho de su columna. `text-align: right` alinea el H2 y el TextLink inline-flex completo, incluido su icono; `padding-right: 0` elimina el padding interno derecho del bloque.

No se cambia el layout del texto ni el `justify-content: center` del contenedor. Se conservan el padding-left editorial `min(58%, 790px)`, las proporciones/ancho de la columna, el máximo global de 1520px y el gutter exterior desktop de 60px proporcionado por SectionContainer. Tampoco se cambian imagen, overlay, altura, tipografía, color o espaciado vertical. TextLink y SectionContainer permanecen sin modificaciones globales. Se retira únicamente el botón JSX comentado que precedía al enlace actual.

Validación local con Chromium: capturas revisadas a 1280, 1440, 1520, 1920 y 2560px; bloque, título, enlace e icono terminan en el borde derecho interior de la columna. Las posiciones Y, anchos/altos del contenido y geometría del contenedor son iguales a las anteriores. También se comprueba el límite desktop a 901px, sin overflow.

Mobile/tablet: capturas y métricas idénticas antes/después a 320, 390, 540, 541, 768 y 900px. Evidencia temporal en `/private/tmp/rsm-borderless-align/`. `npm run build` correcto; persiste la advertencia previa `section::last-child`, ajena a este ajuste. Archivos de esta intervención: HomePage.tsx (retirada del comentario), styles/pages/_home.scss (regla acotada desktop) y este documento. Sin commit, push ni despliegue.
