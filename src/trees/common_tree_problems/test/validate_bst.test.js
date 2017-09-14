const {expect} = require('chai');
const isValidBST = require('../validate_bst.js');

function Node(val = null, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function BST(node) {
  this.root = node;
}

describe("validate bst", function() {

  let lvl2d = new Node(7, null, null);
  let lvl2c = new Node(6, null, null);
  let lvl2b = new Node(5, null, null);
  let lvl2a = new Node(4, null, null);
  let right = new Node(3, lvl2c, lvl2d);
  let left = new Node(2, lvl2a, lvl2b);
  let rootNode = new Node(1, left, right);
  let tree = new BST(rootNode);
  console.log('tree=', tree);
  it("this is a validate bst ", function() {
    expect(isValidBST(tree)).to.equal(true);
  });
});
