# ThemeSelect

Replaces Starlight's theme picker (`components.ThemeSelect` in `astro.config.mjs`) with the
ui-library `Select`. It keeps Starlight's contract: the `starlight-theme-select` element, the
`starlight-theme` key in `localStorage` and `StarlightThemeProvider.updatePickers()` to show the saved
choice on load. Options: automático (system), claro and oscuro.
