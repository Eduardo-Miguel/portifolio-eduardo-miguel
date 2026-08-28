import { site } from "@/lib/config";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  const navLinks = [
    { href: "#about", label: content.nav.about },
    { href: "#services", label: content.nav.services },
    { href: "#stack", label: content.nav.stack },
    { href: "#experience", label: content.nav.experience },
    { href: "#projects", label: content.nav.projects },
    { href: "#contact", label: content.nav.contact },
  ];

  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            eduardo<span className="text-accent">.</span>miguel
          </p>
          <p className="mt-1 text-xs text-foreground/40">
            © {new Date().getFullYear()} {site.fullName}. {content.footer.tagline}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-foreground/50 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
