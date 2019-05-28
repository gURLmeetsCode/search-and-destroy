'use strict';

// Complete this algo
const minJumps = arr => {
  let count = 0

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[0]){
      count++
      if(arr[i] > arr.length - i){
        count++
        break
      }
    }
    else if(arr[0] > arr[i]){
      if(arr[0] > arr.length - i){
        count++
        break
      }
    }
    else if(arr[0] === arr.length - i){
      count = i
    }
  }
  return count
}

module.exports = minJumps
