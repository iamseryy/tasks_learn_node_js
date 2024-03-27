/**
 * get-random-array - 1.0.3
 *
 * https://github.com/iamseryy/get-random-array
 *
 * Copyright (c) 2014 Sergei Perminov
 * Licensed under the MIT license.
 */

const lorem = require('lorem')


/**
 * @param {Number} min lower bound
 * @param {Number} max higher bound
 * @param {Integer} size array size
 * @return {Array} array of random numbers
 */
function getRandomNumberArray(min, max, size) {
    if(typeof min !== 'number' || typeof max !== 'number' || !Number.isInteger(size)) {
        return []
    }

    let array = []
    for (let i = 0; i < size;  i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return array
}

/**
 * @param {Integer} size array size
 * @return {Array} array of random strings
 */
function getRandomStringArray(size) {
    if(!Number.isInteger(size)) {
        return []
    }
    return lorem.ipsum(`w${size}`).split(' ')
}

module.exports = {getRandomNumberArray, getRandomStringArray};