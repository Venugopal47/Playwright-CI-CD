import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');
console.log(authFile);

setup('Storage State', async ({page}) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.loginToWebsite("laura.taylor1234@example.com","test123");
    await expect(login.getLogoutButton()).toBeVisible(); 
    await page.context().storageState({ path: authFile });
})