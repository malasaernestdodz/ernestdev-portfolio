export const profile = {
  name: 'Ernest Dodz Malasa',
  firstName: 'Ernest',
  roles: ['Full Stack Developer', 'Automation Engineer', 'DevOps Engineer', 'Web Scraping Engineer'],
  location: 'Quezon City, Philippines',
  github: 'https://github.com/malasaernestdodz',
  linkedin: 'https://www.linkedin.com/in/ernestdodz',
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'Uzaro Solutions Technologies Inc.',
    role: 'Junior Developer',
    period: 'Nov 2024 — Present',
    location: 'Quezon City, PH',
    points: [
      'Engineered the RBAC layer of the multi-organization 1BIS Solutions app — granular roles, scoped permissions, admin dashboards.',
      'Built the ADAM ERP SSO platform: a Jira-style template-based permission framework spanning multiple modules.',
      'Integrated Uzaro TTLock smart-door access into the PMS with dashboards and real-time webhook events.',
      'Wired Hikvision face recognition into the HRIS attendance module.',
    ],
    stack: ['React', 'MongoDB', 'Node.js', 'Webhooks', 'RBAC'],
  },
  {
    company: 'Ace International Solutions',
    role: 'Full Stack Developer · Freelance',
    period: 'Feb 2025 — Aug 2025',
    location: 'Singapore · Remote',
    points: [
      'Delivered a full Real Estate CRM covering lessees, lessors, inquiries, engagements, properties, and contracts — cutting manual tracking across the board.',
      'Shipped JiPrinters, a printing business management system that cut average quote turnaround by 30–40%.',
    ],
    stack: ['React Query', 'ShadCN', 'Supabase', 'Prisma', 'Refine'],
  },
  {
    company: 'Illustrados Creatives and Technology Inc.',
    role: 'Full Stack Developer · Contract',
    period: 'Oct 2025 — Dec 2025',
    location: 'Makati · Remote',
    points: [
      'Developed the Statement of Account feature for SureOne Insurance, with CRON jobs that auto-cancel past-due policies and handle payment actions.',
      'Built the client referral payout module and ran end-to-end testing on the Allied Bank Insurance API for post-transaction flows.',
    ],
    stack: ['CRON', 'REST APIs', 'E2E Testing'],
  },
]

export interface Project {
  name: string
  tagline: string
  description: string
  tags: string[]
  url?: string
}

export const projects: Project[] = [
  {
    name: 'Handaan',
    tagline: 'Airbnb-style catering marketplace',
    description:
      'Two-sided marketplace where caterers and restaurants list packages, menus, and availability while clients browse and request quotes. Includes a RAG-powered chatbot that answers pricing and booking questions from menu data.',
    tags: ['Next.js', 'RAG', 'Chatbot', 'Marketplace'],
    url: 'https://hadaan-web.vercel.app/',
  },
  {
    name: 'ADAM ERP — SSO',
    tagline: 'Identity & permission framework',
    description:
      'Centralized authentication for the ADAM ERP with a Jira-inspired template-based permission scheme that scales across modules and apps.',
    tags: ['SSO', 'Identity', 'Permissions'],
    url: 'https://adam-sso.web.app/bnei/home',
  },
  {
    name: 'FlickLax',
    tagline: 'Streaming app for movies & TV',
    description:
      'Android streaming app that scrapes movies and TV from various sources with TMDB metadata. Built on Media3 supporting HLS and MP4 with a responsive, polished UI.',
    tags: ['Android', 'Kotlin', 'Media3', 'TMDB', 'HLS'],
  },
  {
    name: '1BIS Solutions',
    tagline: 'Multi-organization platform',
    description:
      'RBAC layer of a multi-organization SaaS — granular roles, scoped permissions, and clean admin dashboards.',
    tags: ['React', 'MongoDB', 'RBAC'],
  },
]

export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Kotlin', 'C++', 'Lua', 'Python'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'SolidJS', 'Spring Boot', 'Prisma', 'React Query', 'ShadCN'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Firestore', 'Supabase'],
  },
  {
    title: 'Tools',
    skills: ['Docker', 'Git', 'Jira', 'VS Code', 'Cursor', 'Claude Dev'],
  },
]
