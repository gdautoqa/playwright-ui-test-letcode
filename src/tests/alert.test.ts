import { test, expect } from '@playwright/test';
import { AlertPage } from '../pages/alert.page';

test.describe('Alert Interactions Tests', () => {
  test('should interact with various alerts and assert behaviors', async ({ page }) => {
    const alertPage = new AlertPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'Dialog' }).click();
    await expect(page).toHaveURL('https://letcode.in/alert');
    const headingText = await alertPage.getHeadingText();
    expect(headingText).toBe(' Alert');

    await alertPage.clickSimpleAlert();
    await alertPage.clickConfirmAlert();
    await alertPage.clickPromptAlert('John Doe');
    const textContent = await page.getByText('Your name is: John Doe').textContent();
    expect(textContent).toContain('Your name is: John Doe');

    await alertPage.clickModernAlert();
    const modernAlertText = await page.getByText('Modern Alert - Some people').textContent();
    expect(modernAlertText).toContain('Modern Alert - Some people');
    await alertPage.closeModernAlert();
  });
});