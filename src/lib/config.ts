const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eduardomiguel.dev";

/** Guarantees no trailing slash, so callers can safely do `${siteUrl}/path`. */
export const siteUrl = RAW_SITE_URL.replace(/\/+$/, "");

/** Facts that don't change between locales — contact details, handles, links. */
export const site = {
  name: "Eduardo Miguel",
  fullName: "Eduardo Miguel Santos Pinto",
  email: "eduardomigueldev@gmail.com",
  phoneDisplay: "+55 67 99321-1525",
  whatsappNumber: "5567993211525",
  github: "https://github.com/Eduardo-Miguel",
  githubHandle: "@Eduardo-Miguel",
  linkedin: "https://www.linkedin.com/in/eduardomigueldev",
  linkedinHandle: "in/eduardomigueldev",
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
