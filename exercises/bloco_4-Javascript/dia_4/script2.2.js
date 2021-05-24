let testArray = [2, 3, 6, 7, 10, 1];


function maxArray(array) {
  let numberMaxKey = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > numberMaxKey) {
      numberMaxKey = index;
    }
  }
  return numberMaxKey;
}

console.log(maxArray(testArray));