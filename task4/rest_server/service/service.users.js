const repository = require('../repository/repository')


function findAll() {
    return repository.findAll()
}



module.exports = {findAll}