import { Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    private monitorsLink = '[onclick="byCat(\'monitor\')"]';
    private monitorName = 'a:has-text("Apple monitor 24")';
    private addToCartButton = 'a:has-text("Add to cart")';

    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(): Promise<void> {
        await this.page.locator(this.monitorsLink).click();
        await this.page.waitForSelector(this.monitorName, { state: "visible" });
        await this.page.locator(this.monitorName).click();
        await this.page.locator(this.addToCartButton).click();
        await this.page.waitForTimeout(1000); // Ensure add to cart success
    }
}