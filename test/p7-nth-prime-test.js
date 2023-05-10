const {describe,it} = require('node:test');
const {strictEqual} = require('assert');
const {getPotentialPrimeOf, isPrime} = require('../src/p7-nth-prime.js');

describe('getPotentialPrimeOf', function() {
  it('should give 2 as first prime candidate', function(){
    strictEqual(getPotentialPrimeOf(1), 2);
  });

  it('should give 3 as second prime candidate', function(){
    strictEqual(getPotentialPrimeOf(2), 3);
  });

  it('should give 5 as third prime candidate', function(){
    strictEqual(getPotentialPrimeOf(3), 5);
  });
  
  it('should give 7 as fourth prime candidate', function(){
    strictEqual(getPotentialPrimeOf(4), 7);
  });
});

describe('isPrime', function() {
  it('should give true as 2 is a prime number', function() {
    strictEqual(isPrime(2), true);
  });
  
  it('should give true as 3 is a prime number', function() {
    strictEqual(isPrime(3), true);
  });
  
  it('should give false as 4 is a prime number', function() {
    strictEqual(isPrime(4), false);
  });
  
  it('should give false as 25 is a prime number', function() {
    strictEqual(isPrime(25), false);
  });
});

describe('')