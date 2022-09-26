//Call in assertArraysEquals function
const assertArraysEqual = require('./assertArraysEqual');
//Call in eqArrays function
const eqArrays = require('./eqArrays');

//The function below will yield the middle portion of an array which varies depending on number of elements in the array.
const middle = function(array){
  let middleArr = [];
  let middleIndex = Math.floor(array.length/2);
  if (array.length <= 2){
    return middleArr;
  } else {
      if (array.length % 2 === 0){
        middleArr.push(array[middleIndex - 1],array[middleIndex]);
      } else {
        middleArr.push(array[middleIndex]);
      }
  }
  return middleArr;
}

module.exports = middle;
