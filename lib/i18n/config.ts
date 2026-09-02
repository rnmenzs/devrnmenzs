/** Configuração de idiomas. PT é o default e vive na raiz (sem prefixo). */
export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** Valor do atributo `lang` do <html> por locale. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

/** Rótulo curto do seletor de idioma (barra do terminal). */
export const localeLabel: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Caminho público de um locale: PT na raiz, demais prefixados. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
