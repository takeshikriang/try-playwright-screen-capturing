import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    ignoreHTTPSErrors: true
  },
  projects: [
    // Safari
    {
      name: 'safari-mobile',
      use: { ...devices['iPhone 8'] }
    },
    {
      name: 'safari-tablet',
      use: { ...devices['iPad Pro 11'] }
    },
    {
      name: 'safari-desktop',
      use: { ...devices['Desktop Safari'] }
    }
    // Chrome
    // {
    //   name: 'chrome-mobile',
    //   use: { ...devices['Pixel 5'] }
    // },
    // {
    //   name: 'chrome-tablet',
    //   use: { ...devices['Galaxy Tab S'] }
    // },
    // {
    //   name: 'chrome-desktop',
    //   use: { ...devices['Desktop Chrome'] }
    // },
    // Firefox
    // {
    //   name: 'firefox-desktop ',
    //   use: { ...devices['Desktop Firefox'] }
    // }
  ]
}

export default config
