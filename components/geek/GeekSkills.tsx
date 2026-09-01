import GeekSection from "@/components/geek/GeekSection";
import { Arg, Cmd, Flag, GEEK_HOST } from "@/components/geek/prompt";
import { skills, skillsInTraining, skillsInTrainingNote } from "@/lib/content";

/**
 * Porta "honesta" por grupo — o mapeamento é a piada: 3000 = dev server
 * (frontend), 8080 = http alternativo (backend), 5432 = Postgres,
 * 443 = TLS (segurança), 22 = ssh (infra), 80 = http (domínio de negócio).
 * SERVICE usa o nome real do nmap-services de cada porta; o conteúdo
 * (grupo + chips) vai na coluna VERSION, como num `-sV` de verdade.
 */
const SCAN: Record<string, { port: string; service: string }> = {
  Frontend: { port: "3000/tcp", service: "ppp" },
  Backend: { port: "8080/tcp", service: "http-proxy" },
  Bancos: { port: "5432/tcp", service: "postgresql" },
  Segurança: { port: "443/tcp", service: "https" },
  "Infra & DevSecOps": { port: "22/tcp", service: "ssh" },
  Domínio: { port: "80/tcp", service: "http" },
};

/**
 * Skills em formação = portas "filtered": o serviço existe, mas ainda não
 * está aberto a tráfego de produção. Pareado por índice com skillsInTraining:
 * 5000 = Kestrel/.NET · 8000 = `python -m http.server` · 9000 = cslistener ·
 * 4444 = porta padrão do handler do Metasploit (segurança ofensiva).
 * Nomes de serviço são os do nmap-services de cada porta.
 */
const TRAINING_SCAN: readonly { port: string; service: string }[] = [
  { port: "5000/tcp", service: "upnp" },
  { port: "8000/tcp", service: "http-alt" },
  { port: "9000/tcp", service: "cslistener" },
  { port: "4444/tcp", service: "krb524" },
];

/** Colunas PORT/STATE/SERVICE/VERSION; no mobile, VERSION quebra pra linha de baixo. */
const ROW_GRID =
  "grid grid-cols-[5rem_4.5rem_1fr] items-baseline gap-x-2 sm:grid-cols-[6.5rem_4.5rem_6rem_1fr]";

/** Skills como saída de um `nmap -sV`: produção = open, em formação = filtered. */
export default function GeekSkills() {
  return (
    <GeekSection
      id="skills"
      command={
        <>
          <Cmd>nmap</Cmd> <Flag>-sV</Flag> <Arg>{GEEK_HOST}</Arg>
        </>
      }
      title="Stack & Skills"
    >
      <p aria-hidden="true" className="g-dim text-xs">
        Nmap scan report for {GEEK_HOST} (127.0.0.1)
      </p>
      <p aria-hidden="true" className="g-dim text-xs">
        Host is up (0.000042s latency).
      </p>

      <p
        aria-hidden="true"
        className={`mt-4 ${ROW_GRID} text-xs text-muted`}
      >
        <span>PORT</span>
        <span>STATE</span>
        <span>SERVICE</span>
        <span className="hidden sm:inline">VERSION</span>
      </p>

      <ul className="mt-1 flex flex-col">
        {skills.map(({ group, items, tone }) => {
          const scan = SCAN[group] ?? { port: "1337/tcp", service: "unknown" };
          return (
            <li
              key={group}
              className="border-b border-edge py-4 last:border-b-0"
            >
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
                aria-label={`Skills de ${group}`}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-edge bg-surface-2 px-2.5 py-1 text-xs text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-xs text-muted">{skillsInTrainingNote}</p>

      <ul className="mt-1 flex flex-col" aria-label="Skills em formação">
        {skillsInTraining.map((item, i) => {
          const scan = TRAINING_SCAN[i] ?? {
            port: "1337/tcp",
            service: "unknown",
          };
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
    </GeekSection>
  );
}
