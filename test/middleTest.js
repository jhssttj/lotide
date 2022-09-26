//test/middleTest.js
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test Case
assertArraysEqual(middle([1,3,5,7,9,11]),[5,7])
assertArraysEqual(middle([1,3,5,7,9,11,12]),[7])
