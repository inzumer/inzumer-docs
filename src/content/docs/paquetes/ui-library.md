---
title: '@inzumer/ui-library'
description: 'Componentes React para la web, con Tailwind 4 y los tokens de Inzumer.'
---

Componentes accesibles para la web, organizados con [atomic design](/practicas/estructura/).
Repositorio: [inzumer-ui-library](https://github.com/inzumer/inzumer-ui-library) ·
Storybook: [ui-web.inzumer.com](https://ui-web.inzumer.com).

```bash
pnpm add @inzumer/ui-library @inzumer/tokens react react-dom class-variance-authority clsx tailwind-merge
```

- **Tailwind 4**: las clases usan la sintaxis v4, así que la app necesita Tailwind 4, el preset de
  tokens con `@config` y escanear la librería:

  ```css
  @import 'tailwindcss';
  @config './tailwind.config.ts';
  @source '../node_modules/@inzumer/ui-library/dist';
  ```

- **Íconos**: familia propia en el estilo de Google Material Symbols, citados por id en
  kebab-case: `<Icon name="arrow-forward" />`, `<Icon name="pinterest" />`.
- **Accesibilidad**: zonas táctiles de 44px, foco visible, `prefers-reduced-motion` y axe en
  Storybook (claro y oscuro).
- Incluye, entre otros: `Button`, `Badge`, `Chip`, `Filter`, `Loader` (con modo pantalla),
  `Modal`, `BottomSheet`, `Carousel`, `Navbar`, `SocialLinks`, `IconLink` y `CookieConsent`.
