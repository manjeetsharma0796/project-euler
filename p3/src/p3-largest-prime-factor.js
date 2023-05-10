const getNthPrimeCandidate = function(number) {
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

const largestPrimeFactor = function(number) {
  const primeSet = [];
  let currentNumber = number;
  let possiblePrimeFactor = 2;
  let iteration = 0;

  if(currentNumber % possiblePrimeFactor === 0) {
    primeSet.push(possiblePrimeFactor);
  }

  possiblePrimeFactor = 3;

  if(currentNumber % possiblePrimeFactor === 0) {
    primeSet.push(possiblePrimeFactor);
  }

  while(possiblePrimeFactor < currentNumber) {
    possiblePrimeFactor = getNthPrimeCandidate(iteration);

    if(isPrime(possiblePrimeFactor) === true && currentNumber % possiblePrimeFactor === 0) {
      currentNumber = currentNumber / possiblePrimeFactor;
      primeSet.push(possiblePrimeFactor);
    }

    iteration++;
  }

  return primeSet.at(-1);  
};

console.log(largestPrimeFactor(33333));
