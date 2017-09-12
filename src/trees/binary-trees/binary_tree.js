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
  let startNode = current || this.root;

  if (startNode && value === startNode.value) {
    return 'duplicate!';
  }

  if(startNode === null){
    this.root = new Node(value);
    return this;
  } else {
      if(value < startNode.value) {
        if(startNode.left === null) {
          startNode.left = new Node(value);
          return this;
        }
        else {
          return this.insertRecursively(value, startNode.left)
        }
      }
      else if (value > startNode.value) {
        if(startNode.right === null) {
          startNode.right = new Node(value);
          return this;
        }
        else {
          return this.insertRecursively(value, startNode.right);
        }
      }
  }
};

BinTree.prototype.containsIteratively = function(value) {
  let current = this.root;
  let isFound = false;
  while(current && !isFound){
    if(current.value === value){
      return isFound = true;
    } else if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    }
  }

  return false;
};

BinTree.prototype.containsRecursively = function(value,current) {

  current = current || this.root;

  if(current.value === value) {
    return true;
  } else if (value < current.value) {
    if(current.left){
      return this.containsRecursively(value, current.left);
    } else {
      return false;
    }
  } else if (value > current.value) {
    if(current.right) {
      return this.containsRecursively(value, current.right);
    } else {
      return false;
    }
  }
};

BinTree.prototype.breadthFirstSearch = function() {
  let queue = [], data = []
  let current = this.root;
  queue.push(current);

  while(queue.length) {
    current = queue.shift();
    data.push(current.value);

    if(current.left) {
      queue.push(current.left);
    }
    if(current.right) {
      queue.push(current.right);
    }
  }
  return data;
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
  let data = [];
  let current = this.root;
  function traverse(node) {
    data.push(node.value);
    if(node.left) {
      traverse(node.left);
    }
    if(node.right) {
      traverse(node.right);
    }
  }

  traverse(current);
  return data;
};

BinTree.prototype.DFSInOrder = function() {
  let data = [];
  let current = this.root;
  function traverse(node) {
    if (node.left) {
      traverse(node.left)
    }
    data.push(node.value);
    if (node.right) {
      traverse(node.right);
    }
  }
  traverse(current);
  return data;
};

BinTree.prototype.DFSPostOrder = function() {
  let data = [];
  let current = this.root;
  function traverse(node) {
    if (node.left) {
      traverse(node.left);
    }
    if(node.right){
      traverse(node.right);
    }
    data.push(node.value);
  }
  traverse(current);
  return data;
};


BinTree.prototype.size = function() {
  return this.breadthFirstSearch().length;
};

BinTree.prototype.findLowest = function() {
  let current = this.root;
// this can be done with an IIFE + Ternary
  function search(node) {
    if(node.left){
      return search(node.left)
    } else {
      return node.value;
    }
  }
  return search(current);
};

BinTree.prototype.findHighest = function() {
  let current = this.root;
  function search(node) {
    if(node.right){
      return search(node.right);
    } else {
      return node.value;
    }
  }
  return search(current);
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
