const assert = require ('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(people[person]);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

console.log(typeof greetPeople());