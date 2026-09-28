# Fixnova Parafusos – Site institucional

Site institucional da **Fixnova Parafusos** (Nova Serrana – MG), feito em React + TypeScript + Vite.

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # checagem de tipos + build de produção em /dist
npm run preview   # serve o build de produção
```

Requer Node.js 18 ou superior.

## Onde editar o conteúdo

| O que | Arquivo |
| --- | --- |
| Telefone, WhatsApp, endereço, horário, Instagram, links do mapa | `src/config/site.ts` |
| Itens do menu | `src/config/site.ts` (`nav`) |
| Categorias de produtos (nome, texto, foto) | `src/data/products.ts` |
| Diferenciais e mosaico do Instagram | `src/data/content.ts` |
| Cores, fontes e espaçamentos | `src/styles/global.css` (variáveis em `:root`) |
| Título, descrição, Open Graph e dados estruturados (SEO) | `index.html` |

Cada seção é um componente em `src/components/` com o CSS ao lado (`Hero.tsx` + `Hero.css` etc.).

### Categorias de produtos

Adicione, remova ou edite itens em `src/data/products.ts`. A grade se ajusta sozinha a qualquer quantidade de categorias.
As fotos ficam em `public/images/` e são referenciadas como `/images/nome.webp`. Se a foto ficar mal enquadrada,
use `imagePosition` (ex.: `'center 30%'`). O botão "Consultar" abre o WhatsApp com uma mensagem pronta citando a categoria.

### Fotos do Instagram

Salve as fotos em `public/images/instagram/` e edite `instagramPosts` em `src/data/content.ts`,
informando `image` e `url` (link do post). Itens vazios (`{}`) aparecem com o ícone da Fixnova.

### Imagens

As fotos atuais são do Unsplash (uso livre, inclusive comercial) e estão otimizadas em WebP.
Para trocar pelas fotos reais da loja, substitua os arquivos em `public/images/` mantendo os nomes, ou atualize os caminhos nos arquivos de dados.
Recomendado: WebP, ~800×600 para os cards, 1920px de largura para o banner (`hero-1920.webp`) e 1080px para a versão mobile (`hero-1080.webp`).

## Antes de publicar

1. **WhatsApp:** confirme o número em `src/config/site.ts` (`whatsappNumber`). Hoje está com o telefone fixo `(37) 3225-0177`.
2. **Domínio:** o site usa `https://fixnovaparafusos.com.br` como domínio provisório. Troque pelo domínio definitivo em
   `index.html` (canonical, Open Graph, dados estruturados), `public/robots.txt` e `public/sitemap.xml`.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente (build: `npm run build`, saída: `dist`). É só clicar em **Deploy**.

## Estrutura

```
public/            imagens, favicon, og-image, robots.txt, sitemap.xml
src/
  assets/          logotipos usados nos componentes
  components/      Header, Hero, Products, About, Differentials, CtaBand, Location, Instagram, Footer, WhatsAppButton
    ui/            Icon, Hexagon, SectionHeading
  config/site.ts   dados da empresa
  data/            produtos, diferenciais, Instagram
  hooks/           useReveal (animações ao rolar)
  styles/          estilos globais
```
