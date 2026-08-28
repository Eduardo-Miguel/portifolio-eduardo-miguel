import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale as Locale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  return preferred.startsWith("pt") ? "pt" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Canonicalize any accidental /en URL to the unprefixed root — avoids duplicate-content URLs.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    const response = NextResponse.redirect(url);
    response.cookies.set(COOKIE_NAME, "en", { maxAge: COOKIE_MAX_AGE, path: "/" });
    return response;
  }

  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, "pt", { maxAge: COOKIE_MAX_AGE, path: "/" });
    return response;
  }

  const locale = detectLocale(request);

  if (locale === "pt") {
    const url = request.nextUrl.clone();
    url.pathname = "/pt" + pathname;
    const response = NextResponse.redirect(url);
    response.cookies.set(COOKIE_NAME, "pt", { maxAge: COOKIE_MAX_AGE, path: "/" });
    return response;
  }

  // English: rewrite internally to /en so app/[locale] resolves it, while the
  // address bar keeps the clean, unprefixed URL.
  const url = request.nextUrl.clone();
  url.pathname = "/en" + pathname;
  const response = NextResponse.rewrite(url);
  response.cookies.set(COOKIE_NAME, "en", { maxAge: COOKIE_MAX_AGE, path: "/" });
  return response;
}

export const config = {
  // Only the site's real routes. Metadata routes (sitemap.xml, robots.txt, icon,
  // opengraph-image, manifest.webmanifest) live outside app/[locale] and are
  // deliberately not listed here, so this middleware never touches them.
  matcher: ["/", "/en", "/en/:path*", "/pt", "/pt/:path*"],
};
