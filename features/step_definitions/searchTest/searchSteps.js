// cucumber config
const assert = require('assert')
const {Given, When, Then} = require('@cucumber/cucumber')

const selenium = require('./searchScripts.js')

Given('que o usuário esteja no site de pesquisa google', function () {
    return selenium.openWeb()
});

When('pesquisar pelo termo {string}', function (termo) {
    return selenium.searchTerm(termo)
});

Then('o sistema deve exibir resultados sobre node', function () {
    return selenium.returnResult()
});

Then('fechar a página', function () {
    return selenium.quit()
});