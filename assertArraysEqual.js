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

//Test case
console.log(assertArraysEqual([1,2,3],[1,2,3]));