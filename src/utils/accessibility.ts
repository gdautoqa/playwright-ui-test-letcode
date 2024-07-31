import { Page } from '@playwright/test';
import * as axe from 'axe-core';

export async function injectAxe(page: Page): Promise<void> {
  await page.addScriptTag({ content: axe.source });
}

export async function checkA11y(
  page: Page,
  context?: string | object,
  options?: axe.RunOptions
): Promise<axe.AxeResults> {
  return await page.evaluate(
    async ({ context, options }) => {
      return await (window as any).axe.run(context || document, options);
    },
    { context, options }
  );
}