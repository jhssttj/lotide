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

/*Implement the function findKeyByValue which takes in an object and a value. 
It should scan the object and return the first key which contains the given value. 
If no key with that given value is found, then it should return undefined.*/
const findKeyByValue = function(object,keyValue) {
  for (let key in object) {
    if (keyValue === object[key]){
      return key;
    }
  }
  return undefined;
}

//Test Case
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = findKeyByValue;

/*assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);*/

module.exports = findKeyByValue;