import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe("The user can register with valid data", () => {

    test("Register with valid data", async ({ page }) => {

        // Open the website
        await page.goto("https://www.demoblaze.com/");

        // Locate signup button, and click
        await page.locator("#signin2").click();

        // Locate username field, and fill
        await page.locator("#sign-username").fill("omar_demo");

        // Locate password field, and fill
        await page.locator("#sign-password").fill("123456");

        // Locate signup button, and click
        await page.locator('button:has-text("Sign up")').click();
    });

});