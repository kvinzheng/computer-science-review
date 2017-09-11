'use strict';

class Node {
  constructor(left, right, value){
    this.left = left;
    this.right = right;
    this.value = value;
  }
  show(){
    return this.data;
  }
}

module.exports = Node;
