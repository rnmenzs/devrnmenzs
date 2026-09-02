import Section from "@/components/Section";
import { Arg, Cmd } from "@/components/prompt";
import { Chip } from "@/components/Chip";
import type { Dictionary } from "@/lib/i18n/types";

/** Nome de arquivo determinístico a partir do título do projeto (só decoração). */
function toFilename(title: string) {
  const slug = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug}.md`;
}

/** Projetos como arquivos markdown abertos no `bat` (header de arquivo + corpo). */
export default function Projects({ dict }: { dict: Dictionary }) {
  const { ui } = dict;
  return (
    <Section
      id="projetos"
      command={
        <>
          <Cmd>bat</Cmd> <Arg>projetos/*.md</Arg>
        </>
      }
      title={dict.titles.projects}
    >
      <div className="flex flex-col gap-8">
        {dict.projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-md border border-edge bg-surface"
          >
            <div
              aria-hidden="true"
              className="truncate border-b border-edge bg-surface-2 px-5 py-2 text-xs sm:px-6"
            >
              <span className="g-dim">File: </span>
              <span className="font-bold text-fg">
                projetos/{toFilename(project.title)}
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-fg sm:text-xl">
                <span aria-hidden="true" className="g-dim">
                  {"# "}
                </span>
                {project.title}
              </h3>

              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="g-pink text-xs font-bold">
                    <span aria-hidden="true" className="g-dim">
                      {"## "}
                    </span>
                    {ui.problem}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                    {project.problem}
                  </dd>
                </div>

                <div>
                  <dt className="g-pink text-xs font-bold">
                    <span aria-hidden="true" className="g-dim">
                      {"## "}
                    </span>
                    {ui.solution}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                    {project.solution}
                  </dd>
                </div>

                <div className="rounded-r-md border-l-2 border-accent bg-surface-2 py-3 pl-4 pr-4">
                  <dt className="text-xs font-bold text-accent">
                    <span aria-hidden="true" className="g-dim">
                      {"## "}
                    </span>
                    {ui.result}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-relaxed text-fg">
                    {project.highlight}
                  </dd>
                </div>
              </dl>

              <p aria-hidden="true" className="g-dim mt-6 text-xs">
                {ui.stack}
              </p>
              <ul
                className="mt-2 flex flex-wrap gap-2"
                aria-label={`${ui.ariaStackOf} ${project.title}`}
              >
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
