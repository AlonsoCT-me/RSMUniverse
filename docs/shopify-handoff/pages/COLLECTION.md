# COLLECTION

**Ruta:** collection · #/coleccion. **Componente:** [Collection](../components/Collection.md). **Fuente:** [App:966–1078](../../../src/App.tsx#L966).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · Hero colección | .collection-hero height570; fondo Leather Brown WebP cover62% center; overlay rgba(16,12,9,.86)→.48→.16; copy bottom145,left max32/cálculo1360; H1 clamp58–94/.78; em #e1c6aa. | Eyebrow y descripción sr-only, no visibles. | collection-banner: image/mobile_image, image_size, overlay, content positions; collection.image frente a override section: acordar fuente. | Verificar foto exacta y copy; no renderizar texto sr-only como contenido visible. |
| 2 · Intro | .collection.shell padding48px 0 120; intro flex space-between gap30 bottom40; copy serif25/1.25 max650; contador11px. | Contador refleja visibleProducts. | main-collection con encabezado/rich-text nativo o bloque breve si no permite esa posición. | Conteo real coincide con filtrado, sin count fijo8. |
| 3 · Toolbar | .toolbar flex space-between, padding18px 0, margin-bottom36, border-block1; gap filtros28; fuentes11px/.08em; select min120. | Disponibilidad sin handler; Línea cicla all→core→special→all; select sort precio numérico real local pero todos1599. | main-collection show_filters/show_sort_by; facets/active-facets nativos; configurar filtros de tienda solo en tarea autorizada. | Validar filtros verdaderos, combinación/reset, URL/paginación/atrás; no reproducir botones falsos. |
| 4 · Product grid | .product-grid 4 columnas, gap46/18; ProductCard shared; fotos4/3 contain, título/categoría/precio y swatch+Quick Add. | 8 productos iniciales, filtro/sort useMemo; Quick Add agrega1 y abre drawer; variante opcional lleva PDP. | main-collection + product-card; product objects/media, swatches/quick-buy nativos; extensión visual acotada. | Nombres largos alinean precios/acciones; productos correctos y cantidades; sin swatch inventada. |
| 5 · Paginación | .pagination flex center gap8 margin-top80; botones42×42; actual dark/white. | 1/2/flecha sin handlers: maqueta. | pagination nativa vía collection paginate. | Con catálogo amplio probar página2, filtros y sort conservados, foco/URL correctos. |

## Responsive y cascada

<=900: hero620 y copy left/right22 bottom100; intro column; Línea queda oculta; grid2 gap42/10. <=540: hero570/focal56%, H1 52; intro21; toolbar label oculta, select100–130px/10; título card23/modelo8/precio11; Quick Add mantiene44.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/collection.json`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

Los datos comerciales se definen en [CATALOG](../CATALOG.md); no publicar precios, medidas ni materiales provisionales.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
