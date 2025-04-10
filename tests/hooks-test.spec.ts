import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
  console.log(`Running before all the tests`)
});


test.beforeEach(async({page})=>{
  console.log('Before each test case');
  await page.goto('https://github.com/');
});

test.afterEach(async()=>{
  console.log('After each test case');
})

test.afterAll(async()=>{
  console.log(`Running after all the tests`)
});

test('Test case 1', async({page})=>{
 // await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
});

test('Test case 2', async({page})=>{
 // await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
});

