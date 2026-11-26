import { url } from './urls'

export interface GoogleForm {
  embedUrl?: string
  externalUrl?: string
  height?: number
}

export interface Sharing {
  title?: string
  description?: string
  image?: string
  url?: string
}

export interface TimedNotice {
  active: boolean
  text: string
  href?: string
  color?: 'red' | 'dark'
  startsAt: string
  endsAt: string
  priority: number
}

export function timestamp(value: string) {
  return /T.+(?:Z|[+-]\d{2}:\d{2})$/.test(value) ? Date.parse(value) : NaN
}

export function publicHref(value: string) {
  return /^https:\/\//i.test(value) ? value : url(value)
}

export function formLinks(form?: GoogleForm) {
  function check(value: string | undefined, embedded: boolean) {
    if (!value) return undefined
    try {
      const link = new URL(value)
      if (link.protocol !== 'https:' || link.username || link.password || link.port) return undefined
      if (!embedded && link.hostname === 'forms.gle' && /^\/[\w-]+\/?$/.test(link.pathname)) return link
      if (link.hostname !== 'docs.google.com' || !/^\/forms\/(?:u\/\d+\/)?d\/(?:e\/)?[\w-]+\/viewform\/?$/.test(link.pathname)) return undefined
      if (embedded) link.searchParams.set('embedded', 'true')
      else link.searchParams.delete('embedded')
      return link
    } catch {
      return undefined
    }
  }
  return {
    embed: check(form?.embedUrl, true)?.href,
    external: (check(form?.externalUrl, false) ?? check(form?.embedUrl, false))?.href,
  }
}

export function formatEventDate(date: string, timeZone: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone,
  }).format(timestamp(date))
}
