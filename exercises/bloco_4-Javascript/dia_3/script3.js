// Exercício 3

let num = 5;
let counter = num;

for (let index = 0; index < num; index += 1) {
  let asteriscos = "";

  for (let index2 = 0; index2 <= num; index2 += 1) {

    if (index2 < counter) {
      asteriscos += " "
    } else {
      asteriscos += "*";
    }
  }
  counter -= 1;
  console.log(asteriscos);
}