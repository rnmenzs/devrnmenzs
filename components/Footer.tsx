import { site } from "@/lib/content";

/** Rodapé: copyright e link do GitHub. A seção Contato vive em components/Contact.tsx. */
export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center font-mono text-xs text-accent transition-colors duration-200 hover:text-accent-strong hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
