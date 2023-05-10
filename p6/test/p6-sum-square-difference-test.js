const {describe,it} = require('node:test');
const {strictEqual} = require('assert');
const {sumOfNumber,squareOfSum, sumOfSquare} = require('../src/p6-sum-square-difference.js');

describe('sumOfNumber', function() {
  it('Should give sum of first 2 natural number', function() {
    strictEqual(sumOfNumber(2), 3);
  });

  it('Should give sum of first 3 natural number', function() {
    strictEqual(sumOfNumber(3), 6);
  });

  describe('squareOfSum', function() {
    it('Should give square of sum of first two natural numbers', function() {
      strictEqual(squareOfSum(2), 9);
    });

    it('Should give square of sum of first three natural numbers', function() {
      strictEqual(squareOfSum(3), 36);
    });
  });
  describe('sumOfSquare', function() {
    it('Should give square of sum of first two natural numbers', function() {
      strictEqual(sumOfSquare(2), 5);
    });
  });
});
