# inzumer-docs

Documentación del ecosistema Inzumer: qué paquetes usamos, para qué sirve cada uno y cómo se arma
cada proyecto con ellos. Publicada en <https://ui-docs.inzumer.com>.

## Uso

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # dist/, falla si hay links rotos
```

Las páginas están en `src/content/docs` (Markdown/MDX de [Starlight](https://starlight.astro.build)),
en español. Cada paquete o proyecto nuevo suma su página.

## Componentes

El selector de tema y el botón del menú mobile reemplazan a los de Starlight con componentes de
`@inzumer/ui-library` (`Select`, `Button`, `Icon`), renderizados en el servidor con `@astrojs/react` y
Tailwind 4 sin preflight. Viven en `src/components/molecules/`, cada uno con su README.

## Publicación

`.github/workflows/deploy.yml` audita, revisa formato y compila cada PR; en `main` publica en
GitHub Pages con el dominio `ui-docs.inzumer.com`.
