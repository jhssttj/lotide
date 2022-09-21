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


//The function below takes a string, separate it into an object with a property of the letter used in the word, and its value to be the number of time the letter is used.
const countLetters = function(string){
  let finalObject = {};
  let convertString = string.split(' ').join('');
  for (let letter of convertString) {
    if (!finalObject[letter]) {
      finalObject[letter] = 0;
    }
    finalObject[letter]++;
  }
  return finalObject;
}


//Test Case
console.log(countLetters('lighthouse in the house'));
assertEqual(countLetters('hih').h,2);

