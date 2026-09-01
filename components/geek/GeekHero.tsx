import type { CSSProperties, ReactNode } from "react";
import { site } from "@/lib/content";
import { Arg, Cmd, Flag, GEEK_HOST, Prompt } from "@/components/geek/prompt";

/** Delay de animação por linha (consumido por .geek-out/.geek-typed). */
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/** Linha de comando "digitada" da sequência de boot — decorativa. */
function BootLine({
  d,
  host,
  children,
}: {
  d: number;
  host?: string;
  children: ReactNode;
}) {
  return (
    <p aria-hidden="true" className="geek-out" style={delay(d)}>
      <Prompt host={host} />
      <span className="geek-typed" style={delay(d + 0.05)}>
        {children}
      </span>
    </p>
  );
}

/** Hero geek: boot de uma sessão ssh (CSS puro; some com prefers-reduced-motion). */
export default function GeekHero() {
  return (
    <section
      id="inicio"
      className="mx-auto w-full max-w-5xl px-6 pb-16 pt-28 sm:pb-24 sm:pt-36"
    >
      <div className="text-sm">
        <BootLine d={0} host="local">
          <Cmd>ssh</Cmd> <Arg>visitor@{GEEK_HOST}</Arg>
        </BootLine>
        <p aria-hidden="true" className="geek-out mt-1" style={delay(0.7)}>
          Last login: Mon Aug 31 22:14:07 2026 from 45.170.12.34
        </p>

        <div className="mt-4">
          <BootLine d={1.1}>
            <Cmd>whoami</Cmd>
          </BootLine>
          <p aria-hidden="true" className="geek-out mt-1" style={delay(1.7)}>
            visitor
          </p>
        </div>

        <div className="mt-4">
          <BootLine d={2.1}>
            <Cmd>finger</Cmd> <Arg>renan</Arg>
          </BootLine>
          <pre
            aria-hidden="true"
            className="geek-out mt-1 overflow-x-auto"
            style={delay(2.8)}
          >
            {"Login: renan                     Name: "}
            {site.name}
            {"\nDirectory: /home/renan           Shell: /bin/zsh\nPlan:"}
          </pre>
        </div>
      </div>

      <div className="geek-out" style={delay(3.2)}>
        <pre
          aria-hidden="true"
          className="geek-banner mt-6 select-none text-[clamp(1.05rem,4.6vw,2.35rem)] font-bold leading-[1.15]"
        >
          {"█▀█ █▀▀ █▄░█ ▄▀█ █▄░█\n█▀▄ ██▄ █░▀█ █▀█ █░▀█"}
        </pre>

        <h1 className="mt-5 text-xl font-bold tracking-tight text-fg sm:text-2xl">
          {site.name}
        </h1>
        <p className="g-pink mt-1 text-lg font-bold sm:text-xl">
          {site.headline}
        </p>
        <p className="mt-5 max-w-2xl text-fg">{site.tagline}</p>
        <p className="mt-2 max-w-2xl text-muted">{site.sub}</p>
      </div>

      <div className="mt-10 text-sm">
        <BootLine d={3.9}>
          <Cmd>ls</Cmd> <Flag>-F</Flag> <Arg>~/links</Arg>
        </BootLine>

        <ul
          className="geek-out mt-2 flex flex-wrap gap-x-7 gap-y-2"
          style={delay(4.5)}
          aria-label="Links principais"
        >
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="g-cyan inline-flex min-h-11 items-center font-bold hover:underline"
            >
              github/
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="g-cyan inline-flex min-h-11 items-center font-bold hover:underline"
            >
              linkedin/
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="g-yellow inline-flex min-h-11 items-center hover:underline"
            >
              contato.sh*
            </a>
          </li>
          {site.cvAvailable ? (
            <li>
              <a
                href={site.cvUrl}
                download
                className="g-pink inline-flex min-h-11 items-center hover:underline"
              >
                cv.pdf
              </a>
            </li>
          ) : null}
        </ul>

        <p
          aria-hidden="true"
          className="geek-out geek-cursor mt-6"
          style={delay(4.9)}
        >
          <Prompt />
        </p>
      </div>
    </section>
  );
}
