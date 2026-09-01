import Section from "@/components/Section";
import { experience } from "@/lib/content";

/** Timeline vertical da experiência profissional. */
export default function Experience() {
  return (
    <Section id="experiencia" index="03" title="Experiência">
      <ol className="border-l border-edge">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <article>
              <h3 className="font-semibold text-fg">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">
                {job.period}
                {job.mode ? ` · ${job.mode}` : null}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-sm leading-relaxed text-muted"
                  >
                    <span aria-hidden="true" className="absolute left-0">
                      –
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
