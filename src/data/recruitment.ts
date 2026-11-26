import type { Link, Photo } from './site'
import type { GoogleForm, Sharing, TimedNotice } from '../utils/opportunities'

const statuses = {
  'sem-edital': 'Sem edital ativo',
  'em-breve': 'Em breve',
  'inscricoes-abertas': 'Inscrições abertas',
  'em-andamento': 'Processo em andamento',
  'inscricoes-encerradas': 'Inscrições encerradas',
  resultado: 'Resultado divulgado',
} as const

export interface Recruitment {
  status: keyof typeof statuses
  edition?: string
  year?: number
  title: string
  description: string
  banner?: Photo
  mobileBanner?: Photo
  requirements?: string[]
  positions?: { area: string; count?: number; description?: string }[]
  schedule?: { date: string; label: string }[]
  stages?: string[]
  noticePdf?: string
  form?: GoogleForm
  results?: Link[]
  documents?: Link[]
  faq: { question: string; answer: string }[]
  featured?: boolean
  notice?: TimedNotice
  sharing?: Sharing
}

export const recruitment: Recruitment = {
  status: 'sem-edital',
  title: 'Faça parte do LABEM',
  description: 'Aplique o que você aprende na universidade no desenvolvimento de uma motocicleta de competição.',
  faq: [
    { question: 'Quem pode participar?', answer: 'O laboratório reúne estudantes de várias áreas. Confira os cursos e os requisitos no edital de cada seleção.' },
    { question: 'Como funciona a seleção?', answer: 'Cada edital publica vagas, etapas e prazos. Processos anteriores incluíram inscrição, dinâmica de grupo e entrevista.' },
  ],
}

export const recruitmentStatus = statuses[recruitment.status]
