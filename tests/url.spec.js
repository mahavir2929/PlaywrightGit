import { test, expect } from '@playwright/test';

test('url navigattion',async ({page})=>{

await page.goto("https://ineuron-courses.vercel.app/")

await page.locator("//button[text()='Log in ']").click()
await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login")

await page.locator("//a[text()='New user? Signup']").click()
expect(page).toHaveURL("https://ineuron-courses.vercel.app/signup")

 await page.locator("//input[@id='name']").type("mahaviro")

 await page.locator("//input[@id='email11']").fill("mahavir15@test.lcl")
 await page.locator("//input[@id='password']").fill("mahavir15@test.lcl")

 await page.locator("//label[text()='Selenium']//preceding-sibling::input[@type='checkbox']").check()

 await page.locator("//input[@id='gender']").first().click()
 await page.locator("//select[@id='state']").selectOption("Assam")

 await page.locator("//button[text()='Sign up']").click();
 //await expect(page).toHaveURL("https://ineuron-courses.vercel.app/login")

 await expect(page.locator('.errorMessage')).toHaveText('Email already registered!')










//  await page.locator("//input[@id='email1']").fill("mahavir15@test.lcl")
//  await page.locator("//input[@id='password1']").fill("mahavir15@test.lcl")
 
//  await page.locator("//button[text()='Sign in']").click();
// await expect(page.getByText('Sign out')).toBeVisible();

})