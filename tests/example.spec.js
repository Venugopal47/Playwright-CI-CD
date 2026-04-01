// @ts-check
import { test, expect,devices } from '@playwright/test';

// test.use({
//   ...devices['Pixel 5']
// });

test.use({
  viewport: { width: 780, height: 720 }
})

test('test', async ({ page }) => {
  await page.goto('https://admin.staging.agrigateinternal.net/');
  // await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();

  // await page.getByRole('textbox', { name: 'Email or phone' }).fill('venu.gopal@theruraltrust.com');
  // await page.getByRole('button', { name: 'Next' }).click();
  // await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();

  // await page.getByRole('textbox', { name: 'Enter your password' }).fill('Venu1485909@');
  // await page.getByRole('button', { name: 'Next' }).click();
  // const title = await page.title();
  // expect(title).toBe("AgriGate Admin | RuTrust");
});

// test('Mobile test', async ({ page }) => {
//   await page.goto('https://admin.staging.agrigateinternal.net/');
//   await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();

//   await page.getByRole('textbox', { name: 'Email or phone' }).fill('venu.gopal@theruraltrust.com');
//   await page.getByRole('button', { name: 'Next' }).click();
//   const captcha = await page.getByRole('img', { name: 'CAPTCHA image of text used to' }).innerText();
//   await page.getByRole('textbox', { name: 'Type the text you hear or see' }).fill(captcha);
//   await page.getByRole('button', { name: 'Next' }).click();
//   // const title = await page.title();
//   // expect(title).toBe("AgriGate Admin | RuTrust");
// });