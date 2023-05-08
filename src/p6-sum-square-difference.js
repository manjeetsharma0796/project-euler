const sumOfNumber = function(numberOfTerms) {
  const n = numberOfTerms;

  return n * (n + 1) / 2;
};

const squareOfSum = function(numberOfTerms) {
  const sum = sumOfNumber(numberOfTerms);

  return sum ** 2;
};

exports.sumOfNumber = sumOfNumber;
exports.squareOfSum = squareOfSum;
