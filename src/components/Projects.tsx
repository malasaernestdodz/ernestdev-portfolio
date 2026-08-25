import { projects } from '../data'
import { SectionHeading } from './About'

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-6 py-24"
    >
      <SectionHeading index="02" title="Featured projects" />
      <div className="flex flex-col" data-testid="project-list">
        {projects.map((project, i) => (
          <article
            key={project.name}
            data-testid="project-card"
            className={`grid gap-4 border-line py-10 md:grid-cols-[5rem_1fr] md:gap-8 ${
              i > 0 ? 'border-t' : ''
            }`}
          >
            <span className="font-mono text-sm text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-serif text-3xl tracking-tight">{project.name}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
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
