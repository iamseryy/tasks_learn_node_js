const express = require('express')
const { engine } = require('express-handlebars')
const routes = require('./routes/handlers');


const server = express()
const PORT = 8989

server.use(express.static('public'))

server.engine('handlebars', engine())
server.set('view engine', 'handlebars')
server.set('views', './views')

server.use('/', routes);

server.listen(PORT, () => {
    console.log(`${new Date()} INFO: server started, port: ${PORT}`)
})