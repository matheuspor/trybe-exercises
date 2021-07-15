const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise ((resolve, reject) => {
    const animal = Animals.find(animal => animal.age === age);
    if (animal) return resolve(animal);
    return reject ('Nenhum animal com essa idade!')
  })
);

const getAnimal = (age) => {
  return findAnimalByAge(age)
  .then(list => list);
};

module.exports = getAnimal;