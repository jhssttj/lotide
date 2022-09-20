const assertEqual = function(actual, expected) {
  let finalPass = ''
  if (actual === expected) {
    finalPass =(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass =(`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass
};

function eqArrays(array1, array2){
  for (i = 0; i < array1.length; i ++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));