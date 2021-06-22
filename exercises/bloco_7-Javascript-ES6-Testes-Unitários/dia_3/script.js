const assert = require('assert');
 const sumAllNumbers= (num) => {
   let counter = 0;
   for (let key of num) {
     counter += key;
   }
   return counter;
 }

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);