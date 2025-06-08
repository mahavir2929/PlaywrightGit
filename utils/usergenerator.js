// utils/userGenerator.js
const {
    randomEmail,
    randomPassword,
    randomName,
    randomInterests,
    randomGender,
    randomStateIndex
  } = require('./datagenerator');
  
  async function createRandomUser(page) {
    const email = randomEmail();
    const password = randomPassword();
    const name = randomName();
  
    await page.goto('https://ineuron-courses.vercel.app/signup');
  
    await page.fill('#name', name);
    await page.fill('#email', email);
    await page.fill('#password', password);
  
    const interests = randomInterests();
    for (const interest of interests) {
      await page.check(`text=${interest}`);
    }
  
    await page.check(`text=${randomGender()}`);
  
    const totalOptions = await page.locator("//select[@id='state']/option").count();
    await page.selectOption('select', { index: randomStateIndex(totalOptions) });
  
    await page.click('button:has-text("Sign up")');
  
    return { email, password }; // Return the credentials
  }
  
  module.exports = { createRandomUser };
  