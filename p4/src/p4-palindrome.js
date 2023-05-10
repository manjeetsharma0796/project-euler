const IsPalindrome = function(text) {
  if (text.length === 1) {
    return true;
  };

  let indexStart = 0;
  let indexEnd = text.length - 1;

  for (let count = Math.floor(text.length / 2); count >= 1; indexStart++, indexEnd--, count--) {
    if (text[indexStart] !== text[indexEnd]) {
      return false;
    };
  };

  return true;
}

const largerstPalindromeProduct = function(largestNumber1, largestNumber2) {
  const palindromeSet = [];
  const digits = largestNumber1.toString().length - 1;

  for(let firstNumber = largestNumber1; firstNumber > 10 ** digits; firstNumber--) {
    for(let secondNumber = firstNumber; secondNumber > 10 ** digits; secondNumber--) {
      let number = firstNumber * secondNumber;

      if(IsPalindrome(number.toString())) {
        palindromeSet.push(number);
      }
    }
  }
  return palindromeSet.reduce(function(max, number) {
    if(max < number) {
      return number;
    }

    return max;
  }, 0);
};

console.log( largerstPalindromeProduct(9999, 9999));
