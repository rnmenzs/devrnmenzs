import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";
import { defaultLocale, htmlLang, locales, localePath } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [htmlLang[l], `${SITE_URL}${localePath(l)}`])
  );

  return locales.map((l) => ({
    url: `${SITE_URL}${localePath(l)}`,
    changeFrequency: "monthly",
    priority: l === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
