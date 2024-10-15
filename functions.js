const prompt = require('prompt-sync')();

const levels = {
  0: 'Ferro',
  1: 'Bronze',
  2: 'Prata',
  3: 'Prata',
  4: 'Prata',
  5: 'Ouro',
  6: 'Ouro',
  7: 'Platina',
  8: 'Ascendente',
  9: 'Imortal',
};

function classifyRank(wins, loses) {
  let balance = wins - loses;
  let level = Math.floor((wins - 1) / 10);
  let rank;
  if (wins == 0) {
    return { balanceWins: balance, level: levels[0] };
  }
  return { balanceWins: balance, level: levels[level] || 'Radiante' };
}

function getValidNaturalNumber(message) {
  let isValid = false;
  let data;
  while (!isValid) {
    data = prompt(message);
    data = parseInt(data, 10);
    if (isNaN(data) || data < 0) {
      console.log('Dados incorretos, tente novamente.');
    } else {
      return data;
    }
  }
}

module.exports = {
  classifyRank,
  getValidNaturalNumber,
};
