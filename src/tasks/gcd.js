module.exports = {
	getGCD,
	getGCDFromArray
};

function getGCDFromArray(arr) {
	arr.sort();
	let result = arr[0];
	for (let i = arr.length - 1; i > 0; i--) {
		result = getGCD(arr[i], result);
	}

	return result;
}

function getGCD(x, y) {
	if (!y) {
		return x;
	}

	return getGCD(y, x % y);
}
