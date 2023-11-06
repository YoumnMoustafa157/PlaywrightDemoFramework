import { expect, test } from "@playwright/test";
import Template from "../pages/template";

test.describe("Template Page", () => {
	let template: Template;
	test("Template Page test case 1", async ({ page }) => {
		template = new Template(page);
		// OPEN URL
		await template.navigate();
		//Click on GET STARTED BUTTON
		await template.getStartedLoc.click();
		//Assert on the returned URL
		await expect(page).toHaveURL(/.*#get-started/);
	});
});
