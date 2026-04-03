import { expect } from '@playwright/test';
import { test } from '../fixtures/BaseTest';
import { HomePage } from '../pages/HomePage';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname,"..","testdata/productsData.json");
const fileData = fs.readFileSync(filePath,'utf-8');
const testData = JSON.parse(fileData);

test.describe('Click Product', () => {
    for(const data of testData){
        test(`Click Product ${data.name}`, async ({home}) => {
            
            await home.gotoHomePage();
            await home.search().searchProduct(data.name);
            const totalProducts = await home.productsList().getProducts().count();
            if(totalProducts === 0){
                expect(data.status.toLowerCase()).toBe('invalid');
                await expect(home.productsList().getNoProductsMessage()).toContainText('No products were found');
                return;
            }
            const index = Math.floor(Math.random() * totalProducts);
            const clicked = await home.productsList().clickProduct(index);

            if( data.status.toLowerCase() === "valid"){
                const expectedProduct = clicked.toLowerCase().trim().replace(/\s+/g,'-');
                await expect(home.page).toHaveURL(new RegExp(`.*${expectedProduct}.*`));
            }
            else{
                expect(clicked).toBeFalsy();
            }
        })
    }
})