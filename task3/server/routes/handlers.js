const express = require('express');
const service = require("../service/service");
const router = express.Router();

router.get('/', (req, res) => {
    const counter = service.incrementPageCounter('counter-home-page')
    res.render('index', {title: 'Task3', counter})
})

router.get('/about', (req, res) => {
    const counter = service.incrementPageCounter('counter-about-page')
    res.render('about', {title: 'Task3', counter})
})

module.exports = router