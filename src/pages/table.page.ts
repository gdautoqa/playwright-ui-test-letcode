import { Page } from '@playwright/test';

export class TablePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/advancedtable');
  }

  async getHeadingText() {
    return this.page.locator('h1.title').textContent();
  }

  async showEntries(entries: string) {
    await this.page.getByLabel('Show 51025 entries').selectOption(entries);
  }

  async sortBySNO() {
    await this.page.getByLabel('S.NO: activate to sort column').click();
  }
}