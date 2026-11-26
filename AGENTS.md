# Manutenção do portal LABEM UFCG

- Preserve a direção visual do LABEM e consulte `DESIGN_SYSTEM.md` antes de mudar estilos. Limite cada mudança ao pedido e preserve conteúdo institucional e alterações de outros colaboradores.
- Use Astro estático, TypeScript e CSS. Registre dados e links em `src/data/site.ts`, reutilize `src/components/` e os layouts de `src/layouts/`. Novas páginas ficam em `src/pages/`. Use `url()` para caminhos internos.
- Adicione imagens autorizadas a `public/images/` em WebP quando adequado. Preserve proporção, forneça texto alternativo e verifique o enquadramento em telas pequenas.
- Confirme datas, cargos, resultados, vínculos e referências. Campos pendentes ficam sem exibição até a confirmação. Mantenha as fontes públicas junto dos registros. Preserve documentos internos, dados pessoais e credenciais fora do repositório.
- Use `npm ci`, `npm run dev`, `npm run check` e `npm run build`. Verifique navegação e mídia em subdiretórios do GitHub Pages. Atualize os manuais quando o procedimento de manutenção mudar.
- Preserve a hospedagem estática gratuita. Evite dependências desnecessárias e adicione backend, autenticação ou instrumentos pagos somente com solicitação expressa.
- Publique alterações no site oficial apenas com autorização. O workflow de publicação está documentado em `MANUAL_DE_PUBLICACAO.md`.
