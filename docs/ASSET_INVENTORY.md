# Inventario definitivo de assets — RSM Universe

Auditoría local del 24 de noviembre de 2026. Registro del árbol de trabajo, **no del tamaño histórico de Git/Git LFS**. Incluye imágenes públicas, imports de src, maestros no públicos, SVG/ICO y evidencia QA. Excluye node_modules, .git y builds generados, que se miden aparte.

Fuente completa para cada archivo: [asset-inventory.json](asset-inventory.json), con nombre/ruta, formato real, dimensiones, relación de aspecto, bytes, transparencia, SHA-256 completo, páginas observadas, componentes, referencias con archivo/línea/expresión, estado de uso, optimización, duplicados exactos/visuales y destino Shopify propuesto. Incluye inventario inicial, parámetros de conversión, respaldo verificable y trazabilidad de rutas retiradas.

La tabla muestra hashes abreviados solo para lectura; el JSON contiene los 64 caracteres. Referencias operativas son las de TSX/TS/SCSS/CSS/HTML y configuración real; una mención en Markdown no activa un asset. Las páginas se contrastaron además mediante recursos solicitados en Chromium, después de recorrer el documento para activar lazy loading. CSS de módulos ocultos y fallbacks pueden tener referencia sin descarga observada: **no se infiere obsolescencia de la ausencia de una petición**.

## Resumen

- 77 archivos gráficos, 46,904,130 bytes, incluidos los dos maestros preservados de 28,431,791 bytes y las 23 capturas históricas.
- 34 WebP; ocho conversiones nuevas y 26 WebP existentes sin recomprimir.
- 38 archivos con referencia operativa directa y 39 sin ella; en estos últimos hay evidencia QA, branding, fuentes maestras, variantes reservadas y fallbacks, no 39 archivos para borrar.
- Dos grupos exactos permanecen dentro de public/logo, preservados por la excepción de marca; tres copias redundantes fuera de esa carpeta se retiraron.
- Cero archivos de video o fuentes locales; las familias se cargan externamente mediante la configuración existente. No se cambia esa estrategia.

## Inventario por archivo

D = dimensiones reales del archivo, no tamaño CSS ni recomendación de entrega. La columna uso conserva las excepciones aunque no haya referencia activa. El JSON aporta todos los consumidores y referencias, incluidas las documentales.

| Ruta | Formato / D / ratio | Bytes | Transparencia | SHA-256 (12) | Páginas observadas o rol | Estado / optimización |
|---|---|---:|---|---|---|---|
| `public/assets/collection-hero-caps.webp` | WEBP · 1708×921 · 1.8545 | 485,128 | No | `105c965674d2` | collection | referencia operativa detectada; WebP q88 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/home-collection-bg.webp` | WEBP · 3200×1800 · 1.7778 | 611,450 | No | `5c4bdaec54af` | home | referencia operativa detectada; WebP existente conservado |
| `public/assets/home-hero.webp` | WEBP · 1672×941 · 1.7768 | 241,488 | No | `4f70aa9491b3` | home | referencia operativa detectada; WebP existente conservado |
| `public/assets/home-history-banner.webp` | WEBP · 1961×802 · 2.4451 | 386,506 | No | `8e7012367fa0` | home | referencia operativa detectada; WebP existente conservado |
| `public/assets/home-sin-fronteras-city.webp` | WEBP · 1600×554 · 2.8881 | 129,800 | No | `9ae6ba8b14c2` | home | referencia operativa detectada; WebP q90 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/home-sin-fronteras.jpeg` | JPEG · 1600×554 · 2.8881 | 222,156 | No | `1c33f4755984` | fotografía editorial / reserva | sin referencias operativas detectadas; original de variante cromática reservado; no fusionar |
| `public/assets/home-sin-fronteras.webp` | WEBP · 3200×2387 · 1.3406 | 677,740 | No | `5b34a91115ec` | story | referencia operativa detectada; WebP existente conservado |
| `public/assets/home-special-edition.webp` | WEBP · 3200×960 · 3.3333 | 180,340 | No | `ed4efea9b6c8` | fotografía editorial / reserva | sin referencias operativas detectadas; WebP existente conservado |
| `public/assets/rsm-blue.webp` | WEBP · 1362×1155 · 1.1792 | 228,796 | No | `11a7a6db6766` | caliza, collection, home, system | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-militar.webp` | WEBP · 1362×1155 · 1.1792 | 272,882 | No | `f85d7e58722a` | caliza, collection, home, system | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-cap.webp` | WEBP · 1600×900 · 1.7778 | 153,158 | No | `9b3476a4a0da` | home, special | referencia operativa detectada; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/rsm-special-edition-gamuza-back.webp` | WEBP · 1536×1024 · 1.5000 | 209,814 | No | `1048f1131271` | nocturna | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-gamuza-front.webp` | WEBP · 1536×1024 · 1.5000 | 229,854 | No | `a109721ad979` | collection, nocturna, system | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-gamuza-side.webp` | WEBP · 1535×1024 · 1.4990 | 209,478 | No | `c7b45a1177d3` | nocturna | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-gamuza.webp` | WEBP · 1536×1024 · 1.5000 | 220,760 | No | `7656ff52eab0` | collection, nocturna, special, system | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-leather-brown.webp` | WEBP · 1523×1033 · 1.4743 | 291,126 | No | `91cdc613cdad` | collection, special | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-pipes.webp` | WEBP · 1536×1024 · 1.5000 | 240,636 | No | `69a8622f0c08` | collection, special | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-special-edition-red.webp` | WEBP · 1536×1024 · 1.5000 | 232,204 | No | `2bf2583a2679` | collection, special | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-back.webp` | WEBP · 1536×1024 · 1.5000 | 311,424 | No | `8fd959d8ce08` | caliza | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-front.webp` | WEBP · 1362×1155 · 1.1792 | 236,408 | No | `9f42832b54ba` | caliza, collection, home | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-side-b.webp` | WEBP · 1536×1024 · 1.5000 | 353,082 | No | `0a103dd521c3` | caliza | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta-up.webp` | WEBP · 1086×1448 · 0.7500 | 552,590 | No | `5dd232c8488a` | caliza | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-super-cajeta.webp` | WEBP · 1362×1155 · 1.1792 | 275,260 | No | `fff476377cb8` | caliza, collection, home | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/rsm-wine.webp` | WEBP · 1362×1155 · 1.1792 | 257,166 | No | `9d1852c3b383` | caliza, collection, home | referencia operativa detectada; WebP existente conservado; no recomprimido |
| `public/assets/special-edition-suede-emblem.webp` | WEBP · 1024×1536 · 0.6667 | 345,068 | No | `59979c0075c1` | special | referencia operativa detectada; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/special-edition-suede-finish.webp` | WEBP · 1024×1536 · 0.6667 | 251,210 | No | `3da4ca3f61c9` | special | referencia operativa detectada; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/special-edition-suede-material.webp` | WEBP · 1024×1536 · 0.6667 | 230,664 | No | `7ce31f0a6b5a` | special | referencia operativa detectada; WebP q92 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/story-city.webp` | WEBP · 1972×798 · 2.4712 | 183,420 | No | `81229b44b7e1` | story | referencia operativa detectada; WebP existente conservado |
| `public/assets/story-hero.webp` | WEBP · 1961×802 · 2.4451 | 397,958 | No | `cba3270b1c05` | story | referencia operativa detectada; WebP existente conservado |
| `public/assets/story-origin-appaloosa.webp` | WEBP · 1672×941 · 1.7768 | 372,808 | No | `7cbe7fe21d5c` | story | referencia operativa detectada; WebP q90 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/story-origin-courtyard.webp` | WEBP · 1672×941 · 1.7768 | 461,586 | No | `7612d85a6ed0` | story | referencia operativa detectada; WebP q88 / m6 / sharp_yuv; dimensiones conservadas |
| `public/assets/story-origin.webp` | WEBP · 1835×857 · 2.1412 | 604,082 | No | `22c35b446747` | story | referencia operativa detectada; WebP existente conservado |
| `public/assets/story-territory-architecture.webp` | WEBP · 1201×1309 · 0.9175 | 536,880 | No | `4d97246c5014` | story | referencia operativa detectada; WebP existente conservado |
| `public/assets/story-territory-door-provisional.webp` | WEBP · 216×281 · 0.7687 | 16,052 | No | `31506d851565` | fotografía editorial / reserva | sin referencias operativas detectadas; WebP existente conservado; 216×281, no ampliar; pendiente de aprobación |
| `public/assets/story-territory-horse.webp` | WEBP · 1193×1319 · 0.9045 | 512,660 | No | `adb6f03eff4e` | fotografía editorial / reserva | sin referencias operativas detectadas; WebP existente conservado |
| `public/favicon.png` | PNG · 96×96 · 1.0000 | 2,410 | Sí | `e83dfb12d209` | legado reservado | sin referencias operativas detectadas; sin conversión; no se demostró obsolescencia segura |
| `public/logo/RSM-logo-black.png` | PNG · 780×300 · 2.6000 | 9,801 | Sí | `ae6ad444e12c` | caliza, collection, compare, system | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM-logo-white.png` | PNG · 780×300 · 2.6000 | 10,501 | Sí | `a57bd43bd2b6` | caliza, care, collection, compare, home, nocturna, special, story, system | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM_logo.svg` | SVG · 338×338 · 1.0000 | 7,770 | Sí | `59306223a2db` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM_logo_blanco.png` | PNG · 780×300 · 2.6000 | 10,501 | Sí | `a57bd43bd2b6` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM_logo_blanco.svg` | SVG · 338×338 · 1.0000 | 7,770 | Sí | `42464ad028b6` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/RSM_logo_negro.png` | PNG · 780×300 · 2.6000 | 9,801 | Sí | `ae6ad444e12c` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/apple-touch-icon.png` | PNG · 180×180 · 1.0000 | 9,252 | No | `1b94a8cc347e` | branding oficial / favicon | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-16x16.png` | PNG · 16×16 · 1.0000 | 439 | Sí | `cda5b9e4e676` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-32x32.png` | PNG · 32×32 · 1.0000 | 984 | Sí | `b446cad8ae83` | branding oficial / favicon | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-dark-32x32.png` | PNG · 32×32 · 1.0000 | 1,057 | Sí | `24accc30f9c9` | branding oficial / favicon | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-dark.svg` | SVG · 204×204 · 1.0000 | 7,777 | Sí | `705be2fff3b4` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon-light.svg` | SVG · 204×204 · 1.0000 | 7,777 | Sí | `62895bf7b488` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon.ico` | ICO · 48×48 · 1.0000 | 3,039 | Sí | `8263449d4ac6` | branding oficial / favicon | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/favicon.svg` | SVG · 204×204 · 1.0000 | 7,921 | Sí | `9589da05cca4` | branding oficial / favicon | referencia operativa detectada; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/rsm-black-logo-iso.png` | PNG · 338×338 · 1.0000 | 2,471 | Sí | `e0298909676a` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `public/logo/rsm-white-logo-iso.png` | PNG · 2400×1792 · 1.3393 | 4,004,650 | No | `2ce48bdd77cc` | branding oficial / favicon | sin referencias operativas detectadas; excepción PNG/SVG/ICO; conservado byte a byte |
| `docs/mobile-responsive-evidence/caliza-320-y900.png` | PNG · 320×900 · 0.3556 | 38,381 | No | `b56d949bc9a2` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/care-320-y2700.png` | PNG · 320×900 · 0.3556 | 46,322 | No | `9a752ad39fd5` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/compare-320.png` | PNG · 320×900 · 0.3556 | 53,436 | No | `c081edc8c52c` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/home-320-y900.png` | PNG · 320×900 · 0.3556 | 406,208 | No | `51fbf5b5980e` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/home-541-y1800.png` | PNG · 541×900 · 0.6011 | 356,423 | No | `55162721604d` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/nocturna-320-y900.png` | PNG · 320×900 · 0.3556 | 38,667 | No | `cfcecdba9bff` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b/caliza-320-y900.png` | PNG · 320×900 · 0.3556 | 48,207 | No | `120e50acf0e6` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b/care-320-y2700.png` | PNG · 320×900 · 0.3556 | 46,175 | No | `7a5581379e24` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b/home-320-y900.png` | PNG · 320×900 · 0.3556 | 406,237 | No | `2c60148550ac` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b/nocturna-320-y900.png` | PNG · 320×900 · 0.3556 | 47,727 | No | `c0936464d508` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/caliza-320-y900.png` | PNG · 320×900 · 0.3556 | 47,366 | No | `cdafe49d4258` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/care-320-y8100.png` | PNG · 320×900 · 0.3556 | 49,742 | No | `9a9f454e2abb` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/care-320-y900.png` | PNG · 320×900 · 0.3556 | 62,474 | No | `52d2b8346fe2` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/care-320-y9000.png` | PNG · 320×900 · 0.3556 | 33,904 | No | `edd5f113178b` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/compare-320.png` | PNG · 320×900 · 0.3556 | 50,636 | No | `0d3057976418` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/home-320-y900.png` | PNG · 320×900 · 0.3556 | 401,257 | No | `f753d0e2dcc5` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/home-320.png` | PNG · 320×900 · 0.3556 | 396,185 | No | `d4737a7f66cf` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3b-p2/system-320-y900.png` | PNG · 320×900 · 0.3556 | 26,632 | No | `bb5739443dcb` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3c/after-caliza-320-y1800.png` | PNG · 320×900 · 0.3556 | 42,046 | No | `dd8508cae41b` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3c/after-story-320-y1800.png` | PNG · 320×900 · 0.3556 | 293,349 | No | `98a077a55f1f` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3c/before-caliza-320-y1800.png` | PNG · 320×900 · 0.3556 | 42,079 | No | `946818fde480` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/phase-3c/before-story-320-y1800.png` | PNG · 320×900 · 0.3556 | 293,833 | No | `30db75121d29` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `docs/mobile-responsive-evidence/system-320-y900.png` | PNG · 320×900 · 0.3556 | 19,498 | No | `94d577f9278d` | evidencia QA | sin referencias operativas detectadas; PNG histórico preservado |
| `asset-masters/collection-background-7680x4320.png` | PNG · 7680×4320 · 1.7778 | 21,510,162 | No | `03f4a8c1741b` | fuente Home | sin referencias operativas detectadas; movido íntegro; fuera de builds |
| `asset-masters/story-territory-landscape-7680x5728.jpg` | JPEG · 7680×5728 · 1.3408 | 6,921,629 | No | `e69a8999f572` | fuente Historia | sin referencias operativas detectadas; movido íntegro; fuera de builds |

## Uso, reservas y duplicados

- **Duplicado confirmado:** copias retiradas de rsm-logo-dark/white en public/assets y WhatsApp_Image en src/imports; sus canónicos y respaldos están en el reporte. Los aliases oficiales iguales de public/logo se conservan íntegros por restricción expresa de marca.
- **Obsoleto confirmado:** ninguno. No se elimina un original solo por no encontrar un consumidor actual.
- **Reservado / pendiente de aprobación:** home-special-edition.webp, story-territory-horse.webp, story-territory-door-provisional.webp, home-sin-fronteras.jpeg y public/favicon.png. La puerta provisional mide 216×281: no se amplía ni se presenta como original final.
- **Caso ambiguo:** home-history-banner.webp y story-hero.webp son muy similares (dHash igual), pero contienen diferencias de codificación/color; se retienen ambas. El JPEG home-sin-fronteras.jpeg tiene otra gradación y no sustituye al actual home-sin-fronteras-city.webp.
- **Maestros:** collection-background-7680x4320.png y story-territory-landscape-7680x5728.jpg están fuera de public y de los imports; no se redujo ni alteró ninguno. Sus WebP ya existentes se reutilizan para web.
- **Branding oficial:** SVG, PNG, ICO y Apple Touch Icon permanecen byte a byte como al inicio de esta tarea, incluidos los ajustes locales previos del usuario.
- **Evidencia QA:** 23 PNG conservados, sin conversión con pérdida; pertenecen al historial de validación, no al inventario comercial a subir a Shopify.

Las fotografías pueden ser técnicamente válidas y seguir pendientes de aprobación comercial; este inventario no aprueba nombres, materiales, derechos o promociones.

## Preparación para Shopify

| Recurso | Destino propuesto | Criterio |
|---|---|---|
| 15 archivos de galería de los 8 modelos | Shopify Product Media | Asociación al producto/variante comercial real. Reutilizar la misma fuente para card y PDP, sin subir copias por breakpoint. |
| collection-hero-caps.webp | Collection Image o imagen configurable del banner | Decidir quién administra la portada; no usar un fondo de Home por confusión de nombre. |
| Home, Historia y detalles Special | Shopify Files + image_picker | Sección editable, focal point y alt revisados; se puede reutilizar una foto en varios módulos. |
| Maestros fuera de public | Archivo fuente / Shopify Files si una necesidad de resolución lo exige | No trasladarlos automáticamente a assets del tema. Mantener originales y generar variantes desde el CDN. |
| Logos / favicon / iconos de interfaz | Configuración nativa o Theme Asset justificado | Conservar geometría/vector; respetar formatos necesarios. SVG adaptable del prototipo no autoriza un hook global. |
| Capturas QA, demos y provisionales | Exclusivo del prototipo / pendiente | No importarlos como fotos de catálogo ni material editorial final. |

En Shopify, image_url selecciona la anchura y image_tag puede producir el marcado responsive; widths, sizes y srcset se deben derivar del ancho real del contenedor. El focal point del image_picker/CDN sustituye crops manuales cuando sea adecuado. Reservar proporciones con width/height; loading y fetchpriority dependen de si el medio es LCP o está fuera del viewport. No aplicar lazy indiscriminadamente al hero visible ni elevar la prioridad de todo el catálogo. Son criterios futuros, **no cambios de carga implementados en este prototipo**.

No se implementa Liquid ni se contacta Shopify. Selección comercial y faltantes del cliente: [CLIENT_CONTENT_REQUIREMENTS.md](CLIENT_CONTENT_REQUIREMENTS.md). Parámetros, métricas, respaldo y pruebas: [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md). Maestros: [README](ASSET_MASTERS.md).
