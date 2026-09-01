import Section from "@/components/Section";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { contact, site } from "@/lib/content";

/** Seção 06 — Contato: pitch, e-mail e redes. Renderizada dentro de <main>. */
export default function Contact() {
  return (
    <Section id="contato" index="06" title="Contato">
      <p className="max-w-2xl text-lg text-muted">{contact.pitch}</p>
      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-flex min-h-11 items-center break-all font-mono text-xl text-accent transition-colors duration-200 hover:text-accent-strong hover:underline sm:text-2xl"
      >
        {site.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
        <li>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-accent transition-colors duration-200 hover:text-accent-strong hover:underline"
          >
            <GitHubIcon className="shrink-0" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-accent transition-colors duration-200 hover:text-accent-strong hover:underline"
          >
            <LinkedInIcon className="shrink-0" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
