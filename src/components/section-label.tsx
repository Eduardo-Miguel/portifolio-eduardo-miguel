export function SectionLabel({ index, text }: { index: string; text: string }) {
  return (
    <span className="mb-3 block font-mono text-xs tracking-wider text-accent">
      [ {index}_{text} ]
    </span>
  );
}
