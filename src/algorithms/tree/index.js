class Tree {
	constructor(head) {
		this.head = head;
	}

	get listsOfDepth() {
		const result = [];
		let queue = [this.head];

		while (queue.length) {
			const item = queue.shift();
			if (result[item.depth]) {
				result[item.depth].push(item.val);
			} else {
				result[item.depth] = [item.val];
			}
			if (item.nodes.length) {
				queue = queue.concat(item.nodes.filter(x => Boolean(x)));
			}
		}
		return result;
	}
}

class TreeNode {
	constructor(val, root, distance = 1) {
		this._nodes = [];
		this.val = val;
		this.root = root;
		this.dist = distance;
	}
	set nodes(node) {
		this._nodes.push(node);
	}

	get nodes() {
		return this._nodes;
	}

	get depth() {
		return (this.root && this.root.depth + 1) || 0;
	}

	get listsOfDepth() {
		const result = [];

		return result;
	}
}

module.exports = {
	Tree,
	TreeNode
};
