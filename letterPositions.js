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

//The function below will return all the indices (zero-based positions) in the string where each characther is found.
const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (let letter of sentence) {
    if (!results[letter]){
      results[letter] = [];
    }
    results[letter].push(counter);
    counter++;
  }  
  delete results[' '];
  return results;
};

console.log(letterPositions('lighthouse in the house'))
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]));