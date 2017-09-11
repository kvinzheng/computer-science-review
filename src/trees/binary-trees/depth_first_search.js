'use strict';

/*

Complete the depth first search algorithm below to pass the tests.

The dfs function takes in the root node, along with a callback function
that will determine if the node is a match. to use isMatch, call it with the nodes data. For example

isMatch(node.data)

This will return true if there is a match, and false if there isn't a match.

If you find the node, then return it. Otherwise return false.

Each node has the following data structure. The left and right keys can be a
object if there is a child in that direction, otherwise it will be undefined.

{
  data: 4,
  left: [object object],
  right: undefined
}
*/
// parameters node, isMatch callback
//    if node is a match, return true
//
//    if there is a left node
//        if DFS(left node, isMatch)
//            return true
//    if there is a right node
//        if DFS(right node, isMatch)
//            return true
//
//    no more children, return false
function dfs (node, isMatch) {

}

module.exports = dfs;
