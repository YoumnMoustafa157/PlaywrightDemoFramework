import { Page, Video, Browser } from '@playwright/test';

export default class ScreenHandler {
	private page: Page;
	private readonly browser: Browser;
	private video: Video | null = null;

	constructor(page: Page, browser: Browser) {
		this.page = page;
		this.browser = browser;
	}

	// Common method to take a screenshot
	async takeScreenshot(fileName: string) {
		await this.page.screenshot({ path: '../test-data/screeshots/' + fileName });
	}

	// Method to start and save screen recording
	async takeScreenRecord(fileName: string) {
		const context = await this.browser.newContext({ recordVideo: { dir: '../test-data/videos/' + fileName } });
		this.page = await context.newPage();
		await this.page.video()?.saveAs('../test-data/videos/' + fileName);
	}
}
