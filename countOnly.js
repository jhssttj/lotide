//Call in assertEqual function
const assertEqual = require('./assertEqual');

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

module.exports = countOnly;

//Test Case
/*const firstNames = [
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


/*const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);*/

