import type { Dictionary } from "@/lib/i18n/types";

/** Diccionario en español — traducido de pt.ts. */
const es: Dictionary = {
  site: {
    headline: "Desarrollador Fullstack + Seguridad Ofensiva",
    tagline: "Construyo aplicaciones web que nacen seguras.",
    sub: "React, Node.js y TypeScript en producción. Cursando un posgrado en Offensive Cyber Security (FIAP). Itu/SP, Brasil · Remoto.",
  },
  titles: {
    about: "Sobre mí",
    projects: "Proyectos destacados",
    experience: "Experiencia",
    skills: "Stack & Skills",
    education: "Formación & Certificaciones",
    contact: "Contacto",
  },
  nav: [
    { id: "about", href: "#sobre", label: "sobre" },
    { id: "projects", href: "#projetos", label: "proyectos" },
    { id: "experience", href: "#experiencia", label: "experiencia" },
    { id: "skills", href: "#skills", label: "skills" },
    { id: "education", href: "#formacao", label: "formación" },
    { id: "contact", href: "#contato", label: "contacto" },
  ],
  about: [
    "Soy desarrollador fullstack con cerca de 2 años de producción. Construí desde cero una plataforma SaaS multi-tenant: facturación con webhooks idempotentes, reintentos y reconciliación, generación y firma digital de contratos e integraciones con pasarelas de pago. Me gusta resolver el problema de punta a punta, de la base de datos al despliegue.",
    "En el camino, mantuve un ERP corporativo en PHP, hice rastreo vehicular en tiempo real y pasé un año dando clases de programación — base de la forma en que reviso código y explico decisiones técnicas hasta hoy. Ahora curso el posgrado de Offensive Cyber Security en FIAP, uniendo los dos lados que más me interesan: construir bien y construir seguro.",
  ],
  projects: [
    {
      title: "Panel de Tickets por IA",
      problem:
        "Las conversaciones de atención en Chatwoot se convertían en reportes de bug sueltos, sin estructura ni prioridad — triaje manual y lento.",
      solution:
        "Panel integrado en Chatwoot que transforma conversaciones en tickets de bug estructurados mediante integración con LLM: prompt engineering con salida JSON validada por schema, guardas anti-alucinación, eliminación de PII y clasificación automática de prioridad.",
      highlight:
        "IA aplicada en producción con salida controlada y manejo de PII — ingeniería con validación, no una demo.",
      stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "SSE", "LLM"],
    },
    {
      title: "Billing & Firma Digital de Contratos",
      problem:
        "La nueva plataforma SaaS multi-tenant de smartGPS necesitaba facturar y formalizar contratos sin intervención manual — dinero real, el error no es una opción.",
      solution:
        "Sistema de facturación multi-tenant + generación y firma electrónica de contratos: integraciones REST/Webhooks con pasarelas de pago, webhooks idempotentes, reintentos con backoff exponencial y reconciliación.",
      highlight:
        "Integración financiera crítica con resiliencia real — idempotencia, reintentos y reconciliación en producción.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Webhooks", "REST"],
    },
  ],
  experience: [
    {
      role: "Desarrollador Fullstack",
      company: "smartGPS",
      period: "Feb 2026 – Ago 2026",
      mode: "Remoto",
      bullets: [
        "Nueva plataforma SaaS multi-tenant desde cero (React 19 / Next.js 16 / Node.js / TypeScript / PostgreSQL)",
        "Sistema completo de billing con webhooks idempotentes, reintentos con backoff exponencial y reconciliación",
        "Módulo de generación y firma digital de contratos, con integración a pasarelas de pago y APIs de firma electrónica",
        "Seguridad en producción: sesión HMAC con identidad delegada, origin trust fail-closed, aislamiento de secretos y manejo de PII",
        "Despliegue de la plataforma en contenedores (Docker Swarm) con rolling update sin downtime y migraciones idempotentes",
      ],
    },
    {
      role: "Desarrollador Fullstack",
      company: "Baron Tech",
      period: "Sep 2024 – Abr 2025",
      bullets: [
        "Desarrollo y mantenimiento de módulos en un ERP corporativo (PHP)",
        "3+ integraciones REST en producción: pasarela financiera con idempotencia, SMTP transaccional con OAuth 2.0 + refresh de token, cloud storage con reintentos y backoff",
      ],
    },
    {
      role: "Desarrollador de Software",
      company: "smartGPS",
      period: "Ago 2023 – Ago 2024",
      bullets: [
        "Sistema de rastreo vehicular en tiempo real (Node/React)",
        "Integración con APIs de localización y monitoreo; optimización de rendimiento y seguridad",
      ],
    },
    {
      role: "Instructor de Programación",
      company: "SuperGeeks",
      period: "Ago 2022 – Jul 2023",
      bullets: [
        "Clases, material didáctico y mentoría de grupos — base directa para code review y comunicación técnica",
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
    { id: "databases", group: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    {
      id: "security",
      group: "Seguridad",
      tone: "violet",
      items: [
        "OAuth 2.0",
        "JWT",
        "Sesiones HMAC",
        "Manejo de PII",
        "Aislamiento de secretos",
      ],
    },
    {
      id: "infra",
      group: "Infra & DevSecOps",
      items: ["CI/CD", "Google Cloud Storage", "Git"],
    },
    {
      id: "domain",
      group: "Dominio",
      items: [
        "Facturación",
        "Firma electrónica",
        "Pasarelas de pago",
        "IA aplicada (LLMs)",
      ],
    },
  ],
  skillsInTraining: [
    "C# / .NET",
    "Python (fundamentos + análisis de datos)",
    "GenAI & Ingeniería de Prompts",
    "Seguridad ofensiva (posgrado FIAP, en curso)",
  ],
  skillsInTrainingNote:
    "Formación formal (DIO/Alura) — aún sin uso en producción.",
  education: [
    {
      degree: "Posgrado — Offensive Cyber Security (Red Team Ops)",
      school: "FIAP Postech",
      period: "Jun 2026 – Abr 2027",
      status: "en curso · online",
      topics: [
        "Pentest",
        "Red Team Ops",
        "OSINT",
        "Web Hacking",
        "Malware Analysis",
        "Python para Red Team",
        "Purple Team",
        "IA aplicada a la seguridad",
      ],
    },
    {
      degree: "Técnico Superior en Análisis y Desarrollo de Sistemas",
      school: "Fatec Dom Amaury Castanho",
      period: "2021 – 2024",
      finalProject: {
        label:
          "Proyecto final (TCC): aplicación de Realidad Aumentada en Unity/C# para visualizar diseño de interiores en un entorno real",
        url: "https://github.com/rnmenzs/AR_interior_design",
      },
    },
  ],
  certificationTracks: [
    {
      track: "Formaciones (DIO / Alura)",
      items: [
        "Formação TypeScript Fullstack Developer — DIO, 2024 (React + Node + TS + TypeORM + pruebas)",
        "Formação C#/.NET Developer — DIO, 2025 (POO, estructura de datos, APIs, .NET)",
        "GenAI & Ingeniería de Prompts — DIO, 2026 (IA Generativa, LLMs, prompting, Copilot)",
        "Python & Análisis de Datos — DIO, 2026 (Python, análisis de datos, detección de anomalías, SQL/BI)",
        "Fundamentos de Desarrollo con PHP — DIO, 2024",
        "Accesibilidad Web — Alura (front-end inclusivo, componentes accesibles)",
      ],
    },
    {
      track: "Ciberseguridad",
      items: [
        "Bootcamp Santander Ciberseguridad — DIO, 2024 (fundamentos, pentest, deep web y anonimato, principios)",
        "Aceleración Santander — Ciberseguridad & Seguridad en Vibe Coding — DIO, 2026",
        "Introducción a la Recolección y Análisis de Seguridad Cibernética — DIO, 2026",
        "Temas de Ingeniería Social — DIO, 2026",
      ],
    },
    {
      track: "Backend/Web (Alura)",
      items: [
        "REST con Node.js (Express + MySQL)",
        "HTTP",
        "Autenticación JWT con Node/TS",
      ],
    },
  ],
  contact: {
    pitch: "Abierto a oportunidades fullstack y dev+AppSec, remoto — escríbeme.",
  },
  seo: {
    title: "Renan Leme Menezes — Desarrollador Fullstack | Cyber Security",
    description:
      "Desarrollador Fullstack (React, Node.js, TypeScript) con foco en código seguro y AppSec. Billing multi-tenant, integraciones de pago y tiempo real en producción. Cursando un posgrado en Offensive Cyber Security en FIAP.",
    ogStackLine: "React · Node.js · TypeScript · AppSec",
    keywords: [
      "Renan Leme Menezes",
      "Desarrollador Fullstack",
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "Seguridad",
      "AppSec",
      "Cyber Security",
      "Offensive Security",
    ],
  },
  ui: {
    skipToContent: "Saltar al contenido",
    navPrimary: "Principal",
    navPrimaryMobile: "Principal (móvil)",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroLinks: "Enlaces principales",
    problem: "problema",
    solution: "solución",
    result: "resultado",
    stack: "stack:",
    ariaStackOf: "Stack del proyecto",
    ariaSkillsOf: "Skills de",
    ariaSkillsInTraining: "Skills en formación",
    ariaModulesOf: "Módulos de",
    publicCode: "código público",
    certificationsHeading: "Certificaciones",
    aptSudoPassword: "[sudo] contraseña para visitor:",
    aptReadingLists: "Leyendo listas de paquetes... Hecho",
    aptBuildingTree: "Construyendo árbol de dependencias...",
    aptReadingState: "Leyendo información de estado... Hecho",
    aptConfiguring: "Configurando",
    aptDownloading: "descargando módulos…",
  },
};

export default es;
