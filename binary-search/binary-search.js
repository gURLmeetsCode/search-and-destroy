'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 0) {
		return false
	}
	let midpoint = array.length / 2
	if (midpoint === 0.5) {
		midpoint = 0;
	} else {
		midpoint = Math.round(midpoint);
	}
	const midpointValue = array[midpoint]

	if (target === midpointValue) {
		return true
	} else if (target < midpointValue) {
		return binarySearch(array.slice(0, midpoint), target)
	} else if (target > midpointValue){
		return binarySearch(array.slice(midpoint + 1), target)
	} else {
		return false
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

SOLUTION
	function binarySearch(array, target) {
		return binarySearchHelper(array, target, 0, array.length - 1)
	}


		function binarySearchHelper(array, target, left, right){


	//  base case
				if(left > right){
					return false
				}

			let midpoint = Math.floor((left + right) / 2)

	// second base case
				if(array[midpoint] === target){
					return true
				}
				else if(target > array[midpoint]){
				// 		the left is no longer worth looking into
				return binarySearchHelper(array, target, left = midpoint + 1, right)
				}
				else if(target < array[midpoint]){
				// 		the right is no longer worth looking into
				return binarySearchHelper(array, target, left, right = midpoint - 1)
				}
				else{
					return false
				}



	}


*/

module.exports = binarySearch
