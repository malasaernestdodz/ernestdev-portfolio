import { profile } from '../data'

export function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-36">
      <p
        data-testid="hero-name"
        className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-accent"
      >
        {profile.name}
      </p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
        Hello there, I&apos;m Ernest. Passionate in creation.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted text-pretty">
        Full-stack developer building modern web, mobile, ERP, RBAC, and AI-assisted systems.
      </p>
      <div className="mt-10 flex items-center gap-4">
        <a
          href="#projects"
          data-testid="hero-cta-projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
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
    </section>
  )
}
