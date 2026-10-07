---
title: 'Apps móviles'
description: 'Cómo se arma una app: un contenedor nativo con la web del proyecto en una WebView.'
---

No hay una librería de componentes nativa. Cada app es un **contenedor nativo** (Expo) que abre la
web del proyecto en una WebView, así las pantallas se arman una sola vez con
[`@inzumer/ui-library`](/paquetes/ui-library/) y no hay dos versiones que mantener.

## Lo que pone la librería

Los componentes ya funcionan dentro de la app:

- **Notch y barras del sistema**: lo que va pegado a un borde (navbar, drawer, bottom sheet,
  snackbar, banner de cookies) respeta las _safe areas_. En el navegador no cambia nada.
- **Scroll**: los overlays scrollean adentro sin mover la página de atrás.
- **Gestos**: el bottom sheet se cierra deslizando hacia abajo, y siempre hay un botón que hace lo
  mismo.
- **Táctil**: áreas de 44 px y nada que dependa solo del hover.

La web solo tiene que pedir dibujar bajo el notch:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

Las reglas para componentes nuevos están en la página _WebView Apps_ del
[Storybook web](https://ui-web.inzumer.com).

## Lo que pone el contenedor, por proyecto

- **Splash e ícono** de la app.
- **Login con Google**: Google lo bloquea dentro de WebViews, así que se abre en el navegador del
  sistema y la sesión vuelve a la WebView.
- **Sin conexión**: una pantalla propia en vez de la WebView en blanco, con reintento.
- **Botón atrás de Android**: vuelve en el historial de la web.
- **Links**: los externos se abren en el navegador del sistema; los deep links abren la app.
- **Notificaciones push**, si el proyecto las necesita.

## Para las tiendas

Apple rechaza apps que son solo un sitio envuelto (pauta 4.2 de funcionalidad mínima). Lo que suma
el contenedor (login nativo, pantalla sin conexión, deep links, push) es lo que la hace una app.
