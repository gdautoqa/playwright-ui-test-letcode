import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/form.page';

test.describe('Form Interactions Tests', () => {
  test('should fill and submit the form', async ({ page }) => {
    const formPage = new FormPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'All in One' }).click();
    await expect(page).toHaveURL('https://letcode.in/forms');
    const headingText = await formPage.getHeadingText();
    expect(headingText).toBe(' Form');

    await formPage.fillForm();
    await formPage.submitForm();
  });
});