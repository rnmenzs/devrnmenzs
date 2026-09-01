import GeekSection from "@/components/geek/GeekSection";
import { Arg, Cmd } from "@/components/geek/prompt";
import { about } from "@/lib/content";

/** Seção sobre — saída de um simples `cat`. */
export default function GeekAbout() {
  return (
    <GeekSection
      id="sobre"
      command={
        <>
          <Cmd>cat</Cmd> <Arg>sobre.md</Arg>
        </>
      }
      title="Sobre"
    >
      <div className="max-w-2xl space-y-5 text-muted">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </GeekSection>
  );
}
