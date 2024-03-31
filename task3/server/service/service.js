const repository = require("../repository/repository");

function incrementPageCounter(page) {
    let pageCounter = repository.getPageCounter(page)
    repository.savePageCounter(page, ++pageCounter)
    return pageCounter
}

module.exports = {incrementPageCounter}