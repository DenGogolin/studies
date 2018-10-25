module.exports = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	const hash = Array.from(str1).reduce((acc, x) => {
		if (acc[x]) acc[x] += 1;
		else acc[x] = 1;
		return acc;
	}, {});
	return Array.from(str2).reduce((acc, x) => {
		if (!hash[x]) {
			return false;
		}
		hash[x]--;
		return acc && true;
	}, true);
};
