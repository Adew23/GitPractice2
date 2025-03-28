const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown Test', async ({ page }) => {


    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi');

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const FromCityOption=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    for( let option of FromCityOption)
    {
       const value=  await option.textContent();

      // console.log(value);


        if(value.includes('Majnu Ka Tilla'))
        {
            await option.click();
            break;

        }










    }






    await page.waitForTimeout(7000);

})