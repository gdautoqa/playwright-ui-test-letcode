import { test, expect } from '@playwright/test';
import { TablePage } from '../pages/table.page';

test.describe('Table Interactions Tests', () => {
  test('should interact with table and assert behaviors', async ({ page }) => {
    const tablePage = new TablePage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'Advance table' }).click();
    await expect(page).toHaveURL('https://letcode.in/advancedtable');
    const headingText = await tablePage.getHeadingText();
    expect(headingText).toBe(' Table');

    await tablePage.showEntries('25');
    await tablePage.sortBySNO();
  });
});