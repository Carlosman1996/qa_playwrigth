import { test, expect } from '@playwright/test';

test('Visual testing', async({ page }) => {
    // Go to web page:
    await page.goto("https://petstore.swagger.io/")

    // Wait until page is visible:
    await page
        .locator('//h2[@class="title"]')
        .waitFor({ state: "visible" })

    // Compare page:
    await expect(page)
        .toHaveScreenshot('screenshots/visualCheck.png');
})