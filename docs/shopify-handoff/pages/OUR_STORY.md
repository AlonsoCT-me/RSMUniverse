# OUR STORY

**Ruta:** story · #/nuestra-historia. **Componente:** [Story](../components/Story.md). **Fuente:** [App:1845–1891](../../../src/App.tsx#L1845).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · Story Hero | .story-hero min720 height min860/100svh; story-hero.webp cover52%; lateral shade .72/.42; h1 max460 clamp48–60/.9; content bottom12%. | CTA scroll story-origin explícito smooth; eyebrow sr-only. | image-with-text-overlay con image/mobile_image, posiciones, heading_tag, overlay; gradiente propio si controles uniformes insuficientes. | Texto/foto/crop y CTA al Origen; verificar reduced motion. |
| 2 · EditorialSplitSection — El Origen | .story-split grid minmax480/52fr +48fr, copy media, min620, Caliza; padding clamp44–72; title clamp40–54/.92 y nowrap>=1120; p max480, margin-top30, lh1.75; imagen cover54%. | id story-origin; eyebrow vacío pero span existe y margin-bottom18; reverse no activado. | image-with-text izquierda copy/derecha foto; comprobar ratios/espaciado antes de rsm-editorial-split. | No usar30/70 del documento antiguo; preservar reserva de eyebrow vacío o decidir corrección aparte. |
| 3 · TerritoryGrid OCULTO | Contiene cuatro TerritoryCard placeholders pero raíz hidden. | No entra en layout visible; hover/tap existen si se reactiva. | Excluir de primera implementación; contrato rsm-territory-grid solo condicional. | No añadir tarjetas interactivas visibles que no están en prototipo actual. |
| 4 · TerritoryEditorialBanner | Grid40fr/30fr/30fr, gap0; min clamp380–470; paisaje importado JPG cover52%, copy dark padding clamp32–52, arquitectura WebP cover50%; H2 clamp38–50/.88. | 3 hijos; sin caballo/puerta, sin interacción. Se mantiene3 columnas hasta540. | Evaluar media-grid/multiple-media-with-text; rsm-territory-editorial si no resuelve texto central y proporciones. | Verificar 3 columnas a1024/768; mobile apila paisaje→texto→arquitectura. No reconstruir4 columnas/2×2 por doc antigua. |
| 5 · EditorialSplitSection — Del Rancho a la Ciudad | Misma base52/48, copy media; variant city solo cambia object-position50%; reverse={false}; foto story-city.webp. | Mismo orden que Origen, sin alternancia actual. | image-with-text copy izquierda/foto derecha; mismo contrato reutilizado. | No invertir por título del brief; respetar código y registrar diferencia. |

## Responsive y cascada

<=1100 y <=900 banner mantiene40/30/30, cada hijo min380. <=900 splits una columna copy→media, copy min390/padding64/48, foto16/9. <=540 hero760/min680/focal61%, title clamp39–47/.9, content left/right24; selector > div:last-child mantiene bottom70 frente a clase bottom64; splits copy min360/padding68/24 y foto4/3; banner1col, visual min440, texto min390/padding58/24/H2 50. No existe2×2 activo.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/page.nuestra-historia.json (propuesta)`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
