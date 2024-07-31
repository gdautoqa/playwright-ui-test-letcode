import { Page } from '@playwright/test';

export class FormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/forms');
  }

  async getHeadingText() {
    return this.page.locator('h1.title').textContent();
  }

  async fillForm() {
    await this.page.locator('#firstname').click();
    await this.page.locator('#firstname').fill('John');
    await this.page.locator('#lasttname').click();
    await this.page.locator('#lasttname').fill('Doe');
    await this.page.getByPlaceholder('Email input').click();
    await this.page.getByPlaceholder('Email input').fill('john.doe@johndoe.com');
    await this.page.getByPlaceholder('Phone Number').click();
    await this.page.getByPlaceholder('Phone Number').fill('2345678901');
    await this.page.getByPlaceholder('Address Line-1').click();
    await this.page.getByPlaceholder('Address Line-1').fill('123 Anyplace');
    await this.page.getByPlaceholder('Address Line-2').click();
    await this.page.getByPlaceholder('Address Line-2').fill('Anytown');
    await this.page.getByPlaceholder('State').click();
    await this.page.getByPlaceholder('State').fill('MA');
    await this.page.getByPlaceholder('Postal-Code').click();
    await this.page.getByPlaceholder('Postal-Code').fill('23450');
    await this.page.locator('form div').filter({ hasText: 'Postal-CodeCountryAfghanistan' }).getByRole('combobox').selectOption('United States');
    await this.page.locator('#Date').fill('2000-07-07');
    await this.page.getByLabel('Male', { exact: true }).check();
    await this.page.getByLabel('I agree to the terms and').check();
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}