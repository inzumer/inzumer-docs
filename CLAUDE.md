# CLAUDE.md

Docs site (Starlight) of the Inzumer ecosystem: one page per package (`src/content/docs/paquetes`)
and per project (`proyectos`), plus the shared practices (`practicas`). Content in Spanish.

- When a package or project changes (new export, new version line, new practice), update its page.
- `pnpm build` must pass (it fails on broken links); `pnpm format:check` too.
- Published at https://ui-docs.inzumer.com from `main` (GitHub Pages).
