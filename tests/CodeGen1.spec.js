import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sandbox.oncentrl.net/#/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('aditya@invoice-sb.com');
  await page.getByPlaceholder('Email').press('Enter');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('Password').fill('Centrl@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://sandbox.oncentrl.net/#/vc/invoice/list');
  await page.getByRole('link', { name: 'business' }).click();
  await page.getByRole('link', { name: 'Roles' }).click();
  await page.getByRole('button', { name: 'Add Role' }).click();
  await page.locator('centrl-dropdown-v2').filter({ hasText: 'Legal Entity * Select' }).getByRole('textbox').click();
  await page.getByText('LE Works1').click();
  await page.locator('ng-select').filter({ hasText: 'Select' }).getByRole('textbox').click();
  await page.getByText('Third Party').click();
  await page.locator('ng-select').filter({ hasText: 'LE Works1××' }).getByRole('textbox').click();
  await page.getByRole('option', { name: 'LE02' }).locator('div').first().click();
  await page.locator('centrl-input').filter({ hasText: 'Name *' }).getByRole('textbox').click();
  await page.locator('centrl-input').filter({ hasText: 'Name *' }).getByRole('textbox').fill('PW Partner');
  await page.getByRole('button', { name: 'Next: Add Contact' }).click();
  await page.getByRole('button', { name: 'Save Role' }).click();
  await page.getByText('PW Partner has been').click();
});