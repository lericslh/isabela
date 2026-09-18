# Para Isabela ♡ — Dark Romance v3

Carta digital responsive para GitHub Pages, creada especialmente para Isabela.

## Qué cambió en v3

- Cada capítulo es una sección independiente de pantalla completa.
- La navegación tiene orden lineal: carta → 2020 → 2021 → 2025 → ahora → final.
- Hay botones de continuación para avanzar de forma explícita.
- Las animaciones de aparición se activan al entrar a cada bloque.
- El diseño móvil usa una sola columna y espacios amplios para evitar que todo se amontone.
- Se añadió un indicador lateral de progreso.
- Las fotografías se almacenan localmente en `assets/`, por lo que GitHub Pages las puede servir junto al proyecto.

## Publicar en GitHub Pages

1. Crea un repositorio.
2. Sube `index.html`, `style.css`, `script.js` y la carpeta `assets`.
3. Ve a `Settings → Pages`.
4. Selecciona `Deploy from a branch`.
5. Elige `main` y `/ (root)`.
6. Guarda y espera a que GitHub publique el sitio.


## Fotografía actual
La escena **Ahora · La versión que confía** utiliza `assets/isabela-ahora.png`.


## v5 — corrección móvil
Se corrigió la visibilidad de la carta en pantallas pequeñas. La carta ya no depende de que su sección completa entre en el viewport para mostrarse, y el contenedor tiene ancho y espaciado seguros para móviles.


## v7 — corrección definitiva de la carta
La escena de la carta ahora tiene altura natural y empieza desde arriba; no se centra verticalmente dentro de `100svh`. Además, los párrafos de la carta usan una animación secuencial independiente para evitar depender de IntersectionObserver en un elemento largo.
