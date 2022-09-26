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
    }else if (array1[index] !== array2[index]) {
      output = false;
    }
  }) 
  return output;
};
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
