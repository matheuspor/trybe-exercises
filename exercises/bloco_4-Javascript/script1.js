// Exercício 1

let a = 1;
let b = 2;

console.log(a + b); // Soma //
console.log(a - b); // Subtração //
console.log(a * b); // Multiplicação //
console.log(a / b); // Divisão //
console.log(a % b); // Módulo //
//

// Exercício 2

let maior = 20;
let menor = 10;

if (maior > menor) {
  console.log(maior);
} else {
  console.log(menor)
}
//

// Exercício 3

let x = 5;
let y = 10;
let z = 30;

if (x > y && x > z) {
  console.log(x);
}
else if (y > x && y > z) {
  console.log(y);
} else {
  console.log(z);
}
//

// Exercício 4

let four = 0;

if (four > 0) {
  console.log('positive');
} else if (four < 0) {
  console.log('negative');
} else {
  console.log('zero');
}
//

// Exercício 5

let ang1 = 50;
let ang2 = 50;
let ang3 = 70;
let checkangles = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (checkangles) {
  if (ang1 + ang2 + ang3 === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Ângulo inválido');
}
//

// Exercício 6

//

// Exercício 7

let nota = 85;

if (nota > 100 || nota < 0) {
  console.log('Valor inválido');
}
else if (nota >= 90) {
  console.log('A');
}
else if (nota >= 80) {
  console.log('B');
}
else if (nota >= 70) {
  console.log('C');
}
else if (nota >= 60) {
  console.log('D');
}
else if (nota >= 50) {
  console.log('E');
} else {
  console.log('F')
}
//

// Exercício 8

let first = 7;
let second = 5;
let third = 3;

if (first % 2 === 0 || second % 2 === 0 || third % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}