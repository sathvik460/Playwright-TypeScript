import {test, expect} from '@playwright/test'

test('Different types of locators', async({page})=>{


  //await page.goto('https://github.com/sathvik460');
  
  // getByRole
 // await page.getByRole('link',{name:'Sign in'}).click();

  // getByLabel

  //await page.getByLabel('Homepage', {exact: true}).first().click();

  // getByAltText

  //await page.getByAltText("View sathvik460's full-sized avatar").click();

  // getByTextId

  // await page.getByTestId("repositories").first().click();

  // getByTitle

  await page.goto('https://www.google.com/');
  await page.getByTitle('Search').fill('playwright');

})