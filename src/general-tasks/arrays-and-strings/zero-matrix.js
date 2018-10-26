module.exports = matrix => {
	const m = (matrix[0] && matrix[0].length) || 0;
	const emptyRow = Array.from({ length: m }).fill(0);
	const zeroCols = [];
	const zeroRows = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				zeroCols.push(j);
				zeroRows.push(i);
			}
		}
	}
	for (let i of zeroRows) {
		matrix[i] = emptyRow;
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j of zeroCols) {
			matrix[i][j] = 0;
		}
	}
	return matrix;
};
