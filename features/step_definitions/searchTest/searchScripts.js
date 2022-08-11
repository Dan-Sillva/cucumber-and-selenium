const {Builder, By} = require('selenium-webdriver')
const driver = new Builder().forBrowser('firefox').build()

module.exports = {openWeb, searchTerm, returnResult, quit}

async function openWeb() {
    return await driver.get('https://google.com')
}

async function searchTerm(termo){
    let searchBar = await driver.findElement(By.name('q'))
    let btnGo = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[1]'))

    await searchBar.sendKeys(termo)
    return await btnGo.click()

}

async function returnResult() {
    let firstResult = await driver.findElement(By.id('rso'))
    console.log(firstResult)
}

async function quit(){
    return await driver.quit()
}