# LABEM UFCG

Portal do Laboratório de Engenharia da Motocicleta da Universidade Federal de Campina Grande. O projeto usa Astro 5, TypeScript e CSS, com páginas geradas no build e interações executadas no navegador.

## Rodar localmente

Requer Node.js 22.12 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Astro. Em um ambiente sem permissão para gravar nas configurações do usuário, defina `ASTRO_TELEMETRY_DISABLED=1` antes do comando.

```sh
npm run check
npm run build
npm run preview
```

O resultado está em `dist/`. Use um servidor HTTP para visualizá-lo. Em pull requests para a `main`, o workflow **Prévia de revisão** gera o ZIP `previa-offline` e capturas de desktop e celular com o mapa de imagens. Baixe o ZIP nos artefatos da execução, extraia todos os arquivos e abra `index.html` no navegador. A prévia não publica no GitHub Pages.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/data/site.ts` | Navegação, banners, dados institucionais, arquivo histórico, projetos, subsistemas e galeria |
| `src/data/events.ts`, `recruitment.ts` e `notices.ts` | Eventos, processos seletivos e avisos temporários |
| `src/data/imageSlots.ts` | Reservas de fotografia e enquadramento |
| `src/pages/` | Páginas e rotas dinâmicas geradas estaticamente a partir das coleções |
| `src/components/` e `src/layouts/` | Componentes e layouts compartilhados |
| `src/styles/site.css` | Identidade, tipografia, layouts e regras responsivas |
| `src/ui.ts` | Menu móvel, filtros, galeria, carrossel, compartilhamento e contagem regressiva |
| `public/images/` | Fotografias WebP e marca do LABEM |
| `.github/workflows/deploy.yml` | Verificação, build e publicação no GitHub Pages |

Leia [Manual de edição](MANUAL_DE_EDICAO.md), [Manual de publicação](MANUAL_DE_PUBLICACAO.md) [Sistema de design](DESIGN_SYSTEM.md) e [Guia de imagens](GUIA_DE_IMAGENS.md).

## Conteúdo para revisar

O site usa imagens extraídas das apresentações do LABEM e informações do CCT/UFCG, dos anais do CONEMI e do MotorLand Aragón. Revise a autorização das imagens antes de abrir o repositório ao público. O dossiê registra dois trabalhos no CONEMI 2025. A ficha bibliográfica disponível nesta versão corresponde ao artigo identificado nos anais. Confirme a segunda referência, a gestão atual, os vínculos de patrocínio, as cotas, o material comercial público, as datas de eventos e o edital ativo antes de incluí-los. O Instagram é o canal de atualizações. O arquivo de notícias do site preserva os links já divulgados.

A navegação institucional se inspira na Baja UFSC e na UFV Baja Pererecas. A apresentação dos protótipos e os caminhos de recrutamento e apoio usam como referências a Fórmula Tesla UFMG e a Ampera Racing.
