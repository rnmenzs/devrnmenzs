import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import pt from "@/lib/i18n/dictionaries/pt";
import en from "@/lib/i18n/dictionaries/en";
import es from "@/lib/i18n/dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

/** Dicionário de conteúdo para o locale (import estático — tudo pré-renderizado). */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
