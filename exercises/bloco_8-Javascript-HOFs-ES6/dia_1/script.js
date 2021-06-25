const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = (rightAnswers, studentAnswers) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index])
      count += 1;
  }
  console.log(count);
}

const checkAnswers = (rightAnswers, studentAnswers, result) => result;