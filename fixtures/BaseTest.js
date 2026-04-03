import { test as base, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";

export const test = base.extend({
    home: async ({page},use) => {
        await use(new HomePage(page));
    },
    login : async({page},use) => {
        await use(new LoginPage(page));
    },
    cart : async ({page},use) => {
        await use(new CartPage(page));
    }
});