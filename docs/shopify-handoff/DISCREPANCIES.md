# Discrepancias, decisiones y riesgos

Este registro no corrige diseño/código. **Código vigente tiene prioridad descriptiva** frente a RSM_DESIGN_IMPLEMENTATION_SPEC.md y textos del DesignSystem/Comparison. Resolver intención de diseño con el responsable antes de trasladar defectos o cambiar comportamiento.

| ID | Evidencia vigente | Documento/expectativa diferente | Acción recomendada; estado |
|---|---|---|---|
| D01 | App routes/resolveRouteState/App: todas las páginas usan hash, incluida Care. | Spec histórica afirma pushState/pathname para Care. | Documentar hash actual; Shopify usa URLs nativas localizadas. Resuelto documentalmente. |
| D02 | ProductGallery usa images reales y navegación; ProductCard usa dos imágenes si existen. | Spec dice imágenes de producto placeholders. | Inventario actualizado; placeholders solo en editoriales pendientes. |
| D03 | ProductCard Quick Add y cartItems por producto con cantidad. | Spec describe carrito genérico y ausencia de compra desde cards. | Documentar nueva simulación; no inferir backend por UI. |
| D04 | SpecialEditionDetails itera cuatro productos reales con imagen/nombre/shortDescription. | Spec conserva triptych/bento de otra versión. | Multi-producto como fuente; módulos editoriales placeholder permanecen. |
| D05 | se-lifestyle y SpecialEditionProductCTA llevan hidden. | Spec incluye ambos en secuencia visible. | Excluir del primer storefront; requieren reactivación aprobada. |
| D06 | Story monta TerritoryGrid, pero la raíz lleva hidden. | Brief/Spec esperan grilla territorial visible. | Inventariada pero fuera de secuencia visual; decidir si se reactiva. |
| D07 | TerritoryEditorialBanner tiene tres hijos y CSS40/30/30; <=1100 y <=900 conserva3, <=540 apila1. | Spec dice4 columnas →2×2 →1 y puerta provisional. | No usar arquitectura vieja; puerta/horse sin uso actual. |
| D08 | Story usa ambos splits con reverse false; CSS52/48 y min480 en copy. | Spec dice30/70 y reverse70/30. | Registrar composición actual; no invertir automáticamente. |
| D09 | .page-light declara gap4px pero no display grid/flex; hijos en flujo block. | Solicitud pide documentar separación4px si implementada. | Valor declarado existe, separación efectiva no. Confirmar intención antes de añadir gap real. |
| D10 | Home historia CTA visible llama navigate(collection); texto dice Conoce nuestra historia. | Intención narrativa sugiere Story. | Decisión de producto pendiente, no corregido. Sin fronteras también dirige colección aunque texto diga universo. |
| D11 | Home Sin fronteras background inline JPEG y H260; CSS fallback WebP/H2 mobile52. | Solo leer CSS produce foto/tamaño incorrectos. | Inline prevalece; migrar composición actual o registrar cambio aprobado. |
| D12 | Header logo inline width120 y height fit-content. | CSS marca80 desktop/68 mobile. | 120 efectivo mientras inline; no asumir68 en Shopify. |
| D13 | Home Special h2 inline50 y CTA width123/minWidth240; Historia H2 inline clamp39–60/line.9 y padding-bottom100. | Mobile CSS propone47 y padding70. | Respetar prioridad inline y mínimo; criterios explícitos en HOME. |
| D14 | .story-hero > div:last-child tiene especificidad mayor que .story-hero__content en mobile. | Última regla por orden no siempre gana. | En <=540 left/right24,bottom70 de selector anterior pueden prevalecer sobre bottom64; confirmar estilo computado. |
| D15 | Related .product-grid--featured3 columnas más específico que regla genérica2 en <=900; a <=540 existe override específico2. | Presumir todos los grids2 en tablet. | Conservar resultado actual y evaluar legibilidad; documentado. |
| D16 | ProductInfo variants branch marca primera opción pero sin handlers; ocho productos sin variants. | “Swatches” puede interpretarse selector funcional. | No copiar estado ficticio; Shopify variant-picker y disponibilidad nativos. |
| D17 | Todos precios1599 y pendingConfirmation contiene price; atributos provisionales. | Catálogo visual parece definitivo. | No publicar importes/materiales/tallas como confirmados; CATALOG canónico. |
| D18 | .availability contiene envío/impuestos, punto verde estático. | Podría interpretarse stock disponible. | Usar inventario real y copy aprobado; no inferir disponibilidad. |
| D19 | Header buscar/cuenta; Footer legales/contacto; Checkout/paginación/Disponibilidad sin handlers. | Parecen acciones funcionales. | Conectar mecanismos nativos en implementación; no reproducir controles falsos. |
| D20 | Menú y drawer React sin trap/Escape/retorno/scroll lock; Accordion sin aria-controls. | Un modal ARIA no certifica accesibilidad completa. | Preservar mecanismos nativos Prestige y verificar con teclado/lectura. |
| D21 | Reveal depende de IntersectionObserver y opacity0; reduced motion solo acorta CSS. | Puede confundirse con fallback sin JS. | Nativo o contenido visible sin JS en Shopify; fallback y editor requeridos. |
| D22 | src/imports/home-SIN_FRONTERAS-2.jpg pesa varios MB; CSS/JS assets sin srcset en React. | “Optimizado” no se deduce de extensión o presencia de WebP. | Peso exacto ASSETS; usar responsive media en destino, sin alterar originales ahora. |
| D23 | Copy visible Google Fonts Cormorant carga600, algunos selectores solo fijan familia y heredan400. | Spec puede dar600 a todo serif. | Separar declaración CSS, resolución disponible y aprobación tipográfica. |
| D24 | main Story es page-light block, .story-split__inner estilos históricos no tienen DOM actual. | Reglas viejas parecen aplicables a layout nuevo. | No trasladar wrappers inexistentes; fichas enlazan clases efectivas. |
| D25 | Referencia Maestrooo de 12nov dice tema187330724140 unpublished; contexto actual dice producción protegida. | Conflicto operativo documental. | Producción187330724140 protegida, QA187349401900; rol remoto no revalidado. No ejecutar comandos basados en texto histórico. |
| D26 | Docs históricas Shopify dicen sin personalización; working tree actual tiene header y rsm-header.css. | Podría sobreescribirse trabajo ya existente. | Conservar y conciliar; auditoría estática no equivale a baseline original ni QA renderizado. |

## Riesgos de migración prioritarios

1. **Catálogo:** ocho objetos de demostración no equivalen al catálogo Shopify; confirmar precios, medidas, composición, opciones, inventario y políticas. No migrar instrucciones de cuidado como especificaciones de material.
2. **Fidelidad:** herencia Preflight, CSS sin capas, inline, especificidad y reglas históricas producen resultados distintos de una tabla de tokens idealizada. Comparar estilos computados y screenshots junto con el código, no a partir de imágenes únicamente.
3. **Tarjeta comercial:** el DOM nativo coloca quick-buy dentro de figure; CSS no siempre puede moverlo a fila de swatches sin impacto. No clonar formulario/variante para evitar revisar una excepción Core.
4. **Contenido/editor:** oculto no significa eliminado; Theme Editor debe conservar contenido editado, múltiples instancias y es/en. Faltan varias fotografías editoriales.
5. **Tema/entornos:** settings_data/embeds no verificados; working tree Shopify con cambios; ausencia de subheading en Dynamic Grid. Un tema QA comparte catálogo/apps/idiomas con producción.
6. **Accesibilidad/rendimiento:** no hay medición nueva de contraste, Lighthouse o lector de pantalla en esta entrega; el tamaño del JPG importado y carga de fuentes requieren validar recursos en Shopify.

Las discrepancias se consideran registradas, no automáticamente autorizadas para corrección. Registrar resolución con ID, decisión, responsable, fuente/captura y alcance en CHANGELOG.
