import Link from "next/link";
import {
  locales,
  localeLabel,
  localePath,
  type Locale,
} from "@/lib/i18n/config";

/** Seletor de idioma estilo variável de ambiente do shell (LANG=…). */
export default function LangSwitcher({
  current,
  className = "",
}: {
  current: Locale;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 text-xs ${className}`}>
      <span aria-hidden="true" className="g-dim">
        LANG=
      </span>
      <ul className="flex items-center gap-1">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale} className="flex items-center">
              <Link
                href={localePath(locale)}
                hrefLang={locale}
                aria-current={active ? "true" : undefined}
                className={`inline-flex min-h-11 items-center px-1 transition-colors duration-200 ${
                  active
                    ? "text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {localeLabel[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
