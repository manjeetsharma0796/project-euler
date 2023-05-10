const {getPrime} = require('./src/p7-nth-prime');

const main = function() {
  console.log(getPrime(10001), 'is the 10001st prime number');
}

main();