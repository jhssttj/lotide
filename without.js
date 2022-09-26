//The function below will determine if two arrays are equal and pass or fail if they are
const assertArraysEqual = function(actual, expected) {
  let finalPass = eqArrays(actual, expected);
  if (finalPass) {
    finalPass = (`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass = (`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(finalPass);
  return finalPass;
};
//The function below will compare each element in the two arrays and see if they are identical or not
function eqArrays(array1, array2) {
  let output = true;
  if (array1.length !== array2.length) return false;
  array1.forEach((element,index) => {
    if (Array.isArray(array1[index]) || Array.isArray(array2[index])) {
      output = eqArrays(array1[index], array2[index]);
    }else if (array1[index] !== array2[index]) {
      output = false;
    }
  }) 
  return output;
};

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