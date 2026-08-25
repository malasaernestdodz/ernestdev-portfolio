import { expect, test } from '@playwright/test'
import { experience, profile, projects, skillGroups } from '../src/data'

test('page loads with correct title and meta', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Ernest Dodz Malasa/)
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /full-stack developer/i,
  )
})

test('hero shows name and headline', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('hero-name')).toHaveText(profile.name)
  await expect(page.locator('h1')).toContainText("Hello there, I'm Ernest")
})

test('nav links scroll to their sections', async ({ page }) => {
  await page.goto('/')
  for (const id of ['about', 'experience', 'projects', 'contact']) {
    await page.getByTestId(`nav-${id}`).click()
    const section = page.locator(`#${id}`)
    await expect(section).toBeVisible()
    await expect(section).toBeInViewport()
  }
})

test('all skill groups render with their skills', async ({ page }) => {
  await page.goto('/')
  const groups = page.getByTestId('skill-groups').locator('> div')
  await expect(groups).toHaveCount(skillGroups.length)
  for (const group of skillGroups) {
    for (const skill of group.skills) {
      await expect(
        page.getByTestId('skill-groups').getByRole('listitem').getByText(skill, { exact: true }),
      ).toBeVisible()
    }
  }
})

test('all experience entries render with role and stack', async ({ page }) => {
  await page.goto('/')
  const cards = page.getByTestId('experience-card')
  await expect(cards).toHaveCount(experience.length)
  for (const job of experience) {
    const card = cards.filter({ hasText: job.company })
    await expect(card).toBeVisible()
    await expect(card).toContainText(job.role)
    await expect(card).toContainText(job.period)
    for (const point of job.points) {
      await expect(card).toContainText(point.slice(0, 40))
    }
  }
})

test('all featured projects render with tags and live links', async ({ page }) => {
  await page.goto('/')
  const cards = page.getByTestId('project-card')
  await expect(cards).toHaveCount(projects.length)
  for (const project of projects) {
    const card = cards.filter({ hasText: project.name })
    await expect(card).toBeVisible()
    await expect(card).toContainText(project.tagline)
    for (const tag of project.tags) {
      await expect(card).toContainText(tag)
    }
    if (project.url) {
      const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      await expect(page.getByTestId(`project-link-${slug}`)).toHaveAttribute('href', project.url)
    }
  }
})

test('live project links are reachable', async ({ request }) => {
  for (const project of projects.filter((p) => p.url)) {
    const res = await request.get(project.url!)
    expect(res.status()).toBeLessThan(400)
  }
})

test('contact links point to the right profiles', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('contact-heading')).toContainText('You know what you should do?')
  await expect(page.getByTestId('contact-linkedin')).toHaveAttribute('href', profile.linkedin)
  await expect(page.getByTestId('contact-github')).toHaveAttribute('href', profile.github)
  await expect(page.getByTestId('hero-github')).toHaveAttribute('href', profile.github)
  await expect(page.getByTestId('hero-linkedin')).toHaveAttribute('href', profile.linkedin)
})

test('github profile link is reachable', async ({ request }) => {
  const gh = await request.get(profile.github)
  expect(gh.status()).toBe(200)
})
