/*//test/tailTest.js
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"*/

//testing with Mocha
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  })
  it("returns ['Lighthouse', ''Labs'] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']), ['Lighthouse', 'Labs']); 
  });;
});
