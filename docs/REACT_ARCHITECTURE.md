# Arquitectura React — RSM Universe, fase 1

Refactorización estructural revisada el 20 de noviembre de 2026. La fuente de verdad es el código local. Se conservan nombres de componentes, contratos, JSX, datos, estado, efectos y estilos originales.

## Auditoría inicial

El árbol de trabajo estaba limpio. `src/App.tsx` tenía **2,815 líneas**, `src/index.css` **3,611**. App reunía nueve vistas, 37 funciones de componentes (incluido App), nueve tipos, el catálogo, la navegación y el estado principal. No había componentes ni hooks externos; `asset-url.ts` y `userback.ts` ya tenían responsabilidades independientes.

Se revisaron App, main, CSS, resolución de assets, package.json, tsconfig, Vite, scripts de verificación, workflows y documentación existente: `DEPLOYMENT.md`, `RSM_DESIGN_IMPLEMENTATION_SPEC.md`, `.figma/README.md` y `docs/USERBACK_INTEGRATION.md`. Las cifras y algunas referencias de la especificación histórica pueden corresponder a versiones anteriores; este documento describe la arquitectura actual sin cambiar especificaciones visuales. No existe `docs/shopify-handoff/`.

Antes de editar pasaron TypeScript, build, verificación de 34 imágenes y las 12 pruebas de Userback. No hay script de lint ni suite de componentes configurados.

### Clasificación y mapa de dependencias previo a las extracciones

| Elementos originales | Clasificación | Dependencias y destino |
|---|---|---|
| `Page`, `NavigateFn` | Tipo compartido | Contratos para App, layout, páginas y navegación; `types/navigation.ts`. |
| `CollectionId`, `Product`, `ProductImage`, `ProductAttributes`, `ProductValidation` | Tipo | `Product` contiene los otros tipos. `Product` y `CollectionId` se comparten; los tipos auxiliares permanecen privados en `types/product.ts`. |
| `CartItem`, `AddToCartFn` | Tipo compartido | Dependen de Product; `types/cart.ts`. |
| `products`, `productsById`, `coreProducts`, `specialEditionProducts`, ambos IDs predeterminados | Datos globales | Dependen de Product y assetUrl; `data/products.ts`. |
| `routes`, `routeMap`, `resolveRouteState` | Constante global y utilidad | Tipos de navegación y catálogo; `utils/navigation.ts`. routeMap es privado. |
| `Icon`, `ImagePlaceholder`, `SectionHeading`, `TextLink` | Presentación compartida | TextLink utiliza Icon; `components/ui/`. |
| `Accordion`, `Newsletter` | UI compartida y estado local | useState e Icon; `components/ui/`. |
| `Quantity`, `ProductCard`, `ProductGallery`, `ProductInfo` | Producto compartido | Tipos, UI y callbacks; ProductInfo compone Quantity y Accordion. Galería e información conservan sus efectos por product.id. |
| `Reveal`, `EditorialSplitSection` | Editorial y presentación compartida | Reveal conserva estado, ref y IntersectionObserver; `components/editorial/`. |
| `TerritoryGrid`, `TerritoryCard`, `TerritoryEditorialBanner` | Editorial específico de Historia | TerritoryCard permanece privado junto al grid; el banner conserva el import JPG y assetUrl. |
| `SpecialEditionHero`, `EditorialIntro`, `SpecialEditionDetails`, `EditorialImageText`, `SpecialEditionProductCTA` | Presentación específica de Special Edition | Reveal, catálogo y UI; agrupados en `pages/SpecialEdition/SpecialEditionSections.tsx`. |
| `Header`, menú móvil integrado | Layout global y estado local | Page, assetUrl, Icon y callback navigate; el menú conserva su estado y markup dentro de Header. |
| `Footer`, `CartDrawer` | Layout global y presentación del carrito | Footer compone Newsletter; drawer recibe items, open y close sin administrar el carrito. |
| `Home`, `Collection`, `CorePdp`, `NocturnaPdp`, `SpecialLanding`, `Story`, `CarePage`, `DesignSystem`, `Comparison` | Página | Componen componentes y consumen datos/props; cada vista tiene su módulo. |
| `careSteps`, `CareIllustration`, `CareStep`, `CareScrollStory`, `CareMaterialAccordion` | Datos, presentación, estado y efecto específicos de Care | Permanecen privados en CarePage; comparten datos inferidos y refs sin ampliar su API. |
| `App` | Estado, efecto y coordinación global | Página, producto, carrito, drawer, handlers, listeners y selección de contenido permanecen juntos. |

Se identificaron las referencias entre declaraciones antes de moverlas. La dirección prevista es **App → páginas/layout → componentes → tipos/datos/utilidades**, sin imports de vuelta hacia App. La utilidad de navegación depende del catálogo; el catálogo no depende de navegación. Los callbacks de App se transmiten por props.

## Árbol resultante

```text
src/
├── App.tsx
├── main.tsx
├── index.css
├── asset-url.ts
├── userback.ts
├── vite-env.d.ts
├── imports/                         # Imágenes existentes, intactas
├── types/
│   ├── navigation.ts
│   ├── product.ts
│   └── cart.ts
├── data/
│   └── products.ts
├── utils/
│   └── navigation.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Incluye el menú móvil original
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Icon.tsx
│   │   ├── ImagePlaceholder.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── TextLink.tsx
│   │   ├── Accordion.tsx
│   │   └── Newsletter.tsx
│   ├── product/
│   │   ├── Quantity.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   └── ProductInfo.tsx
│   ├── cart/
│   │   └── CartDrawer.tsx
│   └── editorial/
│       ├── Reveal.tsx
│       ├── EditorialSplitSection.tsx
│       ├── TerritoryGrid.tsx        # Incluye TerritoryCard privado
│       └── TerritoryEditorialBanner.tsx
└── pages/
    ├── Home/HomePage.tsx            # Exporta Home
    ├── Collection/CollectionPage.tsx # Exporta Collection
    ├── Product/
    │   ├── CorePdp.tsx
    │   └── NocturnaPdp.tsx
    ├── SpecialEdition/
    │   ├── SpecialEditionPage.tsx   # Exporta SpecialLanding
    │   └── SpecialEditionSections.tsx
    ├── OurStory/OurStoryPage.tsx     # Exporta Story
    ├── Care/CarePage.tsx            # Incluye auxiliares privados de Care
    ├── DesignSystem/DesignSystemPage.tsx
    └── Comparison/ComparisonPage.tsx

docs/REACT_ARCHITECTURE.md
```

App pasa de **2,815 a 163 líneas**; su función completa se conserva literalmente. Se añaden 32 módulos de código y este documento. El cambio del archivo existente se limita a `src/App.tsx`; main, CSS, assets, Userback, dependencias, configuración y despliegue permanecen intactos.

## Responsabilidades y dependencias

- **App:** inicialización desde el hash, `page`, `selectedProductId`, `cartItems`, `cartOpen`, contador derivado, `addToCart`, `navigate`, efecto de sincronización de rutas, useMemo de contenido y composición `.app.app--{page}` → Header/contenido/Footer/CartDrawer.
- **Páginas:** orden y composición visual originales. Collection conserva filtro, ordenación y useMemo locales. Los dos PDP comparten galería e información. Care conserva juntas sus ilustraciones, pasos, acordeones, selección y observer. Los componentes locales siguen declarados a nivel de módulo.
- **Layout:** Header administra el menú móvil; Footer mantiene enlaces y Newsletter. No se añade un componente MobileMenu ni wrappers nuevos.
- **UI/producto/editorial:** se exportan funciones existentes sin nuevas abstracciones Button ni cambios de props. Se mantiene el nombre Quantity. Los componentes no importan páginas ni App.
- **Tipos:** importaciones `import type`, incluyendo el namespace React cuando se usan ReactNode o CSSProperties. No se amplían uniones, propiedades ni valores opcionales.
- **Utilidades/asset-url:** navegación conoce el catálogo para resolver slugs. assetUrl permanece independiente y conserva la base de Vite para imágenes públicas. El JPG de territorio sigue siendo un import con el alias `@/imports/`.

No se crean barrels, Context, stores, hooks personalizados ni carpetas vacías. Los componentes no cambian su posición en el árbol React; hooks, keys, valores iniciales, efectos y callbacks conservan sus cuerpos originales. La reorganización requiere una recarga de desarrollo al revisar el cambio para partir de un árbol montado desde cero.

## Flujo de navegación

`main.tsx` sigue montando App en StrictMode e inicializa Userback fuera del árbol. App lee `window.location.hash` y utiliza `resolveRouteState` para su estado inicial.

| Page | Hash canónico de navegación |
|---|---|
| home | `#/` |
| collection | `#/coleccion` |
| caliza | `#/producto/{id-core}` |
| special | `#/special-edition` |
| nocturna | `#/producto/{id-special}` |
| story | `#/nuestra-historia` |
| care | `#/pages/cuidado-de-gorras` |
| system | `#/design-system` |
| compare | `#/comparativa` |

Se conserva la tabla routes, incluidos sus aliases históricos `producto/caliza` y `producto/nocturna`. resolveRouteState reconoce esos aliases y los IDs del catálogo; una ruta desconocida vuelve a Home. Los IDs predeterminados siguen siendo `rsm-super-cajeta` y `rsm-special-edition-gamuza`.

Header, Footer, tarjetas y botones llaman al mismo navigate de App. Este actualiza página/producto, escribe el hash y realiza el scroll original. Los listeners `hashchange` y `popstate` sincronizan el estado y limpian sus suscripciones al desmontar. No se añade React Router ni se cambia el pathname de publicación.

Los botones de scroll editorial siguen buscando los mismos IDs; Care y Special Edition conservan la consulta a `prefers-reduced-motion`. Reveal y CareScrollStory conservan sus IntersectionObservers, umbrales, refs y cleanup.

## Flujo del carrito y producto

ProductCard invoca `onAdd(product, 1)` para Quick Add; cuando existen variantes, primero navega al PDP. ProductInfo conserva su cantidad local, mínimo de uno y reinicio cuando cambia product.id. Los PDP entregan esa cantidad al callback de App.

`addToCart` conserva su actualización funcional: busca por product.id, acumula cantidades de un producto existente o añade una entrada, y abre el drawer. App deriva el contador y entrega los items a CartDrawer. El subtotal mantiene la suma de `priceAmount × quantity` y el formato `es-MX`. Abrir/cerrar el drawer no elimina items. El carrito sigue en memoria y se reinicia al recargar.

ProductGallery conserva índice activo, reinicio por product.id, imagen alternativa, controles circulares y miniaturas. ProductInfo conserva swatches, atributos, precio, acordeones y defaults. No se cambia el contrato de selección de producto ni se añade estado de variante.

## Catálogo

`data/products.ts` contiene literalmente el array original: orden, IDs, nombres, precios demostrativos, descripciones, atributos, validaciones, variantes, swatches e imágenes. Sus índices y filtros se calculan una sola vez al cargar el módulo. `productsById` conserva su tipo original; no se cambia el modelo ni se normalizan datos.

La separación facilita localizar el catálogo para el futuro handoff Shopify; no conecta Shopify ni convierte estos datos en objetos Liquid, metafields o variantes comerciales definitivas.

## Extracción incremental y validación

Se comprobó TypeScript y build, sin continuar con errores nuevos, después de cada grupo:

1. Tipos compartidos.
2. Catálogo y resolución de rutas.
3. UI compartida.
4. Componentes de producto.
5. Editoriales y secciones específicas de Special Edition.
6. Layout y drawer.
7. Nueve páginas; revisión final del estado conservado en App.

La comparación estática contra una copia inicial verificó **56 declaraciones conservadas literalmente**, con la única diferencia permitida del modificador export para publicarlas. Esto incluye todas las funciones, tipos, constantes y el array de productos. Cada declaración existe una sola vez. Se revisó el grafo de imports de los **37 archivos TypeScript**: **cero ciclos**, incluyendo imports de tipos. `src/index.css` es idéntico byte por byte y el CSS de producción conserva su hash `index-V5tYOWaE.css`.

Comandos de verificación existentes, sin nuevas dependencias:

```bash
pnpm exec tsc --noEmit
pnpm build
node scripts/verify-images.mjs
node scripts/verify-userback.mjs
GITHUB_PAGES=true pnpm build
```

La verificación de declaraciones, el análisis del grafo y las pruebas de navegador de esta sesión se ejecutan mediante herramientas temporales fuera del repositorio. No se añaden scripts ni dependencias a la aplicación.

### Navegador

Las pruebas locales se ejecutaron con Chromium headless sobre el build inicial guardado antes de editar y el build final. Pasaron en ambas versiones:

- Home → Collection → PDP; navegación hash, recarga, atrás/adelante y aliases históricos de PDP; fallback de ruta desconocida.
- Quick Add, acumulación de cantidades, subtotal, apertura/cierre del drawer por sus controles y desde Header; cantidad del PDP, galería, miniaturas y acordeones.
- Ordenación de Collection, Special Edition → PDP → agregar, Footer → Care, acordeones de Care y selección de pasos.
- Menú móvil a 390 px: abrir, navegar y cerrar; indicador del carrito y formulario Newsletter.

La verificación adicional del build final pasó navegación desde Header de escritorio, alternancia de TerritoryCard, filtros all → core → special-edition → all (8/4/4/8 productos), reinicio de cantidad y galería al cambiar producto, galería Special Edition y emulación de `prefers-reduced-motion: reduce` para scroll de Special Edition/Care y desactivación del marquee mediante el CSS existente.

El build con `GITHUB_PAGES=true` también pasó un recorrido local bajo `/RSMUniverse/`: nueve vistas, enlaces internos, rutas directas, recarga, atrás/adelante, aliases, metadata e imágenes renderizadas. No hubo excepciones JavaScript ni 404 locales en los recorridos. Estas pruebas no publican ni verifican un despliegue remoto o el servicio real de Userback.

Para la comparación visual se usan las nueve vistas (Home, Collection, Core PDP, Special PDP, Special Landing, Story, Care, Design System y Comparison) en **375, 390, 430, 768, 1024 y 1440 px**, con viewport de 900 px de alto y escala de dispositivo 1. Se espera a las fuentes e imágenes y se recorre el scroll para activar lazy loading y los observers originales.

Las capturas móviles cubren toda la página. Chromium se bloqueaba al solicitar una captura larga de Home a 768 px; para tablet/escritorio se capturan viewports consecutivos, incluido el final de cada página, cubriendo su altura completa. El marquee infinito de Care se pausa en el mismo instante desde las herramientas del navegador, sin editar CSS ni código de la aplicación; su comportamiento normal y con movimiento reducido se comprueba por separado. El DOM se compara tras normalizar únicamente el origen HTTP temporal del servidor.

**Resultado final: 54 comparaciones de DOM y 182 parejas de capturas PNG idénticas byte por byte, sin diferencias detectadas.** Los 54 casos corresponden a nueve vistas por seis resoluciones; los PNG adicionales cubren los tramos de scroll de tablet/escritorio. Ambos recorridos terminaron sin excepciones JavaScript ni recursos locales ausentes.

Los artefactos de la sesión se guardan fuera del repositorio en `/private/tmp/rsm-architecture-before/browser/` y `/private/tmp/rsm-architecture-after/browser/`, con capturas PNG, DOM HTML y reportes JSON. Las pruebas de declaraciones y navegador son herramientas temporales, no dependencias ni tests incorporados al proyecto.

## Límites conocidos y próximas fases

- El drawer original permite consultar items y cerrar/abrir, pero no eliminar productos ni editar cantidades dentro del carrito. Las cantidades se controlan en el PDP y se acumulan al agregar. No se implementan funciones que no existían.
- Los swatches de variantes actuales son presentacionales: no tienen handlers de selección. Se conserva la selección visual inicial original.
- Checkout, búsqueda, cuenta, enlaces legales, disponibilidad y paginación incluyen controles de prototipo sin implementación comercial completa. Newsletter confirma el formulario en memoria; no existe envío a backend.
- Los precios y algunos atributos siguen marcados como demostrativos o pendientes de confirmación en el catálogo.
- La inicialización, memoización y dependencias de hooks de App permanecen como estaban; no se incluye una revisión funcional u optimización de esos patrones.
- Las secciones ocultas permanecen renderizadas con sus clases originales. No se eliminan placeholders, datos locales ni componentes usados solo por una página.
- CSS permanece centralizado. Una fase posterior podrá definir SCSS y estilos por responsabilidad, con validación visual independiente; esta fase no prepara ni modifica reglas CSS.
- Para Shopify Prestige 11.4.1 se debe usar este mapa como referencia de responsabilidades del prototipo y mantener las especificaciones visuales existentes. No se modifica el tema ni se despliega ningún cambio.

## Actualización de estilos — fase 2

La entrada de estilos ahora combina src/index.css (fuentes y Tailwind) y src/styles/main.scss. La estructura y la cascada se documentan en [SCSS_ARCHITECTURE.md](SCSS_ARCHITECTURE.md). Las referencias anteriores a CSS centralizado describen el estado de fase 1.

## Extensión editorial reutilizable

`EditorialSplitSection` dispone ahora de una unión discriminada static/slider y propiedades independientes de layout, ratio, orden móvil, fondo y encuadre. Sus tipos se exportan desde el componente y se definen en `EditorialSplitSection.types.ts`; el estado interactivo está aislado en `EditorialSlider.tsx`. Solo Nuestra Historia activa el slider en El Origen. Ciudad conserva su composición previa por decisión explícita del usuario. Contrato, ejemplos, auditoría de variantes, migración y futura equivalencia de opciones en Prestige: [EditorialSplitSection](EDITORIAL_SPLIT_SECTION.md). Las secciones no importan páginas ni deducen comportamiento desde IDs.
