import { test, expect } from "@playwright/test";
import { log } from "console";

test("google search", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.getByText("Alle akzeptieren").last().click();

  await page
    .locator("//textarea[@name='q']")
    .type("Mukesh Otwani", { delay: 200 });

  // const elements = await page.locator("//ul[@role='listbox']//li");
  // const count=await elements.count()
  // console.log(count);
  // const text=await elements.allTextContents()
  // console.log(text);

  const elements = await page.locator("//div[@role='option']");
  const values = await elements.allTextContents();
  values.forEach(function (value, i, arr) {
    console.log(value);
    if (value.toLowerCase().includes("playwright")) {
      elements.nth(i).click();
      //clicked=true;
     }
  });
  expect(page).toHaveURL(/.*playwright/);
});
