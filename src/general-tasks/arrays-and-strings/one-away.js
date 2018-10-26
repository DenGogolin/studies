module.exports = (str1, str2) => {
	if (Math.abs(str1.length - str2.length) > 1) {
		return false;
	}
	if (str1 === str2) {
		return true;
	}
	let count = 0,
		j = 0;
	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[j]) {
			count++;
			if (str1[i] === str2[j + 1]) {
				j++;
			} else if (str1[i + 1] === str2[j]) {
				i++;
			}
		}
		j++;
	}
	return count < 2;
};
