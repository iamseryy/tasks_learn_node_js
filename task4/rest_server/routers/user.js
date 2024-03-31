const express = require("express")
const usersService = require("../service/service.users")

const router = express.Router()


router.get('/', (req, res) => {
    return res.send(usersService.findAll())
})

router.get('/test', (req, res) => {
    return res.send("test_test")
})

module.exports = router