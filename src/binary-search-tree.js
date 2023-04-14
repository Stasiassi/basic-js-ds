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
    function addValue(node,data)
    {
      if (!node){ return new Node(data);}
      if (node.data == data) {return node;}
      if (data < node.data) { node.left = addValue(node.left, data);}
      if (data > node.data) { node.right = addValue(node.right, data);}
      return node;
    }
  }


  has(data) {
    return searchValue(this.treeRoot, data);
    function searchValue(node, data)
    {
      if (!node){ return false;}
      if (node.data === data) {return true;}
      if (data < node.data) { return searchValue(node.left, data);}
      if (data > node.data) { return searchValue(node.right, data);}
    }
  }

  find(data) {
    return findValue(this.treeRoot, data);
    function findValue(node, data)
    {
      if (!node){ return null;}
      if (node.data === data) {return node;}
      if (data < node.data) { return findValue(node.left, data);}
      if (data > node.data) { return findValue(node.right, data);}
    }
  }

  remove(data) {
    this.treeRoot = removeValue(this.treeRoot, data);
    function removeValue(node,data)
    {
      if (!node){ return null;}
      if (data < node.data) { node.left = removeValue(node.left, data); return node;}
      else if (data > node.data) { node.right = removeValue(node.right, data); return node;}
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
        node.data = minFromRight.data;
        node.right = removeValue(node.right, minFromRight.data);
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
    return node.data;
  }

  max() {
    if(!this.treeRoot) {return null;}
    let node = this.treeRoot;
    while(node.right)
    {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};