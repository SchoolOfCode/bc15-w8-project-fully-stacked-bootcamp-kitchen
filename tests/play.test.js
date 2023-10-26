import { test, expect } from "@playwright/test";
//Number 1
test("testing testing", async function ({page}) {

    await page.goto("http://127.0.0.1:5502/client/index.html");

    const locateHeading = page.getByRole("heading", "text=Find 15 Minute Meals. Fast.")
    await expect(locateHeading).toBeVisible();

    const searchInput = page.locator(`input[placeholder="search meal"]`);

    await searchInput.type("Chicken");
    await expect(searchInput).toHaveValue("Chicken");
    await page.getByRole("button", { name: "Search" }).click();
});