import { Page } from '@playwright/test';
import { promises as fs } from 'fs';
import * as path from 'path';

export class FilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://letcode.in/file');
  }

  async getHeadingText() {
    return this.page.locator('h1.title').textContent();
  }

  async chooseFile(filePath: string) {
    await this.page.getByLabel('Choose a file…').setInputFiles(filePath);
  }

  async downloadFile(downloadFolder: string) {
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.getByRole('link', { name: 'Download Pdf' }).click();
    const download = await downloadPromise;
    const downloadPath = path.join(downloadFolder, download.suggestedFilename());
    await download.saveAs(downloadPath);
    return downloadPath;
  }

  async deleteFile(filePath: string) {
    await fs.unlink(filePath);
  }
}