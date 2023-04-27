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

const generateEvenSet = function(start, upto) {
  const evens = [];

  for(let potentialEven = start; potentialEven <= upto; potentialEven++) {
    if(potentialEven % 2 === 0) {
      evens.push(potentialEven);
    }
  }

  return evens;
};

const main = function() {
  const evens = generateEvenSet(1, 20);
  return lcm(evens);
};

main();
