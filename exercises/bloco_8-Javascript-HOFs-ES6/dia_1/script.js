const personId = (nome) => {
  const person = {
    nomeCompleto: nome,
    email: `${nome.replace(/ /g, "_")}@trybe.com`
  }
  return person
};

const newEmployees = () => {
  const employees = {
    id1: personId('João Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: personId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: personId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(personId));