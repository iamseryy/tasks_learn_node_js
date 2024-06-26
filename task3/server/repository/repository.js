const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, 'counters.json')


function getPageCounter(page) {
    if(!fs.existsSync(filepath)) throw new Error('Repository error')
    const counters = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    return counters[page]
}

function savePageCounter(page, counter) {
    if(!fs.existsSync(filepath)) throw new Error('Repository error')
    const counters = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    counters[page] = counter
    fs.writeFileSync(filepath, JSON.stringify(counters, null, 2))
}


module.exports = {getPageCounter, savePageCounter}