var chai = require('chai');
var sinon = require('sinon');

var bfs = require('../../../src/trees/binary-trees/breadth_first_search.js');
var Bst = require('../../../src/trees/helper_files/tree.js');

var should = chai.should();

describe('breadth first search', () => {
  var bst;

  before('setting up the binary search tree', () => {
    bst = new Bst();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(1);
    bst.insert(7);
    bst.insert(12);
    bst.insert(17);
    bst.insert(0);
    bst.insert(3);
    bst.insert(6);
    bst.insert(8);
    bst.insert(11);
    bst.insert(13);
    bst.insert(16);
    bst.insert(18);
  });

  it('searching for 10 should succeed', () => {
    var isMatch = (data) => {return data === 10;};
    isMatch = sinon.spy(isMatch);

    bfs(bst.root, isMatch).data.should.be.equal(10);

    isMatch.callCount.should.be.equal(1);
    isMatch.calledWith(10).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(5).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(15).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(1).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(7).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(12).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(17).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(0).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(3).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(6).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(8).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(11).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(13).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(16).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(18).should.be.true; // jshint ignore:line
  });

  it('searching for 15 should succeed', () => {
    var isMatch = (data) => {return data === 15;};
    isMatch = sinon.spy(isMatch);

    bfs(bst.root, isMatch).data.should.be.equal(15);

    isMatch.callCount.should.be.equal(3);
    isMatch.calledWith(10).should.be.true; // jshint ignore:line
    isMatch.calledWith(5).should.be.true; // jshint ignore:line
    isMatch.calledWith(15).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(1).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(7).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(12).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(17).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(0).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(3).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(6).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(8).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(11).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(13).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(16).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(18).should.be.true; // jshint ignore:line
  });

  it('searching for 7 should succeed', () => {
    var isMatch = (data) => {return data === 7;};
    isMatch = sinon.spy(isMatch);

    bfs(bst.root, isMatch).data.should.be.equal(7);

    isMatch.callCount.should.be.equal(5);
    isMatch.calledWith(10).should.be.true; // jshint ignore:line
    isMatch.calledWith(5).should.be.true; // jshint ignore:line
    isMatch.calledWith(15).should.be.true; // jshint ignore:line
    isMatch.calledWith(1).should.be.true; // jshint ignore:line
    isMatch.calledWith(7).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(12).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(17).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(0).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(3).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(6).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(8).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(11).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(13).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(16).should.be.true; // jshint ignore:line
    isMatch.neverCalledWith(18).should.be.true; // jshint ignore:line
  });

  it('searching for 18 should succeed', () => {
    var isMatch = (data) => {return data === 18;};
    isMatch = sinon.spy(isMatch);

    bfs(bst.root, isMatch).data.should.be.equal(18);

    isMatch.callCount.should.be.equal(15);
    isMatch.calledWith(10).should.be.true; // jshint ignore:line
    isMatch.calledWith(5).should.be.true; // jshint ignore:line
    isMatch.calledWith(15).should.be.true; // jshint ignore:line
    isMatch.calledWith(1).should.be.true; // jshint ignore:line
    isMatch.calledWith(7).should.be.true; // jshint ignore:line
    isMatch.calledWith(12).should.be.true; // jshint ignore:line
    isMatch.calledWith(17).should.be.true; // jshint ignore:line
    isMatch.calledWith(0).should.be.true; // jshint ignore:line
    isMatch.calledWith(3).should.be.true; // jshint ignore:line
    isMatch.calledWith(6).should.be.true; // jshint ignore:line
    isMatch.calledWith(8).should.be.true; // jshint ignore:line
    isMatch.calledWith(11).should.be.true; // jshint ignore:line
    isMatch.calledWith(13).should.be.true; // jshint ignore:line
    isMatch.calledWith(16).should.be.true; // jshint ignore:line
    isMatch.calledWith(18).should.be.true; // jshint ignore:line
  });

  it('searching for 99 should fail', () => {
    var isMatch = (data) => {return data === 99;};
    isMatch = sinon.spy(isMatch);

    bfs(bst.root, isMatch).should.be.false; // jshint ignore:line

    isMatch.callCount.should.be.equal(15);
    isMatch.calledWith(10).should.be.true; // jshint ignore:line
    isMatch.calledWith(5).should.be.true; // jshint ignore:line
    isMatch.calledWith(15).should.be.true; // jshint ignore:line
    isMatch.calledWith(1).should.be.true; // jshint ignore:line
    isMatch.calledWith(7).should.be.true; // jshint ignore:line
    isMatch.calledWith(12).should.be.true; // jshint ignore:line
    isMatch.calledWith(17).should.be.true; // jshint ignore:line
    isMatch.calledWith(0).should.be.true; // jshint ignore:line
    isMatch.calledWith(3).should.be.true; // jshint ignore:line
    isMatch.calledWith(6).should.be.true; // jshint ignore:line
    isMatch.calledWith(8).should.be.true; // jshint ignore:line
    isMatch.calledWith(11).should.be.true; // jshint ignore:line
    isMatch.calledWith(13).should.be.true; // jshint ignore:line
    isMatch.calledWith(16).should.be.true; // jshint ignore:line
    isMatch.calledWith(18).should.be.true; // jshint ignore:line
  });
});
