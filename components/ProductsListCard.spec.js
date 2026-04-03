export class ProductsListCard{
    constructor(page){
        this.page=page;
        this.items = ".search-results .product-grid .item-box";
        this.productTitle = "//h2[@class='product-title']/a";
        this.message = ".search-results .result"
    }
    getProducts() {
        const products = this.page.locator(this.items);
        return products;
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
}