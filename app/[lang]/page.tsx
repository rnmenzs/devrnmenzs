import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import TerminalLayout from "@/layouts/TerminalLayout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <TerminalLayout dict={dict} lang={lang}>
      <Hero dict={dict} />
      <About dict={dict} />
      <Projects dict={dict} />
      <Experience dict={dict} />
      <Skills dict={dict} />
      <Education dict={dict} />
      <Contact dict={dict} />
    </TerminalLayout>
  );
}
