export const activities = [
  { icon: 'hand-heart', title: 'Extensão universitária', description: 'Conectamos a universidade à sociedade.' },
  { icon: 'flask', title: 'Pesquisa, Desenvolvimento e Inovação', description: 'Transformamos conhecimento em soluções.' },
  { icon: 'bike', title: 'Desenvolvimento de protótipos', description: 'Aplicamos a engenharia na prática.' },
  { icon: 'flag', title: 'Competições', description: 'Enfrentamos desafios de engenharia universitária.' },
  { icon: 'calendar', title: 'Eventos', description: 'Promovemos conexões e experiências.' },
  { icon: 'wrench', title: 'Workshops', description: 'Desenvolvemos competências técnicas.' },
] as const

export const missionAndVision = [
  { icon: 'target', title: 'Nossa missão', description: 'Promover a pesquisa, o desenvolvimento e a inovação na engenharia motociclística, desenvolvendo soluções que contribuam para a segurança, a eficiência e a sustentabilidade, aliando tecnologia à responsabilidade social.' },
  { icon: 'eye', title: 'Nossa visão', description: 'Consolidar-se como um núcleo de excelência em engenharia e inovação, contribuindo para a formação de profissionais capacitados e para o desenvolvimento de tecnologias com impacto positivo na sociedade.' },
] as const

export const values = [
  { icon: 'bulb', title: 'Inovação' },
  { icon: 'leaf', title: 'Sustentabilidade' },
  { icon: 'users', title: 'Colaboração em equipe' },
  { icon: 'graduation', title: 'Formação profissional' },
  { icon: 'hand-heart', title: 'Responsabilidade social' },
  { icon: 'handshake', title: 'Humildade' },
  { icon: 'network', title: 'Diversidade, equidade e inclusão' },
  { icon: 'flame', title: 'Paixão pelo propósito' },
] as const

export const researchAreas = [
  { icon: 'book', title: 'Artigos científicos' },
  { icon: 'graduation', title: 'Congressos' },
  { icon: 'flask', title: 'Pesquisas e estudos' },
  { icon: 'settings', title: 'Desenvolvimento tecnológico' },
] as const

export const coordination = [
  'Coordenação Administrativa',
  'Coordenação Operacional',
] as const

export const organization = [
  {
    id: 'area-administrativa', icon: 'clipboard', title: 'Área Administrativa',
    roles: [
      { id: 'secretaria', title: 'Secretaria', description: 'Organiza documentos, reuniões e a comunicação interna.' },
      { id: 'tesouraria', title: 'Tesouraria', description: 'Planeja o orçamento, administra recursos e capta apoios.' },
      { id: 'logistica', title: 'Logística', description: 'Organiza materiais, armazenamento e transporte.' },
      { id: 'marketing', title: 'Marketing', description: 'Divulga as atividades do LABEM e mantém a comunicação com o público externo.' },
    ],
  },
  {
    id: 'area-de-projeto', icon: 'settings', title: 'Área de Projeto',
    lead: { id: 'coordenacao-de-projeto', title: 'Coordenação de Projeto', description: 'Planeja e integra o trabalho dos subsistemas. Cada subsistema tem uma liderança que apoia a coordenação.' },
    roles: [
      { id: 'estrutura', title: 'Equipe de Estrutura', description: 'Desenvolve o chassi e integra componentes com atenção à estabilidade, resistência e segurança.' },
      { id: 'powertrain', title: 'Equipe de Powertrain', description: 'Desenvolve e integra o motor e a transmissão de potência.' },
      { id: 'eletrica', title: 'Equipe de Elétrica', description: 'Desenvolve e integra os sistemas elétricos e eletrônicos.' },
    ],
  },
  {
    id: 'comite-provisorio', icon: 'network', title: 'Comitê Provisório',
    note: 'Estrutura de constituição facultativa.',
    roles: [
      { id: 'pesquisa-organograma', title: 'Pesquisa, Desenvolvimento e Inovação', description: 'Coordenação colaborativa. Todos os integrantes podem participar dos projetos de pesquisa.' },
      { id: 'coordenacao-de-competicao', title: 'Coordenação de Competição', description: 'É ativada durante a competição para integrar os subsistemas e organizar a logística e os prazos.' },
    ],
  },
] as const
