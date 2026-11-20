# CARE

**Ruta:** care · #/pages/cuidado-de-gorras. **Componente:** [CarePage](../components/CarePage.md). **Fuente:** [App:2258–2467](../../../src/App.tsx#L2258).

## A. Estructura y composición por orden de render

Todas las vistas se envuelven con Header antes del main y Footer (Newsletter incluida) después; CartDrawer es global al final. Sus estilos/estados no se duplican aquí. Las filas marcadas OCULTO existen en árbol React pero no en layout visible; comentarios JSX no renderizan.

| Orden / sección | B. Composición exacta | C. Comportamiento | D. Shopify: propuesta y estado | E. Aceptación específica |
|---|---|---|---|---|
| 1 · Hero | .care-hero min690 height min860/100svh; placeholder Sierra corner; overlay .76→.08; title clamp64–120/.78; content bottom13%. | Continuar→care-intro; matchMedia reduced motion. | image-with-text-overlay; falta imagen editorial final. | CTA al intro y fotografía final pendiente identificada. |
| 2 · Intro + marquee | Caliza, padding-top clamp100–160; center; heading clamp50–94/.86; p max680; marquee border/margin80–130, 24s linear infinite y dos spans repetidos aria-hidden. | Marquee decorativo no aporta información única. | rich-text + scrolling-content: verificar scroll nativo; ajustes solo si timing/apariencia no configurables. | Reduced motion detiene marquee; copy sin lectura duplicada. |
| 3 · Cuidado cotidiano | .care-everyday__inner grid2fr/3fr gap clamp48–110; padding100–160; media6/5 placeholder Horizonte; tres bullets. | Texto genérico orientativo. | image-with-text + richtext; imagen autorizada pendiente. | Orden copy→media; bullets y contenidos traducibles. |
| 4 · CareScrollStory | .care-story dark padding110–170; layout .82fr/1fr gap60–130; visual sticky top94; ilustración cuadrada; 5 pasos min70vh. | Observer y selección directa sincronizan SVG/active; rootMargin -35% y thresholds.05/.2/.4; cleanup. | rsm-cap-care-steps: brecha funcional confirmada respecto a richtext/FAQ; sección propia propuesta. | Cinco pasos, scroll/tap/teclado equivalentes; sin saltos de sticky ni traps; funciona tras reload del editor. |
| 5 · Conservación | .care-storage__inner grid3fr/2fr; media primero6/5 placeholder Estirpe; copy y TextLink. | Explorar colección→collection. | image-with-text con image_position left y bloque link. | No invertir DOM/lectura sin revisar nativo; mobile imagen antes del texto. |
| 6 · Según composición | .care-information__grid dos columnas, heading sticky; cinco CareMaterialAccordion wrappers. | Algodón; Poliéster; Malla; Parches/bordados; Ante/gamuza/cuero cuando aplique. Son categorías orientativas, no composición del catálogo. | faq/accordion con heading/richtext y grupos; datos oficiales prioritarios. | Expandir/cerrar, nombres accesibles y foco; sin convertir categorías en claims del producto. |
| 7 · FAQ | .care-faq dark; heading y acordeones oscuros. | Cinco preguntas de cuidados (lavadora, forma, humedad, bordado, almacenamiento); contenido exacto en fuente. | faq con color_scheme; bloques question/answer verificados en schema. | Validar contrastes y contenido aprobado por fabricante. |
| 8 · CTA final | .care-cta center con eyebrow, H2, párrafo y botón. | Explorar colección→collection. | rich-text con button. | Destino correcto; no crear checkout ni formulario nuevo. |

## Responsive y cascada

<=900: everyday/storage1col gap52, imagen4/3; story1col; sticky top68 con fondoDark y padding16; ilustración16/10 máx300; steps60vh; information/FAQ1col gap56. <=540: hero min700 y título48–62; H2 45; editoriales padding88/media1:1; story padding90; ilustración16/9 máx230; nav horizontal32px; step62svh, button45/1fr gap12 padding70; H3 36/body13; acordeones min68/font19.

Los valores generales y todos los overlays están en [Design System](../DESIGN_SYSTEM.md); la ficha del componente enlaza cada regla CSS base y media query con línea de origen. [CSS_REFERENCE](../CSS_REFERENCE.md) es el detalle íntegro de spacing, color, tipografía, bordes y estados. Para assets/dimensiones/alt, consultar [ASSETS](../ASSETS.md). No inferir valores de screenshots.

## Shopify y datos editables

Destino potencial: `templates/page.cuidado-de-gorras.json (propuesta)`. Settings y bloques mencionados se verifican en [PRESTIGE_AUDIT](../PRESTIGE_AUDIT.md); su existencia está confirmada en código local, pero el resultado configurado en QA y la equivalencia visual están pendientes. Imágenes, copy, heading tag, CTA/URL, posiciones y color_scheme deben permanecer editables donde el schema nativo lo permita. No agregar un setting por cada píxel. Productos, precios, variantes y media provienen de objetos Shopify; atributos editoriales confirmados mediante fuentes dinámicas. No inferir nombres de bloques o settings no enumerados en la auditoría.

## Verificación por sección

Ejecutar las aceptaciones de cada fila en 1440,1024,768,430,390,375px; comparar cada región con misma fuente/fotos/copy y fuente cargada. Comprobar tabulación, foco, lectores/etiquetas, mobile touch, reduced motion, zoom y es/en. Mantener rutas Shopify localizadas y validar enlace directo/atrás/recarga. La inspección documental actual no certifica QA remoto ni aprobación de una corrección de las discrepancias. Ver [VALIDATION](../VALIDATION.md) y [DISCREPANCIES](../DISCREPANCIES.md).
