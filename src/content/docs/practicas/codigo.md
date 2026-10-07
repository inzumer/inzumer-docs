---
title: 'Código'
description: 'Convenciones de código compartidas.'
---

- **Funciones flecha** siempre, y nada repetido: lo que se usa dos veces va a un util, hook o
  componente.
- **Legibilidad**: una línea en blanco después de cada `if` y antes de cada `return` (regla de
  [`@inzumer/eslint`](/paquetes/eslint/), se arregla con `--fix`).
- **Tests**: cada título de `it()` empieza con "should". Cobertura mínima del 90%.
- **Comentarios cortos** (una o dos líneas); lo largo va al README o al PR.
- **Commits y PRs** con Conventional Commits; los PRs en español, con qué cambia y cómo probarlo.
- **Ids de tracking** en los elementos interactivos y textos alternativos en los dos idiomas.
