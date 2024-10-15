const { classifyRank, getNumberFromPrompt } = require('./functions');

const wins = getNumberFromPrompt('Digite a quantidade de vitórias do herói: ');
const loses = getNumberFromPrompt('Digite a quantidade de derrotas do herói: ');

const rank = classifyRank(wins, loses);

return console.log(
  `O Herói tem de saldo de ${rank['balanceWins']} está no nível de ${rank['level']}`
);
