import { Page, Locator } from "@playwright/test";
class Template {
	page: Page;
	locator: Locator;
	getStartedLoc: Locator;

	constructor(page: Page) {
		this.page = page;
		// Locators here
		this.locator = page.locator("");
		this.getStartedLoc = page.locator("#get-started");
	}
	async navigate() {
		await this.page.goto("/");
	}
}

export default Template;
