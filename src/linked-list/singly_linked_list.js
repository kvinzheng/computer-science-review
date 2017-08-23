function Node(val, next=null){
  this.val = val;
  this.next = next;
}

function SinglyLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.push = function(val){
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length += 1;
  return this
}

SinglyLinkedList.prototype._getNodeAt = function(index){
  let currentNode = this.head;
  let count = 0 ;
  while( count < index){
    currentNode = currentNode.next;
    count += 1;
  }
  return currentNode;
}
SinglyLinkedList.prototype.pop = function() {
  if (!this.head) {
    return undefined;
  }

  let returnValue = this.tail.val;

  if(this.length === 1) {
    this.length = 0 ;
    this.tail = null;
    this.head = null;
    return returnValue;
  }

  let current = this._getNodeAt(this.length - 2);

  current.next = null;
  this.tail = current;
  this.length--;
  return returnValue;

}

SinglyLinkedList.prototype.clear = function (){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

module.exports = SinglyLinkedList;
