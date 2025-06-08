import {test,expect} from "@playwright/test"

const {
    randomEmail,
    randomPassword,
    randomName,
    randomInterests,
    randomGender,
    randomStateIndex
  } = require('../utils/datagenerator');
  
  test('sign up with random data', async ({ page }) => {
    await page.goto('https://ineuron-courses.vercel.app/signup');
  
    await page.fill('#name', randomName());
    await page.fill('#email', randomEmail());
    await page.fill('#password', randomPassword());
    await page.waitForTimeout(3000)

    const interests = randomInterests();
    for (const interest of interests) {
      await page.check(`text=${interest}`);
    }
  
    await page.check(`text=${randomGender()}`);
  
    const totalOptions = await page.locator("//select[@id='state']//option").count();
    console.log(totalOptions);
    await page.selectOption('select', { index: randomStateIndex(totalOptions) });
  
    await page.click('button:has-text("SIGN UP")');
    await page.waitForTimeout(3000)

        


  });
  