import { whatsappHref } from "@/lib/config";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { GridBackground } from "./grid-background";
import { ArrowRightIcon } from "./icons";

export function Hero({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden border-b border-border/70"
    >
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.badge.toUpperCase()}
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
          {hero.headingPrefix}{" "}
          <span className="text-accent italic">{hero.headingAccent}</span> {hero.headingSuffix}
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-lg font-light leading-relaxed text-foreground/70">
              {locale === "en" ? (
                <>
                  I&apos;m <strong className="font-medium text-foreground">Eduardo Miguel</strong>, a{" "}
                  <strong className="font-medium text-foreground">{content.role}</strong>. I build
                  and modernize production systems in{" "}
                  <strong className="font-medium text-foreground">C#/.NET</strong> and{" "}
                  <strong className="font-medium text-foreground">React</strong>, and keep them
                  running long after launch day.
                </>
              ) : (
                <>
                  Sou o <strong className="font-medium text-foreground">Eduardo Miguel</strong>,{" "}
                  <strong className="font-medium text-foreground">{content.role}</strong>. Eu construo
                  e modernizo sistemas em produção com{" "}
                  <strong className="font-medium text-foreground">C#/.NET</strong> e{" "}
                  <strong className="font-medium text-foreground">React</strong>, e mantenho tudo no
                  ar muito depois do lançamento.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappHref(content.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-sm bg-accent px-6 py-3 text-sm font-bold tracking-wide text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                {hero.ctaPrimary}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-sm border border-border bg-surface/60 px-6 py-3 text-sm font-bold tracking-wide text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs text-foreground/50 lg:col-span-4 lg:col-start-9">
            <div className="flex justify-between border-b border-border pb-2">
              <span>{hero.locationLabel}</span>
              <span className="text-foreground">{content.locationShort}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2 pt-2">
              <span>{hero.statusLabel}</span>
              <span className="text-accent">{content.availability.toUpperCase()}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2 pt-2">
              <span>{hero.specialtyLabel}</span>
              <span className="text-foreground">{hero.specialtyValue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
