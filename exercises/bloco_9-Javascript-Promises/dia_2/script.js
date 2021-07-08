// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(value => value.json())
    .then(prom => document.querySelector('#jokeContainer').innerText = prom.joke);
};

window.onload = () => fetchJoke();