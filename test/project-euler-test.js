const {strictEqual} = require('assert');
const {describe, it} = require('node:test');
const {add} = require('../others/add.js');

describe("testAdd", function() {
  it("Should add two positive numbers", function() {
    strictEqual(add(3, 2), 5);
  });

  it("Should add two negative numbers", function() {
    strictEqual(add(-1, -2), -3);
  });
});
