---
title: '@inzumer/tsconfig'
description: 'Configuraciones de TypeScript estrictas para librerías, apps y scripts.'
---

Repositorio: [inzumer-tsconfig](https://github.com/inzumer/inzumer-tsconfig).

```jsonc
// tsconfig.json
{ "extends": "@inzumer/tsconfig/react-library" }
```

| Entrada                           | Para                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------- |
| `@inzumer/tsconfig/base`          | Base ES2022 estricta: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` |
| `@inzumer/tsconfig/react-library` | Librerías y apps React                                                                   |
| `@inzumer/tsconfig/node`          | Scripts y herramientas de Node                                                           |
