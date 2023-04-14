const { NotImplementedError } = require('../extensions/index.js');

class Stack {

  constructor()
  {
    this.count = 0;
    this.values = [];
  }
  
  push(element) {
    this.values[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.count == 0){ return undefined;}
    else{
      this.count--;
      let temp = this.values[this.count];
      delete this.values[this.count];
      return temp;
    }
  }

  peek() {
    return this.values[this.count-1];
  }
}

module.exports = {
  Stack
};
