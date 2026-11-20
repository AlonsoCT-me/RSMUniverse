# Newsletter

**Categoría:** Global. **Fuente:** [src/App.tsx:2535–2572](../../../src/App.tsx#L2535). **Exportación:** local al módulo; no exportado.

## Contrato actual

```tsx
Sin props.
```

**Consumidores directos:** Footer. **Alcance:** Footer en todas.

**Dependencias hijas:** [Icon](Icon.md)

**Estados, variantes e interacciones:** email/sent locales; preventDefault; required email del navegador; éxito en memoria sin enviar red ni guardar cliente.

## Estilos y herencia

Hereda Figtree 400/16 px y color de body salvo regla propia o contexto dark; serif se aplica en selectores concretos. Preflight de Tailwind elimina márgenes/bordes por defecto y hace heredar fuente a controles. Consultar [Design System](../DESIGN_SYSTEM.md) para cascada. Los hijos tienen sus fichas; las clases compartidas `.button`, `.shell`, `.eyebrow`, `.hidden`, `.sr-only`, `.swatches` conservan su definición canónica en la referencia CSS.

| Regla | Contexto / alcance | Fuente |
|---|---|---|
| [`.sr-only`](../CSS_REFERENCE.md#r010) | Base sin capa | [CSS:58](../../../src/index.css#L58) |
| [`.eyebrow--light`](../CSS_REFERENCE.md#r013) | Base sin capa | [CSS:81](../../../src/index.css#L81) |

## Overrides inline y assets

No declara assets raster ni estilos inline propios; los obtiene de hijos o CSS del contexto.

El inventario [ASSETS](../ASSETS.md) resuelve rutas, dimensiones y usos; el catálogo está en [CATALOG](../CATALOG.md).

## Adaptación y aceptación

**Propuesta Shopify:** Sección newsletter y form customer nativos; revisar consentimiento y traducciones.

**Responsive:** aplicar todas las reglas del cuadro por orden, incluidas redefiniciones al final de CSS. Anchos QA 1440/1024/768/430/390/375 no son breakpoints nuevos. Comparar contexto de página, cadenas largas y es/en; verificar foco, touch y reduced motion.

**Aceptación:** conservar composición y estados descritos, validar assets/alt y navegación; para controles comerciales, reemplazar la simulación por el contrato nativo de Prestige sin duplicar motores. La verificación de código del tema no certifica el resultado en QA. Ver [mapeo](../SHOPIFY_MAPPING.md) y [validación](../VALIDATION.md).
