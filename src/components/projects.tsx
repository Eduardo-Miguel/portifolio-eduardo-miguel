import { getContent } from "@/lib/content";
import { site } from "@/lib/config";
import type { Locale } from "@/lib/i18n";
import { ArrowRightIcon, GithubIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Projects({ locale }: { locale: Locale }) {
  const { projects } = getContent(locale);

  return (
    <section id="projects" className="border-b border-border/70 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionLabel index="05" text={projects.sectionLabel} />
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{projects.heading}</h2>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            {projects.moreOnGithub}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, index) => (
            <Reveal key={project.name + index} delay={index * 60}>
              <div
                className={`flex h-full flex-col gap-4 rounded-sm border p-6 ${
                  project.placeholder
                    ? "border-dashed border-border/70 bg-transparent"
                    : "border-border bg-surface"
                }`}
              >
                {project.placeholder && (
                  <span className="font-mono text-[11px] tracking-wider text-foreground/40">
                    {projects.placeholderBadge}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                <p className="flex-1 text-sm leading-relaxed text-foreground/60">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent"
                  >
                    {project.link.label}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
