export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-widest uppercase">
          ernest<span className="text-accent">.</span>dodz
        </a>
        <div className="flex items-center gap-6">
          <a href="#about" data-testid="nav-about" className="text-sm text-muted transition-colors hover:text-ink">
            About
          </a>
          <a href="#experience" data-testid="nav-experience" className="text-sm text-muted transition-colors hover:text-ink">
            Experience
          </a>
          <a href="#projects" data-testid="nav-projects" className="text-sm text-muted transition-colors hover:text-ink">
            Projects
          </a>
          <a href="#contact" data-testid="nav-contact" className="text-sm text-muted transition-colors hover:text-ink">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
