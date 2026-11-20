# Auditoría local de Prestige 11.4.1

Raíz inspeccionada: `/Users/alonsoct/Sites/shopify/rsm-shopify`. Versión confirmada en `config/settings_schema.json:5`: Prestige 11.4.1, Maestrooo. HEAD local `9c76a7ff22de4dfe1782de4a9c49e3ecba30203e`; working tree con cambios previos en README, QA workflow, header-group, header, index y nuevos rsm-header/docs/scripts. No se modifica ni se presume paquete original limpio. Los contratos comerciales leídos se citan por ruta y línea; confirmar de nuevo antes de implementar. La copia no demuestra paridad QA/producción.

Instrucciones consultadas: `AGENTS.md`, `docs/maestrooo/INDEX.md`, `OPEN_QUESTIONS.md`, `RSM_IMPLEMENTATION_MAPPING.md`, `docs/RSM_CUSTOM_ARCHITECTURE.md`, `docs/RSM_DESIGN_CONTEXT.md` y estado actual. El estado histórico y AGENTS difieren sobre algunas autorizaciones operativas: esta entrega es solo lectura/documentación, sin CLI conectado ni cambios externos.

## Contratos verificados por código

| Fuente local del tema | Capacidad confirmada estáticamente | Límite para RSM |
|---|---|---|
| snippets/product-card.liquid:106–134 | Quick Buy cuando show_quick_buy y product.available; producto con una variante y sin selling plans usa product-form, quantity1, on_success force_open_drawer; otros abren quick-buy-modal. | Botón + dentro de figure; ubicación inferior y bolsa+ del prototipo no están resueltas por ese DOM. No mover formulario arbitrariamente ni crear segundo motor. |
| snippets/product-card.liquid:145–234 | Título, precio, vendor opcional, swatches por opciones traducidas/color o swatch data; price-list y option-value. | No se encontró campo específico para Core Cap/modelo ni setting de acciones compartiendo fila inferior. Vendor no es modelo. |
| assets/theme.js:2848–2943 | ProductForm: valida form; aria-busy; POST cart/add.js con bundled sections; éxito variant:add/cart:change; error cart:error + refresh. | Usar ese flujo original; eventos acoplados a versión. No emitir un evento para simular compra. |
| assets/theme.js:4480–4500 | Drawer reacciona a cart:change, variant:add y onSuccessDo force_open_drawer. | Probar con cartType y contexto reales. No se abrió drawer remoto en esta auditoría. |
| sections/main-collection.liquid y snippets/facets.liquid | Grid, sort, filtros, conteo y paginación por objetos Shopify. | Requiere filtros configurados y catálogo real; demo React no es búsqueda real. |
| sections/main-product.liquid + product-info/product-gallery/variant-picker/buy-buttons | Bloques de producto y galería/compra disponibles. | Settings y variaciones concretas en tabla de schemas; combinación visual requiere QA. |
| sections/_blocks.liquid | Acepta @theme y @app. | Un bloque propio no es automáticamente válido en main-product u otra sección de schema restrictivo. |
| blocks/_dynamic-grid-item.liquid | Referencia a subheading. | Falta blocks/subheading.liquid en copia; no usar Dynamic Grid hasta conciliar incidencia. |
| config/settings_schema.json:242,293 | heading_font y text_font con configuración nativa. | Disponibilidad exacta de familias/pesos cargados y resultado por función pendiente. |

Fuentes oficiales de plataforma: [arquitectura](https://shopify.dev/docs/storefronts/themes/architecture), [JSON templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates), [Ajax API](https://shopify.dev/docs/api/ajax), [product template](https://shopify.dev/docs/storefronts/themes/architecture/templates/product/overview). Estas verifican plataforma, no equivalencia visual de Prestige. Consulta realizada el 2026-11-19. El helper de búsqueda de la skill no pudo conectar; se contrastó con fuentes oficiales mediante web. No se generó código Shopify que requiera validación Liquid.

## Schemas inspeccionados

IDs/defaults son contratos del editor local, **no valores efectivos de QA**. `config/settings_data.json` no se lee ni se crea; está protegido por la política local. Los nombres visibles del editor provienen de locales, no se inventan traducciones aquí. Todos los paths siguientes se resuelven contra la raíz del tema arriba indicada; no dependen de un enlace relativo a otro checkout.

### header

Fuente `sections/header.liquid:340`; SHA-256 `3c8ef398ee9b9e0e27c0b2410bdf297e95f988d8278124c95412725eecae95eb`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-2" |  |
| enable_sticky | checkbox | true |  |
| hide_on_scroll | checkbox | false |  |
| show_separation_border | checkbox | true |  |
| reduce_padding | checkbox | false |  |
| logo | image_picker | "Sin default" |  |
| logo_max_width | range | 140 |  |
| logo_mobile_max_width | range | 100 |  |
| menu | link_list | "main-menu" |  |
| sidebar_menu | link_list | "Sin default" |  |
| customer_account_menu | link_list | "customer-account-main-menu" |  |
| menu_open_trigger | select | "hover" | hover, click |
| menu_text_font | select | "heading" | heading, body |
| enable_search | checkbox | true |  |
| sidebar_color_scheme | color_scheme | "scheme-2" |  |
| sidebar_text_font | select | "heading" | heading, body |
| sidebar_show_dividers | checkbox | true |  |
| sidebar_open_second_level_menus | checkbox | false |  |
| layout | select | "logo_left_navigation_inline" | logo_left_navigation_inline, logo_left_navigation_center, logo_center_navigation_inline, logo_center_navigation_below, drawer |
| show_icons | checkbox | true |  |
| show_country_selector | checkbox | true |  |
| show_country_name | checkbox | false |  |
| show_country_flag | checkbox | true |  |
| show_locale_selector | checkbox | false |  |
| transparent_header_text_color | color | "#ffffff" |  |
| transparent_logo | image_picker | "Sin default" |  |

Bloques permitidos: `mega_menu` (menu_item, images_position, image_1, image_1_heading, image_1_text, image_1_link, image_2, image_2_heading, image_2_text, image_2_link).

### footer

Fuente `sections/footer.liquid:230`; SHA-256 `4cadad432f14547f5703c6049b34b895514301db5371ee16c9922318c9a4593f`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-2" |  |
| separate_section_with_border | checkbox | false |  |
| show_social_media | checkbox | true |  |
| show_payment_icons | checkbox | true |  |
| show_powered_by_shopify | checkbox | true |  |
| show_country_selector | checkbox | true |  |
| show_country_name | checkbox | true |  |
| show_country_flag | checkbox | true |  |
| show_locale_selector | checkbox | true |  |

Bloques permitidos: `@app`, `image` (image, image_width, link), `text` (title, content, enable_follow_on_shop), `links` (menu, collapse_on_mobile, show_menu_title, menu_title), `newsletter` (title, content, button_background, button_text_color).

### newsletter

Fuente `sections/newsletter.liquid:82`; SHA-256 `dbbc6c82d6519f9ead91ccb52b11a828406ef3b07d516fc76c2e5291d6a1647f`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-3" |  |
| separate_section_with_border | checkbox | true |  |
| image_size | select | "auto" | auto, sm, md, lg, fill |
| image | image_picker | "Sin default" |  |
| mobile_image | image_picker | "Sin default" |  |
| subheading | inline_richtext | "Keep me updated" |  |
| title | inline_richtext | "Newsletter" |  |
| heading_style | select | "h2" | h1, h2, h3, h4, h5, h6 |
| content | richtext | "<p>A short sentence describing what someone will receive by subscribing.</p>" |  |
| button_text | text | "Subscribe" |  |
| overlay_color | color | "#000000" |  |
| overlay_opacity | range | 0 |  |

Bloques permitidos: Ninguno declarado.

### cart-drawer

Fuente `sections/cart-drawer.liquid:157`; SHA-256 `8cc6485f45bdb2272f31b6824bf22b7adf335e436d20128c9a37a5819f6eeb99`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| show_cart_note | checkbox | true |  |
| allow_discount_application | checkbox | false |  |
| show_shipping_text | checkbox | true |  |
| show_view_cart_button | checkbox | false |  |
| show_checkout_button | checkbox | true |  |
| show_price_in_checkout_button | checkbox | true |  |
| cross_sell_products | product_list | "Sin default" |  |
| cross_sell_title | inline_richtext | "Complete with" |  |
| cross_sell_stack_products | checkbox | false |  |

Bloques permitidos: Ninguno declarado.

### image-with-text-overlay

Fuente `sections/image-with-text-overlay.liquid:108`; SHA-256 `909dc99771d2202f6cddb4136335d2a2b8ce1d2f131b1474fcf606596ffabcc4`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-4" |  |
| image_size | select | "auto" | auto, xs, sm, md, lg, fill |
| image | image_picker | "Sin default" |  |
| mobile_image | image_picker | "Sin default" |  |
| allow_transparent_header | checkbox | false |  |
| reveal_on_scroll | checkbox | true |  |
| remove_vertical_spacing | checkbox | true |  |
| content_width | select | "md" | xxs, xs, sm, md, lg, xl |
| mobile_text_position | select | "place-self-center text-center" | place-self-start text-start, place-self-start-center text-center, place-self-start-end text-end, place-self-center-start text-start, place-self-center text-center, place-self-center-end text-end, place-self-end-start text-start, place-self-end-center text-center, place-self-end text-end |
| desktop_text_position | select | "sm:place-self-center sm:text-center" | sm:place-self-start sm:text-start, sm:place-self-start-center sm:text-center, sm:place-self-start-end sm:text-end, sm:place-self-center-start sm:text-start, sm:place-self-center sm:text-center, sm:place-self-center-end sm:text-end, sm:place-self-end-start sm:text-start, sm:place-self-end-center sm:text-center, sm:place-self-end sm:text-end |
| overlay_color | color | "#000000" |  |
| overlay_opacity | range | 30 |  |

Bloques permitidos: `subheading` (text), `heading` (text, heading_tag), `richtext` (content), `liquid` (liquid), `button` (style, text, url, background, text_color), `link` (text, url).

### image-with-text

Fuente `sections/image-with-text.liquid:113`; SHA-256 `e0b6d9e6a17bb7271012ea063d1b2cdd296222bff4bccb16af1e23e1837e5575`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| image | image_picker | "Sin default" |  |
| mobile_image | image_picker | "Sin default" |  |
| reveal_on_scroll | checkbox | true |  |
| image_position | select | "Sin default" | start, end |
| content_width | select | "sm" | sm, md, lg |
| remove_vertical_spacing | checkbox | true |  |

Bloques permitidos: `subheading` (text), `heading` (text, heading_tag), `richtext` (content), `page` (page), `liquid` (liquid), `link` (text, url), `button` (style, text, url, background, text_color).

### rich-text

Fuente `sections/rich-text.liquid:109`; SHA-256 `a4c82715ead6980ec10365a1af9caa81110c915e9cc3f07219091d95b4fb2bfb`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| content_width | select | "sm" | xs, sm, md, lg |
| text_position | select | "center" | start, center, end |
| remove_vertical_spacing | checkbox | false |  |

Bloques permitidos: `subheading` (text), `heading` (text, heading_tag), `richtext` (content), `page` (page), `link` (text, url), `image` (image, width_mode, max_width, mobile_max_width), `video` (video), `button` (style, text, url, background, text_color), `liquid` (liquid).

### featured-collections

Fuente `sections/featured-collections.liquid:120`; SHA-256 `ec4958545c48777a8f8e12465b05874f14cc89f9340faf5f413f9ef5750a4457`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| hide_product_information | checkbox | "Sin default" |  |
| stack_products | checkbox | false |  |
| products_per_row_mobile | select | "2" | 1, 2 |
| products_per_row_desktop | range | 4 |  |
| horizontal_spacing_factor | range | 1 |  |
| vertical_spacing_factor | range | 1 |  |
| header_alignment | text_alignment | "center" |  |
| heading_style | select | "h2" | h1, h2, h3, h4, h5, h6 |
| subheading | inline_richtext | "Featured collection" |  |
| hide_collection_title | checkbox | false |  |

Bloques permitidos: `collection` (collection, products_count, title, link_url, link_text).

### collection-banner

Fuente `sections/collection-banner.liquid:106`; SHA-256 `57516494609b27e38d4fc198c2b67585e7744b2c4c49f9e0697ffd2b7b6de429`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-4" |  |
| image | image_picker | "Sin default" |  |
| mobile_image | image_picker | "Sin default" |  |
| image_size | select | "auto" | auto, xs, sm, md, lg |
| allow_transparent_header | checkbox | true |  |
| show_image | checkbox | true |  |
| reveal | checkbox | true |  |
| enable_parallax | checkbox | true |  |
| show_collection_title | checkbox | true |  |
| show_collection_description | checkbox | true |  |
| show_breadcrumb | checkbox | true |  |
| content_width | select | "xs" | xxs, xs, sm, md, lg, xl |
| text_alignment | text_alignment | "center" |  |
| overlay_color | color | "#000000" |  |
| overlay_opacity | range | 30 |  |

Bloques permitidos: Ninguno declarado.

### main-collection

Fuente `sections/main-collection.liquid:320`; SHA-256 `cf44760a67293797391dfa0a6f7882b7ba1db2d372afe1b92ef7388ec5662d8b`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| hide_product_information | checkbox | "Sin default" |  |
| products_per_page | range | 48 |  |
| products_per_row_mobile | select | "2" | 1, 2 |
| products_size_desktop | select | "medium" | compact, medium, large |
| show_grid_mode_selector | checkbox | true |  |
| horizontal_spacing_factor | range | 1 |  |
| vertical_spacing_factor | range | 1 |  |
| filter_layout | select | "sidebar" | sidebar, drawer |
| quick_links_menu | link_list | "Sin default" |  |
| show_sort_by | checkbox | true |  |
| show_filters | checkbox | true |  |
| show_results_count | checkbox | true |  |
| show_filter_group_name | checkbox | false |  |
| show_filter_values_count | checkbox | true |  |
| open_filters_by_default | checkbox | false |  |

Bloques permitidos: `push_promo` (color_scheme, bordered, position, size, media_type, image, mobile_image, video, mobile_video, overlay_color, content_position, alignment, subheading, heading, heading_tag, style, link_text, url).

### main-product

Fuente `sections/main-product.liquid:224`; SHA-256 `1dd088c40c2b192d4a8d0c201b441741f7ce3abf1b86afb18dafb7f161d15f32`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| allow_transparent_header | checkbox | false |  |
| transparent_header_use_primary_colors | checkbox | false |  |
| container_size | select | "lg" | lg, xl, full |
| product_info_size | range | 35 |  |
| show_sticky_add_to_cart | checkbox | true |  |
| center_basic_info | checkbox | false |  |
| desktop_media_layout | select | "grid" | grid, grid_2x, grid_2x_highlighted, carousel_thumbnails_left, carousel_thumbnails_bottom, carousel_dots |
| desktop_media_grid_gap | range | 30 |  |
| mobile_controls | select | "dots" | dots, thumbnails, free_scroll |
| enable_media_autoplay | checkbox | false |  |
| enable_video_looping | checkbox | true |  |
| enable_image_zoom | checkbox | true |  |
| max_image_zoom_level | range | 3 |  |

Bloques permitidos: `@app`, `vendor`, `title` (heading_tag), `sku`, `badges` (), `price` (show_taxes_notice), `rating` (show_empty, rating_mode), `payment_terms` (), `separator`, `description` (collapse_content, show_below_gallery), `variant_picker` (hide_sold_out_variants, selector_style, swatch_selector_style, variant_image_options, variant_image_show_underline, size_chart_page), `product_variations` (option_name, option_value_metafield, products, selector_style), `line_item_property` (label, type, required, allow_long_text, max_length, checkbox_value, select_values), `quantity_selector` (), `volume_pricing` (), `inventory` (show_in_stock_quantity, low_inventory_threshold, show_progress_bar, progress_bar_max_value), `buy_buttons` (show_payment_button, show_gift_card_recipient, atc_button_background, atc_button_text_color, payment_button_background, payment_button_text_color), `pickup_availability` (), `complementary_products` (title, products_count, show_below_gallery, stack_products, show_quick_buy), `offers` (stack_offers, offer_1_title, offer_1_content, offer_2_title, offer_2_content, offer_3_title, offer_3_content, background, text_color, border_color), `feature_with_icon` (text, link, icon, custom_icon, icon_width, background, text_color, border_color), `text` (text), `accordion` (show_below_gallery, icon, custom_icon, title, content, liquid, page), `disclosures` (collapse_content, show_below_gallery), `liquid` (liquid), `modal` (button_title, button_style, stretch_button, button_background, button_text_color, modal_title, modal_content), `image` (image, alignment, width_mode, max_width, mobile_max_width), `button` (link, text, stretch, background, text_color), `share_buttons` (), `more_information` (text).

### related-products

Fuente `sections/related-products.liquid:73`; SHA-256 `927a0980548ba069616e1a35d0b113ed06ac6d1b4e743a358ac27eca5e3c4275`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| hide_product_information | checkbox | "Sin default" |  |
| stack_products | checkbox | false |  |
| recommendations_count | range | 10 |  |
| products_per_row_mobile | select | "2" | 1, 2 |
| products_per_row_desktop | range | 4 |  |
| horizontal_spacing_factor | range | 1 |  |
| vertical_spacing_factor | range | 1 |  |
| subheading | inline_richtext | "Sin default" |  |
| title | inline_richtext | "Related products" |  |
| heading_style | select | "h2" | h1, h2, h3, h4, h5, h6 |
| content | richtext | "Sin default" |  |

Bloques permitidos: Ninguno declarado.

### multi-column

Fuente `sections/multi-column.liquid:115`; SHA-256 `5dd547deb526f1f619628f3469fd48283d17c964497659bd96c7cffc77ee7310`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| columns_per_row | range | 3 |  |
| stack_on_mobile | checkbox | false |  |
| overlap_image | checkbox | false |  |
| content_alignment | select | "start" | start, center, end |
| text_alignment | select | "start" | start, center, end |
| spacing | select | "md" | xs, sm, md, lg |
| subheading | inline_richtext | "About" |  |
| title | inline_richtext | "Multi-column" |  |
| heading_style | select | "h2" | h1, h2, h3, h4, h5, h6 |
| content | richtext | "Sin default" |  |

Bloques permitidos: `image_with_text` (image, title, heading_tag, content, link_url, link_text), `video_with_text` (video, autoplay, loop, play_button_background, title, heading_tag, content, link_url, link_text).

### media-grid

Fuente `sections/media-grid.liquid:124`; SHA-256 `dd71763d6bb703aa1f0d9da3b619a55ec1522151eabde3948e8bdcbf75c3cd4f`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| desktop_row_height | range | 290 |  |
| mobile_row_height | range | 180 |  |
| section_width | select | "lg" | xs, sm, md, lg, full |
| spacing | select | "md" | none, xs, sm, md, lg |
| subheading | inline_richtext | "Sin default" |  |
| title | inline_richtext | "Media grid" |  |
| heading_style | select | "h2" | h1, h2, h3, h4, h5, h6 |
| content | richtext | "Sin default" |  |

Bloques permitidos: `image` (color_scheme, image, column_count, row_count, add_padding, title, heading_tag, content, link_text, link_url, link_style, text_position, overlay_color, overlay_opacity), `video` (color_scheme, video, autoplay, show_controls, column_count, row_count, add_padding, title, heading_tag, content, link_text, link_url, link_style, text_position, overlay_color, overlay_opacity).

### multiple-media-with-text

Fuente `sections/multiple-media-with-text.liquid:158`; SHA-256 `88689cd4a5296ce2f78ecbb5615746879f540ddb85637356231676a55f3fb531`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| reveal_on_scroll | checkbox | true |  |
| separate_section_with_border | checkbox | true |  |
| media_position_desktop | select | "before_text" | before_text, after_text |
| media_position_mobile | select | "before_text" | before_text, after_text |
| media_layout | select | "overlap" | overlap, separated |
| media_alignment | select | "center" | start, center, end |
| media_alignment_offset | range | 0 |  |
| media_mobile_alignment_offset | range | 0 |  |
| text_alignment | select | "center" | start, center, end |
| subheading | inline_richtext | "About" |  |
| title | inline_richtext | "Showcase your product" |  |
| heading_style | select | "h3" | h1, h2, h3, h4, h5, h6 |
| content | richtext | "<p>Write some content about your products, collections or brand. Use image or video to create an impactful layout.</p>" |  |
| button_1_text | text | "Sin default" |  |
| button_1_link | url | "Sin default" |  |
| button_1_style | select | "solid" | outline, solid, link |
| button_2_text | text | "Sin default" |  |
| button_2_link | url | "Sin default" |  |
| button_2_style | select | "solid" | outline, solid, link |

Bloques permitidos: `image` (image, rotation), `video` (video, rotation).

### scrolling-content

Fuente `sections/scrolling-content.liquid:48`; SHA-256 `5e6f1d2407337cc620ba3cd2ec43063bd1d9e4f2069662f243723f976f28f2bf`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| separate_section_with_border | checkbox | true |  |
| scrolling_speed | range | 0.3 |  |
| scroll_direction | select | "left" | left, right |
| pause_on_hover | checkbox | false |  |
| text_font | select | "heading" | heading, body |
| text_font_size_mobile | range | 40 |  |
| text_font_size_desktop | range | 96 |  |
| section_vertical_spacing_mobile | range | 60 |  |
| section_vertical_spacing_desktop | range | 80 |  |
| item_horizontal_spacing_mobile | range | 80 |  |
| item_horizontal_spacing_desktop | range | 120 |  |
| background | color | "Sin default" |  |
| text_color | color | "Sin default" |  |

Bloques permitidos: `text` (text), `image` (image).

### faq

Fuente `sections/faq.liquid:91`; SHA-256 `e6eca7e699f04c77d5592545034ba1326ed6e1461dd8240cb187f7e49f871992`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| show_categories | checkbox | "Sin default" |  |
| subheading | inline_richtext | "Need help?" |  |
| title | inline_richtext | "Frequently Asked Questions" |  |
| heading_style | select | "h2" | h1, h2, h3, h4, h5, h6 |
| content | richtext | "Sin default" |  |

Bloques permitidos: `category` (title, icon, custom_icon, icon_width), `question` (question, answer).

### custom-liquid

Fuente `sections/custom-liquid.liquid:13`; SHA-256 `10bdf11eed2411c48d1b92430fe10b83e1e14da1376fd4c9c2cf39fc46ed3960`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| remove_vertical_spacing | checkbox | false |  |
| remove_horizontal_spacing | checkbox | false |  |
| liquid | liquid | "<p>Write or copy/paste Liquid code</p>" |  |
| text_alignment | select | "center" | start, center, end |

Bloques permitidos: Ninguno declarado.

### _blocks

Fuente `sections/_blocks.liquid:15`; SHA-256 `07b8f25ef7b429019000f0423b13d0066397cd9e5082540f616bf634dff0eda8`.

| Setting ID | Tipo | Default declarado | Opciones si aplica |
|---|---|---|---|
| color_scheme | color_scheme | "scheme-1" |  |
| separate_section_with_border | checkbox | true |  |
| remove_vertical_spacing | checkbox | false |  |
| remove_horizontal_spacing | checkbox | false |  |

Bloques permitidos: `@theme`, `@app`.

## Pendientes que no resuelve la lectura local

- Rol actual y paridad de QA 187349401900 y producción protegida 187330724140, sin contacto remoto.
- Settings efectivos, color schemes y embeds; no inferir por defaults del schema.
- Catálogo, precios, medidas, materiales, stock, variantes y colecciones reales.
- Idiomas publicados y configuración de Translate & Adapt; preservar español/inglés y cualquier integración existente.
- Resultado renderizado, eventos de carrito, editor reload/unload y foco con apps activas.
- Dynamic Grid/subheading faltante; contenido demo y opciones heredadas en plantillas. La documentación anterior de Maestrooo cita estado previo: revalidar cada incidencia antes de declararla actual.
- Hook global de recursos RSM: no descubrimiento automático de rsm.css/rsm.js. Recursos por sección propia son preferibles; una modificación de layout/Core exige propuesta y autorización separadas.
