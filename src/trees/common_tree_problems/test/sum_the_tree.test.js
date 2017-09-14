const { expect } = require('chai')
const sumTheTreeValues = require('../sum_the_tree.js');

describe('Simple test', function() {
  let simpleNode = {
    value: 10,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  };

  let unbalancedNode = {
    value: 11,
    left: {
      value: 0,
      left: null,
      right: null
    },
    right: {
      value: 0,
      left: null,
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  };

  it('it will sum all the children up', function() {
    expect(sumTheTreeValues(simpleNode)).to.equal(13);
  });

  it('it will handle unbalance trees', function() {
    expect(sumTheTreeValues(unbalancedNode)).to.equal(12);
  });
});
