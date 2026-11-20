# SPECIAL EDITION

**Ruta:** special · #/special-edition. **Componente:** [SpecialLanding](../components/SpecialLanding.md). **Fuente:** [App:1593–1644](../../../src/App.tsx#L1593).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · SpecialEditionHero | .se-hero min720 height min920/100svh; JPEG cover60% center; overlay .86→.16; content bottom25%; eyebrow serif clamp38–64; H1 clamp92–120/.72/-.055em. | CTA scroll special-editorial; respeta reduced motion; Reveal. | image-with-text-overlay: hero/posición/scheme/heading/button; ancla editable si native setting acepta URL con fragmento. | Imagen macro correcta y titulo Estirpe de lujo; foco y scroll con movimiento reducido. |
| 2 · EditorialIntro | #special-editorial .se-intro padding clamp120–190; fondo#141311; center; H2 clamp58–104/.84. | Eyebrow y descripción sr-only; visible Inspiración en la penumbra; Reveal. | rich-text: heading, scheme, ancho y spacing. | No convertir Nocturna sr-only en catálogo ni único producto. |
| 3 · SpecialEditionDetails | .se-presentation padding clamp100–150; grid4 gap20; cards imagen4/3 contain, nombre clamp22–28/1.05, shortDescription13/1.65 y TextLink. | 4 productos: Gamuza, Leather Brown, Pipes, Red; CTA/media/nombre llevan su ID. Sin Quick Add/precio. | Primero colección Special + featured-collections/multi-column; si bloque nativo no admite producto+descripción, rsm-special-product-grid justificado. | Iterar fuente dinámica, mantener orden e imagen/nombre/shortDescription correctos para todos; no hardcodear Nocturna. |
| 4 · Story editorial | .se-story.shell padding-bottom clamp120–190; heading center padding90–140, border topwhite.13; 3 EditorialImageText. | Primero Emblema, luego Materiales reverse, luego Ajuste; placeholders Estirpe/Sierra/Horizonte; Reveal. | Tres image-with-text alternadas con heading introductorio rich-text; imagen/settings por bloque o sección. | Orden 1/2/3 y alternancia; mobile media→copy para ambos sentidos; no afirmar materiales técnicos no confirmados. |
| 5 · Lifestyle OCULTO | .se-lifestyle.hidden, placeholder dark y overlay. | display:none; no ocupa espacio. | No incluir inicialmente. | No publicar módulo oculto por existir en fuente. |
| 6 · ProductCTA OCULTO | SpecialEditionProductCTA raíz hidden; placeholder Nocturna. | No visible; default Special si se reactivara CTA. | No implementar; product picker solo ante reactivación aprobada. | No reducir landing multi-producto a Gamuza por alias histórico. |

## Responsive y cascada

<=900: cards2 gap28/16; hero contenido left/right24; detail gap42. <=540: hero min720/focal58%, content bottom9%; eyebrow33 y H1 clamp70–94; intro100px, H2 49; cards1 gap48/padding80–100; heading editorial left; details una columna media→copy, gap34, padding55–80 y H3 45.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/page.special-edition.json (propuesta)`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

Los datos comerciales se definen en [CATALOG](../CATALOG.md); no publicar precios, medidas ni materiales provisionales.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
