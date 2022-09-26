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
//The function below will take two objects and returns true or false based on a perfect match
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectKey = Object.keys;
  if (objectKey(object1).length !== objectKey(object2).length) {
    return false;
  }
  for (let key1 in object1) {
    for (let key2 in object2) {
      console.log()
      if (key1 === key2 && Array.isArray(object1[key1]) && Array.isArray(object2[key2])) {
        if(eqArrays(object1[key1],object2[key2]) === false){
          return false;
        }
      } else if (key1 === key2) {
        if(object1[key2] !== object2[key2]){
          return false;
        }
      }
    }
  }
  return true;
}

/*The function below will take two objects and print a message.
The message printed to the console should be similar to that of assertArraysEqual. */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual,expected)) {
    console.log(`😀😀😀Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🤬🤬🤬Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

module.exports = assertObjectsEqual;
/*/Test Case
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);*/

