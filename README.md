# rnmenzs.com — Portfólio

Portfólio pessoal de **Renan Leme Menezes**, renderizado como uma **sessão de
terminal** (tema Red Team Ops). No ar em **[www.rnmenzs.com](https://www.rnmenzs.com)**.

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack) + **React 19**
- **TypeScript** + **Tailwind CSS v4**
- Deploy na **Vercel** · **Vercel Web Analytics**
- Fontes: Inter (texto) + JetBrains Mono (terminal)

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # servir o build
```

> Este é um Next.js com convenções próprias — antes de mexer no roteamento,
> ver `AGENTS.md` e a doc em `node_modules/next/dist/docs/`.

## Estrutura

```
app/
  [lang]/            layout (html lang, metadata, JSON-LD) + page + opengraph
  globals.css        tokens base
  geek.css           tema do terminal (Red Team Ops) sob a classe .geek
  sitemap.ts · robots.ts · favicon.ico
proxy.ts             roteamento de idioma (PT na raiz)
components/          peças reutilizáveis (Nav, Footer, Section, Chip,
                     prompt, icons, LangSwitcher)
sections/            uma seção por arquivo (Hero, About, Projects,
                     Experience, Skills, Education, Contact)
layouts/             TerminalLayout — monta a janela (Nav + main + Footer)
lib/
  content.ts         dados INVARIANTES entre idiomas (links, portas, tokens)
  i18n/              config, tipos e dicionários de conteúdo
```

Hierarquia de componentização (menor → maior): `components/` → `sections/` →
`layouts/`. Convenções visuais e metáforas do terminal em `DESIGN.md`.

## Conteúdo

Todo texto vem de dados, não de JSX:

- **`lib/i18n/dictionaries/{pt,en,es}.ts`** — conteúdo traduzível (bio,
  projetos, experiência, certificações, rótulos). `pt.ts` é a fonte.
- **`lib/content.ts`** — o que não muda por idioma: links, e-mail, portas do
  nmap, tokens de stack.

Guardrails (não quebrar): sem telefone; pós FIAP sempre "em andamento"; o
painel de tickets foi **integração** com LLM (não autoria); nunca inventar
métrica ou tecnologia.

## Idiomas (i18n)

Site trilíngue **PT / EN / ES**:

- **PT-BR** na raiz (`/`, sem prefixo — preserva o canonical indexado)
- **EN** em `/en` · **ES** em `/es`
- `proxy.ts` serve o PT em `/` e redireciona `/pt` → `/`
- `app/[lang]/` define `<html lang>`, `hreflang`, canonical e OG por idioma
- Os **comandos** do terminal são invariantes; só as saídas em prosa traduzem
- Seletor de idioma (`LANG=`) na barra do terminal

## Deploy

Conectado à Vercel. Fluxo de branches:

```
feature-branch (base: dev)  →  dev (preview)  →  main (produção)
```

Push na `main` publica em produção. Cada push na `dev`/feature gera um
preview deploy próprio.

## Segurança

Headers configurados em `next.config.ts`: CSP, HSTS (preload),
`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
`X-Frame-Options`. Há um `public/.well-known/security.txt`.
