import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DropdownPage } from '../pages/dropdown.page';

Given('I navigate to the Drop-Down page', async function () {
  this.dropdownPage = new DropdownPage(this.page);
  await this.dropdownPage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.dropdownPage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I select the fruit option with value {string}', async function (value: string) {
  await this.dropdownPage.selectFruit(value);
});

Then('the fruit option with value {string} should be selected', async function (value: string) {
  const selectedValue = await this.page.locator('#fruits').inputValue();
  expect(selectedValue).toBe(value);
});

When('I select the superhero option with value {string}', async function (value: string) {
  await this.dropdownPage.selectSuperhero(value);
});

Then('the superhero option with value {string} should be selected', async function (value: string) {
  const selectedValues = await this.page.locator('#superheros').inputValue();
  expect(selectedValues).toContain(value);
});

When('I select the superhero options with values {string} and {string}', async function (value1: string, value2: string) {
  await this.dropdownPage.selectSuperhero([value1, value2]);
});

Then('the superhero options with values {string} and {string} should be selected', async function (value1: string, value2: string) {
  const selectedValues = await this.page.locator('#superheros').inputValue();
  expect(selectedValues).toContain(value1);
});

When('I select the language option with value {string}', async function (value: string) {
  await this.dropdownPage.selectLanguage(value);
});

Then('the language option with value {string} should be selected', async function (value: string) {
  const selectedValue = await this.page.locator('#lang').inputValue();
  expect(selectedValue).toBe(value);
});

When('I select the country option with value {string}', async function (value: string) {
  await this.dropdownPage.selectCountry(value);
});

Then('the country option with value {string} should be selected', async function (value: string) {
  const selectedValue = await this.page.locator('#country').inputValue();
  expect(selectedValue).toBe(value);
});