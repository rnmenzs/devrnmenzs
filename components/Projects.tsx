import Section from "@/components/Section";
import { projects } from "@/lib/content";

/** Seção 02 — cards largos empilhados: problema → solução → resultado + stack. */
export default function Projects() {
  return (
    <Section id="projetos" index="02" title="Projetos em destaque">
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-edge bg-surface p-6 transition-colors duration-200 hover:border-accent-dim sm:p-8"
          >
            <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
              {project.title}
            </h3>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-mono text-xs text-accent">problema</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {project.problem}
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs text-accent">solução</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {project.solution}
                </dd>
              </div>

              <div className="rounded-r-md border-l-2 border-accent bg-surface-2 py-3 pl-4 pr-4">
                <dt className="font-mono text-xs text-accent">resultado</dt>
                <dd className="mt-1.5 text-sm font-medium leading-relaxed text-fg">
                  {project.highlight}
                </dd>
              </div>
            </dl>

            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label={`Stack do projeto ${project.title}`}
            >
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-edge bg-surface-2 px-3 py-1 font-mono text-xs text-fg"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
