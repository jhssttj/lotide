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
//The function below will compare each element in the two arrays and see if they are identical or not
function eqArrays(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  array1.forEach((element,index) => {
    if (Array.isArray(array1[index]) || Array.isArray(array2[index])) {
      output = eqArrays(array1[index], array2[index]);
    } else if (array1[index] !== array2[index]) {
      output = false;
    }
  }) 
  return output;
};

//Test case
assertArraysEqual([1,2,3,[4,5,6,7,[8,[9]]]],[1,2,3,[4,5,6,7,[8,[9]]]]);