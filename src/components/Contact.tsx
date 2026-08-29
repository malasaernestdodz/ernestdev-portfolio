import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data'
import { Reveal } from './motion'

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-line px-6 py-24 md:py-32"
    >
      <Reveal>
        <p className="font-mono text-xs font-medium tracking-[0.25em] uppercase text-accent">04</p>
        <h2
          data-testid="contact-heading"
          className="mt-6 max-w-2xl font-serif text-5xl leading-tight tracking-tight text-balance md:text-6xl"
        >
          You know what you should do?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          I&apos;m open to full-time roles and freelance work. Find me on LinkedIn or GitHub.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-ink"
          >
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-github"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">Have a great day!</p>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
