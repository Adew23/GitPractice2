const {test,expect} = require ('@playwright/test');

test ('Homepage Test', async({page})=>{

await page.goto('https://www.demoblaze.com/');

 const pageTitle=await page.title();

console.log('Page Title is: ', pageTitle);
await expect(page).toHaveTitle('STORE');

await expect(page).toHaveURL('https://www.demoblaze.com/');

const pageURL=await page.url();

console.log('Page URL is : ',pageURL);







await page.close();




})