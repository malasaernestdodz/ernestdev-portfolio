import { skillGroups } from '../data'

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{title}</h2>
    </div>
  )
}

export { SectionHeading }

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-6 py-24">
      <SectionHeading index="01" title="About" />
      <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted text-pretty">
        <p>
          I&apos;m Ernest Dodz Malasa, a full-stack developer based in the Philippines. I work
          across the whole stack — from database schemas and API design to polished interfaces.
        </p>
        <p>
          My recent work centers on ERPs with role-based access control, CRMs, mobile apps, and
          AI-assisted products. I care about systems that are correct first, then pleasant to use.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" data-testid="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-accent">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm text-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
