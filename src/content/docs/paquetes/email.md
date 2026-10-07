---
title: '@inzumer/email'
description: 'Componentes y plantillas de mails (React Email) con el diseño de Inzumer.'
---

Repositorio: [inzumer-email](https://github.com/inzumer/inzumer-email) · Storybook:
[ui-emails.inzumer.com](https://ui-emails.inzumer.com).

```bash
pnpm add @inzumer/email react react-dom
```

| Nivel     | Componentes                                                                |
| --------- | -------------------------------------------------------------------------- |
| Atoms     | `EmailBanner`, `EmailButton`, `EmailHeading`, `EmailText`                  |
| Molecules | `EmailCard`, `EmailFooter` (con redes), `EmailSection`, `EmailSocialLinks` |
| Organisms | `EmailHero`, `EmailLayout`                                                 |
| Templates | `MessageTemplate`, `ActionTemplate`                                        |

- `renderEmail(<Email />)` devuelve el HTML (estilos en línea) y su versión en texto plano.
- `createEmailTheme` toma los colores, fuentes y radio de cada marca. El fondo es siempre blanco.
- **Accesibilidad**: `<title>`, `role="article"` con `aria-roledescription="email"` y regiones
  (`banner`, `main`, `contentinfo`).
- Los íconos de redes son PNG (los clientes de mail no muestran SVG), de la misma familia que los de
  `@inzumer/ui-library`.
- Cada producto arma sus mails en su propio paquete, con estos componentes como base.
