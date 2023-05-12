const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {read} = require('../src/adjacent-max-product.js');

describe('adjacent-max-product', function() {
  describe('read', function() {
    it('should give true', function() {
      strictEqual(read(), true);
    });
  });
});
