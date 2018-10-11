const base = 10;
module.exports = function sum(str1, str2) {
    if (str1 === `0` && str2 === `0`) return `0`;
	const result = [],
		arr1 = str1.split("").reverse(),
		arr2 = str2.split("").reverse();

	let i = 0;
	while (i < arr1.length || i < arr2.length) {
		let newVal = result[i] || 0,
			n1 = parseInt(arr1[i]),
			n2 = parseInt(arr2[i]);
		if (n1) {
			newVal += n1;
		}
		if (n2) {
			newVal += n2;
		}
		let rem = newVal % base,
			next = (newVal - rem) / base;
		result[i] = rem;
		if (next) result[i + 1] = next;
		i++;
	}
	return result.reverse().join(``);
};
