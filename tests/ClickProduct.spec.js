import { test,expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname,"..","testdata/productsData.json");
const fileData = fs.readFileSync(filePath,'utf-8');
const testData = JSON.parse(fileData);

test.describe('Click Product', () => {
    for(const data of testData){
        test(`Click Product ${data.name}`, async ({page}) => {
            
            const home = new HomePage(page);
            await home.gotoHomePage();
            await home.searchProduct(data.name);
            const totalProducts = await home.getProducts().count();
            if(totalProducts === 0){
                expect(data.status.toLowerCase()).toBe('invalid');
                await expect(home.getNoProductsMessage()).toContainText('No products were found');
                return;
            }
            const index = Math.floor(Math.random() * totalProducts);
            const clicked = await home.clickProduct(index);

            if( data.status.toLowerCase() === "valid"){
                const expectedProduct = clicked.toLowerCase().trim().replace(/\s+/g,'-');
                await expect(page).toHaveURL(new RegExp(`.*${expectedProduct}.*`));
            }
            else{
                expect(clicked).toBeFalsy();
            }
        })
    }
})