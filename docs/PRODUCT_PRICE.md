# ProductPrice — precios y descuentos

## Auditoría y alcance

No existía un componente de precio ni una utilidad monetaria compartida. ProductCard y ProductInfo mostraban `product.price` (texto), mientras que el carrito y el ordenamiento utilizaban `priceAmount`. Se elimina el texto duplicado y se conserva `priceAmount` como única fuente de verdad numérica. No se cambian importes, imágenes, atributos, validaciones ni colecciones del catálogo.

ProductCard integra el sistema en Home, colección/PLP y relacionados. ProductInfo lo comparte entre las PDP Core y Special Edition. El carrito usa el mismo formateador, conservando su suma `priceAmount × quantity`, sin refactorizar su estado o interacción. La sección comercial de Special Edition no tenía un precio adicional independiente.

## Archivos

- `src/utils/pricing.ts`: validación, estado de promoción y formato monetario.
- `src/components/product/ProductPrice.tsx`: presentación y semántica del precio.
- `src/components/product/ProductSaleBadge.tsx`: etiqueta configurable sobre fotografía.
- `src/styles/components/_product-price.scss`: estilos BEM locales.
- `src/pages/DesignSystem/ProductPriceExamples.tsx`: ejemplos aislados y explícitamente ilustrativos.
- Integraciones: ProductCard, ProductInfo, CartDrawer, tipos/catálogo, DesignSystemPage, parciales de tarjeta/Design System, main.scss y retirada de la antigua reducción del precio a 11px en responsive.
- `scripts/verify-product-prices.mjs`: pruebas de cálculos, formato y renderizado semántico sin dependencias adicionales.

## Modelo y unidades

```ts
type Product = {
  // ...campos existentes
  priceAmount: number; // precio efectivo en pesos completos
  compareAtPrice?: number; // referencia anterior, también en pesos
  currency?: string; // MXN por defecto
};
```

No existe un booleano onSale en los datos. La promoción se deriva exclusivamente de importes finitos, no negativos, con `compareAtPrice > priceAmount`. Un precio efectivo inválido muestra «Precio no disponible» y no genera promociones. Cero es un precio efectivo válido; un precio anterior de cero nunca habilita descuento.

`getPriceState(price, compareAtPrice)` devuelve el precio efectivo, la referencia válida, onSale, discountPercentage y savings; devuelve null si el efectivo es inválido. Porcentaje: `Math.round(((compareAtPrice - price) / compareAtPrice) * 100)`. El ahorro se redondea a centavos. Un precio anterior ausente, igual, menor, negativo, NaN o infinito produce un estado regular sin tachado, badge ni ahorro.

`formatMoney(amount, currency = "MXN")` utiliza Intl.NumberFormat/es-MX, símbolo y código de moneda. Conserva `$1,599 MXN`; para fracciones muestra `$1,279.50 MXN`. No convierte monedas. El catálogo y el subtotal del prototipo siguen siendo MXN; no se implementa un carrito multimoneda.

Los swatches de variantes existentes son únicamente visuales: ningún producto actual declara variantes ni precios por variante. No se introduce una selección comercial nueva. Un futuro adaptador deberá resolver primero el producto/variante efectivos y entregar sus dos precios a ProductPrice y el mismo precio efectivo al carrito. El componente no guarda una copia local del precio y refleja inmediatamente los props nuevos.

## API

```ts
interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  currency?: string; // MXN
  variant?: "card" | "detail"; // card
  showDiscountBadge?: boolean; // false
  showSavings?: boolean; // false
}
```

Regular: solo importe actual. Promoción: precio anterior con `del`, seguido del actual. Porcentaje y ahorro se pueden habilitar independientemente. Las PDP habilitan ambos, pero solo aparecen con una promoción válida. Las tarjetas mantienen por defecto únicamente los importes.

```tsx
<ProductPrice price={product.priceAmount} currency={product.currency} />
<ProductPrice
  price={product.priceAmount}
  compareAtPrice={product.compareAtPrice}
  variant="detail"
  showDiscountBadge
  showSavings
/>
```

Ejemplo ilustrativo exclusivo de Design System:

```tsx
<ProductPrice price={1279} compareAtPrice={1599} showDiscountBadge showSavings />
// $1,599 MXN tachado · $1,279 MXN · 20% · Ahorras $320 MXN
```

## Badges en fotografía

ProductCard añade `saleBadge?: "hidden" | "sale" | "offer" | "percentage"`, con default hidden. ProductSaleBadge centraliza las etiquetas SALE/OFERTA y calcula el porcentaje con la utilidad compartida. No hay textos promocionales hardcodeados en ProductCard.

```tsx
<ProductCard product={product} navigate={navigate} onAdd={onAdd} saleBadge="percentage" />
```

`.product-card__badges` reutiliza la etiqueta de Edición especial y permite que conviva con la promoción mediante flex-wrap y separación de 6px, sin solaparse. No se reemplaza la etiqueta existente. Las tarjetas del catálogo no muestran promociones porque no se han añadido precios anteriores ficticios.

## Tipografía, contraste y responsive

- Figtree con números tabulares; regular peso 500 y Dark. Promoción peso 600 y Estirpe.
- Card: actual 16px, anterior 13px; detail: actual 24px, anterior 16px.
- Referencia anterior y ahorro: Sierra, más pequeña y con tachado fino en el precio anterior.
- Badge rectangular: Estirpe/Caliza, sin sombras, redondeados ni animación.
- En la PDP oscura y los ejemplos oscuros se añade exclusivamente al precio una superficie Caliza con padding 12px/16px. Evita usar Dark/Estirpe sobre Dark y conserva los colores solicitados. No se modifica la galería ni el resto de la composición.
- Contrastes calculados sobre Caliza: Dark 14.74:1, Estirpe 9.45:1 y Sierra 6.88:1. Los precios también se distinguen semánticamente mediante etiquetas accesibles; no dependen solo del color.
- El grupo permite wrap y el código de moneda puede pasar a la siguiente línea sin partir el número. La tarjeta reserva 52px para el bloque de precio y 80px cuando su contenedor mide hasta 150px (container query); así admite importes con centavos y no se desplazan swatches/Quick Add entre precios regulares y promocionales. Se conserva el título flexible que iguala tarjetas con nombres de una o dos líneas.
- Se retira únicamente la antigua reducción a 11px del precio de tarjeta en mobile. Las PDP mantienen 24px incluso a 320px, donde el bloque cabe sin desbordamiento.

Selectores: `.product-price`, `--card`, `--detail`, `--on-sale`, `__amounts`, `__current`, `__compare`, `__discount`, `__savings`. Se conservan los wrappers de tarjeta/PDP para márgenes, borde y ubicación existentes. No se agregan tokens globales, Tailwind ni dependencias.

## Design System

Ruta `#/design-system`, sección «05 — Precios». Muestra card/detail, regular/promoción, SALE/OFERTA/porcentaje y ahorro, incluyendo etiquetas simultáneas de Special Edition. Los ejemplos copian productos a objetos locales; no mutan el catálogo ni pueden añadir descuentos de muestra al carrito. El grid ilustrativo es inert y los callbacks no ejecutan acciones. Los controles comerciales reales permanecen funcionales.

## Equivalencia propuesta con Shopify / Prestige

| React | Shopify futuro |
|---|---|
| priceAmount → ProductPrice.price | product.price / variant.price |
| compareAtPrice | product.compare_at_price / variant.compare_at_price |
| currency | moneda activa y filtros money |
| discountPercentage / savings | cálculo a partir de los dos precios |
| showDiscountBadge / showSavings | settings configurables |
| saleBadge | setting oculto/SALE/OFERTA/porcentaje |
| card / detail | snippet de precio de tarjeta / información PDP |

Los números del prototipo son pesos completos. Los valores monetarios Liquid utilizan unidades menores; verificar unidades y particularidades de moneda antes de adaptar cálculos. Priorizar precios, descuentos, badges y eventos de variante nativos de Prestige. Esta tabla no constituye un schema ni una implementación Liquid; no se modifica Shopify.

## Validación

- `npx tsc --noEmit`: correcto.
- `npm run build` y `GITHUB_PAGES=true npm run build`: correctos; las salidas de validación se generan fuera del repositorio. Permanece la advertencia previa de `#our-story section::last-child`, ajena a este cambio.
- `node scripts/verify-product-prices.mjs`: 7/7 pruebas, con casos de precios regulares, promociones, comparaciones inválidas, formato, porcentaje, ahorro, semántica y configuración independiente.
- `node scripts/verify-userback.mjs`: 12/12. `node scripts/verify-images.mjs`: 64 imágenes válidas.
- Chromium: grids mixtos de dos/cuatro columnas a 320, 375, 390, 540, 541, 768, 1024, 1440 y 1920px. Sin overflow; precios, swatches y Quick Add alineados; badges simultáneos sin colisiones. Además se probaron importes largos con centavos dentro de los gutters reales a 320–1440px.
- PDP Core y Special Edition a 320, 390, 768 y 1440px: precio visible de 24px/peso 500, sin recortes ni overflow.
- Fixture aislado: Quick Add toma $1,279; Add to Cart con cantidad 2 da $2,558, sin usar $1,599 como base ni descontar dos veces. Al cambiar los datos de producto se actualizan tanto precio efectivo como anterior. El cambio de una variante comercial con precio propio no aplica al catálogo actual y queda pendiente del futuro adaptador de variantes.
- Ambos builds servidos localmente: rutas hash, Quick Add, cantidades, subtotal, drawer, PDP, galería, acordeón, ordenamiento y menú mobile correctos; sin excepciones JS ni respuestas 404 en los recorridos. No se probó checkout transaccional porque el prototipo no lo implementa.
- Comparación visual de tarjetas y ambas PDP mediante capturas antes/después a 320/390/768/1440px. Se conservan imágenes, tipografía de nombres, hover, swatches y controles; cambian la jerarquía de precio, la reserva vertical para sus estados y la superficie Caliza localizada de la PDP oscura. Las muestras promocionales se revisan exclusivamente en Design System.

La validación de navegador se realizó en Chromium; no se afirma una comprobación en Safari físico. Los valores comerciales del catálogo se compararon con la copia previa: permanecen iguales y no se añadieron compareAtPrice a productos reales.

Las capturas, fixtures temporales y resultados del navegador se guardan en `/private/tmp/rsm-product-price/`. No se publican promociones ficticias, no se agregan dependencias y no se realiza commit, push ni merge.
