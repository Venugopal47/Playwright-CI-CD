import { LoginPage } from '../pages/LoginPage';
import { test,expect } from '../fixtures/auth.fixture';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname,"..","testdata/loginData.json");
const fileData = fs.readFileSync(filePath,'utf-8');
const testData = JSON.parse(fileData);

test.describe('Login Test',() => {
    for(const data of testData){
        test(`Login with ${data.email} and ${data.password}`, async ({pageWithoutLogin}) => {

            await pageWithoutLogin.gotoLoginPage();
            await pageWithoutLogin.loginToWebsite(data.email,data.password);

            if(data.status.toLowerCase() === "valid"){
                await expect(pageWithoutLogin.getLogoutButton()).toBeVisible(); 
            }
            else{
                await expect(pageWithoutLogin.getErrorMessage()).toBeVisible();
            }
        })
    }
})