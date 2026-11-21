# Arquitectura SCSS — RSM Universe, fase 2

## Entrada y estructura

`src/main.tsx` importa primero `src/index.css` (dos imports CSS nativos: Google Fonts y Tailwind) y después `src/styles/main.scss`. No se carga la antigua hoja monolítica ni se duplica su contenido. Sass 1.108.2 es la única dependencia directa añadida, de desarrollo; React, TypeScript, Vite y Tailwind mantienen sus versiones.

Se crean 20 archivos SCSS: entrada y 19 parciales. El [mapa de estilos](SCSS_STYLE_MAP.md) registra los 59 tramos originales y sus selectores/destinos.

```text
src/styles/abstracts/_tokens.scss
src/styles/base/_elements.scss
src/styles/base/_responsive.scss
src/styles/base/_shared.scss
src/styles/components/_cart.scss
src/styles/components/_newsletter.scss
src/styles/components/_product-card.scss
src/styles/components/_product-gallery.scss
src/styles/components/_product-info.scss
src/styles/layout/_footer.scss
src/styles/layout/_header.scss
src/styles/main.scss
src/styles/pages/_care.scss
src/styles/pages/_collection.scss
src/styles/pages/_comparison.scss
src/styles/pages/_design-system.scss
src/styles/pages/_home.scss
src/styles/pages/_our-story.scss
src/styles/pages/_product.scss
src/styles/pages/_special-edition.scss
```

## Cascada y módulos

Los parciales definen mixins `segment-NN` sin emitir CSS al cargarse. main.scss usa `@use` con namespaces y ejecuta los 59 `@include` en la secuencia original. Los números representan orden de origen, no prioridad/especificidad. Así una responsabilidad puede tener varios tramos en un solo archivo sin adelantar sus overrides. No se usan imports Sass, nesting de selectores, nuevos !important ni shorthands.

`base/_responsive.scss` conserva completos y separados los bloques globales responsive, incluidos los overrides tardíos de Historia, Care y Special Edition. No se consolidan queries. Los bloques hover/reduced-motion intercalados conservan también su posición. Las reglas compartidas entre páginas mantienen sus listas originales de selectores; su ubicación en un parcial no limita su alcance global.

El mapa original es `src/index.css`; el orden se expresa explícitamente en main.scss. Header incluye el menú móvil. ProductInfo agrupa quantity, acordeones y atributos; shared agrupa botones, enlaces, placeholders, contenedores y encabezados. Los estilos editoriales de territorio e Historia están en our-story; Reveal y secciones de Special Edition permanecen en special-edition. No se cambian clases ni estilos inline de los módulos React.

## Tokens y breakpoints

_tokens conserva `:root` y todas sus custom properties, disponibles en runtime: estirpe #64242e, sierra #574d35, caliza #f2e8da, arcilla #944a20, horizonte #4b5b6e, dark #191716 y paper #f7f2eb; también white, line y familias serif/sans. Cormorant Garamond y Figtree siguen llegando desde el import original de Google Fonts. No se convierten tokens a variables Sass.

Se conservan min-width 1120px, max-width 1100px y los tres bloques separados de max-width 900px y 540px. Hover, pointer:fine y prefers-reduced-motion mantienen sus condiciones originales. @layer base conserva los defaults de elementos; el resto de reglas personalizadas sigue fuera de capas, después de Tailwind.

## Tailwind y Shopify

Se mantiene @tailwindcss/vite sin cambiar configuración. El import Tailwind es CSS, nunca pasa por Sass. Preflight, tokens/utilidades generadas y sus capas siguen activos. En JSX se utilizan hidden y sr-only, además de las clases propias; ambas tienen overrides personalizados. Los estilos inline siguen definiendo anchos, tamaños, imágenes y --swatch. El build final no pierde ni incorpora selectores respecto a la referencia (el minificador puede fusionar reglas equivalentes).

Retirar Tailwind exige auditar Preflight, estilos calculados de elementos y capas antes de sustituirlo; eliminar solo sus clases no prueba equivalencia. La adaptación a Shopify Prestige 11.4.1 es una fase independiente: compilar Sass fuera del tema y revisar la cascada junto al CSS nativo del tema. No se modifica Shopify ni el handoff (no existe docs/shopify-handoff).

## Mantenimiento

Añadir reglas en el parcial de su responsabilidad y emitir nuevos tramos desde main.scss donde corresponda su prioridad. No renumerar ni ordenar alfabéticamente los includes existentes. Un @use nuevo solo define módulos; un @include decide dónde salen sus reglas. No importar parciales desde componentes React ni añadir otra copia de main.scss. Conservar queries existentes y realizar cambios responsive como tareas separadas. El mapa acompaña cualquier cambio de propietario u orden.

## Validación

Referencia inicial guardada fuera del repositorio: /private/tmp/rsm-scss-before (CSS fuente, build y capturas). TypeScript y build pasaron antes de modificar. Pasaron nuevamente con la entrada SCSS y después de consolidar los parciales. Build con GITHUB_PAGES=true correcto; no se cambian base, rutas, assets, Userback ni workflows. No hay lint configurado. Las 12 pruebas de Userback y la comprobación de 34 imágenes pasan.

Comparación estructural: 2,686 nodos CSS en el mismo orden antes/después de Sass, excluidos los dos imports conservados. Los 50 cambios de serialización son espacios, rgba opaco a rgb y tres simplificaciones de calc dentro de max; no se cambian selectores, propiedades, capas, queries, keyframes ni tokens. El build minificado pasa de 62.90 a 62.78 kB por serialización/optimización; no se exige identidad textual del CSS compilado.

El recorrido funcional pasa en ambos builds: navegación hash, historial y recarga, Quick Add, acumulación y subtotal, drawer, cantidades, galerías, miniaturas, acordeones, menú móvil y Newsletter. También pasan filtros por colección, reinicio al cambiar producto y movimiento reducido. El build Pages pasó el recorrido local de nueve vistas, aliases e imágenes sin excepciones JavaScript ni 404 locales. Comparación visual completada con Chromium headless: **81 comparaciones de DOM y 518 parejas de capturas PNG idénticas byte por byte**, sin archivos pendientes ni diferencias. Se cubren las nueve vistas a 320, 375, 390, 430, 540, 541, 768, 1024 y 1440 px, viewport de 900 px de alto y escala 1. Las capturas recorren la altura completa por tramos e incluyen el final de cada página. Se esperan fuentes/imágenes y se activan los observers mediante scroll. Para comparar Care se pausa únicamente su animación infinita en el mismo instante desde el navegador; no se modifica la aplicación. El DOM normaliza solo el origen HTTP temporal. No hubo excepciones JavaScript ni 404 locales en ninguno de los recorridos.

Artefactos temporales: /private/tmp/rsm-scss-before/browser, /private/tmp/rsm-scss-after/browser y /private/tmp/rsm-scss-comparison.json. La prueba cubre Chromium local, no navegadores físicos ni un despliegue remoto. No se certifica el servicio externo real de Userback; se conservan su código y sus pruebas existentes. Los scripts y PNG son artefactos temporales fuera del repositorio, sin dependencias de runtime nuevas.
