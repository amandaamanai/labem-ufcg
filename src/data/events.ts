import type { Photo } from './site'
import type { GoogleForm, Sharing, TimedNotice } from '../utils/opportunities'

export interface EventDetails {
  active: boolean
  registration: 'em-breve' | 'aberta' | 'encerrada' | 'sem-inscricao'
  title: string
  subtitle?: string
  description: string
  banner?: Photo
  mobileBanner?: Photo
  startsAt: string
  endsAt?: string
  timeZone: string
  format: string
  location: string
  speakers?: { name: string; bio: string; photo?: Photo }[]
  schedule?: { time: string; title: string; description?: string }[]
  audience?: string
  certificate?: string
  form?: GoogleForm
  countdown?: boolean
  calendar?: boolean
  featured?: boolean
  notice?: TimedNotice
  sharing?: Sharing
}

// Cadastre um evento com dados confirmados. Use null quando não houver evento ativo.
export function getEvent(): EventDetails | null {
  return null
}
