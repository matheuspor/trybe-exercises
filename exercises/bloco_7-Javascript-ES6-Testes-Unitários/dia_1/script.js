const biggestWord = sentence => {
  const splitWords = sentence.split(' ');
  let bigWord = '';
  for (index of splitWords) {
    if (index.length > bigWord.length) {
      bigWord = index
    }
  }
  return bigWord;
}

console.log(biggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));