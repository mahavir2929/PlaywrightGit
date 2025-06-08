import { test, expect } from "@playwright/test";

test("click on regular alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", function (jsdialog) {
    jsdialog.accept();
  });

  await page.getByText("Click for JS Alert").click();

  //await page.waitForTimeout(5000)

  expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  );
});
test("click on  alert and capture text", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on("dialog", function (jsdialog) {
    expect(jsdialog.message()).toContain("I am a JS Confirm");
    jsdialog.dismiss();
  });

  await page.getByText("Click for JS Confirm").click();

  //await page.waitForTimeout(5000)

  expect(page.locator("#result")).toHaveText("You clicked: Cancel");
});
test.only("click on  alert1 and capture text1", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


page.on('dialog',function(jsdialog){
 expect(jsdialog.message()).toContain('I am a JS Confirm')
jsdialog.accept();
})

await page.getByText('Click for JS Confirm').click()

expect(page.locator('#result')).toHaveText('You clicked: Ok')


await page.waitForTimeout(5000)



})
