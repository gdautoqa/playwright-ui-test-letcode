import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FilePage } from '../pages/file.page';
import * as path from 'path';

Given('I navigate to the File page', async function () {
  this.filePage = new FilePage(this.page);
  await this.filePage.navigate();
});

Then('the URL should be {string} and the heading should be {string}', async function (url: string, heading: string) {
  await expect(this.page).toHaveURL(url);
  const headingText = await this.filePage.getHeadingText();
  expect(headingText).toBe(heading);
});

When('I choose the file {string} from {string} folder', async function (fileName: string, folderPath: string) {
  const filePath = path.join(__dirname, '..', '..', folderPath, fileName);
  await this.filePage.chooseFile(filePath);
});

When('I download the file to the {string} folder', async function (folderPath: string) {
  const downloadFolder = path.join(__dirname, '..', '..', folderPath);
  this.downloadPath = await this.filePage.downloadFile(downloadFolder);
});

Then('the test should delete the file {string} from {string} folder', async function (fileName: string, folderPath: string) {
  const filePath = path.join(__dirname, '..', '..', folderPath, fileName);
  await this.filePage.deleteFile(filePath);
});