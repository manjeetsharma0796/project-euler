const getPotentialPrimeOf = function(nthCandidate) {
  if(nthCandidate === 1) {
    return 2;
  }

  if(nthCandidate === 2) {
    return 3;
  }
  
  if(nthCandidate === 3) {
    return 5;
  }

  let number = nthCandidate - 3;
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

const getPrime = function(nth) {
  let currentTerm = 1;
  let primeCount = 0;
  while(primeCount <= nth) {
    const potentialPrime = getPotentialPrimeOf(currentTerm);
    if(isPrime(potentialPrime)) {
      primeCount += 1;
      if(primeCount === nth) {
        return potentialPrime;
      }
    } 
    currentTerm += 1;
  }
}

exports.getPotentialPrimeOf = getPotentialPrimeOf;
exports.isPrime = isPrime;
exports.getPrime = getPrime;