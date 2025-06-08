import { test, expect } from "@playwright/test";

test("handle multiple windows", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ineuron-courses.vercel.app/login");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator("//a[@href='https://twitter.com/iNeuronAi']//img").click(),
    context.waitForEvent("page"),
   await page.locator("//a[@href='https://www.linkedin.com/company/ineuron-ai']//img").click()
  ]);

  const url=  await newPage.url()
  console.log(url);
//   await context.close();
//   await browser.close();

});
