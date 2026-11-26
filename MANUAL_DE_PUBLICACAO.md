# Publicação no GitHub Pages

## Preparação

1. Crie uma conta no [GitHub](https://github.com/). Se a gestão do projeto for compartilhada, crie uma organização nas configurações da conta e convide responsáveis.
2. Após a revisão institucional, crie um repositório público na conta ou organização escolhida para usar o GitHub Pages gratuito. Confirme que o código e as imagens foram liberados para publicação.
3. Envie o código-fonte para a branch `main`. Com Git, adicione o endereço do repositório como `origin` e execute `git push -u origin main`. Se o remoto já tem arquivos, integre seu histórico primeiro.
4. Em **Settings > Pages**, selecione **GitHub Actions** em **Build and deployment**. Depois de autorizar a estreia, abra **Actions > Publicar no GitHub Pages** e execute **Run workflow** na branch `main`.
5. Aguarde os dois jobs. O endereço aparece no ambiente de deploy e em **Settings > Pages**. O valor depende do nome da organização e do repositório.

O workflow preenche `SITE_URL` e `BASE_PATH` com a origem e o prefixo fornecidos pelo GitHub Pages. Isso mantém links, imagens, fontes, 404, Open Graph e mapa do site nos caminhos certos.

## Atualizações e reversão

Mantenha as alterações em uma branch e revise o diff antes de incorporar à `main`. Após a configuração inicial, cada push na `main` roda a verificação, gera `dist/` e publica. Para reverter uma mudança publicada, use `git revert <commit>` e incorpore o commit resultante à `main`.

## Domínio da instituição

Com a autorização da UFCG, configure o domínio em **Settings > Pages > Custom domain** e solicite os registros DNS à equipe responsável. Depois de validar, habilite HTTPS e rode o workflow novamente. Confira os endereços de `robots.txt`, sitemap, imagens e canonicals com o novo domínio.

[Documentação do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
