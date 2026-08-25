export const profile = {
  name: 'Ernest Dodz Malasa',
  firstName: 'Ernest',
  roles: ['Full-Stack Developer', 'Software Engineer'],
  location: 'Philippines',
  github: 'https://github.com/malasaernestdodz',
  linkedin: 'https://www.linkedin.com/in/ernestdodz',
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'SvelteKit', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'Spring Boot', 'Drizzle ORM', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Tools & Platform',
    skills: ['Git', 'GitHub Actions', 'Firebase', 'Vercel'],
  },
]

export interface Project {
  name: string
  description: string
  tech: string[]
}

export const projects: Project[] = [
  {
    name: 'Inventory Management System',
    description:
      'Inventory system for handling categories, suppliers, and products end to end. Built with SvelteKit and Drizzle, with authentication handled by Better Auth.',
    tech: ['SvelteKit', 'Drizzle ORM', 'Better Auth'],
  },
  {
    name: 'Task Manager',
    description:
      'Full-stack web application for managing tasks. Built with Spring Boot and Supabase Auth, with CI/CD wired up through GitHub Actions.',
    tech: ['Spring Boot', 'Supabase Auth', 'GitHub Actions'],
  },
  {
    name: 'Goal Manifest',
    description:
      'Social platform where users create accounts and manifest their goals together. Built on the latest Next.js server actions with Drizzle as the ORM.',
    tech: ['Next.js', 'Server Actions', 'Drizzle ORM'],
  },
  {
    name: 'Movie Explorer',
    description:
      'Application for searching and browsing favorite movies and TV shows. Built with Next.js on top of the TMDB API.',
    tech: ['Next.js', 'TMDB API'],
  },
  {
    name: 'Product CRUD App',
    description:
      'Product catalog with full create, read, update, and delete flows. Built with the Next.js app router using server-side data fetching and revalidation.',
    tech: ['Next.js', 'App Router', 'SSR'],
  },
]
