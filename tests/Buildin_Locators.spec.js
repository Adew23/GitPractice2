const {test, expect } = require("@playwright/test");

test('Build-in locators',async({page})=>{


    await page.goto('https://sandbox.oncentrl.net/#/login');

    //getByAltText
    const logo=await page.getByAltText('Centrl');

    await expect(logo).toBeVisible();

    //getByPlaceholder
    await page.getByPlaceholder('Email').fill('ad23@turtleqa.com');

    //getByRole
     await page.getByRole('button',{name:' Continue'}).click();

 // await btn.waitFor({ state: 'visible', timeout: 30000 });

 //getByText
    
   await expect( await page.getByText('Aditya Dwivedi')).toBeVisible();

   





})