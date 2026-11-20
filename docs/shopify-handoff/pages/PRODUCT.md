# PRODUCT

**Ruta:** caliza · #/producto/<Core id> y alias caliza→rsm-super-cajeta. **Componente:** [CorePdp](../components/CorePdp.md). **Fuente:** [App:1347–1407](../../../src/App.tsx#L1347).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1a · Galería ProductGallery | .pdp grid1.5/.72 con mininfo340 gap48 padding48/120; gallery flex column gap14; stage4/3 contain/center light; thumbnails auto-fit min84 gap10. | Prev/next loop y contador/miniaturas si images.length>1. Super Cajeta5 fotos; Blue/Militar/Wine1. | main-product + product-gallery: desktop_media_layout, mobile_controls, container_size y product_info_size; nativo conserva zoom/video si catálogo los requiere. | Orden imágenes/alt, miniatura actual aria-pressed, loops y reset al cambiar producto; no distorsión. |
| 1b · ProductInfo en paralelo | Sticky top24, padding18/18/40; breadcrumbs; label; H1 clamp34–50/.96; precio20 con nota demostrativa; color; specs; buy row; disponibilidad; acordeones. | Quantity mínimo1, resetea ID; Add callback real local con producto activo; variantes opcionales no funcionales; stock no modelado. | product-info title/price/variant_picker/quantity_selector/buy_buttons/accordion; metafields confirmados; product form nativo. | Precio y variante vendible correctos, error/agotado/carga; no vender valores Por confirmar. |
| 2 · Story producto | .pdp-story grid1.3/1 min640, Caliza; placeholder lifestyle Sierra; copy padding8vw; título clamp44–70/.9. | Sin compra ni navegación en bloque. | image-with-text con imagen editorial autorizada. | Sustituir placeholder sin inventar fotografía ni composición/materiales. |
| 3 · Relacionados | .related.shell padding120; heading compartido; grid3 columnas desktop; ProductCard shared. | Core excluye actual y slice0,3; Ver todo→collection; Quick Add compartido. | related-products nativo o colección manual si se exige orden exacto; no imponer algoritmo React a recomendaciones automáticas. | Nunca muestra actual; seleccionar producto correcto; QA de grid tablet tres columnas y mobile2. |

## Responsive y cascada

<=900: pdp una columna width100%, padding-top0 gap0; info static padding45/22/80; media stage4/3 sigue; relacionados3 por especificidad. <=540: título clamp32–42; precio block y nota debajo; specs102/1fr; buy-row94/1fr; thumbnails flex overflow-x con base80; relacionados2.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/product.json`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

Los datos comerciales se definen en [CATALOG](../CATALOG.md); no publicar precios, medidas ni materiales provisionales.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
