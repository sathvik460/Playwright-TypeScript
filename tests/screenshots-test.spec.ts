import { test, expect } from '@playwright/test'

test('Capture screenshots', async({page})=>{
  await page.goto('https://www.youtube.com/@naveenautomationlabs');

  // Element screenshot

  await page.locator('#page-header-container').screenshot({path: './screenshots/ElementScreenshot.png'});

  // Page screenshot

  await page.screenshot({path: './screenshots/PageScreenshot.png'});

  // Full page screenshot

  await page.screenshot({path: './screenshots/FullPageScreenshot.png', fullPage:true});

})