# Documentación técnica — RSM Universe

Índice incorporado el 24 de noviembre de 2026. La copia revisada no contenía este README, FINAL_TECHNICAL_AUDIT ni DOCUMENTATION_SYNC_REPORT; se crean como integración del complemento solicitado, sin inventar una auditoría previa ausente.

## Auditoría y preparación preliminar para Shopify

| Documento | Propósito |
|---|---|
| [FINAL_TECHNICAL_AUDIT.md](FINAL_TECHNICAL_AUDIT.md) | Evidencia actual, alcance y límites del complemento técnico. No es aceptación de producción. |
| [PRESTIGE_COMPONENT_MAPPING.md](PRESTIGE_COMPONENT_MAPPING.md) | 48 unidades: equivalentes de Prestige 11.4.1, schemas verificados, brechas y personalizaciones potenciales. |
| [SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md](SHOPIFY_QA_IMPLEMENTATION_STRATEGY.md) | Estado local/documentado de QA, entornos, fases por dependencias y criterios de aceptación. |
| [CLIENT_CONTENT_REQUIREMENTS.md](CLIENT_CONTENT_REQUIREMENTS.md) | Recursos disponibles, medidas reales, catálogo provisional y checklist sin solicitudes duplicadas. |
| [DOCUMENTATION_SYNC_REPORT.md](DOCUMENTATION_SYNC_REPORT.md) | Discrepancias, método, fuentes, controles de alcance y pendientes. |

**Estado:** planificación exclusivamente local. No se modifica el prototipo publicado, el repositorio Shopify ni QA/producción. No se ejecuta CLI, conexión remota, sincronización, instalación, commit, push o publicación. No existe entrega nueva en docs/shopify-handoff/.

## Assets y rendimiento multimedia

- [ASSET_INVENTORY.md](ASSET_INVENTORY.md): inventario definitivo de archivos, usos, destinos y excepciones; [JSON con hashes y referencias](asset-inventory.json).
- [ASSET_OPTIMIZATION_REPORT.md](ASSET_OPTIMIZATION_REPORT.md): métricas antes/después, duplicados, calidad y validación funcional.
- [Maestros no públicos](../asset-masters/README.md): originales de alta resolución preservados, fuera de los builds.

La entrega documental anterior fue solo planificación. La optimización de assets posterior modifica exclusivamente recursos y referencias autorizados, sin intervenir en Shopify ni publicar.

## Arquitectura y componentes del prototipo

| Documento | Alcance |
|---|---|
| [REACT_ARCHITECTURE.md](REACT_ARCHITECTURE.md) | Estructura React, páginas, componentes y flujo de datos. |
| [SCSS_ARCHITECTURE.md](SCSS_ARCHITECTURE.md) | Parciales, cascada, breakpoints y escala tipográfica. |
| [SCSS_STYLE_MAP.md](SCSS_STYLE_MAP.md) | Correspondencia de módulos y emisión de estilos. |
| [SECTION_CONTAINER_SYSTEM.md](SECTION_CONTAINER_SYSTEM.md) | Contenido contained/full-width y máximo de 1520px. |
| [EDITORIAL_SPLIT_SECTION.md](EDITORIAL_SPLIT_SECTION.md) | Static/slider, layouts, ratios y controles. |
| [MEDIA_HERO.md](MEDIA_HERO.md) | Hero image/video, API, accesibilidad y limitación de reproducción real. |
| [PRODUCT_PRICE.md](PRODUCT_PRICE.md) | Precios regulares/promocionales, badges y demostraciones aisladas. |
| [MOBILE_RESPONSIVE_AUDIT.md](MOBILE_RESPONSIVE_AUDIT.md) | Auditoría histórica responsive y evidencia asociada. |
| [USERBACK_INTEGRATION.md](USERBACK_INTEGRATION.md) | Integración exclusiva de revisión; no autoriza trasladarla a Shopify. |

Los resultados históricos de pruebas pertenecen a la versión y alcance de su documento; no equivalen a una ejecución nueva ni a validación del tema QA. La apariencia del prototipo y los estados de muestra tampoco constituyen catálogo comercial aprobado.
