let testArray = [2, 4, 6, 7, 10, 0, -3, 20];


function maxArray(array) {
  let numberMaxKey = 0;

  for (let key in array) {
    if (array[numberMaxKey] < array[key]) {
      numberMaxKey = key;
    }
  }
  return numberMaxKey;
}

console.log(maxArray(testArray));