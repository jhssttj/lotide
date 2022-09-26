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

//The function below scans an object and return the first key for which callback returns a truthy value
findKey = (object,callBack) => {
  for (key in object) {
    if (callBack(object[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;

/*console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")*/
