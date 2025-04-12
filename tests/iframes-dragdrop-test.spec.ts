import {test,expect} from '@playwright/test'

test('Handling drag and drop present inside iframe',async({page})=>{

  await page.goto('https://jqueryui.com/droppable/');

  const iframe = page.frameLocator('[class="demo-frame"]');

  const drag = iframe.locator('[id="draggable"]');
  const drop = iframe.locator('[id="droppable"]');

  await drag.dragTo(drop);

})