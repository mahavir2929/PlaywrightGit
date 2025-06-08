import { test, expect } from "@playwright/test";

test("login wit no username and password", async ({ page }) => {
  await page.goto("https://ineuron-courses.vercel.app/login");

  await page.locator(".submit-btn").click();

  await expect(page.locator(".errorMessage")).toContainText(
    "Email and Password is required"
  );
});
test("login wit  username and no password", async ({ page }) => {
  await page.goto("https://ineuron-courses.vercel.app/login");

  await page.locator(".submit-btn").click();

  await expect(page.locator(".errorMessage")).toContainText(
    "Email and Password is required"
  );
});
test("login with id and no password", async ({ page }) => {
  await page.goto("https://ineuron-courses.vercel.app/login");

  await page.locator("//input[@id='email1']").type("mahaviro@test.lcl");
  await page.locator(".submit-btn").click();
  await expect(page.locator(".errorMessage")).toContainText(
    "Password is required"
  );
});

