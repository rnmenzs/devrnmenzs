import Section from "@/components/Section";
import { skills } from "@/lib/content";

/** Seção 04 — grupos de stack/skills em cards, itens como chips mono. */
export default function Skills() {
  return (
    <Section id="skills" index="04" title="Stack & Skills">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, items, tone }) => (
          <li
            key={group}
            className="rounded-lg border border-edge bg-surface p-5"
          >
            <h3
              className={`font-mono text-sm ${
                tone === "violet" ? "text-violet" : "text-accent"
              }`}
            >
              {group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-edge bg-surface-2 px-3 py-1 font-mono text-xs text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
