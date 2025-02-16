import { Page } from '@playwright/test';

export class RegisterPage {
    private page: Page;
    private signupLink = '#signin2';
    private usernameInput = '#sign-username';
    private passwordInput = '#sign-password';
    private signupButton = '//button[@onclick="register()"]';
    private closeButton = '//button[@onclick="register()"]/preceding-sibling::button';

    constructor(page: Page) {
        this.page = page;
    }

    async goToWebsite(): Promise<void> {
        await this.page.goto("https://www.demoblaze.com/");
    }

    async signup(username: string, password: string): Promise<void> {
        await this.page.locator(this.signupLink).click();
        await this.page.waitForSelector(this.usernameInput, { state: "visible" });
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.signupButton).click();
        await this.page.locator(this.closeButton).click();
    }
}
