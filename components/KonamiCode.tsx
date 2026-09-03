"use client";

import { useEffect, useRef } from "react";

/** Sequência do Konami code: ↑ ↑ ↓ ↓ ← → ← → B A. */
const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
] as const;

/** Nome do CustomEvent disparado no window quando a sequência é completada. */
export const KONAMI_EVENT = "konami:activated";

/**
 * Detector do Konami code (só o mecanismo — o efeito é plugado depois).
 * Ao completar a sequência: chama `onActivate` (se passado) e dispara um
 * CustomEvent `konami:activated` no window, para que qualquer efeito futuro
 * apenas escute o evento. Não renderiza nada.
 */
export default function KonamiCode({
  onActivate,
}: {
  onActivate?: () => void;
}) {
  // Guarda o callback numa ref para não re-registrar o listener a cada render.
  const onActivateRef = useRef(onActivate);
  onActivateRef.current = onActivate;

  useEffect(() => {
    let index = 0;

    function handleKeyDown(event: KeyboardEvent) {
      // Ignora quando o usuário está digitando em um campo editável.
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      ) {
        return;
      }

      const expected = SEQUENCE[index];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === expected) {
        index += 1;
        if (index === SEQUENCE.length) {
          index = 0;
          onActivateRef.current?.();
          window.dispatchEvent(new CustomEvent(KONAMI_EVENT));
        }
      } else {
        // Recomeça; permite que a tecla errada seja o início de nova tentativa.
        index = key === SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
