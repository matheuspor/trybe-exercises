
function sumNumbers(num) {
  let sum = 0;

  for (let index = 0; index <= num; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(sumNumbers(5));