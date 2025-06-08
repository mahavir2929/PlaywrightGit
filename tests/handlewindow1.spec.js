import { test, expect } from "@playwright/test";

test('handle windows',async ({browser})=>{

      const context=  await browser.newContext();

      const page=await context.newPage();

      await page.goto("https://ineuron-courses.vercel.app/login")
    
       
       const [newPage]=await Promise.all(
     [
        context.waitForEvent("page"),
        await page.locator("//a[@href='https://twitter.com/iNeuronAi']//img").click()

     ])

              const url=   newPage.url();
              console.log(url);
    })












