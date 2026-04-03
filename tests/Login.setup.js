import { expect } from '@playwright/test';
import { test  as setup} from '../fixtures/BaseTest';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');
console.log(authFile);

setup('Storage State', async ({login}) => {
    await login.gotoLoginPage();
    await login.loginToWebsite("laura.taylor1234@example.com","test123");
    await expect(login.getLogoutButton()).toBeVisible(); 
    await page.context().storageState({ path: authFile });
})