# Documentación técnica — RSM Universe

Índice maestro de arquitectura, componentes, auditorías y preparación para Shopify. Para la presentación breve y el enlace al prototipo, consultar el [README principal](../README.md).

## Estado tecnológico verificado

React, TypeScript, Vite, SCSS y GitHub Pages corresponden al repositorio actual. Los estilos propios están organizados en SCSS y se compilan con Sass.

**Tailwind CSS todavía está activo:** aparece en [package.json](../package.json), su plugin se carga en [vite.config.ts](../vite.config.ts) y [src/index.css](../src/index.css) lo importa. Su eliminación no está completada ni se realiza como parte de esta actualización documental. El README principal no afirma que haya sido eliminado; los detalles técnicos y esta discrepancia se mantienen aquí.

## Arquitectura y especificaciones

| Documento | Contenido |
|---|---|
| [REACT_ARCHITECTURE.md](REACT_ARCHITECTURE.md) | Páginas, componentes y flujo de datos. |
| [SCSS_ARCHITECTURE.md](SCSS_ARCHITECTURE.md) | Parciales, cascada, breakpoints y tipografía. |
| [SCSS_STYLE_MAP.md](SCSS_STYLE_MAP.md) | Correspondencia y emisión de estilos. |
| [SECTION_CONTAINER_SYSTEM.md](SECTION_CONTAINER_SYSTEM.md) | Contenedores, gutters y reglas específicas de secciones. |
| [RSM_DESIGN_IMPLEMENTATION_SPEC.md](RSM_DESIGN_IMPLEMENTATION_SPEC.md) | Especificación de referencia; sus datos históricos deben contrastarse con las auditorías posteriores y el código actual. |

## Componentes reutilizables

| Documento | Contenido |
|---|---|
| [EDITORIAL_SPLIT_SECTION.md](EDITORIAL_SPLIT_SECTION.md) | Variantes static/slider, distribución y controles. |
| [MEDIA_HERO.md](MEDIA_HERO.md) | Hero image/video, configuración y accesibilidad. |
| [PRODUCT_PRICE.md](PRODUCT_PRICE.md) | Precios, descuentos, badges y estados de demostración. |

## Auditorías y recursos multimedia

| Documento | Contenido |
|---|---|
| [FINAL_TECHNICAL_AUDIT.md](FINAL_TECHNICAL_AUDIT.md) | Evidencia técnica y límites de la preparación para Shopify. |
| [DOCUMENTATION_SYNC_REPORT.md](DOCUMENTATION_SYNC_REPORT.md) | Discrepancias y sincronización documental. |
| [MOBILE_RESPONSIVE_AUDIT.md](MOBILE_RESPONSIVE_AUDIT.md) | Auditoría responsive y pruebas históricas. |
| [Evidencia responsive](mobile-responsive-evidence/) | Capturas y mediciones asociadas. |
| [ASSET_INVENTORY.md](ASSET_INVENTORY.md) | Inventario, usos, excepciones y destinos propuestos. |
| [asset-inventory.json](asset-inventory.json) | Hashes, referencias y metadatos completos de la auditoría de assets. |
| [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md) | Conversiones WebP, duplicados, calidad y resultados. |
| [ASSET_MASTERS.md](ASSET_MASTERS.md) | Preservación y recuperación de originales de alta resolución. |

## Preparación para Shopify Prestige

| Documento | Contenido |
|---|---|
| [PRESTIGE_COMPONENT_MAPPING.md](PRESTIGE_COMPONENT_MAPPING.md) | Equivalencias nativas y posibles extensiones. |
| [SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md](SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md) | Dependencias, fases y validación futura en QA. |
| [CLIENT_CONTENT_REQUIREMENTS.md](CLIENT_CONTENT_REQUIREMENTS.md) | Contenido disponible, confirmaciones y recursos pendientes. |

Estos documentos son preparación preliminar: no constituyen un handoff definitivo ni autorización para modificar o publicar un tema Shopify.

## Operación del prototipo y revisión

| Documento | Contenido |
|---|---|
| [DEPLOYMENT.md](DEPLOYMENT.md) | Guía existente de GitHub Pages y validación; revisar su contexto antes de realizar operaciones. |
| [USERBACK_INTEGRATION.md](USERBACK_INTEGRATION.md) | Integración de revisión y sus restricciones. |

Los resultados de cada auditoría corresponden a su versión y alcance. No equivalen a una validación reciente de producción ni convierten datos demostrativos en contenido comercial aprobado.
