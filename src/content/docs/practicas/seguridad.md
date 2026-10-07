---
title: 'Seguridad'
description: 'Dependencias sin vulnerabilidades y cómo mantenerlas así.'
---

- **Cero vulnerabilidades**: el CI de todos los repos audita con `audit-level: low`, así que
  cualquier vulnerabilidad nueva frena el PR.
- **Dependencias a mano**: no usamos Dependabot (deja PRs abiertos). Las alertas de GitHub siguen
  activas.
- **Cuando hay versión corregida**: se actualiza la dependencia o se fuerza con un `override` de pnpm
  (`overrides` en `pnpm-workspace.yaml` o `pnpm.overrides` en `package.json`).
- **Cuando no hay versión corregida**: un parche propio con `pnpm patch`, probado contra el ataque
  del advisory, y la advertencia ignorada con el motivo anotado hasta que salga el arreglo.
- **Secretos**: nunca en el código ni en el chat; viven en las variables de cada servicio.
