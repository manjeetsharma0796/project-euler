const {strictEqual} = require('assert');
const {describe, it} = require('node:test');
const {add} = require('../add.js');

describe("testAdd", function() {
  it("Should add two numbers", function() {
    strictEqual(add(3, 2), 3);
  });

  it("Should add two numbers", function() {
    strictEqual(add(1, 2), 3);
  });
});
