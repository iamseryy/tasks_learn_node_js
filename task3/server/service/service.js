const fs = require('fs');
const path = require('path');
const e = require("express");
const filepath = path.join(__dirname, '../repo/counters.json');


function readCount(page) {
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            return JSON.parse(data)
        }
    })

    return 9999
}


module.exports = {readCount}