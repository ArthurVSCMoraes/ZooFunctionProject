const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((specie) => specie.name === animal)[0]
    .residents.every((residentes) => residentes.age >= age);
}

module.exports = getAnimalsOlderThan;
