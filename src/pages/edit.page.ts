import { Page } from '@playwright/test';

export class EditPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/edit');
  }

  async enterName(name: string) {
    await this.page.getByPlaceholder('Enter first & last name').click();
    await this.page.getByPlaceholder('Enter first & last name').fill(name);
  }

  async joinText(text: string) {
    await this.page.locator('#join').click();
    await this.page.locator('#join').fill(text);
    await this.page.locator('#join').press('Tab');
  }

  async fillText(text: string) {
    await this.page.locator('#getMe').fill(text);
  }

  async clearText() {
    await this.page.locator('#clearMe').click();
    await this.page.locator('#clearMe').fill('');
  }

  async isReadOnly() {
    const isEditable = await this.page.isEditable('#dontwrite');
    return !isEditable;
  }
}