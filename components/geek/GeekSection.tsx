import type { ReactNode } from "react";
import { nav } from "@/lib/content";
import { Prompt } from "@/components/geek/prompt";

/** Deriva os ids válidos dos hrefs do nav (mesma técnica do Section original). */
type AnchorId<H> = H extends `#${infer Id}` ? Id : never;
type SectionId = AnchorId<(typeof nav)[number]["href"]>;

interface GeekSectionProps {
  id: SectionId;
  /** Linha de comando decorativa que "gera" a seção (compor com Cmd/Flag/Arg). */
  command: ReactNode;
  title: string;
  children: ReactNode;
}

/** Casca das seções geek: prompt + comando decorativos, título estilo heading markdown. */
export default function GeekSection({
  id,
  command,
  title,
  children,
}: GeekSectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl px-6 py-14 sm:py-20">
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
