const {test, expect } = require("@playwright/test");

test('Assertions Test',async({page})=>{

await page.goto('https://demo.nopcommerce.com/register');

await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

await expect(page).toHaveTitle('nopCommerce demo store. Register');

const logo=await page.locator('.header-logo');

await expect(logo).toBeVisible();

const searchbox= await page.locator('#small-searchterms');

await expect(searchbox).toBeEnabled();


const genderRadio=await page.locator('#gender-male');
genderRadio.click();

await expect(genderRadio).toBeChecked();

const newsRadio= await page.locator('#Newsletter');

await expect(newsRadio).toBeChecked();

})