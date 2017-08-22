'use strict';

const expect = require('chai').expect; // jshint ignore:line
const lib = require('../../src/recursion/recursion');

describe('factorial', function(){
  it('currectly handled the base case', function(){
    expect(lib.factorial(0)).to.equal(1);
  });
  it('correctly computed 1! = 1', function(){
    expect(lib.factorial(1)).to.equal(1);
  })
})
