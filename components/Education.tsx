import Section from "@/components/Section";
import { education, certifications } from "@/lib/content";

/** Formação acadêmica e certificações. */
export default function Education() {
  return (
    <Section id="formacao" index="05" title="Formação & Certificações">
      <div className="flex flex-col gap-6">
        {education.map((edu) => {
          const highlighted = Boolean(edu.status);
          return (
            <article
              key={edu.degree}
              className={`rounded-lg border bg-surface p-6 ${
                highlighted ? "border-accent-dim" : "border-edge"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-semibold">{edu.degree}</h3>
                {edu.status ? (
                  <span className="rounded-full border border-violet/40 px-2.5 py-0.5 font-mono text-xs text-violet">
                    {edu.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-muted">
                {edu.school} · <span className="font-mono text-sm">{edu.period}</span>
              </p>
              {edu.topics ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {edu.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full border border-edge bg-surface-2 px-3 py-1 font-mono text-xs text-fg"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </div>

      <h3 className="mt-12 text-xl font-semibold">Certificações</h3>
      <ul className="mt-4 list-inside list-disc gap-x-8 text-sm text-muted marker:text-accent sm:columns-2">
        {certifications.map((cert) => (
          <li key={cert} className="break-inside-avoid py-1">
            {cert}
          </li>
        ))}
      </ul>
    </Section>
  );
}
