const{test,expect}=require('@playwright/test');

test('INput box Test',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/dropdownsPractise/');

   // await page.locator("//label[text()='Round Trip']").check();

   // await expect( await page.locator("//label[text()='Round Trip']")).toBeChecked();

   // await expect( await page.locator("//label[text()='Round Trip']").isChecked()).toBeTruthy();

   await expect( await page.locator("//label[text()='Round Trip']").isChecked()).toBeFalsy();


    await page.waitForTimeout(5000);


})