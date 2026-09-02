import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Roteamento de idioma: PT-BR (default) vive na raiz, sem prefixo.
 * - "/" serve internamente o conteúdo de "/pt" (a URL continua "/").
 * - "/pt" redireciona para "/" (evita conteúdo duplicado indexável).
 * - "/en" e "/es" seguem normalmente; sub-recursos (ex.: /pt/opengraph-image)
 *   passam intactos.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/pt" || pathname === "/pt/") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/pt";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Ignora _next e qualquer caminho com extensão (assets/metadata como .xml/.txt/.ico).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
