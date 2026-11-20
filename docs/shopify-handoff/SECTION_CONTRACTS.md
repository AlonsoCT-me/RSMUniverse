# Contratos de personalización propuestos

**Solo especificación; no se crean Liquid/CSS/JS ni settings remotos.** Configuración nativa primero. Las propuestas se activan únicamente cuando una prueba con los controles inspeccionados demuestre la brecha. Ningún contrato autoriza modificar Core. Los nombres de archivos futuros son sugerencias, no archivos existentes.

Contrato común: usar prefijo rsm-*; texto de UI traducido en claves rsm de locales existentes; contenido editorial traducible por mecanismos de Shopify, no strings incrustados en JS. Recursos propios cargados por su componente o punto nativo probado; JS idempotente, cleanup en unload, soporte recarga/reordenación del editor. No instalar librerías, copiar bundles ni redefinir custom elements de Prestige. Mantener lectura útil sin JS. Defaults numéricos son los extraídos del prototipo, no nuevos controles de usuario. No exponer sliders para cada margin/px.

## 1. rsm-cap-care-steps — brecha funcional identificada

- Objetivo: reproducir CareScrollStory, CareStep y CareIllustration, cinco pasos y dibujo sincronizado. FAQ/scrolling-content no ofrecen por sí solos ese contrato de estado.
- Archivos sugeridos: `sections/rsm-cap-care-steps.liquid`, `assets/rsm-cap-care-steps.css`, `assets/rsm-cap-care-steps.js`; SVG propio como snippet `snippets/rsm-care-illustration.liquid` si facilita reutilización. No generar ahora.
- Settings mínimos: eyebrow, heading, intro, nota orientativa, color_scheme. Blocks `step`: título, contenido e identificador visual validado de los cinco estados. Default de orden/copy = careSteps actual (ver fuente), no datos técnicos inventados. No admitir step fuera del rango del dibujo sin fallback.
- Imágenes: ilustración vectorial actual, sin raster extra; foto editorial se configura en otra sección, no agregar image picker sin necesidad.
- Desktop: layout .82/1, gap clamp60–130, sticky top94, ilustración1:1 y pasos70vh. Tablet <=900 una columna/sticky68/16:10/60vh; <=540 16:9/navhorizontal32/62svh. CSS exacto en ficha canónica.
- JS: observe pasos con rootMargin/thresholds de fuente, active step al scroll o selección; preferencia reducida para scroll; limpiar observer/listeners al retirar sección, aislar múltiples instancias. Evaluar método de máximo ratio estable si QA revela parpadeo; eso sería una mejora registrada, no equivalencia asumida.
- Accesibilidad: botones etiquetados en idioma activo, aria-current step y nombre del dibujo actualizado; no anuncios insistentes a cada pixel; contenido legible aunque script falle; foco nunca se mueve por scroll automático.
- Dependencias/datos: copy orientativo aprobado y cinco estados SVG; fuentes dinámicas solo si guía compartida justifica metaobject. Definir esquema→poblar valores→conectar antes de uso.
- Aceptación: cinco pasos en orden, click/Enter y scroll coherentes; reduced motion; zoom/móvil Safari; reordenación y duplicado de instancia sin listeners dobles; ningún cambio a compra.

## 2. rsm-territory-editorial — composición visual por verificar

- Nativo evaluado: media-grid, multiple-media-with-text, multi-column. Confirmar si permiten dos fotos y columna central oscura40/30/30, a sangre, con tamaños deseados; si sí, configurar, sin archivo nuevo.
- Archivos candidatos si falla prueba: `sections/rsm-territory-editorial.liquid`, `assets/rsm-territory-editorial.css`; **JS no necesario**.
- Settings: paisaje, alt o alt del image object, título, texto, arquitectura y color_scheme. Dos image pickers suficientes; no cuatro bloques por la versión antigua. Defaults de título EL TERRITORIO y copy desde Story. Imágenes se asignan desde ASSETS tras autorización; no asumir rutas de GitHub como URLs Shopify.
- Layout por defecto: 40fr/30fr/30fr; min-height clamp380–470; cover/crops52% y50%; copy padding clamp32–52. <=1100/900 sigue3 con min380/hijo; <=540 imagen440/texto390/imagen440, padding58/24, H250.
- Editable: imágenes y copy; proporción/spacing como estilo de diseño estable, sin configuración innecesaria. Datos de página, no dependencia de producto.
- Accesibilidad: heading ID único por sección, orden paisaje→copy→arquitectura, alt contextual, fotos de contenido reales.
- Aceptación: 3/3/1 columnas según fuente, crops y contrastes, sin caballo/puerta/4ª celda; reordenar en editor sin JS.

## 3. rsm-editorial-split — contrato condicional compartido

- Probar primero image-with-text con image_position/content_width/scheme/remove_vertical_spacing. Solo si ratio52/48/mincopy480 y spacing no se resuelven sin afectar otros módulos, considerar sección propia.
- Candidatos: `sections/rsm-editorial-split.liquid`, `assets/rsm-editorial-split.css`; sin JS.
- Settings: imagen, título, copy, eyebrow opcional, image_position y esquema; evitar variant libre o CSS arbitrario. Defaults Origen/City por instancias; ambas copy→media actualmente. No aplicar reverse al City por nombre.
- Desktop min620/copy min480/52fr y48fr, título nowrap>=1120; mobile<=900 stack copy/media, <=540 foto4/3 y copy min360. Crops54%/50% por imagen y focal point administrado.
- Dependencias: fotos autorizadas y copy Story; no inventar separador4px. Eyebrow vacío reserva margen actualmente: resolver intención registrada antes de “limpiarlo”.
- Aceptación: reusar una sección para ambas instancias, tamaños/orden/foco/alt/es-en; composición nativa gana si iguala referencia.

## 4. rsm-special-product-grid — contrato condicional de catálogo editorial

- Probar primero featured-collections y multi-column con fuentes dinámicas de producto. Nativo product-card sí compra/precia, pero la tarjeta editorial actual necesita shortDescription/enlace y no precio/Quick Add.
- Si no alcanza: `sections/rsm-special-product-grid.liquid`, `assets/rsm-special-product-grid.css`; JS no necesario para enlaces. Reveal preferir mecanismo nativo comprobado, no biblioteca nueva.
- Settings mínimos: collection picker y color_scheme; límite solo si el cliente necesita editarlo (prototipo muestra todos los Special). No campos de nombre/precio por tarjeta ni cuatro productos hardcodeados. Short description desde metafield confirmado; media/título/URL desde producto.
- Default de colección no puede inventarse como handle/ID: pendiente de colección real. Estado vacío útil en editor; no publicar productos demo como fallback.
- Layout4/2/1 a base/900/540, gap20 /28×16 /48; media4/3 contain, títulos y descripción según CSS. Datos producto+metafield, sin carrito propio.
- Aceptación: incluir producto añadido a colección sin cambiar código, orden merchandising, traducción de título/desc/copy de enlace, navegación PDP correcta y largas etiquetas sin overflow.

## 5. rsm-collection-intro — contrato condicional de banner Home

- Brecha potencial: featured-collections tiene encabezado pero no reproduce banner con imagen/gradiente/panel por separado. Probar overlay/rich-text configurables antes de añadir sección.
- Si hace falta: `sections/rsm-collection-intro.liquid`, `assets/rsm-collection-intro.css`; sin JS. Se coloca antes de featured-collections nativo, sin clonar grid.
- Settings: imagen, eyebrow, heading, copy, collection/link y label. Fondo/scheme y alineación nativos preferidos. Defaults: textos actuales Home, banner96/76 y cuerpo comercial en sección nativa. Resolver CTA duplicado con decisión de diseño, no añadir un segundo CTA por conveniencia.
- Aceptación: separación banner/grid coherente, mismos gutters, CTA navegable y crops; editar colección no desincroniza encabezado y tarjetas.

## 6. rsm-product-card — extensión visual, sin motor nuevo

- Punto de partida confirmado: snippets/product-card.liquid ya compartido por main-collection/featured-collections, con quick buy y swatches nativos.
- Candidato de recurso propio: `assets/rsm-product-card.css`. **No se propone una sección de compra nueva ni copiar el snippet del proveedor.** SVG bolsa+ usar icono nativo compatible o recurso propio accesible, no emoji.
- Requisitos: fotos4/3 contain; nombre serif principal, categoría/modelo secundario, precio separado; swatches izquierda y botón44 circular derecha; title2+líneas sin alturas rígidas; hover/focus/active/disabled; mantener disponibilidad y variante real.
- Contenido: product.title/price/media y campo secundario confirmado; no abusar product.vendor para Core Cap. No añadir color ficticio ni opción vendible para una swatch decorativa.
- Límite: Quick Buy hoy vive dentro de figure y el modelo no tiene slot claro. CSS por sí solo puede ser insuficiente para reubicarlo sin distorsión. Antes de implementar, demostrar alternativa en DOM nativo, punto de extensión permitido y modo de carga del CSS. Si solo queda alterar Core, presentar diff pequeño, motivo, efectos, mantenimiento y pedir autorización; no inventar loader global oculto.
- Motor: conservar product-form/quick-buy-modal, on_success force_open_drawer, variant:add/cart:change/cart:error, aria-busy, disponibilidad y respuesta servidor. No enganchar click para incrementar contador local.
- Aceptación: Home/PLP/relacionados/búsqueda, una y varias variantes, agotado, quantity rules, error de red/stock, selling plans si existen, teclado/móvil/es-en, actualización subtotal/drawer y navegación independiente a producto. No debe haber dos botones ni formularios anidados.

## Separación entre estado actual y propuestas

TerritoryGrid es invisible hoy. `rsm-territory-grid` solo sería nuevo contrato tras reactivación aprobada: cuatro bloques de título/copy/image, disclosure hover/focus/tap, JS de toggle aislado, proporción3/4 y grid4/2/1. No construirlo en la primera implementación ni crear archivos vacíos “por si acaso”.

Los recursos de editorial, filtros, cuentas, búsqueda, newsletter y checkout deben reutilizar capacidades nativas. Para cargar CSS global temprano no se encontró hook automático: cualquier cambio a layout/theme.liquid es una modificación Core y requiere aprobación explícita; esta documentación deja ese punto pendiente.

## 7. rsm-editorial-surfaces — ajustes CSS condicionales sobre secciones nativas

Las alturas, tipografía por rol y overlays direccionales de Home/Collection/Special/Story difieren de los controles uniformes del editor. Antes de personalizar, configurar image_size, posiciones, esquema y overlay existentes y comparar con referencia. Si persiste la brecha, recurso candidato `assets/rsm-editorial-surfaces.css`, sin JS ni sección Liquid nueva. Acotar por sección/template/clase RSM, sin selectores globales que alteren Header, PDP o drawers; valores y media queries desde las fichas vigentes, no tokens nuevos.

Settings: reutilizar imágenes/heading/copy/CTA nativos; ningún control nuevo salvo necesidad editorial demostrada. Recursos cargados mediante punto nativo existente y probado; el hook global sigue pendiente y cualquier modificación Core requiere aprobación. Aceptación: mismo crop/overlay/tipo/altura por sección en seis anchos, es/en y editor, sin cambios colaterales ni carga duplicada. No prometer equivalencia exacta de un gradiente horizontal con overlay_color/overlay_opacity sin esa comprobación.
