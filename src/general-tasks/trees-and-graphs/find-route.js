const findRoute = (tree, start, end) => {
	const visited = {};
	const queue = [start];

	visited[start] = true;
	while (queue.length) {
		const item = queue.pop();
		if (tree[item].indexOf(end) > -1) {
			return true;
		} else {
			for (let i of tree[item]) {
				if (!visited[i]) {
					queue.unshift(i);
					visited[i] = true;
				}
			}
		}
	}
	return false;
};

module.exports = {
	findRoute
};
