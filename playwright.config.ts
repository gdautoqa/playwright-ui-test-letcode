import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests', 
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 2,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: 'https://letcode.in',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Desktop Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Desktop Safari',
      use: { browserName: 'webkit' },
    },
    {
      name: 'Pixel 7',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'iPhone 14',
      use: { ...devices['iPhone 14'] },
    },
  ],
  outputDir: 'test-results/',
});