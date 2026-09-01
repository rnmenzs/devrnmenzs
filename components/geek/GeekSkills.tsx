import GeekSection from "@/components/geek/GeekSection";
import { Arg, Cmd, Flag } from "@/components/geek/prompt";
import { skills } from "@/lib/content";

/**
 * Porta "honesta" por grupo — o mapeamento é a piada: 3000 = dev server
 * (frontend), 8080 = http alternativo (backend), 5432 = Postgres,
 * 443 = TLS (segurança), 22 = ssh (infra), 80 = http (domínio de negócio).
 */
const PORTS: Record<string, string> = {
  Frontend: "3000/tcp",
  Backend: "8080/tcp",
  Bancos: "5432/tcp",
  Segurança: "443/tcp",
  "Infra & DevSecOps": "22/tcp",
  Domínio: "80/tcp",
};

/** Skills como saída de um scan nmap: cada grupo é um serviço aberto. */
export default function GeekSkills() {
  return (
    <GeekSection
      id="skills"
      command={
        <>
          <Cmd>nmap</Cmd> <Flag>-sV</Flag> <Arg>renan.local</Arg>
        </>
      }
      title="Stack & Skills"
    >
      <p aria-hidden="true" className="g-dim text-xs">
        Nmap scan report for renan.local (127.0.0.1)
      </p>

      <p
        aria-hidden="true"
        className="mt-4 grid grid-cols-[6.5rem_3.5rem_1fr] gap-x-2 text-xs text-muted"
      >
        <span>PORT</span>
        <span>STATE</span>
        <span>SERVICE</span>
      </p>

      <ul className="mt-1 flex flex-col">
        {skills.map(({ group, items, tone }) => (
          <li key={group} className="border-b border-edge py-4 last:border-b-0">
            <div className="grid grid-cols-[6.5rem_3.5rem_1fr] items-baseline gap-x-2 text-sm">
              <span aria-hidden="true" className="g-cyan">
                {PORTS[group] ?? "1337/tcp"}
              </span>
              <span aria-hidden="true" className="text-accent">
                open
              </span>
              <h3
                className={`font-bold ${tone === "violet" ? "g-red" : "text-fg"}`}
              >
                {group.toLowerCase()}
              </h3>
            </div>
            <ul
              className="mt-3 flex flex-wrap gap-2 sm:mt-1.5 sm:pl-44"
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
        ))}
      </ul>

      <p aria-hidden="true" className="g-dim mt-4 text-xs">
        Service detection performed — {skills.length} serviços abertos em
        renan.local
      </p>
    </GeekSection>
  );
}
