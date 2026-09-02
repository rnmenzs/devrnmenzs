import Section from "@/components/Section";
import { Cmd, Flag } from "@/components/prompt";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

/** Contato — pitch traduzido + e-mail e redes (links invariantes). */
export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="contato"
      command={
        <>
          <Cmd>./contato.sh</Cmd> <Flag>--remote</Flag>
        </>
      }
      title={dict.titles.contact}
    >
      <p className="max-w-2xl text-muted">{dict.contact.pitch}</p>
      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-flex min-h-11 items-center break-all text-lg font-medium text-accent transition-colors duration-200 hover:text-accent-strong hover:underline sm:text-2xl"
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
