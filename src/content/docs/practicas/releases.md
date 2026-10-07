---
title: 'Releases'
description: 'Cómo se versiona y publica cada cosa.'
---

- **Paquetes npm**: [Changesets](https://github.com/changesets/changesets). Cada cambio suma su
  changeset; en `main` se abre un PR "Version Packages" y, al mergearlo, se publica en npm con
  **trusted publishing** (sin tokens guardados). Cada paquete nuevo necesita configurar su
  trusted publisher en npmjs.com (repositorio y `release.yml`).
- **Apps**: gitflow. Las features entran a `dev` (staging) por PR; el release semanal lleva `dev`
  a `main` (producción) con tag y GitHub Release.
- Las versiones `0.x` pueden romper compatibilidad en un minor; desde `1.0`, un cambio que rompe es
  major.
