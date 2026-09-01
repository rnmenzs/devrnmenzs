import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/content";

/** Seção de abertura do site — bloco próprio, fora da casca `Section`. */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85svh] items-center overflow-hidden pt-24"
    >
      {/* Glow radial teal muito sutil ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6">
        <p className="font-mono text-sm text-accent" aria-hidden="true">
          ~$ whoami
        </p>

        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          {site.name}
        </h1>

        <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">
          {site.headline}
        </p>

        <p className="mt-6 max-w-2xl text-lg text-fg">{site.tagline}</p>

        <p className="mt-2 max-w-2xl text-muted">{site.sub}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {site.cvAvailable ? (
            <a
              href={site.cvUrl}
              download
              className="rounded-md bg-accent px-5 py-3 font-medium text-bg transition-colors duration-200 hover:bg-accent-strong"
            >
              Baixar CV (PDF)
            </a>
          ) : null}

          <a
            href="#contato"
            className="rounded-md border border-edge px-5 py-3 font-medium text-fg transition-colors duration-200 hover:border-accent-dim"
          >
            Contato
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:text-accent"
          >
            <GitHubIcon />
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:text-accent"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
