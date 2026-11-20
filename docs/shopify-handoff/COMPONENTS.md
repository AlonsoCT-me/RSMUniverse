# Inventario de componentes

37 componentes React: todos locales en `src/App.tsx`, salvo `App` export default. Se confirma por AST del código vigente, no por la cifra histórica de 36. `resolveRouteState` es una utilidad y se documenta en [arquitectura](ARCHITECTURE.md), no se cuenta como componente. No hay más componentes en otros archivos fuente.

Cada ficha es canónica para su componente; las páginas describen composición y enlazan la ficha. Las reglas CSS se mantienen una sola vez en [CSS_REFERENCE](CSS_REFERENCE.md).

| Ficha | Categoría | Fuente | Páginas |
|---|---|---|---|
| [Icon](components/Icon.md) | Global | [src/App.tsx:434–516](../../src/App.tsx#L434) | Todas |
| [ImagePlaceholder](components/ImagePlaceholder.md) | Global | [src/App.tsx:518–553](../../src/App.tsx#L518) | PDP, Special, Care, TerritoryGrid oculto |
| [Header](components/Header.md) | Navegación | [src/App.tsx:555–667](../../src/App.tsx#L555) | Todas |
| [SectionHeading](components/SectionHeading.md) | Editorial | [src/App.tsx:669–687](../../src/App.tsx#L669) | Home, CorePdp, DesignSystem |
| [TextLink](components/TextLink.md) | Global | [src/App.tsx:689–707](../../src/App.tsx#L689) | Home, CorePdp, Special, NocturnaPdp, Care, DesignSystem |
| [ProductCard](components/ProductCard.md) | Catálogo | [src/App.tsx:709–783](../../src/App.tsx#L709) | Home, Collection, relacionados CorePdp |
| [Home](components/Home.md) | Página | [src/App.tsx:785–964](../../src/App.tsx#L785) | home |
| [Collection](components/Collection.md) | Catálogo | [src/App.tsx:966–1078](../../src/App.tsx#L966) | collection |
| [Quantity](components/Quantity.md) | Producto | [src/App.tsx:1080–1107](../../src/App.tsx#L1080) | ProductInfo (ambas PDP) |
| [Accordion](components/Accordion.md) | Global | [src/App.tsx:1109–1130](../../src/App.tsx#L1109) | ProductInfo, CareMaterialAccordion, CarePage, DesignSystem |
| [ProductGallery](components/ProductGallery.md) | Producto | [src/App.tsx:1132–1219](../../src/App.tsx#L1132) | CorePdp, NocturnaPdp |
| [ProductInfo](components/ProductInfo.md) | Producto | [src/App.tsx:1221–1345](../../src/App.tsx#L1221) | CorePdp, NocturnaPdp |
| [CorePdp](components/CorePdp.md) | Página | [src/App.tsx:1347–1407](../../src/App.tsx#L1347) | caliza y handles Core |
| [Reveal](components/Reveal.md) | Editorial | [src/App.tsx:1409–1443](../../src/App.tsx#L1409) | Special Landing (incluidos módulos ocultos) |
| [SpecialEditionHero](components/SpecialEditionHero.md) | Editorial | [src/App.tsx:1445–1477](../../src/App.tsx#L1445) | SpecialLanding |
| [EditorialIntro](components/EditorialIntro.md) | Editorial | [src/App.tsx:1479–1494](../../src/App.tsx#L1479) | SpecialLanding |
| [SpecialEditionDetails](components/SpecialEditionDetails.md) | Catálogo | [src/App.tsx:1496–1531](../../src/App.tsx#L1496) | SpecialLanding |
| [EditorialImageText](components/EditorialImageText.md) | Editorial | [src/App.tsx:1533–1563](../../src/App.tsx#L1533) | SpecialLanding ×3 |
| [SpecialEditionProductCTA](components/SpecialEditionProductCTA.md) | Editorial | [src/App.tsx:1565–1591](../../src/App.tsx#L1565) | SpecialLanding oculto |
| [SpecialLanding](components/SpecialLanding.md) | Página | [src/App.tsx:1593–1644](../../src/App.tsx#L1593) | special |
| [NocturnaPdp](components/NocturnaPdp.md) | Página | [src/App.tsx:1646–1685](../../src/App.tsx#L1646) | nocturna y handles Special |
| [EditorialSplitSection](components/EditorialSplitSection.md) | Editorial | [src/App.tsx:1687–1728](../../src/App.tsx#L1687) | Story ×2 |
| [TerritoryCard](components/TerritoryCard.md) | Editorial | [src/App.tsx:1730–1766](../../src/App.tsx#L1730) | TerritoryGrid oculto |
| [TerritoryGrid](components/TerritoryGrid.md) | Editorial | [src/App.tsx:1768–1814](../../src/App.tsx#L1768) | Story oculto |
| [TerritoryEditorialBanner](components/TerritoryEditorialBanner.md) | Editorial | [src/App.tsx:1816–1843](../../src/App.tsx#L1816) | Story |
| [Story](components/Story.md) | Página | [src/App.tsx:1845–1891](../../src/App.tsx#L1845) | story |
| [DesignSystem](components/DesignSystem.md) | Página interna | [src/App.tsx:1893–2021](../../src/App.tsx#L1893) | system |
| [CareIllustration](components/CareIllustration.md) | Producto/editorial | [src/App.tsx:2051–2114](../../src/App.tsx#L2051) | CareScrollStory |
| [CareStep](components/CareStep.md) | Editorial | [src/App.tsx:2116–2149](../../src/App.tsx#L2116) | CareScrollStory ×5 |
| [CareScrollStory](components/CareScrollStory.md) | Editorial | [src/App.tsx:2151–2242](../../src/App.tsx#L2151) | CarePage |
| [CareMaterialAccordion](components/CareMaterialAccordion.md) | Producto/editorial | [src/App.tsx:2244–2256](../../src/App.tsx#L2244) | CarePage ×5 |
| [CarePage](components/CarePage.md) | Página | [src/App.tsx:2258–2467](../../src/App.tsx#L2258) | care |
| [Comparison](components/Comparison.md) | Página interna | [src/App.tsx:2469–2533](../../src/App.tsx#L2469) | compare |
| [Newsletter](components/Newsletter.md) | Global | [src/App.tsx:2535–2572](../../src/App.tsx#L2535) | Footer en todas |
| [Footer](components/Footer.md) | Global | [src/App.tsx:2574–2619](../../src/App.tsx#L2574) | Todas |
| [CartDrawer](components/CartDrawer.md) | Global | [src/App.tsx:2621–2689](../../src/App.tsx#L2621) | Todas |
| [App](components/App.md) | Global | [src/App.tsx:2691–2831](../../src/App.tsx#L2691) | Todas |

Los componentes llamados por un módulo oculto siguen inventariados, pero no se consideran parte visible del diseño aprobado.
