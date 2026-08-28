import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function TerminalCard({ locale }: { locale: Locale }) {
  const content = getContent(locale);

  const lines = [
    { prompt: "whoami", output: "eduardo-miguel" },
    { prompt: "role --current", output: content.role },
    { prompt: "stack --top", output: content.terminal.stackValue },
    { prompt: "location", output: `${content.locationShort} (${locale === "en" ? "remote" : "remoto"})` },
    { prompt: "status", output: content.availability },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm border-2 border-accent/30" />
      <div className="relative overflow-hidden rounded-sm border border-border bg-surface shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-[11px] text-foreground/40">bash</span>
        </div>
        <div className="space-y-3 p-6 font-mono text-sm">
          {lines.map((line) => (
            <div key={line.prompt}>
              <div className="text-foreground/40">
                <span className="text-accent">➜</span> ~ {line.prompt}
              </div>
              <div className="text-foreground">{line.output}</div>
            </div>
          ))}
          <div className="flex items-center gap-2 text-foreground/40">
            <span className="text-accent">➜</span> ~
            <span className="inline-block h-4 w-2 animate-pulse bg-accent/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
