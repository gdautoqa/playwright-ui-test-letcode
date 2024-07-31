import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/dropdown.page';

test.describe('Dropdown Selection Tests', () => {
  test('should interact with various dropdowns and assert the selections', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'Drop-Down' }).click();
    await expect(page).toHaveURL('https://letcode.in/dropdowns');
    const headingText = await dropdownPage.getHeadingText();
    expect(headingText).toBe(' Dropdown');

    await dropdownPage.selectFruit('3');
    let selectedValue = await page.locator('#fruits').inputValue();
    expect(selectedValue).toBe('3');

    await dropdownPage.selectSuperhero('ta');
    selectedValue = await page.locator('#superheros').inputValue();
    expect(selectedValue).toContain('ta');

    await dropdownPage.selectSuperhero(['ta', 'bt']);
    selectedValue = await page.locator('#superheros').inputValue();
    expect(selectedValue).toContain('ta');

    await dropdownPage.selectLanguage('py');
    selectedValue = await page.locator('#lang').inputValue();
    expect(selectedValue).toBe('py');

    await dropdownPage.selectCountry('India');
    selectedValue = await page.locator('#country').inputValue();
    expect(selectedValue).toBe('India');
  });
});