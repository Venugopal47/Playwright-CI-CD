import { expect } from "@playwright/test";

export class LoginPage{

    constructor(page){
        this.page = page;
        this.url = 'https://demowebshop.tricentis.com/login';
        this.email = '#Email';
        this.password = '#Password';
        this.loginBtn = "input[value='Log in']";
        this.logoutBtn = "//a[normalize-space()='Log out']";
        this.errorMsg = ".validation-summary-errors";
    }

    async gotoLoginPage(){
        await this.page.goto(this.url);
    }

    async loginToWebsite(email,password){
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }

    getLogoutButton(){
        return this.page.locator(this.logoutBtn);
    }

    getErrorMessage(){
        return this.page.locator(this.errorMsg);
    }
}