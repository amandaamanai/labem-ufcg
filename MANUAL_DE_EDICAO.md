# Manual de edição

A maioria das mudanças editoriais é feita em `src/data/site.ts`. Execute `npm run check` e `npm run build` para verificar as alterações.

| Para editar | Onde e como |
| --- | --- |
| Capa | Envie as versões desktop e celular para `public/images/`. Em `banner.slides`, edite arquivos, título em duas linhas, descrição, legenda, botões, altura, alinhamento, posição e sobreposição. Reordene o array e ative `carousel` com pelo menos dois slides para alternar a capa. `interval` usa milissegundos. |
| Cores e fontes | Edite as propriedades no começo de `src/styles/site.css`. Coloque fontes licenciadas em `src/assets/` e atualize `@font-face`. |
| Menu e rodapé | Reordene, adicione ou retire itens em `navigation` e `quickLinks`. Itens com `children` exibem submenu. |
| Seções da home | Reordene ou retire chaves de `homeSections`. O conteúdo específico de cada bloco está em `src/pages/index.astro`. |
| Fotografias | Salve WebP em `public/images/` e registre `file`, `alt` e, opcionalmente, `position` em `photos`. Inclua a referência no álbum de `gallery` ou na entrada correspondente. |
| Equipe e gestões | Atualize `governance.current` e `governance.history` com períodos e descrições autorizados. Os registros de orientação ficam em `team`. |
| Projetos e arquivo histórico | Adicione uma entrada em `projects` ou no arquivo `news` com um `slug` único, título, categoria, resumo e seções. Inclua capa, data ISO, autor, galeria, links e itens relacionados conforme os dados disponíveis. O build gera a URL. |
| Engenharia | Edite `engineering` e vincule cada card a um espaço em `imageSlots.ts`. Mantenha Estrutura, Powertrain, Elétrica, Gestão, Extensão e PD&I. |
| Patrocínio ou parceria | Adicione um registro autorizado em `partners` com categoria, descrição, site e logotipo. Confirme a natureza do vínculo e aprove o material público antes de incluir cotas ou PDFs. |
| Produção científica | Registre título oficial, autores, ano, tipo, evento, resumo e DOI em `publications`. Confira nos anais ou no repositório institucional. |
| Nova página | Crie um arquivo `.astro` em `src/pages/`, use o layout `Inner` e inclua o caminho no menu se necessário. |

## História e espaços de imagens

Edite `timeline` em `src/data/site.ts` para adicionar um acontecimento. Informe então ano, título, descrição e fonte confirmada. Configure `slot` para associar uma fotografia em `src/data/imageSlots.ts`. O [Guia de imagens](GUIA_DE_IMAGENS.md) informa os nomes e tamanhos. Os códigos ficam disponíveis na prévia quando o build roda com `PUBLIC_IMAGE_MAP=1`.

## Eventos, inscrições e editais

- **Evento.** Em `src/data/events.ts`, retorne um evento com `active: true` em `getEvent()`. Preencha título, subtítulo, descrição, local, modalidade, `startsAt` e `timeZone`. Use data ISO com fuso, como `2030-04-15T18:30:00-03:00`, e um fuso IANA, como `America/Sao_Paulo`. Configure `banner` e `mobileBanner` com imagens de `public/images/`. Preencha palestrantes, programação, público e certificado quando confirmados. Use `featured` para mostrar o nome na home. Ative `countdown` para mostrar a contagem regressiva e `calendar` com `endsAt` para oferecer um arquivo de calendário.
- **Google Forms.** Use links de resposta públicos e independentes para eventos e recrutamento. Preencha `form.embedUrl` com o endereço de incorporação do Google Forms, `form.externalUrl` com o link de resposta e, se necessário, `form.height` em pixels. Eventos mostram o formulário apenas com `registration: 'aberta'`. Recrutamento exige `status: 'inscricoes-abertas'`. Teste o link de resposta em uma janela anônima.
- **Encerramento e arquivo.** Feche a recepção de respostas no Google Forms e atualize o status no site. Antes de reutilizar o formulário permanente, exporte as respostas ou arquive a planilha em área restrita. Anote a edição e o período, limite o acesso aos responsáveis e mantenha os dados conforme as regras de retenção aplicáveis. Depois, separe o destino das novas respostas. Dados de inscrição devem ficar fora do GitHub.
- **Edital e resultados.** Em `src/data/recruitment.ts`, configure edição, ano, capa, título, descrição, requisitos, vagas, cronograma e etapas. Preencha `noticePdf` e `documents` com caminhos de arquivos públicos ou URLs HTTPS. Use `sem-edital`, `em-breve`, `inscricoes-abertas`, `em-andamento`, `inscricoes-encerradas` ou `resultado`. Publique o resultado autorizado em `results` e selecione `resultado`. Use `featured` para o destaque na home.
- **Avisos.** Configure `notice` no evento ou no edital, ou adicione um aviso geral em `src/data/notices.ts`. Preencha `active`, `text`, `href`, `color` (`red` ou `dark`), `startsAt`, `endsAt` e `priority`. O maior valor de prioridade vence no período em que os avisos se sobrepõem. A data de fim não é inclusiva.
- **Compartilhamento.** Use `sharing` nos dois arquivos para configurar título, descrição, imagem de `public/images/` e URL pública completa. Aplicativos podem manter versões anteriores em cache após uma alteração.
- **Instagram e galeria.** Edite o perfil em `institution.instagram` e a composição em `instagramBanner`. Atualize `gallery` e `photos` para os álbuns. Configure `INSTAGRAM-01` e `INSTAGRAM-02` em `imageSlots.ts`.
- **Parceiros.** Cadastre vínculos confirmados em `partners`. Escolha `category` de acordo com o vínculo confirmado. Use `Patrocínio` apenas para empresas aprovadas e `logoSlot` para identificar uma reserva. Preencha `partnership.presentationPdf` somente com material institucional liberado para divulgação e revise o e-mail de contato.

Exemplos de pedidos ao Codex:

- “Ative este evento, use o banner em anexo e mostre o aviso até a data de encerramento.”
- “Encerre as inscrições no site e troque o botão pelo edital.”
- “Divulgue este resultado autorizado e ajuste a mensagem da home.”
- “Acrescente estas fotos ao álbum de extensão e atualize a composição do Instagram.”
- “Inclua este parceiro confirmado com link e logotipo.”
