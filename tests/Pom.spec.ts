import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { PurchasePage } from '../pages/PurchasePage';

test.describe("POM Test Suite", () => {

    test("Login, add product to cart, and place an order", async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const purchasePage = new PurchasePage(page);


        // Register to the website
        await registerPage.goToWebsite();
        await registerPage.signup("omar4_demo", "123456");

        // Login to the website
        await loginPage.login("omar_demo", "123456");

        // Add item to cart
        await homePage.addProductToCart();

        // Place an order
        await cartPage.assertMonitorWasAdded();
        await cartPage.placeAnOrder();

        // Purchase the product
        await purchasePage.placeAnOrder();
        // Verify successful purchase
        await purchasePage.assertPurchaseSuccess();
    });

});