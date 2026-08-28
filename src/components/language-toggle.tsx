import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = { en: "PT", pt: "EN" };
const targets: Record<Locale, Locale> = { en: "pt", pt: "en" };

export function LanguageToggle({ locale }: { locale: Locale }) {
  const target = targets[locale];

  return (
    <Link
      // Always go through the explicit /en or /pt path (never the bare "/"):
      // proxy.ts sets the NEXT_LOCALE cookie on that request before redirecting,
      // so a stale cookie from the *current* locale can't bounce the switch back.
      href={`/${target}`}
      aria-label={locale === "en" ? "Switch to Portuguese" : "Switch to English"}
      className="flex h-9 items-center justify-center rounded-sm border border-border px-3 font-mono text-xs font-semibold text-foreground/70 transition-colors hover:border-accent hover:text-accent"
    >
      {labels[locale]}
    </Link>
  );
}
