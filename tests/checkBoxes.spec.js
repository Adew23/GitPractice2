const{test,expect}=require('@playwright/test');
const { clear } = require('console');

test('Check-box Test',async({page})=>{


    await page.goto('https://rahulshettyacademy.com/dropdownsPractise/');

    await page.locator('//input[@id="ctl00_mainContent_chk_StudentDiscount" and @type="checkbox"]').
    check();

    await expect(await page.locator('//input[@id="ctl00_mainContent_chk_StudentDiscount" and @type="checkbox"]')).toBeChecked();

    await expect(await page.locator('//input[@id="ctl00_mainContent_chk_StudentDiscount" and @type="checkbox"]').isChecked()).toBeTruthy();

 

    await expect(await page.locator("//input[@id='ctl00_mainContent_chk_IndArm' and @type='checkbox']").isChecked()).toBeFalsy();


 //multiple checkboxes


    

 

    await page.waitForTimeout(6000);





})