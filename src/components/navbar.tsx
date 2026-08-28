"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/config";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { CloseIcon, MenuIcon } from "./icons";

export function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          eduardo<span className="text-accent">.</span>miguel
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <ThemeToggle ariaLabel={content.ariaThemeToggle} />
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent md:inline-block"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={content.ariaMenuToggle}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-border md:hidden"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
