export type Link = { label: string; href: string }
export type Photo = { file: string; alt: string; position?: string }
export type Section = { id?: string; title: string; text: string; items?: string[]; links?: Link[] }
export type Entry = {
  slug: string; title: string; category: string; summary: string; photo?: Photo
  year?: string; date?: string; status?: string; author?: string; sections: Section[]
  gallery?: Photo[]; links?: Link[]; related?: string[]
}
export const institution = {
  name: 'Laboratório de Engenharia da Motocicleta',
  email: 'labemuaem@gmail.com',
  instagram: 'https://www.instagram.com/labemufcg/',
  linkedin: 'https://www.linkedin.com/company/labemufcg/',
  university: 'https://www.gov.br/ufcg/pt-br',
  location: 'Rua Aprígio Veloso, 882 · Bodocongó · Campina Grande, PB',
}
export const navigation = [
  { label: 'Início', href: '' },
  { label: 'Sobre nós', href: 'sobre/', children: [
    { label: 'História', href: 'sobre/#historia' }, { label: 'Equipe', href: 'equipe/' },
    { label: 'Professores', href: 'equipe/#professores' }, { label: 'Galeria', href: 'galeria/' },
  ] },
  { label: 'MotoStudent', href: 'motostudent/' },
  { label: 'Engenharia', href: 'engenharia/', children: [
    { label: 'Subsistemas', href: 'engenharia/' }, { label: 'Projetos', href: 'projetos/' },
    { label: 'Produção científica', href: 'pesquisa/' },
  ] },
  { label: 'Oportunidades', href: 'oportunidades/', children: [
    { label: 'Eventos', href: 'eventos/' }, { label: 'Processos seletivos', href: 'faca-parte/' },
  ] },
  { label: 'Parceiros', href: 'parceiros/' },
]
export const quickLinks: Link[] = [
  { label: 'Equipe', href: 'equipe/' }, { label: 'Produção científica', href: 'pesquisa/' },
  { label: 'Oportunidades', href: 'oportunidades/' }, { label: 'Galeria', href: 'galeria/' },
  { label: 'Contato', href: 'contato/' },
]
export const banner = {
  carousel: false,
  interval: 8000,
  slides: [{
    image: 'banner.webp', mobile: 'banner-mobile.webp',
    eyebrow: 'LABEM UFCG · EQUIPE GALO DE CAMPINA',
    title: ['ENGENHARIA', 'EM DUAS RODAS.'],
    description: 'Desenvolvemos motocicletas de competição e formamos engenheiros na prática, da bancada à pista.',
    buttons: [{ label: 'Conheça o LABEM', href: 'sobre/' }, { label: 'Explore os projetos', href: 'projetos/' }],
    caption: 'PROTÓTIPO DE MOTOVELOCIDADE · LABEM UFCG',
    align: 'left', position: 'right 56%', overlay: '.23', height: '620px',
  }],
}
export const homeSections = ['sobre', 'historia', 'competicao', 'engenharia', 'galeria', 'oportunidades', 'instagram', 'parceiros', 'apoio'] as const
export const sources = {
  aragon: 'https://cct.ufcg.edu.br/noticias/estudantes-da-ufcg-disputam-competicao-internacional-na-espanha/',
  sixth: 'https://cct.ufcg.edu.br/noticias/unica-do-nordeste-ufcg-representara-o-brasil-em-competicao-internacional-de-engenharia-na-espanha/',
  recruitment: 'https://cct.ufcg.edu.br/noticias/labem-ufcg-divulga-edital-para-processo-seletivo-2022-2/',
  competition: 'https://www.motostudent.com/',
  exhibit: 'https://cct.ufcg.edu.br/noticias/equipes-de-projetos-institucionais-da-ufcg-ficam-em-exposicao-no-partage/',
}
export const photos = {
  team: { file: 'equipe.webp', alt: 'Integrantes do LABEM reunidos na UFCG' },
  historical: { file: 'equipe-historica.webp', alt: 'Registro histórico da equipe ao redor de uma motocicleta' },
  competition: { file: 'aragon.webp', alt: 'Equipe reunida diante das bandeiras da competição MotoStudent' },
  flag: { file: 'bandeira.webp', alt: 'Integrantes seguram a bandeira brasileira' },
  prototype: { file: 'prototipo.webp', alt: 'Vista frontal da motocicleta vermelha de competição', position: 'center' },
  workshop: { file: 'oficina.webp', alt: 'Estudantes trabalham na motocicleta na oficina', position: 'center 53%' },
  motor: { file: 'motor.webp', alt: 'Equipe inspeciona um motor na bancada' },
  conemi: { file: 'conemi.webp', alt: 'Integrantes do LABEM no CONEMI 2025', position: 'center 35%' },
  fair: { file: 'feira.webp', alt: 'Integrantes do LABEM com o protótipo em exposição' },
  outreach: { file: 'conecta.webp', alt: 'Participantes da iniciativa LABEM Conecta' },
  class: { file: 'workshop.webp', alt: 'Participantes de um workshop com a bandeira do LABEM' },
  research: { file: 'amortecedor.webp', alt: 'Diagrama do sistema massa-mola-amortecedor aplicado à motocicleta' },
} satisfies Record<string, Photo>
export const instagramBanner = {
  title: 'Acompanhe nossa jornada.',
  description: 'Da oficina às competições, acompanhe nossos projetos, eventos, conquistas e bastidores.',
  button: 'Visite nosso Instagram',
  href: institution.instagram,
  photos: [photos.workshop, photos.competition, photos.fair],
}
export const homeGallery = [photos.historical, photos.workshop, photos.competition]
export const motoStudent2018 = 'Em 2018, a equipe Galo de Campina apresentou seu projeto na fase teórica da quinta MotoStudent, em Aragón. Como a motocicleta não viajou para a Espanha, a equipe não participou das provas de pista.'
export const timeline = [
  { year: '2012', title: 'Fundação na UFCG', text: 'Daniel Anacleto inicia o LABEM na Engenharia Mecânica, orientado por Wanderley Ferreira e Juscelino Maribondo.' },
  { year: '2018', title: 'Estreia internacional', text: motoStudent2018, href: sources.aragon },
  { year: '2019', title: 'Preparação para a sexta edição', text: 'O CCT anuncia a aprovação da equipe para outro ciclo da MotoStudent.', href: sources.sixth },
  { year: '2025', title: 'Produção no CONEMI', text: 'A apresentação institucional registra dois artigos publicados no congresso.' },
]
export const phases = ['Pesquisa', 'Concepção', 'Prototipagem', 'Testes', 'Otimização']
export const engineering: Entry[] = [
  { slug: 'estrutura', title: 'Estrutura e chassi', category: 'Subsistema técnico', summary: 'Integração entre chassi, suspensão e carenagem, com atenção à rigidez e ao peso.', photo: photos.workshop, sections: [
    { title: 'Da geometria ao protótipo', text: 'O subsistema trabalha com a definição de configurações, modelagem CAD e integração dos componentes. A equipe considera a fabricação desde o desenho, incluindo a viabilidade de soldagem.' },
    { title: 'Aerodinâmica', text: 'A carenagem integra as atividades de Estrutura e sua geometria precisa conciliar as exigências do conjunto e do protótipo de motovelocidade.' },
  ], related: ['powertrain', 'eletrica'] },
  { slug: 'powertrain', title: 'Powertrain', category: 'Subsistema técnico', summary: 'Integração do motor e da transmissão e avaliação do desempenho do conjunto motriz.', photo: photos.motor, sections: [
    { title: 'Integração mecânica', text: 'O grupo compatibiliza o motor e a transmissão com o chassi, a montagem e a configuração definida para a motocicleta.' },
  ], related: ['estrutura', 'eletrica'] },
  { slug: 'eletrica', title: 'Elétrica e eletrônica', category: 'Subsistema técnico', summary: 'Eletrônica embarcada, sistema de carga e injeção eletrônica.', photo: photos.workshop, sections: [
    { title: 'Sistemas embarcados', text: 'A equipe integra os sistemas elétricos da motocicleta. Os materiais descrevem oficinas sobre sistema de carga e injeção eletrônica e citam telemetria básica entre as metas.' },
  ] },
  { slug: 'marketing', title: 'Marketing', category: 'Subsistema institucional', summary: 'Comunicação, imagem e relacionamento institucional do laboratório.', photo: photos.fair, sections: [
    { title: 'Comunicação do projeto', text: 'A frente divulga atividades e aproxima o laboratório de estudantes, empresas e instituições.' },
  ] },
  { slug: 'extensao', title: 'Extensão', category: 'Subsistema institucional', summary: 'Ações educativas para aproximar estudantes da rede pública da ciência e da engenharia.', photo: photos.outreach, sections: [
    { title: 'LABEM Conecta', text: 'A iniciativa, coordenada pelo professor Ruan Eduardo segundo a apresentação institucional, incentiva estudantes do ensino médio da rede pública a explorar a engenharia.' },
  ] },
  { slug: 'competicao', title: 'Competição', category: 'Subsistema institucional', summary: 'Preparação técnica e participação da equipe Galo de Campina na MotoStudent.', photo: photos.competition, sections: [
    { title: 'Preparação para as etapas', text: 'A frente articula a preparação para apresentação técnica, documentação e atividades de pista previstas no regulamento da edição.' },
  ], links: [{ label: 'Organização da MotoStudent', href: sources.competition }] },
]
export const projects: Entry[] = [
  { slug: 'prototipo-de-motovelocidade', title: 'Protótipo de motovelocidade', category: 'Motocicleta', status: 'Protótipo apresentado', summary: 'Uma motocicleta desenvolvida na UFCG para aplicar, em um mesmo projeto, engenharia, fabricação e testes.', photo: photos.prototype, gallery: [photos.fair, photos.workshop], sections: [
    { title: 'Concepção e integração', text: 'O projeto integra chassi, suspensão, carenagem, conjunto motriz e eletrônica embarcada. A apresentação institucional registra a exibição do protótipo na Feira Moto Nordeste.' },
    { title: 'Pesquisa publicada', text: 'Um artigo apresentado no CONEMI documenta o projeto, a fabricação e os testes de uma motocicleta de motovelocidade.', links: [{ label: 'Ler publicação nos anais', href: 'https://doi.org/10.29327/27644294.1249226' }] },
  ], related: ['novo-prototipo', 'recuperacao-de-energia'] },
  { slug: 'novo-prototipo', title: 'Nova geração do protótipo', category: 'Motocicleta', status: 'Desenvolvimento anunciado', summary: 'O LABEM anunciou um novo modelo após apresentar seu protótipo na Feira Moto Nordeste.', photo: photos.workshop, sections: [
    { title: 'Metas de desenvolvimento', text: 'A apresentação institucional lista objetivos para a nova etapa de engenharia.', items: ['Modelo preliminar do chassi em CAD', 'Validação de configurações por simulação', 'Avaliação de rigidez, peso e viabilidade de soldagem', 'Ensaios de frenagem, estabilidade e telemetria básica'] },
  ], related: ['prototipo-de-motovelocidade'] },
  { slug: 'recuperacao-de-energia', title: 'Recuperação de energia em amortecedores', category: 'Pesquisa aplicada', status: 'Concepção', summary: 'Estudo de um amortecedor eletromagnético para transformar parte da energia dissipada pela suspensão em energia elétrica.', photo: photos.research, sections: [
    { title: 'Como funciona a proposta', text: 'O estudo aplica a indução eletromagnética e usa um modelo massa-mola-amortecedor como base para o dimensionamento do dispositivo.' },
    { title: 'Apresentação acadêmica', text: 'O trabalho integrou a I Mostra de Ciência, Tecnologia e Inovação do CCT/UFCG, conforme a apresentação institucional.' },
  ], related: ['prototipo-de-motovelocidade'] },
]
export const news: Entry[] = [
  { slug: 'conemi-2025', title: 'LABEM apresenta pesquisas no CONEMI 2025', category: 'Pesquisa', year: '2025', date: '2025-11-28', summary: 'A produção técnica do laboratório chegou aos anais do congresso, com trabalhos sobre engenharia de motocicletas.', photo: photos.conemi, author: 'LABEM UFCG', sections: [
    { title: 'Da oficina aos anais', text: 'O balanço institucional registra dois artigos no congresso. Entre os trabalhos disponíveis nos anais está o relato do projeto, fabricação e testes de uma motocicleta de motovelocidade.' },
  ], links: [{ label: 'Ler artigo nos anais', href: 'https://doi.org/10.29327/27644294.1249226' }], related: ['feira-moto-nordeste', 'labem-conecta'] },
  { slug: 'feira-moto-nordeste', title: 'Protótipo em exposição na Feira Moto Nordeste', category: 'Eventos', summary: 'O LABEM apresentou a motocicleta ao público e anunciou o desenvolvimento de um novo modelo.', photo: photos.fair, author: 'LABEM UFCG', sections: [
    { title: 'O projeto fora da universidade', text: 'A participação aproximou o público do trabalho de engenharia da equipe. Na feira, o laboratório apresentou o protótipo e anunciou uma nova geração da motocicleta.' },
  ], related: ['conemi-2025', 'labem-conecta'] },
  { slug: 'labem-conecta', title: 'LABEM Conecta aproxima estudantes da engenharia', category: 'Extensão', summary: 'A iniciativa apresenta a engenharia a estudantes do ensino médio da rede pública.', photo: photos.outreach, author: 'LABEM UFCG', sections: [
    { title: 'Engenharia na escola', text: 'Coordenado pelo professor Ruan Eduardo, o programa busca incentivar estudantes da rede pública a conhecer a área e considerar uma formação em engenharia.' },
  ], related: ['oficinas-tecnicas'] },
  { slug: 'oficinas-tecnicas', title: 'LABEM promove workshops técnicos', category: 'Workshops', summary: 'Encontros de formação abordam eletrônica aplicada, plataforma Celus e produção de artigos científicos.', photo: photos.class, author: 'LABEM UFCG', sections: [
    { title: 'Aprendizado na prática', text: 'Os workshops documentados pelo laboratório incluíram temas como sistema de carga, injeção eletrônica e escrita científica.' },
  ] },
  { slug: 'equipe-em-aragon', title: 'Galo de Campina representa a UFCG na Espanha', category: 'Competições', year: '2018', summary: 'A equipe apresentou o projeto na quinta edição da MotoStudent, no complexo MotorLand Aragón.', photo: photos.competition, author: 'LABEM UFCG', sections: [
    { title: 'Participação na quinta edição', text: 'Segundo o CCT, a equipe apresentou e defendeu o trabalho técnico na fase teórica. O protótipo não viajou com o grupo.' },
  ], links: [{ label: 'Leia no CCT/UFCG', href: sources.aragon }] },
]
export const publications = [
  { title: 'Projeto, fabricação e teste de uma motocicleta de motovelocidade', authors: 'Maria Clara Pires Leitão de Souza, Daniel Anacleto, Lucas Kennedy Alves Araújo, Ruan Eduardo Carneiro Lucas e Wanderley Ferreira de Amorim Júnior', year: '2025', category: 'Artigo em congresso', venue: '25º CONEMI e 3ª FENAMEC', doi: '10.29327/27644294.1249226', summary: 'Trabalho sobre as etapas de projeto, fabricação e testes de uma motocicleta de motovelocidade.' },
]
export const team = [
  { name: 'Wanderley Ferreira de Amorim Júnior', role: 'Orientação na fundação', area: 'Docência', period: 'Histórico' },
  { name: 'Juscelino Maribondo', role: 'Orientação na fundação', area: 'Docência', period: 'Histórico' },
  { name: 'Ruan Eduardo Carneiro Lucas', role: 'Coordenação do LABEM Conecta', area: 'Extensão', period: 'Registro institucional' },
]
export const governance: {
  current?: { period: string; description: string }
  history: { period: string; description: string }[]
} = { history: [] }

export const partnership: { presentationPdf?: string; email: string } = { email: institution.email }
export const partners: { name: string; category: string; description: string; logo?: string; href?: string; sponsor?: boolean }[] = [
  { name: 'Universidade Federal de Campina Grande', category: 'Vínculo institucional', description: 'Universidade à qual o projeto está vinculado, por meio do Centro de Ciências e Tecnologia.', href: institution.university },
]
export const gallery = [
  { title: 'História e equipe', photos: [photos.historical, photos.team] },
  { title: 'MotoStudent', photos: [photos.competition, photos.flag] },
  { title: 'Oficina e projetos', photos: [photos.workshop, photos.motor, photos.prototype, photos.fair] },
  { title: 'Pesquisa e formação', photos: [photos.conemi, photos.research, photos.class] },
  { title: 'Extensão', photos: [photos.outreach] },
]
