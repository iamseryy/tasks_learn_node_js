const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const filepath = path.join(__dirname, 'users.json')


let users = ''

fs.readFile(filepath, (error, data) => {

    if(error) throw new Error('Repository error')

    users = JSON.parse(data.toString())
})

const findAll = () => users

const findById = (id) => users.find((user) => user.id === id)

function add(user) {
    const id = uuid.v4()

    users.push ({
        id: id,
            ...user
    })

    fs.writeFileSync(filepath, JSON.stringify(users, null, 2))

    return id
}

function update(userForUpdate) {
    const user = findById(userForUpdate.id)

    fs.writeFileSync(filepath, JSON.stringify(users, null, 2))

    return user
}

function remove(id) {
    const user = findById(id)

    if(!user) return null

    users.splice(users.indexOf(user), 1)
    fs.writeFileSync(filepath, JSON.stringify(users, null, 2))

    return user
}


module.exports = {findAll, findById, add, update, remove}