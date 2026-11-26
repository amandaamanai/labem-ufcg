# Relatório de testes

| Verificação | Resultado |
| --- | --- |
| `npm ci` | Dependências fixadas no lockfile. |
| `npm run check` | 34 arquivos verificados. Zero erros, avisos ou sugestões. |
| Build estático com prefixo `/labem-site` | 28 páginas geradas, com página 404 e sitemap. |
| Arquivos gerados com prefixo | Links internos, âncoras, imagens, fontes, títulos e sitemap resolvidos. O `robots.txt` aponta para o sitemap correto. |
| Chromium automatizado | Página inicial verificada em 360, 390, 768, 1024, 1440 e 1920 px, sem rolagem horizontal. |
| Navegação | Menu móvel, submenu e fechamento com Escape. Acesso à navegação e notícias com JavaScript desativado. |
| Conteúdo interativo | Busca com e sem resultados, filtros de notícias, projetos e equipe, abas MotoStudent por teclado, FAQ e cópia de link. |
| Galeria | Filtro de álbum, ampliação, próxima imagem com teclado, fechamento com Escape e retorno do foco. |
| 404 | Resposta 404 simulada a partir do HTML gerado e conferida no Chromium. |

O Chromium carregou os artefatos estáticos com requisições interceptadas no domínio de teste. A conexão de prévia do ambiente não ficou disponível e o navegador compartilhado bloqueou o protocolo de arquivo local. O GitHub Actions fica preparado para rodar com a origem real após autorização de publicação. O banner único e a agenda sem datas confirmadas mantêm carrossel automático e contagem regressiva desativados na versão editorial.
