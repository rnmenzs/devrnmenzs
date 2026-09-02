/**
 * Forma de um dicionário de conteúdo (um por idioma).
 * Campos INVARIANTES entre idiomas (links, e-mail, nome, portas, tokens de
 * stack, ids, datas) vivem em `lib/content.ts`. Aqui fica só o que TRADUZ.
 * Ids estáveis (ex.: skill.id, nav.id) se repetem iguais em todos os locales
 * — são a "chave" que o componente usa, nunca o texto traduzido.
 */

export interface NavItem {
  id: string;
  href: string;
  label: string;
}

export interface Project {
  title: string;
  problem: string;
  solution: string;
  highlight: string;
  stack: readonly string[];
}

export interface Job {
  role: string;
  company: string;
  period: string;
  mode?: string;
  bullets: readonly string[];
}

export interface SkillGroup {
  /** id estável (invariante) usado para mapear porta/serviço no nmap. */
  id: "frontend" | "backend" | "databases" | "security" | "infra" | "domain";
  group: string;
  items: readonly string[];
  tone?: "violet" | "accent";
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  status?: string;
  topics?: readonly string[];
  finalProject?: { label: string; url?: string };
}

export interface CertTrack {
  track: string;
  items: readonly string[];
}

export interface Dictionary {
  site: {
    headline: string;
    tagline: string;
    sub: string;
  };
  titles: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
  };
  nav: readonly NavItem[];
  about: readonly string[];
  projects: readonly Project[];
  experience: readonly Job[];
  skills: readonly SkillGroup[];
  skillsInTraining: readonly string[];
  skillsInTrainingNote: string;
  education: readonly EducationEntry[];
  certificationTracks: readonly CertTrack[];
  contact: { pitch: string };
  seo: {
    title: string;
    description: string;
    ogStackLine: string;
    keywords: readonly string[];
  };
  /** Rótulos de UI e "encenação" de terminal (saídas fake que estavam em PT). */
  ui: {
    skipToContent: string;
    navPrimary: string;
    navPrimaryMobile: string;
    openMenu: string;
    closeMenu: string;
    heroLinks: string;
    /** rótulos dos blocos de projeto */
    problem: string;
    solution: string;
    result: string;
    stack: string;
    /** prefixos de aria-label (concatenados com o nome do grupo/projeto) */
    ariaStackOf: string;
    ariaSkillsOf: string;
    ariaSkillsInTraining: string;
    ariaModulesOf: string;
    publicCode: string;
    certificationsHeading: string;
    /** saída fake do `apt` (seção formação) */
    aptSudoPassword: string;
    aptReadingLists: string;
    aptBuildingTree: string;
    aptReadingState: string;
    aptConfiguring: string;
    aptDownloading: string;
  };
}
