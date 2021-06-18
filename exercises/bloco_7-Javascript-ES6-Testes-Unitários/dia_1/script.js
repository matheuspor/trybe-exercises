let count = 0
let counter = document.querySelector('#counter');

document.querySelector('#clickbtn').addEventListener('click', () => counter.innerHTML = count += 1);