import Section from "@/components/Section";
import { Arg, Cmd, Flag } from "@/components/prompt";
import { experience } from "@/lib/content";

/** Hash fake determinístico (estilo git) a partir de empresa+período — só decoração. */
function fakeHash(seed: string) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h.toString(16).padStart(7, "0").slice(0, 7);
}

/** Experiência como `git log`: cada cargo é um commit na linha do tempo. */
export default function Experience() {
  return (
    <Section
      id="experiencia"
      command={
        <>
          <Cmd>git</Cmd> <Flag>-C</Flag> <Arg>~/carreira</Arg> log{" "}
          <Flag>--abbrev-commit</Flag>
        </>
      }
      title="Experiência"
    >
      <ol className="border-l border-edge">
        {experience.map((job, i) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="g-orange absolute -left-[7px] top-0 bg-bg px-0.5 font-bold"
            >
              *
            </span>
            <article>
              <p aria-hidden="true" className="text-xs">
                <span className="g-orange">
                  commit {fakeHash(job.company + job.period)}
                </span>
                {i === 0 ? (
                  <span className="g-dim">
                    {" ("}
                    <span className="g-cyan">HEAD</span>
                    {" -> "}
                    <span className="text-accent">main</span>
                    {")"}
                  </span>
                ) : null}
              </p>
              <h3 className="mt-1 font-bold text-fg">
                {job.role} <span className="text-violet">· {job.company}</span>
              </h3>
              <p className="mt-1 text-xs text-muted">
                {job.period}
                {job.mode ? ` · ${job.mode}` : null}
              </p>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-sm leading-relaxed text-muted"
                  >
                    <span aria-hidden="true" className="g-dim absolute left-0">
                      -
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
