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
const eqObjects = (obj1, obj2) => {
  let output = true;
  let mainObj = obj1;
  let subObj = obj2;
  if (Object.keys(obj1).length < Object.keys(obj2).length) {
    mainObj = obj2;
    subObj = obj1;
  }
  for (let key in mainObj){
    if (typeof(mainObj[key]) === 'object' && !Array.isArray(mainObj[key]) && typeof(subObj[key]) === 'object' && !Array.isArray(subObj[key])) {
      output = eqObjects(mainObj[key], subObj[key]);
    }else if (typeof(mainObj[key]) === 'object' && Array.isArray(mainObj[key]) && typeof(subObj[key]) === 'object' && Array.isArray(subObj[key])) {
      output = eqArrays(mainObj[key], subObj[key]);
    }else if (mainObj[key] !== subObj[key]) {
      output = false;
    }
  }
  return output;
};


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

const Test1 = {a: 1,b:{c:2,d:2}};
const Test2 = {a: 1, b:{c:2}, d: 2};
console.log(eqObjects(Test1, Test2)); // => false

const Test3 = {a: 1,b:{c:2,d:2}};
const Test4 = {b:{c:2,d:2}, a:1};
console.log(eqObjects(Test3, Test4)); // => true

assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd2,dc),false);