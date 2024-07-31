import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TabsPage } from '../pages/tabs.page';

Given('I navigate to the Windows page', async function () {
  this.tabsPage = new TabsPage(this.page, this.context);
  await this.tabsPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.tabsPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I click on the {string} button', async function (buttonName: string) {
  if (buttonName === 'open home page') {
    this.newPage = await this.tabsPage.clickOpenHomePage();
  }
});

When('I go to the newly opened tab', async function () {
  await this.newPage.bringToFront();
});

Then('I print the title of the page', async function () {
  await this.tabsPage.printTitle(this.newPage);
});

Then('I close the parent window', async function () {
  await this.tabsPage.closePage(this.page);
});

Then('I print all the window titles', async function () {
  const pages = await this.tabsPage.page.context().pages();
  await this.tabsPage.printAllWindowTitles(pages);
});

Then('I close all the windows', async function () {
  await this.tabsPage.closeAllWindows();
});