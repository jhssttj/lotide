//The function below will determine if two arrays are equal and pass or fail if they are
const assertArraysEqual = function(actual, expected) {
  let finalPass = eqArrays(actual, expected);
  if (finalPass) {
    finalPass = (`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass = (`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass;
};
//The function below will compare each element in the two arrays and see if they are identical or not
function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1.length !== array2.length) {
      return false;
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
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

//Test Case
console.log(assertArraysEqual(middle([1,3,5,7,9,11]),[5,7]))
console.log(middle([1,2]))
console.log(middle([1,2,3,4,5]))
console.log(middle([1,2,3]))
console.log(middle([1,2,5,8,56,8,5,7,5,2]))
