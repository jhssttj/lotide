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

//The function below will compare each element in the two arrays and see if they are identical or not
function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i ++) {
    if (array1.length !== array2.length) {
      return false;
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//The function below will take two objects and returns true or false based on a perfect match
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectKey = Object.keys;
  if (objectKey(object1).length !== objectKey(object2).length){
    return false;
  }
  for (let key1 in object1){
    for (let key2 in object2){
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

//TestCase
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd2,dc),false);