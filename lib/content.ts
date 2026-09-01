/**
 * Dados INVARIANTES entre idiomas (links, identidade, portas do nmap).
 * Todo texto que traduz vive em lib/i18n/dictionaries/*. Guardrails do handoff:
 * sem telefone; pós FIAP sempre "em andamento"; painel de tickets = INTEGRAÇÃO
 * com LLM (não autoria); nunca inventar métrica/projeto.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rnmenzs.com";

/** Identidade e links — não mudam por idioma. */
export const site = {
  name: "Renan Leme Menezes",
  shortName: "renan.menezes",
  email: "renanlmenezes2003@gmail.com",
  github: "https://github.com/rnmenzs",
  linkedin: "https://www.linkedin.com/in/renanlememenezes",
  /** ⚠️ adicionar o PDF real em public/cv.pdf antes de divulgar o link */
  cvUrl: "/cv.pdf",
  /** ⚠️ virar `true` só quando public/cv.pdf existir — o link "cv.pdf" só aparece com isso */
  cvAvailable: false,
  /** usado só no JSON-LD (cidade/UF, invariante) */
  location: "Itu/SP",
} as const;

/**
 * Porta "honesta" por grupo de skill — mapeada pelo id ESTÁVEL (não pelo
 * rótulo traduzido). 3000 = dev server (frontend), 8080 = http alt (backend),
 * 5432 = Postgres, 443 = TLS (segurança), 22 = ssh (infra), 80 = http (domínio).
 */
export const skillScan: Record<string, { port: string; service: string }> = {
  frontend: { port: "3000/tcp", service: "ppp" },
  backend: { port: "8080/tcp", service: "http-proxy" },
  databases: { port: "5432/tcp", service: "postgresql" },
  security: { port: "443/tcp", service: "https" },
  infra: { port: "22/tcp", service: "ssh" },
  domain: { port: "80/tcp", service: "http" },
};

/**
 * Skills em formação = portas "filtered". Pareado por índice com
 * dict.skillsInTraining: 5000 = Kestrel/.NET · 8000 = python http.server ·
 * 9000 = cslistener · 4444 = handler padrão do Metasploit (seg. ofensiva).
 */
export const trainingScan: readonly { port: string; service: string }[] = [
  { port: "5000/tcp", service: "upnp" },
  { port: "8000/tcp", service: "http-alt" },
  { port: "9000/tcp", service: "cslistener" },
  { port: "4444/tcp", service: "krb524" },
];
