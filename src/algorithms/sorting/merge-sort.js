const merge = (left, right) => {
	const result = [];
	let i = (j = 0);
	while (i < left.length && j < right.length) {
		result.push((left[i] < right[j] && left[i++]) || right[j++]);
	}
	return result.concat(left.slice(i)).concat(right.slice(j));
};

module.exports = function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};
