module.exports = (field, word) => {
	const check = (i, j, k) => {
		const equal = field[i] && field[i][j] === word[k];
		if (k < word.length - 1) {
			k++;
			return (
				equal &&
				(check(i + 1, j, k) ||
					check(i - 1, j, k) ||
					check(i, j - 1, k) ||
					check(i, j + 1, k))
			);
		}
		return equal;
	};
	for (let i = 0; i < field.length; i++) {
		for (let j = 0; j < field[i].length; j++) {
			if (check(i, j, 0)) {
				return true;
			}
		}
	}
	return false;
};
