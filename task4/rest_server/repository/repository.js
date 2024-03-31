const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, 'users.json')


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

function findAll() {
    if(!fs.existsSync(filepath)) throw new Error('Repository error')
     return JSON.parse(fs.readFileSync(filepath, 'utf-8'))
}

function findById(id) {
    if(!fs.existsSync(filepath)) throw new Error('Repository error')
    const users = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
    const user = users.find((user) => user.id === id
    return user
}

module.exports = {findAll}