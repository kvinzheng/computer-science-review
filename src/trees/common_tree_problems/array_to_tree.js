// You are given a non-null array of integers. Implement the method arrayToTree which creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

// For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

// 17
//  /  \
// 0   -4
// / \
// 3   15
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function arrayToTree(array) {
  let newArray = array;
  return insert(null, array, 0, array.length);
}

function insert(node, array, start, end) {

  if(start < end) {
    node = new TreeNode(array[start], null, null);
    node.left = insert(node.left, array, start * 2 + 1, end);
    node.right = insert(node.right, array, start * 2 + 2, end);
    return node;
  }
  return undefined;
}
module.exports = {
  arrayToTree,
  TreeNode
};
