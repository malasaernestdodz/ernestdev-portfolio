import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-6 py-24"
    >
      <SectionHeading index="03" title="Featured projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2" data-testid="project-list">
        {projects.map((project) => {
          const Card = (
            <article
              data-testid="project-card"
              className="flex h-full flex-col rounded-lg border border-line bg-surface p-8 transition-colors hover:border-accent"
            >
              <p className="font-mono text-xs tracking-wide uppercase text-accent">
                {project.tagline}
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight">{project.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted text-pretty">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          )
          return project.url ? (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-link-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="group relative"
            >
              {Card}
              <ArrowUpRight
                size={18}
                className="absolute right-8 top-8 text-muted transition-colors group-hover:text-accent"
              />
            </a>
          ) : (
            <div key={project.name}>{Card}</div>
          )
        })}
      </div>
    </section>
  )
}
