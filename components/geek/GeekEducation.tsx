import GeekSection from "@/components/geek/GeekSection";
import { Arg, Cmd } from "@/components/geek/prompt";
import { certifications, education } from "@/lib/content";

const MONTHS: Record<string, number> = {
  Jan: 0,
  Fev: 1,
  Mar: 2,
  Abr: 3,
  Mai: 4,
  Jun: 5,
  Jul: 6,
  Ago: 7,
  Set: 8,
  Out: 9,
  Nov: 10,
  Dez: 11,
};

/**
 * Fração de tempo decorrido do período "Mês AAAA – Mês AAAA" — alimenta a
 * barra decorativa de download. O status real ("em andamento") vem SEMPRE
 * de lib/content.ts; a barra nunca chega em 100% (guardrail do handoff).
 */
function elapsedFraction(period: string) {
  const m = period.match(/^(\w{3}) (\d{4}) – (\w{3}) (\d{4})$/);
  if (!m) return 0.3;
  const start = new Date(Number(m[2]), MONTHS[m[1]] ?? 0).getTime();
  const end = new Date(Number(m[4]), MONTHS[m[3]] ?? 0).getTime();
  if (end <= start) return 0.3;
  return Math.min(0.9, Math.max(0.05, (Date.now() - start) / (end - start)));
}

const BAR_WIDTH = 22;

/** Barra estilo apt/pacman para formação em andamento (decorativa). */
function ProgressBar({ period }: { period: string }) {
  const fill = Math.round(elapsedFraction(period) * BAR_WIDTH);
  return (
    <p aria-hidden="true" className="mt-3 text-xs">
      <span className="text-accent">{"█".repeat(fill)}</span>
      <span className="text-edge">{"░".repeat(BAR_WIDTH - fill)}</span>
      <span className="g-dim"> baixando módulos…</span>
    </p>
  );
}

/** Formação como instalação de pacotes; certificações como listagem dpkg. */
export default function GeekEducation() {
  return (
    <GeekSection
      id="formacao"
      command={
        <>
          <Cmd>sudo</Cmd> apt install <Arg>formacao</Arg>
        </>
      }
      title="Formação & Certificações"
    >
      <p aria-hidden="true" className="g-dim text-xs">
        [sudo] senha para visitor: ********
      </p>

      <div className="mt-6 flex flex-col gap-6">
        {education.map((edu) => {
          const emAndamento = Boolean(edu.status);
          return (
            <article
              key={edu.degree}
              className={`rounded-md border bg-surface p-5 sm:p-6 ${
                emAndamento ? "border-accent-dim" : "border-edge"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-bold">{edu.degree}</h3>
                {edu.status ? (
                  <span className="g-badge-yellow rounded-sm px-2 py-0.5 text-xs">
                    {edu.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-muted">
                {edu.school} · {edu.period}
              </p>
              {emAndamento ? (
                <ProgressBar period={edu.period} />
              ) : (
                <p aria-hidden="true" className="mt-3 text-xs text-accent">
                  ✓ instalado
                </p>
              )}
              {edu.topics ? (
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`Módulos de ${edu.degree}`}
                >
                  {edu.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-sm border border-edge bg-surface-2 px-2.5 py-1 text-xs text-fg"
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

      <h3 className="mt-12 text-lg font-bold text-violet">
        <span aria-hidden="true" className="g-dim">
          {"## "}
        </span>
        Certificações
      </h3>
      <ul className="mt-4 space-y-1.5 text-sm">
        {certifications.map((cert) => {
          const m = cert.match(/^(.*?)\s*\((.+)\)$/);
          const name = m ? m[1] : cert;
          const issuer = m ? m[2] : null;
          return (
            <li key={cert} className="flex items-baseline gap-3">
              <span aria-hidden="true" className="g-dim shrink-0">
                ii
              </span>
              <span className="text-fg">
                {name}
                {issuer ? <span className="text-muted"> · {issuer}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </GeekSection>
  );
}
