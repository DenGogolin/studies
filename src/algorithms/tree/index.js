class Tree {
	constructor(head) {
		this.head = head;
	}

	findByValue(value) {
		const visited = {};
		const queue = [this.head];

		visited[this.head.value] = true;
		while (queue.length) {
			const item = queue.pop();
			if(item.value === value) {
				return item;
			}
			for (let i of item.nodes) {
				if (!visited[i]) {
					visited[i] = true;
					queue.unshift(i);
				}
			}
		}
	}


}

class TreeNode {
	constructor(value, parent) {
		this._nodes = [];
		this.value = value;
		this._depth = 0;
		this.parent = parent;
	}
	pushNode(node) {
		this._nodes.push(node);
	}

	set nodes(value) {
		this._nodes = value;
	}

	get nodes() {
		return this._nodes;
	}

	set depth(value) {
		this._depth = value;
	}

	get depth() {
		return this._depth;
	}
}

module.exports = {
	Tree, 
	TreeNode
};
