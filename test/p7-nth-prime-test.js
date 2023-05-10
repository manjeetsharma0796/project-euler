const {describe,it} = require('node:test');
const {strictEqual} = require('assert');
const {getNthPrimeCandidate, isPrime} = require('../src/p7-nth-prime.js');

describe('getNthPrimeCandidate', function() {
  it('should give 2 as first prime candidate', function(){
    strictEqual(getNthPrimeCandidate(1), 2);
  })

  it('should give 3 as second prime candidate', function(){
    strictEqual(getNthPrimeCandidate(2), 3);
  })
  
  it('should give 5 as third prime candidate', function(){
    strictEqual(getNthPrimeCandidate(3), 5);
  })
})