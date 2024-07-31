import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SliderPage } from '../pages/slider.page';

Given('I navigate to the Slider page', async function () {
  this.sliderPage = new SliderPage(this.page);
  await this.sliderPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.sliderPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I fill the word limit input with {string}', async function (value: string) {
  await this.sliderPage.fillWordLimit(value);
});

Then('the word limit value should be {string}', async function (value: string) {
  const wordLimitValue = await this.sliderPage.getWordLimitValue();
  expect(wordLimitValue).toBe(value);
});

When('I click the {string} button', async function (buttonName: string) {
  if (buttonName === 'Get Countries') {
    await this.sliderPage.clickGetCountries();
  }
});

Then('10 country names should be displayed', async function () {
  const countries = await this.sliderPage.getCountries();
  console.log(countries); 
});