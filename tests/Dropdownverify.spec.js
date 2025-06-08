import { test, expect } from "@playwright/test";

test('verify dropdown',async ({page})=>{

page.goto("https://the-internet.herokuapp.com/dropdown")

const arr=['Option 1','Option 2']

await page.locator("//select[@id='dropdown']").first().click()

let arr2=await page.locator("//select[@id='dropdown']//option[position() > 1]").allTextContents();

expect(arr2.length).toEqual(2)
expect(arr2).toEqual(arr)

await page.waitForTimeout(2000)


})
