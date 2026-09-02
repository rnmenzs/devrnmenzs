import Section from "@/components/Section";
import { Arg, Cmd } from "@/components/prompt";
import type { Dictionary } from "@/lib/i18n/types";

/** Seção sobre — saída de um simples `cat`. */
export default function About({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="sobre"
      command={
        <>
          <Cmd>cat</Cmd> <Arg>sobre.md</Arg>
        </>
      }
      title={dict.titles.about}
    >
      <div className="max-w-2xl space-y-5 text-muted">
        {dict.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
