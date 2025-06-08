import { test, expect } from "@playwright/test";
//const data1=JSON.parse(JSON.stringify(require("../testdata/Mytestdata.json")))

const multipledata=[{
  "id":1,
  "username":"ineuron@ineuron.ai",
  "password":"ineuron"
 
 },
 {   "id":2,
     "username":"mahavir_test11@ineuron.ai",
     "password":"ineuron"
    
 },
 {
    "id":3,
     "username":"mahavir-2323@ineuron.ai",
     "password":"ineuron"
    
 }]

for(const data of multipledata){
test(`login with ${data.id}` , async ({ page }) => {
  await page.goto("https://ineuron-courses.vercel.app");

  await page.getByText('Log in').click();
  
  await page.locator('#email1').type(data.username)
  await page.locator('#password1').type(data.password)
  //await page.waitForTimeout(3000)
  await page.locator("//button[text()='Sign in']").click();
  await expect(page.locator("//button[text()='Sign out']")).toBeVisible();
 
})
}

  
