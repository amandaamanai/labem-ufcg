import { photos, type Photo } from './site'

export interface ImageSlot {
  id: string
  label: string
  ratio: string
  photo?: Photo
  mobile?: Photo
  caption?: string
  mobileId?: string
  fit?: 'cover' | 'contain'
  width?: string
  height?: string
  radius?: string
  fallback?: 'hide' | 'neutral'
}

export const imageMap = import.meta.env.PUBLIC_IMAGE_MAP === '1'

export const imageSlots: Record<string, ImageSlot> = {
  'HISTORIA-2012': { id: 'HISTORIA-2012', label: 'Registro histórico de 2017', ratio: '8 / 5', caption: 'Equipe Galo de Campina com o protótipo na UFCG, em 2017.' },
  'HISTORIA-2018': { id: 'HISTORIA-2018', label: 'Participação na MotoStudent', ratio: '8 / 5', fit: 'contain', photo: photos.competition, caption: 'Equipe Galo de Campina na MotoStudent de 2018, em Aragón, Espanha.' },
  'HISTORIA-2019': { id: 'HISTORIA-2019', label: 'Preparação para a sexta edição', ratio: '8 / 5' },
  'HISTORIA-2025': { id: 'HISTORIA-2025', label: 'Pesquisa no CONEMI', ratio: '8 / 5', fit: 'contain', photo: photos.conemi, caption: 'Integrantes do LABEM no CONEMI 2025, em João Pessoa.' },
  'MOTOSTUDENT-HOME': { id: 'MOTOSTUDENT-HOME', label: 'Equipe com a bandeira brasileira', ratio: '4 / 3', fit: 'contain', fallback: 'neutral', photo: photos.flag, caption: 'Equipe Galo de Campina com a bandeira brasileira na viagem para a MotoStudent de 2018.' },
  'SUBSISTEMA-ESTRUTURA': { id: 'SUBSISTEMA-ESTRUTURA', label: 'Equipe de Estrutura', ratio: '8 / 5' },
  'SUBSISTEMA-POWERTRAIN': { id: 'SUBSISTEMA-POWERTRAIN', label: 'Equipe de Powertrain', ratio: '8 / 5' },
  'SUBSISTEMA-ELETRICA': { id: 'SUBSISTEMA-ELETRICA', label: 'Equipe de Elétrica', ratio: '8 / 5' },
  'SUBSISTEMA-GESTAO': { id: 'SUBSISTEMA-GESTAO', label: 'Gestão', ratio: '8 / 5' },
  'SUBSISTEMA-EXTENSAO': { id: 'SUBSISTEMA-EXTENSAO', label: 'Extensão', ratio: '8 / 5' },
  'SUBSISTEMA-PDI': { id: 'SUBSISTEMA-PDI', label: 'Pesquisa, Desenvolvimento e Inovação', ratio: '8 / 5' },
  'INSTAGRAM-01': { id: 'INSTAGRAM-01', label: 'Oficina do LABEM', ratio: '4 / 5', photo: photos.workshop },
  'INSTAGRAM-02': { id: 'INSTAGRAM-02', label: 'Protótipo em exposição', ratio: '4 / 5', photo: photos.fair },
  'INSTAGRAM-03': { id: 'INSTAGRAM-03', label: 'Participação no CONEMI', ratio: '4 / 5', photo: photos.conemi },
  'INSTAGRAM-04': { id: 'INSTAGRAM-04', label: 'Atividade de extensão', ratio: '4 / 5', photo: photos.outreach },
  'PARTNER-LOGO-01': { id: 'PARTNER-LOGO-01', label: 'Logotipo aprovado', ratio: '3 / 2', fit: 'contain' },
  'PARTNER-LOGO-02': { id: 'PARTNER-LOGO-02', label: 'Logotipo aprovado', ratio: '3 / 2', fit: 'contain' },
}

export function bannerSlots(group: 'EVENTO' | 'PROCESSO-SELETIVO') {
  return { id: `${group}-DESKTOP`, mobileId: `${group}-MOBILE`, label: 'Banner' }
}
