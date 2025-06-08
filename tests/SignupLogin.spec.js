// tests/signup-login.spec.js
import {test,expect} from "@playwright/test"
const { createRandomUser } = require('../utils/usergenerator');

test('sign up and login with same user', async ({ page }) => {
  // Step 1: Create the user
  const { email, password } = await createRandomUser(page);
  await page.waitForTimeout(3000)
  // Step 2: Log out if needed, or open login page
  await page.goto('https://ineuron-courses.vercel.app/login');

  // Step 3: Login with same credentials
  await page.fill('#email1', email);
  await page.fill('#password1', password);
  await page.waitForTimeout(3000)

  await page.click('button:has-text("Sign in")');
  //await page.waitForTimeout(10000)
  await page.waitForLoadState('networkidle')

  // Step 4: Verify login success
  await expect(page.locator("//button[text()='Sign out']")).toBeVisible() // Update with your success selector
});
