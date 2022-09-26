//Call in assertArraysEqual function
const assertArraysEqual = require('./assertArraysEqual');

//Call in eqArrays function
const eqArrays = require('./eqArrays');

//Map Function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

/*const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);*/

/*//Test case
assertArraysEqual(results1, ['g','c','t','m','t']);*/