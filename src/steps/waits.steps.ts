import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { WaitsPage } from '../pages/waits.page';

Given('I navigate to the Waits page', async function () {
  this.waitsPage = new WaitsPage(this.page);
  await this.waitsPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.waitsPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I click the {string} button', async function (buttonName: string) {
  if (buttonName === 'Simple Alert') {
    await this.waitsPage.clickSimpleAlert();
  }
});

Then('I wait for the alert to show and assert the text says {string}', async function (expectedText: string) {
  await this.waitsPage.waitForAndAcceptAlert(expectedText);
});

Then('I click OK', async function () {
});