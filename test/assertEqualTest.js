/*//test/assertEqualTest.js
const assertEqual = require('../assertEqual');

//Test Case
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

//testing with Mocha
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#AssertEquals", () => {
  it("return true for comparing 1 to 1", () => {
    assert.strictEqual(assertEqual(1, 1), `😀😀😀Assertion Passed: 1 === 1`);
  })
  it("returns false for comparing 1 to 2", () => {
    assert.strictEqual(assertEqual(1, 2), `🤬🤬🤬Assertion Failed: 1 !== 2`);
  });;
});

