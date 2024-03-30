const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const { engine } = require('express-handlebars')
const { readCount } = require("./service/service");

const app = express()
const PORT = 8989

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
    const counter = readCount('counter-home-page')
    res.render('index', {title: 'Task3', counter})
})

app.get('/about', (req, res) => {
    const counter = readCount('counter-about-page')
    res.render('about', {title: 'Task3', counter})
})

app.listen(PORT, () => {
    console.log(`${new Date()} INFO: server started, port: ${PORT}`)
})