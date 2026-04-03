import { expect } from '@playwright/test'
import { ProductCard } from '../components/ProductCard';
import { SearchCard } from '../components/SearchCard';
import { ProductsListCard } from '../components/ProductsListCard.spec';

/**
 * @param {import('@playwright/test').Page} page
 */

export class HomePage{

    constructor(page){
        this.page = page;
        this.url = "https://demowebshop.tricentis.com";
        this.cartPage = "#topcartlink";
        this.results = ".search-results";
        this.cartQuantity = ".cart-qty";
    }

    async gotoHomePage(){
        await this.page.goto(this.url);
    }

    async gotoCartPage(){
        await this.page.locator(this.cartPage).click();
    }

    search(){
        return new SearchCard(this.page);
    }

    product(){
        return new ProductCard(this.page);
    }

    productsList(){
        return new ProductsListCard(this.page);
    }

    async getTotalCartQuantity(){
        const text = await this.page.locator(this.cartQuantity).innerText();
        return Number(text.replace(/[()]/g,''));
    }

}