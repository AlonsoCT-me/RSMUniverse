# GitHub Pages

El prototipo se publica en `https://alonsoct-me.github.io/RSMUniverse/`.
El despliegue requiere habilitar Pages y llevar estos cambios a `main`.

## Entorno y validación local

Usar Node.js **22.22.3** y pnpm **10.34.3**, sin actualizar el lockfile.
Si se usa nvm y todavía no se tiene pnpm en esa versión:

```bash
nvm use 22.22.3
npx --yes pnpm@10.34.3 install --frozen-lockfile
node scripts/verify-images.mjs
npx --yes pnpm@10.34.3 exec tsc --noEmit
npx --yes pnpm@10.34.3 dev
```

El servidor local usa `http://localhost:8443/`. Para probar producción,
detenerlo y ejecutar:

```bash
GITHUB_PAGES=true npx --yes pnpm@10.34.3 build
GITHUB_PAGES=true npx --yes pnpm@10.34.3 preview --host 127.0.0.1 --port 4173
```

Abrir `http://127.0.0.1:4173/RSMUniverse/`. Revisar Home, PLP, PDP,
Special Edition, Historia y `#/pages/cuidado-de-gorras`, incluyendo recarga,
entrada directa y navegación atrás/adelante.

Sin `GITHUB_PAGES=true`, Vite mantiene `/`. `FIGMA_PUBLIC_URL` conserva
prioridad para las publicaciones de Figma. `src/asset-url.ts` resuelve las
imágenes públicas respecto de `import.meta.env.BASE_URL`; las URLs de CSS
y los imports de imágenes son procesados por Vite. La navegación usa hash
y conserva el pathname de publicación. No se necesitan reglas de 404.

## Git y pull requests

Las ramas locales `develop` y `feature/github-pages-deploy` parten de `main`.
Los cambios se entregan sin commit ni push automático. Tras revisarlos:

1. Crear el commit en `feature/github-pages-deploy`.
2. Publicar `develop` y `feature/github-pages-deploy` en `origin`.
3. Abrir un PR con base `develop` y compare `feature/github-pages-deploy`.
4. Esperar el check **TypeScript and Pages build**, revisar y fusionar.
5. Abrir un PR con base `main` y compare `develop`.
6. Esperar el mismo check, revisar y fusionar para iniciar la publicación.

Proteger `main` con PR y checks obligatorios. No enviar cambios desde la
integración original Figma Make → GitHub a la rama predeterminada sin revisar:
puede sobrescribir cambios hechos fuera de Make.

## Habilitar Pages

1. En GitHub, ir a **Settings → Pages → Build and deployment**.
2. Seleccionar **Source: GitHub Actions**.
3. En **Settings → Actions → General**, permitir las acciones oficiales de
   GitHub, `pnpm/action-setup` y las acciones locales del repositorio.
4. Configurar el entorno **github-pages** para permitir despliegues de `main`.
5. Fusionar el PR aprobado hacia `main` y revisar **Deploy GitHub Pages**.

No requiere secretos personalizados. CI valida PR hacia `develop` y `main`;
el workflow de Pages publica solo desde `main`, después de validar de nuevo.
También permite ejecución manual seleccionando `main`. La concurrencia
serializa los despliegues; los PR nunca publican.

Ambos workflows descargan Git LFS y verifican las firmas PNG/JPEG/WebP antes
de compilar. Los objetos LFS deben estar disponibles en GitHub; no basta con
subir sus punteros. No es necesario migrar ni modificar las fotografías.

Se conserva `noindex, nofollow`. El sitio sigue siendo público y demostrativo,
con el carrito y las suscripciones simulados existentes.
