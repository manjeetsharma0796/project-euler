const {sumOfNumber,sumOfSquare, squareOfSum} = require('./src/p6-sum-square-difference.js');

const main = function() {
  const sumOfSquareFirstTen = sumOfSquare(100);
  const squareOfSumFirstTen = squareOfSum(100);
  const difference =  squareOfSumFirstTen - sumOfSquareFirstTen;

  console.log(difference);
};

main();
