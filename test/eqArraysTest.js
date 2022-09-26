/*//test/eqArraysTest.js
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3,[4,5,6,[7,8,[9,10]]]], [1, 2, 3,[4,5,6,[7,8,[9,10]]]]), true);
assertEqual(eqArrays([1, 2, 3,[4,5,6,[7,8,[9,10]]]], [1, 2, 3,4,5,6,7,8,9,10]), false);*/

//testing with Mocha
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for comparing [1,2,3] to [1,2,3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
  it("returns false for comparing [1, 2, 3,[4,5,6,[7,8,[9,10]]]] to [1, 2, 3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(eqArrays([1, 2, 3,[4,5,6,[7,8,[9,10]]]], [1, 2, 3,4,5,6,7,8,9,10]), false);
  });;
});
