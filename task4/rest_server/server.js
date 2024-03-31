const express = require('express')
const user = require('./routers/user')

const server = express()
const PORT = 8989
const router = express.Router()

server.use(express.json())
router.use('/user', user)
server.use(router)

server.listen(PORT, () => {
    console.log(`${new Date()} INFO: server started, port: ${PORT}`)
})