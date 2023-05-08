const sumOfNumber = function(numberOfTerms) {
  const n = numberOfTerms;

  return n * (n + 1) / 2;
};

const squareOfSum = function(numberOfTerms) {
  const sum = sumOfNumber(numberOfTerms);

  return sum ** 2;
};

const sumOfSquare = function(numberOfTerms) {
  let sum = 0;
  for(let currentNumber = 0; currentNumber <= numberOfTerms; currentNumber++) {
    sum += (currentNumber ** 2);
  }

  return sum;
};


exports.sumOfNumber = sumOfNumber;
exports.squareOfSum = squareOfSum;
exports.sumOfSquare = sumOfSquare;
