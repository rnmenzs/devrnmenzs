"use client";

import { useEffect, useState } from "react";
import { KONAMI_EVENT } from "@/components/KonamiCode";
import { HOST } from "@/components/prompt";

/**
 * Efeito do Konami code: escalação de privilégio. Ao ouvir `konami:activated`,
 * seta data-root no <html> (os prompts viram root@…#, ver app/geek.css) e
 * mostra um toast de "access granted" que some sozinho. O estado root persiste
 * até recarregar a página.
 */
export default function RootMode() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    function activate() {
      document.documentElement.dataset.root = "true";
      setShowToast(true);
    }
    window.addEventListener(KONAMI_EVENT, activate);
    return () => window.removeEventListener(KONAMI_EVENT, activate);
  }, []);

  useEffect(() => {
    if (!showToast) return;
    const id = window.setTimeout(() => setShowToast(false), 4500);
    return () => window.clearTimeout(id);
  }, [showToast]);

  if (!showToast) return null;

  return (
    <div role="status" aria-live="polite" className="root-toast font-mono">
      <p aria-hidden="true">
        <span className="text-accent">visitor</span>
        <span className="text-muted">@{HOST}:</span>
        <span className="g-cyan">~</span>
        <span className="text-muted">$ </span>
        <span className="text-accent">sudo</span> su <span className="g-cyan">-</span>
      </p>
      <p aria-hidden="true" className="g-dim">
        [sudo] password for visitor:
      </p>
      <p>
        <span className="g-red">root@{HOST}:~#</span>{" "}
        <span className="text-fg">privilege escalated — access granted</span>
      </p>
    </div>
  );
}
