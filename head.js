//This function will return the first element in an array
const head = function(element) {
  return element[0];
};
//This function will determine if the two input are identical and return true or false
const assertEqual = function(actual, expected) {
  let finalPass = '';
  if (actual === expected) {
    finalPass = (`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass = (`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(finalPass);
  return finalPass;
};

//Test Case
assertEqual(head([5,6,7]), 2);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

