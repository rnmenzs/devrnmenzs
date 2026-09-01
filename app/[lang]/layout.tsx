import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL, site } from "@/lib/content";
import {
  defaultLocale,
  htmlLang,
  isLocale,
  locales,
  localePath,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "../globals.css";
import "../geek.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

/** Só os 3 locales são gerados; qualquer outro segmento é 404. */
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/** Mapa hreflang de todas as versões (PT na raiz, demais prefixadas). */
const languageAlternates = Object.fromEntries([
  ...locales.map((l) => [htmlLang[l], localePath(l)]),
  ["x-default", localePath(defaultLocale)],
]);

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { seo } = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],
    authors: [{ name: site.name, url: site.github }],
    creator: site.name,
    alternates: {
      canonical: localePath(lang),
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: htmlLang[lang].replace("-", "_"),
      url: localePath(lang),
      siteName: site.name,
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: { index: true, follow: true },
  };
}

/** Site dark-only: a UI do navegador mobile acompanha o chrome do terminal. */
export const viewport: Viewport = { themeColor: "#0d0d0d" };

const [addressLocality, addressRegion] = site.location.split("/");

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: dict.site.headline,
    description: dict.seo.description,
    email: `mailto:${site.email}`,
    url: SITE_URL,
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Application Security",
      "Offensive Cyber Security",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressRegion,
      addressCountry: "BR",
    },
  };

  return (
    <html
      lang={htmlLang[lang]}
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
