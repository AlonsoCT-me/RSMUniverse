# Estrategia preliminar de implementación Shopify QA

24 de noviembre de 2026. **Planificación local; no autoriza implementación, conexión ni operaciones remotas.** No es el handoff definitivo. Alcance asociado: [mapeo de componentes](PRESTIGE_COMPONENT_MAPPING.md), [contenido del cliente](CLIENT_CONTENT_REQUIREMENTS.md) y [sincronización de evidencia](DOCUMENTATION_SYNC_REPORT.md).

## Entornos y evidencia

Repositorio del tema consultado exclusivamente en lectura: `/Users/alonsoct/Sites/shopify/rsm-shopify` (T). Se contrastaron `AGENTS.md`, `docs/RSM_QA_WORKFLOW.md`, `docs/RSM_CUSTOM_ARCHITECTURE.md`, `docs/RSM_DESIGN_CONTEXT.md`, documentación Maestrooo y archivos reales.

| Dato | Valor | Qué está verificado |
|---|---|---|
| Tienda | rsmuniverse.myshopify.com | Coincide entre instrucciones, AGENTS y flujo QA local; no se consultó la cuenta. |
| Dominio | rsmuniverse.com | Coincide con RSM_DESIGN_CONTEXT; DNS, conexión y certificado no comprobados. |
| Tema | Prestige 11.4.1 | `T/config/settings_schema.json`, bloque theme_info, confirma versión de la copia. No demuestra versión remota actual. |
| QA | 187349401900, QA RSM | Documentado por responsable como unpublished/independiente en AGENTS y RSM_QA_WORKFLOW; rol actual remoto pendiente. |
| Producción | 187330724140, PROD - RSM Universe | Documentado como LIVE y protegido; nunca destino de trabajo. No se recertificó remotamente. |
| Estado local del editor | settings_data.json ausente | Ausencia comprobada. Se mantiene su exclusión en `.shopifyignore`; no fabricar defaults ni copiar estado como bootstrap. |

QA comparte catálogo, clientes, páginas, metafields, apps y otros datos de tienda con producción. Un tema unpublished no es una tienda de pruebas aislada. Formularios, pedidos, automatizaciones, asignaciones de templates y cambios de idioma requieren alcance propio y autorización.

## Estado actual según evidencia local

| Área | Confirmado en archivos | Pendiente / no verificable |
|---|---|---|
| Tokens | Schema tiene color_schemes, colores comerciales y snippets/css-variables.liquid. | No se conoce paleta efectiva QA ni asignación de schemes sin settings_data. Los defaults del schema no son configuración activa. |
| Tipografía | Dos font pickers y factores de tamaño/espaciado; font_face nativo. RSM requiere Cormorant 600 y Figtree 400/500/600. | Familias/pesos efectivos y disponibles en el editor. Prototipo carga Google Fonts; no hay binarios locales de fuentes. |
| Header | header.liquid carga rsm-header.css y lleva rsm-liquid-glass-dark. header-group: scheme-4, logo desde shop.brand.logo, menú main-menu, locale selector true, anchos 130/80. Countdown del grupo desactivado. | Apariencia, menú y brand.logo efectivos en QA; cobertura es/en y aceptación de la extensión existente. No se rehace ni se considera tema virgen. |
| Footer | footer-group contiene newsletter, links al menú footer y texto About de demostración; sección text-with-icons en grupo. | Menú legal, copy RSM y datos comerciales finales; el texto demo no se declara publicado remotamente. |
| Home | templates/index.json contiene 22 secciones, incluida slideshow, featured-collections, video y módulos editoriales/demo. | Qué composición está desplegada/visible en QA; decisiones para reducirla al alcance RSM. No borrar demo en esta fase. |
| Hero | slideshow configurado en el template local; schema admite imagen/video mobile y posiciones. | Recursos del merchant, poster real, controles y equivalencia visual exacta. Se detecta valor heredado `fill` en botón frente a opciones actuales outline/solid/link. |
| Navegación | Referencias locales a main-menu, customer-account-main-menu y footer. Selectores es/en y locales existen. | Contenido de menús y rutas reales, idiomas publicados y español predeterminado. |
| Colecciones | collection.json usa collection-banner y main-collection; filtros/ordenamiento nativos disponibles. | Colecciones reales, asignación de productos, filtros configurados y Search & Discovery instalado. |
| PDP | product.json contiene main-product + related-products; product.pre-order también existe. Galería, variantes, precio y compra nativos. | Template específico Special Edition no encontrado; catálogo, variantes, stock, precios y metafields reales desconocidos. |
| Editorial | page, page.faq y page.contact existen; secciones de storytelling disponibles. | No hay templates locales específicos RSM de Historia, Special o Care. Su ausencia local no certifica inexistencia remota. |
| Apps | Inventario documental comunicado de once apps/canales; @app en contenedores compatibles. No se hallan app blocks shopify://apps/ en templates/grupos locales. | Instalación/planes/cuentas/embeds efectivos no verificados; settings_data no está. No confundir capacidades del tema con apps activas. |
| Integridad | Falta blocks/subheading.liquid, referenciado por _dynamic-grid-item. | Determinar origen con paquete/proveedor en tarea autorizada. No usar Dynamic Grid como dependencia segura hasta aclararlo. |

Las once entradas documentadas en `T/docs/integrations.md` son Facebook & Instagram, TikTok, Judge.me, Forms, Google & YouTube, Translate & Adapt, Messaging, Agéntico, Point of Sale, Shop y Tienda online. Es un inventario comunicado, no un resultado de API actual. Proveedor/identidad de Forms y Agéntico requieren confirmación; no instalar Inbox, Search & Discovery u otra app por inferencia.

## Principios operativos

- Exclusivamente QA cuando se autorice implementar; producción permanece protegida. Sin React, Tailwind ni estado comercial paralelo en Shopify: Liquid, CSS y JavaScript nativo.
- Native First + RSM Custom Layer: primero settings y composición nativa, después extensión mínima; archivos propios con prefijo rsm-* solo por brecha demostrada. Los nombres potenciales no son una orden de crearlos.
- Conservar intacto el Core comercial y las traducciones/integraciones existentes. No interceptar compra, reemplazar variantes, duplicar galerías, redefinir custom elements o parchear prototipos.
- No incorporar una carga global en theme.liquid sin autorización específica. La extensión de header ya existente se documenta como estado local, no como autorización para extender otros módulos de Core.
- Configuración editable desde Theme Editor y contenido traducible es/en. Revisar carga/descarga/reordenamiento de secciones; no asumir que un script inicial se ejecutará correctamente tras cada reemplazo del editor.
- Conservar settings_data excluido, reconciliar templates/grupos/locales y separar código de estado de editor. Un valor default no reemplaza la configuración QA.
- No se ejecutaron Shopify CLI, wrapper rsm, pull/push/publish/dev, APIs, preflight remoto, formularios ni compras.

## Discrepancia de flujo a resolver antes de una futura sesión

`T/docs/RSM_QA_WORKFLOW.md` describe un wrapper ampliado para todo el tema, con referencia remota completa `full-theme-v1`, aprobación manual de digest, preflight, destino fijo y --nodelete. La guía aclara que --nodelete no evita sobrescrituras y que templates/grupos/config/locales pueden subirse al iniciar o guardar. No se inspecciona ni aprueba aquí un candidato privado de referencia.

Otras instrucciones históricas describen etapas sin implementación y propuestas puntuales por archivo. AGENTS conserva protecciones estrictas de Core y aprobación visual. Esta auditoría **no resuelve ese desacuerdo ampliando permisos**. Para la siguiente fase, el responsable debe conciliar el alcance operativo/documental y autorizar explícitamente destino, archivos y efectos. La solicitud actual impone planificación únicamente y prevalece sobre cualquier capacidad del wrapper.

El flujo futuro deberá reservar QA, revisar diferencias completas contra la referencia y conciliar el editor antes de una sincronización. No reutilizar una referencia antigua de dos archivos ni tratar hashes locales como prueba de estado remoto. La confirmación de roles y el bootstrap son puertas previas; nunca operaciones automáticas de esta entrega.

## Orden por dependencias

Hay una fase 0 previa y quince fases funcionales. Contenido y catálogo se trabajan en paralelo como dependencia del cliente; no es necesario esperar un video opcional para comenzar configuración nativa. No se asignan fechas ni estimaciones.

### A. Objetivos, componentes y configuración

| Fase | Objetivo y dependencias | Componentes / configuraciones necesarias | Archivos potenciales y capacidad nativa | Personalización potencial |
|---|---|---|---|---|
| 0 — Integridad y autorización | Resolver límites de flujo, referencia QA, ausencia de estado y bloque faltante antes de sincronizar. | Baseline local/QA, selección de alcance, derechos/licencia, reserva del editor. | AGENTS/flujo QA como referencia; blocks/_dynamic-grid-item; settings_data protegido. Ningún archivo se modifica ahora. | Ninguna reparación inferida; escalar integridad a proveedor si procede. |
| 1 — Design System global | Reutilizar estado existente; depende de 0 y aprobación de marca. | Color schemes, heading/text font, pesos, tamaños, moneda, color de oferta y favicon. M01/M02/M47. | config/settings_schema.json y snippets/css-variables existentes como contratos; configuración de editor. | CSS tipográfico solo si el editor no alcanza pesos/tamaños, con carga aprobada. Favicon adaptativo requiere decisión separada. |
| 2 — Header, navegación y Footer | Preservar header trabajado; depende de 1 y menús/contacto/legales. | Menús, logos, esquema, transparencias, selectores es/en, links y bloques de footer. M04–M08/M46. | sections/header/footer y grupos; assets/rsm-header.css existente; snippets/header-sidebar. | Revisar extensión actual y su compatibilidad; no crear otro header. |
| 3 — Contenedores | Resolver ancho editorial con base en sistema Prestige; depende de 1/2. | Máximo 1520, gutters y full-width de medios; decidir paridad frente a anchos nativos. M03. | Contenedores/CSS nativos; section_width, container_size y composición. | CSS acotado si es indispensable; evitar overrides globales de todos los containers. |
| 4 — Reutilizables | Establecer patrones de contenido, botones, acordeones, media y accesibilidad; depende de 1/3. | Image-with-text, overlay, rich-text, media, snippets de UI; M09/M10/M41/M42. | Sections/snippets existentes y schemas. | Definir únicamente contratos de brechas aprobadas; no crear un kit de equivalentes React. |
| 5 — Home | Reducir las 22 secciones demo a la composición RSM aprobada; depende de 2–4 y fotos/copy. | Hero image, Sin fronteras, colección destacada, Special y banner Historia. M09/M11–M14. | templates/index.json; overlay, featured-collections, image-with-text. | Gradiente/insets/índice solo si exige paridad aprobada. Video puede esperar. |
| 6 — Colecciones y PLP | Catálogo encontrable; depende de categorías/catálogo preliminar y fase 3. | Banner, filtros, sorting, grid, paginación, estados vacíos. M15/M16. | templates/collection.json; collection-banner, main-collection, facets. | Visual acotado; no motor de filtros nuevo. Search & Discovery pendiente de verificar. |
| 7 — Tarjetas, precios y badges | Unificar jerarquía y compra nativas; depende de datos de producto y fase 6. | Figtree 16/24, comparativos válidos, Estirpe, custom.badges, moneda. M17–M19. | product-card, product-quick-buy, price-list, product-badges, locales existentes. | Presentación/ahorro por contexto si falta; mantener rerender y cálculos nativos. No datos de oferta demo. |
| 8 — PDP Core y Special | Mismo motor comercial, distinta narrativa; depende de 4/7 y variantes/stock/políticas. | Galería, cantidad, variantes, compra, acordeones, recomendaciones; esquema oscuro. M20–M25. | main-product/product-info/product-gallery/variant-picker/buy-buttons; product.json y posible template alternativo. | Panel comercial solo visual; producto alternativo no exige duplicar main-product. |
| 9 — Landing Special | Presentación de colección y detalles; depende de 4/7/8 y aprobación de identidad/producto. | Hero, intro, grid Special, tres detalles. M26–M30. | Posible templates/page.rsm-special-edition.json (propuesta), secciones nativas. | Detalle de tarjetas si descripción/composición no se resuelve; bloques hidden no se reactivan por defecto. |
| 10 — Nuestra Historia | Relato auténtico, slider de origen y ciudad; depende de 4 y copy aprobado. | Story hero, origen, territorio, ciudad. M31–M35. | Posible page.rsm-our-story.json; image-with-text/overlay; ensayo de media-grid. | rsm-editorial-split si se aprueba texto fijo + slider; territorio sigue pendiente de ensayo nativo. |
| 11 — Care e informativas | Guía respaldada por producto y legales accesibles; depende de 4/8 y datos oficiales. | Hero/intro/cuidado/almacenaje/FAQ, posible experiencia sincronizada. M36–M40. | faq, rich-text, image-with-text, contact/main-page y posibles templates de página. | rsm-cap-care-steps solo si se conserva patrón interactivo exacto; ilustraciones no son contenido aprobado automáticamente. |
| 12 — Integraciones comerciales | Preservar lo instalado y evitar duplicaciones; depende de 2/7/8 y permisos. | Judge.me, captación nativa o Forms, Translate & Adapt, píxeles/canales. | @app/embeds donde soportados; snippets/product-rating y locales. | Solo integración comprobada; no scripts globales, apps nuevas ni costes sin aprobación. |
| 13 — Responsive y acceso | Verificar todas las composiciones y estados; depende de cada componente implementado. | 320/375/390/430/540/541/768/1024/1440/1920/2560, más límites nativos 699/700 y 999/1000; es/en y reduced motion. | Templates, schemas y archivos rsm concretos que se hayan aprobado. | Corregir diferencias mínimas; no trasladar breakpoints React indiscriminadamente. |
| 14 — QA funcional y visual | Aceptación integrada; depende de 5–13 y contenido fiable. | Precio/stock/variantes/carrito, errores, editor, apps, SEO, teclado, medios, rendimiento. | Theme Check futuro sobre diff/baseline, preview QA y motor nativo. | Resolver regresiones documentadas, no silenciar incidencias heredadas para aparentar aprobación. |
| 15 — Aprobación y preparación | Consolidar entrega y plan de promoción; depende de QA aceptado y pendientes resueltos. | Revisión de RSM, inventario de cambios, respaldo y recuperación, permisos separados. | Manifest concreto y conciliación de templates/grupos/estado. Sin publicación ahora. | Excepciones Core registradas si existen y fueron aprobadas; no generar handoff definitivo en esta fase. |

### B. Aceptación, riesgos e información pendiente por fase

| Fase | Criterio de aceptación futuro | Riesgo principal | Información pendiente |
|---|---|---|---|
| 0 | Scope y destinos aprobados; referencia íntegra; integridad resuelta o ruta excluida explícitamente. | Sobrescribir QA o afectar datos compartidos. | Política vigente, roles actuales, estado de editor y paquete íntegro. |
| 1 | Familias/pesos/cromática correctos, contraste y es/en; sin cargas duplicadas. | Defaults tomados como marca; carga global no autorizada. | Disponibilidad de fuentes en picker, validación de tokens funcionales. |
| 2 | Menús/links, foco, búsqueda/bolsa y selector funcionan en mobile/desktop; header existente conservado. | Regresión de Liquid Glass o menús; enlaces legales vacíos. | Menús oficiales, contactos, política de cuentas. |
| 3 | Fondos full-width, contenido legible y sin overflow; resultado aprobado a 1520 o alternativa nativa acordada. | Romper contenedores comerciales. | Nivel de fidelidad requerido y permiso de carga CSS. |
| 4 | Contenido editable, traducciones, recarga del editor, foco y reduced motion correctos. | Reescribir funcionalidades ya presentes. | Lista cerrada de brechas a implementar. |
| 5 | Home contiene solo módulos aprobados, hero image conservado, LCP y contraste comprobados. | Demo publicado, medios sin optimización o hero sin H1 accesible adecuado. | Copy/fotos y orden final; decisión sobre índice editorial. |
| 6 | Filtrado/sorting/paginación y vacío correctos; colección sin productos no rompe interfaz. | Filtros sin datos o dependencia de app inexistente. | Taxonomía, filtros necesarios y estado de Search & Discovery. |
| 7 | Regular/oferta/sin stock/precios distintos por variante; una sola suma en carrito y badges sin colisión. | Monedas/unidades incorrectas o falso descuento. | Catálogo/SKU/comparativos aprobados y alcance local/global de badges. |
| 8 | Compra nativa conserva ID de variante, cantidad, disponibilidad y errores; galería/accordion/editor es/en. | Asignar template o crear producto afectando producción. | Variantes, stock, talla/material/cierre, cuidados y políticas reales. |
| 9 | Identidad de Special y fotos consistentes, destinos válidos, sin placeholders ni módulos ocultos reactivados. | «Gamuza negra» en detalle frente a producto tabaco; nombre NOCTURNA no aprobado. | Correspondencia de fotos/modelos y copy oficial. |
| 10 | Historia confirmada; texto fijo al navegar, swipe/teclado/autoplay accesibles si aplica; ratio de ciudad preservado. | Composición territorio no resuelta; dependencia Dynamic Grid incompleta. | Texto faltante de «esencia de…», aprobación del slider y ensayo nativo de territorio. |
| 11 | Instrucciones respaldadas por fabricante; mobile/es/en/FAQ; SVG/nav no indispensables para entender contenido. | Consejos genéricos dañinos o ilustración sin validar. | Contenido técnico, fotos Care y decisión de interacción exacta. |
| 12 | Un widget por función, consentimiento y traducciones; no disparar campañas/pruebas reales inadvertidas. | QA no aísla clientes/apps/píxeles. | Proveedores, planes, formularios, IDs/embeds y autorización de pruebas. |
| 13 | Sin overflow, texto recortado o controles inaccesibles en matriz y ambos idiomas. | Tipografía fija 70/80 en columna estrecha; cambios de layout por media. | Dispositivos/navegadores disponibles y criterios de aceptación visual. |
| 14 | Evidencia por estado, datos de prueba autorizados, fallos y baseline separados. | Declarar QA listo desde lectura estática o tests del prototipo. | Pagos/envíos/mercados y autorización de transacción de prueba. |
| 15 | RSM aprueba contenido/QA y plan de recuperación; promoción como acción separada. | Confundir aprobar documentos con publicar. | Responsable de publicación, snapshot definitivo y permisos. |

## Decisiones de salida, sin ejecución

1. Aceptar o ajustar este mapeo y la fidelidad requerida frente a composición nativa.
2. Confirmar qué personalizaciones potenciales de M02/M03/M09/M10/M17–M19/M28/M33/M47 son imprescindibles; reutilizar header ya trabajado.
3. Decidir slider de origen, Care sincronizado y ensayo nativo de territorio. No crear sus archivos por anticipado.
4. Completar el núcleo de catálogo, políticas y copy; medios mobile adicionales solo si el crop existente no sirve. Video es opcional y no condiciona el inicio con fotografía.
5. Autorizar por separado una futura verificación remota del tema QA y su estado; no se pide ni se realiza desde esta entrega.

Producción permanece fuera del flujo de implementación hasta una aprobación independiente. Ninguna fase autoriza cambiar Shopify, publicar o sincronizar por el solo hecho de estar documentada.

## Inventario multimedia actualizado

Consultar [ASSET_INVENTORY.md](ASSET_INVENTORY.md) y [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md) antes de seleccionar fuentes para QA. La optimización del prototipo no cambia la secuencia, permisos ni mapeo nativo: los maestros quedan fuera de public y Shopify deberá generar sus variantes desde fuentes adecuadas. No trasladar por inercia rutas antiguas ni todos los archivos al directorio assets del tema.
