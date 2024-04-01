const express = require('express')
const usersService = require('../service/service.users')
const { userValidate } = require('../utils/joi/joi')


const router = express.Router()

router.get('/', (req, res) => {
    const users = usersService.findAll()
    res.send({users})
})

router.get('/:id', (req, res) => {
    const user = usersService.findById(req.params.id)

    if (!user) {
        res.status(404)
        return res.send({user: null})
    }

    return res.send({user})
})

router.post('/', (req, res) => {
    const resultValidation = userValidate(req.body)

    if (resultValidation.error) {
        return res.status(404).send({ error: resultValidation.error.details })
    }

    return res.send({id: usersService.add(req.body),})
})

router.put('/:id', (req, res) => {
    const resultValidation = userValidate(req.body)

    if (resultValidation.error) {
        return res.status(404).send({ error: resultValidation.error.details })
    }

    const user = usersService.update(req.params.id, req.body)

    if (!user) {
        res.status(404)
        return res.send({user: null})
    }

    return res.send({user})
})

router.delete('/:id', (req, res) => {
    const user = usersService.remove(req.params.id)

    if (!user) {
        res.status(404)
        return res.send({user: null})
    }

    return res.send({user})
})



module.exports = router