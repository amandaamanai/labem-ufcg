# Guia de imagens do LABEM UFCG

O catálogo separa a dimensão CSS medida no navegador, a resolução de origem recomendada, o mínimo aceitável e a otimização para publicação. As medidas foram coletadas em 360, 390, 430, 768, 1024, 1440 e 1920 px. As alturas de capas internas podem variar com o texto. O arquivo de origem é o original entregue para edição. O arquivo otimizado é o que deve entrar no repositório.

O [catálogo em CSV](CATALOGO_DE_IMAGENS.csv) tem as mesmas especificações, com uma linha por espaço. Os dois espaços iniciais de logotipos correspondem a JM2 Eletec e LEMT.

## Catálogo por espaço

A faixa de parceiros permite novos cards pelo arquivo de dados. Os cards de subsistemas usam ícones vetoriais e mantêm uma configuração opcional para fotografias. Os quatro espaços do Instagram usam fotografias do acervo institucional. As artes comemorativas e a grade do Instagram enviadas na conversa aguardam os arquivos para inserção.

O banner conserva uma única camada de texto. A fotografia original da moto continua como slide 01. As dimensões de composição para a equipe permanecem 2400 × 1200 no desktop e 960 × 840 no celular. A fotografia recuperada da apresentação é quase 4:3 e foi publicada na resolução original de 855 × 641, com variante móvel de 768 × 576. O navegador preserva o enquadramento com `contain`. Os pesos de referência são 360 KB no desktop e 180 KB no celular.

| ID | Página e seção | Finalidade | Caixa CSS | Origem | Mínimo | Publicação | Mobile | Proporção | Formato e peso | Transparência | Arquivo | Prioridade | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `HERO-DESKTOP-01` | Home · Capa | Foto institucional da motocicleta | 768 × 560 a 1920 × 690 | 2880 × 1440 | 1440 × 720 | 2400 × 1200 | Sim, arquivo separado · 960 × 840 | 2:1 · Horizontal | WebP · 360 KB | Não | `banner.webp` | Preservar | Existente |
| `HERO-MOBILE-01` | Home · Capa | Foto da capa para celular | 360–650 × 342 | 1200 × 1050 | 650 × 570 | 960 × 840 | É a versão mobile · 960 × 840 | 8:7 · Horizontal | WebP · 180 KB | Não | `banner-mobile.webp` | Preservar | Existente |
| `HERO-DESKTOP-02` | Home · Capa | Fotografia coletiva do LABEM | Faixa direita de aproximadamente 53% da largura da capa | 2400 × 1200 (tela de composição) | 800 × 600 | 855 × 641 (inserida) | Sim, arquivo separado · 768 × 576 | 4:3 aprox. na fotografia inserida · Horizontal | WebP · 360 KB | Não | `hero-equipe.webp` | Colorida original quando disponível | Inserida · versão da apresentação |
| `HERO-MOBILE-02` | Home · Capa | Fotografia coletiva do LABEM | Largura total × 342 px nos pontos medidos | 960 × 840 (tela de composição) | 640 × 480 | 768 × 576 (inserida) | É a versão mobile · 768 × 576 | 4:3 aprox. na fotografia inserida · Horizontal | WebP · 180 KB | Não | `hero-equipe-mobile.webp` | Colorida original quando disponível | Inserida · versão da apresentação |
| `PARTNER-LOGO-01` | Home e Parceiros · Faixa de parceiros | Logotipo de JM2 Eletec | Card compacto de até 216 px. Área de imagem de até 192 × 128. | SVG escalável ou PNG 900 × 600 | PNG 360 × 240 | SVG ou PNG 576 × 384 | Mesmo arquivo · Igual ao desktop | 3:2 no arquivo de referência, marca na proporção original · Horizontal | SVG / PNG · 100 KB | Sim | `parceiro-01.svg` | Alta · arquivo gráfico | Pendente |
| `PARTNER-LOGO-02` | Home e Parceiros · Faixa de parceiros | Logotipo de LEMT | Card compacto de até 216 px. Área de imagem de até 192 × 128. | SVG escalável ou PNG 900 × 600 | PNG 360 × 240 | SVG ou PNG 576 × 384 | Mesmo arquivo · Igual ao desktop | 3:2 no arquivo de referência, marca na proporção original · Horizontal | SVG / PNG · 100 KB | Sim | `parceiro-02.svg` | Alta · arquivo gráfico | Pendente |
| `HISTORIA-2012` | Home e Sobre nós · Linha do tempo | Marco da fundação acompanhado de registro da equipe em 2017 | 269 × 168 a 572 × 358 | 1920 × 1200 | 800 × 500 | 1280 × 800 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 220 KB | Não | `historia-2012.webp` | Média | Pendente |
| `HISTORIA-2018` | Home e Sobre nós · Linha do tempo | Participação na MotoStudent | 269 × 168 a 572 × 358 | 1920 × 1200 | 800 × 500 | 1280 × 800 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 220 KB | Não | `historia-2018.webp` | Média | Pendente |
| `HISTORIA-2019` | Home e Sobre nós · Linha do tempo | Preparação para a sexta edição | 269 × 168 a 572 × 358 | 1920 × 1200 | 800 × 500 | 1280 × 800 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 220 KB | Não | `historia-2019.webp` | Média | Pendente |
| `HISTORIA-2025` | Home e Sobre nós · Linha do tempo | Pesquisa no CONEMI | 269 × 168 a 572 × 358 | 1920 × 1200 | 800 × 500 | 1280 × 800 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 220 KB | Não | `historia-2025.webp` | Média | Pendente |
| `MOTOSTUDENT-HOME` | Home · MotoStudent | Equipe na Espanha com a bandeira brasileira | 318 × 239 a 597 × 448 | 2000 × 1500 | 960 × 720 | 1600 × 1200 | Mesmo arquivo · Igual ao desktop | 4:3 sugerida, original preservada · Horizontal | WebP · 300 KB | Não | `motostudent-home.webp` | Alta | Pendente |
| `SUBSISTEMA-ESTRUTURA` | Home e Engenharia · Cards dos subsistemas | Equipe de Estrutura | 318 × 199 a 443 × 277 nos pontos medidos | 1440 × 900 | 640 × 400 | 960 × 600 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 160 KB | Não | `subsistema-estrutura.webp` | Foto opcional · card usa ícone | Existente · ícone |
| `SUBSISTEMA-POWERTRAIN` | Home e Engenharia · Cards dos subsistemas | Equipe de Powertrain | 318 × 199 a 443 × 277 nos pontos medidos | 1440 × 900 | 640 × 400 | 960 × 600 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 160 KB | Não | `subsistema-powertrain.webp` | Foto opcional · card usa ícone | Existente · ícone |
| `SUBSISTEMA-ELETRICA` | Home e Engenharia · Cards dos subsistemas | Equipe de Elétrica | 318 × 199 a 443 × 277 nos pontos medidos | 1440 × 900 | 640 × 400 | 960 × 600 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 160 KB | Não | `subsistema-eletrica.webp` | Foto opcional · card usa ícone | Existente · ícone |
| `SUBSISTEMA-GESTAO` | Home e Engenharia · Cards dos subsistemas | Gestão | 318 × 199 a 443 × 277 nos pontos medidos | 1440 × 900 | 640 × 400 | 960 × 600 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 160 KB | Não | `subsistema-gestao.webp` | Foto opcional · card usa ícone | Existente · ícone |
| `SUBSISTEMA-EXTENSAO` | Home e Engenharia · Cards dos subsistemas | Extensão | 318 × 199 a 443 × 277 nos pontos medidos | 1440 × 900 | 640 × 400 | 960 × 600 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 160 KB | Não | `subsistema-extensao.webp` | Foto opcional · card usa ícone | Existente · ícone |
| `SUBSISTEMA-PDI` | Home e Engenharia · Cards dos subsistemas | Pesquisa, Desenvolvimento e Inovação | 318 × 199 a 443 × 277 nos pontos medidos | 1440 × 900 | 640 × 400 | 960 × 600 | Mesmo arquivo · Igual ao desktop | 8:5 · Horizontal | WebP · 160 KB | Não | `subsistema-pdi.webp` | Foto opcional · card usa ícone | Existente · ícone |
| `INSTAGRAM-01` | Home · Instagram | Registro editorial das atividades | Grade de duas colunas, até 260 × 325 | 1200 × 1500 | 480 × 600 | 800 × 1000 | Mesmo arquivo · Igual ao desktop | 4:5 · Vertical | WebP · 150 KB | Não | `instagram-01.webp` | Média | Inserida · acervo |
| `INSTAGRAM-02` | Home · Instagram | Registro editorial das atividades | Grade de duas colunas, até 260 × 325 | 1200 × 1500 | 480 × 600 | 800 × 1000 | Mesmo arquivo · Igual ao desktop | 4:5 · Vertical | WebP · 150 KB | Não | `instagram-02.webp` | Média | Inserida · acervo |
| `INSTAGRAM-03` | Home · Instagram | Participação no CONEMI | Grade de duas colunas, até 260 × 325 | 1200 × 1500 | 480 × 600 | 800 × 1000 | Mesmo arquivo · Igual ao desktop | 4:5 · Vertical | WebP · 150 KB | Não | `instagram-03.webp` | Média | Inserida · acervo |
| `INSTAGRAM-04` | Home · Instagram | Atividade de extensão | Grade de duas colunas, até 260 × 325 | 1200 × 1500 | 480 × 600 | 800 × 1000 | Mesmo arquivo · Igual ao desktop | 4:5 · Vertical | WebP · 150 KB | Não | `instagram-04.webp` | Média | Inserida · acervo |
| `EVENTO-DESKTOP` | Eventos · Capa interna | Arte de divulgação no desktop | 450 × 365 a 878 × 365 nos pontos medidos | 2400 × 1000 | 1200 × 500 | 1920 × 800 | Sim, arquivo separado · 960 × 800 | 12:5 · Horizontal | WebP · 300 KB | Não | `banner-evento-desktop.webp` | Na divulgação | Pendente |
| `EVENTO-MOBILE` | Eventos · Capa interna | Arte de divulgação no celular | 336–624 × 300–320 com o conteúdo atual | 1200 × 1000 | 600 × 500 | 960 × 800 | É a versão mobile · 960 × 800 | 6:5 · Horizontal | WebP · 180 KB | Não | `banner-evento-mobile.webp` | Na divulgação | Pendente |
| `EVENTO-OG` | Eventos · Compartilhamento | Imagem de prévia em redes e mensagens | Fora do layout. A exibição depende do aplicativo. | 1800 × 945 | 600 × 315 | 1200 × 630 | Mesmo arquivo · Igual ao desktop | 40:21 · Horizontal | JPEG · 220 KB | Não | `og-evento.jpg` | Na divulgação | Pendente |
| `PROCESSO-SELETIVO-DESKTOP` | Faça parte · Capa interna | Arte de divulgação no desktop | 450 × 365 a 878 × 365 nos pontos medidos | 2400 × 1000 | 1200 × 500 | 1920 × 800 | Sim, arquivo separado · 960 × 800 | 12:5 · Horizontal | WebP · 300 KB | Não | `banner-processo-seletivo-desktop.webp` | Na divulgação | Pendente |
| `PROCESSO-SELETIVO-MOBILE` | Faça parte · Capa interna | Arte de divulgação no celular | 336–624 × 300–320 com o conteúdo atual | 1200 × 1000 | 600 × 500 | 960 × 800 | É a versão mobile · 960 × 800 | 6:5 · Horizontal | WebP · 180 KB | Não | `banner-processo-seletivo-mobile.webp` | Na divulgação | Pendente |
| `PROCESSO-SELETIVO-OG` | Faça parte · Compartilhamento | Imagem de prévia em redes e mensagens | Fora do layout. A exibição depende do aplicativo. | 1800 × 945 | 600 × 315 | 1200 × 630 | Mesmo arquivo · Igual ao desktop | 40:21 · Horizontal | JPEG · 220 KB | Não | `og-processo-seletivo.jpg` | Na divulgação | Pendente |

## Enquadramento e configuração

O diretório dos arquivos é `public/images/`. Edite o texto alternativo junto do nome do arquivo.

| ID | Enquadramento | Área segura | Cortes | Configuração |
| --- | --- | --- | --- | --- |
| `HERO-DESKTOP-01` | Motocicleta à direita. Deixe a esquerda escura e livre. | Assunto entre 54% e 92% da largura e 20% a 80% da altura. Título, descrição e botões no lado esquerdo. | Sim, cover. Pode cortar laterais em tablets e faixas de topo e base em telas largas. | src/data/site.ts · banner.slides[0].desktop |
| `HERO-MOBILE-01` | Motocicleta no centro inferior, levemente à direita. | Assunto entre 14% e 90% da largura e 36% a 90% da altura. Texto e botões ocupam a metade superior da capa. | Sim, cover. Lateral esquerda e topo podem ser cortados. | src/data/site.ts · banner.slides[0].mobile |
| `HERO-DESKTOP-02` | Equipe inteira. Desktop no lado direito. Celular abaixo dos textos. | Preserve todos os rostos e pessoas nas bordas. | Não. A foto fica contida na área de imagem. | src/data/site.ts · banner.slides[1].desktop |
| `HERO-MOBILE-02` | Equipe inteira. Desktop no lado direito. Celular abaixo dos textos. | Preserve todos os rostos e pessoas nas bordas. | Não. A foto fica contida na área de imagem. | src/data/site.ts · banner.slides[1].mobile |
| `PARTNER-LOGO-01` | Versão para fundo claro, marca centralizada com proporção original. | 10% livres em cada margem, especialmente para assinaturas compridas. | Não, contain. | src/data/site.ts · partners[].logo e logoSlot |
| `PARTNER-LOGO-02` | Versão para fundo claro, marca centralizada com proporção original. | 10% livres em cada margem, especialmente para assinaturas compridas. | Não, contain. | src/data/site.ts · partners[].logo e logoSlot |
| `HISTORIA-2012` | Registro do ano, rostos centralizados e assuntos inteiros. | Conserve 8% livres nos quatro lados. | Possível com proporção diferente. Use contain para preservar um registro sem corte. | src/data/imageSlots.ts · photo |
| `HISTORIA-2018` | Registro do ano, rostos centralizados e assuntos inteiros. | Conserve 8% livres nos quatro lados. | Possível com proporção diferente. Use contain para preservar um registro sem corte. | src/data/imageSlots.ts · photo |
| `HISTORIA-2019` | Registro do ano, rostos centralizados e assuntos inteiros. | Conserve 8% livres nos quatro lados. | Possível com proporção diferente. Use contain para preservar um registro sem corte. | src/data/imageSlots.ts · photo |
| `HISTORIA-2025` | Registro do ano, rostos centralizados e assuntos inteiros. | Conserve 8% livres nos quatro lados. | Possível com proporção diferente. Use contain para preservar um registro sem corte. | src/data/imageSlots.ts · photo |
| `MOTOSTUDENT-HOME` | Foto frontal ou aberta da equipe com a bandeira inteira. | Inclua borda de 5% ao redor de todas as pessoas e da bandeira. | Não, contain. Se o original tiver outra proporção, mantenha-a. | src/data/imageSlots.ts · photo, caption |
| `SUBSISTEMA-ESTRUTURA` | Equipe ou atividade específica com assunto central. | Preserve 10% de margem e mantenha rostos e equipamento no centro. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `SUBSISTEMA-POWERTRAIN` | Equipe ou atividade específica com assunto central. | Preserve 10% de margem e mantenha rostos e equipamento no centro. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `SUBSISTEMA-ELETRICA` | Equipe ou atividade específica com assunto central. | Preserve 10% de margem e mantenha rostos e equipamento no centro. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `SUBSISTEMA-GESTAO` | Equipe ou atividade específica com assunto central. | Preserve 10% de margem e mantenha rostos e equipamento no centro. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `SUBSISTEMA-EXTENSAO` | Equipe ou atividade específica com assunto central. | Preserve 10% de margem e mantenha rostos e equipamento no centro. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `SUBSISTEMA-PDI` | Equipe ou atividade específica com assunto central. | Preserve 10% de margem e mantenha rostos e equipamento no centro. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `INSTAGRAM-01` | Dois registros diferentes, com enquadramento vertical. | Assunto e rostos no miolo de 80% da foto. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `INSTAGRAM-02` | Dois registros diferentes, com enquadramento vertical. | Assunto e rostos no miolo de 80% da foto. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `INSTAGRAM-03` | Dois registros diferentes, com enquadramento vertical. | Assunto e rostos no miolo de 80% da foto. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `INSTAGRAM-04` | Dois registros diferentes, com enquadramento vertical. | Assunto e rostos no miolo de 80% da foto. | Possível com proporção diferente. | src/data/imageSlots.ts · photo |
| `EVENTO-DESKTOP` | Deixe o assunto à direita dentro da arte. O texto do site fica à esquerda. | Assunto entre 42% e 88% da arte e 15% a 85% da altura. Dados essenciais ficam no HTML. | Sim, cover, sobretudo em tablets e com títulos longos. | src/data/events.ts · banner |
| `EVENTO-MOBILE` | Assunto centralizado à direita. Preserve contraste sob título e descrição. | Assunto na faixa de 18% a 85% da largura e 20% a 80% da altura. O texto do site fica sobreposto. | Sim, cover. Altura pode crescer com títulos e descrições maiores. | src/data/events.ts · mobileBanner |
| `EVENTO-OG` | Logotipo, assunto e texto essencial centralizados. | Use 10% de margem. Evite texto pequeno nas bordas e verifique recorte central quadrado. | Possível em miniaturas de alguns aplicativos. | src/data/events.ts · sharing.image |
| `PROCESSO-SELETIVO-DESKTOP` | Deixe o assunto à direita dentro da arte. O texto do site fica à esquerda. | Assunto entre 42% e 88% da arte e 15% a 85% da altura. Dados essenciais ficam no HTML. | Sim, cover, sobretudo em tablets e com títulos longos. | src/data/recruitment.ts · banner |
| `PROCESSO-SELETIVO-MOBILE` | Assunto centralizado à direita. Preserve contraste sob título e descrição. | Assunto na faixa de 18% a 85% da largura e 20% a 80% da altura. O texto do site fica sobreposto. | Sim, cover. Altura pode crescer com títulos e descrições maiores. | src/data/recruitment.ts · mobileBanner |
| `PROCESSO-SELETIVO-OG` | Logotipo, assunto e texto essencial centralizados. | Use 10% de margem. Evite texto pequeno nas bordas e verifique recorte central quadrado. | Possível em miniaturas de alguns aplicativos. | src/data/recruitment.ts · sharing.image |

## Como aplicar as imagens

1. Identifique o espaço pelo código no ZIP de prévia ou nas capturas do GitHub Actions. `PUBLIC_IMAGE_MAP=1` ativa os códigos durante o build de revisão. A publicação normal do GitHub Pages omite os códigos.
2. Exporte uma cópia otimizada e preserve o original. Para acrescentar uma fotografia em `src/data/imageSlots.ts`, use `photo: { file: 'historia-2019.webp', alt: 'Descrição do registro', position: 'center' }`. Quando necessário, use `mobile` com arquivo próprio e posição específica. Use `fit: 'contain'` em arquivos que não admitem cortes.
3. Para logotipos, adicione a marca confirmada em `partners`, com `category`, `logo` e `logoSlot`. Use um SVG limpo e sem recursos externos. Para PNG, confira a transparência no fundo claro.
4. Para capas e imagens de compartilhamento, edite o registro do evento ou da seleção. Confira a leitura da capa em celular e desktop e o recorte da miniatura.
5. Execute `npm run check` e `npm run build`. Verifique o resultado nos pontos de quebra e mantenha o catálogo atualizado se a caixa CSS ou a proporção mudar.

A capa da moto e as fotos das páginas internas foram mantidas. A MotoStudent usa uma superfície neutra até a aprovação do registro da Espanha. Nas outras seções, os espaços sem arquivo ficam ocultos no site. As parcerias confirmadas podem ser apresentadas pelo nome. A chamada de parcerias funciona como bloco de texto e dispensa uma fotografia adicional nesta composição.

## Exemplos de pedidos ao Codex

- “Substitua o HERO-MOBILE-02 pela imagem anexada e mantenha a outra capa.”
- “Adicione a foto aprovada ao MOTOSTUDENT-HOME sem cortar a bandeira.”
- “Cadastre o logotipo autorizado em PARTNER-LOGO-01 como parceria tecnológica.”
- “Inclua a imagem de 2019 no espaço HISTORIA-2019 e escreva uma legenda.”
- “Atualize INSTAGRAM-02 e mantenha a primeira fotografia.”
- “Use as novas artes em EVENTO-DESKTOP, EVENTO-MOBILE e EVENTO-OG.”
