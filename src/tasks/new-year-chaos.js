module.exports = function minimumBribes(q) {
	const fail = "Too chaotic";
	let count = 0;
	for (let i = q.length - 1; i >= 0; i--) {
		if (q[i] - i - 1 > 2) {

			return fail;
		}
		for (let j = i - 1; j > q[i] - 3; j--) {
			if (q[i] < q[j]) {
				count++;
			}
		}
	}

	return count;
};
