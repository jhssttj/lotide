const assertArraysEqual = function(actual, expected) {
  let finalPass = eqArrays(actual, expected);
  if (finalPass) {
    finalPass =(`😀😀😀Assertion Passed: ${actual} === ${expected}`);
  } else {
    finalPass =(`🤬🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
  return finalPass
};

function eqArrays(array1, array2){
  for (i = 0; i < array1.length; i ++){
    if(array1.length !== array2.length){
      return false;
    }
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

function without(source,itemsToRemove) {
  let finalArr = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < finalArr.length; j++) {
      if (finalArr[j] === itemsToRemove[i]) {
        finalArr.splice(j,1);
      }
    }
  }
  return finalArr;
}



console.log(assertArraysEqual(without(['hello','world','light'],['light']), ["hello", "world"]));