const head = function(element){
  return element[0];
}

const assertEqual = function(actual, expected) {
  let finalPass = ''
  if (actual === expected) {
    finalPass =(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass =(`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass
};

console.log(assertEqual(head([5,6,7]), 2));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

