'use strict';

var expect = require('chai').expect;
var largestElement = require('../../src/hash-tables/kth_largest_element');

describe('largestElement()', () => {
  it('should return the kth largest element', () => {
    expect(largestElement(2, [3, 5, 6, 8])).to.eql(5);
    expect(largestElement(3, [3, 1, 2, 1, 4])).to.eql(2);
  });
});
