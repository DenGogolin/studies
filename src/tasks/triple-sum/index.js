const binSearch = (arr, val) => {
	let s = 0;
	let e = arr.length - 1;
	while (s <= e) {
		const mid = Math.floor((s + e) / 2);
		if (arr[mid] > val) {
			e = mid - 1;
			if (!arr[e] || arr[e] <= val) return mid;
		} else {
			s = mid + 1;
			if (!arr[s] || arr[s] > val) return s;
		}
	}
	return 0;
};

const lineSearch = (arr, val) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] <= val) {
			return i + 1;
		}
	}
	return 0;
};

function tripleSum(a, b, c) {
	b = Array.from(new Set(b));
	a = Array.from(new Set(a)).sort((a, b) => a - b);
	c = Array.from(new Set(c)).sort((a, b) => a - b);
	let count = 0;
	for (let i = 0; i < b.length; i++) {
		const A = binSearch(a, b[i]);
		const C = binSearch(c, b[i]);
		count = count + A * C;
	}

	return count;
}

const naiveTripleSum = (a, b, c) => {
	let count = 0;
	for (let i = 0; i < b.length; i++) {
		for (let j = 0; j < a.length; j++) {
			for (let k = 0; k < c.length; k++) {
				if (c[k] <= b[i] && a[j] <= b[i]) {
					count++;
				}
			}
		}
	}
	return count;
};

module.exports = {
	tripleSum,
	naiveTripleSum
};
