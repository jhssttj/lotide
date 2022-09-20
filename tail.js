const tail = function(element) {
  let finalArray = [];
  for (let i = 0; i < element.length; i++) {
    if (i !== 0) {
      finalArray.push(element[i]);
    }
  }
  return finalArray;
};

const assertEqual = function(actual, expected) {
  let finalPass = ''
  if (actual === expected) {
    finalPass =(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass =(`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"