import { test, expect } from "@playwright/test";

test("google search", async ({ page }) => {
  await page.goto("https://www.google.com/");

  const acceptButton = page.getByText("Alle akzeptieren").last();
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  await page
    .locator("//textarea[@name='q']")
    .fill("Mukesh Otwani", { delay: 200 });
  await page.waitForTimeout(2000);

  const elements = await page.locator(
    "(//ul[@role='listbox'])[1]//div[@role='option']"
  );
  const count = await elements.count();
  //console.log(elements);
  console.log(count);
  const textVal = await elements.allTextContents();
  console.log(textVal);

  for (let i = 0; i < textVal.length; i++) {
    const value = textVal[i];
    if (value.includes("api")) {
      await elements.nth(i).click();
    }
  }
  expect(page).toHaveTitle(/.*api/);

  //await page.pause()
});
