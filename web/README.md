# ivanpsg.dev — Frontend

Portfólio minimalista e eficiente desenvolvido com Astro + Tailwind CSS, seguindo a paleta **Modern Coder**.
Este diretório (`web/`) contém o frontend do projeto. O repositório raiz (`ivanpsg.dev`) é um monorepo que futuramente abrigará também o backend (`api/`).

## 🚀 Stack Tecnológica

- **Framework**: [Astro](https://astro.build) v5.18+
- **CSS**: [Tailwind CSS](https://tailwindcss.com) v4.1+
- **Fonts**: Inter (UI) + JetBrains Mono (mono) via Google Fonts
- **Gerenciador**: pnpm v10.28+
- **SEO**: `@astrojs/sitemap` v3.7+ — sitemap automático com localização pt-BR

## 🎨 Paleta de Cores - Modern Coder

```css
--color-bg: #0b0f10; /* Fundo escuro frio */
--color-surface: #111417; /* Superfícies */
--color-text: #e6f8ff; /* Texto principal */
--color-accent: #2dd4bf; /* Accent (teal) */
--color-accent2: #ff8a65; /* Accent secundário (coral) */
--color-border: #1e2426; /* Bordas */
--color-muted: #7b8a8e; /* Texto secundário */
```

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou 20+
- pnpm 10+ (recomendado)

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/IvanPSG-BR/ivanpsg.dev.git
   cd ivanpsg.dev/web
   ```

2. **Instale as dependências**:

   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   pnpm dev
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:4321
   ```

## 🛠️ Comandos Disponíveis

| Comando        | Ação                                    |
| -------------- | --------------------------------------- |
| `pnpm install` | Instala as dependências                 |
| `pnpm dev`     | Inicia servidor dev em `localhost:4321` |
| `pnpm build`   | Gera build de produção em `./dist/`     |
| `pnpm preview` | Preview local do build de produção      |

## 📁 Estrutura do Projeto

```
ivanpsg.dev/               # Raiz do monorepo
└── web/                   # Frontend (este diretório)
    ├── src/
    │   ├── components/        # Componentes Astro reutilizáveis
    │   │   ├── Header.astro   # Navegação + theme toggle
    │   │   ├── Hero.astro     # Seção hero com foto e CTAs
    │   │   ├── About.astro    # Sobre mim + skills
    │   │   ├── Projects.astro # Grid de projetos
    │   │   ├── ProjectCard.astro # Card individual de projeto
    │   │   ├── Carousel.astro # Carrossel de certificados
    │   │   ├── Contact.astro  # Formulário de contato
    │   │   └── Footer.astro   # Rodapé com socials
    │   ├── layouts/
    │   │   └── Base.astro     # Layout HTML base (SEO, OG, JSON-LD)
    │   ├── pages/
    │   │   └── index.astro    # Página principal
    │   └── styles/
    │       └── global.css     # Estilos globais + tokens Tailwind v4
    ├── public/                # Assets estáticos
    │   ├── robots.txt         # Permissões para crawlers (incluindo IA)
    │   ├── llms.txt           # Perfil estruturado para citação por LLMs
    │   ├── sitemap-index.xml  # Sitemap gerado em build (via @astrojs/sitemap)
    │   └── favicon.svg        # Favicon
    ├── design/
    │   └── v0/                # Imagens de design v0 (desktop + mobile)
    ├── docs/
    │   └── IDEAS.md           # Backlog de ideias e melhorias futuras
    ├── astro.config.mjs       # Configuração do Astro (site canônico, sitemap)
    └── package.json           # Dependências e scripts
```

## ✨ Features Implementadas

- ✅ **Layout responsivo**: Mobile-first, otimizado para desktop e mobile
- ✅ **Tema claro/escuro**: Toggle acessível com persistência em localStorage
- ✅ **Navegação acessível**: ARIA labels, foco visível, navegação por teclado
- ✅ **Animações leves**: Transições CSS suaves sem frameworks pesados
- ✅ **Fontes otimizadas**: Preconnect para Google Fonts
- ✅ **Carrossel JS puro**: Navegação com setas e indicadores
- ✅ **Formulário validado**: Validação HTML5 + feedback aria-live
- ✅ **SEO completo**: Canonical, Open Graph, Twitter Card, JSON-LD (Person + WebSite), keywords por página, noindex opcional
- ✅ **Long-tail keywords pt-BR**: Termos específicos para ranqueamento em buscas locais (Salvador/Bahia/Brasil/remoto)
- ✅ **Sitemap automático**: Gerado em build via `@astrojs/sitemap` com localização pt-BR
- ✅ **robots.txt**: Permissões amplas para crawlers, incluindo rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot...)
- ✅ **llms.txt**: Perfil estruturado para citação correta por agentes de IA e motores de busca generativos
- ✅ **Performance**: Bundle minificado (terser), inlineStyles auto, CSS minificado

## 🎯 Personalização

### Atualizar Informações Pessoais

1. **Foto de perfil**: Substitua `/public/profile.jpg` com sua foto
2. **Currículo**: Adicione `/public/curriculo.pdf`
3. **Dados pessoais**: Edite os componentes em `src/components/`:
   - `Hero.astro`: Nome, título, descrição
   - `About.astro`: Bio, skills, valores
   - `Projects.astro`: Projetos (array `projects`)
   - `Carousel.astro`: Certificados (array `certificates`)
   - `Contact.astro` e `Footer.astro`: Email, links sociais

### Trocar Cores do Tema

Com Tailwind v4, as cores são definidas diretamente em `src/styles/global.css` via CSS variables — não há `tailwind.config.mjs`:

```css
/* src/styles/global.css */
:root {
  --color-bg: #suacor;
  --color-accent: #suacor;
  /* ... */
}
```

## ♿ Acessibilidade

Este portfólio foi desenvolvido com foco em acessibilidade:

- **HTML semântico**: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- **ARIA labels**: Todos elementos interativos rotulados
- **Navegação por teclado**: Tab, Enter, setas (carrossel)
- **Contraste**: WCAG AA+ (mínimo 4.5:1 para texto)
- **Focus visible**: Outline em `:focus-visible`
- **Skip link**: Link "Pular para conteúdo" para screen readers
- **Alt text**: Todas imagens com descrições
- **Reduced motion**: Respeita `prefers-reduced-motion`

## 📋 Checklist de Revisão

Antes de fazer deploy, verifique:

- [ ] Foto de perfil (`public/ivan_profissional.png`) atualizada
- [ ] Currículo (`public/CURRICULO_DEV_IVAN_PEDRO.pdf`) atualizado
- [ ] Dados pessoais (nome, email, socials) atualizados nos componentes
- [ ] Projetos reais adicionados em `Projects.astro`
- [ ] Certificados reais em `Carousel.astro`
- [ ] Contraste de cores testado ([WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- [ ] Testado em mobile (responsive design)
- [ ] Favicon personalizado em `public/favicon.svg`
- [ ] `public/llms.txt` atualizado com informações corretas
- [ ] `public/robots.txt` revisado (crawlers permitidos/bloqueados)
- [ ] Sitemap gerado corretamente (`pnpm build` → verificar `dist/sitemap-index.xml`)
- [ ] JSON-LD validado ([schema.org validator](https://validator.schema.org/))
- [ ] Lighthouse score verificado (Performance, Accessibility, SEO)

## 🚀 Deploy

> **Importante:** Como o projeto agora vive em `web/` dentro de um monorepo, configure a raiz do build para `web/` na sua plataforma, ou rode os comandos a partir desse diretório.

### Vercel (Recomendado)

1. Faça push para GitHub
2. Importe o repositório `ivanpsg.dev` no [Vercel](https://vercel.com)
3. Configure:
   - **Root Directory**: `web`
   - **Framework Preset**: Astro
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`

### Netlify

1. Faça push para GitHub
2. Conecte o repositório `ivanpsg.dev` no [Netlify](https://netlify.com)
3. Configure:
   - **Base directory**: `web`
   - **Build command**: `pnpm build`
   - **Publish directory**: `web/dist`

### GitHub Pages

```bash
cd web
pnpm build
# Suba a pasta web/dist/ para o branch gh-pages
```

## 📄 Licença

Este projeto está sob a licença [GPL-3.0](LICENSE).

## 👤 Autor

**Ivan Pedro Sampaio Gonçalves**

- GitHub: [@IvanPSG-BR](https://github.com/IvanPSG-BR)
- Portfolio: [ivanpsg.dev](https://ivanpsg.dev)

---

Desenvolvido com ♥ usando Astro + Tailwind CSS
