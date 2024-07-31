import { Page } from '@playwright/test';

export class RadioPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/radio');
  }

  async getHeadingText() {
    return this.page.locator('h1').textContent();
  }

  async selectYesRadio() {
    await this.page.locator('#yes').check();
  }

  async selectNoRadio() {
    await this.page.locator('#two').check();
  }

  async selectNoBugRadio() {
    await this.page.locator('#nobug').check();
  }

  async selectFooRadio() {
    await this.page.getByLabel('Foo').check();
  }

  async selectNotGoingRadio() {
    await this.page.getByLabel('Not going').check();
  }

  async uncheckRememberMe() {
    await this.page.getByLabel('Remember me').uncheck();
  }

  async checkAgreeTnC() {
    await this.page.getByLabel('I agree to the FAKE terms and').check();
  }
}