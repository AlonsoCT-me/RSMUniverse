import type { Product } from "../types/product";
import { assetUrl } from "../asset-url";

export const products: Product[] = [
  {
    id: "rsm-blue",
    name: "RSM Blue",
    shortDescription:
      "Contraste crema y azul marino con bordado frontal RSM en relieve.",
    description:
      "Corona estructurada en tono crema de sarga diagonal en contraste con visera curva, botón superior y bordado frontal RSM en relieve tridimensional azul marino.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "core",
    collectionLabel: "Core Cap",
    backdropTone: "light",
    swatch: "#1E305E",
    images: [
      {
        src: assetUrl("/assets/rsm-blue.webp"),
        alt: "Gorra RSM Blue en tono crema con visera y bordado azul marino",
        view: "Vista principal",
      },
    ],
    attributes: {
      model: "RSM Blue",
      colorPattern: "Crema / Azul marino",
      size: "Por confirmar (pendiente de confirmación)",
      material:
        "Tejido de sarga visible; composición exacta pendiente de confirmación",
      closure: "Pendiente de confirmación",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material", "closure"],
    },
  },
  {
    id: "rsm-militar",
    name: "RSM Militar",
    shortDescription:
      "Corona arena con emblema en relieve oscuro y visera en patrón camuflaje.",
    description:
      "Corona estructurada en tono arena con emblema frontal RSM en relieve oscuro mate, cordón trenzado olivo en la base y visera curva con patrón camuflaje en tonos tierra.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "core",
    collectionLabel: "Core Cap",
    backdropTone: "light",
    swatch: "#574D35",
    images: [
      {
        src: assetUrl("/assets/rsm-militar.webp"),
        alt: "Gorra RSM Militar en tono arena con visera camuflaje y emblema oscuro",
        view: "Vista principal",
      },
    ],
    attributes: {
      model: "RSM Militar",
      colorPattern: "Arena / Camuflaje pixelado",
      size: "Por confirmar (pendiente de confirmación)",
      material:
        "Corona en tejido de sarga y visera estampada; composición pendiente de confirmación",
      closure: "Pendiente de confirmación",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material", "closure"],
    },
  },
  {
    id: "rsm-special-edition-gamuza",
    name: "RSM Special Edition Gamuza",
    shortDescription:
      "Textura tipo gamuza en tono tabaco con emblema metálico dorado y cordón trenzado.",
    description:
      "Silueta de seis paneles en acabado tipo gamuza color tabaco, distinguida por emblema ovalado e iniciales RSM en relieve metálico dorado, cordón trenzado frontal con herraje labrado y cierre posterior con hebilla metálica.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "special-edition",
    collectionLabel: "Special Edition",
    backdropTone: "dark",
    swatch: "#6D4423",
    images: [
      {
        src: assetUrl("/assets/rsm-special-edition-gamuza.webp"),
        alt: "Gorra RSM Special Edition Gamuza vista tres cuartos",
        view: "Vista tres cuartos",
      },
      {
        src: assetUrl("/assets/rsm-special-edition-gamuza-front.webp"),
        alt: "Gorra RSM Special Edition Gamuza vista frontal",
        view: "Vista frontal",
      },
      {
        src: assetUrl("/assets/rsm-special-edition-gamuza-side.webp"),
        alt: "Gorra RSM Special Edition Gamuza vista lateral",
        view: "Vista lateral",
      },
      {
        src: assetUrl("/assets/rsm-special-edition-gamuza-back.webp"),
        alt: "Gorra RSM Special Edition Gamuza vista posterior con hebilla metálica",
        view: "Vista posterior",
      },
    ],
    attributes: {
      model: "Special Edition Gamuza",
      colorPattern: "Tabaco / Dorado envejecido",
      size: "Ajustable (medidas pendientes de confirmación)",
      material:
        "Acabado tipo gamuza con aplicaciones metálicas; composición exacta pendiente de confirmación",
      closure: "Correa ajustable con hebilla metálica en tono latón antiguo",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material"],
    },
  },
  {
    id: "rsm-special-edition-leather-brown",
    name: "RSM Special Edition Leather Brown",
    shortDescription:
      "Corona café texturizada, parche ovalado con emblema en relieve y visera tono miel.",
    description:
      "Corona en café profundo con relieve orgánico sutil, parche ovalado frontal con marco labrado y emblema RSM en acabado metálico cobrizo, cordón trenzado con doble herraje lateral y visera curva en tono miel.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "special-edition",
    collectionLabel: "Special Edition",
    backdropTone: "dark",
    swatch: "#4A2C1D",
    images: [
      {
        src: assetUrl("/assets/rsm-special-edition-leather-brown.webp"),
        alt: "Gorra RSM Special Edition Leather Brown con parche ovalado y emblema en relieve",
        view: "Vista principal",
      },
    ],
    attributes: {
      model: "Special Edition Leather Brown",
      colorPattern: "Café profundo grabado / Miel",
      size: "Por confirmar (pendiente de confirmación)",
      material:
        "Corona texturizada con parche tipo piel y visera tipo gamuza; composición pendiente de confirmación",
      closure: "Pendiente de confirmación",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material", "closure"],
    },
  },
  {
    id: "rsm-special-edition-pipes",
    name: "RSM Special Edition Pipes",
    shortDescription:
      "Contraste hueso y negro con emblema RSM en bordado texturizado tonos tierra.",
    description:
      "Construcción bicolor de acabado suave con paneles frontales en tono hueso, paneles posteriores y visera curva en negro con pespuntes claros, cordón frontal al tono y emblema RSM en bordado texturizado tipo bucle.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "special-edition",
    collectionLabel: "Special Edition",
    backdropTone: "dark",
    swatch: "#191716",
    images: [
      {
        src: assetUrl("/assets/rsm-special-edition-pipes.webp"),
        alt: "Gorra RSM Special Edition Pipes bicolor hueso y negro con bordado texturizado",
        view: "Vista principal",
      },
    ],
    attributes: {
      model: "Special Edition Pipes",
      colorPattern: "Hueso / Negro con bordado terracota",
      size: "Por confirmar (pendiente de confirmación)",
      material:
        "Paneles de acabado afelpado tipo gamuza y bordado en bucle; composición pendiente de confirmación",
      closure: "Pendiente de confirmación",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material", "closure"],
    },
  },
  {
    id: "rsm-special-edition-red",
    name: "RSM Special Edition Red",
    shortDescription:
      "Frente hueso y paneles en tono vino con bordado histórico Rancho San Marco.",
    description:
      "Diseño bicolor de textura tipo gamuza con frente estructurado en tono hueso y visera, paneles posteriores y cordón trenzado en rojo vino, acompañado del bordado frontal Rancho San Marco · Monterrey, N.L. · ESTD 2016.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "special-edition",
    collectionLabel: "Special Edition",
    backdropTone: "dark",
    swatch: "#64242E",
    images: [
      {
        src: assetUrl("/assets/rsm-special-edition-red.webp"),
        alt: "Gorra RSM Special Edition Red en hueso y vino con bordado Rancho San Marco",
        view: "Vista principal",
      },
    ],
    attributes: {
      model: "Special Edition Red",
      colorPattern: "Hueso / Vino Estirpe",
      size: "Por confirmar (pendiente de confirmación)",
      material:
        "Acabado tipo gamuza bicolor con bordado en relieve; composición pendiente de confirmación",
      closure: "Pendiente de confirmación",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material", "closure"],
    },
  },
  {
    id: "rsm-super-cajeta",
    name: "RSM Super Cajeta",
    shortDescription:
      "Silueta trucker en negro y cajeta con parche grabado Rancho Riders y malla beige.",
    description:
      "Silueta trucker con panel frontal negro estructurado, parche frontal grabado con la inscripción Super Cajeta · RSM · Rancho Riders, visera curva en tono cajeta, paneles de malla beige y cierre posterior snapback con etiqueta tejida RSM.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "core",
    collectionLabel: "Core Cap",
    backdropTone: "light",
    swatch: "#944A20",
    images: [
      {
        src: assetUrl("/assets/rsm-super-cajeta.webp"),
        alt: "Gorra RSM Super Cajeta vista tres cuartos",
        view: "Vista tres cuartos",
      },
      {
        src: assetUrl("/assets/rsm-super-cajeta-front.webp"),
        alt: "Gorra RSM Super Cajeta vista frontal",
        view: "Vista frontal",
      },
      {
        src: assetUrl("/assets/rsm-super-cajeta-side-b.webp"),
        alt: "Gorra RSM Super Cajeta vista lateral con malla beige",
        view: "Vista lateral",
      },
      {
        src: assetUrl("/assets/rsm-super-cajeta-back.webp"),
        alt: "Gorra RSM Super Cajeta vista posterior con cierre snapback",
        view: "Vista posterior",
      },
      {
        src: assetUrl("/assets/rsm-super-cajeta-up.webp"),
        alt: "Detalle cercano del parche grabado RSM Super Cajeta Rancho Riders",
        view: "Detalle de parche",
      },
    ],
    attributes: {
      model: "RSM Super Cajeta",
      colorPattern: "Negro / Cajeta con malla beige",
      size: "Ajustable (medidas pendientes de confirmación)",
      material:
        "Frente de sarga, malla posterior y parche grabado tipo piel; composición exacta pendiente de confirmación",
      closure: "Broche ajustable tipo snapback en tono arena",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material"],
    },
  },
  {
    id: "rsm-wine",
    name: "RSM Wine",
    shortDescription:
      "Frente crema con emblema bordado en relieve y paneles de malla en tono vino.",
    description:
      "Construcción trucker con panel frontal estructurado en tono crema, emblema RSM bordado en relieve tridimensional color vino, cordón frontal al tono, visera curva vino con pespuntes visibles y paneles posteriores de malla.",
    price: "$1,599 MXN",
    priceAmount: 1599,
    mockData: true,
    collectionId: "core",
    collectionLabel: "Core Cap",
    backdropTone: "light",
    swatch: "#64242E",
    images: [
      {
        src: assetUrl("/assets/rsm-wine.webp"),
        alt: "Gorra RSM Wine con frente crema, emblema vino y malla posterior",
        view: "Vista principal",
      },
    ],
    attributes: {
      model: "RSM Wine",
      colorPattern: "Crema / Vino con malla",
      size: "Por confirmar (pendiente de confirmación)",
      material:
        "Frente de sarga y paneles posteriores de malla; composición exacta pendiente de confirmación",
      closure: "Pendiente de confirmación",
    },
    validation: {
      status: "provisional-partial",
      mockData: { price: true },
      pendingConfirmation: ["price", "size", "material", "closure"],
    },
  },
];

export const DEFAULT_CORE_PRODUCT_ID = "rsm-super-cajeta";

export const DEFAULT_SPECIAL_PRODUCT_ID = "rsm-special-edition-gamuza";

export const productsById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<string, Product>;

export const coreProducts = products.filter(
  (product) => product.collectionId === "core",
);

export const specialEditionProducts = products.filter(
  (product) => product.collectionId === "special-edition",
);
