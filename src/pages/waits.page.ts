import { Page, expect } from '@playwright/test';

export class WaitsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/waits');
  }

  async getHeadingText() {
    return this.page.locator('h1.title').textContent();
  }

  async clickSimpleAlert() {
    await this.page.getByRole('button', { name: 'Simple Alert' }).click();
  }

  async waitForAndAcceptAlert(expectedText: string) {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe(expectedText);
      await dialog.accept();
    });
  }
}