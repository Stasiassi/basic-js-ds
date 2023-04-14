const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor()
  {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.length) 
    {
      (this.tail).next = node;
      this.tail = node;
    } 
    else 
    {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp.value;
  }
}


module.exports = {
  Queue
};
