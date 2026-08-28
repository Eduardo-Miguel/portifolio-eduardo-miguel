import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { serviceIcons } from "./icons";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Services({ locale }: { locale: Locale }) {
  const { services } = getContent(locale);

  return (
    <section id="services" className="border-b border-border/70 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 max-w-2xl">
          <SectionLabel index="02" text={services.sectionLabel} />
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{services.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={index * 60}>
                <div className="group flex h-full flex-col gap-4 bg-surface p-8 transition-colors hover:bg-background">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/60">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
