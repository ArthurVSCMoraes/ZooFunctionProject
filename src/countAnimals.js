const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const especies = {};
    species.forEach((parametro) => {
      especies[parametro.name] = parametro.residents.length;
    });
    return especies;
  }
  const { residents } = species.find((specie) =>
    specie.name === animal.specie);

  if (animal.sex) {
    return residents.filter((resident) =>
      resident.sex === animal.sex).length;
  }
  return residents.length;
}
module.exports = countAnimals;
