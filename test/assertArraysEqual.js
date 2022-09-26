//test/assertArraysEqual.js
const assertArraysEqual = require('../assertArraysEqual');

//Test case
assertArraysEqual([1,2,3,[4,5,6,7,[8,[9]]]],[1,2,3,[4,5,6,7,[8,[9]]]]);