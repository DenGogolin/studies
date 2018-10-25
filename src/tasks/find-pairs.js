module.exports = function findPairs(max, fl, sl) {
	const hash = {};

	for (let i = 0; i < fl.length; i++) {
		for (let j = 0; j < sl.length; j++) {
			const sum = fl[i][1] + sl[j][1];
			if (sum > max) {
				continue;
			} else {
				let newItem = [fl[i][0], sl[j][0]];
				if (hash[sum]) {
					hash[sum].push(newItem);
				} else {
					hash[sum] = [newItem];
				}
			}
		}
	}

	for (let k = max; k > 0; k--) {
		if (hash[k] && hash[k].length > 0) {
			return hash[k];
		}
	}

	return [];
};
