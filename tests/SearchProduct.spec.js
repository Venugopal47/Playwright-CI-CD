import { test,expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname,"..","testdata/productsData.json");
const fileData = fs.readFileSync(filePath,'utf-8');
const testData = JSON.parse(fileData);

test.describe('Search Product', () => {
    for(const data of testData){
        test(`Search With ${data.name}`, async ({page}) => {
            
            const home = new HomePage(page);
            await home.gotoHomePage();
            await home.searchProduct(data.name);

            if( data.status.toLowerCase() === "valid"){
                const products = home.getProducts();
                const count = await products.count();
                expect(count).toBeGreaterThan(0);
            }
            else{
                await expect(home.getNoProductsMessage()).toContainText('No products were found');
            }
        })
    }
})