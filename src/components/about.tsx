import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { PhotoCard } from "./photo-card";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";
import { TerminalCard } from "./terminal-card";

export function About({ locale }: { locale: Locale }) {
  const { about } = getContent(locale);

  return (
    <section id="about" className="border-b border-border/70 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          <div className="w-full max-w-sm space-y-6 self-start lg:sticky lg:top-32 lg:w-4/12">
            <Reveal>
              <PhotoCard locale={locale} />
            </Reveal>
            <Reveal delay={100}>
              <TerminalCard locale={locale} />
            </Reveal>
          </div>

          <div className="w-full lg:w-8/12 lg:pl-8">
            <Reveal>
              <SectionLabel index="01" text={about.sectionLabel} />
              <h2 className="text-3xl font-bold leading-tight text-balance text-foreground sm:text-5xl">
                {about.headingPrefix}{" "}
                <span className="text-accent italic">{about.headingAccent}</span>
                {about.headingSuffix}
              </h2>
            </Reveal>

            <div className="mb-12 mt-8 space-y-6 text-lg font-light leading-relaxed text-foreground/70">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={100 * (index + 1)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="group bg-surface p-6 transition-colors hover:bg-background sm:p-8">
                    <span className="mb-3 block font-mono text-xs text-foreground/50 group-hover:text-accent">
                      {stat.label}
                    </span>
                    <div className="mb-1 text-4xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-xs text-foreground/50">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
