let nums = [5, 5, 2, 5, 8, 2, 5, 3, 3];



function maisRepete(numbs) {

  let numRepetido = 0;
  let contNum = 0;
  let maiorNumIndex = 0;

  for (let index in numbs) {
    let verificadorNum = numbs[index];
    for (let index2 in numbs) {
      if (verificadorNum === numbs[index2]) {
        contNum += 1;
      }
    }
    if (contNum > numRepetido) {
      numRepetido = contNum;
      maiorNumIndex = index;
    }
    contNum = 0;
  }
  return numbs[maiorNumIndex];
}

console.log(maisRepete(nums));