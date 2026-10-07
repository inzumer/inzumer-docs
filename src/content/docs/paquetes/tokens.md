---
title: '@inzumer/tokens'
description: 'Los tokens de diseño: colores, tipografía, espaciado, temas y preset de Tailwind.'
---

La base visual de todo el ecosistema. Repositorio:
[inzumer-tokens](https://github.com/inzumer/inzumer-tokens).

```bash
pnpm add @inzumer/tokens
```

| Export                                                                 | Qué trae                                                                                    |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `@inzumer/tokens`                                                      | Los tokens en JS, los temas e `InzumerProvider` para cambiar colores en tiempo de ejecución |
| `@inzumer/tokens/tailwind`                                             | `DefaultPreset`: colores, fuentes, espaciado y radios                                       |
| `@inzumer/tokens/css/reset`, `/variables`, `/typography`, `/scrollbar` | El CSS base y las variables (`--surface-primary`, `--btn-primary-bg`…)                      |

Con Tailwind 4, el preset se carga desde el CSS:

```css
@import 'tailwindcss';
@config './tailwind.config.ts';
```

Los colores se usan siempre por variable (`bg-(--surface-primary)`), así el modo claro y oscuro
y los temas de cada marca funcionan sin tocar componentes.
