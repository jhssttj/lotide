//Call in assertArraysEqual function
const assertArraysEqual = require('./assertArraysEqual');

//Call in eqArrays function
const eqArrays = require('./eqArrays');

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

module.exports = letterPositions;
/*letterPositions('lighthouse in the house')
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);*/