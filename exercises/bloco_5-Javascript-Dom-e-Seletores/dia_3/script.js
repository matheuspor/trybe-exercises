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