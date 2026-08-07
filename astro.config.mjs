import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dumpstersnow.com',
  redirects: {
    '/construction-debris-removal': '/construction-debris-dumpster-rentals/',
    '/construction-debris-removal/': '/construction-debris-dumpster-rentals/',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/thank-you-mi/'),
    }),
  ],
});
