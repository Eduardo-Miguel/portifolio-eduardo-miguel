import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Stack({ locale }: { locale: Locale }) {
  const { stack } = getContent(locale);

  return (
    <section id="stack" className="border-b border-border/70 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel index="03" text={stack.sectionLabel} />
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{stack.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 60}>
              <h3 className="mb-4 font-mono text-xs tracking-wider text-foreground/50">
                {group.label.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
