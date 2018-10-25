module.exports = str => {
	const arr = [];
	let char = null;
	for (let i = 0; i < str.length; i++) {
		if (char !== str[i]) {
			char = str[i];
			arr.push({ char, count: 1 });
		} else {
			arr[arr.length - 1].count += 1;
		}
	}
	if (arr.length * 2 >= str.length) {
		return str;
	} else {
		let result = "";
		for (let j = 0; j < arr.length; j++) {
			result += arr[j].char + arr[j].count;
		}
		return result;
	}
};
