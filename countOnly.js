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


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let finalObject = {};
  let itemsKey = Object.keys(itemsToCount);

  for (let names in itemsToCount) {
    for (let givenNames of allItems) {
      if (givenNames === names && itemsToCount[names] === true) {
        if(!finalObject[names]) {
          finalObject[names] = 0;
        }
        finalObject[names]++;
      }
    }
  }
  return finalObject;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
module.exports = countOnly;
/*const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);*/

