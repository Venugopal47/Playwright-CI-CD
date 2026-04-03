export class ProductCard{
    constructor(page){
        this.page=page;
        this.productQuantityInput = "//input[@class='qty-input']";
        this.addToCartButton = "//div[@class='add-to-cart-panel']//input[@value='Add to cart' and @type='button']";
    }
    async addProductToCart(quantity){
        await this.page.locator(this.productQuantityInput).fill(String(quantity));
        await this.page.locator(this.addToCartButton).click();
        await this.page.waitForTimeout(2000);
    }
}