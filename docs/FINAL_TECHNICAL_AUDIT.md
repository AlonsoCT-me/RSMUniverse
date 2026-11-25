# Auditoría técnica — complemento de preparación Shopify

Fecha: 24 de noviembre de 2026. **Revisión local y documental, sin implementación ni handoff definitivo.** El nombre de archivo solicitado se conserva; «FINAL» no significa que Shopify, contenido o QA estén aprobados para producción.

Este archivo no existía en el checkout inicial. Se registra el complemento a partir de las arquitecturas/auditorías existentes, sin reconstruir ni atribuir resultados a un informe anterior que no está disponible. Véase [sincronización documental](DOCUMENTATION_SYNC_REPORT.md).

## Resultado

| Entregable | Evidencia / resultado |
|---|---|
| [Mapeo de componentes Prestige](PRESTIGE_COMPONENT_MAPPING.md) | 48 unidades funcionales: 11 NATIVE, 17 CONFIGURATION, 11 EXTENSION, 2 CUSTOM, 6 PROTOTYPE ONLY y 1 PENDING. |
| Equivalencias nativas verificadas | 28, contando NATIVE + CONFIGURATION. Verificadas en archivos/schemas/consumidores locales; cero pruebas nuevas de equivalencia renderizada en QA remoto. |
| Personalizaciones potenciales | 13 unidades (11 extensiones y 2 patrones custom), no 13 archivos obligatorios. Incluyen revisión del header ya existente y un hero video aún opcional. |
| Equivalencia pendiente | Territorio con dos imágenes/copy central; primero ensayo nativo. Todos los módulos conservan pendiente aceptación visual/funcional en QA. |
| [Estrategia de implementación QA](SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md) | Fase 0 de integridad/autorización + quince fases funcionales por dependencias; sin calendario ni estimaciones arbitrarias. |
| [Contenido y assets del cliente](CLIENT_CONTENT_REQUIREMENTS.md) | 8 productos de muestra; 15 referencias de galería; 38 raster en public/assets; inventario de originales, logos, favicons, fuentes, copy y placeholders. |
| Integración de lectura | [Índice](README.md) y [reporte de sincronización](DOCUMENTATION_SYNC_REPORT.md) creados porque no existían. |

## Fuentes y método

Se inspeccionaron las nueve vistas de prototipo, componentes compartidos, catálogo/tipos, rutas, formularios, SCSS y assets utilizados. Se leyeron metadatos de archivos visuales reales: no se interpretan dimensiones a partir de «8K», «desktop» o nombres de archivo.

Se consultó exclusivamente en lectura `/Users/alonsoct/Sites/shopify/rsm-shopify`: AGENTS, índice y documentación Maestrooo, RSM_CUSTOM_ARCHITECTURE, RSM_QA_WORKFLOW, contexto de diseño, integraciones, config/settings_schema.json, templates y grupos, schemas de secciones relevantes, snippets comerciales y assets CSS/JS/consumidores. La versión local es Prestige 11.4.1; hay 61 secciones Liquid, tres grupos JSON, 55 snippets y 12 theme blocks.

El inventario diferencia **archivo presente**, **capacidad estática**, **dato comunicado por responsable**, **propuesta técnica** y **pendiente de comprobación**. No se conectó a Shopify ni se consultaron versiones/roles/dominio/apps en remoto. No se ejecutó Shopify CLI, el wrapper QA ni Theme Check. Los resultados históricos de Theme Check descritos en T/docs no se reejecutaron ni se presentan como actuales.

Se registraron hashes locales previos y posteriores para verificar alcance: solo los seis Markdown de esta entrega pueden cambiar; se contrasta que fuentes/configuración/assets del prototipo y el repositorio del tema permanezcan intactos. Esta comprobación de igualdad no prueba despliegue ni aprobación remota.

## Estado real que cambia la estrategia

1. El tema no parte de cero: `sections/header.liquid` carga `assets/rsm-header.css` y usa la clase rsm-liquid-glass-dark. Header group tiene selector de idioma true y scheme-4. Preservar y revisar esa implementación, sin atribuirle un despliegue remoto no comprobado.
2. Home local del tema aún tiene 22 secciones con demostraciones; Footer contiene copy About de demo. Existen plantillas nativas de colección, producto, FAQ y contacto, pero no alternativas locales RSM de Historia/Special/Care.
3. `config/settings_data.json` está ausente y excluido. Valores de color/fonts/presets y app embeds efectivos desconocidos; los defaults del schema no son evidencia del tema activo.
4. Prestación comercial ya resuelta por Prestige: product-card, price-list, product-badges, product-gallery, product-info, variante/compra/cantidad, carrito, related-products y captación. No reescribir motores desde React.
5. El catálogo del prototipo tiene ocho precios demostrativos y validaciones parciales. No hay SKU, inventario o variantes comerciales definitivas ni ofertas aprobadas. No usar un comparativo del Design System como promoción real.
6. No hay metraje local; MediaHero image permite avanzar. La equivalencia video debe comprobar selección de fuentes, poster, pausa, reduced motion y comportamiento real antes de activarse.

## Brechas técnicas y editoriales

- **Slider de origen:** tres medios con texto lateral fijo y configuración independiente; image-with-text es estático, multiple-media-with-text no es ese slider y limita dos medios. CUSTOM potencial si se conserva el patrón.
- **Care sincronizado:** cinco estados de ilustración SVG/nav/scroll no equivalen al timeline nativo por el solo nombre. CUSTOM potencial, con opción de simplificar a nativo previa aprobación.
- **Territorio:** pendiente de ensayo nativo. Dynamic Grid no es base segura mientras falte blocks/subheading.liquid, al que _dynamic-grid-item hace referencia.
- **Precisión gráfica:** tipografía/contención/gradiente/ratios/precios/badges podrían necesitar extensiones acotadas. Core comercial y estilos globales de Prestige no se sustituyen con SCSS compilado de todo el prototipo.
- **Marca y contenido:** la frase de Historia «Llevamos la esencia de…» está incompleta; NOCTURNA no se considera naming comercial final; detalle de gamuza negra y producto tabaco requieren correspondencia confirmada.
- **Faltantes visibles:** lifestyle de ambas PDP y tres imágenes Care son placeholders; módulos hidden de Home/Historia/Special no se incorporan por inercia.
- **Peso (hallazgo anterior, ya atendido):** el fondo 8K pertenece a Featured Collection de Home y la foto Premium Caps al Hero PLP. La auditoría posterior reutiliza sus WebP/derivados; conserva maestros íntegros y retira el original importado de Territorio del bundle. Véase [optimización de assets](ASSET_OPTIMIZATION_REPORT.md).
- **Legal/operación:** contacto, políticas, consentimientos, stock/precios reales y traducciones son puertas comerciales. No se resuelven leyendo el código.

## Orden recomendado

Integridad/autorización → configuración global → Header/navegación/Footer → contenedores → reutilizables → Home → colecciones/PLP → cards/precios → PDP Core/Special → landing Special → Historia → Care/informativas → integraciones → responsive → QA funcional/visual → aprobación y preparación para producción. El [plan detallado](SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md) aporta dependencias, archivos, criterios y riesgos por fase. Datos de catálogo se preparan desde el inicio; video opcional puede llegar después.

## Bloqueos y decisiones pendientes

| Asunto | Estado | Consecuencia |
|---|---|---|
| Estado actual de QA/producción y referencia | Documentado, no comprobado remotamente | No iniciar sincronización sin autorización y conciliación. |
| Alcance de wrapper frente a instrucciones históricas | Discrepancia documental | Conciliar antes de operar; planificación actual no amplía permisos. |
| settings_data / esquemas efectivos / embeds | No verificables con copia actual | No inventar inicialización ni sobreescribir estado. |
| Bloque subheading faltante | Verificado localmente | No depender de esa ruta Dynamic Grid; investigar en tarea autorizada. |
| Paridad visual y customs | Propuestas, sin aceptación QA | Aprobar qué brechas requieren archivo rsm-* y dónde cargarlo. |
| Catálogo, políticas, derechos y copy | Parcial/demo/por confirmar | No publicar una tienda comercial con datos ficticios. |
| Favicon adaptable y CSS transversal | Requiere decidir nativo versus excepción | No añadir hook a theme.liquid como preparación. |
| Traducción/apps | Inventario documental, operación desconocida | Preservar lo existente; verificar con permiso antes de activar o enviar pruebas. |

No se modifican decisiones arquitectónicas aprobadas. Esta entrega prepara una conversación de alcance verificable y no solicita autorización para ejecutar operaciones remotas ahora. No se crea docs/shopify-handoff/ ni se altera prototipo publicado, QA o producción.

## Complemento posterior: optimización local de assets

La fase documentada arriba no modificó código. La solicitud posterior autorizó optimizar fotografías y actualizar referencias, sin cambiar diseño, lógica comercial ni Shopify. Resultado: 80 → 77 imágenes; 61,624,809 → 46,904,130 bytes totales; public 51,263,061 → 15,225,680 bytes. Dos maestros de alta resolución conservados en asset-masters; ocho conversiones nuevas WebP y tres copias redundantes retiradas fuera de public/logo.

Detalle verificable: [inventario](ASSET_INVENTORY.md), [reporte](ASSET_OPTIMIZATION_REPORT.md) y [contenido actualizado](CLIENT_CONTENT_REQUIREMENTS.md). Las validaciones nuevas de prototipo no equivalen a validación del tema QA. Las cifras y el alcance de la auditoría documental anterior conservan su contexto histórico.
