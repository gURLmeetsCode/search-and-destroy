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
		console.log("false")
		return false
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch