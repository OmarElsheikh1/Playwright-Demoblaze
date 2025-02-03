import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.describe("The user can Logout", () => {

    test("Logout", async ({ page }) => {

        // Open the website
        await page.goto("https://www.demoblaze.com/");

        // Locate logout button, and click
        await page.locator("#logout2").click();
    });
});