import Section from "@/components/Section";
import { about } from "@/lib/content";

/** Seção "Sobre": parágrafos de apresentação em prosa confortável. */
export default function About() {
  return (
    <Section id="sobre" index="01" title="Sobre">
      <div className="max-w-2xl space-y-5">
        {about.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
