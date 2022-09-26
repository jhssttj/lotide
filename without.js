//Call in assertArraysEquals function
const assertArraysEqual = require('./assertArraysEqual');
//Call in eqArrays function
const eqArrays = require('./eqArrays');

//The function below will remove any items in an array based on another array that dictates what to remove
function without(source,itemsToRemove) {
  let finalArr = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < finalArr.length; j++) {
      if (finalArr[j] === itemsToRemove[i]) {
        finalArr.splice(j,1,);
        i--;
        j--;
      }
    }
  }
  return finalArr;
};

module.exports = without;
/*//Test case
assertArraysEqual(without(['hello','world','light'],['light']), ["hello", "world"]);
console.log(without([5,5,6,7,'hello','test','uo',5,6,4,3,7,3,'hello',3],[5,6,7,'hello']))
console.log(without([1,2,3],[2,3]))*/