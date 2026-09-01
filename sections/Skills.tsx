import Section from "@/components/Section";
import { Chip } from "@/components/Chip";
import { Arg, Cmd, Flag, HOST } from "@/components/prompt";
import { skillScan, trainingScan } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

/** Colunas PORT/STATE/SERVICE/VERSION; no mobile, VERSION quebra pra linha de baixo. */
const ROW_GRID =
  "grid grid-cols-[5rem_4.5rem_1fr] items-baseline gap-x-2 sm:grid-cols-[6.5rem_4.5rem_6rem_1fr]";

const FALLBACK = { port: "1337/tcp", service: "unknown" };

/** Skills como saída de um `nmap -sV`: produção = open, em formação = filtered. */
export default function Skills({ dict }: { dict: Dictionary }) {
  const { ui } = dict;
  return (
    <Section
      id="skills"
      command={
        <>
          <Cmd>nmap</Cmd> <Flag>-sV</Flag> <Arg>{HOST}</Arg>
        </>
      }
      title={dict.titles.skills}
    >
      <p aria-hidden="true" className="g-dim text-xs">
        Nmap scan report for {HOST} (127.0.0.1)
      </p>
      <p aria-hidden="true" className="g-dim text-xs">
        Host is up (0.000042s latency).
      </p>

      <p aria-hidden="true" className={`mt-4 ${ROW_GRID} text-xs text-muted`}>
        <span>PORT</span>
        <span>STATE</span>
        <span>SERVICE</span>
        <span className="hidden sm:inline">VERSION</span>
      </p>

      <ul className="mt-1 flex flex-col">
        {dict.skills.map(({ id, group, items, tone }) => {
          const scan = skillScan[id] ?? FALLBACK;
          return (
            <li key={id} className="border-b border-edge py-4 last:border-b-0">
              <div className={`${ROW_GRID} text-sm`}>
                <span aria-hidden="true" className="g-cyan">
                  {scan.port}
                </span>
                <span aria-hidden="true" className="text-accent">
                  open
                </span>
                <span aria-hidden="true" className="text-muted">
                  {scan.service}
                </span>
                <h3
                  className={`col-span-3 mt-1 font-bold sm:col-span-1 sm:mt-0 ${
                    tone === "violet" ? "g-red" : "text-fg"
                  }`}
                >
                  {group.toLowerCase()}
                </h3>
              </div>
              <ul
                className="mt-3 flex flex-wrap gap-2 sm:mt-1.5 sm:pl-74"
                aria-label={`${ui.ariaSkillsOf} ${group}`}
              >
                {items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-xs text-muted">{dict.skillsInTrainingNote}</p>

      <ul className="mt-1 flex flex-col" aria-label={ui.ariaSkillsInTraining}>
        {dict.skillsInTraining.map((item, i) => {
          const scan = trainingScan[i] ?? FALLBACK;
          return (
            <li key={item} className="border-b border-edge py-3 last:border-b-0">
              <div className={`${ROW_GRID} text-sm`}>
                <span aria-hidden="true" className="g-cyan">
                  {scan.port}
                </span>
                <span aria-hidden="true" className="g-yellow">
                  filtered
                </span>
                <span aria-hidden="true" className="text-muted">
                  {scan.service}
                </span>
                <span className="col-span-3 mt-1 text-fg sm:col-span-1 sm:mt-0">
                  {item}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <p aria-hidden="true" className="g-dim mt-4 text-xs">
        Service detection performed. Please report any incorrect results at
        https://nmap.org/submit/ .
      </p>
    </Section>
  );
}
