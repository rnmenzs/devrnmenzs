import type { Dictionary } from "@/lib/i18n/types";

/** Dicionário PT-BR — fonte de tradução para en/es. Ver guardrails em lib/content.ts. */
const pt: Dictionary = {
  site: {
    headline: "Desenvolvedor Fullstack + Segurança Ofensiva",
    tagline: "Construo aplicações web que já nascem seguras.",
    sub: "React, Node.js e TypeScript em produção. Cursando pós em Offensive Cyber Security (FIAP). Itu/SP · Remoto.",
  },
  titles: {
    about: "Sobre",
    projects: "Projetos em destaque",
    experience: "Experiência",
    skills: "Stack & Skills",
    education: "Formação & Certificações",
    contact: "Contato",
  },
  nav: [
    { id: "about", href: "#sobre", label: "sobre" },
    { id: "projects", href: "#projetos", label: "projetos" },
    { id: "experience", href: "#experiencia", label: "experiência" },
    { id: "skills", href: "#skills", label: "skills" },
    { id: "education", href: "#formacao", label: "formação" },
    { id: "contact", href: "#contato", label: "contato" },
  ],
  about: [
    "Sou desenvolvedor fullstack com cerca de 2 anos de produção. Construí do zero uma plataforma SaaS multi-tenant: billing com webhooks idempotentes, retry e reconciliação, geração e assinatura digital de contratos e integrações com gateways de pagamento. Gosto de resolver o problema de ponta a ponta, do banco ao deploy.",
    "No caminho, mantive ERP corporativo em PHP, fiz rastreamento veicular em tempo real e passei um ano dando aula de programação — base do jeito que reviso código e explico decisão técnica até hoje. Agora curso a pós de Offensive Cyber Security na FIAP, unindo os dois lados que mais me interessam: construir bem e construir seguro.",
  ],
  projects: [
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
  ],
  experience: [
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
  ],
  skills: [
    {
      id: "frontend",
      group: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML"],
    },
    {
      id: "backend",
      group: "Backend",
      items: ["Node.js", "Express", "PHP", "APIs REST", "Webhooks"],
    },
    { id: "databases", group: "Bancos", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    {
      id: "security",
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
      id: "infra",
      group: "Infra & DevSecOps",
      items: ["CI/CD", "Google Cloud Storage", "Git"],
    },
    {
      id: "domain",
      group: "Domínio",
      items: [
        "Billing/faturamento",
        "Assinatura eletrônica",
        "Gateways de pagamento",
        "IA aplicada (LLMs)",
      ],
    },
  ],
  skillsInTraining: [
    "C# / .NET",
    "Python (fundamentos + análise de dados)",
    "GenAI & Engenharia de Prompt",
    "Segurança ofensiva (pós FIAP, em andamento)",
  ],
  skillsInTrainingNote:
    "Estudo formal (DIO/Alura) — ainda sem uso em produção.",
  education: [
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
  ],
  certificationTracks: [
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
        "Cibersegurança Essencial: Bases para Seus Projetos com Dados e IA — DIO, 2026",
        "Introdução ao DevSecOps — DIO, 2026",
        "Tendências em IA e Cibersegurança Aplicadas ao Projeto Final — DIO, 2026",
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
  ],
  contact: {
    pitch: "Aberto a oportunidades fullstack e dev+AppSec, remoto — me chama.",
  },
  seo: {
    title: "Renan Leme Menezes — Desenvolvedor Fullstack | Cyber Security",
    description:
      "Desenvolvedor Fullstack (React, Node.js, TypeScript) com foco em código seguro e AppSec. Billing multi-tenant, integrações de pagamento e tempo real em produção. Cursando pós em Offensive Cyber Security na FIAP.",
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
  },
  ui: {
    skipToContent: "Pular para o conteúdo",
    navPrimary: "Principal",
    navPrimaryMobile: "Principal (mobile)",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    heroLinks: "Links principais",
    problem: "problema",
    solution: "solução",
    result: "resultado",
    stack: "stack:",
    ariaStackOf: "Stack do projeto",
    ariaSkillsOf: "Skills de",
    ariaSkillsInTraining: "Skills em formação",
    ariaModulesOf: "Módulos de",
    publicCode: "código público",
    certificationsHeading: "Certificações",
    aptSudoPassword: "[sudo] senha para visitor:",
    aptReadingLists: "Lendo listas de pacotes... Pronto",
    aptBuildingTree: "Construindo árvore de dependências...",
    aptReadingState: "Lendo informação de estado... Pronto",
    aptConfiguring: "Configurando",
    aptDownloading: "baixando módulos…",
  },
};

export default pt;
