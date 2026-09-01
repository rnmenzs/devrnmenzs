# Design system — portfólio Renan Leme Menezes

Tema escuro único e deliberado. Tom: técnico, limpo, sem firula — dev sério com
pegada de segurança. Nada de gradientes berrantes, emojis como ícones, ou
estética de template.

## Tokens (definidos em `app/globals.css`, use SEMPRE via classes Tailwind)

| Classe Tailwind            | Valor      | Uso |
|----------------------------|------------|-----|
| `bg-bg`                    | `#0a0f14`  | fundo da página |
| `bg-surface`               | `#0f1721`  | cards, nav |
| `bg-surface-2`             | `#141e2a`  | chips, hover de card |
| `border-edge`              | `#1e2a38`  | todas as bordas |
| `text-fg`                  | `#e6edf3`  | texto principal |
| `text-muted`               | `#8fa1b3`  | texto secundário (AA sobre bg) |
| `text-accent`              | `#2cc9de`  | teal — links, rótulos, destaques |
| `text-accent-strong`       | `#6ee2f0`  | hover de links |
| `border-accent-dim` etc.   | `#155e6b`  | teal profundo — bordas/glow sutil |
| `text-violet` / `bg-violet`| `#a78bfa`  | violeta — USO PONTUAL (tags, um detalhe por seção no máximo) |

Fontes: `font-sans` (Inter) para tudo; `font-mono` (JetBrains Mono) para
rótulos de seção, períodos, chips de stack e detalhes técnicos.

## Convenções obrigatórias

- **Conteúdo**: importar de `@/lib/content` — NUNCA hardcodar texto que exista lá.
- **Seções**: envolver com o componente `Section` de `@/components/Section`
  (props: `id`, `index` tipo "01", `title`). Âncoras/ids: `sobre`, `projetos`,
  `experiencia`, `skills`, `formacao`, `contato`.
- **Server components por padrão**; `"use client"` só onde há interatividade
  real (ex.: menu mobile do Nav).
- **Container**: `max-w-5xl mx-auto px-6` (o `Section` já faz isso).
- **Links externos**: `rel="noopener noreferrer"` + `target="_blank"`;
  underline no hover; cor `text-accent hover:text-accent-strong`.
- **Acessibilidade**: contraste AA, foco visível (o global já estiliza
  `:focus-visible`), navegável por teclado, `aria-label` em ícone sem texto,
  HTML semântico (`nav`, `section`, `article`, `ol`/`ul`, headings em ordem).
  Alvos de toque ≥ 44×44px no mobile.
- **Ícones**: SVG inline (GitHub, LinkedIn, email, seta). Sem emoji, sem lib
  de ícones.
- **Motion**: transições discretas (`transition-colors duration-200`);
  `prefers-reduced-motion` já é respeitado globalmente.
- **Responsivo**: mobile-first; sem scroll horizontal em nenhuma largura.

## Vocabulário visual (a identidade do site)

- Rótulos mono teal numerados: `01 // sobre` (o `Section` já renderiza).
- Detalhe terminal discreto no Hero (ex.: prompt `~$` na linha mono) — sutil,
  não "site hacker".
- Cards: `bg-surface border border-edge rounded-lg`, hover com
  `border-accent-dim` e leve elevação de cor; sem sombras pesadas.
- Chips de stack/skill: mono, pequenos, `bg-surface-2 border border-edge
  rounded-full px-3 py-1 text-xs`.
- Timeline da experiência: linha vertical `border-edge` com marcador teal.
