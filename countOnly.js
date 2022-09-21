//This function will determine if the two input are identical and return true or false
const assertEqual = function(actual, expected) {
  let finalPass = '';
  if (actual === expected) {
    finalPass = (`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass = (`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass;
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let finalObject = {};
  let itemsKey = Object.keys(itemsToCount);

  for (let names in itemsToCount){
    for (let givenNames of allItems){
      if (givenNames === names && itemsToCount[names] === true){
        if(!finalObject[names]){
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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));