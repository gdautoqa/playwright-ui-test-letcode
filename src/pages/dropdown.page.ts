import { Page } from '@playwright/test';

export class DropdownPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/dropdowns');
  }

  async selectFruit(optionValue: string) {
    await this.page.locator('#fruits').selectOption(optionValue);
  }

  async selectSuperhero(optionValue: string | string[]) {
    await this.page.locator('#superheros').selectOption(optionValue);
  }

  async selectLanguage(optionValue: string) {
    await this.page.locator('#lang').selectOption(optionValue);
  }

  async selectCountry(optionValue: string) {
    await this.page.locator('#country').selectOption(optionValue);
  }

  async getHeadingText() {
    return this.page.locator('h1').textContent();
  }
}