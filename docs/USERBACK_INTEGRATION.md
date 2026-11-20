# Userback en el prototipo de revisión RSM Universe

Integración del widget oficial para comentarios visuales sobre GitHub Pages, sin crear un sistema propio de feedback ni modificar el prototipo comercial o Shopify. Fecha de revisión: 2026-11-19.

## Archivos y arquitectura

| Archivo | Cambio |
|---|---|
| [src/userback.ts](../src/userback.ts) | Inicializador centralizado, configuración pública y guardas de carga. |
| [src/main.tsx](../src/main.tsx) | Importa y ejecuta `initUserback()` una vez en el arranque, fuera de los efectos de StrictMode. |
| [src/vite-env.d.ts](../src/vite-env.d.ts) | Tipado opcional de la variable de Vite. |
| [.github/workflows/deploy-pages.yml](../.github/workflows/deploy-pages.yml) | Pasa `vars.VITE_USERBACK_ACCESS_TOKEN` como variable de entorno al paso de validación/build del despliegue. |
| [scripts/verify-userback.mjs](../scripts/verify-userback.mjs) | Pruebas locales de carga, exclusión por entorno e idempotencia, sin red ni credenciales reales. Usa Node y TypeScript ya presentes. |
| [Este documento](USERBACK_INTEGRATION.md) | Configuración, seguridad, pruebas, límites y retirada. |

No se cambian `App.tsx`, CSS, catálogo, rutas, carrito, páginas, Vite, dependencias, workflow CI ni acción compuesta compartida. `main.tsx` monta React de la misma forma; solo añade el arranque del widget.

Se conserva el método oficial de snippet: configurar `window.Userback.access_token`, crear un script asíncrono con URL `https://static.userback.io/widget/v1.js` y añadirlo a head/body. No se define `Userback.user_data`, nombre, correo ni usuario ficticio. La [documentación de instalación](https://docs.userback.io/docs/widget-installation-methods) publica este método para sitios/web apps; no hace falta instalar el SDK npm.

## Cuándo se carga

Todas estas condiciones deben cumplirse:

1. `import.meta.env.PROD` es verdadero y `MODE` es `production`.
2. `BASE_URL` es exactamente `/RSMUniverse/`, como en el build actual con `GITHUB_PAGES=true`.
3. La página está en `https://alonsoct-me.github.io`, dentro del pathname `/RSMUniverse/`.
4. `VITE_USERBACK_ACCESS_TOKEN` contiene texto no vacío después de trim.
5. No existe ya un script con la URL oficial.

No se carga en `pnpm dev`, localhost, preview local, builds con base `/`, previews Figma ni otro dominio o repositorio Pages, aunque haya una variable definida. El dominio y la base son deliberadamente específicos de este prototipo; si se cambia a un dominio propio, revisar las constantes, los dominios de Userback y las pruebas antes de habilitar allí.

La navegación por hash conserva el documento y el script; no se reinicializa en cada página ni se escucha hashchange. Las llamadas repetidas tampoco duplican el script. La integración no inserta wrappers en React ni modifica estilos, scroll o layout. El launcher y el formulario los dibuja el proveedor: su posición, superposiciones y uso móvil deben comprobarse con la configuración real.

La carga asíncrona evita bloquear el arranque por descarga del script. Si el proveedor está bloqueado o falla, el sitio puede seguir funcionando; no se implementan reintentos ni un widget alternativo. La captura de errores muy tempranos no se garantiza con este método, conforme a la documentación oficial.

## Identificador público y seguridad

`VITE_USERBACK_ACCESS_TOKEN` debe ser **exclusivamente el access token del snippet web de Install Userback**, copiado del workspace autorizado. La [guía del widget](https://docs.userback.io/docs/widget-access-token) describe cómo encontrarlo. Su uso en un snippet del navegador verifica que esa clase de identificador está destinada a la integración cliente; no se deduce de que el nombre contenga “token”.

Los tokens de administración son otra credencial: [API Tokens](https://support.userback.io/en/articles/17223496-api-tokens-extension-keys-and-mobile-sdk-keys) autentican la API REST. No usar API Token, Extension Key, Mobile SDK Key, OAuth client secret ni credenciales de gestión en esta variable. No se necesita conectar la API REST para este trabajo.

No se recibió ni se comprobó un token real del workspace durante esta implementación. Si quien configura la variable no puede confirmar que viene del snippet web oficial, **no habilitar ni publicar el widget** hasta aclararlo. El código no puede distinguir con fiabilidad una credencial administrativa pegada por error por su formato.

[Vite expone las variables `VITE_*` en el código cliente](https://vite.dev/guide/env-and-mode): este valor será visible en los assets públicos del build, independientemente de que se almacene en Variables o Secrets. Guardarlo como Secret no lo convierte en secreto en el navegador. No registrar su valor ni incluirlo en ejemplos, issues o capturas.

La ausencia de `user_data` no significa ausencia de datos en un comentario: el proveedor puede capturar pantalla/contexto y el visitante puede escribir datos en su formulario. Revisar captura, campos y privacidad en Userback para este prototipo; no introducir identificación, replay o telemetría adicionales desde código como parte de esta integración.

## Configurar GitHub Actions

Acción manual por el responsable del repositorio:

1. En `AlonsoCT-me/RSMUniverse`, abrir **Settings → Secrets and variables → Actions → Variables**.
2. Crear una **Repository variable** llamada exactamente `VITE_USERBACK_ACCESS_TOKEN`.
3. Pegar solo el token del snippet web oficial, una vez confirmada su naturaleza. No pegar el snippet completo ni comillas.
4. En Userback, añadir el dominio `alonsoct-me.github.io` al proyecto/site correcto, activar el widget y revisar las reglas de targeting. Si se filtra por URL, permitir `/RSMUniverse/` y todas sus vistas con hash; no limitarlo solo a la portada.
5. Cuando los cambios de código estén revisados e integrados mediante el proceso normal del repositorio, ejecutar **Deploy GitHub Pages** en `main`, o dejar que se ejecute por el push autorizado a `main`.

El paso `uses: ./.github/actions/validate` de ese workflow recibe `VITE_USERBACK_ACCESS_TOKEN: ${{ vars.VITE_USERBACK_ACCESS_TOKEN }}`. La acción existente ya construye con `GITHUB_PAGES=true`; el entorno del paso alcanza ese build sin modificar la acción compartida ni el CI de PR. Si la variable no existe, llega vacía y el build funciona sin widget.

Se usa una variable de **repositorio**, porque el job que compila no declara el environment `github-pages`; ese environment pertenece al job de publicación. No asumir que una variable creada únicamente en el environment del job deploy estará disponible durante el build del job build. [Variables en GitHub Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables).

No se creó la variable en GitHub, no se cambió Userback ni se publicó nada durante esta tarea. No se necesita `user_data` ni invitar al cliente al workspace para probar el formulario del widget.

## Habilitar, deshabilitar y configurar UX

- **Habilitar:** configurar variable pública y proyecto/dominio/targeting en Userback; reconstruir y desplegar Pages.
- **Deshabilitar desde el build:** eliminar o vaciar la Repository variable y reconstruir/desplegar. Cambiarla no modifica un bundle ya publicado; pestañas abiertas deben recargar.
- **Pausa desde Userback:** desactivar la disponibilidad/targeting del widget en su panel. Verificar el efecto en una sesión nueva; el launcher ya cargado podría requerir recarga.
- **Local:** `pnpm dev` y preview local permanecen sin widget. No quitar guardas para una prueba de configuración real; validarla en la URL publicada.

En el editor del widget revisar launcher compacto, posición y separación lateral/inferior para no tapar Quick Add, drawer, CTAs, filtros o controles móviles. Usar las opciones oficiales, sin overrides al CSS del proveedor ni cambios de diseño de RSM. Ajustar campos de nombre/email para que no se exija una identidad que el prototipo no tiene; confirmar qué controles admite el plan. La [guía del editor](https://support.userback.io/en/articles/10660327-create-and-edit-your-feedback-widget) documenta posición del launcher, campos y herramientas de captura.

## Validación técnica y resultados

Con Node 22.22.3 y las dependencias existentes, ejecutar desde la raíz del proyecto:

```sh
node --test scripts/verify-userback.mjs
pnpm exec tsc --noEmit
node scripts/verify-images.mjs
GITHUB_PAGES=true VITE_USERBACK_ACCESS_TOKEN='' pnpm build
VITE_USERBACK_ACCESS_TOKEN='' pnpm build
```

Para validar la compilación con widget, configurar el token público autorizado en el entorno del build de Pages; nunca sustituirlo por una clave de gestión. La variable es de build, no una configuración que GitHub Pages lea al atender cada petición. Las pruebas automatizadas usan un valor inerte de prueba y nunca envían feedback.

Resultados de esta entrega:

- TypeScript sin errores; 34 imágenes verificadas, sin punteros Git LFS.
- 12 pruebas del inicializador correctas: habilitado, sin variable, vacía, desarrollo, preview Figma, base normal/Figma, localhost, otro dominio/ruta y script preexistente; varias llamadas y hashes mantienen una sola inserción.
- Tres builds Vite correctos: Pages con valor inerte, Pages sin variable y build normal sin variable. Los artefactos de prueba se generaron en directorios temporales, con la base Pages preservada.
- Chromium con los bundles compilados: navegación entre las nueve vistas, Quick Add y entrada a PDP en móvil correctos. En el origen Pages con variable hubo una sola petición/inserción; sin variable, en localhost y con base normal hubo cero. Sin errores de consola/importación ni recursos locales ausentes en esos escenarios. El script del proveedor se sustituyó por una respuesta inerte: no certifica UI ni envío real del servicio.

### Comprobar publicación real y comentarios sin cuenta

1. Abrir una ventana privada, sin sesión de Userback, en `https://alonsoct-me.github.io/RSMUniverse/`. No abrir el dashboard del proveedor en esa ventana.
2. En Network comprobar una sola descarga de `https://static.userback.io/widget/v1.js`, sin 404, errores de dominio ni bloqueo por extensiones. No compartir capturas que expongan configuración.
3. Abrir el widget, anotar una captura y escribir un comentario de revisión. Confirmar que no pide crear cuenta ni iniciar sesión; un campo de contacto no equivale a autenticación. Si exige login, comprobar que se está usando el formulario de feedback y no el portal, y revisar targeting/opciones del proyecto.
4. Enviar ese comentario de prueba autorizado y comprobar su recepción en el workspace del responsable: página/URL con hash, captura/anotación y texto correctos. El responsable puede necesitar login para administrarlo; el cliente no debería necesitarlo para enviar.
5. Mantener la misma pestaña y recorrer Home, Colección, PDP Core/Special, Special Edition, Nuestra Historia y Cuidado. Verificar que el launcher sigue disponible, registra la página actual y no crea otro script.
6. Revisar desktop y móvil, incluidos 1440/1024/768/430/390/375 px: launcher sin cubrir botones, sin desplazamiento de contenido, scroll normal con widget cerrado, formulario usable, cierre y retorno al sitio. Validar Quick Add, navegación y drawer antes/después de abrir feedback.
7. Revisar Console y Network; comprobar una recarga y sesión nueva con la variable deshabilitada tras redeploy.

Pendientes hasta disponer del token/proyecto real: UI oficial, posición/no superposición, envío de anotaciones, URL hash capturada, permiso de invitados, disponibilidad móvil y restricciones reales del plan. La navegación del prototipo y la ausencia de scripts duplicados sí se pueden comprobar sin contactar al proveedor.

## Plan gratuito: verificar antes de empezar la revisión

La [página oficial de planes](https://userback.io/pricing/), consultada el 2026-11-19, anuncia Free con 2 sites, 2 seats, feedback ilimitado y disponibilidad del feedback de 7 días. Los seats corresponden al equipo con acceso al workspace, no se deben equiparar al número de clientes que envían comentarios. Reconfirmar estas condiciones en la cuenta antes de organizar la aprobación.

Comprobar también: si es realmente Free o un trial, permanencia/acceso/exportación de feedback después de 7 días, dominios y targeting, capturas y anotaciones, controles de formulario y posición móvil, branding, grabación/video, adjuntos y límites, notificaciones, respuestas/compartición e integraciones. No asumir que una opción visible durante el trial seguirá incluida. Registrar las decisiones fuera de este código; no depender de retención indefinida del plan gratuito.

## Retirar al terminar la aprobación

1. Deshabilitar el widget, conservar los comentarios aprobados según las opciones reales de la cuenta y quitar la variable del repositorio.
2. En un cambio de código revisado, retirar el import y llamada de `src/main.tsx`, eliminar `src/userback.ts` y `scripts/verify-userback.mjs`, retirar el tipo opcional de `src/vite-env.d.ts` y el bloque env añadido al paso de deploy.
3. Conservar este documento como registro histórico o actualizarlo para indicar la retirada. No eliminar los workflows ni cambiar el build/base.
4. Ejecutar TypeScript/build y desplegar por el flujo normal autorizado. Abrir una sesión nueva y comprobar que ya no existe petición al widget.

Esta integración no debe trasladarse a `rsm-shopify` ni a producción Shopify como parte del handoff.
