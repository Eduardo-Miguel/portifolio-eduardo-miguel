import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { site, siteUrl } from "@/lib/config";
import { getContent } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const content = getContent(locale);
  const path = locale === "en" ? "" : `/${locale}`;
  const canonical = `${siteUrl}${path}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: content.meta.title,
      template: `%s — ${site.name}`,
    },
    description: content.meta.description,
    keywords: content.meta.keywords,
    authors: [{ name: site.fullName, url: siteUrl }],
    creator: site.fullName,
    alternates: {
      canonical,
      languages: {
        "en-US": siteUrl,
        "pt-BR": `${siteUrl}/pt`,
        "x-default": siteUrl,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title: content.meta.title,
      description: content.meta.description,
      locale: content.meta.ogLocale,
      alternateLocale: locale === "en" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const content = getContent(locale);
  const canonical = `${siteUrl}${locale === "en" ? "" : `/${locale}`}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    alternateName: site.name,
    jobTitle: content.role,
    description: content.meta.description,
    url: canonical,
    email: `mailto:${site.email}`,
    image: `${siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campo Grande",
      addressRegion: "MS",
      addressCountry: "BR",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "React",
      "Next.js",
      "TypeScript",
      "Azure",
      "AWS",
      "SQL Server",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IFMS — Federal Institute of Mato Grosso do Sul",
    },
    worksFor: {
      "@type": "Organization",
      name: "Revelo",
    },
  };

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
