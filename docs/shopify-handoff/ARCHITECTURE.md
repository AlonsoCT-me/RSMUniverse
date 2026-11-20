# Arquitectura y fuentes

Corte documental: 2026-11-19, zona America/Mexico_City. Se analiza el working tree local, no se presume que el sitio publicado o GitHub tengan idéntico contenido. HEAD de referencia: `f89e54f1ebdf9bef9637862e434b595cd60cc7e5`. La generación inicial comenzó sin cambios de prototipo reportados por git. Ver [SOURCE_MANIFEST](SOURCE_MANIFEST.md) para hashes exactos.

## Archivos explorados

| Archivo | Responsabilidad |
|---|---|
| [package.json](../../package.json) + [pnpm-lock.yaml](../../pnpm-lock.yaml) | React/ReactDOM ^19, Vite ^8.0.5, TypeScript ^5.7, Tailwind ^4, plugin React ^6; pnpm lock. Sin Shopify SDK, router externo, icon library ni animation library. |
| [.mise.toml](../../.mise.toml), [DEPLOYMENT](../../DEPLOYMENT.md) | Node 22 y pnpm 10.34.3; documentación fija Node 22.22.3. |
| [src/main.tsx](../../src/main.tsx) | Monta App con StrictMode e importa index.css. |
| [src/App.tsx](../../src/App.tsx) | Tipos, array de productos, resolver de rutas y 37 componentes. Es el único archivo de implementación React de UI. |
| [src/index.css](../../src/index.css) | 681 bloques de reglas propios, incluyendo responsive y keyframes; ver referencia canónica. |
| [src/asset-url.ts](../../src/asset-url.ts) | Resuelve BASE_URL, conserva URLs absolutas/protocol-relative y evita duplicar base ya prefijada. No tiene estado ni fetch. |
| [src/vite-env.d.ts](../../src/vite-env.d.ts), [tsconfig](../../tsconfig.json) | Tipado Vite/TS, alias @ a src; target ES2020, JSX React. |
| [vite.config.ts](../../vite.config.ts) | base FIGMA_PUBLIC_URL primero; luego GITHUB_PAGES /RSMUniverse/; luego /. host 0.0.0.0, PORT o 8443, strictPort; preview mismo puerto por defecto. Plugins locales Figma implementados en este mismo archivo. |
| [index.html](../../index.html), [.figma/make/site.json](../../.figma/make/site.json) | Shell y metadatos: idioma es, título RSM Universe; robots.index false; bypass links false. Plugin siteConfiguration emite robots y etiquetas. No copiar noindex a producción sin decisión SEO. |
| [scripts/verify-images.mjs](../../scripts/verify-images.mjs) | Comprueba firmas PNG/JPEG/WebP y ausencia de punteros Git LFS en imágenes versionadas; no optimiza ni analiza UX. |
| [.github/actions/validate/action.yml](../../.github/actions/validate/action.yml) | Instala toolchain, imágenes, tsc --noEmit y build Pages. Vite build por sí solo no verifica tipos. |
| [.github/workflows/ci.yml](../../.github/workflows/ci.yml), [deploy-pages](../../.github/workflows/deploy-pages.yml) | CI PR develop/main; publicación Pages solo main; no relacionados con deploy Shopify. |
| [RSM_DESIGN_IMPLEMENTATION_SPEC](../../RSM_DESIGN_IMPLEMENTATION_SPEC.md) | Documento histórico contrastado; discrepancias en [DISCREPANCIES](DISCREPANCIES.md). |
| [AGENTS](../../AGENTS.md), [CLAUDE](../../CLAUDE.md) | Contexto Figma/React; no certifican servidor local ejecutándose por sí solos. |

No se encontraron hooks personalizados ni componentes externos a App. Los hooks React usados son useState, useEffect, useRef, useMemo y useCallback. Assets se distribuyen en public/assets, public/favicon.png y src/imports. Scripts/recursos internos de `.figma/make/` sirven al entorno de autoría, no al comercio; no migrarlos al tema.

## Árbol de render y estado

`main → App → Header → contenido de ruta → Footer (incluye Newsletter antes del footer) → CartDrawer`.

App posee page, selectedProductId, cartItems y cartOpen. addToCart agrupa por product.id, suma quantity y abre drawer. Contador y subtotal se derivan del array. No persiste tras recarga, no tiene eliminación, update de cantidad desde drawer, errores de stock ni checkout real. No hay fetch comercial. PDP recibe callback con el producto activo; relacionados reciben la misma función de Quick Add de Home/PLP.

Estados locales: menú Header; sort/filtro Collection; quantity ProductInfo; activeIndex ProductGallery; expanded Accordion/TerritoryCard; visible Reveal; activeStep CareScrollStory; email/sent Newsletter. Los efectos limpian listeners/observers salvo que el contrato específico indique otra cosa. StrictMode puede montar efectos dos veces en desarrollo: Shopify no tiene ese ciclo React.

## Rutas reales y destino propuesto

| Page key | Entrada actual | Vista / resolución | Destino Shopify propuesto |
|---|---|---|---|
| home | raíz / #/ | Home | / |
| collection | #/coleccion | Collection | /collections/<handle-verificado> |
| caliza | #/producto/caliza | alias rsm-super-cajeta | /products/<handle-verificado> |
| nocturna | #/producto/nocturna | alias rsm-special-edition-gamuza | /products/<handle-verificado> |
| special | #/special-edition | SpecialLanding | /pages/special-edition o collection alternativa: decisión pendiente |
| story | #/nuestra-historia | Story | /pages/nuestra-historia |
| care | #/pages/cuidado-de-gorras | CarePage | /pages/cuidado-de-gorras |
| system | #/design-system | DesignSystem | Solo documentación interna |
| compare | #/comparativa | Comparison | Solo documentación interna |


Además existen ocho entradas `#/producto/<product.id>`: cuatro Core → CorePdp, cuatro Special → NocturnaPdp. Nueve vistas/Page keys, 17 entradas concretas si se cuentan raíz, seis no-producto, dos alias y ocho handles. Un slug desconocido cae en Home; no hay 404 propia. Una ruta Shopify futura no conserva el hash: usar URLs de objetos/routes y localización del tema. No asumir `/en` para inglés.

[resolveRouteState](../../src/App.tsx#L394) resuelve aliases/handles y routeMap. [App](components/App.md) escribe location.hash, escucha hashchange y popstate, hace scroll arriba. **Care ya usa hash**, aunque el documento histórico diga pathname/pushState. No hay backend ni API de Shopify que portar.

## Lo confirmado y lo pendiente

Confirmado por lectura: comportamiento React, fuentes CSS, imágenes físicas, contratos locales del tema. Contexto comunicado: QA 187349401900, producción protegida 187330724140. No se han reconfirmado roles/remoto, catálogo real, configuración efectiva ni apps. Toda propuesta Shopify mantiene su estado hasta validación autorizada. Ver [PRESTIGE_AUDIT](PRESTIGE_AUDIT.md).
