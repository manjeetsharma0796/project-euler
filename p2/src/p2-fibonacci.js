const sumOfEvenFibonacci = function(under) {
  let sumOfEven = 0;
  let first = 1;
  let second = 2;

  while(first + second < under) {
    let current = first + second;

    if(current % 2 === 0) {
      sumOfEven += current;
    }

    first = second;
    second = current;
  }
  return sumOfEven + 2;
};

const sumOfunderGeneralTerms = function(number, underGeneralTerm) {
  const last = underGeneralTerm - 1 - (underGeneralTerm - 1) % number;
  const totalTerms = last / number;
  return totalTerms * (totalTerms + 1) * number / 2;
};
