# Manual de edição

A maioria das mudanças editoriais é feita em `src/data/site.ts`. Execute `npm run check` e `npm run build` para verificar as alterações.

| Para editar | Onde e como |
| --- | --- |
| Capa | Envie as versões desktop e celular para `public/images/`. Em `banner.slides`, edite arquivos, título em duas linhas, descrição, legenda, botões, altura, alinhamento, posição e sobreposição. Reordene o array e ative `carousel` com pelo menos dois slides para alternar a capa. `interval` usa milissegundos. |
| Cores e fontes | Edite as propriedades no começo de `src/styles/site.css`. Coloque fontes licenciadas em `src/assets/` e atualize `@font-face`. |
| Menu e rodapé | Reordene, adicione ou retire itens em `navigation` e `quickLinks`. Itens com `children` exibem submenu. |
| Seções da home | Reordene ou retire chaves de `homeSections`. O conteúdo específico de cada bloco está em `src/pages/index.astro`. |
| Fotografias | Salve WebP em `public/images/` e registre `file`, `alt` e, opcionalmente, `position` em `photos`. Inclua a referência no álbum de `gallery` ou na entrada correspondente. |
| Equipe e gestões | Adicione registros em `team` com nome, função, área e período autorizados. Preserve períodos anteriores. |
| Notícias e projetos | Adicione uma entrada em `news` ou `projects` com um `slug` único, título, categoria, resumo e seções. Inclua capa, data ISO, autor, galeria, links e itens relacionados conforme os dados disponíveis. O build gera a URL. |
| Engenharia | Adicione um subsistema em `engineering`. O mesmo registro alimenta a lista e a página individual. |
| Eventos | Adicione um registro em `upcomingEvents`. Use data e hora ISO com fuso, por exemplo `2030-04-15T18:30:00-03:00`. Defina `countdown: true` quando a data estiver confirmada. Retire o evento da agenda depois que passar. |
| Patrocínio ou parceria | Adicione um registro autorizado em `partners` com categoria, descrição, site e logotipo. Confirme a natureza do vínculo e aprove o material público antes de incluir cotas ou PDFs. |
| Produção científica | Registre título oficial, autores, ano, tipo, evento, resumo e DOI em `publications`. Confira nos anais ou no repositório institucional. |
| Processo seletivo | Edite `recruitment` com status, prazo, etapas, edital público e link externo de inscrição. Ao encerrar, retire o link e atualize o status. |
| Nova página | Crie um arquivo `.astro` em `src/pages/`, use o layout `Inner` e inclua o caminho no menu se necessário. |

Exemplos de pedidos ao Codex:

- “Troque o banner pela foto que anexei e confira o enquadramento em 390 e 1440 px.”
- “Publique uma notícia sobre esta visita e credite o post do Instagram pelo link que enviei.”
- “Acrescente a gestão atual e mantenha as anteriores no filtro da equipe.”
- “Ative a inscrição com este edital público, formulário e data de encerramento.”
