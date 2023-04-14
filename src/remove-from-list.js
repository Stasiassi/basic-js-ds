const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(l, k) {
  while(l.value == k){ l = l.next;}
  thisNode = l;
  nextNode = thisNode.next;
  while(nextNode != null)
  {
    if(nextNode.value == k)
    {
      if(thisNode!=null && nextNode.next != null)
      {
        if(nextNode.value == (nextNode.next).value) { thisNode.next =  (nextNode.next).next; }
        else{ thisNode.next = nextNode.next; } 
      }
      else 
      {
        thisNode.next = null;
        nextNode = null;
        break;
      }
    }
    thisNode = thisNode.next;
    nextNode = thisNode.next;       
  }
  return l;
}

module.exports = {
  removeKFromList
};
