const getNthPrimeCandidate = function(number) {
  if(number === 1) {
    return 2;
  }

  if(number === 2) {
    return 3;
  }

  if(number === 3) {
    return 5;
  }

  let n = Math.floor(number / 2) + 1;
  const signs = [-1, 1];

  return 6 * n + signs[number % 2];
};

const isPrime = function(possiblePrime) {
  let possibleFactor = 2;

  while(possibleFactor < possiblePrime) {
    if(possiblePrime % possibleFactor === 0) {
      return false;
    }

    possibleFactor++;
  }

  return true;
};

exports.getNthPrimeCandidate = getNthPrimeCandidate;
exports.isPrime = isPrime;
