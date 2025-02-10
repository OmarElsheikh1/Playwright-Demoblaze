import { Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    // XPath >>> private monitorsLink = '//div[@class = "list-group"]/a[4]';
    private monitorsLink = '[onclick="byCat(\'monitor\')"]';
    // XPath >>> private monitorName = '//div[@id="tbodyid"]/div[1]//h4';
    private monitorName = 'a:has-text("Apple monitor 24")';
    private addToCartButton = 'a:has-text("Add to cart")';

    constructor(page: Page) {
        this.page = page;

        // Handle dialog alerts globally
        this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }

    async addProductToCart(): Promise<void> {
        await this.page.locator(this.monitorsLink).click();
        await this.page.locator(this.monitorName).click();
        await this.page.locator(this.addToCartButton).click();
    }
}
