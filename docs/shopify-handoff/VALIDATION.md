# Validación y protocolo de aceptación

## Alcance de la revisión actual

Análisis estático del prototipo y copia local Prestige, no validación remota del tema. En esta tarea no se modificó React/CSS/assets/catálogo/rutas/configuración/workflows/dependencias. No se ejecutó build porque generaría dist y no aporta validación al cambio documental. No se ejecutaron pruebas ni compras Shopify, Theme Check, publicación ni sincronización. Las validaciones de navegador de la tarea anterior de Quick Add no se presentan como QA nuevo de Shopify ni de este handoff.

Las referencias CSS son declaraciones reales, no estilos computados. La revisión registró diferencias de prioridad/inline/especificidad; donde se requiere un resultado renderizado se marca pendiente. Las fuentes públicas del prototipo/GitHub no fueron accesibles por la herramienta de investigación; esto no impidió la auditoría del código local.

## Comprobaciones documentales ejecutadas

Resultado 2026-11-19:

- 61 Markdown: 15 documentos principales, 37 fichas de componente y 9 fichas de página; cobertura comprobada contra las funciones/array/rutas actuales.
- 2977 enlaces locales y anchors verificados: destino existente, anchors Markdown y líneas fuente dentro de rango. Cero enlaces locales rotos. Otros 6 enlaces externos identificados; no se certifica disponibilidad de todas esas URLs.
- 34 imágenes físicas presentes en ASSETS; dimensiones reales y rutas verificadas. El script existente verify-images comprobó las 34 firmas y ausencia de punteros Git LFS, sin modificar archivos.
- 681 bloques de reglas CSS extraídos con selector, contexto, declaraciones y línea, y 19 schemas de sección Prestige inspeccionados.
- 67 archivos fuente/configuración/assets del prototipo conservaron exactamente su SHA-256 respecto al inicio. Git solo muestra documentación nueva dentro de docs/shopify-handoff; sin cambios al tema externo por esta tarea.
- No se detectaron documentos con contenido idéntico; fichas compartidas son canónicas y páginas enlazan a ellas. git diff --check sin incidencias (los documentos nuevos también se revisaron por separado).
- No se generaron Liquid/CSS/JS de Shopify, commits, pushes ni merges. Limitaciones de QA y acceso público descritas arriba.

## Protocolo futuro de fidelidad (por cada sección)

1. Fijar revisión React y tema, idioma, catálogo, imágenes, estado inicial, zoom 100%, viewport y fuentes cargadas. Comparar región de página, no una imagen de una versión no identificada.
2. Revisar source CSS + inline + cascada para toda diferencia. Comparar ancho/gutters, columnas y gaps; altura/min-height/aspect-ratio; crop/focal point; familia/peso/tamaño/line-height/tracking; color/overlay/borde; orden de contenido y espacio entre módulos. No inventar tolerancia numérica de aprobación.
3. Capturar 1440,1024,768,430,390,375px con contenido idéntico, full-page y recortes por sección. Para Care probar scroll en posiciones equivalentes y sticky. Para Story contrastar tres columnas tablet y apilado móvil, además de la decisión pendiente del gap.
4. Revisar estados default/hover/focus-visible/active/disabled/loading/error/empty, segunda imagen y nombres de2+líneas; teclado, touch, movimiento reducido y zoom. Verificar alt y nombre de controles en idioma activo.
5. Registrar esperado/fuente, observado/captura, diferencia, decisión y resultado. No declarar pixel-perfect solo porque pasa build. Toda desviación aprobada queda registrada con responsable.

## Flujo comercial futuro

- Home/PLP/relacionados: media/título abren producto; Quick Buy no navega accidentalmente. Probar producto simple disponible, varias opciones, opción incompleta, agotado y selling plan si existe.
- PDP: selección válida cambia precio/media/URL/disponibilidad según nativo; cantidad respeta reglas/inventario, errores visibles; volver/recargar mantiene URL coherente. No elegir una variante arbitraria por replicar la swatch estática React.
- Carrito: líneas por variante correcta, cantidad, imagen, subtotal y contador del servidor; error de stock/red no incrementa contador. Drawer se abre según on_success/cartType; loading finaliza y no permite duplicado accidental; foco/Escape/retorno funcionan.
- Filtros/sort/paginación: datos reales, reset, enlaces directos y navegación atrás conservan estado; resultados/contador correctos. Los controles falsos React no son criterio de aceptación comercial.
- Newsletter: validar estados nativos y consentimiento; cualquier envío real requiere alcance autorizado, no se envían datos por esta documentación.
- Editor: agregar/quitar/reordenar sección, recargar, múltiples instancias; listeners/observers limpios; settings/blocks editables, texto e imágenes no hardcodeados.
- es/en: cadenas traducidas, pluralización, labels, precios/localización y URLs; no claves sin resolver, layout roto por longitud ni idioma forzado. Respetar apps/traducción existentes.
- SEO/operación: no copiar noindex de prototipo a producción sin decisión; mantener canonical/hreflang nativos. Nunca probar escribiendo a tema de producción protegido.

## Comprobaciones técnicas cuando se implemente

En prototipo, los checks existentes son verify-images, tsc --noEmit y build Pages (ver ARCHITECTURE); no ejecutarlos como sustituto de QA Shopify. En tema, comparar Theme Check con baseline, sin autocorrección masiva; validar schema/JSON, consola/network, teclado/lector, Safari móvil y rendimiento/LCP/CLS de imágenes/fuentes. Determinar budgets reales a partir de baseline, no inventar métricas de éxito.
