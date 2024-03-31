const express = require("express")

const router = express.Router()


router.get('/', (req, res) => {
    return res.send("test")
})

router.get('/test', (req, res) => {
    return res.send("test_test")
})

module.exports = router