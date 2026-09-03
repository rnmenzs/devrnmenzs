import type { Dictionary } from "@/lib/i18n/types";

/** English dictionary — translated from pt.ts. */
const en: Dictionary = {
  site: {
    headline: "Fullstack Developer + Offensive Security",
    tagline: "I build web apps that are secure from day one.",
    sub: "React, Node.js, and TypeScript in production. Pursuing a postgrad in Offensive Cyber Security (FIAP). Itu/SP, Brazil · Remote.",
  },
  titles: {
    about: "About",
    projects: "Featured Projects",
    experience: "Experience",
    skills: "Stack & Skills",
    education: "Education & Certifications",
    contact: "Contact",
  },
  nav: [
    { id: "about", href: "#sobre", label: "about" },
    { id: "projects", href: "#projetos", label: "projects" },
    { id: "experience", href: "#experiencia", label: "experience" },
    { id: "skills", href: "#skills", label: "skills" },
    { id: "education", href: "#formacao", label: "education" },
    { id: "contact", href: "#contato", label: "contact" },
  ],
  about: [
    "I'm a fullstack developer with around 2 years in production. I built a multi-tenant SaaS platform from scratch: billing with idempotent webhooks, retry and reconciliation, contract generation and digital signing, and payment gateway integrations. I like solving the problem end to end, from the database to the deploy.",
    "Along the way, I maintained a corporate ERP in PHP, built real-time vehicle tracking, and spent a year teaching programming — the foundation for how I review code and explain technical decisions to this day. I'm now pursuing a postgrad in Offensive Cyber Security at FIAP, bringing together the two sides that interest me most: building well and building secure.",
  ],
  projects: [
    {
      title: "AI-Powered Ticket Panel",
      problem:
        "Support conversations in Chatwoot turned into scattered bug reports, with no structure or priority — manual, slow triage.",
      solution:
        "A panel embedded in Chatwoot that turns conversations into structured bug tickets via LLM integration: prompt engineering with schema-validated JSON output, anti-hallucination guards, PII removal, and automatic priority classification.",
      highlight:
        "AI applied in production with controlled output and PII handling — engineering with validation, not a demo.",
      stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "SSE", "LLM"],
    },
    {
      title: "Billing & Digital Contract Signing",
      problem:
        "smartGPS's new multi-tenant SaaS platform needed to bill and formalize contracts without manual intervention — real money, errors aren't an option.",
      solution:
        "A multi-tenant billing system + contract generation and e-signature: REST/Webhooks integrations with payment gateways, idempotent webhooks, retry with exponential backoff, and reconciliation.",
      highlight:
        "Critical financial integration with real resilience — idempotency, retry, and reconciliation in production.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Webhooks", "REST"],
    },
  ],
  experience: [
    {
      role: "Fullstack Developer",
      company: "smartGPS",
      period: "Feb 2026 – Aug 2026",
      mode: "Remote",
      bullets: [
        "New multi-tenant SaaS platform from scratch (React 19 / Next.js 16 / Node.js / TypeScript / PostgreSQL)",
        "Complete billing system with idempotent webhooks, retry with exponential backoff, and reconciliation",
        "Contract generation and digital signing module, with integration to payment gateways and e-signature APIs",
        "Security in production: HMAC session with delegated identity, fail-closed origin trust, secrets isolation, and PII handling",
        "Platform deploy in containers (Docker Swarm) with zero-downtime rolling updates and idempotent migrations",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Baron Tech",
      period: "Sep 2024 – Apr 2025",
      bullets: [
        "Development and maintenance of modules in a corporate ERP (PHP)",
        "3+ REST integrations in production: financial gateway with idempotency, transactional SMTP with OAuth 2.0 + token refresh, cloud storage with retry and backoff",
      ],
    },
    {
      role: "Software Developer",
      company: "smartGPS",
      period: "Aug 2023 – Aug 2024",
      bullets: [
        "Real-time vehicle tracking system (Node/React)",
        "Integration with location and monitoring APIs; performance and security optimization",
      ],
    },
    {
      role: "Programming Instructor",
      company: "SuperGeeks",
      period: "Aug 2022 – Jul 2023",
      bullets: [
        "Classes, teaching materials, and class mentoring — a direct foundation for code review and technical communication",
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
      items: ["Node.js", "Express", "PHP", "REST APIs", "Webhooks"],
    },
    { id: "databases", group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    {
      id: "security",
      group: "Security",
      tone: "violet",
      items: [
        "OAuth 2.0",
        "JWT",
        "HMAC sessions",
        "PII handling",
        "Secrets isolation",
      ],
    },
    {
      id: "infra",
      group: "Infra & DevSecOps",
      items: ["CI/CD", "Google Cloud Storage", "Git"],
    },
    {
      id: "domain",
      group: "Domain",
      items: [
        "Billing",
        "E-signature",
        "Payment gateways",
        "Applied AI (LLMs)",
      ],
    },
  ],
  skillsInTraining: [
    "C# / .NET",
    "Python (fundamentals + data analysis)",
    "GenAI & Prompt Engineering",
    "Offensive security (FIAP postgrad, in progress)",
  ],
  skillsInTrainingNote:
    "Formal coursework (DIO/Alura) — not yet used in production.",
  education: [
    {
      degree: "Postgraduate — Offensive Cyber Security (Red Team Ops)",
      school: "FIAP Postech",
      period: "Jun 2026 – Apr 2027",
      status: "in progress · online",
      topics: [
        "Pentest",
        "Red Team Ops",
        "OSINT",
        "Web Hacking",
        "Malware Analysis",
        "Python for Red Team",
        "Purple Team",
        "AI applied to security",
      ],
    },
    {
      degree: "Associate Degree in Systems Analysis and Development",
      school: "Fatec Dom Amaury Castanho",
      period: "2021 – 2024",
      finalProject: {
        label:
          "Capstone project: an Augmented Reality app in Unity/C# for visualizing interior design in a real-world environment",
        url: "https://github.com/rnmenzs/AR_interior_design",
      },
    },
  ],
  certificationTracks: [
    {
      track: "Courses (DIO / Alura)",
      items: [
        "TypeScript Fullstack Developer track — DIO, 2024 (React + Node + TS + TypeORM + tests)",
        "C#/.NET Developer track — DIO, 2025 (OOP, data structures, APIs, .NET)",
        "GenAI & Prompt Engineering — DIO, 2026 (Generative AI, LLMs, prompting, Copilot)",
        "Python & Data Analysis — DIO, 2026 (Python, data analysis, anomaly detection, SQL/BI)",
        "PHP Development Fundamentals — DIO, 2024",
        "Web Accessibility — Alura (inclusive front-end, accessible components)",
      ],
    },
    {
      track: "Cybersecurity",
      items: [
        "Santander Cybersecurity Bootcamp — DIO, 2024 (fundamentals, pentest, deep web & anonymity, principles)",
        "Santander Acceleration — Cybersecurity & Security in Vibe Coding — DIO, 2026",
        "Introduction to Cybersecurity Data Collection & Analysis — DIO, 2026",
        "Topics in Social Engineering — DIO, 2026",
        "Essential Cybersecurity: Foundations for Data & AI Projects — DIO, 2026",
        "Introduction to DevSecOps — DIO, 2026",
        "Trends in AI and Cybersecurity Applied to the Final Project — DIO, 2026",
      ],
    },
    {
      track: "Backend/Web (Alura)",
      items: [
        "REST with Node.js (Express + MySQL)",
        "HTTP",
        "JWT Authentication with Node/TS",
      ],
    },
  ],
  contact: {
    pitch: "Open to fullstack and dev+AppSec roles, remote — get in touch.",
  },
  seo: {
    title: "Renan Leme Menezes — Fullstack Developer | Cyber Security",
    description:
      "Fullstack Developer (React, Node.js, TypeScript) focused on secure code and AppSec. Multi-tenant billing, payment integrations, and real-time systems in production. Pursuing a postgrad in Offensive Cyber Security at FIAP.",
    ogStackLine: "React · Node.js · TypeScript · AppSec",
    keywords: [
      "Renan Leme Menezes",
      "Fullstack Developer",
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "Security",
      "AppSec",
      "Cyber Security",
      "Offensive Security",
    ],
  },
  ui: {
    skipToContent: "Skip to content",
    navPrimary: "Primary",
    navPrimaryMobile: "Primary (mobile)",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroLinks: "Main links",
    problem: "problem",
    solution: "solution",
    result: "result",
    stack: "stack:",
    ariaStackOf: "Stack for project",
    ariaSkillsOf: "Skills for",
    ariaSkillsInTraining: "Skills in training",
    ariaModulesOf: "Modules of",
    publicCode: "public code",
    certificationsHeading: "Certifications",
    aptSudoPassword: "[sudo] password for visitor:",
    aptReadingLists: "Reading package lists... Done",
    aptBuildingTree: "Building dependency tree...",
    aptReadingState: "Reading state information... Done",
    aptConfiguring: "Setting up",
    aptDownloading: "downloading modules…",
  },
};

export default en;
