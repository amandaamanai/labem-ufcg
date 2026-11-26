import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const site = process.env.SITE_URL
const base = process.env.BASE_PATH || '/'
const prefix = base.replace(/\/$/, '')
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  redirects: {
    '/engenharia/marketing/': `${prefix}/engenharia/gestao/`,
    '/engenharia/competicao/': `${prefix}/motostudent/`,
  },
  output: 'static',
  integrations: site ? [sitemap({ filter: page => !page.endsWith('/404/') })] : [],
})
