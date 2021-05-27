let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function longerName(testArray) {

  let longName = testArray[0];
  for (let key in testArray) {

    if (longName.length < testArray[key].length) {
      longName = testArray[key];
    }
  }
  return longName;
}