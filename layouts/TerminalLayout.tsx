import type { ReactNode } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/**
 * Layout do site: a janela de terminal — titlebar (Nav), área de conteúdo
 * e barra de status do tmux (Footer). Formado por components; as sections
 * entram como children.
 */
export default function TerminalLayout({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: Locale;
  children: ReactNode;
}) {
  return (
    <div className="geek flex min-h-svh flex-1 flex-col">
      <Nav dict={dict} lang={lang} />
      <main id="conteudo" tabIndex={-1} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
