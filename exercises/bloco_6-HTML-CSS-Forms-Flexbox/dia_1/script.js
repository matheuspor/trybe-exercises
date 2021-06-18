function addStates() {
  let stateSelect = document.querySelector('#estado-select');
  const allStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  for (let index = 0; index < allStates.length; index += 1) {
    let newState = document.createElement('option');
    stateSelect.appendChild(newState).innerText = allStates[index];
  }
}

addStates();