import { Page } from '@playwright/test';

export class SliderPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/slider');
  }

  async getHeadingText() {
    return this.page.locator('h1.title').textContent();
  }

  async fillWordLimit(value: string) {
    await this.page.locator('#generate').fill(value);
  }

  async getWordLimitValue() {
    return this.page.locator('#generate').inputValue();
  }

  async clickGetCountries() {
    await this.page.getByRole('button', { name: 'Get Countries' }).click();
  }

  async getCountries() {
    return this.page.locator('.has-text-primary-light').allTextContents();
  }
}