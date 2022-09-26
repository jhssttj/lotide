//Call in eqArrays function
const eqArrays = require('./eqArrays');
//Call in eqObjects function
const eqObjects = require('./eqObjects')

/*The function below will take two objects and print a message.
The message printed to the console should be similar to that of assertArraysEqual. */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual,expected)) {
    console.log(`😀😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🤬🤬🤬Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
  return;
};

module.exports = assertObjectsEqual;
/*/Test Case
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);*/

