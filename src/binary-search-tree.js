const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addValue(this.treeRoot, data);
    function addValue(node,value)
    {
      if (!node){ return new Node(value);}
      if (node.value == value) {return node;}
      if (value < node.value) { node.left = addValue(node.left, value);}
      if (value > node.value) { node.right = addValue(node.right, value);}
      return node;
    }
  }


  has(data) {
    return searchValue(this.treeRoot, data);
    function searchValue(node, value)
    {
      if (!node){ return false;}
      if (node.value === value) {return true;}
      if (value < node.value) { return searchValue(node.left, value);}
      if (value > node.value) { return searchValue(node.right, value);}
    }
  }

  find(data) {
    return searchValue(this.treeRoot, data);
    function searchValue(node, value)
    {
      if (!node){ return null;}
      if (node.value === value) {return node;}
      if (value < node.value) { return searchValue(node.left, value);}
      if (value > node.value) { return searchValue(node.right, value);}
    }
  }

  remove(data) {
    this.treeRoot = removeValue(this.treeRoot, data);
    function removeValue(node,value)
    {
      if (!node){ return null;}
      if (value < node.value) { node.left = removeValue(node.left, value); return node;}
      else if (value > node.value) { node.right = removeValue(node.right, value); return node;}
      else 
      {
        if (!node.left && !node.right) {return null;}
        if (!node.left) {node = node.right; return node;}
        if (!node.right) {node = node.left; return node;}

        let minFromRight = node.right;
        while(minFromRight.left)
        {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;
        node.right = removeValue(node.right, minFromRight.value);
        return node;
      }
    }
  }

  min() {
    if(!this.treeRoot) {return null;}
    let node = this.treeRoot;
    while(node.left)
    {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if(!this.treeRoot) {return null;}
    let node = this.treeRoot;
    while(node.right)
    {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};