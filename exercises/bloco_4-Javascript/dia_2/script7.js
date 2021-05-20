// Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index of numbers) {
  if (index < menor) {
    menor = index;
  }
}

console.log(menor);

//