import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Experience({ locale }: { locale: Locale }) {
  const { experience } = getContent(locale);

  return (
    <section id="experience" className="border-b border-border/70 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel index="04" text={experience.sectionLabel} />
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{experience.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <ol className="relative space-y-10 border-l border-border pl-8 lg:col-span-8">
            {experience.items.map((entry, index) => (
              <Reveal as="li" key={entry.title + entry.date} delay={index * 60} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="mb-1 block font-mono text-xs text-foreground/50">{entry.date}</span>
                <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                <p className="mb-3 text-sm text-foreground/60">
                  {entry.company}
                  {entry.companyDetail ? ` · ${entry.companyDetail}` : ""}
                </p>
                <ul className="space-y-1.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-foreground/70">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-10 lg:col-span-4">
            <Reveal>
              <h3 className="mb-4 font-mono text-xs tracking-wider text-foreground/50">
                {experience.educationLabel}
              </h3>
              <div className="space-y-4">
                {experience.education.map((item) => (
                  <div key={item.degree}>
                    <p className="text-sm font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-foreground/60">{item.school}</p>
                    <p className="font-mono text-xs text-foreground/40">{item.date}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="mb-4 font-mono text-xs tracking-wider text-foreground/50">
                {experience.certificationsLabel}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">{experience.certificationsNote}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
