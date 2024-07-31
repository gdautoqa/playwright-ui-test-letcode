import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FormPage } from '../pages/form.page';

Given('I navigate to the Form page', async function () {
  this.formPage = new FormPage(this.page);
  await this.formPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.formPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I fill in the form', async function () {
  await this.formPage.fillForm();
});

When('I submit the form', async function () {
  await this.formPage.submitForm();
});