import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { _2FAPage } from '../pages/2-factor-auth';

type pages = {
	loginPage: LoginPage;
	_2faPage: _2FAPage;
};

const testPages = baseTest.extend<pages>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	_2faPage: async ({ page }, use) => {
		await use(new _2FAPage(page));
	}
});

export const test = testPages;
export const expect = testPages.expect;
