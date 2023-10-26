import { test, expect } from "@playwright/test";
//Number 1
test("testing testing", async function ({page}) {

    await page.goto("http://127.0.0.1:5501/client/index.html");

    const locateHeading = page.getByRole("heading", "text=Find 15 Minute Meals. Fast.")
    await expect(locateHeading).toBeVisible();
});