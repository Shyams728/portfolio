
import { test, expect } from '@playwright/test';

test.describe('Keyboard Accessibility and UX', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/portfolio/');
    // Wait for hydration/rendering
    await page.waitForSelector('text=Shyam', { timeout: 10000 });
  });

  test('Skip to content link exists and works', async ({ page }) => {
    const skipLink = page.locator('text=Skip to content');
    await expect(skipLink).toBeAttached();

    // It should be sr-only (hidden) initially but become visible on focus
    await expect(skipLink).toHaveClass(/sr-only/);

    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();

    // Check if it targets #main-content
    const href = await skipLink.getAttribute('href');
    expect(href).toBe('#main-content');

    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeAttached();
    await expect(mainContent).toHaveAttribute('tabindex', '-1');

    // Click it and check focus
    await skipLink.click();
    await expect(mainContent).toBeFocused();
  });

  test('Navigation and CTA elements have focus-visible styles', async ({ page }) => {
    // Check logo
    await page.keyboard.press('Tab'); // Skip to content
    await page.keyboard.press('Tab'); // Logo
    const logo = page.locator('a:has-text("Shyam")');
    await expect(logo).toBeFocused();
    await expect(logo).toHaveClass(/focus-visible:ring-2/);

    // Check Hire Me button (desktop)
    for (let i = 0; i < 8; i++) await page.keyboard.press('Tab'); // Nav links (7) + Hire Me
    const hireMe = page.locator('text=Hire Me').first();
    await expect(hireMe).toBeFocused();
    await expect(hireMe).toHaveClass(/focus-visible:ring-2/);
  });

  test('Interactive components have correct ARIA attributes', async ({ page }) => {
    // Check TechMarquee
    const marquee = page.locator('[aria-hidden="true"]').filter({ hasText: /Python/ });
    await expect(marquee).toBeAttached();

    // Check Skills simulation buttons
    const slowButton = page.locator('button:has-text("Slow")');
    await slowButton.scrollIntoViewIfNeeded();
    await expect(slowButton).toHaveAttribute('aria-pressed', 'false');

    const normalButton = page.locator('button:has-text("Normal")');
    await expect(normalButton).toHaveAttribute('aria-pressed', 'true');

    await slowButton.click();
    await expect(slowButton).toHaveAttribute('aria-pressed', 'true');
    await expect(normalButton).toHaveAttribute('aria-pressed', 'false');
  });
});
