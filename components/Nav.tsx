"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { HOST } from "@/components/prompt";
import LangSwitcher from "@/components/LangSwitcher";

/**
 * Barra de título de terminal: semáforo decorativo, nome da sessão, links
 * de âncora e seletor de idioma. Menu mobile com toggle acessível.
 */
export default function Nav({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { nav, ui } = dict;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-surface/90 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-edge focus:bg-surface focus:px-4 focus:py-3 focus:text-sm focus:text-accent"
      >
        {ui.skipToContent}
      </a>

      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-(--ansi-red)" />
            <span className="h-3 w-3 rounded-full bg-(--ansi-yellow)" />
            <span className="h-3 w-3 rounded-full bg-accent" />
          </span>

          <span className="flex min-h-11 items-center text-sm text-muted">
            <span className="pmt-visitor">visitor</span>
            <span className="pmt-root">root</span>@{HOST}:~
          </span>
        </div>

        <div className="flex items-center gap-3">
          <nav aria-label={ui.navPrimary} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="flex min-h-11 items-center px-2.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LangSwitcher current={lang} className="hidden md:flex" />

          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:text-fg md:hidden"
          >
            {open ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label={ui.navPrimaryMobile}
        hidden={!open}
        className="border-t border-edge bg-surface md:hidden"
      >
        <ul className="px-3 py-2">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center px-3 text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-1 border-t border-edge px-3 pt-2">
            <LangSwitcher current={lang} className="flex" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
