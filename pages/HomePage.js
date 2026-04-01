import { expect } from '@playwright/test'

/**
 * @param {import('@playwright/test').Page} page
 */

export class HomePage{

    constructor(page){
        this.page = page;
        this.url = "https://demowebshop.tricentis.com";
        this.cartPage = "#topcartlink";
        this.searchBox = "#small-searchterms";
        this.searchButton = "input[value='Search']";
        this.results = ".search-results";
        this.items = ".search-results .product-grid .item-box";
        this.productTitle = "//h2[@class='product-title']/a";
        this.message = ".search-results .result"
        this.productQuantityInput = "//input[@class='qty-input']";
        this.addToCartButton = "//div[@class='add-to-cart-panel']//input[@value='Add to cart' and @type='button']";
        this.cartQuantity = ".cart-qty";
    }

    async gotoHomePage(){
        await this.page.goto(this.url);
    }

    async gotoCartPage(){
        await this.page.locator(this.cartPage).click();
    }

    async searchProduct(productName){
        await this.page.locator(this.searchBox).fill(productName);
        await this.page.locator(this.searchButton).click();
    }

    getProducts(){
        return this.page.locator(this.items);
    }

    getNoProductsMessage(){
        return this.page.locator(this.message);
    }

    async clickProduct(index){
        const products = this.page.locator(this.items);
        const count = await products.count();
        if(count === 0) return false;
        const productName = await products.nth(index).locator(this.productTitle).innerText();
        await products.nth(index).click();
        return productName;
    }

    async addProductToCart(quantity){
        await this.page.locator(this.productQuantityInput).fill(String(quantity));
        await this.page.locator(this.addToCartButton).click();
    }

    async getTotalCartQuantity(){
        const text = await this.page.locator(this.cartQuantity).innerText();
        return Number(text.replace(/[()]/g,''));
    }

}