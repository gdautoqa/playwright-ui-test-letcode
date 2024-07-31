import { test, expect } from '@playwright/test';
import { EditPage } from '../pages/edit.page';

test.describe('Edit Inputs Tests', () => {
  test('should interact with various input fields and assert behaviors', async ({ page }) => {
    const editPage = new EditPage(page);

    await page.goto('https://letcode.in/test');
    await page.getByRole('link', { name: 'Edit' }).click();
    await expect(page).toHaveURL('https://letcode.in/edit');
    await expect(page).toHaveTitle('Interact with Input fields');

    await editPage.enterName('John Doe');
    let value = await page.getByPlaceholder('Enter first & last name').inputValue();
    expect(value).toBe('John Doe');

    await editPage.joinText('I am great');
    value = await page.locator('#join').inputValue();
    expect(value).toBe('I am great');

    await editPage.fillText('Text');
    value = await page.locator('#getMe').inputValue();
    expect(value).toBe('Text');

    await editPage.clearText();
    value = await page.locator('#clearMe').inputValue();
    expect(value).toBe('');

    await page.locator('#dontwrite').click();
    const isReadOnly = await editPage.isReadOnly();
    expect(isReadOnly).toBe(true);
  });
});