const assertArraysEqual = function(actual, expected) {
  let finalPass = eqArrays(actual, expected);
  if (finalPass) {
    finalPass =(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass =(`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass
};

function eqArrays(array1, array2){
  for (i = 0; i < array1.length; i ++){
    if(array1.length !== array2.length){
      return false;
    }
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

console.log(assertArraysEqual([1,2,3],[1,2,3]));