# PRODUCT SPECIAL

**Ruta:** nocturna · #/producto/<Special id> y alias nocturna→gamuza. **Componente:** [NocturnaPdp](../components/NocturnaPdp.md). **Fuente:** [App:1646–1685](../../../src/App.tsx#L1646).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · Galería/info dark | .dark-page Dark/white; .pdp--dark; mismo ProductGallery/ProductInfo; media gradient negro; swatch seleccionado ring Caliza; title/precio/specs/accordion dark. | Gamuza4 imágenes; otros Special1; cantidad y carrito comunes. Nocturna es nombre técnico heredado, no título de catálogo. | main-product con color_scheme oscuro y layout confirmado; misma compra/stock/variantes, sin motor nuevo. | Probar contraste, precio, loading/error/disabled y galería según producto; no usar fotos Core. |
| 2 · Story dark | .nocturna-story grid0.8fr/1.2fr, fondo #24211e; copy padding8vw; placeholder Special lifestyle, height700. | Conocer el concepto→special; no relacionados. | image-with-text dark con editorial aprobada y CTA landing. | Destino de vuelta correcto, placeholder sustituido solo con material autorizado. |

## Responsive y cascada

Mismos breakpoints PDP; <=900 .pdp--dark padding-top68 y nocturna-story una columna, media500px. <=540 galería y compra como Core. Preservar esquema oscuro en estados y drawer independiente.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/product.special-edition.json (propuesta)`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

Los datos comerciales se definen en [CATALOG](../CATALOG.md); no publicar precios, medidas ni materiales provisionales.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
