const strToArr = str => (str && str.split("")) || [];

const withOutHash = arr => {
	arr.sort();
	return arr.reduce((acc, x, i, arr) => acc && x !== arr[i - 1], true);
};

const withHash = arr => {
	const hash = {};
	for (let a of arr) {
		if (hash[a]) {
			return false;
		}
		hash[a] = true;
	}
	return true;
};

module.exports = str => withOutHash(strToArr(str));
