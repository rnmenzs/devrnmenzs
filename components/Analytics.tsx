"use client";

import { Analytics } from "@vercel/analytics/next";

/**
 * Analytics com auto-exclusão: visitar /?va-disable marca ESTE navegador no
 * localStorage e todos os eventos dele passam a ser descartados no beforeSend
 * (o dono do site não conta nas métricas). /?va-enable desfaz. Sem storage
 * disponível, coleta normal.
 */
const DISABLE_KEY = "va-disable";

export default function AnalyticsWithOptOut() {
  // Só em produção: preview e dev local nem carregam o script.
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") return null;

  return (
    <Analytics
      beforeSend={(event) => {
        try {
          const params = new URL(event.url).searchParams;
          if (params.has("va-disable")) {
            localStorage.setItem(DISABLE_KEY, "1");
          } else if (params.has("va-enable")) {
            localStorage.removeItem(DISABLE_KEY);
          }
          if (localStorage.getItem(DISABLE_KEY) !== null) return null;
        } catch {
          /* localStorage indisponível: não há como marcar — coleta normal */
        }
        return event;
      }}
    />
  );
}
