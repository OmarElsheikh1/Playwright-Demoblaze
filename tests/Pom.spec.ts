import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { PurchasePage } from '../pages/PurchasePage';

test.describe("POM Test Suite", () => {

    test("Login, add product to cart, and place an order", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const purchasePage = new PurchasePage(page);

        // Login to the website
        await loginPage.goToLoginPage();
        await loginPage.login("omar_demo", "123456");

        // Add item to cart
        await homePage.addProductToCart();

        // Place an order
        await cartPage.assertMonitorWasAdded();
        await cartPage.placeAnOrder();

        // Purchase the product
        await purchasePage.placeAnOrder();
    });

});