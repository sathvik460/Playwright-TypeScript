import {test,expect} from '@playwright/test'


test('Handling mouse hovers', async({page})=>{

  await page.goto('https://github.com/');

  // Mouse Left button click
    await page.getByRole('link', {name: 'Try GitHub Copilot'}).first().click({button: 'left'});

  // Mouse Right button click

   await page.getByRole('link', {name: 'Try GitHub Copilot'}).first().click({button: 'right'});

  // Mouse Middle button click
    await page.getByRole('link', {name: 'Try GitHub Copilot'}).first().click({button: 'middle'});
});