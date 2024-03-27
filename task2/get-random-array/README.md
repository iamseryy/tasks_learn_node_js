Simple utils to create a random string array or number array

## Quickstart
To create a random array...

1. Install
```
npm install get-random-array 
```
2. Create array
```
const randomArray = require('get-random-array');
randomArray.getRandomNumberArray(2, 8, 4); // [3, 7, 4, 6] 
randomArray.getRandomStringArray(3); // ['drgewa', 'wq', 'fserts'] 
```
## API
| Function | Description | Parameters | Return |
|----------|----------|----------|----------|
| getRandomNumberArray | getting an array of random numbers | @param {Number} min lower bound, @param {Number} max higher bound, @param {Integer} size array size   | @return {Array} array of random numbers |
| getRandomStringArray | getting an array of random strings | @param {Integer} size array size   | @return {Array} array of random strings |


## License
Copyright (c) 2024 Sergei Perminov Licensed under the MIT license.