import { test, expect } from '@playwright/test';
import { WaitsPage } from '../pages/waits.page';

test.describe('Waits Interactions Tests', () => {
  test('should interact with waits and assert behaviors', async ({ page }) => {
    const waitsPage = new WaitsPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'Timeout' }).click();
    await expect(page).toHaveURL('https://letcode.in/waits');
    const headingText = await waitsPage.getHeadingText();
    expect(headingText).toBe(' Wait');

    waitsPage.waitForAndAcceptAlert("Finally I'm here, just to say Hi :)");
    await waitsPage.clickSimpleAlert();
  });
});