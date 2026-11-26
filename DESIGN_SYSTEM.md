# Sistema de design

A marca, a fotografia original da motocicleta e a composição vermelha, preta e branca vêm dos materiais institucionais.

| Uso | Cor |
| --- | --- |
| Fundos de capa e navegação | `#101011` |
| Texto em fundos claros | `#151516` |
| Ação primária | `#d71420` |
| Texto vermelho sobre fundos claros | `#b70d17` |
| Ênfase sobre fundos escuros | `#ed333b` |
| Superfície editorial | `#f5f4f1` |
| Branco | `#ffffff` |

Barlow Condensed 800 compõe títulos de seção e capa. Inter compõe textos, botões e navegação. As fontes são locais e suas licenças OFL acompanham o projeto.

- **Layout.** O conteúdo tem largura máxima de 1280 px. As margens laterais variam de 20 a 88 px, e as seções principais usam 54 a 110 px de respiro vertical.
- **Hierarquia.** Cada página tem um título principal. Títulos de seção usam a fonte condensada. Texto corrido usa 1 rem, e rótulos principais usam pelo menos 0,875 rem. Metadados secundários usam de 0,75 a 0,875 rem.
- **Botões e links.** A ação principal usa vermelho com texto branco. Ações secundárias usam contorno. Links editoriais têm sublinhado vermelho e foco visível.
- **Capa.** Fotografia à direita e texto alinhado à esquerda no desktop. No celular, o texto vem primeiro e a área de fotografia é reenquadrada abaixo. Use sobreposição escura para preservar legibilidade e mantenha a legenda curta.
- **Imagens.** Use imagens do laboratório, comprima em WebP e descreva o conteúdo em texto alternativo. Use `position` quando a composição exigir um ponto de corte específico.
- **Navegação.** Abaixo de 1051 px, o menu é expansível. Grades migram para duas ou uma coluna, de acordo com o espaço.
- **Acessibilidade.** Preserve o foco visível, ordem de leitura, controles nativos e atalhos de teclado. Desative transições e rolagem suave para quem prefere movimento reduzido.

- **Oportunidades.** Use a barra compacta acima da navegação para avisos com prazo. As páginas internas preservam a capa e oferecem seções de leitura para programação, edital e formulários.
- **Fotografias institucionais.** A galeria fica na página própria e preserva a ampliação por teclado. O banner do Instagram ocupa uma área clicável e empilha texto e imagens no celular quando há fotos cadastradas.


## Fase 3

- Use as variáveis `--radius-button` (12 px), `--radius-small` (14 px), `--radius-card` (18 px), `--radius-photo` (22 px) e `--radius-banner` (26 px). Bordas finas e sombra leve separam os cartões do fundo. A elevação no hover respeita movimento reduzido.
- Use caixa corrente nos títulos editoriais. Preserve a caixa alta na capa e na chamada da MotoStudent. Mantenha Barlow Condensed nos títulos e Inter nos textos.
- O acolhimento institucional dá lugar à faixa de parceiros no início da home. A trajetória ocupa cartões conectados, em duas colunas no desktop e em linha vertical no celular. Os subsistemas usam grade de três, duas e uma coluna.
- Os espaços editoriais são definidos em `src/data/imageSlots.ts`. Os códigos aparecem na revisão com `PUBLIC_IMAGE_MAP=1`. Consulte o [guia de imagens](GUIA_DE_IMAGENS.md) antes de editar enquadramentos e proporções.

## Fase 3.1

- O banner alterna as fotografias em sete segundos, mantendo título, descrição e botões fixos. A capa da equipe usa uma foto em cores e um gradiente para manter o contraste do texto. No celular, o enquadramento preserva a largura da foto. O movimento reduzido é respeitado.
- A faixa de parceiros centraliza o título, os cartões de 18 px e o botão. Registre os vínculos autorizados no arquivo de dados.
- Os subsistemas usam ícones de traço e o bloco do Instagram apresenta uma grade de quatro fotografias.

## Fase 4

- A capa pública usa apenas a fotografia original da motocicleta e o botão “Conheça o LABEM”. A capa alternativa e os controles permanecem configuráveis em `src/data/site.ts` e `src/components/Banner.astro`.
- Em Sobre nós, Equipe e PD&I, os novos componentes usam Inter nas divisões editoriais, ícones vetoriais de traço, vermelho `#D71420`, preto `#171717`, fundo de ícone `#FCEBEC` e bordas neutras de 1 px. Use 20 px de raio em cartões e 24 px nos blocos do organograma. Os ícones têm 28 px e fundos de 15 px de raio quando destacados.
- Áreas de atuação usam três, duas ou uma coluna. Missão e visão usam duas colunas e empilham no celular. Valores usam quatro, duas ou uma coluna. As categorias de PD&I usam grade de duas colunas, com publicações em cartões horizontais.
- No organograma, as duas coordenações superiores possuem fundo vermelho e a Coordenação Discente possui fundo preto. A Coordenação de Projeto se distingue dos subsistemas por fundo vermelho suave. Os três blocos passam a uma coluna no celular. A Extensão fica em cartão independente. Edite os dados em `src/data/institutional.ts`.
- Os cards de subsistemas da home são inteiramente clicáveis. Cada card inclui ícone, título e seta. PD&I vai para a página própria e os demais vão para as âncoras da página Equipe. O rodapé preserva as marcas, o crédito e os nomes institucionais por extenso.
