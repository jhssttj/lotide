//The function below will return a slice of the array with elements taken from the beginning. It keeps going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  let finalArray = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    finalArray.push(element);
  }
  return finalArray;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);