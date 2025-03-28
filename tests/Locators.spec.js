//const {test, expect } = require("@playwright/test");

import {test,expect} from '@playwright/test'

test('Page locator',async({page})=>{


    await page.goto('https://sandbox.oncentrl.net/#/login');

   // await page.locator('locator').click();
   // await page.click('locators');

  // await page.click('class=login-btn secondary');

   await page.fill('id=email','aditya@invoice-sb.com');
   await page.click('button.primary');
   await page.fill('input#current-password','Centrl@123');
   await page.locator('//button[text()=" Login"]').click();


   const comName=await page.locator("//span[text()=' INVOICE 2.0 ']");

   // Wait for visibility
  await comName.waitFor({ state: 'visible', timeout: 30000 });

   await expect(comName).toBeVisible();

/*const pageLink=await page.$$('a');

for(const links of pageLink)
{
const linktext=await links.textContent();

console.log(linktext);
}*/
//click on System Admin
await page.click("//span[text()=' manage_accounts ']");

//click on the Partners Tab
await page.click('id=generatedId_2842254');


await page.waitForSelector("//tbody[@class='role-container partner-table-container ng-star-inserted']//tr/td[1]//label/a");
//xpath for all Partners
const Partners=await page.$$("//tbody[@class='role-container partner-table-container ng-star-inserted']//tr/td[1]//label/a");


for( const partner of Partners)
{

  const  partnerName=await partner.textContent();

  console.log(partnerName);
}
   





})