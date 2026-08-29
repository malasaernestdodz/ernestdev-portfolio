import { profile } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import { GithubIcon, LinkedinIcon } from './icons'
import { Item, Stagger } from './motion'

export function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <Stagger testId="hero-stagger">
        <Item>
          <p
            data-testid="hero-name"
            className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-accent"
          >
            {profile.name}
          </p>
        </Item>
        <Item>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
            Hello there, I&apos;m Ernest. Passionate in creation.
          </h1>
        </Item>
        <Item>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            Full-stack developer in {profile.location} — building ERPs with RBAC, marketplaces,
            mobile apps, and AI-assisted products.
          </p>
          <p data-testid="hero-typewriter" className="mt-4 font-mono text-sm text-muted">
            <span className="text-accent" data-testid="hero-typed">
              {typed}
            </span>
            <span aria-hidden="true" className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-accent align-middle" />
          </p>
        </Item>
        <Item>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-ink"
            >
              View projects
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              Get in touch
            </a>
          </div>
        </Item>
        <Item>
          <div className="mt-12 flex items-center gap-5 text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              data-testid="hero-github"
              className="transition-colors hover:text-ink"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              data-testid="hero-linkedin"
              className="transition-colors hover:text-ink"
            >
              <LinkedinIcon />
            </a>
          </div>
        </Item>
      </Stagger>
    </section>
  )
}
