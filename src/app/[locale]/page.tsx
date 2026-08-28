import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";
import { isLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Services locale={locale} />
        <Stack locale={locale} />
        <Experience locale={locale} />
        <Projects locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <WhatsappButton locale={locale} />
    </>
  );
}
