const {describe,it} = require('node:test');
const {strictEqual} = require('assert')

const {sumOfMultiplesOf} = require('../src/sumOfMultiples');

describe('sum', function() {
  describe( 'sumOfMultitplesOf', function() {
    it('Should give sum of multiples of 2 under 3', function() {
      strictEqual(sumOfMultiplesOf(2, 3), 2);
    });
    
    it('Should give sum of multiples of 2 under 5', function() {
      strictEqual(sumOfMultiplesOf(2, 5), 6);
    });
  });
});