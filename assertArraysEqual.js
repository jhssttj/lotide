//Call in eqArrays function
const eqArrays = require('./eqArrays');

//The function below will determine if two arrays are equal and pass or fail if they are
const assertArraysEqual = function(actual, expected) {
  let finalPass = eqArrays(actual, expected);
  if (finalPass) {
    finalPass = (`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass = (`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(finalPass);
  return finalPass;
};

module.exports = assertArraysEqual;

/*Test case
assertArraysEqual([1,2,3,[4,5,6,7,[8,[9]]]],[1,2,3,[4,5,6,7,[8,[9]]]]);*/