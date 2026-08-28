import { whatsappHref } from "@/lib/config";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { WhatsappIcon } from "./icons";

export function WhatsappButton({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  return (
    <a
      href={whatsappHref(content.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
