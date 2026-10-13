import { test, expect } from '@playwright/test'

test.describe('Private Employer Job Application Flow', () => {
  test('Candidate accesses private job invite link, submits details, and is routed to tailored AI interview', async ({ page }) => {
    // 1. Candidate lands on private job URL
    await page.goto('/apply/techcitta-sr-frontend')

    // Verify job title and company are displayed
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Senior Frontend Developer/i)
    await expect(page.getByText('TechCitta Solutions').first()).toBeVisible()

    // Verify requirements & skills tags
    await expect(page.getByText('React', { exact: true })).toBeVisible()
    await expect(page.getByText('TypeScript', { exact: true })).toBeVisible()

    // 2. Candidate fills application form
    await page.locator('input[placeholder="e.g. Arjun Sharma"]').fill('Rhea Sengupta')
    await page.locator('input[placeholder="you@example.com"]').fill('rhea.sengupta@testtalent.com')
    await page.locator('input[placeholder*="+91"]').fill('+91 98765 12345')

    // 3. Submit application
    const submitBtn = page.getByRole('button', { name: /Start AI Interview Now/i })
    await expect(submitBtn).toBeVisible()
    await submitBtn.click()

    // 4. Verify redirected to /interview with target job auto-configured
    await page.waitForURL('**/interview', { timeout: 10000 })
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/meet your interviewer Ava/i)
    await expect(page.getByText(/Auto-Selected for Job Application/i)).toBeVisible()
    await expect(page.getByText('Senior Frontend Developer').first()).toBeVisible()
  })
})
