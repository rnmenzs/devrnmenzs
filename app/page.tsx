import GeekNav from "@/components/geek/GeekNav";
import GeekHero from "@/components/geek/GeekHero";
import GeekAbout from "@/components/geek/GeekAbout";
import GeekProjects from "@/components/geek/GeekProjects";
import GeekExperience from "@/components/geek/GeekExperience";
import GeekSkills from "@/components/geek/GeekSkills";
import GeekEducation from "@/components/geek/GeekEducation";
import GeekContact from "@/components/geek/GeekContact";
import GeekFooter from "@/components/geek/GeekFooter";

export default function Home() {
  return (
    <div className="geek flex min-h-svh flex-1 flex-col">
      <GeekNav />
      <main id="conteudo" tabIndex={-1} className="flex-1">
        <GeekHero />
        <GeekAbout />
        <GeekProjects />
        <GeekExperience />
        <GeekSkills />
        <GeekEducation />
        <GeekContact />
      </main>
      <GeekFooter />
    </div>
  );
}
