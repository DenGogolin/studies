const fs = require("fs");

const getTreeNode = (tree, a, b) => {
	if (!tree[a]) {
		throw new Error("No root, improper tree");
	} else {
		tree[a].nodes.push(b);
		const depth = tree[a].depth + 1;
		if (!tree[b]) {
			tree[b] = {
				root: a,
				depth,
				value: b,
				nodes: []
			};
		} else if (tree[b].root) {
			throw new Error("Cannot have two roots");
		} else {
			tree[b].root = a;
			tree[b].depth = depth;
		}
	}
};


const getTree = (input, root = 1) => {
	const result = [];
	result[root] = {
		root: null,
		depth: 0,
		value: root,
		nodes: []
	};
	for (let i = 0; i < input.length; i++) {
		const pair = input[i].sort((a, b) => a - b);
		const left = pair[0];
		const right = pair[1];
		getTreeNode(result, left, right);
	}
	return result;
};

const buildIndex = (tree, item = 1, index = 0) => {
	const children = tree[item].nodes;
	if (children && children.length){
		for (let i = 0; i < children.length; i++) {
			index = buildIndex(tree, children[i], index);
		}
	}
	tree[item].id = index;
	return index + 1;
}
module.exports = {
	getTree
};
