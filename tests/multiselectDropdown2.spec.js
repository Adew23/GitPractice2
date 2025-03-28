const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown Test', async ({ page }) => {


    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

    await page.locator('.multiselect').click();

   const options= await page.locator('ul>li label>input ');


   await expect(options).toHaveCount(11);


//2.Select multiple option from the Dropdown

const opt1 = await page.$$('ul>li label');

for(let option of opt1)
{
    let valueText= await  option.innerText();

    console.log(valueText);


    if(valueText.includes('jQuery') || valueText.includes('Java'))
    {
       await option.click()
    }
}

//3.De-Select  option from the Dropdown

const opt2 = await page.$$('ul>li label');

for(let option of opt1)
{
    let valueText= await  option.innerText();

    console.log(valueText);


    if(valueText.includes('HTML') || valueText.includes('CSS'))
    {
       await option.click()
    }
}




await page.waitForTimeout(9000);







})