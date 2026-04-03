export class SearchCard{
    constructor(page){
        this.page=page;
        this.searchBox = "#small-searchterms";
        this.searchButton = "input[value='Search']";
    }
    async searchProduct(productName){
        await this.page.locator(this.searchBox).fill(productName);
        await this.page.locator(this.searchButton).click();
    }
}