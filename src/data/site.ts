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
  affiliation: ['Universidade Federal de Campina Grande', 'Centro de Ciências e Tecnologia', 'Unidade Acadêmica de Engenharia Mecânica', 'Campina Grande, Paraíba — Brasil'],
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
  { label: 'PD&I', href: 'pdi/' },
  { label: 'Oportunidades', href: 'oportunidades/', children: [
    { label: 'Eventos', href: 'eventos/' }, { label: 'Processos seletivos', href: 'faca-parte/' },
  ] },
  { label: 'Parceiros', href: 'parceiros/' },
]
export const quickLinks: Link[] = [
  { label: 'Equipe', href: 'equipe/' }, { label: 'Produção científica', href: 'pdi/' },
  { label: 'Oportunidades', href: 'oportunidades/' }, { label: 'Galeria', href: 'galeria/' },
  { label: 'Contato', href: 'contato/' },
]
export const banner: {
  interval: number
  content: { eyebrow: string; title: [string, string]; description: string; buttons: Link[]; height: string }
  slides: { id: '01' | '02'; active: boolean; desktop?: Photo; mobile?: Photo; caption: string; fit?: 'cover' | 'contain'; overlay?: number; fullBackground?: boolean }[]
} = {
  interval: 7000,
  content: {
    eyebrow: 'LABEM · UFCG',
    title: ['ENGENHARIA', 'EM DUAS RODAS.'],
    description: 'Transformamos conhecimento em tecnologia, desafios em aprendizado e ideias em movimento.',
    buttons: [{ label: 'Conheça o LABEM', href: 'sobre/' }],
    height: 'clamp(560px, 43vw, 690px)',
  },
  slides: [
    {
      id: '01', active: true, caption: 'Protótipo de motovelocidade · LABEM UFCG',
      desktop: { file: 'banner.webp', alt: 'Protótipo de motovelocidade do LABEM', position: 'right 56%' },
      mobile: { file: 'banner-mobile.webp', alt: 'Protótipo de motovelocidade do LABEM', position: 'right bottom' },
      fit: 'cover', overlay: .97,
    },
    {
      id: '02', active: false, caption: 'Fotografia coletiva da equipe LABEM',
      desktop: { file: 'equipe.webp', alt: 'Fotografia coletiva dos integrantes do LABEM reunidos na UFCG', position: 'center 56%' },
      mobile: { file: 'hero-equipe-colorida-mobile.webp', alt: 'Fotografia coletiva dos integrantes do LABEM reunidos na UFCG', position: 'center 75%' },
      fit: 'cover', fullBackground: true,
    },
  ],
}
export const homeSections = ['parceiros', 'historia', 'competicao', 'engenharia', 'oportunidades', 'instagram', 'apoio'] as const
export const trajectory = {
  eyebrow: 'Nossa trajetória',
  title: 'Uma história construída pela engenharia.',
  description: 'Desde 2012, o Laboratório de Engenharia da Motocicleta promove a integração entre conhecimento acadêmico e experiência prática, proporcionando aos estudantes da UFCG oportunidades de atuação em projetos multidisciplinares, pesquisa, inovação e desenvolvimento tecnológico.',
}
export const faculty = {
  wanderley: 'Wanderley Ferreira de Amorim Júnior',
  juscelino: 'Juscelino de Farias Maribondo',
}
export const sources = {
  faculty: 'https://uaem.ufcg.edu.br/servidores/docentes',
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
  description: 'Conheça nossos projetos, eventos, conquistas e bastidores. Acompanhe de perto as atividades do LABEM.',
  button: 'Visite nosso Instagram',
  href: institution.instagram,
  slots: ['INSTAGRAM-01', 'INSTAGRAM-02', 'INSTAGRAM-03', 'INSTAGRAM-04'],
}
export const motoStudent2018 = 'Em 2018, a equipe Galo de Campina apresentou seu projeto na fase teórica da quinta MotoStudent, em Aragón. Como a motocicleta não viajou para a Espanha, a equipe não participou das provas de pista.'
export const timeline: { year?: string; title: string; text: string; source?: Link; slot?: string }[] = [
  { year: '2012', title: 'O início de uma trajetória', text: `O Laboratório de Engenharia da Motocicleta foi fundado na Universidade Federal de Campina Grande a partir da iniciativa de Daniel Anacleto, com orientação dos professores ${faculty.wanderley} e ${faculty.juscelino}. Sua criação estabeleceu as bases para o desenvolvimento de atividades acadêmicas e projetos relacionados à engenharia motociclística.`, source: { label: 'Docentes da UAEM', href: sources.faculty }, slot: 'HISTORIA-2012' },
  { year: '2018', title: 'Da UFCG para o cenário internacional', text: 'A equipe Galo de Campina representou a universidade na etapa teórica da quinta edição da MotoStudent, realizada em Aragón, na Espanha. A experiência proporcionou a apresentação do projeto desenvolvido na UFCG em um ambiente internacional de engenharia competitiva.', source: { label: 'Leia no CCT/UFCG', href: sources.aragon }, slot: 'HISTORIA-2018' },
  { year: '2019', title: 'Novos desafios na engenharia competitiva', text: 'A aprovação da equipe para um novo ciclo da MotoStudent marcou a continuidade das atividades de desenvolvimento tecnológico e preparação para a sexta edição da competição, fortalecendo a presença da UFCG no cenário da engenharia universitária.', source: { label: 'Leia no CCT/UFCG', href: sources.sixth }, slot: 'HISTORIA-2019' },
  { year: '2025', title: 'Pesquisa e conhecimento científico', text: 'O LABEM fortaleceu sua atuação acadêmica com a publicação de dois trabalhos científicos no Congresso Nacional de Engenharia Mecânica e Industrial (CONEMI), abordando temas relacionados ao desenvolvimento de motocicletas e contribuindo para a disseminação do conhecimento e a formação dos estudantes.', source: { label: 'Leia o artigo nos anais', href: 'https://doi.org/10.29327/27644294.1249226' }, slot: 'HISTORIA-2025' },
  { title: 'Construindo o futuro', text: 'O laboratório segue desenvolvendo suas atividades por meio da engenharia aplicada, da pesquisa científica, da extensão universitária, da inovação e da formação multidisciplinar, buscando fortalecer sua atuação acadêmica e tecnológica.' },
]
export const phases = ['Pesquisa', 'Concepção', 'Prototipagem', 'Testes', 'Otimização']
export const engineering: (Entry & { slot: string })[] = [
  { slug: 'estrutura', slot: 'SUBSISTEMA-ESTRUTURA', title: 'Equipe de Estrutura', category: 'Subsistema técnico', summary: 'Integração entre chassi, suspensão e carenagem, com atenção à rigidez e ao peso.', photo: photos.workshop, sections: [
    { title: 'Da geometria ao protótipo', text: 'O subsistema trabalha com a definição de configurações, modelagem CAD e integração dos componentes. A equipe considera a fabricação desde o desenho, incluindo a viabilidade de soldagem.' },
    { title: 'Aerodinâmica', text: 'A carenagem integra as atividades de Estrutura e sua geometria precisa conciliar as exigências do conjunto e do protótipo de motovelocidade.' },
  ], related: ['powertrain', 'eletrica'] },
  { slug: 'powertrain', slot: 'SUBSISTEMA-POWERTRAIN', title: 'Equipe de Powertrain', category: 'Subsistema técnico', summary: 'Integração do motor e da transmissão e avaliação do desempenho do conjunto motriz.', photo: photos.motor, sections: [
    { title: 'Integração mecânica', text: 'O grupo compatibiliza o motor e a transmissão com o chassi, a montagem e a configuração definida para a motocicleta.' },
  ], related: ['estrutura', 'eletrica'] },
  { slug: 'eletrica', slot: 'SUBSISTEMA-ELETRICA', title: 'Equipe de Elétrica', category: 'Subsistema técnico', summary: 'Eletrônica embarcada, sistema de carga e injeção eletrônica.', photo: photos.workshop, sections: [
    { title: 'Sistemas embarcados', text: 'A equipe integra os sistemas elétricos da motocicleta. Os materiais descrevem oficinas sobre sistema de carga e injeção eletrônica e citam telemetria básica entre as metas.' },
  ] },
  { slug: 'gestao', slot: 'SUBSISTEMA-GESTAO', title: 'Gestão', category: 'Subsistema institucional', summary: 'Organização administrativa e institucional do laboratório.', sections: [] },
  { slug: 'extensao', slot: 'SUBSISTEMA-EXTENSAO', title: 'Extensão', category: 'Subsistema institucional', summary: 'Ações educativas para aproximar estudantes da rede pública da ciência e da engenharia.', photo: photos.outreach, sections: [
    { title: 'LABEM Conecta', text: 'A iniciativa, coordenada pelo professor Ruan Eduardo segundo a apresentação institucional, incentiva estudantes do ensino médio da rede pública a explorar a engenharia.' },
  ] },
  { slug: 'pdi', slot: 'SUBSISTEMA-PDI', title: 'PD&I', category: 'Pesquisa, Desenvolvimento e Inovação', summary: 'A área de Pesquisa, Desenvolvimento e Inovação atua na integração entre conhecimento científico, engenharia aplicada e desenvolvimento tecnológico, contribuindo para estudos, projetos multidisciplinares e produção acadêmica relacionada à engenharia motociclística.', sections: [
    { title: 'Pesquisa aplicada', text: 'Conheça os trabalhos científicos e os projetos de engenharia já documentados pelo laboratório.' },
  ], links: [{ label: 'Produção científica', href: 'pdi/' }, { label: 'Projetos', href: 'projetos/' }] },
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
export type Publication = {
  title: string
  authors: string
  year: string
  category: string
  summary: string
  venue?: string
  doi?: string
  officialUrl?: string
  document?: string
  photo?: Photo
}
export const publications: Publication[] = [
  { title: 'Projeto, fabricação e teste de uma motocicleta de motovelocidade', authors: 'Maria Clara Pires Leitão de Souza, Daniel Anacleto, Lucas Kennedy Alves Araújo, Ruan Eduardo Carneiro Lucas e Wanderley Ferreira de Amorim Júnior', year: '2025', category: 'Artigo em congresso', venue: '25º CONEMI e 3ª FENAMEC', doi: '10.29327/27644294.1249226', summary: 'Trabalho sobre as etapas de projeto, fabricação e testes de uma motocicleta de motovelocidade.' },
]
export const team = [
  { name: faculty.wanderley, role: 'Orientação na fundação', area: 'Docência', period: 'Histórico' },
  { name: faculty.juscelino, role: 'Orientação na fundação', area: 'Docência', period: 'Histórico' },
  { name: 'Ruan Eduardo Carneiro Lucas', role: 'Coordenação do LABEM Conecta', area: 'Extensão', period: 'Registro institucional' },
]
export const governance: {
  current?: { period: string; description: string; members: { name: string; role: string; course: string; period?: string; photo?: Photo }[] }
  history: { period: string; description: string }[]
} = { history: [] }

export const partnership: { presentationPdf?: string; email: string } = { email: institution.email }
export const partners: { name: string; category: 'Vínculo institucional' | 'Parceria' | 'Parceria tecnológica' | 'Patrocínio' | 'Apoio'; description: string; logo?: string; logoSlot?: string; href?: string }[] = [
  { name: 'JM2 Eletec', category: 'Parceria', description: 'Parceiro do LABEM.', logo: 'parceiro-01.svg', logoSlot: 'PARTNER-LOGO-01' },
  { name: 'LEMT', category: 'Parceria', description: 'Laboratório Experimental de Máquinas Térmicas da UFCG.', logo: 'parceiro-02.svg', logoSlot: 'PARTNER-LOGO-02', href: 'https://uaem.ufcg.edu.br/lemt' },
  { name: 'Universidade Federal de Campina Grande', category: 'Vínculo institucional', description: 'Universidade à qual o projeto está vinculado, por meio do Centro de Ciências e Tecnologia.', href: institution.university },
]
export const gallery = [
  { title: 'História e equipe', photos: [photos.historical, photos.team] },
  { title: 'MotoStudent', photos: [photos.competition, photos.flag] },
  { title: 'Oficina e projetos', photos: [photos.workshop, photos.motor, photos.prototype, photos.fair] },
  { title: 'Pesquisa e formação', photos: [photos.conemi, photos.research, photos.class] },
  { title: 'Extensão', photos: [photos.outreach] },
]
