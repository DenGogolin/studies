module.exports = (matrix, cloclWise = true) => {
	const len = matrix.length;
	const n = len - 1;
	for (let i = 0; i < len / 2; i++) {
		for (let j = i; j < len - i - 1; j++) {
			const temp = matrix[i][j];
			if (cloclWise) {
				matrix[i][j] = matrix[n - j][i];
				matrix[n - j][i] = matrix[n - i][n - j];
				matrix[n - i][n - j] = matrix[j][n - i];
				matrix[j][n - i] = temp;
			} else {
				matrix[i][j] = matrix[j][n - i];
				matrix[j][n - i] = matrix[n - i][n - j];
				matrix[n - i][n - j] = matrix[n - j][i];
				matrix[n - j][i] = temp;
			}
		}
	}
	return matrix;
};
