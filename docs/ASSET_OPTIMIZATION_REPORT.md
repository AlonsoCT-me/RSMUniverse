# Reporte de auditoría, deduplicación y optimización WebP

24 de noviembre de 2026. Trabajo local autorizado sobre assets y sus referencias; sin publicación, servicios de optimización externos, dependencias de runtime, cambios en Shopify, commits, push o merge.

## Estado inicial y método

Se ejecutó git status antes de modificar. Existían cambios locales en index.html y favicons, además de seis documentos de preparación Shopify y dos favicons nuevos sin seguimiento. Se conservaron; no se usó reset, checkout ni staging para ocultarlos.

Se inventariaron public/assets, public/logo, public/favicon.png, src/imports y los PNG de evidencia en docs. Se revisaron TSX/TS, SCSS/CSS, HTML, JSON, Markdown, assetUrl, catálogo, backgrounds y configuraciones de slider/hero. Las referencias dinámicas del catálogo se contrastaron con las nueve páginas reales, incluyendo galerías y estados de interacción; no se borran imágenes por una búsqueda literal negativa.

Los datos iniciales y finales están en [asset-inventory.json](asset-inventory.json) y [ASSET_INVENTORY.md](ASSET_INVENTORY.md). SHA-256 identifica duplicados exactos; dHash solo propone candidatos. Se inspeccionaron pares y recortes de detalle, con comparación perceptual adicional, antes de decidir. Los cambios de color/encuadre no se fusionan por el hash.

## Métricas comparables

Valores de bytes reales, sin gzip. El peso total incluye maestros y capturas QA. No mide objetos históricos de Git LFS ni la carpeta temporal de verificación. «Sin referencias» significa sin referencia operativa directa; no autoriza su eliminación. «Duplicados exactos» cuenta copias excedentes, con grupos entre paréntesis.

| Métrica | Antes | Después | Diferencia |
|---|---:|---:|---:|
| Imágenes totales (incluye SVG/ICO/maestros/evidencia) | 80 | 77 | -3 |
| Archivos WebP | 26 | 34 | +8 |
| Duplicados exactos: copias excedentes (grupos) | 5 (3) | 2 (2) | −3 copias; branding protegido se conserva |
| Peso de imágenes, bytes | 61,624,809 | 46,904,130 | -14,720,679 |
| Peso de public/, bytes | 51,263,061 | 15,225,680 | -36,037,381 |
| Recursos sin referencias operativas | 41 | 39 | -2 |
| Referencias operativas rotas | 0 | 0 | +0 |
| Build normal completo, bytes | 58,537,849 | 15,578,767 | -42,959,082 |
| Build Pages completo, bytes | 58,538,062 | 15,578,968 | -42,959,094 |
| Recursos generados por Vite normal, bytes | 7,273,188 | 351,487 | -6,921,701 |
| Archivos generados por Vite normal | 3 | 2 | -1 |

Reducción total de imágenes: **23.89%** (14,720,679 bytes). Reducción de public: **70.30%**. Build normal: **73.39%**. Los recursos generados por Vite excluyen copias de public: pasan de CSS+JS+JPG empaquetado a CSS+JS; el maestro JPG deja de duplicarse en el artefacto.

No se reducen los maestros para mejorar artificialmente estas cifras: ambos siguen en el árbol, fuera de public. Los ocho originales sustituidos de menor resolución conservan respaldo verificado en el commit y objetos LFS indicados más abajo. Los 26 WebP existentes, incluidos todos los medios de producto y Home hero, conservaron exactamente su hash.

## Conversiones y renombrados

Ocho conversiones nuevas, sin resize, crop ni upscaling. cwebp local, método 6, sharp_yuv; calidad elegida por contenido, no uniforme. ImageOps.exif_transpose se aplicó antes de retirar metadatos innecesarios; las fuentes examinadas no tenían rotación EXIF. Los JPEG tenían sRGB, que se preservó como ICC; los PNG no tenían perfil/gamma alternativo declarado y mantienen RGB/sRGB implícito. Ninguna fotografía convertida contenía transparencia que perder; el branding transparente no se convierte.

| Original | WebP canónico | Dimensiones original → final | Calidad | Bytes antes → después | Ahorro |
|---|---|---|---:|---:|---:|
| `public/assets/Appaloosa Rider Across Green Hills.png` | `public/assets/story-origin-appaloosa.webp` | 1672×941 → 1672×941 | 90 | 2,814,085 → 372,808 | 86.75% |
| `public/assets/Golden-Hour Equestrian Courtyard.png` | `public/assets/story-origin-courtyard.webp` | 1672×941 → 1672×941 | 88 | 3,084,808 → 461,586 | 85.04% |
| `public/assets/Cinematic Black Suede Cap on Stone.png` | `public/assets/special-edition-suede-material.webp` | 1024×1536 → 1024×1536 | 92 | 2,280,751 → 230,664 | 89.89% |
| `public/assets/Embossed Black Suede Rancho Branding.png` | `public/assets/special-edition-suede-emblem.webp` | 1024×1536 → 1024×1536 | 92 | 2,512,817 → 345,068 | 86.27% |
| `public/assets/Luxury Black Suede Cap Close-Up.png` | `public/assets/special-edition-suede-finish.webp` | 1024×1536 → 1024×1536 | 92 | 2,345,416 → 251,210 | 89.29% |
| `public/assets/Premium Caps in Warm Sunlight.png` | `public/assets/collection-hero-caps.webp` | 1708×921 → 1708×921 | 88 | 3,479,772 → 485,128 | 86.06% |
| `public/assets/home-sin-fronteras-2.jpeg` | `public/assets/home-sin-fronteras-city.webp` | 1600×554 → 1600×554 | 90 | 193,460 → 129,800 | 32.91% |
| `public/assets/rsm-special-edition-cap.jpeg` | `public/assets/rsm-special-edition-cap.webp` | 1600×900 → 1600×900 | 92 | 225,230 → 153,158 | 32.00% |

Los nombres nuevos son semánticos, en minúsculas/kebab-case. No se renombra el catálogo WebP ni se alteran nombres oficiales de logo. Premium Caps corresponde al Hero de colección, por eso su nombre canónico es collection-hero-caps.webp.

## Reutilización, duplicados y maestros

| Acción | Ruta anterior | Canónico / destino | Evidencia |
|---|---|---|---|
| Reutilización sin recomprimir + maestro preservado | public/assets/RSM_clean_background_8K.png | public/assets/home-collection-bg.webp; original íntegro en asset-masters/collection-background-7680x4320.png | Misma composición revisada; 7680×4320 → derivado ya existente 3200×1800; hash del maestro preservado. |
| Reutilización sin recomprimir + maestro preservado | src/imports/home-SIN_FRONTERAS-2.jpg | public/assets/home-sin-fronteras.webp; original íntegro en asset-masters/story-territory-landscape-7680x5728.jpg | Misma escena revisada; original 7680×5728, derivado existente 3200×2387; redondeo de tamaño de un píxel, sin crop nuevo. |
| Duplicado exacto retirado | src/imports/WhatsApp_Image_2026-11-16_at_09.53.12.jpeg | Su canónico JPEG era home-sin-fronteras-2.jpeg; tras conversión, home-sin-fronteras-city.webp | SHA-256 idéntico antes de la conversión; original recuperable en Git/LFS. |
| Duplicado exacto retirado | public/assets/rsm-logo-dark.png | public/logo/RSM-logo-black.png | Mismos bytes y SHA-256; Header referencia el canónico. |
| Duplicado exacto retirado | public/assets/rsm-logo-white.png | public/logo/RSM-logo-white.png | Mismos bytes y SHA-256; Header/Footer referencian el canónico. |

No hay obsoletos eliminados por mera falta de referencia. Se conservan los aliases oficiales idénticos de public/logo, como exige la protección de esa carpeta. Los masters y derivados intencionales no se consideran copias descartables.

### Casos visuales conservados

- home-history-banner.webp y story-hero.webp: dHash igual, dimensiones iguales y SSIM de luminancia muestreado ≈0.992, pero diferencias de codificación/color. Se mantienen ambos para no resolver automáticamente una decisión visual.
- home-sin-fronteras.jpeg frente a la versión city actual: dHash cercano, pero gradación distinta y SSIM ≈0.502; no son intercambiables. Se conserva el JPEG reservado.
- Logo negro/blanco: algunos hashes perceptuales pueden aproximarse, pero color y función son distintos. Nunca se fusionan variantes por ese criterio.
- Recursos futuros/provisionales (home-special-edition, territory-horse, territory-door y favicon legado) no se eliminan; las capturas de QA tampoco se convierten con pérdida.

## Respaldo verificable

Commit anterior a la tarea: `07e9eecb35cdbeb775b2ecf5427f481f3ec780c9`. Antes de retirar cualquier original se verificó su entrada versionada, OID LFS y que el objeto local existe y coincide por SHA-256 con el archivo de trabajo. No se presupone copia remota. El inventario JSON conserva los datos completos para cada original; dos maestros siguen además como archivos íntegros en [asset-masters](ASSET_MASTERS.md).

Para recuperar una fuente sustituida, localizar el puntero de su ruta en ese commit y su OID; el payload verificado está en `.git/lfs/objects/<primeros 2>/<siguientes 2>/<OID>`. Leer solo git show de un archivo LFS devuelve el puntero, no la imagen. Recuperar el payload a un destino aprobado y comprobar su SHA antes de usarlo. No se hizo fetch remoto, poda LFS, copia a servicios externos ni commit. La carpeta temporal de pruebas es auxiliar y no es el respaldo único.

| Maestro conservado | SHA-256 completo |
|---|---|
| `asset-masters/collection-background-7680x4320.png` | `03f4a8c1741b22de9ec23aca91078ab9e3a06ed3596e61d2ce8d5e5df43bbda7` |
| `asset-masters/story-territory-landscape-7680x5728.jpg` | `e69a8999f572eb0f2a3d76011416e00535e5cf11f778ab416132682d0e05100b` |

## Referencias actualizadas y carga

Solo se cambiaron fuentes/URLs: HomePage, OurStoryPage, SpecialEditionPage, TerritoryEditorialBanner, Header/Footer y dos backgrounds SCSS. Se usa assetUrl para los recursos públicos y Vite conserva la reescritura base de CSS. El import del JPG de Territorio se sustituye por la URL del WebP público ya existente; no se copia de nuevo al bundle.

Los cambios de esta tarea no modifican estilos de composición, object-fit/object-position, ratios, textos, precios, catálogo, eventos, navegación, carrito, Userback, tokens ni estrategia de lazy/eager/fetchpriority. Se conservó una edición paralela del usuario en Home que retiró el punto de «Sin fronteras», lo reflejó también en el JSON histórico de mediciones y reformateó el archivo; su lógica compilada se contrastó por tokens y Home se revalidó en ambos builds tras esa edición. Los assets de marca e index.html mantienen los cambios locales previos al inicio.

verify-images.mjs ahora incluye imágenes nuevas aún sin staging y omite rutas de trabajo ya eliminadas: valida el árbol real durante la migración y todas las imágenes del checkout en CI. Se añade verify-asset-references.mjs para verificar rutas concretas de assetUrl/backgrounds/favicons, imports y mayúsculas exactas. No se modifica el workflow de despliegue.

Documentación sincronizada: README, FINAL_TECHNICAL_AUDIT, DOCUMENTATION_SYNC_REPORT, CLIENT_CONTENT_REQUIREMENTS, EDITORIAL_SPLIT_SECTION, referencias de medios del mapeo/estrategia QA y las dos referencias de logos en RSM_DESIGN_IMPLEMENTATION_SPEC. Se corrige la atribución preliminar de fondos: 8K era Featured Collection de Home; Premium Caps era Hero PLP.

## Calidad visual

Se compararon las ocho fuentes/derivados en recortes de 500×300 a escala 1:1 (bordados, gamuza, costuras, tejidos, gradación y emblemas) y las composiciones completas de pares reutilizados. Es compresión con pérdida: **no se afirma equivalencia exacta**. Dimensiones y orientación se conservan en las ocho conversiones, y los maestros no cambian.

La métrica reproducible de apoyo es SSIM de luminancia sobre parches 8×8, muestreados cada 32px a resolución nativa; también se mide RMSE/PSNR RGB. Es un criterio técnico más revisión visual, no una aprobación fotográfica del cliente ni un certificado universal de perceptibilidad. No se confunde el SSIM expresado en dB por cwebp con el índice normalizado.

| WebP nuevo | SSIM Y muestreado | PSNR RGB dB |
|---|---:|---:|
| story-origin-appaloosa.webp | 0.99045 | 39.62 |
| story-origin-courtyard.webp | 0.99126 | 37.40 |
| special-edition-suede-material.webp | 0.98092 | 43.02 |
| special-edition-suede-emblem.webp | 0.98844 | 42.74 |
| special-edition-suede-finish.webp | 0.98338 | 43.38 |
| collection-hero-caps.webp | 0.98714 | 36.69 |
| home-sin-fronteras-city.webp | 0.98646 | 42.04 |
| rsm-special-edition-cap.webp | 0.98749 | 44.94 |

Los dos WebP reutilizados desde masters ya existentes alcanzan SSIM muestreado ≈0.9884/0.9904 después de ajustar la fuente a su resolución, sin recomprimirlos. Las fotografías de producto, Home hero y demás WebP existentes mantienen sus bytes.

## Peso de imágenes por página

Medición local en Chromium, viewport desktop de 1440×900, caché deshabilitada, documento independiente por ruta y recorrido para activar lazy loading. Suma encodedBodySize de recursos de imagen; no incluye fuentes/CSS/JS ni SVG inline, y no se suma como si todas las páginas se descargaran juntas. No es una medición de Core Web Vitals o del servidor publicado.

| Página | Antes, bytes | Después, bytes | Reducción |
|---|---:|---:|---:|
| home | 23,837,859 | 2,803,415 | 88.24% |
| collection | 5,985,166 | 2,990,522 | 50.03% |
| caliza | 2,783,170 | 2,783,170 | 0.00% |
| special | 8,359,441 | 1,975,327 | 76.37% |
| nocturna | 1,101,167 | 1,101,167 | 0.00% |
| story | 14,553,363 | 3,244,975 | 77.70% |
| care | 10,501 | 10,501 | 0.00% |
| system | 972,594 | 972,594 | 0.00% |
| compare | 20,302 | 20,302 | 0.00% |

Oportunidades futuras registradas, sin implementar: tamaños responsive CDN, dimensiones/ratio reservado para reducir CLS, revisión de prioridad del LCP y lazy loading de contenido secundario. El cambio de formato/peso no demuestra por sí mismo una mejora de LCP medida en red real.

## Validación funcional y límites

- TypeScript estricto, build normal y build GitHub Pages correctos. Continúa la advertencia preexistente de section::last-child, fuera del alcance.
- verify-images: 71 PNG/JPEG/WebP válidos (el inventario de 77 añade cinco SVG y un ICO). verify-asset-references: 43 referencias operativas concretas correctas, con mayúsculas exactas.
- 7/7 pruebas de precios y 12/12 Userback correctas; sus implementaciones no se alteran.
- Nueve páginas reales a 320/768/1440 en ambos builds: 54 comprobaciones, imágenes visibles completas, sin 404, excepciones JS ni nuevos overflows. Sliders/galerías/miniaturas/backgrounds y marca se revisaron en sus rutas.
- El slider de Origen navega por los WebP nuevos mediante flechas, dots, teclado, loop y swipe táctil; texto fijo preservado. Recorrido comercial mantiene Quick Add, cantidad, subtotal, drawer, galería, acordeones, filtros, historial, menú mobile y newsletter.
- Capturas antes/después y comparación de texto, altura de página y cajas de imágenes/headings: mismo contenido y alturas en la comparación de assets (anterior a la edición paralela de puntuación); solo siete diferencias transitorias de posición inferiores a 0.35px en reveals de Special/tablet, sin cambio de CSS de layout. La compresión impide exigir igualdad byte a byte de screenshots.
- Logos/favicons conservados por hash y referencias verificadas en ambos builds; no se regeneraron por esta optimización. No hay metraje ni poster de video designado: no se afirma reproducción real ni validación visual de un video inexistente.
- Navegador utilizado: Chromium. No se declara validación en Safari físico. Las capturas/registros/recortes y scripts auxiliares están en /private/tmp/rsm-asset-optimization; los inventarios y resultados resumidos quedan versionables en docs.

## Excepciones y Shopify CDN

SVG oficiales y de favicon, PNG necesarios de marca/favicons/Apple, ICO y evidencia QA permanecen. No hay videos o WOFF2 locales a convertir. No se recomprimen WebP ya suficientes, no se amplían fotos de producto de menor resolución ni se generan archivos por cada breakpoint. Los dos masters grandes preservan la fuente de calidad para un uso futuro que justifique más resolución.

Shopify Product Media para catálogo; Collection Image o image_picker para portada PLP; Shopify Files e imágenes editables para Home/Historia/Special. image_url/image_tag, widths/sizes/srcset y focal points deberán producir variantes nativas según contenedor; los nombres públicos del prototipo no se convierten automáticamente en Theme Assets. Los masters, capturas y demos no se suben indiscriminadamente a assets del tema. Detalle de destinos por archivo: [inventario](ASSET_INVENTORY.md).

No se implementa Shopify ni se genera handoff definitivo. La aprobación comercial, los recursos Care pendientes y las decisiones editoriales documentadas siguen vigentes; optimizar un archivo no lo vuelve contenido aprobado.
