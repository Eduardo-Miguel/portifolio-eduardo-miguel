import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function PhotoCard({ locale }: { locale: Locale }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm border-2 border-accent/30" />
      <div className="relative overflow-hidden rounded-sm border border-border bg-surface shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-[11px] text-foreground/40">
            eduardo.jpg
          </span>
        </div>
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/images/eduardo-times-square.jpg"
            alt={
              locale === "en"
                ? "Eduardo Miguel standing in Times Square, New York City, at night"
                : "Eduardo Miguel em pé na Times Square, Nova York, à noite"
            }
            fill
            sizes="(min-width: 1024px) 320px, 90vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
