//Call in assertArraysEqual function
const assertArraysEqual = require('./assertArraysEqual');

//Call in eqArrays function
const eqArrays = require('./eqArrays');

//The function below will take in an array containing elements including nested arrays of elements and return a "flattened" version of the array.
const flatten = function(array) {
  let finalArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        finalArray.push(nestedElement);
      }
    } else {
      finalArray.push(element);
    }
  }
  return finalArray;
}

module.exports = flatten;

/*console.log(flatten([1, 2, [3, 4], 5, [6]])); 
assertArraysEqual(flatten([1,2,[3,4],5,[6],'hello']),[1,2,3,4,5,6,'hello'])*/
