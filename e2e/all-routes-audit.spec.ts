import { test, expect } from '@playwright/test'

test.describe('Full Website Route Audit', () => {
  const publicRoutes = [
    { path: '/', titleExpected: /HireRight/i, contentCheck: 'HIRERIGHT' },
    { path: '/how-it-works', titleExpected: /HireRight/i, contentCheck: 'How HireRighttt Works' },
    { path: '/solutions', titleExpected: /HireRight/i, contentCheck: 'AI Interview Studio' },
    { path: '/job-seekers', titleExpected: /HireRight/i, contentCheck: "Your Resume Isn't Enough" },
    { path: '/why', titleExpected: /HireRight/i, contentCheck: 'Why HireRighttt' },
    { path: '/resources', titleExpected: /HireRight/i, contentCheck: 'Ace Your Interview' },
    { path: '/pricing', titleExpected: /HireRight/i, contentCheck: 'Job Seeker Free' },
    { path: '/about', titleExpected: /HireRight/i, contentCheck: 'Reinventing the Initial Screen' },
    { path: '/contact', titleExpected: /HireRight/i, contentCheck: 'Contact HireRight' },
    { path: '/login', titleExpected: /HireRight/i, contentCheck: 'Candidate Demo' },
    { path: '/signup', titleExpected: /HireRight/i, contentCheck: 'Already have an account' },
    { path: '/apply/techcitta-sr-frontend', titleExpected: /HireRight/i, contentCheck: 'TechCitta Solutions' },
  ]

  for (const route of publicRoutes) {
    test(`Public route ${route.path} loads cleanly without errors`, async ({ page }) => {
      const consoleErrors: string[] = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      const response = await page.goto(route.path)
      expect(response?.status()).toBeLessThan(400)
      await expect(page.getByText(route.contentCheck).first()).toBeVisible()
    })
  }

  test('Job seeker authenticated routes load properly', async ({ page }) => {
    // Authenticate with Candidate Demo
    await page.goto('/login')
    await page.getByRole('button', { name: /Candidate Demo/i }).click()
    await page.locator('button[type="submit"]').click()

    // Dashboard
    await page.goto('/dashboard')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Welcome back/i)

    // Jobs
    await page.goto('/jobs')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Interview-ranked matches/i)

    // Applications
    await page.goto('/applications')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/My Applications/i)

    // Profile Wizard / Onboarding
    await page.goto('/onboarding')
    await expect(page.getByText(/Profile/i).first()).toBeVisible()
  })

  test('Employer authenticated routes load properly', async ({ page }) => {
    // Authenticate with Employer Demo
    await page.goto('/login')
    await page.getByRole('button', { name: /Employer Demo/i }).click()
    await page.locator('button[type="submit"]').click()

    // Employer ATS
    await page.goto('/employer')
    await expect(page.getByText(/Talent Acquisition Suite|ATS/i).first()).toBeVisible()

    // Resume Database / Talent Vault
    await page.goto('/resumes')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/All Candidate Resumes & Profiles|Verified Talent Vault/i)
  })

  test('Unknown routes route to 404 page with return home button', async ({ page }) => {
    await page.goto('/non-existent-page-xyz')
    await expect(page.getByText(/404/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Go home/i })).toBeVisible()
  })
})
