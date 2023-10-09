// taskDefinition.js file

const { Given, When, Then } = require('@cucumber/cucumber')
    // import expect for assertion
const { expect } = require("@playwright/test")


Given('El navegador muestra la página de Google', async function() {
    // Navigate to the app
    await page.goto("https://google.com")

    await page
        .locator('//*[@id="L2AGLb"]')
        .click()

    const googleLocator = page.locator('//*[@id="hplogo"]')

    // Assert that locator is visible
    expect(googleLocator).toBeVisible()
})

When('El usuario busca la palabra {string}', async function(search) {
    // Write text:
    await page
        .locator('//*[@id="APjFqb"]')
        .fill(search)

    // Search text:
    await page
        .locator('//*[@name="btnK"]')
        .locator('visible=true')
        .first()
        .click()
})

Then('Se muestra un enlace a Wikipedia sobre {string}', async function(text) {
    const linkLocator = await page
        .locator('//h3[contains(text(), "Wikipedia")]')
        .locator('visible=true')
        .first()

    // linkLocator.scrollIntoViewIfNeeded()

    console.log(await linkLocator.allTextContents())

    expect(linkLocator)
        .toContainText("hols", { ignoreCase: true })
})