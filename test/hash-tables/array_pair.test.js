'use strict';

const expect = require('chai').expect; // jshint ignore:line
const arrayPairSum = require('../../src/hash-tables/array_pair');

describe('arrayPairSum()', () => {
  it('should return pairs that equal the value', () => {
    expect(arrayPairSum(10, [3, 4, 5, 6, 7])).to.eql([[4, 6], [3, 7]]);
    expect(arrayPairSum(10, [3, 5, 6, 8])).to.eql([]);
  });
});
