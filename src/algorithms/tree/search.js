const depthFirstSearch = (tree, cb, root) => {
	if (typeof cb !== "function") {
		return;
	}
	const visited = {};
	const search = node => {
		if (!tree[node]) return null;
		cb(node);
		visited[node] = true;

		for (let i of tree[node]) {
			if (!visited[i]) {
				search(i, result);
			}
		}
	};
	search(root);
};

const breadthFirstSearch = (tree, cb, root) => {
	const visited = {};
	const queue = [root];
	
	visited[node] = true;
	while (queue.length) {
		const item = queue.pop();
		cb(item);
		for(let i of tree[item]) {
			if(!visited[i]) {
				visited[i] = true;
				queue.unshift(i);
			}
		}
	}
};

module.exports = {
	depthFirstSearch,
	breadthFirstSearch
};
