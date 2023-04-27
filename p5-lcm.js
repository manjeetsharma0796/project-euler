const generateSeries = function(start, upto) {
  const series = [];

  for(let currentNumber = start; currentNumber <= upto; currentNumber++) {
    series.push(currentNumber);
  }

  return series;
};

const isMultiple = function(factors, potentialMultiple) {
  const isAllDivisible = factors.every(function(factor) {
    return (potentialMultiple) % factor === 0;
  })

  return !isAllDivisible;
};

const lcm = function(numbers) {
  let max = Math.max(...numbers);
  let potentialLcm = max;

  while(isMultiple(numbers, potentialLcm)) {
    potentialLcm += max;
  }

  return potentialLcm;
};

const main = function() {
  const evens = generateEvenSet(1, 20);
  return lcm(evens);
};

main();
