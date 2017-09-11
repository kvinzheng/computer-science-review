'use strict';

// http://visualgo.net/bst.html

function BinTree(node = null) {
  this.root = node;
}

function Node(value,left = null,right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

// NOTE - Duplicates are excluded in our tree!

BinTree.prototype.insertIteratively = function(value) {
  if (this.root === null) {
    this.root = new Node(value);
    return this;
  } else {
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = new Node(value);
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = new Node(value);
          return this;
        } else {
          current = current.right;
        }
      } else {
        return 'duplicate!';
      }
    }
  }
};

BinTree.prototype.insertRecursively = function(value,current) {
  
};

BinTree.prototype.containsIteratively = function(value) {

};

BinTree.prototype.containsRecursively = function(value,current) {

};

BinTree.prototype.breadthFirstSearch = function() {

};

// DEPTH FIRST SEARCH (Pre / In / Post Order)

// http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html

// HINT - you can evaluate a JS expression conditionally by adding a truthy / falsey statement and // then attaching a && along with the expression

// take a look at this code for an example

// function sayHi() {
//   return 'hey!'
// }

// what does true && sayHi() return?
// what about false && sayHi() return?

// visualizing the call stack using the chrome dev tools or just drawing it will help a lot with this!

BinTree.prototype.DFSPreOrder = function() {

};

BinTree.prototype.DFSInOrder = function() {

};

BinTree.prototype.DFSPostOrder = function() {

};

BinTree.prototype.size = function() {

};

BinTree.prototype.findLowest = function() {

};

BinTree.prototype.findHighest = function() {

};

// private helper method for remove
BinTree.prototype._countChildren = function(node) {

};

BinTree.prototype.remove = function(value) {

};

module.exports = {
  BinTree: BinTree,
  Node: Node
};
