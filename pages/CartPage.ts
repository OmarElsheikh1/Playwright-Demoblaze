import { Page, expect } from '@playwright/test';

export class CartPage {
    private page: Page;
    private cartSectionLink = '#cartur';
    private productName = '//tbody[@id = "tbodyid"]/tr[1]';
    private placeOrderButton = '[data-target="#orderModal"]';

    constructor(page: Page) {
        this.page = page;
    }

    async assertMonitorWasAdded(): Promise<void> {
        await this.page.locator(this.cartSectionLink).click();
        const product = this.page.locator(this.productName);
        await expect(product).toContainText('Apple monitor 24');
    }

    async placeAnOrder(): Promise<void> {
        await this.page.locator(this.placeOrderButton).click();
    }
}
