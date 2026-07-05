import { test, expect } from '@playwright/test';

test('verify skip to content link and accessibility attributes', async ({ page }) => {
  // Go to the local dev server
  await page.goto('http://localhost:5173/portfolio/');

  // Wait for hydration
  await page.waitForSelector('text=Shyam');

  // 1. Verify "Skip to Content" link
  // It should be the first child of the body (after any scripts) but practically the first tab item.
  await page.keyboard.press('Tab');
  const skipLink = page.locator('a:has-text("Skip to content")');
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible(); // Should be visible when focused

  // Click it
  await page.keyboard.press('Enter');

  // Verify main content is focused
  const mainContent = page.locator('main#main-content');
  await expect(mainContent).toBeFocused();

  // 2. Verify Projects accessibility attributes
  const projectFilters = page.locator('#projects button[aria-pressed]');
  const filterCount = await projectFilters.count();
  console.log(`Found ${filterCount} project filter buttons with aria-pressed`);
  expect(filterCount).toBeGreaterThan(0);

  // Verify the "All" button is pressed by default
  const allButton = page.locator('#projects button:has-text("All")');
  await expect(allButton).toHaveAttribute('aria-pressed', 'true');

  // Verify icon-only links in projects
  const githubLinks = page.locator('#projects a[aria-label="View source code on GitHub"]');
  expect(await githubLinks.count()).toBeGreaterThan(0);

  // 3. Verify Skills accessibility attributes
  const simSpeedButtons = page.locator('#expertise button[aria-pressed]');
  const speedCount = await simSpeedButtons.count();
  console.log(`Found ${speedCount} simulation control buttons with aria-pressed`);
  expect(speedCount).toBeGreaterThan(0);

  // Take a screenshot of the skip link focused
  await page.goto('http://localhost:5173/portfolio/');
  await page.keyboard.press('Tab');
  await page.screenshot({ path: 'verification/screenshots/skip-link-focused.png' });
});
