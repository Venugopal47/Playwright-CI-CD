export class CartPage{
    constructor(page){
        this.page=page;
        this.cartItems = "//table[@class='cart']//tbody/tr/td[@class='product']/a";
    }
    async getProductNames(){
        return await this.page.locator(this.cartItems);
    }
    
}