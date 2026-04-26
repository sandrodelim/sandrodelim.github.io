# Blog profissional estático para GitHub Pages

Este projeto é um site estático profissional para GitHub Pages, criado com HTML, CSS e JavaScript leve. O objetivo é construir autoridade em TI e Análise de Negócios com:

- Landing page impactante em `/`
- Blog em `/blog`
- Posts individuais em `/blog/[slug].html`
- Currículo online em `/cv`
- Página sobre em `/about`
- SEO básico, `robots.txt` e `sitemap.xml`

## Estrutura de pastas

- `index.html`
- `blog/index.html`
- `blog/fundamentos-da-analise-de-negocios.html`
- `blog/ferramentas-essenciais-analise-de-negocios.html`
- `about/index.html`
- `cv/index.html`
- `assets/css/styles.css`
- `assets/js/script.js`
- `assets/data/posts.js`
- `robots.txt`
- `sitemap.xml`

## Como funciona

- A homepage exibe hero, habilidades, certificações e posts recentes.
- A página de blog lista artigos por categoria e oferece busca em JavaScript.
- Os posts são páginas HTML individuais que podem ser expandidas com novos `blog/[slug].html`.
- A página de currículo `/cv/` apresenta resumo, experiência, formação, habilidades e certificações.

## Deploy no GitHub Pages

1. Crie um repositório no GitHub.
2. Faça `git add .` e `git commit -m "Implementa site estático GitHub Pages"`.
3. Envie para o GitHub com `git push origin main`.
4. No GitHub, acesse `Settings > Pages` e selecione a branch `main` e a pasta `/ (root)`.
5. Aguarde a publicação. O site ficará disponível em `https://<seu-usuario>.github.io/<nome-do-repositorio>/` ou `https://<seu-usuario>.github.io/` se for user page.

## Atualizando o blog

Para adicionar novos artigos:

1. Crie uma nova página em `blog/[slug].html`.
2. Inclua o artigo com `meta` e conteúdo seguindo o padrão dos posts existentes.
3. Adicione o post em `assets/data/posts.js` para que ele apareça na listagem do blog e nos posts recentes.

## Observações

- Nenhuma ferramenta de build é necessária.
- O site funciona com HTML, CSS e JS puro.
- Se for usar GitHub Pages em repositório de projeto, mantenha links relativos como `./blog/`, `./about/`, `./cv/`.
