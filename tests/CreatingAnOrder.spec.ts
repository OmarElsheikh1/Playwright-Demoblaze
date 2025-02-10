import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe("The user creates an order for an Apple monitor 24", () => {

    test("Creating an order", async ({ page }) => {

        // Open the website
        await page.goto("https://www.demoblaze.com/");


        // Locate login button, and click
        await page.locator("#login2").click();

        // Locate username field, and fill
        await page.locator("#loginusername").fill("omar_demo");

        // Locate password field, and fill
        await page.locator("#loginpassword").fill("123456");

        // Locate loging button, and click
        await page.locator('button:has-text("Log in")').click();

        // This wait is necessary to avoid getting another element from the page
        await page.waitForSelector('//div[@class = "list-group"]/a[4]');

        // Locate the monitors section, and click
        await page.locator('//div[@class = "list-group"]/a[4]').click();

        // Locate the Apple monitor 24, and click
        await page.locator('//div[@id="tbodyid"]/div[1]//h4').click();

        // Locate the Add to cart, and click
        await page.locator('a:has-text("Add to cart")').click();

        // Pause execution to inspect the browser before it closes
        await page.pause();
    });
});