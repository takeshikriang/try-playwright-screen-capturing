import { test, expect } from '@playwright/test'

test.describe('screenshot', async () => {
  test.afterEach(async ({ page }, info) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    await page.screenshot({
      path: `screenshots/${info.project.name}.png`,
      fullPage: true,
      quality: 70,
      type: 'jpeg'
    })
  })

  test('Homepage', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveURL('https://playwright.dev/')
  })
})
