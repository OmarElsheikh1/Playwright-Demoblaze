import { Page } from '@playwright/test';

export class PurchasePage {
    private page: Page;
    private nameField = '#name';
    private countryField = '#country';
    private cityField = '#city';
    private creditCardField = '#card';
    private monthField = '#month';
    private yearField = '#year';
    private purchaseButton = 'button:has-text("Purchase")';

    constructor(page: Page) {
        this.page = page;
    }

    async placeAnOrder(): Promise<void> {
        await this.page.locator(this.nameField).fill('Omar');
        await this.page.locator(this.countryField).fill('Egypt');
        await this.page.locator(this.cityField).fill('Mansoura');
        await this.page.locator(this.creditCardField).fill('123456789');
        await this.page.locator(this.monthField).fill('3');
        await this.page.locator(this.yearField).fill('2025');
        await this.page.locator(this.purchaseButton).click();
    }
}
