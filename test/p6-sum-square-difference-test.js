const {describe,it} = require('node:test');
const {strictEqual} = require('assert');
const {sumOfNumber,squareOfSum} = require('../src/p6-sum-square-difference.js');

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
  });
});
