import { test, expect } from "@playwright/test";
//Number 1
test("testing testing", async function ({page}) {
    
    //User test for loading of home page. 
    await page.goto("http://127.0.0.1:5501/client/index.html");
     
    //Testing for header text
    const locateHeading = page.getByRole("heading", "text=Find 15 Minute Meals. Fast.")
    await expect(locateHeading).toBeVisible();

    //user test for input in search box
    const searchInput = page.locator(`input[placeholder="search meal"]`);
    await searchInput.type("Chicken");
    await expect(searchInput).toHaveValue("Chicken");

    //User test for search button click
    await page.getByRole("button", { name: "Search" }).click();

    //User test for text after search
   await expect(page.getByText("Struggle to find dishes to cook that take very little time but the whole family ")).toBeVisible();

    //User test for return to the home page by clicking on home icon.

    //await page.getByRole("path", { name: "M12,2.09961l-11,9.90039h3v9h6v-7h4v7h6v-9h3z"}).click();

    //User test to find heading on home page.
    //locateHeading = page.getByRole("heading", "text=Find 15 Minute Meals. Fast.")
    //await expect(locateHeading).toBeVisible();
});


/*import { test, expect } from "@playwright/test";
//Number 1
test("testing testing", async function ({page}) {

    await page.goto("http://127.0.0.1:5501/client/index.html");

    const locateHeading = page.getByRole("heading", "text=Find 15 Minute Meals. Fast.")
    await expect(locateHeading).toBeVisible();

    const searchInput = page.locator(`input[placeholder="search meal"]`);

    await searchInput.type("Chicken");
    await expect(searchInput).toHaveValue("Chicken");
    await page.getByRole("button", { name: "Search" }).click();
    await expect(page.getByText("Struggle to find dishes to cook that take very little time but the whole family ")).toBeVisible();
    await page.getByRole("navigation", { name: "Path" }).click();
    locateHeading = page.getByRole("heading", "text=Find 15 Minute Meals. Fast.")
    await expect(locateHeading).toBeVisible();
});*/