const { Tree, TreeNode } = require("./index");

class BinaryTree extends Tree {
	static fromArray(arr) {
		return new BinaryTree(this._postOrder(arr, null));
	}

	static fromUnsortedArray(arr) {
		return this.fromArray(Array.from(new Set(arr.sort((a, b) => a - b))));
	}

	static _postOrder(arr, root) {
		if (arr.length) {
			const index = Math.floor(arr.length / 2);
			const item = new BinaryTreeNode(arr[index], root);
			item.left = this._postOrder(arr.slice(0, index), item);
			item.right = this._postOrder(arr.slice(index + 1), item);
			return item;
		}
		return null;
	}

	get isBST() {
		return this._isBst(
			this.head,
			Number.MIN_SAFE_INTEGER,
			Number.MAX_SAFE_INTEGER
		);
	}

	*[Symbol.iterator]() {
		yield *this._inOrderIterator(this.head);
	}

	*_inOrderIterator(item) {
		if (item) {
			if (item.left) yield *this._inOrderIterator(item.left);
			yield item.val;
			if (item.right) yield *this._inOrderIterator(item.right);
		}
	}

	toArray() {
		return Array.from(this[Symbol.iterator]());
	}

	_isBst(item, min, max) {
		return item
			? item.val > min &&
					item.val < max &&
					this._isBst(item.left, min, item.val) &&
					this._isBst(item.right, item.val, max)
			: true;
	}
}

class BinaryTreeNode extends TreeNode {
	constructor(val, root) {
		super(val, root);
		this.left = null;
		this.right = null;
	}

	get left() {
		return this.nodes[0];
	}

	set left(value) {
		this.nodes[0] = value;
	}

	get right() {
		return this.nodes[1];
	}

	set right(value) {
		this.nodes[1] = value;
	}
}

module.exports = {
	BinaryTree,
	BinaryTreeNode
};
