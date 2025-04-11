import {test, expect } from '@playwright/test'

test('Handling dropdown using value and visible text', async({page})=>{

  await page.goto('https://www.facebook.com/');
  await page.getByRole('button',{name: 'Create new account'}).click();

  // Handling dropdown using value

  await page.getByLabel('Day').selectOption('22');
  await page.getByLabel('Month').selectOption('10');
  await page.getByLabel('Year').selectOption('1997');


  // Handling dropdown using visible text

  await page.getByLabel('Month').selectOption('Nov');


  // Verifying all the options in a dropdown

  await expect(page.locator('#month>option')).toHaveText(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);





});