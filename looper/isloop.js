'use strict';

//Complete this algo
const isLoop = (linkedlist) => {

const refArray = []
let bool = false
let currNode = linkedlist.head

  while(!bool){
    if(!currNode.next){
      break;
    }
    if(refArray.includes(currNode.value)){
      bool = true
    }
    else{
      refArray.push(currNode.value)
      currNode = currNode.next
    }
  }

return bool

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
