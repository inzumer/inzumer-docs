---
title: '@inzumer/ci'
description: 'Workflows reutilizables de GitHub Actions: CI, seguridad, releases y accesibilidad.'
---

Repositorio: [inzumer-ci](https://github.com/inzumer/inzumer-ci). No se instala desde npm: cada
repo llama a los workflows con `uses: inzumer/inzumer-ci/.github/workflows/<workflow>.yml@v2`.

| Workflow                                                                             | Qué hace                                                                    |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `node-ci.yml`                                                                        | Instala, audita dependencias, corre los checks del repo y reporta cobertura |
| `security.yml`                                                                       | Auditoría programada y revisión de dependencias en cada PR                  |
| `duplication.yml`                                                                    | Detecta código repetido y sugiere dónde extraerlo                           |
| `a11y.yml`                                                                           | Audita las páginas principales con axe                                      |
| `changesets-release.yml`                                                             | Paquetes npm: PR "Version Packages" y publicación con trusted publishing    |
| `release-prepare.yml`, `release-find.yml`, `release-merge.yml`, `release-finish.yml` | Release semanal con gitflow para las apps                                   |

Los scripts de cada workflow viven en `scripts/<nombre>/`, con su barrel y sus tests.
