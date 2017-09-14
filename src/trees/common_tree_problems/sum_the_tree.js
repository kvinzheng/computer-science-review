//Given a node object representing a binary tree:
//Node:
// value: <int>,
// left: <Node> or null,
// right: <Node> or null

// 10
// | \
// 1  2
// => 13
//
// 1
// | \
// 0  0
//     \
//      2
// => 3

function sum_the_tree(node) {
  let current = node;
  let sum = 0;
  let queue = [];
  queue.push(current);

  while (queue.length > 0) {
    let current = queue.shift();
    sum += current.value;

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return sum;
}

module.exports = sum_the_tree;
