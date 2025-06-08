import { test, expect } from '@playwright/test';

test('Google search autocomplete test', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com/');

  // Accept cookies (for German locale)
  const acceptButton = page.getByText('Alle akzeptieren').last();
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  // Type into search box with delay
  await page.locator("//textarea[@name='q']").fill('Mukesh Otwani', { delay: 200 });

  // Wait for suggestions to appear
  const elements = page.locator("//div[@role='option']");

  // Wait until at least one suggestion appears (optional but good practice)
  await expect(elements.first()).toBeVisible({ timeout: 5000 });

  const count = await elements.count();
  console.log(`Number of suggestions: ${count}`);

  const values = await elements.allTextContents();
  console.log("Suggestion values:", values);

  // Optionally: Click one suggestion that includes "api"
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value.toLowerCase().includes('api')) {
      await elements.nth(i).click();
      break;
    }
  }

  // Optional: Check the new page's title
  await expect(page).toHaveTitle(/.*api/i); // Adjust as needed
});