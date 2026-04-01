// import { expect } from '@playwright/test'

// /**
//  * @param {import('@playwright/test').Page} page
//  */

// export class ProductPage{

//     constructor(page){
//         this.page = page;
//         this.url = "https://demowebshop.tricentis.com";
//         this.searchBox = "#small-searchterms";
//         this.searchButton = "input[value='Search']";
//         this.results = ".search-results";
//         this.items = ".search-results .product-grid .item-box";
//         this.message = ".search-results .result"
//         this.productQuantityInput = "//input[@class='qty-input']";
//         this.addToCartButton = "//div[@class='add-to-cart-panel']//input[@value='Add to cart' and @type='button']";
//         this.cartQuantity = ".cart-qty";
//     }

//     async gotoHomePage(){
//         await this.page.goto(this.url);
//     }

//     async searchProduct(productName){
//         await this.page.locator(this.searchBox).fill(productName);
//         await this.page.locator(this.searchButton).click();
//     }

//     getProducts(){
//         return this.page.locator(this.items);
//     }

//     getNoProductsMessage(){
//         return this.page.locator(this.message);
//     }

//     async clickFirstProductIfExists(){
//         const products = this.page.locator(this.items);
//         const count = await products.count();
//         if(count < 1) return false;
//         else{
//             await products.nth(0).click();
//             return true;
//         }
//     }

//     async addProductToCart(quantity){
//         await this.page.locator(this.productQuantityInput).fill(String(quantity));
//         await this.page.locator(this.addToCartButton).click();
//     }

//     getTotalCartQuantity(){
//         return this.page.locator(this.cartQuantity);
//     }
// }