import { test, expect } from '@playwright/test';
import { SliderPage } from '../pages/slider.page';

test.describe('Slider Interactions Tests', () => {
  test('should interact with slider and assert behaviors', async ({ page }) => {
    const sliderPage = new SliderPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'AUI - 5' }).click();
    await expect(page).toHaveURL('https://letcode.in/slider');
    const headingText = await sliderPage.getHeadingText();
    expect(headingText).toBe(' Slider');

    await sliderPage.fillWordLimit('5');
    const wordLimitValue = await sliderPage.getWordLimitValue();
    expect(wordLimitValue).toBe('5');

    await sliderPage.clickGetCountries();
  });
});