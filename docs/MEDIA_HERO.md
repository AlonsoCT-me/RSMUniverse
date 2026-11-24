# MediaHero

Hero editorial reutilizable de React 19. Sección y multimedia siempre full-width/full-cover; el contenido utiliza SectionContainer. Solo se migra el hero de Home. No se implementa un slider, Liquid, Shopify ni una dependencia nueva.

## Auditoría y migración

Fuente de verdad: HomePage, parciales Home/Our Story/Collection/responsive, SectionContainer, Icon, botones y navegación existentes. Se consultaron REACT_ARCHITECTURE, SCSS_ARCHITECTURE, SECTION_CONTAINER_SYSTEM y MOBILE_RESPONSIVE_AUDIT.

El hero anterior utilizaba background-image home-hero.webp, overlay de 800px y copy absoluto. Su altura era min(860px,100svh) con mínimo 660px en desktop, 800px con mínimo 720px hasta 900px y 760px hasta 540px. Los encuadres eran center / 68% center / 72% center. El copy estaba a clamp(32px,8vw,120px) del lado izquierdo y a 30% del borde inferior en desktop; en tablet/mobile, a 22px por lado y a 55px del borde inferior. El indicador se ocultaba hasta 900px.

La medición previa confirmó un defecto existente: a 320px el copy comenzaba en Y≈−150px y a 375/390px invadía el header. El usuario eligió conservar la altura y adaptar únicamente el título en mobile estrecho. H1 y su destacado se reducen fluidamente hasta llegar a los máximos originales de 85/70px alrededor de 425px; las demás secciones mantienen su tipografía global.

La instancia Home conserva foto, contenido, CTA, alturas, encuadres, gradiente y posiciones de referencia. El overlay ahora configura coverage=100 y maxWidth=800px: se adapta al ancho disponible sin un width inline rígido que exceda el viewport. El tinte cálido y fallback originales (#0e0a08 / #271d18) se conservan como escape local de compatibilidad; las nuevas instancias utilizan por defecto tokens RSM. No se agregan tokens globales ni colores nuevos a la paleta.

## Arquitectura

| Archivo | Responsabilidad |
|---|---|
| `src/components/editorial/MediaHero.tsx` | Sección, contenido, heading, CTA, SectionContainer e indicador. |
| `src/components/editorial/MediaHero.types.ts` | Contrato discriminado y tipos responsive. |
| `src/components/editorial/MediaHeroMedia.tsx` | Picture responsive, selección nativa de video, poster/respaldo, reproducción y controles. |
| `src/components/editorial/media-hero-styles.ts` | Configuración declarativa → variables CSS locales, alturas, posiciones y overlay. |
| `src/styles/components/_media-hero.scss` | Presentación BEM y reglas responsive del componente. |

El componente no importa Home, App, rutas o catálogo. El CTA recibe una función o href; Home sigue pasando navigate("collection"). La iconografía y clases button existentes se reutilizan.

## Contrato

```ts
type MediaHeroVariant = "image" | "video";
type MediaHeroContainer = SectionContainer; // contained | full-width
type HorizontalAlignment = "left" | "center" | "right";
type VerticalAlignment = "top" | "center" | "bottom";
type TextAlignment = "left" | "center" | "right";
interface HeroResponsive<T> { desktop?: T; tablet?: T; mobile?: T }
```

`MediaHeroProps` es la unión de MediaHeroImageProps y MediaHeroVideoProps. Los tipos se reexportan desde MediaHero. No se utiliza any.

### Propiedades compartidas

| Propiedad | Default / función |
|---|---|
| id, ariaLabel | Opcionales. Sin ariaLabel, la sección utiliza aria-labelledby del heading generado con useId. |
| title | ReactNode obligatorio; permite saltos de línea controlados sin HTML sin sanitizar. |
| subtitle | ReactNode opcional dentro del heading; conserva em, itálica y tratamiento cálido de marca. |
| eyebrow, description | Texto opcional. |
| headingLevel | 1; admite 1, 2 o 3. |
| container | contained; configura solo el contenido editorial. Home utiliza full-width para conservar su composición. |
| textColor | white; tokens dark, white, caliza, paper, sierra, estirpe, arcilla, horizonte. |
| contentMaxWidth | 720px. |
| height | Responsive; desktop large, tablet hereda desktop y mobile hereda tablet. |
| contentPosition | Responsive; left / center vertical / left text. Cada eje es independiente. |
| contentInsets | Responsive; top/right/bottom/left por defecto 0. Un porcentaje vertical se calcula respecto a la altura reservada del hero, no respecto al ancho. |
| contentVisibility | Responsive; true por defecto. |
| overlay | Configuración simple o responsive; gradient, dark, opacidad .65, left-to-right y coverage 100 por defecto. |
| cta | Opcional; no se renderiza si está ausente o visible=false. |
| index | Opcional; no se renderiza si está ausente o visible=false. |
| style | Escape local de compatibilidad CSS; no se propone como setting libre de Theme Editor. |

### Image

- variant opcional, default image.
- media.desktop requiere src; objectPosition opcional, default center.
- media.tablet y media.mobile permiten src y/o objectPosition opcionales; el encuadre se hereda entre dispositivos.
- picture/source seleccionan un recurso mobile o tablet cuando existe; si no existe otro src, se reutiliza la imagen desktop sin inventar rutas.
- decorative=true por defecto: alt vacío y picture aria-hidden. Con decorative=false, imageAlt es obligatorio.
- videoOptions, fallbackImage y mobileFallback no son válidos en esta variante.

### Video

- variant="video" obligatorio.
- media.desktop: src obligatorio, poster y objectPosition opcionales.
- media.tablet/media.mobile: overrides de src, poster y objectPosition. Si falta src, se hereda el anterior; el poster puede configurarse sin duplicar un src.
- fallbackImage: HeroImageMedia obligatorio. Se utiliza también cuando el poster falla.
- mobileFallback opcional: imagen estática mobile cuando no hay un src de video mobile explícito.
- videoOptions: autoplay=true, loop=true, muted=true, playsInline=true.
- Solo se adjunta un video seleccionado por el breakpoint; no hay elementos desktop/mobile duplicados. Al cambiar la fuente se pausa y se desasocia el recurso anterior.
- No se reproduce audio automáticamente: autoplay fuerza muted aunque se reciba muted=false. Con autoplay=false, el inicio es explícito y respeta muted.

## Alturas y layout

| Preset | Altura reservada | Mínimo |
|---|---|---|
| small | 480px | 360px |
| medium | 640px | 480px |
| large | min(860px,100svh) | 660px |
| fullscreen | 100svh | 0px |
| custom | `{ height: string, minHeight?: string }` | Configurable |

Se utiliza vh como fallback y svh bajo @supports. La altura reservada actúa como mínimo: contenido excepcionalmente largo puede expandir el bloque, en lugar de quedar recortado. La instancia Home mantiene sus alturas exactas gracias al ajuste mobile autorizado. El medio es absoluto y no determina el tamaño del layout.

El contenido fluye dentro de un grid, con posicionamiento horizontal/vertical y alineación de texto independientes. No se posiciona el copy mediante coordenadas absolutas. En contained se aplica el sistema global de 1520px incluyendo gutters 60/48/36px; full-width conserva los espaciados editoriales que se configuren mediante contentInsets.

Breakpoints existentes: desktop >900px; tablet 541–900px; mobile ≤540px. El video reserva 80px inferiores para evitar que los controles tapen el contenido; su indicador aparece a la izquierda y el control a la derecha. Esta reserva no afecta a image ni al hero actual de Home.

## Overlay

```ts
interface HeroOverlayOptions {
  type: "none" | "solid" | "gradient";
  color?: MediaHeroColor;
  opacity?: number; // 0–1
  direction?: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
  coverage?: number; // 0–100
  maxWidth?: string;
  stops?: readonly { opacity: number; position: number }[];
}
```

Los valores numéricos se limitan a rangos seguros. El degradado horizontal se extiende según coverage en ancho; el vertical, en alto. El origen acompaña la dirección. El overlay no recibe eventos y permanece entre multimedia y contenido. Las instancias deben elegir dirección, color de texto y opacidad adecuados para el contenido visual real; sin un video no se certifica el contraste de un metraje futuro.

## CTA e indicador

CTA: label obligatorio, visible=true, estilo primary/light/outline-light y showIcon=true. Su destino es una unión entre onClick o href; no permite combinarlos. href admite newTab, agregando noopener noreferrer. Se conservan las clases button, la iconografía arrow y los focus existentes.

Index: current/total obligatorios cuando se configura; visible=true, tabletVisible/mobileVisible heredan visibilidad salvo false explícito. Es un span editorial con label accesible y sin comportamiento de slider, tabindex o controles de navegación.

## Reproducción y accesibilidad

- Video nativo, sin iframes o servicios externos.
- El poster está presente desde el inicio y el video solo se hace visible al disponer de un frame reproducido. Si play() se rechaza, el poster sigue visible y el control permite reintentar por gesto explícito.
- Control de pausa/reproducción de al menos 44×44px, label descriptivo, aria-pressed y foco visible. Reutiliza Icon.
- IntersectionObserver pausa fuera del viewport; visibilitychange pausa con pestaña oculta. La reanudación automática respeta una pausa manual anterior.
- prefers-reduced-motion muestra el poster sin adjuntar la fuente de video. Solo un gesto explícito puede autorizar reproducción; un cambio posterior de preferencia retira esa autorización. Una pausa manual se conserva también al cambiar preferencias/dispositivo.
- Al finalizar sin loop, no se reinicia por sí mismo. Un nuevo gesto puede comenzar desde el inicio.
- Se limpian observers, listeners, reproducción y recursos al desmontar/cambiar fuente; las promesas de reproducción obsoletas no cambian el estado de la nueva fuente.
- Un recurso decorativo no duplica anuncios. Image informativa exige alt. Home conserva un único H1.

## Rendimiento

La imagen inicial es eager con fetchPriority high, no lazy. picture permite seleccionar el recurso apropiado. El poster también se prioriza. El video utiliza preload=none y solo inicia reproducción cuando corresponde, sin bloquear el contenido. El tamaño del medio queda reservado por la sección; intercambiar poster/frame no altera sus dimensiones. No se agregan dependencias ni se generan assets.

## Ejemplos

```tsx
<MediaHero
  variant="image"
  container="contained"
  title={<>Nuestro origen <br />nos define</>}
  subtitle="No nos limita"
  media={{ desktop: { src: assetUrl("/assets/home-hero.webp"), objectPosition: "center" } }}
  height={{ desktop: "large", mobile: "medium" }}
  contentPosition={{
    desktop: { horizontal: "left", vertical: "center", textAlign: "left" },
    mobile: { horizontal: "center", vertical: "bottom", textAlign: "center" },
  }}
  overlay={{ type: "gradient", color: "dark", opacity: 0.7, coverage: 70 }}
  cta={{ label: "Explorar la colección", style: "outline-light", onClick: () => navigate("collection") }}
/>
```

Ejemplo de contrato video: videoDesktopUrl/videoMobileUrl son variables suministradas por assets aprobados o, en una adaptación futura, settings del tema. No representan rutas existentes del repositorio.

```tsx
<MediaHero
  variant="video"
  title="Nuestro origen nos define"
  container="contained"
  media={{
    desktop: { src: videoDesktopUrl, poster: assetUrl("/assets/home-hero.webp") },
    mobile: { src: videoMobileUrl, poster: assetUrl("/assets/home-hero.webp") },
  }}
  fallbackImage={{ desktop: { src: assetUrl("/assets/home-hero.webp") } }}
  videoOptions={{ autoplay: true, loop: true, muted: true, playsInline: true }}
/>
```

## SCSS y cascada

El parcial media-hero define los selectores del componente y las variables locales responsive. main.scss lo emite en el lugar que ocupaba home.segment-06. Se retiran únicamente selectores home-hero/hero-index de Home/responsive y las entradas Home de los grupos compartidos de headings/em; las entradas de otras páginas permanecen.

Selectores principales: media-hero, --image, --video, __media, __picture, __overlay, __layout, __positioner, __content, __title, __subtitle, __eyebrow, __description, __video, __video-control, __index. No se añaden Tailwind, tokens globales ni !important.

## Equivalencia propuesta con Shopify / Prestige

| API React | Posible setting |
|---|---|
| variant | media_type: select image/video |
| media desktop/mobile src | image_picker o video alojado en Shopify, según variante |
| poster desktop/mobile | image_picker |
| objectPosition | selects de encuadre / focal point |
| height | select de preset o range para custom |
| container | select contained/full-width |
| contentPosition por dispositivo | selects independientes de horizontal, vertical y text alignment |
| eyebrow/title/subtitle/description | text / inline_richtext / richtext |
| textColor / contentMaxWidth | color y range |
| contentVisibility / cta.visible | checkboxes |
| cta label/href/style/showIcon/newTab | text / url / select / checkbox |
| overlay type/color/opacity/direction/coverage | select / color / range |
| autoplay/loop | checkboxes; muted/playsInline mantienen defaults seguros |
| index visible/current/total | checkbox / text |

Debe verificarse primero qué ofrece Prestige 11.4.1 de forma nativa. No se decide aquí que haga falta una sección personalizada ni se entrega un schema Liquid. Los escapes CSS y stops de compatibilidad de Home no se trasladan automáticamente a CSS libre del editor.

## Validación y limitaciones

Las pruebas y capturas se guardan fuera del repositorio en `/private/tmp/rsm-media-hero/`. Los fixtures temporales no se incluyen en el código de producción.

- TypeScript estricto: correcto. Se comprobaron además seis contratos inválidos con `@ts-expect-error` (fallback obligatorio, exclusión de opciones video en image, alt informativo, CTA ambiguo, color y alineación inválidos).
- Build normal y build con `GITHUB_PAGES=true`: correctos. Permanece una advertencia previa sobre `#our-story section::last-child`, ajena a esta migración.
- Userback: 12/12 pruebas correctas. Verificación de imágenes: 64 assets válidos.
- Chromium: 594 combinaciones de layout (11 anchos × 2 contenedores × 3 alineaciones horizontales × 3 verticales × 3 de texto). Full-cover, contenedor máximo de 1520px, alturas y ausencia de overflow verificados.
- Imagen: picture responsive, alt informativo/decorativo, prioridad LCP, heading configurable, CTA seguro en nueva pestaña, presets, altura personalizada, cuatro direcciones de overlay, solid/none y visibilidad verificados. Los overrides parciales de posición e insets conservan los ejes no especificados; los CTA vacíos se omiten.
- Video simulado: defaults, única fuente activa, cambio de fuente, pausa manual persistente, pausa por viewport/pestaña, reduced motion, reproducción explícita, alternativa mobile estática, rechazo de autoplay, error, poster/fallback, final sin loop, objetivo táctil de 44px y limpieza al desmontar. Sin excepciones JS.
- Ambos builds se sirvieron localmente: imagen del hero cargada sin 404 en `/` y `/RSMUniverse/`, un único H1, CTA, rutas hash, historial, carrito, ficha de producto y menú móvil correctos. Sin excepciones JS ni respuestas 404 durante los recorridos.

### Comparación visual

Capturas antes/después con viewport de 900px de alto, en carpetas `before/` y `after/` del directorio temporal:

| Anchos | Altura antes / después | Resultado |
|---|---|---|
| 320, 375, 390 | 760 / 760px | Título adaptado según elección del usuario; desaparecen el recorte superior y la invasión del header. |
| 430, 540 | 760 / 760px | Composición, encuadre y tipografía conservados. |
| 541, 768 | 800 / 800px | Composición y encuadre conservados. |
| 1024, 1440, 1920, 2560 | 860 / 860px | Posición del contenido, CTA, indicador y encuadre conservados. |

No hay overflow horizontal en los 11 anchos. Las capturas no son idénticas píxel a píxel: el cambio de background-image a img introduce diferencias mínimas de interpolación y ajuste subpíxel (a 1440px, diferencia media aproximada por canal inferior a 0.1 sobre 255). La corrección tipográfica autorizada modifica deliberadamente los tres anchos más estrechos.

El resto de Home se conserva; se retuvo un cambio concurrente del usuario que añadió `hidden` al shade de «Sin fronteras». La comparación de archivos con la copia anterior confirma que App, demás páginas TSX, Header, Footer, carrito, navegación, Userback, catálogo, assets y tokens no fueron modificados por esta tarea. Esta migración solo retira de los parciales compartidos de Our Story/Collection las entradas del selector antiguo del hero. Se conserva también una edición concurrente de Our Story que configura sus H2 a 65px/peso 500; no forma parte de MediaHero.

### Archivos afectados

Además de los cinco archivos del componente indicados en Arquitectura, se crea este documento y se actualizan HomePage.tsx, styles/main.scss, styles/pages/_home.scss, styles/base/_responsive.scss, las entradas antiguas del hero en styles/pages/_our-story.scss y _collection.scss, y las referencias afectadas en REACT_ARCHITECTURE.md, SCSS_ARCHITECTURE.md y SCSS_STYLE_MAP.md. Sin cambios de dependencias, despliegue ni Shopify; sin commit, push o merge.

No existe ningún archivo de video adecuado en el repositorio. Home permanece en image. Las pruebas de video ejercitan el ciclo de HTMLVideoElement mediante métodos/eventos simulados y URLs blob temporales de prueba, no reproducen metraje real. Se requiere un asset aprobado y autorización antes de sustituir la foto, además de validar codecs, peso, poster, reproducción real y comportamiento en dispositivos/Safari.
