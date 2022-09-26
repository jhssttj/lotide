//test/eqArraysTest.js
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3,[4,5,6,[7,8,[9,10]]]], [1, 2, 3,[4,5,6,[7,8,[9,10]]]]), true);
assertEqual(eqArrays([1, 2, 3,[4,5,6,[7,8,[9,10]]]], [1, 2, 3,4,5,6,7,8,9,10]), false);

