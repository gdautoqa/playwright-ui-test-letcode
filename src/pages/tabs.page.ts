import { Page, BrowserContext } from '@playwright/test';

export class TabsPage {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/windows');
  }

  async getHeadingText() {
    return this.page.locator('h1').textContent();
  }

  async clickOpenHomePage() {
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByLabel('Goto Home').click();
    return await page1Promise;
  }

  async closePage(page: Page) {
    await page.close();
  }

  async printTitle(page: Page) {
    console.log(await page.title());
  }

  async printAllWindowTitles(pages: Page[]) {
    for (const page of pages) {
      console.log(await page.title());
    }
  }

  async closeAllWindows() {
    const pages = await this.context.pages();
    for (const page of pages) {
      if (!page.isClosed()) {
        await page.close();
      }
    }
  }
}