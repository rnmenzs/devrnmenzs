/**
 * Fonte única de verdade do conteúdo do site.
 * Origem: handoff career-ops (2026-09-01), gerado a partir do cv.md.
 * Guardrails: sem telefone; pós FIAP sempre "em andamento"; no painel de
 * tickets o trabalho foi INTEGRAÇÃO com LLM (não autoria da ferramenta).
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rnmenzs.com";

export const site = {
  name: "Renan Leme Menezes",
  shortName: "renan.menezes",
  headline: "Desenvolvedor Fullstack + Segurança Ofensiva",
  tagline: "Construo aplicações web que já nascem seguras.",
  sub: "React, Node.js e TypeScript em produção. Cursando pós em Offensive Cyber Security (FIAP). Itu/SP · Remoto.",
  email: "renanlmenezes2003@gmail.com",
  github: "https://github.com/rnmenzs",
  linkedin: "https://www.linkedin.com/in/renanlememenezes",
  /** ⚠️ adicionar o PDF real em public/cv.pdf antes de divulgar o link */
  cvUrl: "/cv.pdf",
  /** ⚠️ virar `true` somente quando public/cv.pdf existir — o botão "Baixar CV" só renderiza com isso ligado */
  cvAvailable: false,
  location: "Itu/SP · Remoto",
} as const;

export const nav = [
  { label: "sobre", href: "#sobre" },
  { label: "projetos", href: "#projetos" },
  { label: "experiência", href: "#experiencia" },
  { label: "skills", href: "#skills" },
  { label: "formação", href: "#formacao" },
  { label: "contato", href: "#contato" },
] as const;

export const about: readonly string[] = [
  "Sou desenvolvedor fullstack com cerca de 2 anos de produção. Construí do zero uma plataforma SaaS multi-tenant: billing com webhooks idempotentes, retry e reconciliação, geração e assinatura digital de contratos e integrações com gateways de pagamento. Gosto de resolver o problema de ponta a ponta, do banco ao deploy.",
  "No caminho, mantive ERP corporativo em PHP, fiz rastreamento veicular em tempo real e passei um ano dando aula de programação — base do jeito que reviso código e explico decisão técnica até hoje. Agora curso a pós de Offensive Cyber Security na FIAP, unindo os dois lados que mais me interessam: construir bem e construir seguro.",
];

export interface Project {
  title: string;
  problem: string;
  solution: string;
  highlight: string;
  stack: readonly string[];
}

export const projects: readonly Project[] = [
  {
    title: "Painel de Tickets por IA",
    problem:
      "Conversas de atendimento no Chatwoot viravam relatos de bug soltos, sem estrutura nem prioridade — triagem manual e lenta.",
    solution:
      "Painel embutido no Chatwoot que transforma conversas em tickets de bug estruturados via integração com LLM: prompt engineering com saída JSON validada por schema, guardas anti-alucinação, remoção de PII e classificação automática de prioridade.",
    highlight:
      "IA aplicada em produção com saída controlada e tratamento de PII — engenharia com validação, não demo.",
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "SSE", "LLM"],
  },
  {
    title: "Billing & Assinatura Digital de Contratos",
    problem:
      "A nova plataforma SaaS multi-tenant da smartGPS precisava faturar e formalizar contratos sem intervenção manual — dinheiro de verdade, erro não é opção.",
    solution:
      "Sistema de faturamento multi-tenant + geração e assinatura eletrônica de contratos: integrações REST/Webhooks com gateways de pagamento, webhooks idempotentes, retry com backoff exponencial e reconciliação.",
    highlight:
      "Integração financeira crítica com resiliência real — idempotência, retry e reconciliação em produção.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Webhooks", "REST"],
  },
];

export interface Job {
  role: string;
  company: string;
  period: string;
  mode?: string;
  bullets: readonly string[];
}

export const experience: readonly Job[] = [
  {
    role: "Desenvolvedor Fullstack",
    company: "smartGPS",
    period: "Fev 2026 – Ago 2026",
    mode: "Remoto",
    bullets: [
      "Nova plataforma SaaS multi-tenant do zero (React 19 / Next.js 16 / Node.js / TypeScript / PostgreSQL)",
      "Sistema completo de billing com webhooks idempotentes, retry com backoff exponencial e reconciliação",
      "Módulo de geração e assinatura digital de contratos, com integração a gateways de pagamento e APIs de assinatura eletrônica",
      "Segurança em produção: sessão HMAC com identidade delegada, origin trust fail-closed, isolamento de segredos e tratamento de PII",
      "Deploy da plataforma em containers (Docker Swarm) com rolling update sem downtime e migrações idempotentes",
    ],
  },
  {
    role: "Desenvolvedor Fullstack",
    company: "Baron Tech",
    period: "Set 2024 – Abr 2025",
    bullets: [
      "Desenvolvimento e manutenção de módulos em ERP corporativo (PHP)",
      "3+ integrações REST em produção: gateway financeiro com idempotência, SMTP transacional com OAuth 2.0 + refresh de token, cloud storage com retry e backoff",
    ],
  },
  {
    role: "Desenvolvedor de Software",
    company: "smartGPS",
    period: "Ago 2023 – Ago 2024",
    bullets: [
      "Sistema de rastreamento veicular em tempo real (Node/React)",
      "Integração com APIs de localização e monitoramento; otimização de performance e segurança",
    ],
  },
  {
    role: "Instrutor de Programação",
    company: "SuperGeeks",
    period: "Ago 2022 – Jul 2023",
    bullets: [
      "Aulas, material didático e mentoria de turmas — base direta para code review e comunicação técnica",
    ],
  },
];

export interface SkillGroup {
  group: string;
  items: readonly string[];
  /** variante visual explícita do título do grupo (default: accent/teal) */
  tone?: "violet" | "accent";
}

export const skills: readonly SkillGroup[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "PHP", "APIs REST", "Webhooks"],
  },
  { group: "Bancos", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    group: "Segurança",
    tone: "violet",
    items: [
      "OAuth 2.0",
      "JWT",
      "Sessão HMAC",
      "Tratamento de PII",
      "Isolamento de segredos",
    ],
  },
  {
    group: "Infra & DevSecOps",
    items: ["CI/CD", "Google Cloud Storage", "Git"],
  },
  {
    group: "Domínio",
    items: [
      "Billing/faturamento",
      "Assinatura eletrônica",
      "Gateways de pagamento",
      "IA aplicada (LLMs)",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  status?: string;
  topics?: readonly string[];
  /** Entrega final do curso (ex.: TCC), com link público opcional. */
  finalProject?: { label: string; url?: string };
}

export const education: readonly EducationEntry[] = [
  {
    degree: "Pós Lato Sensu — Offensive Cyber Security (Red Team Ops)",
    school: "FIAP Postech",
    period: "Jun 2026 – Abr 2027",
    status: "em andamento · online",
    topics: [
      "Pentest",
      "Red Team Ops",
      "OSINT",
      "Web Hacking",
      "Malware Analysis",
      "Python para Red Team",
      "Purple Team",
      "IA aplicada à segurança",
    ],
  },
  {
    degree: "CST em Análise e Desenvolvimento de Sistemas",
    school: "Fatec Dom Amaury Castanho",
    period: "2021 – 2024",
    finalProject: {
      label:
        "TCC: aplicativo de Realidade Aumentada em Unity/C# para visualização de design de interiores em ambiente real",
      url: "https://github.com/rnmenzs/AR_interior_design",
    },
  },
];

/**
 * Skills em formação (handoff v2): estudo formal DIO/Alura — coursework,
 * ainda SEM produção. Nunca misturar com os grupos de produção acima.
 */
export const skillsInTraining: readonly string[] = [
  "C# / .NET",
  "Python (fundamentos + análise de dados)",
  "GenAI & Engenharia de Prompt",
  "Segurança ofensiva (pós FIAP, em andamento)",
];

export const skillsInTrainingNote =
  "Estudo formal (DIO/Alura) — ainda sem uso em produção.";

export interface CertTrack {
  track: string;
  items: readonly string[];
}

/** Certificações agrupadas por trilha (handoff v2) — não listar cursos soltos. */
export const certificationTracks: readonly CertTrack[] = [
  {
    track: "Formações (DIO / Alura)",
    items: [
      "Formação TypeScript Fullstack Developer — DIO, 2024 (React + Node + TS + TypeORM + testes)",
      "Formação C#/.NET Developer — DIO, 2025 (POO, estrutura de dados, APIs, .NET)",
      "GenAI & Engenharia de Prompt — DIO, 2026 (IA Generativa, LLMs, prompting, Copilot)",
      "Python & Análise de Dados — DIO, 2026 (Python, análise de dados, detecção de anomalias, SQL/BI)",
      "Fundamentos de Desenvolvimento com PHP — DIO, 2024",
      "Acessibilidade Web — Alura (front-end inclusivo, componentes acessíveis)",
    ],
  },
  {
    track: "Cibersegurança",
    items: [
      "Bootcamp Santander Cibersegurança — DIO, 2024 (fundamentos, pentest, deep web e anonimato, princípios)",
      "Aceleração Santander — Cibersegurança & Segurança em Vibe Coding — DIO, 2026",
      "Introdução à Coleta e Análise de Segurança Cibernética — DIO, 2026",
      "Tópicos em Engenharia Social — DIO, 2026",
    ],
  },
  {
    track: "Backend/Web (Alura)",
    items: [
      "REST com Node.js (Express + MySQL)",
      "HTTP",
      "Autenticação JWT com Node/TS",
    ],
  },
];

export const contact = {
  pitch: "Aberto a oportunidades fullstack e dev+AppSec, remoto — me chama.",
} as const;

export const seo = {
  title: "Renan Leme Menezes — Desenvolvedor Fullstack | Cyber Security",
  description:
    "Desenvolvedor Fullstack (React, Node.js, TypeScript) com foco em código seguro e AppSec. Billing multi-tenant, integrações de pagamento e tempo real em produção. Cursando pós em Offensive Cyber Security na FIAP.",
  /** linha de stack exibida na OG image */
  ogStackLine: "React · Node.js · TypeScript · AppSec",
  keywords: [
    "Renan Leme Menezes",
    "Desenvolvedor Fullstack",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Segurança",
    "AppSec",
    "Cyber Security",
    "Offensive Security",
  ],
} as const;
