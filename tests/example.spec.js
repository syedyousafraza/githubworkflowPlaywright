// @ts-check
const { test, expect } = require('@playwright/test');
//adding test Just to test

test.beforeEach(async ({ page }) => {
  await page.goto('https://google.com');
});



test.describe('Google Search', () => {
  test('should allow me to add todo items', async ({ page }) => {
    await expect(page.locator('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img')).toBeVisible();
  });
});
