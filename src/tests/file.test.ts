import { test, expect } from '@playwright/test';
import { FilePage } from '../pages/file.page';
import * as path from 'path';
import * as fs from 'fs/promises';

// Define project names to skip
const skipProjects = ['Pixel 7', 'iPhone 14'];

test.describe('File Interactions Tests', () => {
  test('should upload and download files', async ({ page }, testInfo) => {
    if (skipProjects.includes(testInfo.project.name)) {
      test.skip();
    }

    const filePage = new FilePage(page);
    const uploadFilePath = path.join(__dirname, '..', 'data', 'upload', 'sample.pdf');
    const downloadFolderPath = path.join(__dirname, '..', 'data', 'download');

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'File management' }).click();
    await expect(page).toHaveURL('https://letcode.in/file');
    const headingText = await filePage.getHeadingText();
    expect(headingText).toBe(' Upload and Download');

    await filePage.chooseFile(uploadFilePath);
    const downloadPath = await filePage.downloadFile(downloadFolderPath);
    await filePage.deleteFile(downloadPath);
  });
});