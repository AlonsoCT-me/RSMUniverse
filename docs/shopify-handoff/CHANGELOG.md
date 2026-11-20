# Changelog del handoff

## 2026-11-19 — Generación inicial

- Se documenta el working tree de referencia f89e54f1ebdf9bef9637862e434b595cd60cc7e5 con 9 vistas, 37 componentes, 8 productos y 34 imágenes raster.
- Se extraen 681 reglas CSS, contratos/props/estados/inline y breakpoints reales con fuentes.
- Se verifica copia local Prestige 11.4.1, contratos comerciales y 19 schemas; no se verifica QA remoto ni configuración efectiva.
- Se registra documentación histórica desactualizada, contenido oculto y cascada que requiere decisiones, sin corregir código.
- Se generan matriz, contratos condicionales, plan de ocho fases y proceso de validación/mantenimiento.
- Alcance exclusivo docs/shopify-handoff. Sin implementación Shopify, cambios de código/activos ni operaciones Git/remotas.

## Formato para próximas entradas

Fecha local ISO y título; revisión fuente/hash; componentes/selectores/medios/rutas afectados; descripción del cambio real; fichas de página actualizadas; impacto Shopify/mapeo; decisiones Dxx (estado, responsable, evidencia); validaciones ejecutadas y pendientes; desviaciones aprobadas y limitaciones. Los cambios propuestos se identifican como propuestas hasta implementación y aceptación.

## Registro de decisiones

| ID | Estado | Decisión | Responsable/evidencia |
|---|---|---|---|
| A01 | Regla vigente | Native First + RSM Custom Layer; preservar motores comerciales y Core. | Brief + AGENTS de Shopify; PRESTIGE_AUDIT. |
| A02 | Pendiente | Destino CTA Historia/Sin fronteras y CTA duplicado en colección Home. | Ver D10 y pages/HOME; responsable de diseño/UX. |
| A03 | Pendiente | Gap4 real, orden de splits y visibilidad TerritoryGrid. | D06–D09, responsable de diseño. |
| A04 | Pendiente | Punto de integración visual ProductCard sin alterar Core. | Prueba nativa propuesta en IMPLEMENTATION_PLAN. |
| A05 | Pendiente | Campos de producto/medidas/materiales/precios oficiales e IDs Shopify. | CATALOG; responsable de catálogo. |

No hay sincronización automática con React ni con el tema. Cada entrada exige conciliación manual y verificación de fuentes.
