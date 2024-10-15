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

function getLevel(wins) {
  if (wins <= 0) {
    return 0;
  }
  return Math.floor((wins - 1) / 10);
}

function classifyRank(wins, loses) {
  const balanceWins = wins - loses;
  const levelIndex = getLevel(wins);
  const level = levels[levelIndex] || 'Radiante';

  return { balanceWins, level };
}

function getNumberFromPrompt(message) {
  const data = prompt(message);
  const dataNumber = parseInt(data, 10);

  return dataNumber;
}

module.exports = {
  classifyRank,
  getNumberFromPrompt,
};
