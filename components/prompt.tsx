import type { ReactNode } from "react";

/**
 * Peças de "sintaxe shell" do tema geek (server components).
 * Sempre usadas dentro de linhas decorativas (o pai leva aria-hidden).
 */

/** Host da sessão geek = domínio/handle (fonte única p/ prompt, nav e ssh). */
export const HOST = "rnmenzs";

/**
 * Prompt da sessão: visitor@rnmenzs:~$ — vira root@rnmenzs:~# (vermelho)
 * quando o <html> ganha data-root (easter egg do Konami code). Renderiza as
 * duas formas e alterna via CSS (ver app/geek.css), pra funcionar mesmo sendo
 * server component.
 */
export function Prompt({ host = HOST }: { host?: string }) {
  return (
    <span>
      <span className="pmt-visitor text-accent">visitor</span>
      <span className="pmt-root">root</span>
      <span className="text-muted">@</span>
      <span className="text-violet">{host}</span>
      <span className="text-muted">:</span>
      <span className="g-cyan">~</span>
      <span className="text-muted">
        <span className="pmt-dollar">$</span>
        <span className="pmt-hash">#</span>{" "}
      </span>
    </span>
  );
}

/** Nome do comando (verde, como no zsh-syntax-highlighting). */
export function Cmd({ children }: { children: ReactNode }) {
  return <span className="font-medium text-accent">{children}</span>;
}

/** Flags (--assim) em ciano. */
export function Flag({ children }: { children: ReactNode }) {
  return <span className="g-cyan">{children}</span>;
}

/** Argumentos e caminhos em amarelo. */
export function Arg({ children }: { children: ReactNode }) {
  return <span className="g-yellow">{children}</span>;
}
