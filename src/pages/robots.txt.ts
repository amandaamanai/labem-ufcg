import type { APIRoute } from 'astro'
import { url } from '../utils/urls'

export const GET: APIRoute = ({ site }) => new Response(
  ['User-agent: *', 'Allow: /', site ? `Sitemap: ${new URL(url('sitemap-index.xml'), site)}` : ''].filter(Boolean).join('\n') + '\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
)
