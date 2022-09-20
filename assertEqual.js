const assertEqual = function(actual, expected) {
  let finalPass = ''
  if (actual === expected) {
    finalPass =(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass =(`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass
};


console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));