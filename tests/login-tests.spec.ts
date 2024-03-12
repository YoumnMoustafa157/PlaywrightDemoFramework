import { test, expect } from '../fixtures/page-object-fixtures';
import * as loginCredentials from '../test-data/login-credentials.json';

//valid Email and Password
test('Login with valid credentials', async ({ loginPage, _2faPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.validEmail);
	await loginPage.fillPassword(loginCredentials.validPassword);
	await loginPage.clickOnsignInBtn();

	const _2FATitle = await _2faPage.get2FATitle();
	expect(await _2FATitle.isVisible()).toBeTruthy();
	//expect(await _2faPage.get2FATitle()).toBeVisible();
	//await page.close();
});

// Valid Email and invalid Password
test('Login with Valid Email and invalid Password', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.validEmail);
	await loginPage.fillPassword(loginCredentials.invalidPassword);
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getInvalidLoginMsg()).toBeVisible();
	//await page.close();
});

// Invalid Email and valid Password
test('Login with Invalid Email and valid Password', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.invalidEmail);
	await loginPage.fillPassword(loginCredentials.validPassword);
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getInvalidLoginMsg()).toBeVisible();
	//await page.close();
});

// Invalid Email and Invalid Password
test('Login with Invalid Email and Invalid Password', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.invalidEmail);
	await loginPage.fillPassword(loginCredentials.invalidPassword);
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getInvalidLoginMsg()).toBeVisible();
	//await page.close();
});

// Valid Email and empty Password
test('Login with Valid Email and empty Password', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.validEmail);
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getEmptyPasswordFieldMsg()).toBeVisible();
	//await page.close();
});

// Empty Email and valid Password
test('Login with Empty Email and valid Password', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillPassword(loginCredentials.validPassword);
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getEmptyEmailFieldMsg()).toBeVisible();
	//await page.close();
});

// Empty Email and Empty password
test('Login with Empty Email and Empty password', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getEmptyEmailFieldMsg()).toBeVisible();
	expect(await loginPage.getEmptyPasswordFieldMsg()).toBeVisible();
	//await page.close();
});

// Special characters for email and password
test('Login with special character', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail('user!@#');
	await loginPage.fillPassword('pa$$w#rd');
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getInvalidLoginMsg()).toBeVisible();
	//await page.close();
});

// Case Sensitivity
test('Login with case sensitvity', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.upperCaseEmail);
	await loginPage.fillPassword(loginCredentials.upperCasePassword);
	await loginPage.clickOnsignInBtn();

	expect(await loginPage.getInvalidLoginMsg()).toBeVisible();
	//await page.close();
});

// Check Email with wrong format with valid Password
test('Login with malformated email', async ({ loginPage }) => {
	await loginPage.navigateToLoginPage();
	await loginPage.fillEmail(loginCredentials.malformatedEmail);
	await loginPage.fillPassword(loginCredentials.validPassword);
	await loginPage.clickOnsignInBtn();
	//await page.close();
});
