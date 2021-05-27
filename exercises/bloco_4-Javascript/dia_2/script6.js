// Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index of numbers) {
  if (index % 2 != 0 ) {
    impares += 1;
  }
}

console.log(impares);

//