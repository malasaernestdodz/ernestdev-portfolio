export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{title}</h2>
    </div>
  )
}
