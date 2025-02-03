import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe("Login test cases", () => {

    test("Should have the correct title", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Assertion
        await expect(page).toHaveTitle("QAcart Todo App - Login page");


        // const title = await page.title();
        // console.log(title);
    });

    test("Should have the correct url", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Assertion
        await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/");

        //  const url = await page.url();
        //  console.log(url);
    });

    test("Header should be visible by text", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Locate the header by text
        const header = page.locator("text = Login to Application");
        // Assertion
        await expect(header).toBeVisible();
    });

    test("Header should contain the correct text", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Locate the header by class name
        const header = page.locator('.header');
        // Assertion
        await expect(header).toHaveText('Login to Application');
    });

    test("Should be able to fill the email", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Locate the header by ID
        const emailField = page.locator("#email");
        await emailField.fill("omar@example.com");
        // Assertion
        await expect(emailField).toHaveValue("omar@example.com");
    });

    test("Should be able to fill the password by css selector", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Locate the header by CSS Selector
        const passwordField = page.locator('[data-testid="password"]');
        await passwordField.fill("12345678");
        // Pause
        await page.pause();
        // Assertion
        await expect(passwordField).toHaveValue("12345678");
    });

    test("Should be able to fill the password by xpath", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Locate the header by XPath
        const passwordField = page.locator('//input[@data-testid="password"]');
        await passwordField.fill("12345678");
        // Assertion
        await expect(passwordField).toHaveValue("12345678");
    });

    test("Should be able to click on the submit button", async ({ page }) => {

        // Open the website
        await page.goto("https://qacart-todo.herokuapp.com/");

        // Email field
        await page.locator("#email").fill("omar@example.com");

        // Password field
        await page.locator('[data-testid="password"]').fill("12345678");

        // Locate the header by XPath, Login button
        const submitButton = page.locator('button:has-text("Login")');
        await submitButton.click();

        // Assertion
        await expect(page).toHaveTitle("QAcart Todo App - Todos page");
    });
});