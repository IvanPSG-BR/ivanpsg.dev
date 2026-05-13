# ivanpsg.dev — Portfólio Profissional

Este repositório contém o ecossistema completo do meu portfólio profissional: um frontend minimalista (Astro), uma API modular e a documentação da minha infraestrutura self-hosted.

O projeto é guiado por uma filosofia minimalista: código limpo na sua forma mais pura (legível e organizado) e eficiência técnica, priorizando a experiência do desenvolvedor e a clareza para recrutadores de backend.

> [!NOTE]
> Este é um projeto em evolução constante e está ainda no início. O foco principal é demonstrar maturidade técnica em arquitetura de sistemas, design de APIs e administração de servidores Linux.

## Estrutura do Monorepo

O projeto utiliza uma estrutura de monorepo para manter a consistência da marca e facilitar o compartilhamento de tipos e lógica entre serviços.

- **[`web/`](./web)**: Frontend estático desenvolvido com **Astro 5** e **Tailwind CSS v4**. Focado em Core Web Vitals, acessibilidade e SEO.
- **[`api/`](./api)**: Backend robusto utilizando **Express.js**, **TypeScript** e **Drizzle ORM** com **SQLite 3**. Centraliza os dados do portfólio e o serviço **Elog**.

## Stack Tecnológica

### Backend & Infra

- **Runtime**: Node.js (TypeScript)
- **Framework**: Express.js (v5)
- **Database**: SQLite
- **ORM**: Drizzle ORM
- **Validação**: Zod
- **Infra**: VPS Linux, Docker, Reverse Proxy (Caddy/Nginx), TLS (Let's Encrypt)

### Frontend

- **Framework**: Astro 5
- **Styling**: Tailwind CSS v4 (Modern Coder Palette)
- **SEO**: Sitemap automático, JSON-LD, Open Graph e Twitter Cards

## Diferenciais Técnicos

### Elog (Event Logger)

Mais que um blog, o Elog é um mini-produto de backend integrado ao portfólio. Ele é um serviço que apresenta avanços de estudo, deploys e conquistas técnicas, registrados de forma concisa. Demonstra habilidades em:

- Modelagem de dados e persistência.
- Design de API RESTful.
- Validação e tratamento de erros centralizado.

### Self-Hosted Lab

A infraestrutura é comprovada através de subdomínios ativos que rodam serviços reais meus em uma VPS própria:

- `api.ivanpsg.dev`: Endpoint oficial da API do portfólio.
- `lab.ivanpsg.dev`: Dashboard de monitoramento dos serviços expostos.
- `rcode.ivanpsg.dev`: Code-Server (de apelido rcode, ou Remote Code) para acessar e implementar meus projetos direto da web.
- `owebui.ivanpsg.dev`: Open WebUI para organização com IA através de um chat e diversos outros recursos.
- `opencode.ivanpsg.dev`: OpenCode (web) para desenvolvimento com IA.

Dentre outros possíveis serviços.

### AI-Ready

O projeto está preparado para a nova era de busca e agentes:

- `robots.txt` otimizado para crawlers de IA (GPTBot, ClaudeBot, etc.).
- `llms.txt` seguindo o padrão para citação precisa por modelos de linguagem.

## Começando

### Pré-requisitos

- [pnpm](https://pnpm.io/) v10+
- Node.js v20+

### Instalação e Desenvolvimento

1. Instale as dependências na raiz (pnpm workspaces):

   ```bash
   pnpm install
   ```

2. Execute o frontend em modo de desenvolvimento:

   ```bash
   cd web && pnpm dev
   ```

3. Execute a API em modo de desenvolvimento:

   ```bash
   cd api && pnpm dev
   ```

## Design System

O projeto utiliza a paleta **Modern Coder**, focada em legibilidade e conforto visual para desenvolvedores:

- **Background**: `#0b0f10` (Dark Cold)
- **Accent**: `#2dd4bf` (Teal)
- **Accent 2**: `#ff8a65` (Coral)
- **Text**: `#e6f8ff`

---

Desenvolvido por **Ivan Pedro Sampaio Gonçalves** — [ivanpsg.dev](https://ivanpsg.dev)
