# Manutenção do portal LABEM UFCG

- Preserve a direção visual do LABEM e consulte `DESIGN_SYSTEM.md` antes de mudar estilos. Limite cada mudança ao pedido e preserve conteúdo institucional e alterações de outros colaboradores.
- Use Astro estático, TypeScript e CSS. Registre dados e links em `src/data/site.ts`, reutilize `src/components/` e os layouts de `src/layouts/`. Novas páginas ficam em `src/pages/`. Use `url()` para caminhos internos.
- Adicione imagens autorizadas a `public/images/` em WebP quando adequado. Preserve proporção, forneça texto alternativo e verifique o enquadramento em telas pequenas.
- Confirme datas, cargos, resultados, vínculos e referências. Campos pendentes ficam sem exibição até a confirmação. Mantenha as fontes públicas junto dos registros. Preserve documentos internos, dados pessoais e credenciais fora do repositório.
- Use `npm ci`, `npm run dev`, `npm run check` e `npm run build`. Verifique navegação e mídia em subdiretórios do GitHub Pages. Atualize os manuais quando o procedimento de manutenção mudar.
- Preserve a hospedagem estática gratuita. Evite dependências desnecessárias e adicione backend, autenticação ou instrumentos pagos somente com solicitação expressa.
- Publique alterações no site oficial apenas com autorização. O workflow de publicação está documentado em `MANUAL_DE_PUBLICACAO.md`.

## Oportunidades e arquivo

- Configure eventos em `src/data/events.ts`, editais em `src/data/recruitment.ts` e avisos em `src/data/notices.ts`. Use datas com fuso explícito e Google Forms oficiais com links distintos para eventos e recrutamento.
- Preserve as rotas permanentes `/eventos/`, `/faca-parte/` e as notícias arquivadas. Direcione atualizações cotidianas para o Instagram configurado em `src/data/site.ts`.
- Teste os estados ativos e inativos das oportunidades. Trabalhe em uma branch e envie a publicação para aprovação antes de integrar à `main`.

## Composição e imagens

- Preserve a ordem editorial de `homeSections`, a associação de Equipe Galo de Campina à MotoStudent e aos registros históricos e a distinção entre UFCG e patrocínios comerciais.
- Reutilize `ImageSlot`, `SubsystemCards` e os tokens de `DESIGN_SYSTEM.md`. Cadastre fotos confirmadas em `src/data/imageSlots.ts` e mantenha `GUIA_DE_IMAGENS.md` e `CATALOGO_DE_IMAGENS.csv` sincronizados quando mudar o layout.
- Use `PUBLIC_IMAGE_MAP=1` apenas na prévia. Preserve redirecionamentos antigos com o prefixo do GitHub Pages.
