import { site, whatsappHref } from "@/lib/config";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { ContactForm } from "./contact-form";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Contact({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { contact } = content;

  const channels = [
    { label: site.email, href: `mailto:${site.email}`, icon: MailIcon },
    { label: site.phoneDisplay, href: whatsappHref(content.whatsappMessage), icon: WhatsappIcon },
    { label: site.linkedinHandle, href: site.linkedin, icon: LinkedinIcon },
    { label: site.githubHandle, href: site.github, icon: GithubIcon },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel index="06" text={contact.sectionLabel} />
            <h2 className="mb-6 text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl">
              {contact.headingPrefix}{" "}
              <span className="text-accent italic">{contact.headingAccent}</span>
              {contact.headingSuffix}
            </h2>
            <p className="mb-8 text-foreground/60">
              {content.location} — {contact.blurb}
            </p>
            <ul className="space-y-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border transition-colors group-hover:border-accent">
                      <channel.icon className="h-4 w-4" />
                    </span>
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-surface p-6 sm:p-8">
              <ContactForm contact={contact} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
