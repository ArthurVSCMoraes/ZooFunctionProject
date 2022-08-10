const data = require('../data/zoo_data');

const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants[0]) {
    return 0;
  }
  const count = countEntrants(entrants);

  const totalAdulto = prices.adult * count.adult;
  const totalCriança = prices.child * count.child;
  const totalIdoso = prices.senior * count.senior;
  const total = totalAdulto + totalCriança + totalIdoso;
  return total;
}

module.exports = { calculateEntry, countEntrants };
