# EditorialSplitSection

Componente editorial React 19 independiente de contenido y página. Contrato fuente: `src/components/editorial/EditorialSplitSection.types.ts`. Implementación de imágenes interactivas: `EditorialSlider.tsx`. No se añade `mode`, `reverse`, Liquid, dependencias ni configuración de Shopify.

## Propiedades

La unión discriminada `EditorialSplitSectionProps` comparte `EditorialSplitBaseProps`:

| Propiedad | Tipo / valor predeterminado | Función |
|---|---|---|
| `id` | `string`, obligatorio | Ancla pública de la sección; no determina estilos. |
| `eyebrow` | `string`, obligatorio | Texto editorial; se permite cadena vacía para preservar instancias. |
| `title` | `React.ReactNode`, obligatorio | Encabezado h2; genera un ID accesible independiente del ancla. |
| `copy` | `string`, obligatorio | Párrafo editorial fijo. |
| `variant` | `"static" \| "slider"`, `"static"` | Presentación de imágenes. |
| `container` | `"contained" \| "full-width"`, `"full-width"` | Limita solo el conjunto editorial interior; la sección y su fondo permanecen completos. |
| `layout` | `"text-left" \| "text-right"`, `"text-left"` | Colocación desktop, independiente de la proporción. |
| `ratio` | `"25-75" \| "30-70" \| "50-50" \| "70-30" \| "75-25"`, `"50-50"` | Porcentajes izquierda/derecha siempre que haya dos columnas (>900px). |
| `mobileLayout` | `"image-first" \| "text-first"`, `"text-first"` | Orden visual hasta 900px, independiente del layout desktop. |
| `surface` | `"caliza" \| "paper"`, `"caliza"` | Fondo con tokens existentes, independiente del layout. |
| `sectionStyle` | `React.CSSProperties` + `--story-split-columns` y `--story-split-tablet-columns` opcionales | Escape existente: override desktop (≥1120px) o tablet (900px < ancho <1120px) para conservar composiciones anteriores. |
| `copyStyle`, `titleStyle` | `React.CSSProperties`, opcionales | Compatibilidad con ajustes editoriales existentes. |

`EditorialSplitStaticProps`: `variant?: "static"`, `imageSrc`, `imageAlt` obligatorios y `objectPosition?: string`. `slides` y `sliderOptions` son `never`.

`EditorialSplitSliderProps`: `variant: "slider"`, `slides: readonly EditorialSlide[]` obligatorio y `sliderOptions?: EditorialSliderOptions`. `imageSrc`, `imageAlt` y `objectPosition` a nivel de sección son `never`.

```ts
interface EditorialSlide {
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
}
interface EditorialSliderOptions {
  arrows?: boolean;              // true
  dots?: boolean;                // true
  animation?: "slide" | "fade"; // fade
  duration?: number;             // 600 ms; mínimo 0
  loop?: boolean;                // true
  autoplay?: boolean;            // false
  autoplayInterval?: number;     // 5000 ms; mayor que 0
}
```

Las duraciones no finitas usan sus valores predeterminados. Un intervalo no positivo también vuelve a 5000ms. Las URLs públicas deben pasar por `assetUrl` desde el consumidor para respetar la base de GitHub Pages.

## Ejemplos

```tsx
<EditorialSplitSection
  id="editorial-static"
  eyebrow=""
  title="Título editorial"
  copy="Contenido editorial."
  variant="static"
  container="contained"
  layout="text-right"
  ratio="75-25"
  mobileLayout="image-first"
  surface="paper"
  imageSrc={assetUrl("/assets/story-city.webp")}
  imageAlt="Hombre con sombrero frente a la ciudad y las montañas"
  objectPosition="50% center"
/>

<EditorialSplitSection
  id="editorial-slider"
  eyebrow=""
  title="Título editorial"
  copy="El texto permanece fijo."
  variant="slider"
  layout="text-left"
  ratio="25-75"
  mobileLayout="text-first"
  slides={[
    {
      imageSrc: assetUrl("/assets/story-origin.webp"),
      imageAlt: "Rancho RSM enmarcado por montañas",
      objectPosition: "54% center",
    },
    {
      imageSrc: assetUrl("/assets/Appaloosa Rider Across Green Hills.png"),
      imageAlt: "Jinete sobre un caballo Appaloosa entre las colinas verdes",
    },
  ]}
  sliderOptions={{ arrows: true, dots: true, animation: "fade", duration: 600, loop: true, autoplay: false }}
/>
```

Todas las combinaciones entre variant, layout, ratio y mobileLayout son válidas. Las proporciones son siempre izquierda/derecha: `text-left` con `25-75` significa texto 25% e imagen 75%; `text-right` con `75-25` significa imagen 75% y texto 25%. `text-right` no invierte el orden móvil.

Por defecto, desde más de 900px se utilizan el layout y ratio elegidos, también en tablet. Todos los ratios usan tracks `minmax(0, ...)`; ya no existe un mínimo genérico de texto de 480px. Desde 1120px se mantienen el padding compacto y wrapping desktop anteriores. Hasta 900px las columnas se apilan y el orden visual y de DOM sigue mobileLayout. La imagen conserva 16/9 y hasta 540px conserva 4/3, con paddings y alturas editoriales anteriores.

No se añade una propiedad tabletLayout o tabletRatio. Para preservar exactamente las dos instancias aprobadas de Nuestra Historia, ambas declaran `sectionStyle={{ "--story-split-tablet-columns": "minmax(480px, 52fr) minmax(0, 48fr)" }}`. Es una excepción local de compatibilidad: no se aplica a otros consumidores y no afecta desktop o mobile. La variable desktop `--story-split-columns` sigue admitida para consumidores anteriores, aunque Ciudad ya utiliza directamente el nuevo ratio 25-75.

## Auditoría y migración de Nuestra Historia

Solo existían dos consumidores, ambos en `OurStoryPage.tsx`. La galería de producto existente tiene selección, flechas e icono SVG reutilizable, pero no cubre fade, swipe, opciones ni autoplay accesible; permanece sin cambios. El slider editorial utiliza su mismo `Icon name="arrow"`.

Las variantes anteriores solo añadían encuadre: `origin` → `54% center`; `city` → `50% center`. El antiguo `reverse` cambiaba columnas, orden móvil y fondo paper; esas responsabilidades se separan en layout, mobileLayout y surface. Ningún consumidor activo usaba `reverse=true`.

| Instancia | Migración |
|---|---|
| `story-origin` | `slider`, `text-left`, `30-70`, `text-first`, caliza; encuadre 54% en primer slide y override tablet 52/48 anterior. |
| `story-ranch-to-city` | `static`, `text-left`, `25-75`, `text-first`, caliza, encuadre 50%; override tablet 52/48 anterior. |

La solicitud proponía `text-right`/`70-30` para Ciudad, pero la implementación real era texto a la izquierda, imagen a la derecha y 25/75 desde 1120px. El usuario confirmó conservar exactamente esa apariencia. La ampliación sustituye el antiguo ratio 30-70 más override desktop por `ratio="25-75"`, con equivalencia visual exacta. Se conserva la composición tablet mediante el escape de estilo indicado. No se infiere ninguna configuración visual desde los IDs.

Imágenes del slider, verificadas visualmente en assets existentes:

1. `story-origin.webp`: vista aérea del rancho, 1835×857.
2. `Appaloosa Rider Across Green Hills.png`: jinete y paisaje, 1672×941.
3. `Golden-Hour Equestrian Courtyard.png`: patio y caballos, 1672×941.

No se generan imágenes ni se cambian los archivos originales. Ciudad conserva `story-city.webp` (1972×798).

## Comportamiento y accesibilidad

- Semántica de región/carrusel y grupos/diapositivas; nombre derivado del h2 mediante `useId`. El orden de los bloques en el DOM sigue mobileLayout para mantener lectura y foco coherentes con la presentación móvil. Los bloques tienen keys estables; las posiciones horizontales se resuelven mediante CSS Grid.
- Flechas y dots permanecen configurables de forma independiente. Sus botones son transparentes y conservan áreas de 44×44px, focus-visible y estados disabled; no cambian API, navegación o animaciones de las imágenes.
- Flechas editoriales: sin borde ni círculo, color caliza, trazo SVG de 1.25px. El SVG existente se alarga mediante CSS para obtener una flecha visible de aproximadamente 24px, con stroke no escalable. Centradas verticalmente, con inset lateral de 24px en desktop/tablet y 12px hasta 540px. En hover solo se mueve el icono 3px hacia su dirección, con transición de 250ms ease. Movimiento reducido desactiva esta transición y desplazamiento.
- Indicadores: líneas de 24×2px, separadas visualmente 8px, color caliza; activo con opacidad 1 e inactivos con 0.4. Sin cápsula, bordes o fondo decorativo. Los botones transparentes conservan 44×44px; los márgenes compensan el espacio alrededor de las líneas para obtener la separación visual solicitada. Las líneas quedan centradas horizontalmente y a 24px del borde inferior (el contenedor compensa el centrado vertical dentro del botón).
- Contraste de controles: sombra sutil localizada en SVG y líneas, revisada sobre las tres fotografías a 390, 768 y 1440px. No se añade overlay ni se oscurece la fotografía. Se conserva el tratamiento existente del botón opcional de autoplay.
- Validación del refinamiento de controles: nueve combinaciones fotografía/viewport; clics reales en cada indicador, flechas y loop, desplazamiento de hover, teclado y movimiento reducido correctos. Geometrías comprobadas: targets de 44px, líneas 24×2px, separación 8px e inset inferior 24px. TypeScript y build correctos; permanece la advertencia preexistente sobre `section::last-child`. Artefactos locales: `/private/tmp/rsm-editorial-controls/`. Revisión en Chromium, sin certificación en dispositivos físicos.
- Teclado: izquierda/derecha, Home/End; funciona también sin flechas ni dots. No se mueve el foco al navegar.
- Imágenes inactivas con `aria-hidden` e `inert`. Región de estado anuncia navegación manual, y se silencia durante reproducción automática.
- Swipe con Pointer Events para touch/pen y umbral horizontal de 40px; `touch-action: pan-y pinch-zoom` permite scroll vertical y zoom.
- URLs vacías se filtran y los errores de carga del slider retiran el recurso. Cero imágenes conserva el espacio del componente y anuncia indisponibilidad; una sola oculta toda navegación y autoplay.
- Fade y slide animan únicamente capas de imagen dentro de media. El track queda recortado y sus imágenes no determinan las dimensiones del layout.
- Autoplay desactivado por defecto. Al activarlo: botón de pausa/reanudación, pausa permanente al entrar foco o navegar manualmente, suspensión temporal con hover/pestaña oculta y limpieza de timer/listeners al desmontar. Una nueva lista de imágenes reinicia la selección; cambios de opciones no la reinician.
- `prefers-reduced-motion` elimina transiciones y bloquea autoplay; navegación manual sigue disponible. Sin loop, autoplay se detiene al llegar al final y Reanudar vuelve al inicio.

## SCSS

`src/styles/components/_editorial-split.scss` posee las reglas compartidas (`segment-45`, `segment-47`) y `slider`. `main.scss` los emite junto a las posiciones históricas de las reglas de Historia. Las cinco definiciones de ratio están en el parcial del componente y aplican tanto a tablet como desktop. Los overrides de padding y apilado permanecen en `base/_responsive.scss`, dentro de sus queries existentes. No se añaden utilidades Tailwind, tokens ni !important.

Eliminados: `story-split--origin`, `story-split--city` y `story-split--reverse`. `story-split__inner` es ahora un wrapper real del sistema de contenedores, distinto del selector huérfano retirado en la refactorización inicial. Se mantiene `story-split__copy` para no renombrar innecesariamente el bloque editorial.

Nuevos modificadores: `--static`, `--slider`, `--text-left`, `--text-right`, `--ratio-25-75`, `--ratio-30-70`, `--ratio-50-50`, `--ratio-70-30`, `--ratio-75-25`, `--text-first`, `--image-first`, `--caliza`, `--paper`. Presentación interactiva: `__slider`, `__slider-track`, `__slide`, `__slider-arrow`, `__slider-dots`, `__slider-dot`, `__slider-play`, `__slider-status`, además de `__slider--fade` y `__slider--slide`.

El gap de 4px de Nuestra Historia se conserva. La regla preexistente `section::last-child` genera una advertencia de minificación; no se cambia para mantener el alcance y la referencia visual.

## Futura adaptación a Prestige

Este contrato es una referencia técnica, no el handoff definitivo ni una decisión de crear una sección personalizada. Primero debe evaluarse la capacidad de las secciones nativas y la versión de Prestige instalada.

| React | Posible configuración del editor de Shopify |
|---|---|
| variant, layout, ratio, mobileLayout | Selects independientes |
| surface | Esquema de color del tema |
| imageSrc | Image picker |
| slides | Blocks de imagen con alt y encuadre/focal point |
| arrows, dots, loop, autoplay | Checkboxes independientes |
| animation | Select fade/slide |
| duration, autoplayInterval | Ranges de duración e intervalo |

Los escapes `sectionStyle`, `copyStyle` y `titleStyle` son compatibilidad React; no se trasladan como CSS libre al editor sin evaluar primero las opciones nativas. No se modifica ningún tema o tienda.

## Validación de la refactorización inicial

Resultados de la sesión (Chromium local, sin publicar):

- Build normal y build `GITHUB_PAGES=true` correctos. Prueba local de ambos artefactos: tres imágenes del slider cargadas, navegación operativa, Ciudad estática, sin overflow, 404 ni excepciones. Se verificó recarga de la ruta `/RSMUniverse/#/nuestra-historia`. La advertencia preexistente sobre `section::last-child` continúa.
- TypeScript del proyecto correcto; seis casos negativos de contrato verificados con `@ts-expect-error` (mezcla de props, falta de slides, API anterior y ratio no admitido).
- 324 configuraciones de navegador: 320, 375, 390, 430, 540, 541, 768, 1024 y 1440px × dos layouts × tres ratios × dos órdenes móviles × static/fade/slide. Sin overflow horizontal; ratio y orden coinciden con su configuración y breakpoint.
- Comparación estática de Ciudad: nueve parejas de capturas idénticas píxel por píxel. Conserva posiciones, dimensiones, encuadre, tipografía y contenido. Origen cambia intencionalmente a 30/70 en desktop y añade controles; tablet/mobile conservan sus dimensiones anteriores.
- Verificados defaults, duración configurable, flechas/dots independientes, loop y extremos disabled, navegación directa, teclado y conservación de foco, marcado aria/inert de imágenes inactivas, dimensiones estables durante slide, una imagen, cero imágenes, URL vacía, fallo de carga y cambio de conjunto de slides.
- Autoplay: avance, pausa por foco/manual, reanudación, click real de pausa, suspensión con hover, suspensión/reanudación al cambiar visibilidad (evento simulado), movimiento reducido y desmontaje limpio. Swipe nativo emulado con CDP y scroll vertical sin navegar. Sin excepciones JavaScript.
- `node scripts/verify-userback.mjs`: 12/12 pruebas. `node scripts/verify-images.mjs`: 57 imágenes reales, sin punteros LFS.

Los fixtures de verificación y los seis casos negativos son temporales, no forman parte del bundle ni añaden dependencias. Capturas, métricas, comparación JSON y script/resultados funcionales están en `/private/tmp/rsm-editorial/`. Las pruebas cubren Chromium con touch emulado, no dispositivos físicos, Safari/Firefox ni el servicio remoto real de Userback. Se mantiene el código de Userback intacto.


## Archivos de esta extensión

- `src/components/editorial/EditorialSplitSection.tsx`: composición y API genérica.
- `src/components/editorial/EditorialSplitSection.types.ts`: contrato discriminado.
- `src/components/editorial/EditorialSlider.tsx`: estado, controles, gestos y autoplay.
- `src/pages/OurStory/OurStoryPage.tsx`: migración de las dos instancias.
- `src/styles/components/_editorial-split.scss`: estilos editoriales compartidos y slider.
- `src/styles/pages/_our-story.scss`: extracción de responsabilidades del componente.
- `src/styles/base/_responsive.scss`: ratios y orden móvil genéricos; retirada de selectores huérfanos.
- `src/styles/main.scss`: carga y emisión del módulo SCSS.
- `docs/EDITORIAL_SPLIT_SECTION.md`, `docs/REACT_ARCHITECTURE.md`, `docs/SCSS_ARCHITECTURE.md`, `docs/SCSS_STYLE_MAP.md`: contrato, auditoría, ejemplos, mapa y resultados.

Los cambios previos del usuario en Collection y Special Edition no forman parte de esta extensión y se conservan. No se hace commit, push, merge ni despliegue.

## Ampliación de configuraciones: entrega y validación

Se conserva la implementación del slider sin cambios. Ya existían variant, layout, mobileLayout, unión discriminada, encuadre, fade/slide, controles independientes, swipe, loop, autoplay y movimiento reducido. Esta ampliación añade únicamente los ratios 25-75 y 75-25, extiende los ratios configurados a las dos columnas de tablet y hace coincidir el DOM con el orden móvil elegido.

API final de distribución (sin nuevas propiedades de layout):

```ts
type EditorialSplitRatio = "25-75" | "30-70" | "50-50" | "70-30" | "75-25";
type EditorialSplitLayout = "text-left" | "text-right";
type EditorialSplitMobileLayout = "image-first" | "text-first";
type EditorialSplitVariant = "static" | "slider";
```

Los defaults permanecen en static, text-left, 50-50 y text-first. Los ejemplos completos de arriba usan las nuevas proporciones. Las cuatro opciones siguen correspondiendo a selects independientes del futuro Theme Editor; no se implementa Shopify ni se genera un handoff definitivo.

Resultados de esta ampliación:

- TypeScript correcto: todas las combinaciones de los cinco ratios con layout/mobileLayout y static/slider aceptadas, y seis contratos inválidos rechazados (el ratio de control inválido es ahora 40-60).
- Matriz de 540 configuraciones: nueve anchos (320, 375, 390, 430, 540, 541, 768, 1024, 1440) × cinco ratios × dos layouts × dos órdenes móviles × static/fade/slide. Proporciones correctas en tablet a 1024px y desktop a 1440px, orden correcto al apilar y ausencia de overflow horizontal.
- Comparación visual: 18/18 parejas de capturas idénticas píxel por píxel, nueve para Origen y nueve para Ciudad. Se conservan también el gap de 4px, la configuración y los encuadres existentes.
- Doce secuencias reales de Tab con Chromium: ambos layouts y ambos órdenes móviles a 390, 768 y 1024px, incluyendo un enlace editorial y todos los controles. El orden de foco coincide con el DOM; el orden de DOM coincide con la presentación móvil.
- Pruebas del slider sin regresión: flechas, dots, loop y extremos disabled, teclado, foco, swipe nativo emulado y scroll vertical, fade/slide y duración configurable, alturas estables durante la transición, autoplay/pausa/reanudación, hover/visibilidad, movimiento reducido y estados de una/cero imágenes y error de carga.
- Builds normal y GitHub Pages correctos; Userback 12/12; `git diff --check` correcto.

Archivos modificados en esta ampliación:

1. `src/components/editorial/EditorialSplitSection.types.ts`: dos ratios y tipado del escape CSS tablet.
2. `src/components/editorial/EditorialSplitSection.tsx`: orden de DOM según mobileLayout con keys estables.
3. `src/styles/components/_editorial-split.scss`: cinco ratios compartidos y tracks flexibles.
4. `src/styles/base/_responsive.scss`: retirada de las tres definiciones de ratio que estaban limitadas a desktop; se conserva el resto de overrides.
5. `src/pages/OurStory/OurStoryPage.tsx`: migración equivalente de Ciudad y conservación explícita del reparto tablet de ambas instancias.
6. `docs/EDITORIAL_SPLIT_SECTION.md`: API definitiva, ejemplos y resultados.
7. `docs/SCSS_ARCHITECTURE.md`: responsabilidad actual de ratios y compatibilidad tablet.
8. `docs/SCSS_STYLE_MAP.md`: actualización del propietario de las definiciones de ratio.

Artefactos de esta ampliación: `/private/tmp/rsm-editorial-config/`, con capturas before/after, comparison.json, validation.json, focus.json y log de Userback. Los fixtures temporales se retiran del código fuente antes de los builds; no hay dependencias ni scripts nuevos en la aplicación. No se modifica `EditorialSlider.tsx`.

Límites: Chromium local con touch emulado; no se prueban dispositivos físicos, Safari/Firefox o el servicio remoto real de Userback. Persiste la advertencia preexistente de `section::last-child`. No hay cambios en contenido, assets, navegación, carrito, tokens, dependencias, Userback o despliegue; no se hace commit, push ni merge.


## Integración con el sistema global de contenedores

`EditorialSplitBaseProps` incorpora `container?: SectionContainer`, definido en `src/types/section.ts`. Es independiente de variant, layout, ratio, mobileLayout y opciones del slider. Su default es full-width para conservar Origen y Ciudad sin alterar las instancias actuales.

El exterior conserva fondo, min-height, ID, variables y el gap/margen de 4px de Historia. El nuevo `story-split__inner` utiliza SectionContainer y contiene el grid, con las mismas reglas de ratio y orden móvil. En contained su ancho exterior máximo es 1520px incluyendo gutters de 60/48/36px; full-width no impone gutters ni máximo. No se modifican controles minimalistas, estado del slider o lógica de navegación. El padding editorial vertical permanece; en contained se retira el padding horizontal del extremo exterior del copy para evitar duplicarlo con el gutter.

Contrato, ejemplos, matriz global, mediciones y equivalencia con Theme Editor: [Sistema de contenedores](SECTION_CONTAINER_SYSTEM.md). La opción container se traduciría a un select independiente, sin implementar Shopify todavía.
