// cucumber config
const assert = require('assert')
const {Given, When, Then} = require('@cucumber/cucumber')

// selenium config
const {Builder, By, Key, until} = require('selenium-webdriver')
const driver = new Builder().forBrowser('firefox').build()

// steps
Given('que o usuário esteja no site de pesquisa google', async function () {
    await driver.get('https://google.com')
    
    await driver.wait(until.elementLocated(By.name('q')))

});

When('pesquisar pelo termo {string}', async function (termo) {
    let searchBar = await driver.findElement(By.name('q'))
    await searchBar.sendKeys(termo, Key.RETURN)
    await searchBar.submit()

    await driver.wait(until.elementLocated(By.id('rso')), 10000)

});

Then('o sistema deve exibir resultados sobre node', async function () {
    let searchTitle = await driver.getTitle()
    console.log('Titulo: ', searchTitle)
});

Then('fechar a página', async function () {
    await driver.quit()
});