# RSM Universe — Shopify Design & Development Handoff

Especificación del prototipo React de Rancho San Marco para transferir su diseño a **Shopify Prestige 11.4.1**, con prioridad nativa y personalización mínima. Corte: **2026-11-19**. Esta entrega es exclusivamente documental; no contiene implementación Shopify ni autorización de publicación.

**Cobertura:** 9 vistas, 37 componentes React, 8 productos y 34 imágenes físicas. Se extraen 681 bloques de reglas CSS con contexto y fuente. Hay 17 entradas de navegación concretas al contar los 8 handles de producto y 2 aliases dentro de las 9 familias de vista; no son 17 templates distintos.

Prototipo comunicado: [GitHub Pages](https://alonsoct-me.github.io/RSMUniverse/). Repositorio comunicado: [RSMUniverse](https://github.com/AlonsoCT-me/RSMUniverse). Las URLs no fueron accesibles mediante el navegador de investigación en esta sesión; la fuente de verdad de esta entrega es el checkout local identificado en SOURCE_MANIFEST. No se afirma paridad con el deployment remoto.

## Cómo consultar

1. Leer ARCHITECTURE, DESIGN_SYSTEM y DISCREPANCIES para distinguir composición vigente, cascada y decisiones pendientes.
2. Abrir la página que se implementará; seguir su ficha de componente para props/estados/inline y enlaces a las reglas CSS exactas.
3. Resolver imágenes en ASSETS y datos en CATALOG. No reinterpretar una foto como composición/material confirmado.
4. Revisar PRESTIGE_AUDIT y SHOPIFY_MAPPING antes de proponer archivos nuevos. Probar configuración nativa primero.
5. Usar SECTION_CONTRACTS solo si se demuestra una brecha, y VALIDATION para aceptación por región y flujo.

## Documentos

- [ARCHITECTURE.md](ARCHITECTURE.md) — Arquitectura, fuentes, rutas, estado y toolchain.
- [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) — Tokens, herencia, tipografía, layout, responsive y motion.
- [CSS_REFERENCE.md](CSS_REFERENCE.md) — Declaraciones CSS íntegras en orden con archivo/línea.
- [COMPONENTS.md](COMPONENTS.md) — Índice canónico de 37 componentes y dependencias.
- [CATALOG.md](CATALOG.md) — Ocho productos, valores provisionales y propuesta de datos.
- [ASSETS.md](ASSETS.md) — 34 imágenes, dimensiones, alt y contextos de uso.
- [PRESTIGE_AUDIT.md](PRESTIGE_AUDIT.md) — Contratos y schemas verificados de la copia local 11.4.1.
- [SHOPIFY_MAPPING.md](SHOPIFY_MAPPING.md) — 43 regiones de página y componentes globales.
- [SECTION_CONTRACTS.md](SECTION_CONTRACTS.md) — Propuestas condicionales de personalización, sin código.
- [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) — Ocho fases, dependencias y criterios de salida.
- [DISCREPANCIES.md](DISCREPANCIES.md) — 26 diferencias, decisiones pendientes y riesgos.
- [SOURCE_MANIFEST.md](SOURCE_MANIFEST.md) — Hashes y revisión del prototipo/tema de referencia.
- [VALIDATION.md](VALIDATION.md) — Resultados documentales y protocolo de aceptación futura.
- [CHANGELOG.md](CHANGELOG.md) — Generación inicial, decisiones y mantenimiento histórico.

## Páginas

- [CARE](pages/CARE.md).
- [COLLECTION](pages/COLLECTION.md).
- [COMPARISON](pages/COMPARISON.md).
- [DESIGN_SYSTEM](pages/DESIGN_SYSTEM.md).
- [HOME](pages/HOME.md).
- [OUR_STORY](pages/OUR_STORY.md).
- [PRODUCT](pages/PRODUCT.md).
- [PRODUCT_SPECIAL](pages/PRODUCT_SPECIAL.md).
- [SPECIAL_EDITION](pages/SPECIAL_EDITION.md).

## Fichas de componentes

- [Accordion](components/Accordion.md).
- [App](components/App.md).
- [CareIllustration](components/CareIllustration.md).
- [CareMaterialAccordion](components/CareMaterialAccordion.md).
- [CarePage](components/CarePage.md).
- [CareScrollStory](components/CareScrollStory.md).
- [CareStep](components/CareStep.md).
- [CartDrawer](components/CartDrawer.md).
- [Collection](components/Collection.md).
- [Comparison](components/Comparison.md).
- [CorePdp](components/CorePdp.md).
- [DesignSystem](components/DesignSystem.md).
- [EditorialImageText](components/EditorialImageText.md).
- [EditorialIntro](components/EditorialIntro.md).
- [EditorialSplitSection](components/EditorialSplitSection.md).
- [Footer](components/Footer.md).
- [Header](components/Header.md).
- [Home](components/Home.md).
- [Icon](components/Icon.md).
- [ImagePlaceholder](components/ImagePlaceholder.md).
- [Newsletter](components/Newsletter.md).
- [NocturnaPdp](components/NocturnaPdp.md).
- [ProductCard](components/ProductCard.md).
- [ProductGallery](components/ProductGallery.md).
- [ProductInfo](components/ProductInfo.md).
- [Quantity](components/Quantity.md).
- [Reveal](components/Reveal.md).
- [SectionHeading](components/SectionHeading.md).
- [SpecialEditionDetails](components/SpecialEditionDetails.md).
- [SpecialEditionHero](components/SpecialEditionHero.md).
- [SpecialEditionProductCTA](components/SpecialEditionProductCTA.md).
- [SpecialLanding](components/SpecialLanding.md).
- [Story](components/Story.md).
- [TerritoryCard](components/TerritoryCard.md).
- [TerritoryEditorialBanner](components/TerritoryEditorialBanner.md).
- [TerritoryGrid](components/TerritoryGrid.md).
- [TextLink](components/TextLink.md).

## Jerarquía y estados de evidencia

- **Hecho React/CSS:** observado directamente en archivo, selector, props o datos del checkout; línea y hash trazables.
- **Código local Prestige:** capacidad/schema observado en copia local 11.4.1; no prueba de render ni settings efectivos.
- **Contexto comunicado:** prototipo aprobado y entornos indicados por responsable; no se reconfirman permisos/roles remotos aquí.
- **Propuesta:** solución, recurso, template o contrato futuro; no existe por estar escrito aquí.
- **Pendiente:** requiere datos oficiales, decisión de diseño, acceso autorizado a editor o prueba en QA.

El código vigente prevalece descriptivamente frente a documentación anterior. Una discrepancia no autoriza corregir diseño ni publicar datos; registrar decisión antes de implementar. La identidad de marca conserva su jerarquía aprobada, documentada en el checkout Shopify; no se elevan neutrales de interfaz a colores oficiales ni mock data a especificaciones comerciales.

## Decisiones arquitectónicas

1. Native First + RSM Custom Layer: configurar primero, reutilizar después, extender solo ante brecha. No copiar el sitio React a Custom Liquid ni instalar React en Shopify.
2. Conservar motores Prestige de compra, variantes, galería, filtros, formularios, búsqueda y carrito. No contador/cart state paralelo ni APIs de Shopify dentro del prototipo.
3. Nuevos archivos propios con prefijo rsm- y selectores acotados; no reemplazar Core. Cualquier excepción Core necesita propuesta concreta y autorización en otra tarea.
4. Contenido editable con secciones/bloques/recursos y fuentes dinámicas. Metafields solo tras definir modelo y confirmar contenido; metaobjects solo ante reutilización real.
5. Preservar es/en, traducciones existentes, rutas localizadas, SEO y mecanismos de accesibilidad del tema. No suponer que inglés vive siempre en /en.
6. QA comunicado 187349401900; producción protegida 187330724140. No se ejecutaron conexiones, theme dev/pull/push/publish ni operaciones de tienda/GitHub. QA comparte catálogo/apps/idiomas; editar datos requiere alcance propio.
7. config/settings_data.json no se copia, crea, sustituye ni versiona. Defaults de schema no son configuración de QA.

## Confirmado y pendiente

Confirmados: árbol de render, catálogo mock, Quick Add simulado, media y estilos reales, componentes ocultos y contratos locales de Prestige. Pendientes: precios/medidas/materiales/stock reales, campos Shopify ya existentes, colección/handles, imágenes editoriales placeholder, intención de CTAs/gap/ocultos, reproducción exacta con editor, carga de capa visual de ProductCard sin Core, configuración de apps/idiomas y paridad remoto/local.

Copia de tema consultada en solo lectura: `/Users/alonsoct/Sites/shopify/rsm-shopify`. Los paths de evidencia del tema en PRESTIGE_AUDIT se resuelven contra esa raíz; en otro equipo localizar ese checkout y verificar hashes/versión. Ninguna ficha depende de esta conversación para conocer límites, datos o pendientes.

## Mantenimiento y sincronización

La sincronización es **manual**; ni React ni Prestige actualizan estos Markdown automáticamente.

1. Identificar diffs por archivo/componente: revisar git diff de App.tsx, index.css, asset-url.ts, public/assets, imports y configuración. Registrar revisión/hashes del nuevo corte; no usar números de línea antiguos como identificadores permanentes.
2. Para CSS, actualizar tokens/rol/herencia en DESIGN_SYSTEM y reglas/contexto/orden de CSS_REFERENCE. Si se mueve una regla, actualizar sus referencias en todas las fichas; mantener IDs coherentes o revalidar enlaces tras renumerarlos.
3. Actualizar una sola ficha canónica del componente: props, dependencias, consumers, estado, inline, media, responsive y accesibilidad. No copiar su detalle completo a cada página.
4. Actualizar páginas afectadas: orden/visibilidad, composición, CTAs, datos, criterios de aceptación. Añadir rutas nuevas a ARCHITECTURE e índice; distinguir alias de vista nueva.
5. Actualizar ASSETS con dimensiones/bytes/alt y usos nuevos; no confundir archivo sin uso con asset a eliminar. CATALOG mantiene valores y estado de confirmación por campo.
6. Contrastar en la versión real de Prestige settings/snippets/eventos antes de promover propuesta a verificada. Ajustar SHOPIFY_MAPPING/SECTION_CONTRACTS/IMPLEMENTATION_PLAN y registrar decisión con evidencia.
7. Resolver o añadir Dxx en DISCREPANCIES y Axx en CHANGELOG. Anotar responsable/fecha/resultado; no borrar pendientes solo porque “parecen resueltos”.
8. Revalidar links, anchors, fuentes, inventarios, números y hashes. Confirmar que el cambio se limita al alcance autorizado y escribir resultados en VALIDATION.

Para una implementación futura, leer también AGENTS.md y documentación de operación del checkout Shopify; esta carpeta especifica diseño y contratos, no sustituye sus controles de QA/despliegue.

## Árbol de archivos generado

```text
docs/shopify-handoff/
├── ARCHITECTURE.md
├── ASSETS.md
├── CATALOG.md
├── CHANGELOG.md
├── COMPONENTS.md
├── CSS_REFERENCE.md
├── DESIGN_SYSTEM.md
├── DISCREPANCIES.md
├── IMPLEMENTATION_PLAN.md
├── PRESTIGE_AUDIT.md
├── README.md
├── SECTION_CONTRACTS.md
├── SHOPIFY_MAPPING.md
├── SOURCE_MANIFEST.md
├── VALIDATION.md
├── components/
│   ├── Accordion.md
│   ├── App.md
│   ├── CareIllustration.md
│   ├── CareMaterialAccordion.md
│   ├── CarePage.md
│   ├── CareScrollStory.md
│   ├── CareStep.md
│   ├── CartDrawer.md
│   ├── Collection.md
│   ├── Comparison.md
│   ├── CorePdp.md
│   ├── DesignSystem.md
│   ├── EditorialImageText.md
│   ├── EditorialIntro.md
│   ├── EditorialSplitSection.md
│   ├── Footer.md
│   ├── Header.md
│   ├── Home.md
│   ├── Icon.md
│   ├── ImagePlaceholder.md
│   ├── Newsletter.md
│   ├── NocturnaPdp.md
│   ├── ProductCard.md
│   ├── ProductGallery.md
│   ├── ProductInfo.md
│   ├── Quantity.md
│   ├── Reveal.md
│   ├── SectionHeading.md
│   ├── SpecialEditionDetails.md
│   ├── SpecialEditionHero.md
│   ├── SpecialEditionProductCTA.md
│   ├── SpecialLanding.md
│   ├── Story.md
│   ├── TerritoryCard.md
│   ├── TerritoryEditorialBanner.md
│   ├── TerritoryGrid.md
│   ├── TextLink.md
└── pages/
    ├── CARE.md
    ├── COLLECTION.md
    ├── COMPARISON.md
    ├── DESIGN_SYSTEM.md
    ├── HOME.md
    ├── OUR_STORY.md
    ├── PRODUCT.md
    ├── PRODUCT_SPECIAL.md
    ├── SPECIAL_EDITION.md
```
