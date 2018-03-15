const base = 10;
module.exports = function multiply(str1, str2) {
	const result = [];
	if (str1 === `0` || str2 === `0`) return `0`;
	for (let i = str1.length - 1; i >= 0; i--) {
		for (let j = str2.length - 1; j >= 0; j--) {
			const index = str1.length + str2.length - i - j - 2,
				oldVal = result[index] || 0,
				newVal = parseInt(str1[i]) * parseInt(str2[j]) + oldVal,
				rem = newVal % base,
				next = (newVal - rem) / base + (result[index + 1] || 0);
			result[index] = rem;
			if (next) result[index + 1] = next;
		}
	}
	return result.reverse().join(``);
};
