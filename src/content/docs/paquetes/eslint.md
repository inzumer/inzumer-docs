---
title: '@inzumer/eslint'
description: 'Reglas de ESLint compartidas: TypeScript, React, accesibilidad y tests.'
---

Repositorio: [inzumer-eslint](https://github.com/inzumer/inzumer-eslint).

```js
// eslint.config.mjs
import { base, react, testing } from '@inzumer/eslint';

export default [...base, ...react, ...testing];
```

| Export    | Agrega                                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `base`    | TypeScript, imports sin duplicar, imports sin usar, `curly` y una línea en blanco después de cada `if` y antes de cada `return` |
| `react`   | React, hooks y `jsx-a11y`                                                                                                       |
| `testing` | Reglas de Vitest para `*.test.*`                                                                                                |
