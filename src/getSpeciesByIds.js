const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const empty = [];
  if (ids.lenght === 0) {
    return empty;
  }
  ids.forEach((id) => {
    const itens = data.species.find((specie) => specie.id === id);
    empty.push(itens);
  });
  return (empty);
}

module.exports = getSpeciesByIds;
