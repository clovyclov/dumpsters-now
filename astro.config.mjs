import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dumpstersnow.com',
  redirects: {
    '/construction-debris-removal': '/construction-debris-dumpster-rentals/',
    '/construction-debris-removal/': '/construction-debris-dumpster-rentals/',
    '/northville/dumpster-rental': '/service-areas/dumpster-rental-northville-mi/',
    '/northville/dumpster-rental/': '/service-areas/dumpster-rental-northville-mi/',
    '/plymouth/dumpster-rental': '/service-areas/dumpster-rental-plymouth-mi/',
    '/plymouth/dumpster-rental/': '/service-areas/dumpster-rental-plymouth-mi/',
    '/detroit/dumpster-rental': '/service-areas/dumpster-rental-detroit-mi/',
    '/detroit/dumpster-rental/': '/service-areas/dumpster-rental-detroit-mi/',
    '/ann-arbor/dumpster-rental': '/service-areas/',
    '/ann-arbor/dumpster-rental/': '/service-areas/',
    '/services/commercial-dumpster-rentals': '/commercial-dumpster-rentals/',
    '/services/commercial-dumpster-rentals/': '/commercial-dumpster-rentals/',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') &&
        !page.includes('/thank-you-mi/'),
    }),
  ],
});
