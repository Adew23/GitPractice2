import { test, expect } from '@playwright/test';

test.skip('Alert test', async ({ page }) => {


  await page.goto('https://testautomationpractice.blogspot.com/');

    //Alert with OK


    //enabeling Alert handling >> Dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');

        await dialog.accept();
    });

 await page.click('//button[normalize-space()="Simple Alert"]');


 await page.waitForTimeout(5000);


})

//alert with Confirmation alert

test.skip('Confirmation Alert with OK and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // Close using OK button
        // await dialog.dismiss(); // Close using Cancel
    });

    // Trigger the confirmation dialog
    await page.click('//button[normalize-space()="Confirmation Alert"]');
  
    // Validate the result
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
  
    // Wait for observation (optional)
    await page.waitForTimeout(5000);
});


//alert with promptbox

let name='Aditya';

test('Prompt Alert ', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept(name);
    });

    // Trigger the confirmation dialog
    await page.click('//button[normalize-space()="Prompt Alert"]');
  
    // Validate the result
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello ' +name+ '! How are you today?');

  
    // Wait for observation (optional)
    await page.waitForTimeout(5000);
});

  
  
