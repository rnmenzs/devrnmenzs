import type { ReactNode } from "react";
import { nav } from "@/lib/content";

/** Deriva os ids válidos dos hrefs do nav (fonte única) — evita drift de âncora. */
type AnchorId<H> = H extends `#${infer Id}` ? Id : never;
type SectionId = AnchorId<(typeof nav)[number]["href"]>;

interface SectionProps {
  id: SectionId;
  index: string;
  title: string;
  children: ReactNode;
}

/** Casca padrão de toda seção: âncora, rótulo mono numerado e título. */
export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
      <p className="font-mono text-sm text-accent" aria-hidden="true">
        {index} <span className="text-accent-dim">{"//"}</span> {id}
      </p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
