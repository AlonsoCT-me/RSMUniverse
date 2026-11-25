# Reporte de sincronización documental

24 de noviembre de 2026. Complemento local de auditoría/preparación Shopify. Entrega limitada a seis Markdown dentro de docs; sin cambios de aplicación, assets, configuraciones, tema Shopify o servicios remotos.

## Documentos integrados

| Documento | Acción |
|---|---|
| [PRESTIGE_COMPONENT_MAPPING.md](PRESTIGE_COMPONENT_MAPPING.md) | Nuevo: 48 unidades y schemas/consumidores verificados localmente. |
| [SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md](SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md) | Nuevo: estado observado/documentado, fases y límites operativos. |
| [CLIENT_CONTENT_REQUIREMENTS.md](CLIENT_CONTENT_REQUIREMENTS.md) | Nuevo: matrices, dimensiones reales y checklist por responsable/prioridad. |
| [README.md](README.md) | Solicitado para actualizar, pero ausente: se crea índice con enlaces relativos. |
| [FINAL_TECHNICAL_AUDIT.md](FINAL_TECHNICAL_AUDIT.md) | Solicitado para ampliar, pero ausente: se crea complemento con límites explícitos. |
| Este reporte | Solicitado para actualizar, pero ausente: se crea el registro de método/discrepancias. |

No se fabrica una auditoría anterior ni se denomina «definitivo» a este paquete por el nombre FINAL_TECHNICAL_AUDIT. Las arquitecturas existentes conservan sus resultados históricos; el tema local no se modifica para hacerlos coincidir.

## Discrepancias registradas

T = `/Users/alonsoct/Sites/shopify/rsm-shopify`. «Resolver» en esta tabla significa próximo paso, no una acción ejecutada.

| ID | Fuentes contrastadas | Hecho actual / diferencia | Tratamiento de esta entrega |
|---|---|---|---|
| D01 | Solicitud ↔ docs del prototipo | README, FINAL_TECHNICAL_AUDIT y DOCUMENTATION_SYNC_REPORT no existían. | Creados sin inventar una entrega previa. |
| D02 | Guías de T del 12/nov ↔ header actual | PRESTIGE_CUSTOMIZATION/INTEGRATIONS/OPEN_QUESTIONS describen un selector apagado y/o ausencia de custom; header-group actual guarda show_locale_selector=true, scheme-4 y header carga rsm-header.css. | Actualizado el diagnóstico en nuevos documentos; no corregir archivos de T en esta fase. No se presupone despliegue. |
| D03 | OPEN_QUESTIONS ↔ grupos actuales | La mención histórica schema-2/schema-3 no coincide con scheme-3/scheme-4 actuales del header-group. | Ya no se describe esa cadena histórica como defecto actual. IDs/resolución de esquemas siguen desconocidos sin settings_data. |
| D04 | AGENTS / arquitectura histórica ↔ RSM_QA_WORKFLOW | Unas referencias mantienen preparación sin implementación; el flujo QA documenta wrapper ampliado al tema completo y permite un alcance mayor dentro de autorización operativa. | No asumir que documentación concede permiso para actuar. Conservar Native First, protección Core y alcance de usuario: solo planificación. Conciliar antes de implementar. |
| D05 | Documentación histórica de exclusiones ↔ .shopifyignore actual | La advertencia de nueve patrones de directorio ambiguos ya no describe el archivo actual: se observan expresiones ancladas y settings_data excluido. | Registrar que no es defecto actual; no cambiar exclusiones ni ejecutar CLI para probarlas. |
| D06 | RSM_CUSTOM_ARCHITECTURE / Theme Check previo ↔ disco | Se describe baseline histórico con incidencias; subheading sigue ausente y la capa Header ahora existe. | Confirmar solo lo observado en archivos. No repetir conteos históricos de errores como un Theme Check ejecutado hoy. |
| D07 | Prototipo ↔ Home/Footer locales Prestige | Prototipo tiene composición RSM; index del tema mantiene 22 secciones demo y Footer texto About. | Migración por configuración futura, no equivalencia visual ya implementada. No borrar ni normalizar demo ahora. |
| D08 | Prototipo hero H1 ↔ header Prestige | Header nativo produce H1 en Home; un H1 dentro del hero no se traslada automáticamente. | Evaluar jerarquía completa antes de elegir heading_tag; no declarar ausencia de H1. |
| D09 | Docs React/SCSS históricos ↔ último código | Se conserva ProductPrice numérico; H1 80/acento 70, H2 60 y H3 de se-detail__copy 70 como excepción local. Auditorías previas citan tamaños/escenarios de su fecha. | Nuevos documentos usan código actual; no invalidar evidencia histórica ni convertirla en prueba reciente. |
| D10 | SCSS_ARCHITECTURE ↔ política Shopify | Se menciona compilar Sass fuera del tema; Shopify requiere CSS nativo acotado y preservar cascada/Core. | SCSS sirve como referencia del prototipo; no copiar todo el CSS compilado ni Tailwind a Prestige. No se altera arquitectura aprobada. |
| D11 | productos/fotos ↔ narrativa Special | Principal Gamuza es tabaco/dorado; detalles y alt describen gamuza negra; NOCTURNA aparece en copy conceptual. | Confirmar correspondencia/naming; no generar variante o cambiar colores/material por inferencia. |
| D12 | Historia actual ↔ texto editorial completo | «Llevamos la esencia de  —su fuerza…» carece del sustantivo. | Requerimiento de copy del cliente; no inventar historia. |
| D13 | Modelo demo ↔ comercio real | Ocho precios mockData=1599; no SKU/inventario/variantes finales/comparativos comerciales. Promociones 1279/1599 solo en Design System. | No importar datos demo como catálogo definitivo ni afirmar que un producto está en oferta. |
| D14 | Prototipo funcional ↔ backend real | Newsletter solo cambia estado; carrito en memoria; checkout/búsqueda/cuenta/legales no completan operación real. | Reutilizar capacidades nativas y configurar contenido; las pruebas de UI no certifican una tienda transaccional. |
| D15 | Props genéricos ↔ schemas reales | split ratio/tablet/slider fijo y MediaHero single-source no se resuelven por nombre de sección similar. multiple-media tiene máximo 2 y no es ese slider; slideshow renderiza dos ramas de video. | Brechas y pendientes explícitos, primero prueba nativa. No asumir paridad de todas las combinaciones. |
| D16 | Recursos disponibles ↔ aprobación final | Hay fotos/logos/favicons y fuentes externas; no evidencia general de aprobación comercial/derechos. Hay Care/lifestyle placeholders, originales pesados y cero videos. | Clasificación por estado, sin pedir duplicados ni bloquear inicio por video opcional. |
| D17 | Favicon adaptable React ↔ picker Prestige | El prototipo usa SVG temático + respaldos; tema configura un favicon raster nativo. | No trasladar cambios de head/hook global sin una decisión específica. |
| D18 | Inventario de apps ↔ archivos locales | Once entradas comunicadas, no verificadas por API; sin shopify://apps/ en templates/grupos; embeds desconocidos. | No concluir que estén desinstaladas/desactivadas ni instalarlas por defecto. |
| D19 | Evidencia responsive anterior ↔ esta tarea | Docs incluyen 518 parejas/81 comparaciones de un alcance anterior y evidencias de modificaciones posteriores. | No declarar ese resultado como reejecutado en esta auditoría ni como equivalencia del tema QA. |

## Verificación documental

- Recuento del mapeo derivado de sus IDs únicos: 48; NATIVE 11, CONFIGURATION 17, EXTENSION 11, CUSTOM 2, PROTOTYPE ONLY 6, PENDING 1.
- Equivalencias nativas verificadas en código: 28. Personalizaciones potenciales: 13; incluye el header existente, no son trece altas de código obligatorias. Un caso de composición sigue PENDING y todos requieren aceptación QA futura.
- Referencias reales de Prestige del mapeo comprobadas contra archivos del repositorio local; IDs de settings/blocks contrastados con schemas y consumidores relevantes. No se declara haber probado el render remoto.
- Dimensiones/formatos de 52 raster/ICO de public y src/imports inspeccionados; cinco SVG de logo/favicon inventariados por dimensiones/viewBox. 23 capturas bajo docs/mobile-responsive-evidence son evidencia, no contenido comercial.
- Catálogo examinado sin mutación: ocho productos, cuatro Core y cuatro Special, quince referencias de galería. No confundir ausencia de datos en prototipo con ausencia de catálogo remoto.
- 35 enlaces relativos de los seis documentos, tablas y recuentos revisados. No se generan referencias a archivos rsm-* como si ya existieran.
- Hashes previos/posteriores: 432 archivos existentes del repositorio Shopify y 179 archivos existentes del prototipo comprobados sin cambios; únicamente se crean los seis Markdown de este paquete. Los manifiestos quedan temporalmente fuera del repositorio en `/private/tmp/rsm-shopify-audit/`, no contienen valores de secretos.

No se ejecutan builds ni suites de aplicación para simular validación de una entrega que solo cambia documentos. Tampoco se ejecutan CLI, API, Theme Check, servidor del tema o telemetría remota del toolkit. La skill Shopify se consulta como guía de arquitectura; las fuentes de verdad son los archivos locales y las restricciones del usuario.

## Próximo estado esperado

Revisión de RSM sobre mapeo, fidelidad y contenido; conciliación de instrucciones operativas; autorización separada si se solicita luego inspeccionar/configurar QA. No hay fechas arbitrarias ni despliegue preparado como efecto secundario. No se crea docs/shopify-handoff/ ni se producen cambios en tienda, temas, datos globales, GitHub o el prototipo publicado.

## Sincronización posterior por optimización de assets

La descripción de «solo seis Markdown» y «sin builds» corresponde a la entrega preliminar anterior. La nueva solicitud autoriza una auditoría y optimización local de recursos; esta fase sí actualiza rutas en TSX/SCSS, valida builds y conserva los maestros fuera de public. No amplía permisos sobre Shopify, producción o despliegue.

- Nuevos documentos: [ASSET_INVENTORY.md](ASSET_INVENTORY.md), [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md) y [datos completos](asset-inventory.json).
- Actualizados README, FINAL_TECHNICAL_AUDIT, CLIENT_CONTENT_REQUIREMENTS, EDITORIAL_SPLIT_SECTION y las referencias de logo en RSM_DESIGN_IMPLEMENTATION_SPEC. Los nombres originales eliminados solo se mantienen como trazabilidad explícita en los registros de migración/backup y evidencia histórica.
- Corrección de atribución: el PNG 8K era fondo de Featured Collection de Home; Premium Caps es el Hero de PLP. Los archivos reales y la carga por página lo confirmaron.
- public/logo, favicon e index.html conservan exactamente el estado local previo a esta tarea; las copias duplicadas de logo en public/assets se redirigen a sus canónicos existentes de public/logo.
- Conservadas las decisiones comerciales, composición, textos y datos de producto. El repositorio Shopify sigue sin modificaciones ni operaciones remotas. No se crea handoff ni se realizan commits/push.

Edición paralela preservada: el usuario quitó el punto de «Sin fronteras» en Home y reformateó ese archivo durante esta tarea. Se distingue de las sustituciones de assets; TypeScript y ambos builds se repitieron y Home se revalidó a 320/768/1440 en ambas bases.

La misma edición paralela de puntuación se conservó en docs/mobile-responsive-evidence/measurements.json; no fue una optimización ni una nueva medición de imágenes. Se comprobó que el resto de sus valores JSON permanece igual.
