import { test, expect } from '@playwright/test';
import { TabsPage } from '../pages/tabs.page';

test.describe('Tabs Interactions Tests', () => {
  test('should interact with tabs and assert behaviors', async ({ page, context }) => {
    const tabsPage = new TabsPage(page, context);

    await page.goto('https://letcode.in/windows');
    await expect(page).toHaveURL('https://letcode.in/windows');
    const headingText = await tabsPage.getHeadingText();
    expect(headingText).toBe(' Windows');

    const newPage = await tabsPage.clickOpenHomePage();
    await newPage.bringToFront();
    await tabsPage.printTitle(newPage);

    await tabsPage.printAllWindowTitles(await context.pages());
    await tabsPage.closeAllWindows();
  });
});