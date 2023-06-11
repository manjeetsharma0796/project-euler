const { isPrime } = require('prime');

const sumOfPrime = (lowerLimit, upperLimit) => {
  let currentNumber = lowerLimit;
  const primeSum = {
    sum: 0
  }

  while (currentNumber < upperLimit) {
    if (isPrime(currentNumber)) {
      primeSum.sum += currentNumber;
    }

    currentNumber++;
  }

  return primeSum;
};

exports.sumOfPrime = sumOfPrime;