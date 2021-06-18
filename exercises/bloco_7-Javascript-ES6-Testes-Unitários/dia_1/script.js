const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compare = (numberA, numberB) => {
  return numberA - numberB;
}

console.log(`Os números ${oddsAndEvens.sort(compare)} se encontram ordenados em ordem crescente`);

// source: https://www.w3schools.com/jsref/jsref_sort.asp