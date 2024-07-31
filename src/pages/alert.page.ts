import { Page } from '@playwright/test';

export class AlertPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/alert');
  }

  async getHeadingText() {
    return this.page.locator('h1').textContent();
  }

  async clickSimpleAlert() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.page.getByRole('button', { name: 'Simple Alert' }).click();
  }

  async clickConfirmAlert() {
    this.page.once('dialog', dialog => dialog.accept());
    await this.page.getByRole('button', { name: 'Confirm Alert' }).click();
  }

  async clickPromptAlert(name: string) {
    this.page.once('dialog', dialog => {
      dialog.accept(name);
    });
    await this.page.getByRole('button', { name: 'Prompt Alert' }).click();
  }

  async clickModernAlert() {
    await this.page.getByRole('button', { name: 'Modern Alert' }).click();
    await this.page.getByText('Modern Alert - Some people').click();
  }

  async closeModernAlert() {
    await this.page.getByLabel('close', { exact: true }).click();
  }
}