import type { ReactNode } from "react";
import { Prompt } from "@/components/prompt";

/** Ids de âncora — invariantes entre idiomas (usados pelo nav e pelo scroll). */
export type SectionId =
  | "sobre"
  | "projetos"
  | "experiencia"
  | "skills"
  | "formacao"
  | "contato";

interface SectionProps {
  id: SectionId;
  /** Linha de comando decorativa que "gera" a seção (compor com Cmd/Flag/Arg). */
  command: ReactNode;
  title: string;
  children: ReactNode;
}

/** Casca das seções: prompt + comando decorativos, título estilo heading markdown. */
export default function Section({ id, command, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-20">
      <p aria-hidden="true" className="text-sm">
        <Prompt />
        {command}
      </p>
      <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-violet sm:text-3xl">
        <span aria-hidden="true" className="g-dim">
          {"# "}
        </span>
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
