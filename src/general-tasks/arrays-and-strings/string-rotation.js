module.exports = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	if (str1 === str2) {
		return true;
	}
	let char = str1[0];
	let difIndex = 0;
	let j = 0;
	for (let i = 0; i < str2.length; i++) {
		if (str2[i] === char) {
			difIndex = i;
			j += 1;
		} else {
			difIndex = 0;
			j = 0;
		}
		char = str1[j];
	}
	if (!difIndex) {
		return false;
	}

	return isSubstring(str1, str2.substr(0, difIndex));
};

function isSubstring(str, substring) {
	let char = substring[0],
		j = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			j += 1;
		} else {
			j = 0;
		}
		char = substring[j];
	}

	return j === substring.length;
}
