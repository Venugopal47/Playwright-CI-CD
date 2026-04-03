import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    
    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.loginToWebsite("laura.taylor1234@example.com","test123");
    // await expect(login.getLogoutButton()).toBeVisible(); 

    await use(login);
  },

  // optional: raw page without login
  pageWithoutLogin: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});

export { expect };