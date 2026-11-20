# HOME

**Ruta:** home · raíz / #/. **Componente:** [Home](../components/Home.md). **Fuente:** [App:785–964](../../../src/App.tsx#L785).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · Hero | .home-hero: min(860px,100svh), min660; home-hero.webp cover center; shade horizontal .82/.35/.06; content left clamp(32px,8vw,120px), bottom30%; H1 clamp62–112, .78, -.045em; br explícito; index01/05. | CTA Explorar→collection; no slider. Inline shade width800px. | image-with-text-overlay: image, mobile_image, image_size, text positions, heading/button blocks. Gradiente direccional y medidas exactas requieren CSS acotado. | Confirmar texto en dos líneas, foto/crop, overlay sin tapar producto; CTA colección y header overlay. |
| 2 · Split heredado OCULTO | .hidden.borderless; imagen JPEG, anchos inline780/800; grid1.55/.8 min650. | display:none !important; no ocupa espacio ni entra en aceptación visual. | No configurar sección adicional. | No duplicar Sin fronteras. |
| 3 · Sin fronteras visible | .borderless-fullwidth --experimental; data-variant experimental; min-height min(780px,82vw); background inline home-sin-fronteras-2.jpeg reemplaza WebP; cover center; copy padding-left min(58%,790px), H2 inline60px. | CTA Conoce el universo RSM→collection; TextLink a story está comentado. | image-with-text-overlay: image/posición/texto/CTA; conservar destino actual y registrar decisión si se desea cambiar. | Comparar posición copy derecha/abajo en móvil; H2 sigue60 por inline, no52 CSS; sin desbordar. |
| 4 · Colección Tierra RSM | Banner padding96/76, gradient Caliza + home-collection-bg.webp cover; panel padding28 rgba(.88); heading max680, title clamp44–76/.88. Body padding64/124 Caliza; 4 Core ProductCard. | TextLink y botón duplican Ver colección completa, ambos visibles; cards Quick Add compartidas. | featured-collections con collection Core; banner editorial separado si native section-header no soporta imagen; evitar duplicar grid. | Mismo orden Blue/Militar/Super Cajeta/Wine; card fondo/padding preservados; CTA/Quick Add sin navegación accidental. |
| 5 · Special split | .special-split grid1.15fr/1fr min700; JPEG imagen cover58% center; copy padding8vw dark; H2 inline50px, width100%; CTA width123 pero min-width240 prevalece. | Descubrir→special; imagen pasa después del copy <=900. | image-with-text con image_position, content_width, color_scheme, heading/richtext/button; medidas exactas pendientes de prueba. | Verificar orden móvil copy→imagen y título50px; CTA240 mínimo sin overflow. |
| 6 · Historia | .history-banner min700; home-history-banner.webp cover52% center; shade .7→.04; content padding400px 99px 100px; inline bottom100; H2 inline clamp39–60/.9 max460 margin18/30. | Texto Conoce nuestra historia navega actualmente a collection, no Story; inconsistencia registrada. | image-with-text-overlay, enlace editable. No corregir destino sin decisión de producto. | Registrar destino esperado antes de Shopify; preservar crop, margen y heading inline. |

## Responsive y cascada

<=900: hero800/min720 focal68%, content22/bottom55, heading clamp53–72; split apila, imagen Special order2; Sin fronteras min720/focal43%, copy abajo padding70/0; grid2; banner72/56 y body52/84. <=540: hero760/focal72%, H1 52; Sin fronteras min620/focal42%, H2 inline60; body cards padding6/6/12; Special imagen min360; Historia min620/focal55%, padding-top250 pero inline bottom100 permanece.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/index.json`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

Los datos comerciales se definen en [CATALOG](../CATALOG.md); no publicar precios, medidas ni materiales provisionales.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
