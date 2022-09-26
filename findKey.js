//Call in assertEqual function
const assertEqual = require('./assertEqual');

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
