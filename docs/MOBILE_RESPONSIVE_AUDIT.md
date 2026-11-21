# Auditoría responsive móvil — Etapa A

Fecha: 21 de noviembre de 2026. **Solo diagnóstico; ninguna corrección autorizada ni implementada.**

## Resumen ejecutivo

Se revisaron las nueve vistas reales en nueve resoluciones: **81 combinaciones**. Se confirman siete grupos de problemas: uno crítico, dos altos y cuatro medios. Prioridad: recuperar el PDP/compraventa en móvil estrecho y los controles recortados de Care; después Home, vistas de referencia y áreas de pulsación. No todas las secciones necesitan cambios.

Se consultaron REACT_ARCHITECTURE.md, SCSS_ARCHITECTURE.md y SCSS_STYLE_MAP.md, entrada main.scss, módulos React, estilos inline, parciales y CSS compilado. main.scss carga 19 parciales mediante @use y emite 59 tramos @include en orden. index.css mantiene fuentes/Tailwind. Los tres bloques de 540 y 900 px y los de 1100/1120 px no son intercambiables; las reglas tardías de Historia prevalecen. El CSS del build auditado mantiene el archivo index-DxiFOdX2.css de fase 2.

## Método y evidencia

Chromium headless, escala 1, viewport **900 px de alto**, anchos 320/375/390/430/540/541/768/1024/1440. Barra vertical clásica de 15 px: distinguir innerWidth (viewport solicitado) de clientWidth (área de contenido). Mediciones nuevas del documento completo, imágenes y fuentes cargadas; datos en [measurements.json](mobile-responsive-evidence/measurements.json). Se miden cajas visibles, controles y scrollWidth; no se interpretan automáticamente como errores los hijos de un contenedor que recorta intencionalmente.

Se reutilizaron capturas de toda la altura por tramos de la fase 2 con el mismo CSS compilado; se incluyen muestras y se inspeccionaron visualmente los recortes principales de Home, PDP, Care y Design System. El resto se clasifica mediante DOM, no se afirma inspección visual manual de cada una de las 518 capturas anteriores. Las medidas actuales verifican las 81 combinaciones. Los tramos de captura de Care fijan el instante del marquee; el código de la aplicación no se altera.

## Matriz de hallazgos

| ID | Página | Componente | Resolución | Severidad | Problema | Causa | Archivo SCSS | Selector | Solución propuesta | Estado |
|---|---|---|---|---|---|---|---|---|---|---|
| M01 | Core/Special PDP | ProductInfo, ProductGallery | 320/375/390/430 | Crítica | Compra y galería fuera del viewport | Min-content de fila de compra y botón mínimo 290 px, propagado al grid PDP | components/_product-info.scss, pages/_product.scss, base/_shared.scss, base/_responsive.scss | .pdp, .buy-row, .button--add | Solo <=540: minmax(0,1fr), min-width:0 en hijos y botón flexible; apilar compra donde haga falta | Visual + DOM |
| M02 | Home | Sin fronteras | 320 | Alta | Palabra y bloque fuera del encuadre | Font-size inline 60 px sobre ancho estrecho | pages/_home.scss y base/_responsive.scss; origen HomePage.tsx | .borderless-fullwidth h2 | Trasladar el valor inline a regla base equivalente y añadir tamaño móvil acotado | Visual + DOM; requiere autorización específica para tocar inline |
| M03 | Home | Encabezado colección | 320 | Media | Tierra RSM rebasa tarjeta editorial | Acento 70 px frente al título móvil 45 px | pages/_collection.scss, base/_responsive.scss | .featured-collection__accent | Reducir solo acento móvil según espacio; conservar jerarquía y texto | Visual; completar rango con medición de texto antes de fijar valor |
| M04 | Care | CareScrollStory | 320 | Alta | Pasos finales y texto recortados | Grid móvil auto/min-content de 344 px en shell de 273 px; overflow:clip del contenedor oculta contenido | pages/_care.scss, base/_responsive.scss | .care-story__layout, .care-story__visual, .care-story__nav | Permitir encogimiento de tracks/hijos y redistribuir navegación <=540 | Visual + DOM |
| M05 | Design System | Tokens/component board | 320/375/390 | Media | Scroll horizontal | Columnas de tokens dimensionadas por contenido y botones mínimos en paneles | pages/_design-system.scss, base/_responsive.scss, base/_shared.scss | .token-grid, .component-board, .button | Tracks minmax(0,1fr), hijos flexibles; tratar paneles sin cambiar botón global | Visual + DOM |
| M06 | Comparison | Hero | 320/375 | Media | Scroll horizontal | Hipótesis: título de 56 px y palabras largas; aislar glifos/regla antes de corregir | pages/_design-system.scss (regla compartida), base/_responsive.scss | .comparison__hero h1 | Tipografía móvil fluida o wrapping específico sin cambiar texto | DOM; propuesta visual por aprobar |
| M07 | Todas/PLP/PDP | Header, Footer, toolbar, Quantity | 320–540 | Media | Áreas de pulsación pequeñas | Iconos sin padding, botones ajustados a línea/SVG | layout/_header.scss, layout/_footer.scss, components/_product-info.scss, pages/_collection.scss | .header-actions button, .quantity button, .toolbar select, .footer__nav button | Ampliar área útil móvil; comprobar separación y no superposición | DOM; no implica certificación WCAG |

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

**Etapa B no iniciada. Se requiere aprobación explícita para implementar las correcciones propuestas.**
