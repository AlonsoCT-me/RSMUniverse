# Auditoría responsive móvil — Etapa A

Fecha: 21 de noviembre de 2026. **Auditoría original (Etapa A). La actualización al final registra las correcciones P0/P1 autorizadas en Etapa B.**

## Resumen ejecutivo

**Estado actual tras Fase 3C:** los dos residuos finales quedan resueltos; las 45 combinaciones móviles auditadas no presentan overflow horizontal de documento. Ver evidencia y límites al final del documento.

Se revisaron las nueve vistas reales en nueve resoluciones: **81 combinaciones**. Se confirman siete grupos de problemas: uno crítico, dos altos y cuatro medios. Prioridad: recuperar el PDP/compraventa en móvil estrecho y los controles recortados de Care; después Home, vistas de referencia y áreas de pulsación. No todas las secciones necesitan cambios.

Se consultaron REACT_ARCHITECTURE.md, SCSS_ARCHITECTURE.md y SCSS_STYLE_MAP.md, entrada main.scss, módulos React, estilos inline, parciales y CSS compilado. main.scss carga 19 parciales mediante @use y emite 59 tramos @include en orden. index.css mantiene fuentes/Tailwind. Los tres bloques de 540 y 900 px y los de 1100/1120 px no son intercambiables; las reglas tardías de Historia prevalecen. El CSS del build auditado mantiene el archivo index-DxiFOdX2.css de fase 2.

## Método y evidencia

Chromium headless, escala 1, viewport **900 px de alto**, anchos 320/375/390/430/540/541/768/1024/1440. Barra vertical clásica de 15 px: distinguir innerWidth (viewport solicitado) de clientWidth (área de contenido). Mediciones nuevas del documento completo, imágenes y fuentes cargadas; datos en [measurements.json](mobile-responsive-evidence/measurements.json). Se miden cajas visibles, controles y scrollWidth; no se interpretan automáticamente como errores los hijos de un contenedor que recorta intencionalmente.

Se reutilizaron capturas de toda la altura por tramos de la fase 2 con el mismo CSS compilado; se incluyen muestras y se inspeccionaron visualmente los recortes principales de Home, PDP, Care y Design System. El resto se clasifica mediante DOM, no se afirma inspección visual manual de cada una de las 518 capturas anteriores. Las medidas actuales verifican las 81 combinaciones. Los tramos de captura de Care fijan el instante del marquee; el código de la aplicación no se altera.

## Matriz de hallazgos

| ID | Página | Componente | Resolución | Severidad | Problema | Causa | Archivo SCSS | Selector | Solución propuesta | Estado |
|---|---|---|---|---|---|---|---|---|---|---|
| M01 | Core/Special PDP | ProductInfo, ProductGallery | 320/375/390/430 | Crítica | Compra y galería fuera del viewport | Min-content de fila de compra y botón mínimo 290 px, propagado al grid PDP | components/_product-info.scss, pages/_product.scss, base/_shared.scss, base/_responsive.scss | .pdp, .buy-row, .button--add | Solo <=540: minmax(0,1fr), min-width:0 en hijos y botón flexible; apilar compra donde haga falta | Resuelto en Etapa B; validación detallada al final |
| M02 | Home | Sin fronteras | 320 | Alta | Palabra y bloque fuera del encuadre | Font-size inline 60 px sobre ancho estrecho | pages/_home.scss y base/_responsive.scss; origen HomePage.tsx | .borderless-fullwidth h2 | Trasladar el valor inline a regla base equivalente y añadir tamaño móvil acotado | Resuelto en Etapa B; validación detallada al final |
| M03 | Home | Encabezado colección | 320 | Media | Tierra RSM rebasa tarjeta editorial | Acento 70 px frente al título móvil 45 px | pages/_collection.scss, base/_responsive.scss | .featured-collection__accent | Reducir solo acento móvil según espacio; conservar jerarquía y texto | Resuelto en cierre P2 para el alcance documentado; ver validación final |
| M04 | Care | CareScrollStory | 320 | Alta | Pasos finales y texto recortados | Grid móvil auto/min-content de 344 px en shell de 273 px; overflow:clip del contenedor oculta contenido | pages/_care.scss, base/_responsive.scss | .care-story__layout, .care-story__visual, .care-story__nav | Permitir encogimiento de tracks/hijos y redistribuir navegación <=540 | Resuelto en Etapa B; validación detallada al final |
| M05 | Design System | Tokens/component board | 320/375/390 | Media | Scroll horizontal | Columnas de tokens dimensionadas por contenido y botones mínimos en paneles | pages/_design-system.scss, base/_responsive.scss, base/_shared.scss | .token-grid, .component-board, .button | Tracks minmax(0,1fr), hijos flexibles; tratar paneles sin cambiar botón global | Resuelto en cierre P2 para el alcance documentado; ver validación final |
| M06 | Comparison | Hero | 320/375 | Media | Scroll horizontal | Hipótesis: título de 56 px y palabras largas; aislar glifos/regla antes de corregir | pages/_design-system.scss (regla compartida), base/_responsive.scss | .comparison__hero h1 | Tipografía móvil fluida o wrapping específico sin cambiar texto | Resuelto en cierre P2 para el alcance documentado; ver validación final |
| M07 | Todas/PLP/PDP | Header, Footer, toolbar, Quantity | 320–540 | Media | Áreas de pulsación pequeñas | Iconos sin padding, botones ajustados a línea/SVG | layout/_header.scss, layout/_footer.scss, components/_product-info.scss, pages/_collection.scss | .header-actions button, .quantity button, .toolbar select, .footer__nav button | Ampliar área útil móvil; comprobar separación y no superposición | Resuelto en cierre P2 para el alcance documentado; ver validación final |

## Hallazgos por página

### Home — M02 y M03

[Evidencia visual](mobile-responsive-evidence/home-320-y900.png): texto «Sin fronteras» cortado y acento de colección demasiado ancho. A 320 el bloque Sin fronteras tiene x=16 y ancho=333 px, excediendo viewport; scroll horizontal global +8 px no mide por sí solo el recorte porque existen contenedores con overflow. El shade inline de 800 px es decorativo y está recortado por el hero: **no constituye por sí mismo un fallo**. La sección borderless oculta contiene anchos inline de 780/800 px; no corregirla por estar fuera de pantalla. El CTA Special tiene minWidth inline 240 px: riesgo potencial en contextos estrechos, no fallo independiente confirmado. Cambiar inline requiere trasladar literalmente el valor base, conservarlo desde 541 y autorizar esa modificación TSX; no resolver con !important.

### Collection / PLP

No se confirmó overflow estructural adicional en el grid de productos. Quick Add mide 44×44 px y no se propone reducirlo. El selector de ordenación mide 130×14 px a 320; disponibilidad, 118.7×16.5 px. M07 propone aumentar su caja de interacción, sin añadir filtros o activar funcionalidades de prototipo. Los swatches informativos de cards son spans, no controles de selección averiados.

### PDP Core y Special — M01 y M07

[Core](mobile-responsive-evidence/caliza-320-y900.png), [Special](mobile-responsive-evidence/nocturna-320-y900.png). Core mide galería 440 px a x=16 y fila de compra 396 px a x=38; botón de compra 292 px a x=142, extremo derecho 434. A 320 el área útil es 305: es un obstáculo comercial real, no solo espaciado. Overflow global Core +151/+96/+81/+41 px a 320/375/390/430; Special +149/+94/+79/+39. Las miniaturas están diseñadas para scroll local, pero aquí se desborda también su contenedor y el panel de información. El grid móvil usa 1fr con mínimo automático; los 94 px de Quantity, gap 10 y mínimo 290 de botón fuerzan el ancho. Los botones de cantidad tienen caja aproximada 30.7×16 px. Galería, quantity y acordeones funcionan programáticamente; ello no garantiza que todos sean cómodamente alcanzables con el dedo.

### Special Edition Landing

Sin fallo adicional de overflow confirmado en el contenido principal en los cinco anchos móviles. Heroes, secciones editoriales y CTA conservan su orden. No se propone rediseño ni reencuadre fotográfico subjetivo. Aplican controles globales M07.

### Nuestra Historia

Sin overflow principal confirmado en los cinco anchos móviles. TerritoryGrid permanece oculto por clase original: no es un error responsive ni se propone hacerlo visible. Se conservan separación/gap de 4 px donde se define actualmente, banner y secuencia de secciones. No modificar estos valores como corrección colateral. Aplican controles globales M07.

### Care — M04

[Captura](mobile-responsive-evidence/care-320-y2700.png): controles 04/05 y textos fuera del encuadre. A 320 la visual y navegación miden 344 px desde x=16; quinto botón termina fuera del viewport. La página usa overflow:clip, por lo que una cifra pequeña de overflow global no descarta contenido inaccesible. Se debe ajustar el grid/navegación sin quitar sticky ni modificar IntersectionObserver. A 375–540 no se confirma el mismo desborde en las medidas.

### Design System — M05

[Captura](mobile-responsive-evidence/system-320-y900.png): segunda columna de tokens fuera del área útil. Overflow global +74/+19/+4 px a 320/375/390; no aparece en 430/540. También hay botones mínimos en el component board. Esta vista comparte reglas de títulos con Comparison: no cambiar el selector agrupado globalmente.

### Comparison — M06

[Captura de referencia](mobile-responsive-evidence/compare-320.png). DOM confirma scrollWidth=370 frente a clientWidth=305 a 320, y +10 px a 375; a 390 no aparece. La caja de un elemento puede caber aunque sus glifos desborden: no limitar el detector a getBoundingClientRect. Se propone revisión de tipografía/wrapping, no modificar contenido.

## Componentes compartidos e impactos

Header/Footer aparecen en las nueve vistas, Newsletter dentro de Footer y CartDrawer en App. ProductCard aparece en Home/Collection/relacionados Core. ProductGallery/ProductInfo/Quantity se comparten entre ambos PDP. Accordion aparece en PDP, Care y Design System. Reveal sirve Special Edition. Los módulos editoriales de territorio pertenecen a Historia. El menú móvil permanece integrado en Header; no existe MobileMenu independiente. Quantity conserva su nombre real, no QuantitySelector.

Header muestra cajas de 20×20 px para buscar, bolsa y menú; Footer enlaces de 18 px de alto. Son mediciones, no un dictamen de incumplimiento automático: separación y excepciones de accesibilidad requieren evaluación adicional. No hay selectores de variante comerciales activos en el catálogo; los swatches presentacionales son una limitación funcional preexistente, no una regresión móvil. Drawer permite consultar/agregar/cerrar; no tiene eliminación o edición interna y no se propone implementarla.

## Overflow global medido

Valores: scrollWidth − clientWidth en px. **No equivalen automáticamente a fallos**: se contrastan con contenido, clipping y cajas. Las columnas desde 541 son una referencia protegida, no permiso para corregirlas.

| Vista | 320 | 375 | 390 | 430 | 540 | 541 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|---|---|---|---|
| home | 8 | 0 | 0 | 0 | 0 | 126 | 0 | 0 | 0 |
| collection | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| caliza | 151 | 96 | 81 | 41 | 0 | 0 | 0 | 56 | 0 |
| nocturna | 149 | 94 | 79 | 39 | 0 | 0 | 0 | 56 | 0 |
| special | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| story | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| care | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| system | 74 | 19 | 4 | 0 | 0 | 23 | 0 | 80 | 0 |
| compare | 65 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |


## Riesgos de regresión

- Cambios globales en .button afectarían PDP, Home, Design System y drawer; preferir selectores de contexto dentro de @media(max-width:540px).
- Home tiene estilos inline con prioridad sobre reglas normales. Trasladarlos sería una modificación TSX separada que requiere autorización y prueba de igualdad desde 541.
- Los overrides deben emitirse después de los tramos móviles relevantes de main.scss; no reordenar includes ni fusionar media queries.
- Conservar tokens, tipografía, fotos, jerarquía y separaciones editoriales. No introducir overflow-x:hidden global ni !important para esconder el problema.
- Hay defectos preexistentes fuera de alcance: Home +126 px a 541; ambos PDP +56 px a 1024; Design System +23 a 541/+80 a 1024. Deben permanecer como referencia sin cambios hasta otra autorización. A 1440 las nueve vistas no presentan overflow global medido.
- Un ajuste compartido puede modificar alturas y observación sticky en Care; volver a probar scroll y movimiento reducido.

## Plan de implementación propuesto — pendiente de aprobación

1. **Crítica:** M01, contener PDP/compra y galerías en 320–430, preservando scroll local de miniaturas.
2. **Altas:** M04 (Care) y M02 (Home; aprobar primero cómo resolver el inline).
3. **Medias:** M03, M05, M06 y M07; no imponer una nueva estética ni cambiar estados de prototipo.
4. **Opcionales:** reencuadres, escala editorial o cambios de espaciado subjetivos solo con una dirección visual aprobada. No hay evidencia para modificar todas las secciones.

## Validación propuesta

Antes de cada grupo guardar capturas y medidas; después repetir nueve vistas × nueve anchos con altura 900 y escala 1. Para <=540 exigir contención de contenido funcional, scroll local intencional, botones alcanzables, sin textos cortados; para >=541 comparar DOM/capturas/estilos y exigir equivalencia con la referencia, incluidos defectos previos fuera de alcance. Probar entrada directa/hash/historial, Quick Add, cantidades/subtotal/drawer, galería/miniaturas, acordeones, menú móvil, newsletter y Care con reduced-motion. Repetir TypeScript/build, Userback y verificación de imágenes cuando se autorice implementar. No hay lint configurado.

## Limitaciones y resultados funcionales

Auditoría local Chromium con barra clásica; no certifica Safari/iOS/Android, teclado virtual, zoom, orientación ni viewport dinámico de dispositivos reales. No se realizaron pruebas de lector de pantalla ni evaluación formal WCAG. No se probó el servicio externo real de Userback. La inspección de encuadre fotográfico no produce una recomendación de cambio sin referencia visual aprobada. El build se generó fuera del repositorio; no se instalaron paquetes ni se modificó producción. La inspección completa del DOM cubre toda la página; no se afirma revisión visual manual exhaustiva de cada estado.

Los recorridos nuevos de esta sesión pasaron: navegación hash/historial/recarga, Quick Add, acumulación y subtotal, abrir/cerrar drawer, cantidad y reinicio al cambiar producto, galerías/miniaturas Core y Special, acordeones, menú móvil a 390 px, Newsletter, filtros de Collection y acciones de Care/Special con movimiento reducido. Sin excepciones JavaScript ni 404 locales en ese recorrido. Los clicks de prueba son programáticos: no sustituyen hit testing táctil ni certifican que un control recortado sea alcanzable a 320 px.

**Etapa B autorizada exclusivamente para M01, M02 y M04. Ver actualización siguiente.**


## Etapa B — correcciones P0/P1

### Alcance y reproducción

Se reprodujeron las nueve vistas en los nueve anchos antes de editar, con altura 900 y escala 1. El build anterior genera index-DxiFOdX2.css, idéntico al build usado para las evidencias visuales de Etapa A/fase 2; se conserva en /private/tmp/rsm-3b-before. Las capturas previas de toda la altura siguen siendo una referencia válida para ese mismo código/CSS. Las mediciones nuevas se guardan en /private/tmp/rsm-3b-before-measures/measurements.json.

Solo se intervienen M01, M02 y M04. El encabezado de colección M03, Design System M05, Comparison M06 y áreas táctiles M07 no se corrigen. No se alteran dependencias, tokens, catálogo, assets, navegación, estado, Userback o despliegue.

### Cambios implementados

| Hallazgo | Causa reproducida | Corrección | Archivo y selector | Resultado |
|---|---|---|---|---|
| M01 · PDP Core/Special | Track 1fr con mínimo automático; fila 94px + gap + botón min-width:290px ensancha información y galería | Track minmax(0,1fr), min-width:0/max-width:100% en los dos hijos PDP y mínimo cero solo en botón de compra | base/_responsive.scss, segmento 59: .pdp, .pdp > .product-gallery, .pdp > .product-info, .pdp .buy-row, .pdp .buy-row > .button--add | Cajas contenidas y compra por coordenadas comprobada en 320/375/390/430/540 |
| M02 · Home Sin fronteras | Font-size inline de 60px impide override móvil | Se extrae únicamente font-size a clase semántica; valor base exacto 60px y móvil clamp(46px,15vw,60px) | HomePage.tsx: .borderless-fullwidth__title; pages/_home.scss segmento 12 y base/_responsive.scss segmento 59 | Bloque/título deja de sobresalir a 320; fotografía y otros inline intactos |
| M04 · Care pasos | Tracks móviles 1fr con mínimo automático fuerzan visual/nav/steps a 344px | Tracks minmax(0,1fr), mínimos cero en visual/steps y segunda columna flexible de cada botón de paso | base/_responsive.scss segmento 59: .care-story__layout, .care-story__visual, .care-story__steps, .care-step > button | Navegación y cinco botones de pasos contenidos; quinto paso seleccionable en los cinco anchos móviles |

Todos los overrides están dentro de @media(max-width:540px), al final del segmento 59 existente; no se crea parcial ni se reordena la cascada. La única regla base nueva reproduce el font-size inline de Home. No se utiliza overflow-x:hidden global ni !important. El texto del botón de compra puede ocupar varias líneas en móvil estrecho, conservando contenido, tipografía y acción.

### Validación de geometría e interacción

Las 81 mediciones posteriores se guardan en /private/tmp/rsm-3b-after-measures/measurements.json. Las 36 combinaciones de página/resolución desde 541px coinciden exactamente con las mediciones anteriores, incluyendo los defectos previos fuera de alcance.

En PDP Core, el overflow global atribuible al layout pasa de +151/+96/+81/+41 a +8/0/0/0 px en 320/375/390/430; Special pasa de +149/+94/+79/+39 a +8/0/0/0. Los 8px residuales a 320 ya aparecen en otras vistas y no proceden de la compra/galería corregidas: **no se declara ausencia universal de overflow de la aplicación**. Se comprueban directamente los límites de galería, información, fila y botón de compra. Las miniaturas conservan overflow local y navegación.

Las pulsaciones por coordenadas (con hit testing del centro del botón) abren el carrito en ambos PDP a 320/375/390/430/540. Los cinco botones de Care y su navegación quedan dentro del viewport y la selección del paso 5 funciona en esos anchos. También pasan galería/miniaturas, cantidad y reinicio al cambiar producto, acordeones, menú móvil, Newsletter, Quick Add, acumulación/subtotal, historial, recarga y filtros. Las pruebas de movimiento reducido pasan. El build Pages pasa navegación/rutas/aliases/metadata/imágenes bajo /RSMUniverse/. TypeScript, build Vite normal y Pages, 12 pruebas de Userback y verificación de 41 imágenes pasan (incluye las evidencias PNG de la auditoría ya presentes en el repositorio). No hay lint configurado.

### Pendientes y límites

Se mantienen M03/M05/M06/M07 y todos los defectos anteriores desde 541px. La medición actual también distingue recortes de la introducción y CTA final de Care a 320px (h2 de unos 322px y botón mínimo 290px): no pertenecen a CareScrollStory y quedan registrados sin corregir, para evitar ampliar el alcance de «controles y pasos». La reducción del track de Care no oculta esos problemas mediante overflow global.

Las pruebas son Chromium local, sin certificación de Safari/iOS, Android físico, zoom, teclado virtual ni servicio real de Userback. La comparación visual final cubrió nueve vistas × nueve resoluciones (81 casos), página completa por tramos con altura de viewport 900 px. **211 parejas de PNG desde 541px y 162 parejas de vistas móviles no intervenidas son idénticas byte por byte.** Se preservan así tablet/desktop y las vistas móviles fuera del cambio. Una línea con variación mínima de rasterizado en la primera captura Core a 768px se comprobó repitiendo ese caso en ambos builds guardados: la repetición completa resultó idéntica. No se compensó con cambios de estilos.

Las capturas móviles de los casos intervenidos se revisaron para comprobar contención y legibilidad. M01/M02/M04 quedan **resueltos en las condiciones probadas**. Evidencias posteriores: [Home 320](mobile-responsive-evidence/phase-3b/home-320-y900.png), [Core 320](mobile-responsive-evidence/phase-3b/caliza-320-y900.png), [Special 320](mobile-responsive-evidence/phase-3b/nocturna-320-y900.png), [Care 320](mobile-responsive-evidence/phase-3b/care-320-y2700.png). El [resumen de comparación](mobile-responsive-evidence/phase-3b/comparison.json) registra resoluciones y resultados. El resto de capturas permanece en /private/tmp/rsm-3b-visual; las mediciones, en los directorios temporales indicados anteriormente.


## Cierre P2 y Care — 22 de noviembre de 2026

### Referencia y alcance

Se conserva íntegra la intervención P0/P1 pendiente en el árbol de trabajo. La referencia nueva es el build /private/tmp/rsm-p2-before, CSS index-CZoqVxnu.css, idéntico al build P0/P1 utilizado para las capturas de /private/tmp/rsm-3b-visual. Se repitieron las 81 mediciones antes de editar. Se usan esas capturas previas y nuevas capturas pareadas para validar el resultado. Ningún cambio de esta intervención se aplica desde 541px.

El único archivo de producción editado para P2 es src/styles/base/_responsive.scss: dos bloques @media(max-width:540px) añadidos al final del segmento 59, sin mover includes ni reorganizar parciales. No hay cambios JSX nuevos, dependencias ni tokens. HomePage.tsx y _home.scss siguen teniendo exclusivamente los cambios P0/P1 anteriores.

### Causas reproducidas y correcciones

| Hallazgo | Causa comprobada | Selectores y corrección móvil | Estado de validación |
|---|---|---|---|
| M03 · Home | Acento de 70px rebasa la composición a 320px | .featured-collection__accent: clamp(48px,14vw,70px), manteniendo familia y acento mayor que el título de 45px | Revisión visual y medida de texto en los cinco anchos móviles |
| M05 · Design System | Tokens con tracks 1fr de mínimo automático, labels de 24px y botones mínimos de 290px; h1 también desborda | .token-grid: repeat(2,minmax(0,1fr)); article/panel min-width:0; labels fluidos 17–24px; botones de panel/sección min-width:0/max-width:100%; h1 fluido | Sin overflow global en 320/375/390/430/540 |
| M06 · Comparison | Confirmado: h1 tiene caja de 273px pero scrollWidth de unos 363px a 320; el problema es tipográfico, no la tabla | .comparison__hero h1 y .system-hero h1: clamp(40px,13vw,56px). Tabla móvil ya es una columna y no requiere scroll horizontal artificial | Sin overflow global en los cinco anchos móviles |
| M07 · áreas táctiles | Header 20×20, Footer 18px de alto, toolbar 14–16.5px de alto y cantidad ~30.7×16 | Header/cierre de menú/cierre de drawer: 44×44; Footer/toolbar/select/Newsletter/continuar Care: mínimos 44; cantidad: botones 44×44 en selector de 110px y compra flex-wrap para conservar contención | Medidas y pruebas funcionales correctas; no implica certificación WCAG |
| Care · introducción/CTA | Tracks auto crecen por el min-content de «acompañarte» a 45px y botón mínimo de 290px | .care-intro .shell y .care-cta: track minmax(0,1fr); hijos mínimos cero/max100%; h2 fluido 34–45px; CTA width:min(100%,290px) | Sin recortes ni overflow global en los cinco anchos móviles |
| Newsletter · overflow común | Formulario/input de ~313px y título fuera del ancho útil a 320 | Grid minmax(0,1fr), hijos min-width:0/max100%, input width100%/min0 y h2 fluido 32–43px | Formulario contenido; sin ocultar overflow |

Los selectores Header se limitan a .header-actions > button:not(.desktop-only), .mobile-nav__top button y .cart-drawer__head button; gap móvil de acciones 4px para acomodar las tres cajas de 44px junto al logo sin superposición. Footer reduce gap entre sus controles al aumentar el alto de cada botón, conservando texto, alineación y tipografía. .pdp .buy-row pasa a flex-wrap; Quantity ocupa 110px y compra usa flex:1 1 180px, apilándose solo cuando falta espacio. Se comprobó nuevamente la compra por coordenadas en los cinco anchos de ambos PDP y el quinto paso de Care.

El CTA del hero Home también conserva min-width:0/max-width:100% para no exceder su contenedor estrecho. No se añaden wrappers, scroll global oculto, !important ni breakpoints nuevos. No se cambian imágenes, colores, textos, animaciones o funcionalidad. Los swatches presentacionales sin handlers no se convierten en selectores comerciales.

### Resultados funcionales y medidas

81 medidas posteriores en /private/tmp/rsm-p2-closure-measures/measurements.json. Care, Design System y Comparison tienen scrollWidth igual a clientWidth en los cinco anchos móviles. También Home, Collection, Special Landing y Special PDP no presentan overflow global medido. Core conserva +7px e Historia +6px a 320: son residuos previos menores que los +8px de referencia y no proceden de los elementos intervenidos; no se declara ausencia universal de overflow ni se corrigen otros textos editoriales fuera de alcance. Desde 375 hasta 540 ninguna de las nueve vistas tiene overflow global medido.

Las áreas de Header, Footer, filtros/ordenación y cantidad intervenidas cumplen el mínimo 44px; los breadcrumbs compactos y swatches presentacionales siguen fuera de esta ampliación concreta. La auditoría de accesibilidad general permanece pendiente. No se alteran controles inactivos del prototipo para darles funcionalidad.

TypeScript y builds normal/Pages pasan. Pasan las 12 pruebas de Userback, navegación hash, aliases, historial/recarga, carrito y subtotal, Quick Add, galerías/miniaturas, cantidad y reinicio por producto, acordeones, filtros, menú móvil, Newsletter y movimiento reducido. El recorrido Pages bajo /RSMUniverse/ no presenta excepciones JS ni 404 locales. No se publica ni se modifica GitHub Actions. Se conserva P0/P1, incluida compra por coordenadas y controles de Care contenidos en 320/375/390/430/540.

### Comparación visual y límites

Validación completada: **45 casos móviles y 36 casos protegidos desde 541px**, con capturas de toda la altura. Las **36 parejas de DOM y 211 parejas de PNG desde 541px son idénticas byte por byte** en comparación pareada. Los defectos preexistentes a 541/1024 se mantienen sin cambios. Se inspeccionaron visualmente encabezado Home, tokens/paneles de Design System, título/tabla de Comparison, introducción/CTA de Care y controles de compra.

Evidencias finales: [Home](mobile-responsive-evidence/phase-3b-p2/home-320-y900.png), [Header](mobile-responsive-evidence/phase-3b-p2/home-320.png), [Design System](mobile-responsive-evidence/phase-3b-p2/system-320-y900.png), [Comparison](mobile-responsive-evidence/phase-3b-p2/compare-320.png), [Care introducción](mobile-responsive-evidence/phase-3b-p2/care-320-y900.png), [Care CTA](mobile-responsive-evidence/phase-3b-p2/care-320-y8100.png), [compra](mobile-responsive-evidence/phase-3b-p2/caliza-320-y900.png) y [reporte](mobile-responsive-evidence/phase-3b-p2/comparison.json). Las capturas móviles finales se encuentran en /private/tmp/rsm-p2-mobile-final y las pareadas protegidas en /private/tmp/rsm-p2-final-visual/{before,after}.

M03/M05/M06 quedan resueltos en las condiciones probadas. M07 queda resuelto para los controles definidos en esta intervención, sin equivaler a una auditoría general de accesibilidad. Introducción/CTA de Care quedan contenidos. Se preservan M01/M02/M04. Durante la revisión se detectó y corrigió un selector táctil demasiado amplio que hacía visible Mi cuenta: el selector final excluye .desktop-only. Se repitieron las 45 capturas móviles y se comprobaron cuenta oculta, logo 120px y ausencia de solapamiento en los cinco anchos. Los controles globales autorizados Header/Footer/Newsletter afectan las nueve vistas móviles: no existe una vista móvil completa sin intervención compartida en esta etapa. La exigencia de identidad absoluta se aplica a todas las vistas desde 541px; para móvil se revisan los componentes intervenidos y el contenido no afectado, sin afirmar que toda la página sea idéntica tras ampliar controles.

La comparación pareada desde 541px utiliza ambos builds guardados en la misma sesión de Chromium y servidor local sin caché, conservando fuentes y condiciones de rasterizado. Esto evita confundir pequeñas variaciones entre procesos/fuentes externas con cambios de estilos. Las capturas recorren toda la altura por tramos, viewport alto 900px, escala 1. No se certifica Safari/iOS, Android físico, zoom, teclado virtual ni WCAG. No se valida el servicio remoto real de Userback.


## Fase 3C — dos residuos de overflow a 320px

### Diagnóstico previo y cambios mínimos

Se guardó el build anterior en /private/tmp/rsm-3c-before (CSS index-BwNB5jOs.css), sin alterar los cambios P0/P1/P2 existentes. Se reprodujeron ambos residuos con fuentes e imágenes cargadas en Chromium, viewport 320×900, escala 1 y clientWidth de 305px por la barra vertical clásica.

| Caso | Elemento y causa comprobados | Corrección y selector | Archivo |
|---|---|---|---|
| Core · +7px | Los hijos directos de .pdp-story —placeholder y copy— miden 312.328px. El copy tiene min-width:auto, padding 70px 22px, margen cero, posición static y transform:none. El track móvil 1fr usa un mínimo automático que suma min-content y padding: el grid mide 305px pero su columna computada mide 312.328px. Después la columna computa 305px; no falla el contenedor .app ni la galería | .pdp-story: grid-template-columns:minmax(0,1fr). Se conserva tipografía, padding, imágenes y texto; el track deja de crecer por el mínimo intrínseco | src/styles/base/_responsive.scss, segmento 59 |
| Historia · +6px | .territory-editorial__copy h2, texto EL TERRITORIO: caja de 286.891px desde x=24; el glifo final termina en x=310.906. Font-size 50px, min-width:auto, padding/margen cero, position:static y transform:none | .territory-editorial__copy h2: font-size:clamp(44px,13.9vw,50px). A 320 computa 44.48px y el texto cabe; a 375/390/430/540 conserva exactamente 50px | src/styles/base/_responsive.scss, segmento 59 |

Ambas reglas se añaden en un único @media(max-width:540px) al final del segmento existente, sin reorganizar SCSS. No se introduce otro breakpoint; la fórmula del título recupera su tamaño anterior antes de 375px. No hay cambios JSX, tokens, catálogos, dependencias, rutas, carrito, Userback ni despliegue. Todas las reglas anteriores permanecen literalmente intactas.

### Comprobación posterior

A 320px, **Core e Historia tienen scrollWidth=clientWidth=305px**. El diagnóstico vuelve a medir cajas y glifos: no hay elementos editoriales fuera del documento. Core conserva miniaturas fuera del viewport dentro de su carrusel con overflow local; no se confunden con overflow de documento ni se modifican.

Se midieron nueve vistas × nueve resoluciones: 320/375/390/430/540/541/768/1024/1440, siempre con altura 900 y escala 1. Las **45 combinaciones móviles** tienen scrollWidth igual a clientWidth, sin ocultar overflow en html, body o .app. Los datos se guardan temporalmente en /private/tmp/rsm-3c-measures/measurements.json y los diagnósticos antes/después en /private/tmp/rsm-3c-diagnosis*.txt.

TypeScript y build Vite pasan. Pasan compra por coordenadas en ambos PDP, objetivos táctiles, cuenta móvil oculta, logo conservado, quinto paso de Care y el recorrido de navegación/hash/historial/recarga, Quick Add, cantidades/subtotal/drawer, galerías/miniaturas, acordeones, menú móvil, filtros y Newsletter, sin excepciones JavaScript ni 404 locales. Se conservan las correcciones anteriores.

### Comparación visual

Se comparan ambos builds guardados en la misma sesión de Chromium, servidor local sin caché y fuentes compartidas. Se capturan los nueve primeros viewports por resolución y toda la altura por tramos de Core e Historia; el DOM completo de las nueve vistas se conserva en cada caso. No se afirma inspección visual exhaustiva de todas las secciones ajenas al cambio. **Resultado final: 81 parejas de DOM idénticas y 161 parejas de PNG comparadas; 149 idénticas y 12 diferencias esperadas exclusivamente en Core/Historia a 320px. Las 66 parejas de PNG desde 541px son idénticas byte por byte.** No se detectaron cambios en las otras siete vistas ni en Core/Historia a 375/390/430/540/541/768/1024/1440. Las capturas de las páginas afectadas cubren toda su altura; para las otras siete, se compara el primer viewport y el DOM completo, con el alcance visual descrito anteriormente.

Evidencias: [Core antes](mobile-responsive-evidence/phase-3c/before-caliza-320-y1800.png), [Core después](mobile-responsive-evidence/phase-3c/after-caliza-320-y1800.png), [Historia antes](mobile-responsive-evidence/phase-3c/before-story-320-y1800.png), [Historia después](mobile-responsive-evidence/phase-3c/after-story-320-y1800.png), [medidas y estilos computados](mobile-responsive-evidence/phase-3c/diagnosis.json) y [comparación](mobile-responsive-evidence/phase-3c/comparison.json). Los artefactos completos están en /private/tmp/rsm-3c-visual/{before,after}.

**Los dos residuos quedan resueltos en las condiciones probadas.** Se cierra el overflow horizontal de documento dentro de los cinco anchos móviles auditados, preservando las correcciones P0/P1/P2 y los problemas preexistentes desde 541px. También pasó el build Pages y su recorrido local de navegación, aliases e imágenes, además de las 12 pruebas existentes de Userback. No se publicó ni se hizo commit/push/merge.

La limitación de entorno permanece: Chromium local con barra vertical clásica; no certifica Safari/iOS, Android físico, zoom, teclado virtual ni accesibilidad formal. No se alteran los problemas preexistentes desde 541px. Esta corrección se limita estrictamente a las dos fuentes documentadas de overflow.
