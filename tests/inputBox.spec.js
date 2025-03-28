const { test, expect } = require('@playwright/test');

test('INput box Test', async ({ page }) => {


    await page.goto('https://www.facebook.com/r.php');


    //Input Box
    await expect(await page.locator('//input[@name="firstname"]')).toBeVisible();
    await expect(await page.locator('//input[@name="firstname"]')).toBeEmpty();
    await expect(await page.locator('//input[@name="firstname"]')).toBeEditable();
    await expect(await page.locator('//input[@name="firstname"]')).toBeEnabled();
    await page.locator('//input[@name="firstname"]').fill('Aditya');

    await page.waitForTimeout(5000);

    //input box recheck repush to the git

    console.log("second push")


})
