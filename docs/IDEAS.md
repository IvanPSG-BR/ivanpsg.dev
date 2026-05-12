## 1. Transformar o site em um “produto backend”

### 1.1. API pública do portfólio

Expor portfólio como um pequeno produto de backend:

- Endpoints tipo:
  - `GET /api/projects`  
  - `GET /api/elog` 
  - `GET /api/profile`  
- Documentação em OpenAPI/Swagger ou ReDoc
- Rate limit simples (mesmo que só simulado)
- Versionamento: `v1`, `v2` para mostrar maturidade

Na página do site, seção tipo **“API do Portfólio”** com:

- link para a doc da API
- exemplos de requisição/resposta
- explicação rápida de stack (ex.: Fastify + PostgreSQL, testes com Vitest/Jest, CI no GitHub Actions)

Exemplo de resposta de um endpoint `GET /api/elog`:

```json mode=EXCERPT
[
  {
    "id": 42,
    "type": "study",
    "title": "NestJS - Autenticação JWT",
    "summary": "Implementei fluxo completo de login/refresh.",
    "date": "2026-05-12"
  }
]
```

---

## 2. “Elog”

### 2.1. Ideia de arquitetura mínima

- **Backend**:
  - API REST simples: `/api/elog-events`
  - Modelo `Event` com campos tipo: `type`, `title`, `summary`, `tags`, `created_at`
  - Autenticação mínima para criar/editar (pode ser:
    - token de API guardado no `.env`,  
    - ou um mini painel admin com login)
  - Persistência:
    - Pode começar com SQLite ou PostgreSQL (ou até um KV/planilha se quiser ser pragmático, mas explique isso)

- **Frontend**:
  - Página “Elog” consumindo a API
  - Filtros por tag: `#study`, `#project`, `#infra`, etc.
  - Timeline ordenada por data

### 2.2. Como destacar skills de backend no Elog

Incluir um bloco “Como isso funciona por baixo dos panos”:

- diagrama simples da arquitetura
- pontos a vender:
  - “Validação de payload com Zod”
  - “Camadas separadas”
  - “Testes de integração da API”
  - “Scripts de migração de banco”
  - “Monitoramento básico (logs estruturados)”

Isso mostra **processo**, não só UI.

---

## 3. Blog técnico (mas com foco bem recortado e texto bem estruturado)

Algumas ideias de posts que mostram backend de verdade:

- “Como projetei o Elog: trade-offs entre simplicidade e extensibilidade”
- “Por que escolhi X stack (ex.: Fastify + PostgreSQL) para meu portfólio”
- “Como escrevo testes de integração para APIs HTTP”
- “Erros que cometi ao tentar fazer autenticação JWT pela primeira vez”

Dica, sempre inclua:

- seções “Decisões de arquitetura”
- o que você **rejeitou** e por quê (ex.: “Considerei microserviços, mas mantive monólito por X e Y”)

---

## 4. Mostrar código e práticas profissionais sem ser chato

Algumas micro-features que transmitem muito:

1. **Badges dinâmicos**:
   - Construir um endpoint que gera um JSON/PNG com algo tipo “Último commit público: …”
   - Ou “Horas de estudo registradas este mês”

2. **Observabilidade**:
   - Página “/status” que consome um endpoint `/api/health` mostrando:
     - `db: up/down`
     - `uptime`
     - `version`
   - Explicar como você faria isso em produção (logs, métricas, tracing)

---

## 5. Próximos passos

Indo por etapas:

1. **Definir stack backend** (ex.: “vou usar Node + Fastify + PostgreSQL/SQLite”).
2. **Implementar o Elog como API real**:
   - CRUD básico de eventos
   - página do Elog consumindo essa API
3. **Adicionar uma seção “Como isso funciona por trás”** no Elog.
4. Depois, **API pública do portfólio** (`/api/projects`, `/api/elog`) com doc simples.
5. Em seguida, um ou dois **posts de blog** contando decisões de arquitetura do Elog.
