import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RadioPage } from '../pages/radio.page';

Given('I navigate to the Radio page', async function () {
  this.radioPage = new RadioPage(this.page);
  await this.radioPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.radioPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I select the {string} radio button under {string}', async function (buttonName: string, section: string) {
  if (section.includes('Select any one') && buttonName === 'Yes') {
    await this.radioPage.selectYesRadio();
  } else if (section.includes('Confirm you can select only one radio button') && buttonName === 'No') {
    await this.radioPage.selectNoRadio();
  } else if (section.includes('Find the bug') && buttonName === 'Yes') {
    await this.radioPage.selectNoBugRadio();
  } else if (section.includes('Find which one is selected') && buttonName === 'Foo') {
    await this.radioPage.selectFooRadio();
  } else if (section.includes('Confirm last field is disabled') && buttonName === 'Not going') {
    await this.radioPage.selectNotGoingRadio();
  }
});

When('I uncheck the {string} checkbox under {string}', async function (checkboxName: string, section: string) {
  if (section.includes('Find if the checkbox is selected?') && checkboxName === 'Remember me') {
    await this.radioPage.uncheckRememberMe();
  }
});

When('I check the {string} checkbox under {string}', async function (checkboxName: string, section: string) {
  if (section.includes('Accept the T&C') && checkboxName === 'I agree to the FAKE terms and') {
    await this.radioPage.checkAgreeTnC();
  }
});