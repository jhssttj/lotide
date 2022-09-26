/*//test/middleTest.js
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test Case
assertArraysEqual(middle([1,3,5,7,9,11]),[5,7])
assertArraysEqual(middle([1,3,5,7,9,11,12]),[7])*/

//testing with Mocha
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5,7] for [1,3,5,7,9,11]", () => {
    assert.deepEqual(middle([1,3,5,7,9,11]), [5,7]);
  })
  it("returns [7] for [1,3,5,7,9,11,12]", () => {
    assert.deepEqual(middle([1,3,5,7,9,11,12]), [7]);
  });;
});
