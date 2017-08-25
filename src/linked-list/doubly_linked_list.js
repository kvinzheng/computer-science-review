function Node(val, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.push = function(val) {
  var newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
    this.length++;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  return this;
};

DoublyLinkedList.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  } else if (this.length === 1) {
    let deletedValue = this.head.val;
    this.head = null;
    this.tail = null;
    this.length--;
    return deletedValue;
  } else {
    let deletedValue = this.tail.val;
    let current = this.tail.prev;
    current.next = null;
    this.tail.prev = null;
    this.length--;
    return deletedValue;
  }
}

DoublyLinkedList.prototype.unshift = function(val) {
  let newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
}

DoublyLinkedList.prototype.shift = function(val) {
  let newNode = new Node(val);
  if (this.length === 1) {
    let deletedValue = this.head.val;
    this.head = null;
    this.tail = null;
    this.length--;
    return deletedValue;
  } else {
    let deletedValue = this.head.val;
    let nextNode = this.head.next;
    nextNode.prev = null;
    this.head.next = null;
    this.head = nextNode;
    this.length--;
    return deletedValue;
  }
}

DoublyLinkedList.prototype._getNodeAt = function(index) {
  let current;
  let mid = Math.floor(this.length / 2);

  if (index < mid) {
    current = this.head;
    for (let i = 0; i <= mid; i++) {
      if (i === index) {
        return current;
      }
      current = current.next;
    }
  } else {
    current = this.tail;
    for (let j = this.length - 1; j >= 0; j--) {
      if (j === index) {
        return current;
      }
      current = current.prev;
    }
  }

}

DoublyLinkedList.prototype.get = function(index) {
  if (index >= this.length) {
    return undefined;
  }
  let getIndex = this._getNodeAt(index);
  return getIndex.val;
}

DoublyLinkedList.prototype.set = function(index, val) {
  let getIndex = this._getNodeAt(index);
  getIndex.val = val;
}

DoublyLinkedList.prototype.insert = function(index, val){
  if(index < 0 || index > this.length) return undefined;

  if(index === 0) {
    return this.unshift(val);
  }
  else if(index === this.length) {
    return this.push(val);
  }
  else {
    let node = this._getNodeAt(index);
    let prevNode = node.prev;
    let newNode = new Node(val, node, prevNode);

    prevNode.next = newNode;
    node.prev = newNode;

    this.length ++;
    return this;
  }
}

DoublyLinkedList.prototype.remove = function (index){
  if(index === 0) return this.shift();
  if(index === this.length -1) return this.pop();

  let node = this._getNodeAt(index);
  if(node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
    node.prev = undefined;
    node.next = undefined;
    this.length --;
    return node.val;
  }
}
module.exports = DoublyLinkedList;
