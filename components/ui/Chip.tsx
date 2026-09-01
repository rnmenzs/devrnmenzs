import type { ReactNode } from "react";

/** Chip padrão do site (stack de projeto, módulos, skills) — sempre item de lista. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-sm border border-edge bg-surface-2 px-2.5 py-1 text-xs text-fg">
      {children}
    </li>
  );
}
