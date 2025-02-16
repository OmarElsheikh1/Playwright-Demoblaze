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
        await this.page.waitForSelector(this.productName, { state: "visible" });

        const productText = await this.page.locator(this.productName).innerText();
        expect(productText).toContain('Apple monitor 24');
    }

    async placeAnOrder(): Promise<void> {
        await this.page.locator(this.placeOrderButton).click();
    }
}