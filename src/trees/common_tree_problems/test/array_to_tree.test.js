const { expect } = require('chai');
const { arrayToTree, TreeNode } = require('../array_to_tree.js');

describe("arrayToTree", function() {

  it("empty array", function() {
    var array = [];
    var expected = undefined;
    expect(arrayToTree(array)).to.equal(undefined);
  });

  it("array with multiple elements", function() {
    var array = [17, 0, -4, 3, 15];
    var expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
    expect(arrayToTree(array)).to.deep.equal(expected);
  });
});
