# MenuButton

Replaces Starlight's mobile menu button (`components.MobileMenuToggle` in `astro.config.mjs`) with
the ui-library `Button` and the `menu` / `close` icons. It opens the sidebar the same way Starlight
does, with `popovertarget="starlight__sidebar"`, and hides from 50rem up, where the sidebar is always
visible. 44px touch target.
