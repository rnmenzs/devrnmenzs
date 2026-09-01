# Design system — portfólio Renan Leme Menezes

O site inteiro é uma **sessão de terminal** (decisão do usuário em 2026-09-01:
o "modo geek" virou a versão principal e única; a versão clean foi removida,
assim como o seletor de temas — paleta fixa **Red Team Ops**). Tom: técnico e
verossímil — cada metáfora de comando informa, não decora; um usuário real de
terminal não pode achar nada "de filme".

## Tokens (definidos em `app/geek.css` sob `.geek`, via classes Tailwind)

| Classe                  | Valor      | Uso |
|-------------------------|------------|-----|
| `bg-bg`                 | `#141414`  | fundo da página |
| `bg-surface`            | `#0d0d0d`  | chrome do terminal, cards, nav |
| `bg-surface-2`          | `#1f1f1f`  | chips, barra tmux |
| `border-edge`           | `#2e2e2e`  | bordas |
| `text-fg`               | `#e8e8e8`  | texto principal |
| `text-muted`            | `#a8a8a8`  | secundário |
| `text-accent`           | `#7ce38b`  | verde — prompt, links, foco |
| `text-violet`           | `#ff5252`  | vermelho red team — headings, host, empresa |
| `.g-cyan`               | `#79c0ff`  | paths, dirs, flags, portas |
| `.g-pink`               | `#ff8a80`  | headline, rótulos de campo |
| `.g-yellow` / `.g-orange` | `#ffcb6b` / `#ffb454` | avisos / hashes |
| `.g-red`                | `#ff5252`  | segurança |
| `.g-dim`                | `#6e6e6e`  | SÓ decoração `aria-hidden` (não passa AA) |

Fonte: tudo em `font-mono` (JetBrains Mono). `globals.css` mantém os tokens
base herdados (usados por `_not-found`); `.geek` os remapeia.

## Convenções obrigatórias

- **Conteúdo**: importar de `@/lib/content` — NUNCA hardcodar texto que exista lá.
  Guardrails do handoff valem sempre (sem telefone; FIAP "em andamento";
  "integração com LLM"; nada inventado que leia como fato).
- **Identidade da sessão**: prompt `visitor@rnmenzs:~$` (host = `GEEK_HOST` em
  `components/geek/prompt.tsx`); cwd `~` consistente em todas as seções — um
  comando decorativo nunca pode mudar o cwd (use `git -C`, caminhos absolutos).
- **Metáforas por seção** (estrutura que informa): hero = boot `ssh` +
  `whoami` + `finger renan` (formato real do finger: Login/Name/Directory/
  Shell/Plan) · sobre = `cat` · projetos = `bat` · experiência =
  `git -C ~/carreira log` · skills = `nmap -sV` (colunas PORT/STATE/SERVICE/
  VERSION, serviços com nomes reais de nmap-services, portas honestas) ·
  formação = `apt` (barra nunca fecha 100% — pós em andamento) · contato =
  `./contato.sh`. Rodapé = barra do tmux, sessão `[rnmenzs]`.
- **A11y**: linhas de comando/saídas fake são `aria-hidden`; conteúdo real
  fica exposto com headings semânticos em ordem e landmarks; animações só em
  `prefers-reduced-motion: no-preference`; alvos ≥ 44px; foco visível;
  `.g-dim` jamais em texto informativo.
- **Responsivo**: mobile-first, sem scroll horizontal; saídas largas (nmap,
  git log) quebram ou rolam no próprio bloco.
