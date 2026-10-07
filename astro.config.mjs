// @ts-check
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

const site = 'https://ui-docs.inzumer.com';
const description =
  'Los paquetes del ecosistema Inzumer y cómo combinarlos: tokens, componentes web y mobile, emails, configuración y CI.';

export default defineConfig({
  site,
  integrations: [
    // Before Starlight, so ```mermaid blocks become diagrams instead of highlighted code.
    mermaid({ theme: 'neutral', autoTheme: true }),
    starlight({
      title: 'INZ.DOCS',
      description,
      defaultLocale: 'root',
      locales: { root: { label: 'Español', lang: 'es' } },
      favicon: '/favicon.ico',
      // Long commands wrap instead of scrolling sideways on phones.
      expressiveCode: { defaultProps: { wrap: true } },
      customCss: ['./src/styles/theme.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
          },
        },
        {
          tag: 'link',
          attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        },
        {
          tag: 'link',
          attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        },
        { tag: 'meta', attrs: { property: 'og:image', content: `${site}/og.png` } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: 'INZ.DOCS · Ecosistema Inzumer' },
        },
        { tag: 'meta', attrs: { name: 'twitter:image', content: `${site}/og.png` } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/inzumer' }],
      editLink: { baseUrl: 'https://github.com/inzumer/inzumer-docs/edit/main/' },
      lastUpdated: true,
      plugins: [starlightLinksValidator({ errorOnRelativeLinks: false })],
      sidebar: [
        { label: 'Inicio', link: '/' },
        { label: 'Paquetes', items: [{ autogenerate: { directory: 'paquetes' } }] },
        { label: 'Prácticas', items: [{ autogenerate: { directory: 'practicas' } }] },
      ],
    }),
  ],
});
