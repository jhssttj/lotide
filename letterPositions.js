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

letterPositions('lighthouse in the house')
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);