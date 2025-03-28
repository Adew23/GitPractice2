const {test, expect } = require("@playwright/test");
const exp = require("constants");

test('Soft Assertions Test',async({page})=>{


await page.goto('https://www.demoblaze.com/');

//Hard Assertions
await expect(page).toHaveTitle('STeORE');
await expect(page).toHaveURL('https://www.demoblaze.com/');
await expect(page.locator('.navbar-brand')).toBeVisible();


//Soft Assertions
await expect.soft(page).toHaveTitle('STWORE');
await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
await expect.soft(page.locator('.navbar-brand')).toBeVisible();










})