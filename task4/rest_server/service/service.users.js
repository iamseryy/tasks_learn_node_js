const repository = require('../repository/repository')


const findAll = () => repository.findAll()

const findById = (id) => repository.findById(id)

const add = (user) => repository.add(user)

const update = (id, userForUpdate) => {
    let user = findById(id)

    if(!user) return null

    user.firstName = userForUpdate.firstName
    user.lastName = userForUpdate.lastName
    user.age = userForUpdate.age
    user.city = userForUpdate.city

    return repository.update(user)
}

const remove = (id) => repository.remove(id)


module.exports = {findAll, findById, add, update, remove}