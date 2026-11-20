# DESIGN SYSTEM

**Ruta:** system · #/design-system. **Componente:** [DesignSystem](../components/DesignSystem.md). **Fuente:** [App:1893–2021](../../../src/App.tsx#L1893).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · Hero interno | .system-hero.shell; H1 serif clamp64–118/.8; párrafo max650. | Sin compra. | Documentación interna. | No confundir con configuración real de Prestige. |
| 2 · Fundamentos Color | Seis tokens en token-grid; incluye dark, no paper; fondos inline. | Muestra visual, no modifica variables. | Documentación interna. | Valores coinciden con :root para los seis expuestos. |
| 3 · Tipografía | type-specimen con display/body. | Texto dice600/400/500/600; no certifica peso de todos los selectores. | Documentación interna. | Contrastar con CSS real. |
| 4 · Componentes | component-board light/dark: botones, outline, TextLink, swatches y acordeones. | Swatches demo no son variantes de catálogo. | Documentación interna. | No convertir demos en estado comercial. |
| 5 · Factibilidad | feasibility; declaraciones sobre secciones implementables. | Opinión del prototipo; no prueba de código Shopify. | Usar PRESTIGE_AUDIT y mapeo confirmado. | Registrar discrepancias de bento/alcance histórico. |

## Responsive y cascada

<=900 token-grid3, component-board1, feasibility2; <=540 título56, tokens2, feasibility1, board padding35/24.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `No migrar a storefront sin nueva decisión`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
