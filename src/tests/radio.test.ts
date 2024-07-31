import { test, expect } from '@playwright/test';
import { RadioPage } from '../pages/radio.page';

test.describe('Radio & Checkbox Interactions Tests', () => {
  test('should interact with various radio buttons and checkboxes', async ({ page }) => {
    const radioPage = new RadioPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'Toggle' }).click();
    await expect(page).toHaveURL('https://letcode.in/radio');
    const headingText = await radioPage.getHeadingText();
    expect(headingText).toBe(' Radio & Checkbox');

    await radioPage.selectYesRadio();
    await radioPage.selectNoRadio();
    await radioPage.selectNoBugRadio();
    await radioPage.selectFooRadio();
    await radioPage.selectNotGoingRadio();

    await radioPage.uncheckRememberMe();
    const isChecked = await page.getByLabel('Remember me').isChecked();
    expect(isChecked).toBeFalsy();

    await radioPage.checkAgreeTnC();
    const isCheckedAgree = await page.getByLabel('I agree to the FAKE terms and').isChecked();
    expect(isCheckedAgree).toBeTruthy();
  });
});