import { experience } from '../data'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-6 py-24"
    >
      <SectionHeading index="02" title="Experience" />
      <div className="flex flex-col" data-testid="experience-list">
        {experience.map((job, i) => (
          <article
            key={job.company}
            data-testid="experience-card"
            className={`grid gap-4 border-line py-10 md:grid-cols-[10rem_1fr] md:gap-8 ${
              i > 0 ? 'border-t' : ''
            }`}
          >
            <p className="font-mono text-xs leading-relaxed text-muted">{job.period}</p>
            <div>
              <h3 className="text-lg font-semibold">{job.company}</h3>
              <p className="mt-0.5 text-sm text-accent">{job.role}</p>
              <p className="mt-0.5 text-sm text-muted">{job.location}</p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="max-w-2xl leading-relaxed text-muted text-pretty">
                    <span className="mr-2 text-accent">—</span>
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
