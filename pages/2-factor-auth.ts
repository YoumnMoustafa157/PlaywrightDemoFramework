import { Locator, Page, test as base } from '@playwright/test';
import * as loginCredentials from '../test-data/login-credentials.json';
import { LoginPage } from './login-page';

export class _2FAPage {
	private loginPage: LoginPage;
	private readonly page: Page;
	private readonly authCode: Locator;
	private readonly verifyBtn: Locator;
	private readonly goBackBtn: Locator;
	private readonly _2FATitle: Locator;

	constructor(page: Page) {
		// page and locators intialization
		this.authCode = page.locator('');
		this.verifyBtn = page.locator('');
		this.goBackBtn = page.locator('');
		this._2FATitle = page.locator('');
	}

	// Getters
	async get2FATitle() {
		return this._2FATitle;
	}

	// Actions
	async fillAuthCode(authCode: string) {
		await this.authCode.fill(authCode);
	}

	async clickOnVerifyBtn() {
		await this.verifyBtn.click();
	}

	async clickOnGoBackBtn() {
		await this.goBackBtn.click();
	}
	async performValidE2ELogin({ page }) {
		this.loginPage = new LoginPage(page);
		await this.loginPage.navigateToLoginPage();
		await this.loginPage.fillEmail(loginCredentials.validEmail);
		await this.loginPage.fillPassword(loginCredentials.validPassword);
		await this.loginPage.clickOnsignInBtn();
		await this.fillAuthCode('');
		await this.clickOnVerifyBtn();
	}
}
