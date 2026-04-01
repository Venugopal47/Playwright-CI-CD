import { test,expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import fs from 'fs';
import path from 'path';
import { CartPage } from '../pages/CartPage';

const filePath = path.resolve(__dirname,"..","testdata/productsData.json");
const fileData = fs.readFileSync(filePath,'utf-8');
const testData = JSON.parse(fileData);

test.describe('Check Product Added To Cart', () => {
    for(const data of testData){
        test(`Check With ${data.name}`, async ({page}) => {
            
            const home = new HomePage(page);
            const cart = new CartPage(page)
            await home.gotoHomePage();
            await home.searchProduct(data.name);
            const totalProducts = await home.getProducts().count();
            if(totalProducts === 0){
                expect(data.status.toLowerCase()).toBe('invalid');
                await expect(home.getNoProductsMessage()).toContainText('No products were found');
                return;
            }
            const index = Math.floor(Math.random() * totalProducts);
            const clicked = await home.clickProduct(2);

            if( data.status.toLowerCase() === "valid"){
                const noOfItems = 5;
                const totalItemsInCartBefore = await home.getTotalCartQuantity();
                await home.addProductToCart(noOfItems);
                await page.waitForLoadState('networkidle');
                const totalItemsInCartAfter = await home.getTotalCartQuantity();
                expect(totalItemsInCartAfter).toBe(totalItemsInCartBefore + noOfItems);
                await home.gotoCartPage();
                const productNames = await cart.getProductNames();
                let found = false;
                for(let index = 0;index<await productNames.count();index++){
                    const name = await productNames.nth(index).innerText();
                    console.log();
                    if(name === clicked){
                        found = true;
                    }
                }
                await expect(found).toBeTruthy();
            }
            else{
                expect(clicked).toBeFalsy();
                await expect(home.getNoProductsMessage()).toContainText('No products were found');
            }

        })
    }
})