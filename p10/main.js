const {sumOfPrime} = require('./src/sum-of-prime.js');

const main = () => {
  const  lowerLimit = 2;
  const upperLimit = 2000000;

  const {sum} = sumOfPrime(lowerLimit, upperLimit);

  console.log(sum);
}

main();