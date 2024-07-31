import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TablePage } from '../pages/table.page';

Given('I navigate to the Advanced Table page', async function () {
  this.tablePage = new TablePage(this.page);
  await this.tablePage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.tablePage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I select to show {string} entries', async function (entries: string) {
  await this.tablePage.showEntries(entries);
});

When('I sort entries descending by S.NO', async function () {
  await this.tablePage.sortBySNO();
});