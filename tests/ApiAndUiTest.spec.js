import { test,expect } from '@playwright/test';
import { AuthAPI } from '../api/auth.api';

test("Api and UI validation",async ({request}) => {
    const api = new AuthAPI(request);
    await api.createBuyerOrder();
})