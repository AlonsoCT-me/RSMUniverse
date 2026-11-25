# Inventario de contenido y assets pendientes de RSM

24 de noviembre de 2026. Revisión del repositorio del prototipo y evidencia documental local del tema; **no certifica aprobación comercial ni disponibilidad en Shopify remoto**. No se solicita reenviar archivos ya adecuados: cuando un recurso existe, la tarea del cliente es validar su uso/correspondencia, y la preparación técnica corresponde al equipo.

T designa el repositorio Shopify consultado solo en lectura: `/Users/alonsoct/Sites/shopify/rsm-shopify`.

Relaciones: [mapeo Prestige](PRESTIGE_COMPONENT_MAPPING.md), [estrategia QA](SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md), [auditoría técnica](FINAL_TECHNICAL_AUDIT.md).

## Estados y prioridades

- **AVAILABLE:** archivo/contenido presente y legible localmente. No significa definitivo.
- **CONFIRMED:** existe evidencia específica de confirmación, citada. No se extiende esa aprobación al resto del sitio.
- **PLACEHOLDER:** espacio o texto provisional identificado.
- **DEMO:** utilizado solo para demostración, sin uso comercial autorizado.
- **PENDING:** falta la información o no hay archivo asignado.
- **NEEDS CONFIRMATION:** disponible sin aprobación verificable de contenido/uso.
- **NEEDS OPTIMIZATION:** requiere preparación técnica; no implica pedir una fotografía nueva.

Un recurso puede tener más de un estado en ejes distintos, por ejemplo AVAILABLE + NEEDS CONFIRMATION. Prioridades: **P0** define el inicio comercial/modelado y configuración; **P1** necesario antes de publicar la página afectada; **P2** opcional, posterior o condicionado a una decisión. Los responsables indicados son propuestos.

## Qué ya está disponible

- 8 productos de muestra (4 Core y 4 Special Edition), con 15 archivos de galería referenciados: una imagen principal por cada modelo, cuatro vistas de Gamuza y cinco de Super Cajeta. No equivale a 15 imágenes de variantes comerciales.
- 35 fotografías/fondos/editoriales en public/assets, predominantemente WebP. Los logos de Header/Footer se consolidan en public/logo sin alterar sus bytes. No quedan imports raster en src/imports: el duplicado exacto se retiró y el maestro de Territorio se preserva en asset-masters junto al maestro de fondo de Home.
- 11 raster/ICO en public/logo, además de cinco SVG (dos originales y tres favicons). Los logos oficiales vectoriales existen: no pedir vectorización ni redibujo. public/favicon.png es un archivo legado sin referencia actual en index.html.
- Favicon SVG adaptable negro/claro, blanco/oscuro, respaldos PNG/ICO y Apple Touch Icon; no se necesitan nuevas propuestas gráficas para suplir esos archivos.
- Iconos SVG de interfaz en Icon.tsx e ilustraciones SVG procedurales de Care. Son recursos implementados, pero la aprobación artística/técnica del cuidado sigue pendiente.
- Cormorant Garamond 600 normal/itálica y Figtree 400/500/600 se solicitan a Google Fonts desde src/index.css; no hay archivos woff/woff2/ttf/otf locales. La asignación de familias/pesos está confirmada documentalmente por `T/docs/RSM_DESIGN_CONTEXT.md` (decisión de 11 de noviembre); la carga efectiva futura de Shopify debe verificarse en sus font pickers antes de solicitar binarios al cliente.
- No hay archivos de video de Hero/editoriales ni posters designados para video. Las fotos existentes pueden servir de fallback; no se debe solicitar otro poster hasta elegir un video.

## Matriz de recursos visuales

Las dimensiones exactas están en el anexo de archivos; las relaciones siguientes son recomendaciones derivadas de los contenedores reales, no nuevas especificaciones aprobadas. D = desktop, M = mobile. Para CSS cover, un tamaño de origen no garantiza que el encuadre sea correcto. Preferir el image_picker/CDN responsive nativo de Shopify; JPEG/WebP para fotografía y SVG/PNG para marca/transparencia. No fijar arbitrariamente un peso universal ni pedir imágenes 8K.

| ID | Página / sección | Componente | Recurso actual / requerido | Formato y relación recomendados | Desktop / mobile | Estado | Prioridad | Responsable propuesto | Impacto / observaciones |
|---|---|---|---|---|---|---|---|---|---|
| V01 | Home / Hero | MediaHero | public/assets/home-hero.webp, 1672×941 | Fotografía optimizada, cover; conservar foco de producto. El contenedor cambia de proporción según viewport. | D disponible; M reutiliza misma foto con posición 72%, no falta obligatoriamente otra. | AVAILABLE; NEEDS CONFIRMATION | P0 confirmar uso; P1 aprobación de crop | RSM marca + frontend | Permite iniciar hero image. Aprobar crop estrecho; no sustituir por video sin decisión. |
| V02 | Home / Sin fronteras | Home | home-sin-fronteras-city.webp, 1600×554 | Panorámica, cover según bloque | D disponible; M reutiliza/crop, validar. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca | No pedir otra panorámica si el recorte actual se aprueba. Confirmar relación auténtica con la marca. |
| V03 | Home / Colección destacada | Home + ProductCard | home-collection-bg.webp, 3200×1800; maestro 7680×4320 preservado en asset-masters | Banner panorámico WebP existente, sin recomprimir; productos del catálogo | D/M mismo recurso; crop por confirmar. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM valida aplicación | Se retiró el PNG 8K del runtime; no pedir otro original. |
| V04 | Home / Special split | Home | rsm-special-edition-cap.webp, 1600×900 | Foto cover según columna; conservar emblema | D disponible; M mismo recurso adecuado sujeto a crop. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca | Confirmar que representa la colección mostrada. |
| V05 | Home / Historia | Home | home-history-banner.webp, 1961×802 | Panorámica cover | D/M disponible vía misma foto. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca | Solo validar copy/foco; no pedir archivo duplicado. |
| V06 | PLP / Hero | Collection | collection-hero-caps.webp, 1708×921 (antes Premium Caps in Warm Sunlight.png) | WebP q88, dimensiones conservadas, cover | D disponible; M crop desde la misma foto. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM valida | Optimización completada; esta foto pertenece al Hero PLP, no al fondo Featured de Home. |
| V07 | Catálogo / 8 principales | ProductCard / ProductGallery | 8 imágenes principales en products.ts; ver tabla por SKU/modelo | Conservar original; imagen responsive que contenga todo el producto. El card usa 4:3 y object-fit contain; NO recortar fuente a 4:3 por obligación. | D/M disponibles; no hace falta archivo distinto por dispositivo. | AVAILABLE; NEEDS CONFIRMATION | P0 validar modelos | RSM producto | Están listas para mapear provisionalmente, sin certificar fotografía comercial final. |
| V08 | PDP Gamuza / Super Cajeta | ProductGallery | 4 y 5 vistas ya referenciadas, respectivamente | Galería con proporciones originales y mismo tratamiento | D/M disponibles | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM producto | Confirmar ángulos/orden/alt. No solicitar esas vistas de nuevo. |
| V09 | Otras PDP / variantes futuras | ProductGallery | Seis modelos con una sola imagen; no hay variantes comerciales declaradas | Vistas adicionales útiles si RSM las requiere; fotos por variante solo para variantes reales distintas | D/M reutilizable | PENDING condicional | P2, o P1 si variante no se puede identificar | RSM producto/fotografía | No imponer número de vistas ni inventar variaciones por swatch. La imagen principal permite iniciar. |
| V10 | Core PDP / Lifestyle | CorePdp | ImagePlaceholder «LIFESTYLE IMAGE» | Foto editorial adaptable a pareja imagen/texto; mantener original y evaluar crop | D sin imagen asignada; M misma o alternativa si recorte falla. | PLACEHOLDER | P1 página; P2 si módulo se retira | RSM marca | Seleccionar primero entre editorial disponible; producir foto nueva solo si no hay una adecuada. |
| V11 | Special PDP / Lifestyle | NocturnaPdp | ImagePlaceholder «SPECIAL EDITION LIFESTYLE» | Igual criterio de pareja editorial | D/M sin recurso asignado | PLACEHOLDER | P1 página; P2 si se retira | RSM marca | No publicar bloque gris ni atribuir foto de otro modelo. |
| V12 | Special landing / Hero | SpecialEditionHero | rsm-special-edition-cap.webp, 1600×900 | Cover con emblema visible, reutilizable | D disponible; M crop por aprobar. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca | Comparte foto de Home: reutilización no es falta de asset. |
| V13 | Special / Emblema, materiales, ajuste | EditorialImageText ×3 | special-edition-suede-emblem.webp; special-edition-suede-material.webp; special-edition-suede-finish.webp, todas 1024×1536 | WebP q92; fuentes verticales 2:3; componente 4:5 cover | D/M disponibles con el mismo crop. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM producto | Optimización completada. Se mantiene pendiente aclarar negro frente al producto tabaco; no se inventa una variante. |
| V14 | Historia / Hero | Story | story-hero.webp, 1961×802 | Panorámica cover | D/M disponible por crop | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca | Validar foto auténtica y orden editorial. |
| V15 | Historia / Origen slider | EditorialSplitSection | story-origin.webp; story-origin-appaloosa.webp; story-origin-courtyard.webp | Panorámicas WebP; tamaños originales 1835×857 y 1672×941 | D/M disponibles, sin set mobile nuevo. | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca/fotografía | Conversión q90/q88 completada; confirmar derechos, relación con rancho e intención de autoplay. |
| V16 | Historia / Territorio | TerritoryEditorialBanner | public/assets/home-sin-fronteras.webp, 3200×2387; story-territory-architecture.webp, 1201×1309 | WebP existente sin recomprimir; maestro 7680×5728 en asset-masters/story-territory-landscape-7680x5728.jpg | D/M disponibles | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM valida | El JPG de 6.92 MB ya no se empaqueta en Vite; maestro preservado íntegro. |
| V17 | Historia / Ciudad | EditorialSplitSection | story-city.webp, 1972×798 | Panorámica cover en columna 75% D | D/M disponible | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca | Preservar posición/25–75; mobile text-first. |
| V18 | Historia / TerritoryGrid desactivado | TerritoryGrid | 4 placeholders ocultos; existen story-territory-horse y arquitectura como candidatos | No definir producción fotográfica hasta decidir si se reactiva | D/M no asignados al módulo oculto | PLACEHOLDER; PENDING alcance | P2 | RSM dirección | No solicitar cuatro fotos como bloqueo de lanzamiento por un módulo hidden. |
| V19 | Care / Hero | CarePage | Placeholder «CARE GUIDE — HERO» | Foto cover; seleccionar disponible antes de producir otra | D/M sin recurso asignado | PLACEHOLDER | P1 | RSM producto/marca | La página requiere imagen o aprobación de una versión sin ese módulo. |
| V20 | Care / Everyday y Storage | CarePage | Dos placeholders editoriales | Fotografía de cuidado/almacenaje que demuestre prácticas reales; relación según pareja de columnas, no tamaño inventado | D/M sin asignar | PLACEHOLDER | P1 | RSM producto/fotografía | No usar fotografías que contradigan las instrucciones del fabricante. |
| V21 | Care / 5 pasos | CareIllustration | SVG inline en CarePage.tsx | Conservar SVG y viewBox 640×520; no requiere rasterización | D/M ya adaptables | AVAILABLE; NEEDS CONFIRMATION | P1 si se mantiene patrón | RSM producto valida práctica; marca valida arte | No solicitar ilustraciones nuevas antes de revisar las existentes. |
| V22 | Hero / video opcional | MediaHero video | Sin mp4/webm/mov ni poster designado | Video nativo alojado en Shopify; decidir duración, edición y compresión tras objetivo. Poster/fallback con encuadre coherente. | D pendiente opcional; M puede ser imagen estática existente. | PENDING | P2 | RSM marca/video | No bloquea Shopify con hero image. Sin video no se puede certificar reproducción/codecs. |
| V23 | Editorial / video opcional | Sections futuras | Ningún archivo ni uso editorial real de video | Solo si RSM aprueba uso y contenido; reutilizar video nativo | D/M sin definir | PENDING condicional | P2 | RSM dirección | No pedir metraje sin una sección aprobada que lo use. |
| V24 | Global / logos e isotipos | Header / Footer / favicon | public/logo/RSM_logo.svg, RSM_logo_blanco.svg y raster; public/logo/RSM-logo-black.png y RSM-logo-white.png | Priorizar SVG oficial cuando tema/formato lo permita; PNG transparente para picker si precisa | D/M disponibles; mismo original | AVAILABLE; NEEDS CONFIRMATION de aplicación | P0 confirmar aplicación | RSM marca | Isotipo blanco PNG tiene fondo oscuro, no transparencia; ya hay vector blanco adecuado, no hace falta redibujar ni pedirlo. |
| V25 | Global / favicon | index.html | favicon.svg adaptativo, light/dark, PNG32, ICO16/32/48, Apple180 | Usar activos existentes; decisión de nativo raster versus adaptación SVG en Shopify | D/M existentes; no nueva entrega | AVAILABLE | P1 integración | Frontend + RSM valida preview | SVG por tema no es setting nativo completo; no autoriza modificar head. |
| V26 | Global / iconos | Icon.tsx | SVG inline de interfaz | Preferir iconos nativos de Prestige; conservar identidad sin duplicación | D/M existente | AVAILABLE | P1 técnico | Frontend | No pedir una biblioteca nueva. |
| V27 | Global / fuentes y paleta | src/index.css / tokens | Familias externas; paleta en SCSS; decisión de marca en T/docs/RSM_DESIGN_CONTEXT.md | Font pickers nativos primero; solo si falla, binarios/licencia aprobados | D/M disponible vía fuentes externas; carga Shopify no verificada | CONFIRMED familias/paleta; PENDING carga efectiva | P0 | Frontend verifica; RSM valida licencias solo si hace falta | No pedir WOFF por defecto ni duplicar Google Fonts dentro del tema. |

## Matriz de contenido editorial, comercial y legal

Estos recursos no tienen dimensiones de imagen. Su formato recomendado es texto editable/traducible (documento o campos estructurados); D/M comparten contenido y requieren validación de longitud en es/en.

| ID | Página / sección / componente | Recurso y archivo actual | Estado | Prioridad | Responsable propuesto | Formato / desktop-mobile | Impacto y confirmación requerida |
|---|---|---|---|---|---|---|---|
| C01 | Home / títulos, subtítulos, CTA / Home | HomePage.tsx, MediaHero; «Nuestro origen…», «Sin fronteras», «Estirpe de lujo» | AVAILABLE; NEEDS CONFIRMATION | P0 | RSM marca | Copy editable es/en, misma base D/M | Aprobar texto y destino por CTA. Frase del manifiesto no aprueba automáticamente toda la campaña. |
| C02 | Historia / origen, territorio, ciudad / Story | OurStoryPage.tsx, TerritoryEditorialBanner.tsx | AVAILABLE; NEEDS CONFIRMATION; PLACEHOLDER parcial | P1 | RSM marca | Texto editorial sin datos inventados; D/M comunes | «Llevamos la esencia de  —su fuerza…» tiene un fragmento faltante; completar con RSM. Validar relato/fotos y traducción. |
| C03 | Colecciones / título, descripción y SEO / Collection | CollectionPage.tsx; labels de colección en products.ts | AVAILABLE; NEEDS CONFIRMATION | P0 | RSM producto/marca | Nombre/handle/descripcion/meta/taxonomía estructurados | PLP muestra todos inicialmente aunque su copy dice Core; acordar navegación y colecciones oficiales. |
| C04 | Special / intro y detalles / SpecialLanding | SpecialEditionSections.tsx y SpecialEditionPage.tsx; copy sr-only menciona NOCTURNA | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM marca/producto | Naming/copy es/en y vínculos a modelo/colección | Confirmar si NOCTURNA es nombre oficial, concepto o debe retirarse. Reconciliar negro/tabaco sin inventar variante. |
| C05 | PDP / descripción, atributos y relato / ProductInfo | products.ts y CorePdp/NocturnaPdp; mockData y validaciones parciales | DEMO; NEEDS CONFIRMATION | P0 | RSM producto | Ficha estructurada por SKU/modelo | No declarar cuero/gamuza/composición, tallas ni cierres por apariencia fotográfica. |
| C06 | Care / pasos, materiales y FAQ / CarePage | CarePage.tsx, consejos genéricos con condiciones | AVAILABLE; NEEDS CONFIRMATION | P1 | RSM producto/fabricante | Instrucciones oficiales por material, es/en | Aprobar antes de publicar; no aplicar una pauta universal a materiales no confirmados. |
| C07 | Global / contacto / Footer | Botón Contacto sin acción; no email/teléfono/horarios oficiales en fuente | PENDING | P0 definición; P1 publicación | RSM operaciones | Datos verificables, links/contact page D/M | No pedir contacto a partir de redes no comprobadas. |
| C08 | Global / envíos, devoluciones, pagos, impuestos / PDP + Footer | Footer buttons sin handler; acordeón «Políticas sujetas…»; checkout sin funcionamiento comercial | PLACEHOLDER; PENDING | P0 | RSM operaciones + asesor responsable | Documento de políticas y datos comerciales por mercado | Necesario antes de compra real: cobertura, plazos, costes/umbrales, devolución/cambio y contacto, reglas aplicables confirmadas por cliente. |
| C09 | Global / privacidad, términos, consentimiento / Footer + Newsletter | Botones legales sin destino y newsletter de estado local | PENDING; DEMO captación | P0 contenido; P1 publicación | RSM responsable legal/privacidad | Textos aprobados y consentimiento requerido por operación real, es/en | El equipo integra; no redactar reglas legales ficticias ni afirmar cumplimiento desde un prototipo. |
| C10 | Global / idioma, mercados y SEO | Prototipo español; HTML desde configuración Figma; sin catálogo en inglés | PENDING contenido en inglés; NEEDS CONFIRMATION metadatos | P1 | RSM marca + traducción | Titulares, descripciones, menús, alt y metadatos es/en | Mantener solución de traducción ya instalada; confirmar mercados/moneda/es predeterminado, no cambiar remotos en esta fase. |
| C11 | Marketing / suscripción, reseñas e integraciones | Newsletter.tsx demo; inventario de apps en T/docs/integrations.md | DEMO / NEEDS CONFIRMATION | P1 | RSM marketing/operaciones | Textos, consentimiento, IDs de formularios y autorización de prueba | No solicitar contraseñas por documentos ni fabricar testimonios/reseñas. Confirmar proveedor/plan y mecanismo de captación único. |
| C12 | Revisión / Design System, Comparison y precios de muestra | DesignSystemPage, ProductPriceExamples, ComparisonPage | DEMO | P2 / excluir de producción | Frontend + RSM dirección | Documentación interna, no copy comercial | No convertir $1,279/$1,599 ni badges de muestra en promoción real. |
| C13 | Aprobaciones / derechos y usos | Assets existentes + Brand Book referenciado en T | NEEDS CONFIRMATION del uso comercial de fotos/copys | P0 criterio; P1 cierre | RSM titular/dirección | Registro de aprobación por asset/uso, sin duplicar entregas | Existencia y metadatos no prueban derechos, autenticidad ni autorización final. |

## Catálogo actual: datos que deben confirmarse

Los ocho precios son `$1,599 MXN`, `mockData=true` y `validation.status=provisional-partial`; ninguno tiene compareAtPrice ni variantes comerciales declaradas. Los IDs React no son SKU verificados. Se mantienen todos los datos originales: esta auditoría no los corrige ni los importa.

| Modelo / ID React | Colección | Imágenes actuales | Color / patrón disponible | Pendiente según validación de fuente | Estado comercial |
|---|---|---:|---|---|---|
| RSM Blue / `rsm-blue` | core | 1 | Crema / Azul marino | price, size, material, closure | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Militar / `rsm-militar` | core | 1 | Arena / Camuflaje pixelado | price, size, material, closure | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Special Edition Gamuza / `rsm-special-edition-gamuza` | special-edition | 4 | Tabaco / Dorado envejecido | price, size, material | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Special Edition Leather Brown / `rsm-special-edition-leather-brown` | special-edition | 1 | Café profundo grabado / Miel | price, size, material, closure | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Special Edition Pipes / `rsm-special-edition-pipes` | special-edition | 1 | Hueso / Negro con bordado terracota | price, size, material, closure | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Special Edition Red / `rsm-special-edition-red` | special-edition | 1 | Hueso / Vino Estirpe | price, size, material, closure | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Super Cajeta / `rsm-super-cajeta` | core | 5 | Negro / Cajeta con malla beige | price, size, material | DEMO precio; NEEDS CONFIRMATION resto |
| RSM Wine / `rsm-wine` | core | 1 | Crema / Vino con malla | price, size, material, closure | DEMO precio; NEEDS CONFIRMATION resto |

| Dato requerido definitivo | Disponibilidad local | Acción y prioridad | Responsable / impacto |
|---|---|---|---|
| Nombre, modelo y descripción | Texto y modelo disponibles por producto | Validar naming y descripción sin inferencias; P0 | RSM producto; identifica qué se vende realmente. |
| SKU / identificadores comerciales | No hay SKU | Entregar/confirmar por variante; P0 | RSM operaciones; evita identificar stock por ID de demo. |
| Precio efectivo / moneda / impuestos | 1599 MXN DEMO, sin precio comercial aprobado | Confirmar precio y tratamiento comercial; P0 | RSM operaciones; no comenzar compra real con cifras de muestra. |
| Precio comparativo / promoción | No declarado; ejemplos aislados en DS | Solo entregar comparativo si existe oferta aprobada; P1 condicional | RSM comercial; no es obligatorio tener descuentos. |
| Inventario / ubicación / disponibilidad | No modelado | Confirmar unidades, control y venta sin stock, si aplica; P0 | RSM operaciones; compra real depende de disponibilidad. |
| Variantes, color y fotos asociadas | Color textual y un swatch por producto; variants vacío | Decidir producto versus variante y valores reales, luego asociar fotos; P0 | RSM producto; no deducir opciones por color de fotos. |
| Material / talla / ajuste / cierre | Parcial; composición y medidas marcadas pendientes; algunas descripciones de cierre sin aprobación final | Confirmar composición, rango de talla y mecanismo; P0/P1 según ficha | RSM producto/fabricante; precisión comercial y de cuidado. |
| Características y cuidados | Descripciones visuales y guía general | Aprobar fichas e instrucciones por material; P1 | RSM producto; evita prometer propiedades no verificadas. |
| Colecciones / categorías / orden | 4 Core y 4 Special en prototipo | Confirmar pertenencia, títulos/handles y orden; P0 | RSM comercial; determina navegación y PLP. |
| SEO y accesibilidad de catálogo | Alt disponibles; no SKU/metadatos SEO por producto | Título/meta/URL/alt revisados es/en; P1 | RSM marca + frontend; no reutilizar texto de campaña como meta sin revisión. |
| Metafields potenciales | Modelo/size/material/closure en objeto React | Propuesta: campos tipados de material, ajuste, talla, cuidados y descripción corta; revisar definiciones existentes primero. P1 | Frontend propone, RSM valida. Crear definiciones sería cambio remoto separado. |
| Badges personalizados | ProductSaleBadge demo; tema nativo consume custom.badges | Confirmar necesidad y datos ya existentes; no crear namespace duplicado por defecto. P1 condicional | RSM comercial + frontend. |

## Anexo: archivos visuales y dimensiones REALES

Medidos leyendo los archivos locales, no deducidos del nombre. Tamaño en MB decimales; los porcentajes/crops no cambian estas dimensiones. Este anexo registra existencia, no aprobación. Todas las fotografías requieren confirmación de uso. La optimización de fotografías activas se completó según [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md). Los maestros siguen íntegros fuera de public y algunos recursos provisionales requieren aprobación, sin pedir automáticamente nuevos assets.

| Archivo actual | Formato real | Dimensiones reales | MB | Estado técnico / observación |
|---|---|---|---:|---|
| `public/assets/collection-hero-caps.webp` | WEBP | 1708×921 | 0.485 | AVAILABLE; WebP q88 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/home-collection-bg.webp` | WEBP | 3200×1800 | 0.611 | AVAILABLE; WebP existente conservado |
| `public/assets/home-hero.webp` | WEBP | 1672×941 | 0.241 | AVAILABLE; WebP existente conservado |
| `public/assets/home-history-banner.webp` | WEBP | 1961×802 | 0.387 | AVAILABLE; WebP existente conservado |
| `public/assets/home-sin-fronteras-city.webp` | WEBP | 1600×554 | 0.130 | AVAILABLE; WebP q90 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/home-sin-fronteras.jpeg` | JPEG | 1600×554 | 0.222 | AVAILABLE; original de variante cromática reservado; no fusionar |
| `public/assets/home-sin-fronteras.webp` | WEBP | 3200×2387 | 0.678 | AVAILABLE; WebP existente conservado |
| `public/assets/home-special-edition.webp` | WEBP | 3200×960 | 0.180 | AVAILABLE; WebP existente conservado |
| `public/assets/rsm-blue.webp` | WEBP | 1362×1155 | 0.229 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-militar.webp` | WEBP | 1362×1155 | 0.273 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-cap.webp` | WEBP | 1600×900 | 0.153 | AVAILABLE; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/rsm-special-edition-gamuza-back.webp` | WEBP | 1536×1024 | 0.210 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-gamuza-front.webp` | WEBP | 1536×1024 | 0.230 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-gamuza-side.webp` | WEBP | 1535×1024 | 0.209 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-gamuza.webp` | WEBP | 1536×1024 | 0.221 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-leather-brown.webp` | WEBP | 1523×1033 | 0.291 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-pipes.webp` | WEBP | 1536×1024 | 0.241 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-red.webp` | WEBP | 1536×1024 | 0.232 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-back.webp` | WEBP | 1536×1024 | 0.311 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-front.webp` | WEBP | 1362×1155 | 0.236 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-side-b.webp` | WEBP | 1536×1024 | 0.353 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-up.webp` | WEBP | 1086×1448 | 0.553 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta.webp` | WEBP | 1362×1155 | 0.275 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/rsm-wine.webp` | WEBP | 1362×1155 | 0.257 | AVAILABLE; WebP existente conservado; no recomprimido |
| `public/assets/special-edition-suede-emblem.webp` | WEBP | 1024×1536 | 0.345 | AVAILABLE; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/special-edition-suede-finish.webp` | WEBP | 1024×1536 | 0.251 | AVAILABLE; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/special-edition-suede-material.webp` | WEBP | 1024×1536 | 0.231 | AVAILABLE; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/story-city.webp` | WEBP | 1972×798 | 0.183 | AVAILABLE; WebP existente conservado |
| `public/assets/story-hero.webp` | WEBP | 1961×802 | 0.398 | AVAILABLE; WebP existente conservado |
| `public/assets/story-origin-appaloosa.webp` | WEBP | 1672×941 | 0.373 | AVAILABLE; WebP q90 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/story-origin-courtyard.webp` | WEBP | 1672×941 | 0.462 | AVAILABLE; WebP q88 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/story-origin.webp` | WEBP | 1835×857 | 0.604 | AVAILABLE; WebP existente conservado |
| `public/assets/story-territory-architecture.webp` | WEBP | 1201×1309 | 0.537 | AVAILABLE; WebP existente conservado |
| `public/assets/story-territory-door-provisional.webp` | WEBP | 216×281 | 0.016 | AVAILABLE; WebP existente conservado; 216×281, no ampliar; pendiente de aprobación |
| `public/assets/story-territory-horse.webp` | WEBP | 1193×1319 | 0.513 | AVAILABLE; WebP existente conservado |
| `public/favicon.png` | PNG | 96×96 | 0.002 | AVAILABLE; sin conversión; no se demostró obsolescencia segura |
| `public/logo/RSM-logo-black.png` | PNG | 780×300 | 0.010 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM-logo-white.png` | PNG | 780×300 | 0.011 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM_logo_blanco.png` | PNG | 780×300 | 0.011 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM_logo_negro.png` | PNG | 780×300 | 0.010 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/apple-touch-icon.png` | PNG | 180×180 | 0.009 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-16x16.png` | PNG | 16×16 | 0.000 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-32x32.png` | PNG | 32×32 | 0.001 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-dark-32x32.png` | PNG | 32×32 | 0.001 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon.ico` | ICO | 48×48 | 0.003 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/rsm-black-logo-iso.png` | PNG | 338×338 | 0.002 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/rsm-white-logo-iso.png` | PNG | 2400×1792 | 4.005 | AVAILABLE; excepción PNG/SVG/ICO; conservado byte a byte |
| `asset-masters/collection-background-7680x4320.png` | PNG | 7680×4320 | 21.510 | AVAILABLE; movido íntegro; fuera de builds |
| `asset-masters/story-territory-landscape-7680x5728.jpg` | JPEG | 7680×5728 | 6.922 | AVAILABLE; movido íntegro; fuera de builds |

| SVG / recurso | Dimensiones declaradas / alcance | Estado |
|---|---|---|
| public/logo/RSM_logo.svg y RSM_logo_blanco.svg | 338×338; viewBox 0 0 338 338; geometría oficial existente | AVAILABLE; aplicación de marca por validar |
| public/logo/favicon.svg, favicon-light.svg, favicon-dark.svg | 204×204; viewBox 64.5 74.5 204 204; paths oficiales conservados | AVAILABLE; adaptive negro/claro, blanco/oscuro; PNG/ICO de respaldo disponibles |
| src/components/ui/Icon.tsx | SVG inline según icono | AVAILABLE; preferir los iconos de Prestige al integrar |
| CareIllustration en CarePage.tsx | viewBox 0 0 640 520, cinco estados | AVAILABLE; NEEDS CONFIRMATION artística y de práctica |
| docs/mobile-responsive-evidence/** | 23 capturas históricas de QA del prototipo | Evidencia técnica, no fotografía comercial ni assets a migrar |
| Fuentes | Solicitud externa Google Fonts; ningún binario local | CONFIRMED familias/pesos por decisión documental; verificar carga nativa Shopify |
| Video / posters asignados | Cero archivos de video; ningún poster vinculado a un video real | PENDING opcional; fotos existentes sirven como alternativa image |

No se inventa una dimensión mobile única: el hero es cover con altura por dispositivo, las galerías usan proporciones originales y los editoriales cambian de columna. Primero se prueba focal point/crop del recurso disponible. Una toma específica mobile solo se solicita si ese ensayo demuestra que no conserva el sujeto ni legibilidad.

## Checklist consolidado para RSM

### Fotografías

- [ ] **Inicio (P0):** validar correspondencia de las ocho fotos principales con los ocho modelos y su uso comercial; no reenviarlas si son las correctas.
- [ ] **Antes de publicar páginas afectadas (P1):** aprobar fotos/editoriales existentes de Home, colección, Historia y Special, incluido el contraste negro/tabaco.
- [ ] Seleccionar recursos para los placeholders visibles de Core PDP, Special PDP y tres espacios Care; evaluar primero las fotos existentes o aprobar retirar un módulo.
- [ ] **Condicional (P2):** nuevas vistas, fotos de variantes o tomas mobile solo si las variantes reales o el crop lo requieren. El TerritoryGrid hidden no genera una solicitud automática de cuatro fotografías.

### Videos

- [ ] **Posterior/opcional (P2):** decidir si sustituir la fotografía del Hero por video. Solo entonces entregar metraje aprobado y seleccionar poster/fallback; mobile puede permanecer estático.
- [ ] No encargar video editorial sin aprobar primero una sección que lo utilice.

### Catálogo

- [ ] **Inicio (P0):** lista de modelos/SKU, relación producto-variante, colecciones, precios reales, moneda y disponibilidad/inventario.
- [ ] Confirmar materiales, tallas/rangos, ajuste/cierre, características y descripciones; no mantener inferencias de fotografía como atributos definitivos.
- [ ] **P1:** aprobar cuidados y SEO es/en; confirmar promociones/comparativos solo cuando existan ofertas reales.

### Contenido editorial

- [ ] **Inicio (P0):** naming de líneas y navegación; aprobar dirección/copy principal.
- [ ] **P1:** cerrar títulos, subtítulos, descripciones y CTA con destino de Home/colecciones/PDP/Special/Historia/Care.
- [ ] Completar la frase incompleta de Historia y aclarar el uso de NOCTURNA; validar el relato sin inventar datos del rancho.
- [ ] Aprobar traducciones es/en de contenido, menús, alt y mensajes comerciales mediante la solución existente.

### Información comercial

- [ ] **Inicio (P0):** contacto oficial, territorios de venta, condiciones de envío/devolución/cambio, moneda e impuestos aplicables definidos por RSM.
- [ ] **P1:** confirmar captación nativa o Forms, proveedor/plan/IDs existentes, reseñas y autorización de pruebas sin disparar campañas reales.

### Información legal

- [ ] **P0/P1:** entregar o confirmar versiones aprobadas de privacidad, términos, políticas comerciales y textos de consentimiento adecuados a la operación real, con URLs y responsable de mantenimiento.
- [ ] Confirmar derechos/autorización de fotografías, logos y materiales; las familias ya aprobadas no necesitan volver a seleccionarse.

### Aprobaciones

- [ ] **Inicio (P0):** aprobar mapeo preliminar y nivel de fidelidad nativa, preservando el header existente; identificar responsable de decisión.
- [ ] **P1:** decidir sobre slider con texto fijo, Care sincronizado, territorio y favicon adaptativo versus nativo. Las personalizaciones potenciales no están aprobadas por aparecer en una tabla.
- [ ] Mantener módulos hidden, herramientas de revisión y precios demostrativos fuera de publicación, salvo decisión expresa sobre un módulo comercial.
- [ ] Autorizar separadamente verificación/operaciones futuras en QA. Aceptar estos documentos no autoriza acceso remoto, implementación ni publicación.

**Puede comenzar la planificación/configuración nativa con el catálogo estructural y los originales disponibles una vez autorizado el trabajo; no es necesario esperar videos o nuevas fotos mobile. No debe comenzar una operación comercial real con precios, stock, políticas o contenido legal pendientes.**

## Actualización de la auditoría de assets

Se verificó el uso real de backgrounds: Home Featured Collection utiliza home-collection-bg.webp (derivado del maestro 8K), mientras el Hero PLP utiliza collection-hero-caps.webp (antes Premium Caps in Warm Sunlight.png). Esto corrige la atribución cruzada de la tabla preliminar. Las necesidades de aprobación comercial no cambian.

Inventario técnico actualizado con hashes y referencias: [ASSET_INVENTORY.md](ASSET_INVENTORY.md). Copias originales sustituidas recuperables en Git/LFS, originales de alta resolución preservados en asset-masters y cifras comparativas: [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md).
