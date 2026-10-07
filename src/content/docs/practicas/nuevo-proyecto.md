---
title: 'Armar un proyecto'
description: 'Qué paquetes sumar según el tipo de proyecto: web, mobile, mails y CI.'
sidebar:
  order: 0
---

Cada proyecto toma solo lo que necesita. Las piezas son las mismas en todos, así el diseño, el
código y los procesos se ven igual de un repo a otro.

## Web

```bash
pnpm add @inzumer/ui-library @inzumer/tokens
```

- Tailwind 4 con el preset de [`@inzumer/tokens`](/paquetes/tokens/), cargado con `@config`.
- Los componentes de [`@inzumer/ui-library`](/paquetes/ui-library/), con los colores siempre por
  variable para que funcionen el modo claro, el oscuro y los temas de cada marca.

## Mobile

- Un contenedor nativo (Expo) con la web en una WebView: mismas pantallas, sin otra librería. Ver
  [Apps móviles](/practicas/apps-moviles/).

## Mails

- Un paquete propio del proyecto con sus plantillas, armadas con
  [`@inzumer/email`](/paquetes/email/) y su tema (`createEmailTheme`).
- La API lo instala y renderiza cada mail en el idioma de quien lo recibe.

## Configuración

```bash
pnpm add -D @inzumer/eslint @inzumer/prettier @inzumer/tsconfig
```

- [`@inzumer/eslint`](/paquetes/eslint/), [`@inzumer/prettier`](/paquetes/prettier/) y
  [`@inzumer/tsconfig`](/paquetes/tsconfig/) en vez de configuraciones propias.

## CI y releases

- Los workflows de [`@inzumer/ci`](/paquetes/ci/): CI, seguridad, duplicación y accesibilidad en
  cada PR.
- Apps: release semanal con gitflow (`release-prepare`, `release-finish`…).
- Paquetes: Changesets con trusted publishing (`changesets-release.yml`).

## Antes de empezar

- [Estructura](/practicas/estructura/): atomic design y una carpeta por unidad.
- [Código](/practicas/codigo/), [accesibilidad](/practicas/accesibilidad/) y
  [seguridad](/practicas/seguridad/).
