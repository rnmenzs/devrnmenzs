import Section from "@/components/Section";
import { Chip } from "@/components/Chip";
import { Arg, Cmd, Flag, Prompt } from "@/components/prompt";
import type { Dictionary } from "@/lib/i18n/types";

const MONTHS: Record<string, number> = {
  Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5,
  Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11,
  // formas EN/ES (a barra só usa o ano, mas mantém o parser tolerante)
  Feb: 1, Apr: 3, May: 4, Aug: 7, Sep: 8, Oct: 9, Dec: 11, Ene: 0, Dic: 11,
};

/**
 * Fração de tempo decorrido do período — alimenta a barra decorativa. O status
 * real ("em andamento") vem SEMPRE do dicionário; a barra nunca chega em 100%.
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

/** Nome de pacote decorativo derivado da instituição (formacao-fiap, formacao-fatec). */
function pkgName(school: string) {
  return `formacao-${school.split(" ")[0].toLowerCase()}`;
}

/** Ano final do período vira a "versão" do pacote na linha de configuração. */
function pkgVersion(period: string) {
  const years = period.match(/\d{4}/g);
  return years ? years[years.length - 1] : period;
}

/** Barra estilo apt/pacman para formação em andamento (decorativa, nunca 100%). */
function ProgressBar({
  period,
  downloading,
}: {
  period: string;
  downloading: string;
}) {
  const fraction = elapsedFraction(period);
  const fill = Math.round(fraction * BAR_WIDTH);
  const pct = Math.round(fraction * 100);
  return (
    <p aria-hidden="true" className="mt-3 text-xs">
      <span className="text-accent">{"█".repeat(fill)}</span>
      <span className="text-edge">{"░".repeat(BAR_WIDTH - fill)}</span>
      <span className="g-dim">
        {" "}
        {pct}% · {downloading}
      </span>
    </p>
  );
}

/** "Nome — meta" → nome + resto em muted; itens sem travessão caem no parêntese. */
function splitCert(item: string) {
  const dash = item.split(" — ");
  if (dash.length > 1) {
    return { name: dash[0], meta: dash.slice(1).join(" — ") };
  }
  const m = item.match(/^(.*?)\s*\((.+)\)$/);
  if (m) return { name: m[1], meta: m[2] };
  return { name: item, meta: null };
}

/** Formação como instalação de pacotes; certificações como listagem dpkg. */
export default function Education({ dict }: { dict: Dictionary }) {
  const { ui } = dict;
  return (
    <Section
      id="formacao"
      command={
        <>
          <Cmd>sudo</Cmd> apt install <Arg>formacao</Arg>
        </>
      }
      title={dict.titles.education}
    >
      <div aria-hidden="true" className="g-dim text-xs leading-relaxed">
        <p>{ui.aptSudoPassword}</p>
        <p>{ui.aptReadingLists}</p>
        <p>{ui.aptBuildingTree}</p>
        <p>{ui.aptReadingState}</p>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {dict.education.map((edu) => {
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
                <ProgressBar
                  period={edu.period}
                  downloading={ui.aptDownloading}
                />
              ) : (
                <p aria-hidden="true" className="g-dim mt-3 text-xs">
                  {ui.aptConfiguring} {pkgName(edu.school)} (
                  {pkgVersion(edu.period)}) ...
                </p>
              )}
              {edu.finalProject ? (
                <p className="mt-3 text-sm text-muted">
                  {edu.finalProject.label}
                  {edu.finalProject.url ? (
                    <>
                      {" — "}
                      <a
                        href={edu.finalProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent transition-colors duration-200 hover:text-accent-strong hover:underline"
                      >
                        {ui.publicCode}
                      </a>
                    </>
                  ) : null}
                </p>
              ) : null}
              {edu.topics ? (
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`${ui.ariaModulesOf} ${edu.degree}`}
                >
                  {edu.topics.map((topic) => (
                    <Chip key={topic}>{topic}</Chip>
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
        {ui.certificationsHeading}
      </h3>
      <p aria-hidden="true" className="mt-4 text-sm">
        <Prompt />
        <Cmd>dpkg</Cmd> <Flag>-l</Flag> <span className="text-muted">|</span>{" "}
        <Cmd>grep</Cmd> <Flag>-i</Flag> <Arg>cert</Arg>
      </p>

      <div className="mt-4 flex flex-col gap-6">
        {dict.certificationTracks.map((track) => (
          <div key={track.track}>
            <h4 className="text-sm font-bold text-fg">
              <span aria-hidden="true" className="g-dim">
                {"### "}
              </span>
              {track.track}
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm">
              {track.items.map((item) => {
                const { name, meta } = splitCert(item);
                return (
                  <li key={item} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="g-dim shrink-0">
                      ii
                    </span>
                    <span className="text-fg">
                      {name}
                      {meta ? (
                        <span className="text-muted"> · {meta}</span>
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
