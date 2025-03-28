const { test, expect } = require('@playwright/test');

test('Multi Select dropdown Test', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Select multiple option for multiselect Dropdown

    //await page.selectOption('#colors',['Red','Blue','Yellow']);

    //Assertions
    //1.Check number of options in dropdown

   //let options= await page.locator('#colors option');

   //await expect(options).toHaveCount(7);

    //2.Check number of options in dropdown using Array


    const options=await page.$$('#colors option');

    console.log("Number of Options present is: " + options.length);

    await expect(options.length).toBe(7);

    //3. Check presence of value in dropdown

   const containt= await page.locator('#colors').textContent();
    await expect(containt.includes('red')).toBeFalsy();



















    await page.waitForTimeout(5000);

})