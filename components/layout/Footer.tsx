import { site } from "@/lib/content";

/** Rodapé estilo barra de status do tmux — sessão única. */
export default function Footer() {
  return (
    <footer className="border-t border-edge bg-surface-2">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 px-6 py-1.5 text-xs">
        <p className="flex flex-wrap items-center gap-x-4">
          <span aria-hidden="true" className="text-accent">
            [rnmenzs]
          </span>
          <span aria-hidden="true" className="text-fg">
            0:portfolio*
          </span>
        </p>
        <p className="flex flex-wrap items-center gap-x-4 text-muted">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-accent transition-colors duration-200 hover:text-accent-strong hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
