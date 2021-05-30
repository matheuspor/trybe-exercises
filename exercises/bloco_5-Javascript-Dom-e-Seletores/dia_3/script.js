function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const listDays = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  for (let key of dezDaysList) {
    let createDay = document.createElement('li');
    createDay.innerText = key;
    createDay.className = 'day';
    listDays.appendChild(createDay);
    if (key === 24 || key === 25 || key === 31) {
      createDay.className += ' holiday';
    }
    if (key === 4 || key === 11 || key === 18 || key === 25) {
      createDay.className += ' friday';
    }
  }
}

createDaysOfTheMonth();

function createButtonFeriado(buttonName) {
  let button = document.createElement('button');
  button.innerText = buttonName
  button.id = 'btn-holiday';
  let divCointainer = document.querySelector('.buttons-container');
  divCointainer.appendChild(button);
}

createButtonFeriado('Feriados');

function clickButtonHoliday() {
  let holidays = document.querySelectorAll('.holiday');
  for (let index of holidays) {
    if (index.style.backgroundColor === 'red') {
      index.style.backgroundColor = 'rgb(238,238,238';
    }
    else index.style.backgroundColor = 'red';
  }
}

let button = document.querySelector('#btn-holiday');
button.addEventListener('click', clickButtonHoliday);

function createButtonFriday(buttonName) {
  let button = document.createElement('button');
  button.innerText = buttonName
  button.id = 'btn-friday';
  let divCointainer = document.querySelector('.buttons-container');
  divCointainer.appendChild(button);
}

createButtonFriday('Sexta-feira');

function clickButtonFriday() {
  let fridays = [4, 11, 18, 25];
  let buttonFriday = document.querySelector('#btn-friday');
  buttonFriday.addEventListener('click', function () {
    let friday = document.querySelectorAll('.friday');
    for (let index in friday) {
      if (friday[index].innerText === 'SEXTOU!') {
        friday[index].innerText = fridays[index];
      } else friday[index].innerText = 'SEXTOU!';
    }
  })
};

clickButtonFriday();

function addZoom() {
  let day = document.querySelector('#days');
  day.addEventListener('mouseover', function () {
    event.target.style.fontSize = '30px';
  })
}

function remZoom() {
  let day = document.querySelector('#days');
  day.addEventListener('mouseout', function () {
    event.target.style.fontSize = '20px';
  })
}

addZoom();
remZoom();

function addTask(task) {
  let span = document.createElement('span');
  span.innerText = task;
  let div = document.querySelector('.my-tasks');
  div.appendChild(span);
}

addTask('Cozinhar');

function addCaps(cor) {
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = cor;
  let div = document.querySelector('.my-tasks');
  div.appendChild(newDiv);
}

addCaps('red');