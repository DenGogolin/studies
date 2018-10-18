module.exports = function quickSort(arr) {
	return _qsStep(arr, 0, arr.length - 1);
};

function _qsStep(arr, from, to) {
	if (from < to) {
		let temp = from;
		for (let i = from; i < to; i++) {
			if (arr[i] < arr[to]) {
				swapMut(arr, i, temp);
				temp++;
			}
		}
		swapMut(arr, to, temp);
		_qsStep(arr, from, temp - 1);
		_qsStep(arr, temp + 1, to);
	}
	return arr;
}

function swapMut(arr, i, j) {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
