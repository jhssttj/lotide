//Call in assertEqual function
const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

/*//Test Case
console.log(countLetters('lighthouse in the house'));
assertEqual(countLetters('hih').h,2);*/


