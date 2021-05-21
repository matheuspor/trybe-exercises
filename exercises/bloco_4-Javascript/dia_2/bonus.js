// Exercício bonus


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];
let contador = 0;

for (let index = 1; index < numbers.length; index += 1) {
  let mult = numbers[index] * numbers[contador];
  resultado.push(mult);
  contador += 1;

  if (index === numbers.length - 1) {
    mult = numbers[index] * 2;
    resultado.push(mult);
  }
}

console.log(resultado);