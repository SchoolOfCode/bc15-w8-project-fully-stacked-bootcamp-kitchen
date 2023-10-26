import { test, expect } from "@playwright/test";
//Number 1
test("testing testing", async function ({page}) {

    await page.goto("http://localhost:3000/dishes");
})