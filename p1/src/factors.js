const generateFactors = function(number) {
  let potentialFactor = 2;
  const factors = [];
  let currentNumber = number;

  while(currentNumber > 1) {
    if(currentNumber % potentialFactor === 0) {
      currentNumber = currentNumber / potentialFactor;
      factors.push(potentialFactor);
    } else {
      potentialFactor += 1;
    }
  };

  return factors;
};
