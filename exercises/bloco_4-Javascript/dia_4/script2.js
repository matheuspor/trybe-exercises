function verifyPalindrome(name) {
  let nameInverso = '';
  for (let index = name.length - 1; index >= 0; index -= 1) {
    nameInverso += name[index];
  }
  if (nameInverso === name) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyPalindrome('arara'));