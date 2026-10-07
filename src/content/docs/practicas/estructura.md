---
title: 'Estructura de carpetas'
description: 'Atomic design y una carpeta por unidad, en todos los repos.'
---

Todos los repos se ordenan igual que la librería de componentes.

- **Atomic design**: `components/{atoms,molecules,organisms,templates}` (y `pages` cuando hay
  pantallas o mails concretos).
- **Una carpeta por componente**:

  ```
  Button/
    Button.tsx
    Button.stories.tsx   # título "Atoms/Button", docs automáticas con el README
    Button.styles.ts     # clases con cva (web)
    README.md
    __tests__/Button.test.tsx
    index.ts             # barrel
  ```

- **Barrels en cada nivel**: `atoms/index.ts`, `components/index.ts` y el `index.ts` del paquete.
- **Utilidades, servicios y scripts de CI** también tienen su carpeta, con barrel y `__tests__`.
