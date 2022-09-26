//Call in assertEqual function
const assertEqual = require('./assertEqual');

//The function below will produce a new array with the first element removed
const tail = function(element) {
  let finalArray = [];
  for (let i = 0; i < element.length; i++) {
    if (i !== 0) {
      finalArray.push(element[i]);
    }
  }
  return finalArray;
};

module.exports = tail;
