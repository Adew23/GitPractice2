const { test, expect } = require('@playwright/test');

test('Check-box Test', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//input[@id="name"]').fill("Aditya Kumar");
    await page.fill('#email', 'aditya@playwright.com');
    await page.fill('#phone', '+918432345647');
    await page.locator('id=textarea').fill('B2-1103,Suncity Avenue');

    await page.check('#male');

    await expect(await page.locator('#male')).toBeChecked();
    await expect(await page.locator('#male').isChecked()).toBeTruthy();



    const checkboxeLocators = [

        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='wednesday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']",


    ];

    for (const locator of checkboxeLocators) {
        await page.locator(locator).check();
    }

    for (const locator of checkboxeLocators) {

        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }

    }

    //Multiple Ways to select from Dropdown


    //  await page.locator('#country').selectOption({label:'India'}); //using label
    // await page.locator('#country').selectOption('Australia');     //using visible text

    await page.locator('#country').selectOption({ value: 'germany' });

    //Assertions
    //Approach-1.Check the number of options present in the dropdown

    const Option = await page.locator("#country option");

    await expect(Option).toHaveCount(10);

    //Assertions
    //Approach-2.Check the number of options present in the dropdown

    const options = await page.$$('#country option');

    console.log(" Total numbers of options are: " + options.length);

    await expect(options.length).toBe(10);

    //3.Check presence of value in dropdown

    const chkOption = await page.locator('#country').textContent();

    await expect(chkOption.includes("India")).toBeTruthy();




    //4.Check presence of value present in dropdown using loop

    const opt = await page.$$('#country option');


    let status = false;
    for (const opt1 of opt) {
        // console.log(await opt1.textContent());
        const values = await opt1.textContent();
        if (values.includes('India')) {
            status = true;
            break;
        }
    }

    expect(status).toBeTruthy();


//5.Select option from dropdown using looping


const dropdown = await page.$$('#country option');

for(const drop of dropdown)
{
 let   vlu=await drop.textContent();
if(vlu.includes("india"))
{
    await page.selectOption('#country',vlu);
    break;
}

}




    await page.waitForTimeout(5000);









})