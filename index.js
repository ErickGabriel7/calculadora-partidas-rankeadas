const { classifyRank, getValidNaturalNumber } = require('./functions');

let wins = getValidNaturalNumber('Digite a quantidade de vitórias do herói: ');
let loses = getValidNaturalNumber('Digite a quantidade de derrotas do herói: ');

let rank = classifyRank(wins, loses);

console.log(
  `O Herói tem de saldo de ${rank['balanceWins']} está no nível de ${rank['level']}`
);
