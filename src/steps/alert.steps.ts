import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AlertPage } from '../pages/alert.page';

Given('I navigate to the Alert page', async function () {
  this.alertPage = new AlertPage(this.page);
  await this.alertPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.alertPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I click on {string} and dismiss it', async function (alertType: string) {
  if (alertType === 'Simple Alert') {
    await this.alertPage.clickSimpleAlert();
  } else if (alertType === 'Confirm Alert') {
    await this.alertPage.clickConfirmAlert();
  }
});

When('I click on {string}, enter {string}, and dismiss it', async function (alertType: string, name: string) {
  if (alertType === 'Prompt Alert') {
    await this.alertPage.clickPromptAlert(name);
  }
});

Then('I should see the text {string}', async function (text: string) {
  const textContent = await this.page.getByText(text).textContent();
  expect(textContent).toContain(text);
});

When('I click on {string} and read the message', async function (alertType: string) {
  if (alertType === 'Modern Alert') {
    await this.alertPage.clickModernAlert();
  }
});

When('I close the modern alert', async function () {
  await this.alertPage.closeModernAlert();
});

Then('the alert should be closed', async function () {
});