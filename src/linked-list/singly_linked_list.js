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

SinglyLinkedList.prototype.shift = function (){
  if (this.length === 0) {
    return 0;
  }

  if(this.length >= 1) {
    let temp = this.head;
    this.head = this.head.next;
    temp.next =  null;
    this.length-- ;
    return temp.val;
  }
}

SinglyLinkedList.prototype.get = function(index){
  if(index >= this.length){ return undefined; }
  let getIndex = this._getNodeAt(index);

  return getIndex.val;
}

SinglyLinkedList.prototype.remove = function(index){
  if(!this.head) {
    return undefined;
  }
  if(this.length === 1){
    let value = this.head.val;
    this.head = null;
    this.tail = null;
    this.length = 0 ;
    return value;
  }
  let removedValue = this._getNodeAt(index);
  let previousValue = this._getNodeAt(index-1);
  let value = removedValue.val;
  previousValue.next = removedValue.next;
  removedValue.next= null;
  this.length--;
  return value;
}

SinglyLinkedList.prototype.reverse = function () {
  let next;
  let current = this.head;
  let previous = null;

  while(current){
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
};



module.exports = SinglyLinkedList;
