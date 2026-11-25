# Maestros fotográficos fuera del directorio público

Los archivos residen en `asset-masters/`, fuera del directorio público. Estos dos archivos se movieron sin modificar sus bytes para conservar su resolución original. No se importan desde React ni se copian a los builds de Vite.

| Maestro | Origen anterior | Fuente web canónica |
|---|---|---|
| collection-background-7680x4320.png | public/assets/RSM_clean_background_8K.png | public/assets/home-collection-bg.webp (3200×1800) |
| story-territory-landscape-7680x5728.jpg | src/imports/home-SIN_FRONTERAS-2.jpg | public/assets/home-sin-fronteras.webp (3200×2387) |

Ambos originales y todos los archivos sustituidos estaban respaldados en el commit `07e9eecb35cdbeb775b2ecf5427f481f3ec780c9`; se verificaron sus objetos Git LFS locales por SHA-256 antes de retirarlos de sus rutas anteriores. Los hashes, rutas de recuperación y conversiones están en [el inventario](ASSET_INVENTORY.md) y [el reporte](ASSET_OPTIMIZATION_REPORT.md).

El repositorio mantiene las reglas Git LFS existentes para PNG/JPG. Estos archivos no son theme assets ni deben subirse automáticamente a Shopify. Son fuentes para preparar medios/CDN cuando se autorice esa fase. Las variantes web existentes bastan para el prototipo y no se recomprimieron.

Los ocho originales sustituidos por WebP conservan su respaldo recuperable en ese commit y sus objetos LFS verificados; no se guardan copias redundantes en public. No se verificó un respaldo remoto ni se subió material a servicios externos. Antes de cambiar la política de retención de Git/LFS, el responsable deberá conservar esos originales en el archivo de medios del proyecto.
