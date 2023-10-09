// interceptDefinition.js file

const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")


Then('Intercept HTTP call', async function() {
    // Intercept HTTP call:
    const testData = JSON.parse(JSON.stringify(require('../../../fixtures/data.json')));
    await page.route(
        '**/v2/swagger.json',
        async(route) => {
            route.fulfill({ json: testData });
        }
    );

    // Go to web page:
    await page.goto("https://petstore.swagger.io/")

    // Wait until page is visible:
    await page
        .locator('//h2[@class="title"]')
        .waitFor({ state: "visible" })

    // Take screenshot of all page:
    await page.screenshot({ path: 'screenshots/intercept.png', fullPage: true });
    await page.screenshot({ path: '__screenshots__/e2e/visualTesting.spec.js/screenshots-visualCheck.png' });
})