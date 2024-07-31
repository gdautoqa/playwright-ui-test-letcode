import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { EditPage } from '../pages/edit.page';

Given('I navigate to the Edit page', async function () {
  this.editPage = new EditPage(this.page);
  await this.editPage.navigate();
});

Then('the URL should be {string} and the title should be {string}', async function (url: string, title: string) {
  await expect(this.page).toHaveURL(url);
  await expect(this.page).toHaveTitle(title);
});

When('I enter {string} in the name field', async function (name: string) {
  await this.editPage.enterName(name);
});

Then('{string} should be entered in the name field', async function (name: string) {
  const value = await this.page.getByPlaceholder('Enter first & last name').inputValue();
  expect(value).toBe(name);
});

When('I join text {string} in the join field', async function (text: string) {
  await this.editPage.joinText(text);
});

Then('the join field should contain {string}', async function (text: string) {
  const value = await this.page.locator('#join').inputValue();
  expect(value).toBe(text);
});

When('I fill the text field with {string}', async function (text: string) {
  await this.editPage.fillText(text);
});

Then('the text field should contain {string}', async function (text: string) {
  const value = await this.page.locator('#getMe').inputValue();
  expect(value).toBe(text);
});

When('I clear the text in the clear field', async function () {
  await this.editPage.clearText();
});

Then('the clear field should be empty', async function () {
  const value = await this.page.locator('#clearMe').inputValue();
  expect(value).toBe('');
});

When('I click the read-only field', async function () {
  await this.page.locator('#dontwrite').click();
});

Then('the field should not be editable', async function () {
  const isReadOnly = await this.editPage.isReadOnly();
  expect(isReadOnly).toBe(true);
});