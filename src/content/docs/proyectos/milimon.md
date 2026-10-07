---
title: 'Milimon'
description: 'Cómo está armado Milimon: web, API, mails y docs.'
---

Manual de estudio y calculadoras de costos para gastronomía.

| Parte | Repositorio                                                             | Stack                                                    | Paquetes Inzumer                          |
| ----- | ----------------------------------------------------------------------- | -------------------------------------------------------- | ----------------------------------------- |
| Web   | [milimon-frontend-web](https://github.com/inzumer/milimon-frontend-web) | Astro 7 + islas de React 19, Tailwind 4, Keystatic (CMS) | `ui-library`, `tokens`, `inzumer-ci`      |
| API   | [milimon-backend-nest](https://github.com/inzumer/milimon-backend-nest) | NestJS 12, TypeORM, Postgres (Neon)                      | `milimon-emails`, `inzumer-ci`            |
| Mails | [milimon-emails-react](https://github.com/inzumer/milimon-emails-react) | React Email                                              | `email`, `eslint`, `prettier`, `tsconfig` |
| Docs  | [milimon-docs](https://github.com/inzumer/milimon-docs)                 | Starlight                                                | —                                         |

- **Ambientes**: staging (rama `dev`) y producción (`main`), cada uno con su Worker de
  Cloudflare, su API en Render y su base en Neon.
- **CMS**: Keystatic en staging, con pantalla partida y vista previa en vivo; cada guardado se
  publica en `dev` como un commit.
- **Releases**: gitflow semanal con los workflows de [inzumer-ci](/paquetes/ci/).
