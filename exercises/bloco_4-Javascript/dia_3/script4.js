// Exercício 4

let num = 5;
let asteriscos = '';
let midTriangle = (num + 1) / 2;

let ladoEsquerdo = midTriangle;
let ladoDireito = midTriangle;

for (let index = 0; index <= midTriangle; index += 1) {
  for (let index2 = 0; index2 <= num; index2 += 1) {
    if (index2 > ladoEsquerdo && index2 < ladoDireito) {
      asteriscos = asteriscos + '*';
    } else {
      asteriscos = asteriscos + ' ';
    }
  }
  console.log(asteriscos);
  asteriscos = '';
  ladoEsquerdo -= 1;
  ladoDireito += 1;
  
}
