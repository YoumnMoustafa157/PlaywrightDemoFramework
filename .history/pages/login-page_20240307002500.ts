import { Locator, Page, test as base } from '@playwright/test';

export class LoginPage {
	private readonly page: Page;
	private readonly baseURL: string;
	private readonly email: Locator;
	private readonly password: Locator;
	private readonly signInBtn: Locator;
	private readonly invalidLoginMsg: Locator;
	private readonly emptyEmailFieldMsg: Locator;
	private readonly emptyPasswordFieldMsg: Locator;

	constructor(page: Page) {
		// page and locators intialization
		this.email = page.locator('');
		this.password = page.locator('');
		this.signInBtn = page.locator('');
		this.invalidLoginMsg = page.locator('');
		this.emptyEmailFieldMsg = page.locator('');
		this.emptyPasswordFieldMsg = page.locator('');
	}

	// Getters
	async getInvalidLoginMsg() {
		return this.invalidLoginMsg;
	}

	async getEmptyEmailFieldMsg() {
		return this.emptyEmailFieldMsg;
	}

	async getEmptyPasswordFieldMsg() {
		return this.emptyPasswordFieldMsg;
	}

	// Actions
	async navigateToLoginPage() {
		await this.page.goto(this.baseURL);
	}

	async fillEmail(email: string) {
		await this.email.fill(email);
	}

	async fillPassword(password: string) {
		await this.password.fill(password);
	}

	async clickOnsignInBtn() {
		await this.signInBtn.click();
	}

	/*async validLogin(baseUrl: string, username: string, password: string) {
		await this.navigateToLoginPage(baseUrl);
		await this.fillUsername(username);
		await this.fillPassword(password);
		await this.clickOnLoginBtn();
	}*/
}
